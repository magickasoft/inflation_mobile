import React from 'react';
import {Image} from 'react-native';
import MapView, {
  BoundingBox,
  LatLng,
  Marker,
  Region,
  UrlTile,
} from 'react-native-maps';

import {Deltas} from '../../screens/map.screen';
import {color} from '../../theme/color-palette';
import {setMarkerImage} from '../../utils/setMarkerImage';
import {Icon} from '../icon/ticon';
import {styles} from './styles';
import {useMap} from './useMap';
import {UserLocationButton} from './userLocationButton';

export const AppleMap: React.FC<{
  setCurrentMapCoords: React.Dispatch<React.SetStateAction<LatLng | undefined>>;
  initialRegion: Region;
  setBoundingBox: (
    value: React.SetStateAction<BoundingBox | undefined>,
  ) => void;
  userLocation: LatLng;
  markersData: any[];
  deltas: Deltas;
  setDeltas: React.Dispatch<React.SetStateAction<Deltas>>;
}> = ({
  initialRegion,
  setBoundingBox,
  userLocation,
  markersData,
  deltas,
  setDeltas,
  setCurrentMapCoords,
}) => {
  const {maptiler, activeMarker, toUserDelta, setActiveMarker, setCoordinates} =
    useMap();
  const mapRef = React.useRef<MapView>();
  const [tracksViewChanges, setTracksViewChanges] = React.useState(false);
  const goToUserLocation = () => {
    mapRef.current?.animateToRegion(
      {
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        latitudeDelta: toUserDelta,
        longitudeDelta: toUserDelta,
      },
      500,
    );
  };

  return (
    <>
      <UserLocationButton
        onPress={goToUserLocation}
        bottom={50}
        right={30}
        size={50}
        radius={25}
        iconSize={30}
      />
      <MapView.Animated
        minZoomLevel={5}
        maxZoomLevel={19}
        userInterfaceStyle={'light'}
        mapType="none"
        onMapReady={async () => {
          const mapBoundaries = await mapRef.current?.getMapBoundaries();
          const currentMapCamera = await mapRef.current?.getCamera();
          const currentMapCoords = currentMapCamera?.center;
          setCurrentMapCoords(currentMapCoords);
          setBoundingBox(mapBoundaries);
        }}
        onPress={() => {}}
        ref={mapRef}
        style={styles.map}
        region={initialRegion}
        onRegionChange={() => {
          setTracksViewChanges(false);
        }}
        onRegionChangeComplete={async region => {
          const mapBoundaries = await mapRef.current?.getMapBoundaries();
          const currentMapCamera = await mapRef.current?.getCamera();
          const currentMapCoords = currentMapCamera?.center;
          setCurrentMapCoords(currentMapCoords);
          setBoundingBox(mapBoundaries);
          setDeltas({
            longitudeDelta: region.longitudeDelta,
            latitudeDelta: region.latitudeDelta,
          });
        }}>
        <UrlTile
          shouldReplaceMapContent={true}
          urlTemplate={maptiler}
          zIndex={-1}
        />
        <Marker
          coordinate={{
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
          }}>
          <Icon name={'pin'} size={36} color={color.Blue} />
        </Marker>
        {markersData.map(marker => (
          <Marker
            tracksViewChanges={tracksViewChanges}
            key={marker.tile}
            onPress={async event => {
              setTracksViewChanges(true);
              event.stopPropagation();
              setActiveMarker(marker.tile);
              mapRef.current?.animateToRegion(
                {
                  latitude: marker?.lat,
                  longitude: marker?.lng,
                  ...deltas,
                },
                500,
              );
            }}
            coordinate={setCoordinates(marker)}>
            <Image
              source={setMarkerImage(
                marker.multy ? 'cluster' : marker?.card_type,
                activeMarker === marker.tile,
              )}
              style={{width: 78, height: 89}}
            />
          </Marker>
        ))}
      </MapView.Animated>
    </>
  );
};
