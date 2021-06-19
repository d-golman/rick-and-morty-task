
import { CharacterAction, EnumCharacterActions, CharacterState } from '../../types/types';

const initialState: CharacterState = {
    character: null,
    loading: false,
    error: null
};

export const characterReduser = (state = initialState, action: CharacterAction): CharacterState => {
    switch (action.type) {
        case EnumCharacterActions.FETCH_CHARACTER:
            return { ...state, loading: true, error: null };
        case EnumCharacterActions.FETCH_CHARACTER_SUCCESS:
            return { ...state, character: action.payload, loading: false, error: null };
        case EnumCharacterActions.FETCH_CHARACTER_ERROR:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};