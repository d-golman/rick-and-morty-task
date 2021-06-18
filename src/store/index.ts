import { configureStore } from '@reduxjs/toolkit'
import { episodesReduser } from './reducers/episodesReduser';

export const store = configureStore({
    reducer:
    {
        episode: episodesReduser,
    }
})

export type RootState = ReturnType<typeof store.getState>