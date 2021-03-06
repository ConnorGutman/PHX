import { Firebase, FirebaseRef } from '../lib/firebase';

/**
  * Set an Error Message
  */
export function setError(message) {
  return dispatch => new Promise(resolve => resolve(dispatch({
    type: 'METRO_ERROR',
    data: message,
  })));
}

/**
  * Get Metro Elements
  */
export function getMetroElements() {
  if (Firebase === null) return () => new Promise(resolve => resolve());

  return dispatch => new Promise(resolve => FirebaseRef.child('maps')
    .on('value', (snapshot) => {
      const metroElements = snapshot.val() || {};

      return resolve(dispatch({
        type: 'METROELEMENTS_REPLACE',
        data: metroElements,
      }));
    })).catch(e => console.log(e));
}
