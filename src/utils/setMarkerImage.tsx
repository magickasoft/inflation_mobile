export const setMarkerImage = (type: string, active: boolean): number => {
  const markerCluster = require('../../assets/images/markers/markerCluster.png');
  const markerClusterActive = require('../../assets/images/markers/markerClusterActive.png');
  const markerRestaurant = require('../../assets/images/markers/markerRestaurant.png');
  const markerRestaurantActive = require('../../assets/images/markers/markerRestaurantActive.png');
  const markerAccommodation = require('../../assets/images/markers/markerAccommodation.png');
  const markerAccommodationActive = require('../../assets/images/markers/markerAccommodationActive.png');
  const markerActivity = require('../../assets/images/markers/markerActivity.png');
  const markerActivityActive = require('../../assets/images/markers/markerActivityActive.png');
  const markerAttraction = require('../../assets/images/markers/markerAttraction.png');
  const markerAttractionActive = require('../../assets/images/markers/markerAttractionActive.png');
  const markerPublic_place = require('../../assets/images/markers/markerPublic_place.png');
  const markerPublic_placeActive = require('../../assets/images/markers/markerPublic_placeActive.png');
  switch (type) {
    case 'restaurant':
      if (active) {
        return markerRestaurantActive;
      }
      return markerRestaurant;
    case 'public_place':
      if (active) {
        return markerPublic_placeActive;
      }
      return markerPublic_place;
    case 'accommodation':
      if (active) {
        return markerAccommodationActive;
      }
      return markerAccommodation;
    case 'attraction':
      if (active) {
        return markerAttractionActive;
      }
      return markerAttraction;
    case 'activity':
      if (active) {
        return markerActivityActive;
      }
      return markerActivity;
    case 'cluster':
      if (active) {
        return markerClusterActive;
      }
      return markerCluster;
    default:
      if (active) {
        return markerClusterActive;
      }
      return markerCluster;
  }
};
