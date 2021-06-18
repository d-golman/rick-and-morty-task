
import { EpisodesAction, EpisodesState, EnumActions } from '../../types/types';

const initialState: EpisodesState = {
    episodes: [],
    seasons: [1, 2, 3, 4],
    loading: false,
    error: null
};

export const episodesReduser = (state = initialState, action: EpisodesAction): EpisodesState => {
    switch (action.type) {
        case EnumActions.FETCH_EPISODES:
            return { ...state, loading: true, error: null };
        case EnumActions.FETCH_EPISODES_SUCCESS:
            return { ...state, episodes: action.payload, loading: false, error: null };
        case EnumActions.FETCH_EPISODES_ERROR:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};