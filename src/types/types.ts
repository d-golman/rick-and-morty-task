//episode types
export interface EpisodesState {
    episodes: any[],
    seasons: number[],
    loading: boolean,
    error: null | string;
}

export enum EnumActions {
    FETCH_EPISODES = 'FETCH_EPISODES',
    FETCH_EPISODES_SUCCESS = 'FETCH_EPISODES_SUCCESS',
    FETCH_EPISODES_ERROR = 'FETCH_EPISODES_ERROR'
}

interface FetchEpisodesAction {
    type: EnumActions.FETCH_EPISODES;
}

interface FetchEpisodesSuccessAction {
    type: EnumActions.FETCH_EPISODES_SUCCESS,
    payload: any[];
}
interface FetchEpisodesErrorAction {
    type: EnumActions.FETCH_EPISODES_ERROR,
    payload: string;
}

export type EpisodesAction = FetchEpisodesAction | FetchEpisodesErrorAction | FetchEpisodesSuccessAction;

//single episode types

export interface EpisodeState {
    episode: any,
    loading: boolean,
    error: null | string;
}

export enum EnumEpisodeActions {
    FETCH_EPISODE = 'FETCH_EPISODE',
    FETCH_EPISODE_SUCCESS = 'FETCH_EPISODE_SUCCESS',
    FETCH_EPISODE_ERROR = 'FETCH_EPISODE_ERROR'
}

interface FetchEpisodeAction {
    type: EnumEpisodeActions.FETCH_EPISODE;
}

interface FetchEpisodeSuccessAction {
    type: EnumEpisodeActions.FETCH_EPISODE_SUCCESS,
    payload: any[];
}
interface FetchEpisodeErrorAction {
    type: EnumEpisodeActions.FETCH_EPISODE_ERROR,
    payload: string;
}

export type EpisodeAction = FetchEpisodeAction | FetchEpisodeSuccessAction | FetchEpisodeErrorAction;

//characters types

export interface CharactersState {
    characters: any[],
    loading: boolean,
    error: null | string;
}

export enum EnumCharactersActions {
    FETCH_CHARACTERS = 'FETCH_CHARACTERS',
    FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS',
    FETCH_CHARACTERS_ERROR = 'FETCH_CHARACTERS_ERROR'
}

interface FetchCharactersAction {
    type: EnumCharactersActions.FETCH_CHARACTERS;
}

interface FetchCharactersSuccessAction {
    type: EnumCharactersActions.FETCH_CHARACTERS_SUCCESS,
    payload: any[];
}
interface FetchCharactersErrorAction {
    type: EnumCharactersActions.FETCH_CHARACTERS_ERROR,
    payload: string;
}

export type CharactersAction = FetchCharactersAction | FetchCharactersSuccessAction | FetchCharactersErrorAction;