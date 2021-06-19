import { configureStore } from '@reduxjs/toolkit';
import { episodeReduser } from './reducers/episodeReduser';
import { episodesReduser } from './reducers/episodesReduser';
import { characterReduser } from './reducers/characterReduser';
import { charactersReduser } from './reducers/charactersReduser';

// создание хранилища redux со всеми редьюсерами
export const store = configureStore({
    reducer:
    {
        episodes: episodesReduser,
        episode: episodeReduser,
        characters: charactersReduser,
        character: characterReduser
    }
});

// тип для создания кастомного хука получения стейта с типизацией
export type RootState = ReturnType<typeof store.getState>;