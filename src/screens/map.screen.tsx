import {useIsFocused} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import styled from 'styled-components/native';

import {AppleMap} from '../components/maps/appleMap';
import {MapBadges} from '../components/maps/mapBadges';
import {OpenStreetMap} from '../components/maps/openStreetMap';
import {AppStackParamList} from '../navigation/AppNavigator';
import {color, DefaultThemeScheme} from '../theme';
import {
  checkPermission,
  LOCATION,
  permissions,
} from '../utils/permissionsService';
import {isIOS} from '../utils/ui';

type MapScreenProps = StackScreenProps<AppStackParamList, 'Map'>;

const Container = styled.View<{
  theme: DefaultThemeScheme;
}>`
  flex: 1;
  background-color: ${color.White};
`;

export type Deltas = {
  longitudeDelta: number;
  latitudeDelta: number;
};

const initialPosition = {
  latitude: 55.75222,
  longitude: 37.61556,
};

const markersData: any = [
  {
    card_id: 'f60a9ab0-6000-11ed-af5f-e4cde49c8cfa',
    card_type: undefined,
    lat: 54.946146,
    lng: 82.951664,
    multy: true,
    tile: '870bb0308ffffff',
  },
  {
    card_id: '4c0f7a70-6001-11ed-a7c2-d51aeafadf98',
    card_type: undefined,
    lat: 55.04617,
    lng: 82.913899,
    multy: true,
    tile: '870bb0344ffffff',
  },
  {
    card_id: '9bb2f0b0-6002-11ed-9b85-c279fcd337b5',
    card_type: undefined,
    lat: 54.977628,
    lng: 82.89025,
    multy: true,
    tile: '870bb0376ffffff',
  },
  {
    card_id: 'e5dca8e0-6005-11ed-ad31-fb31aa475dac',
    card_type: 'attraction',
    lat: 54.924,
    lng: 82.985853,
    multy: false,
    tile: '870bb030affffff',
  },
  {
    card_id: '4f3b6500-600c-11ed-8855-b147b3c9a40c',
    card_type: undefined,
    lat: 55.069011,
    lng: 82.921798,
    multy: true,
    tile: '870bb0345ffffff',
  },
  {
    card_id: '7a8a1160-6012-11ed-84f9-49cc3bca6641',
    card_type: undefined,
    lat: 55.007587,
    lng: 82.936752,
    multy: true,
    tile: '870bb0373ffffff',
  },
  {
    card_id: '4d514410-6013-11ed-87c6-161a33f2a3a6',
    card_type: undefined,
    lat: 55.05327,
    lng: 82.952566,
    multy: true,
    tile: '870bb0340ffffff',
  },
  {
    card_id: 'a8a64ac0-601a-11ed-bc3c-bedbd51810bc',
    card_type: undefined,
    lat: 55.039058,
    lng: 82.87524,
    multy: true,
    tile: '870bb0362ffffff',
  },
  {
    card_id: 'c5c9d700-6021-11ed-a1df-d544f860f03e',
    card_type: 'attraction',
    lat: 54.96209,
    lng: 82.889717,
    multy: false,
    tile: '870bb032bffffff',
  },
  {
    card_id: 'd68058c0-6027-11ed-8f25-245538c75dfd',
    card_type: undefined,
    lat: 54.939036,
    lng: 82.91309,
    multy: true,
    tile: '870bb030cffffff',
  },
  {
    card_id: 'ac900a40-6029-11ed-95b4-12a8e14e64ea',
    card_type: undefined,
    lat: 54.970501,
    lng: 82.851652,
    multy: true,
    tile: '870bb0329ffffff',
  },
  {
    card_id: '9936a540-6032-11ed-ad43-7b9b7f492262',
    card_type: undefined,
    lat: 55.060355,
    lng: 82.991241,
    multy: true,
    tile: '870bb0343ffffff',
  },
  {
    card_id: 'd492cdb0-6034-11ed-848c-975bfc4bfe0b',
    card_type: undefined,
    lat: 55.023327,
    lng: 82.906008,
    multy: true,
    tile: '870bb0371ffffff',
  },
  {
    card_id: '3ae27510-603b-11ed-b614-248834b087d2',
    card_type: undefined,
    lat: 55.03043,
    lng: 82.944655,
    multy: true,
    tile: '870bb0346ffffff',
  },
  {
    card_id: '89e25850-603c-11ed-a52f-8de77af40d7c',
    card_type: undefined,
    lat: 54.984741,
    lng: 82.928857,
    multy: true,
    tile: '870bb0372ffffff',
  },
  {
    card_id: 'dd6dd3a0-603c-11ed-b1e2-10dfc6c454bb',
    card_type: undefined,
    lat: 55.076105,
    lng: 82.960485,
    multy: true,
    tile: '870bb0341ffffff',
  },
  {
    card_id: 'f0842fa0-6048-11ed-881c-3cbb9fad1736',
    card_type: undefined,
    lat: 54.96189,
    lng: 82.920969,
    multy: true,
    tile: '870bb030dffffff',
  },
  {
    card_id: 'ffb8b5f0-60f6-11ed-86fd-e22f1f9564dc',
    card_type: undefined,
    lat: 54.993357,
    lng: 82.859507,
    multy: true,
    tile: '870bb0374ffffff',
  },
  {
    card_id: '7a7dc890-6113-11ed-a8dd-3844ba73ce0e',
    card_type: 'attraction',
    lat: 54.912437,
    lng: 82.835015,
    multy: false,
    tile: '870bb0323ffffff',
  },
  {
    card_id: 'c2633c70-611e-11ed-9f43-3093bcccb9bb',
    card_type: undefined,
    lat: 54.968995,
    lng: 82.959564,
    multy: true,
    tile: '870bb0309ffffff',
  },
  {
    card_id: '31888cc0-6194-11ed-b13d-27bdb5c72579',
    card_type: undefined,
    lat: 55.061903,
    lng: 82.883119,
    multy: true,
    tile: '870bb0363ffffff',
  },
  {
    card_id: 'a57d65e0-64cf-11ed-960e-e684df27842f',
    card_type: 'attraction',
    lat: 54.914046,
    lng: 82.980334,
    multy: false,
    tile: '870bb031dffffff',
  },
  {
    card_id: '6fd5dd70-64d2-11ed-bda6-d8df6be4e482',
    card_type: undefined,
    lat: 54.986222,
    lng: 82.820896,
    multy: true,
    tile: '870bb0adaffffff',
  },
  {
    card_id: 'dcce1a60-64e0-11ed-af53-bbe815757e2b',
    card_type: undefined,
    lat: 54.991841,
    lng: 82.967471,
    multy: true,
    tile: '870bb0354ffffff',
  },
  {
    card_id: 'd20b9420-64f6-11ed-962c-742ff12625e1',
    card_type: undefined,
    lat: 55.037521,
    lng: 82.98331,
    multy: true,
    tile: '870bb0342ffffff',
  },
  {
    card_id: 'e45396b0-673e-11ed-a1bf-69cc2f9407de',
    card_type: 'attraction',
    lat: 54.950564,
    lng: 82.828662,
    multy: false,
    tile: '870bb0328ffffff',
  },
  {
    card_id: 'dac05d80-67a8-11ed-8194-8b9f8f264b29',
    card_type: 'attraction',
    lat: 55.027725,
    lng: 82.859924,
    multy: false,
    tile: '870bb0375ffffff',
  },
  {
    card_id: 'f2cff160-67bc-11ed-81f9-6e152536476b',
    card_type: 'attraction',
    lat: 55.02285,
    lng: 82.971256,
    multy: false,
    tile: '870bb0355ffffff',
  },
];

export const MapScreen: React.FC<MapScreenProps> = () => {
  const isFocused = useIsFocused();
  const [userLocation, setUserLocation] = React.useState<any>(initialPosition);
  const [boundingBox, setBoundingBox] = React.useState<any>();
  const [currentMapCoords, setCurrentMapCoords] = React.useState<any>();
  const [deltas, setDeltas] = React.useState<Deltas>({
    longitudeDelta: 1,
    latitudeDelta: 1,
  });
  console.log('--->', boundingBox, currentMapCoords);

  const initialRegion = {
    latitude: userLocation.latitude,
    longitude: userLocation.longitude,
    latitudeDelta: 0.5,
    longitudeDelta: 0.5,
  };

  React.useEffect(() => {
    if (isFocused) {
      checkPermission(permissions[LOCATION]).then(() => {
        Geolocation.getCurrentPosition(
          position => {
            setUserLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          error => {
            console.log(error.code, error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      });
    }
  }, [isFocused]);

  return (
    <Container>
      <View
        style={{
          flex: 1,
          overflow: 'hidden',
          backgroundColor: '#fff',
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          shadowColor: '#116FA4',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          zIndex: 100,
          shadowOpacity: 0.6,
          shadowRadius: 5.62,
          elevation: 7,
        }}>
        <MapBadges />
        {isIOS ? (
          <AppleMap
            initialRegion={initialRegion}
            setBoundingBox={setBoundingBox}
            userLocation={userLocation}
            markersData={markersData}
            deltas={deltas}
            setDeltas={setDeltas}
            setCurrentMapCoords={setCurrentMapCoords}
          />
        ) : (
          <OpenStreetMap
            initialRegion={initialRegion}
            setBoundingBox={setBoundingBox}
            userLocation={userLocation}
            markersData={markersData}
            setCurrentMapCoords={setCurrentMapCoords}
          />
        )}
      </View>
    </Container>
  );
};
