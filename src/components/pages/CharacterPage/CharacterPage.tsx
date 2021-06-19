import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { fetchCharacter } from '../../../store/action-creators/characterActions';
import { fetchEpisodes } from '../../../store/action-creators/episodesActions';
import './characterPage.css';

const CharacterPage: React.FC = () => {

    const { id } = useParams<any>();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCharacter(id));
    }, [id]);


    const { loading, error, character } = useTypedSelector(state => state.character);


    type EpisodesProps = {
        links: string[];
    };

    const Episodes: React.FC<EpisodesProps> = ({ links }) => {
        const dispatch = useDispatch();
        useEffect(() => {
            dispatch(fetchEpisodes(links));
        }, []);
        const { loading, error, episodes } = useTypedSelector(state => state.episodes);
        if (loading) {
            return (<h1>Загрузка</h1>);
        }
        else if (error) {
            return (
                <h1>{error}</h1>
            );
        }
        return (
            <div className="character-episodes-block">
                {
                    episodes.map(
                        (episode: any, index: number) =>
                            <Link key={index} to={`/episode_${episode['id']}`} style={{ display: 'block' }} className='episode-name'>{episode['name']}</Link>
                    )
                }
            </div>
        );
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
            {character &&
                <div className="charactaer-page">

                    <div className="character-card">
                        <img className='charactar-image character-page-image' src={character['image']} alt="" />
                        <div className="character-card-info character-page-info">
                            <p className='character-name' >{character['name']}</p>
                            <p className="character-info">Race: {character['species']}</p>
                            <p className="character-info">Gender: {character['gender']}</p>
                            <p className="character-info">Origin: {character['origin']['name']}</p>
                            <p className="character-info">Location: {character['location']['name']}</p>
                            <p className="character-info">Status: {character['status']}</p>
                        </div>
                    </div>
                    <div className="character-episodes">
                        <h2>Character was featured in these episodes:</h2>
                        <Episodes links={character['episodes']} />
                    </div>
                </div>
            }
        </div>
    );
};


export default CharacterPage;
