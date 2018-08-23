import Store from '../store/metro';

export const initialState = Store;

export default function metroReducer(state = initialState, action) {
  switch (action.type) {
    case 'METRO_ERROR': {
      return {
        ...state,
        error: action.data,
      };
    }
    case 'METROELEMENTS_REPLACE': {
      let metroElements = [];

      // Pick out the props I need
      if (action.data && typeof action.data === 'object') {
        metroElements = action.data.map(item => ({
          id: item.id,
          route: item.vehicle.trip.route_id,
          latitude: item.vehicle.position.latitude,
          longitude: item.vehicle.position.longitude,
          speed: item.vehicle.position.speed,
          bearing: item.vehicle.position.bearing,
          licensePlate: item.vehicle.vehicle.license_plate,
          timestamp: item.timestamp,
        }));
      }

      return {
        ...state,
        error: null,
        loading: false,
        metroElements,
      };
    }
    default:
      return state;
  }
}
