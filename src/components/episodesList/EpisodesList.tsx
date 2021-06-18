import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { fetchEpisodes } from '../../store/action-creators/episodesActions'

const EpisodesList: React.FC = () => {
    const { episodes, loading, error } = useTypedSelector(state => state.episode)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchEpisodes())
    }, [])



    if (loading) {
        return (
            <h1>Загрузка</h1>
        )
    }
    else if (error) {
        return (
            <h1>{error}</h1>
        )
    }
    else {
        return (
            <ul>
                {
                    episodes.map((episode, index) => {
                        return (
                            <li key={index}>
                                {episode['name']}
                            </li>
                        )
                    })
                }
            </ul>
        )

    }

}

export default EpisodesList
