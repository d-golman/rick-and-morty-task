import { configureStore } from '@reduxjs/toolkit';
import { episodeReduser } from './reducers/episodeReduser';
import { episodesReduser } from './reducers/episodesReduser';

export const store = configureStore({
    reducer:
    {
        episodes: episodesReduser,
        episode: episodeReduser
    }
});

export type RootState = ReturnType<typeof store.getState>;