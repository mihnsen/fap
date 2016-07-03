import * as types from '../constants';

const songs = (state = [], action) => {
  switch (action.type) {
    case types.ADD_SONG:
      return [
        ...state,
        {
          id: action.id,
          src: action.src,
        }
      ];

    case types.DELETE_SONG:
      return state.find(s => s.id == action.id);
  }
};

export default songs;
