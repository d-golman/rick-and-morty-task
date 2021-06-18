import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { fetchEpisodes } from '../../../store/action-creators/episodesActions';
import './mainPage.css';

const EpisodesList: React.FC = () => {
    const { episodes, seasons, loading, error } = useTypedSelector(state => state.episodes);
    const dispatch = useDispatch();

    const [search, setSearch] = useState<string>('');

    useEffect(() => {
        dispatch(fetchEpisodes());
    }, []);

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

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
            <div className="search-block">
                <i className="material-icons search-icon">search</i>
                <input placeholder='Episode name' onChange={changeHandler} className="search-input"></input>
            </div>
            <div className="episode-list">
                {
                    seasons.map((season: number, index) => {
                        return (
                            <div className='season-card' key={index}>
                                <h4 className='season-name'>Season {season}</h4>
                                {
                                    episodes.filter(episode => episode['episode'].includes(`S0${season}`) && episode['name'].toLowerCase().includes(search.toLowerCase())).map(episode =>
                                        <Link to={`/${episode['id']}`} className='episode-card' key={episode['episode']}>
                                            <h5 className='episode-name'>{episode['name']}</h5>
                                            <p className='episode-number'>Episode: {episode['episode']}</p>
                                            <p className='episode-date'>Release date: {episode['air_date']}</p>
                                        </Link>
                                    )
                                }
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );

};



export default EpisodesList;
