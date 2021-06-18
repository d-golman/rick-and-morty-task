import { Dispatch } from "react";
import { EnumEpisodeActions, EpisodeAction } from "../../types/types";

export const fetchEpisode = (id: number) => {


    return async (dispatch: Dispatch<EpisodeAction>) => {
        try {
            dispatch({
                type: EnumEpisodeActions.FETCH_EPISODE
            });
            await fetch(`https://rickandmortyapi.com/api/episode/${id}`)
                .then(res => res.json())
                .then(res =>
                    dispatch({
                        type: EnumEpisodeActions.FETCH_EPISODE_SUCCESS,
                        payload: res
                    })
                )
                .catch((e) => {
                    console.log('x');
                    dispatch({
                        type: EnumEpisodeActions.FETCH_EPISODE_ERROR,
                        payload: 'Error happend on episode loading'
                    });
                }
                );

        }
        catch (e) {
            console.log(e);
            dispatch({
                type: EnumEpisodeActions.FETCH_EPISODE_ERROR,
                payload: 'Error happend on episode loading'
            });
        };
    };
};