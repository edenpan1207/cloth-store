import {shopActionTypes} from './shop.type';

export const updateCollections = collectionMap => ({
  type: shopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionMap
})