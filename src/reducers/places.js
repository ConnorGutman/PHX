import Store from '../store/places';

export const initialState = Store;

export default function placesReducer(state = initialState, action) {
  switch (action.type) {
    case 'PLACES_ERROR': {
      return {
        ...state,
        error: action.data,
      };
    }
    case 'PLACESELEMENTS_REPLACE': {
      let placesElements = [];

      // Pick out the props I need
      if (action.data && typeof action.data === 'object') {
        placesElements = action.data.map(item => ({
          id: item.id,
          route: item.vehicle.trip.route_id,
          latitude: item.vehicle.position.latitude,
          longitude: item.vehicle.position.longitude,
          speed: item.speed,
          bearing: item.vehicle.position.bearing,
          licensePlate: item.licensePlate,
          timestamp: item.timestamp,
        }));
      }

      return {
        ...state,
        error: null,
        loading: false,
        placesElements,
      };
    }
    default:
      return state;
  }
}
