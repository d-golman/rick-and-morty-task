
import { EpisodeState, EnumEpisodeActions, EpisodeAction } from '../../types/types';

const initialState: EpisodeState = {
    episode: {},
    loading: false,
    error: null
};

export const episodeReduser = (state = initialState, action: EpisodeAction): EpisodeState => {
    switch (action.type) {
        case EnumEpisodeActions.FETCH_EPISODE:
            return { ...state, loading: true, error: null };
        case EnumEpisodeActions.FETCH_EPISODE_SUCCESS:
            return { ...state, episode: action.payload, loading: false, error: null };
        case EnumEpisodeActions.FETCH_EPISODE_ERROR:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};