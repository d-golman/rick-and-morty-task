import { Dispatch } from "react";
import { EnumCharactersActions, CharactersAction } from "../../types/types";

export const fetchCharacters = (links: string[]) => {


    return async (dispatch: Dispatch<CharactersAction>) => {
        try {
            dispatch({
                type: EnumCharactersActions.FETCH_CHARACTERS
            });
            const result: any[] = [];
            for await (const link of links) {
                await fetch(link)
                    .then(res => res.json())
                    .then(res =>
                        result.push(res)
                    )
                    .catch((e) => {
                        console.log(e);
                        dispatch({
                            type: EnumCharactersActions.FETCH_CHARACTERS_ERROR,
                            payload: 'Error happend on characters loading'
                        });
                    }
                    );
            }
            dispatch({
                type: EnumCharactersActions.FETCH_CHARACTERS_SUCCESS,
                payload: result
            });
        }
        catch (e) {
            dispatch({
                type: EnumCharactersActions.FETCH_CHARACTERS_ERROR,
                payload: 'Error happend on characters loading'
            });
        };
    };
};