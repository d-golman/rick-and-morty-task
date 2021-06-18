export interface EpisodesState {
    episodes: any[],
    loading: boolean,
    error: null | string
}

export enum EnumActions {
    FETCH_EPISODES = 'FETCH_EPISODES',
    FETCH_EPISODES_SUCCESS = 'FETCH_EPISODES_SUCCESS',
    FETCH_EPISODES_ERROR = 'FETCH_EPISODES_ERROR'
}

interface FetchEpisodesAction {
    type: EnumActions.FETCH_EPISODES
}

interface FetchEpisodesSuccessAction {
    type: EnumActions.FETCH_EPISODES_SUCCESS,
    payload: any[]
}
interface FetchEpisodesErrorAction {
    type: EnumActions.FETCH_EPISODES_ERROR,
    payload: string
}

export type EpisodesAction = FetchEpisodesAction | FetchEpisodesErrorAction | FetchEpisodesSuccessAction
