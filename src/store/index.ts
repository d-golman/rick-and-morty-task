import { configureStore } from '@reduxjs/toolkit';
import { episodeReduser } from './reducers/episodeReduser';
import { episodesReduser } from './reducers/episodesReduser';
import { characterReduser } from './reducers/characterReduser';
import { charactersReduser } from './reducers/charactersReduser';

export const store = configureStore({
    reducer:
    {
        episodes: episodesReduser,
        episode: episodeReduser,
        characters: charactersReduser,
        character: characterReduser
    }
});

export type RootState = ReturnType<typeof store.getState>;