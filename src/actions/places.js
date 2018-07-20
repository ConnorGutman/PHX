import { Firebase, FirebaseRef } from '../lib/firebase';

/**
  * Set an Error Message
  */
export function setError(message) {
  return dispatch => new Promise(resolve => resolve(dispatch({
    type: 'PLACES_ERROR',
    data: message,
  })));
}

/**
  * Get Places Elements
  */
export function getPlacesElements() {
  if (Firebase === null) return () => new Promise(resolve => resolve());

  return dispatch => new Promise(resolve => FirebaseRef.child('maps')
    .on('value', (snapshot) => {
      const placesElements = snapshot.val() || {};

      return resolve(dispatch({
        type: 'PLACESELEMENTS_REPLACE',
        data: placesElements,
      }));
    })).catch(e => console.log(e));
}
