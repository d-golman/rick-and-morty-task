import { Dispatch } from "react";
import { EnumActions, EpisodesAction } from "../../types/types";

export const fetchEpisodes = (links: string[] | undefined = undefined) => {


    return async (dispatch: Dispatch<EpisodesAction>) => {
        try {
            dispatch({
                type: EnumActions.FETCH_EPISODES
            });
            const result: any[] = [];
            if (links) {
                for await (const link of links) {
                    await fetch(link)
                        .then(res => res.json())
                        .then(res =>
                            result.push(...res['results'])
                        )
                        .catch((e) => {
                            console.log(e);
                            dispatch({
                                type: EnumActions.FETCH_EPISODES_ERROR,
                                payload: 'Error happend on episodes loading'
                            });
                        }
                        );
                }
            }
            else {
                const pages: number[] = [1, 2, 3];
                for await (const page of pages) {
                    await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
                        .then(res => res.json())
                        .then(res =>
                            result.push(...res['results'])
                        )
                        .catch((e) => {
                            console.log(e);
                            dispatch({
                                type: EnumActions.FETCH_EPISODES_ERROR,
                                payload: 'Error happend on episodes loading'
                            });
                        }
                        );
                }
            }
            dispatch({
                type: EnumActions.FETCH_EPISODES_SUCCESS,
                payload: result
            });
        }
        catch (e) {
            console.log(e);
            dispatch({
                type: EnumActions.FETCH_EPISODES_ERROR,
                payload: 'Error happend on episodes loading'
            });
        };
    };
};