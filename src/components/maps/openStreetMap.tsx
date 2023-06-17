import MapView, {
  BoundingBox,
  LatLng,
  Marker,
  Region,
  UrlTile,
} from '@splicer97/react-native-osmdroid';
import React from 'react';
import {Text} from 'react-native';

import {color} from '../../theme/color-palette';
import {setMarkerImage} from '../../utils/setMarkerImage';
import {Icon} from '../icon/ticon';
import {styles} from './styles';
import {useMap} from './useMap';
import {UserLocationButton} from './userLocationButton';

export const OpenStreetMap: React.FC<{
  setCurrentMapCoords: React.Dispatch<React.SetStateAction<LatLng | undefined>>;
  initialRegion: Region;
  setBoundingBox: (
    value: React.SetStateAction<BoundingBox | undefined>,
  ) => void;
  userLocation: LatLng;
  markersData: any[];
}> = ({
  initialRegion,
  setBoundingBox,
  userLocation,
  markersData,
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
        moveOnMarkerPress
        minZoomLevel={12}
        maxZoomLevel={23}
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
        onRegionChangeComplete={async () => {
          const mapBoundaries = await mapRef.current?.getMapBoundaries();
          const currentMapCamera = await mapRef.current?.getCamera();
          const currentMapCoords = currentMapCamera?.center;
          setCurrentMapCoords(currentMapCoords);
          setBoundingBox(mapBoundaries);
        }}>
        <UrlTile urlTemplate={maptiler} />
        <Marker
          coordinate={{
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
          }}>
          <Icon name={'pin'} size={36} color={color.Blue} />
        </Marker>
        {markersData?.length > 1 ? (
          markersData.map((marker, index) => (
            <Marker
              tracksViewChanges={tracksViewChanges}
              key={marker?.tile + index}
              onPress={async event => {
                setTracksViewChanges(true);
                event.stopPropagation();
                setActiveMarker(marker?.tile);
              }}
              coordinate={setCoordinates(marker)}
              image={setMarkerImage(
                marker?.multy ? 'cluster' : marker?.card_type,
                activeMarker === marker?.tile,
              )}
            />
          ))
        ) : (
          <>
            {markersData?.length ? (
              <Marker
                tracksViewChanges={tracksViewChanges}
                onPress={async event => {
                  setTracksViewChanges(true);
                  event.stopPropagation();
                  setActiveMarker(markersData[0].tile);
                }}
                coordinate={setCoordinates(markersData[0])}
                image={setMarkerImage(
                  markersData?.[0].multy
                    ? 'cluster'
                    : markersData?.[0]?.card_type,
                  activeMarker === markersData?.[0].tile,
                )}
              />
            ) : (
              <></>
            )}
            <Marker
              coordinate={{
                latitude: 0,
                longitude: 0,
              }}>
              <Text />
            </Marker>
          </>
        )}
      </MapView.Animated>
    </>
  );
};
