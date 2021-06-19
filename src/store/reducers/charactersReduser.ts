
import { CharactersAction, EnumCharactersActions, CharactersState } from '../../types/types';

const initialState: CharactersState = {
    characters: [],
    loading: false,
    error: null
};

export const charactersReduser = (state = initialState, action: CharactersAction): CharactersState => {
    switch (action.type) {
        case EnumCharactersActions.FETCH_CHARACTERS:
            return { ...state, loading: true, error: null };
        case EnumCharactersActions.FETCH_CHARACTERS_SUCCESS:
            return { ...state, characters: action.payload, loading: false, error: null };
        case EnumCharactersActions.FETCH_CHARACTERS_ERROR:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};