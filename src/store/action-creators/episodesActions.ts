import { Dispatch } from "react"
import { EnumActions, EpisodesAction } from "../../types/types"

export const fetchEpisodes = () => {
    return async (dispatch: Dispatch<EpisodesAction>) => {
        try {
            dispatch({
                type: EnumActions.FETCH_EPISODES
            })
            const result: any[] = []
            const pages: number[] = [1, 2, 3]
            for await (const page of pages) {
                await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
                    .then(res => res.json())
                    .then(res =>
                        result.push(...res['results'])
                    )
                    .catch(() =>
                        dispatch({
                            type: EnumActions.FETCH_EPISODES_ERROR,
                            payload: 'Произошла ошибка при загрузке эпизодов'
                        })
                    )
            }
            dispatch({
                type: EnumActions.FETCH_EPISODES_SUCCESS,
                payload: result
            })
        }
        catch (e) {
            dispatch({
                type: EnumActions.FETCH_EPISODES_ERROR,
                payload: 'Произошла ошибка при загрузке эпизодов'
            })
        }
    }
}