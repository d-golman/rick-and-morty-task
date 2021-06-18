import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { fetchEpisode } from '../../../store/action-creators/episodeActions';

const EpisodePage: React.FC = () => {

    const { id } = useParams<any>();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEpisode(id));
    }, []);

    const { loading, error, episode } = useTypedSelector(state => state.episode);

    if (loading) {
        return (<h1>Загрузка</h1>);
    }
    else if (error) {
        return (
            <h1>{error}</h1>
        );
    }

    return (
        <div className="container">
            <div className="episode-block">

                <h1>{episode['name']}</h1>
                <p>{episode['air_date']}</p>
                <p>{episode['episode']}</p>
            </div>

            <div className="characters-block">
                {episode['characters'] && episode['characters'].map((character: string, index: number) => (
                    <p key={index}>{character}</p>
                ))}
            </div>
        </div>
    );
};

export default EpisodePage;
