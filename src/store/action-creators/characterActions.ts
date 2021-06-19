import { Dispatch } from "react";
import { EnumCharacterActions, CharacterAction } from "../../types/types";

export const fetchCharacter = (id: string) => {


    return async (dispatch: Dispatch<CharacterAction>) => {
        try {
            dispatch({
                type: EnumCharacterActions.FETCH_CHARACTER
            });
            await fetch(`https://rickandmortyapi.com/api/character/${id}`)
                .then(res => res.json())
                .then(res =>
                    dispatch({
                        type: EnumCharacterActions.FETCH_CHARACTER_SUCCESS,
                        payload: res
                    })
                )
                .catch((e) => {
                    console.log(e);
                    dispatch({
                        type: EnumCharacterActions.FETCH_CHARACTER_ERROR,
                        payload: 'Error happend on character loading'
                    });
                }
                );

        }
        catch (e) {
            dispatch({
                type: EnumCharacterActions.FETCH_CHARACTER_ERROR,
                payload: 'Error happend on character loading'
            });
        };
    };
};