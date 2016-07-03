import * as types from '../constants';

export const addSong = (id, src) => {
  return {
    type: types.ADD_SONG,
    id,
    src
  };
};

export const deleteSong = id => {
  return {
    type: types.DELETE_SONG,
    id
  };
};
