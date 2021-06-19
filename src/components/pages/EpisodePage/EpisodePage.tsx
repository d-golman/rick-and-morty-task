import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { fetchEpisode } from '../../../store/action-creators/episodeActions';
import { fetchCharacters } from '../../../store/action-creators/charactersActions';
import './episodePage.css';
import { Link } from 'react-router-dom';

const EpisodePage: React.FC = () => {

    // получение id из url
    const { id } = useParams<any>();

    //хук для доступа к dispatch
    const dispatch = useDispatch();

    // загрузка эпизодов
    useEffect(() => {
        dispatch(fetchEpisode(id));
    }, [id]);

    // получение стейта из redux
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

                <h1 className='episode-block-name'>{episode['name']}</h1>
                <p className='episode-block-info'>Season: {episode['episode'] && episode['episode'].slice(2, 3)}</p>
                <p className='episode-block-info'>Episode: {episode['episode'] && episode['episode'].slice(4, 6)}</p>
                <p className='episode-block-info'>Release date: {episode['air_date']}</p>
            </div>

            <h2 className='characters-block-title'>Active characters</h2>
            <Characters charactersList={episode['characters']} />
        </div>
    );
};

// тип принимаемых компонентом значений
type CharactersType = {
    charactersList: string[];
};

// компонент принимает список персонажей
const Characters: React.FC<CharactersType> = ({ charactersList }) => {
    const dispatch = useDispatch();

    // загрузка персонажей
    useEffect(() => {
        dispatch(fetchCharacters(charactersList));
    }, []);

    // получение стейта из redux
    const { loading, error, characters } = useTypedSelector(state => state.characters);

    if (loading) {
        return (<h1>Загрузка</h1>);
    }
    else if (error) {
        return (
            <h1>{error}</h1>
        );
    }
    return (
        <div className="characters-block">
            {characters.map((character: any, index: number) => (
                <div key={index} className="character-card">
                    <Link to={`/character_${character['id']}`}><img className='charactar-image' src={character['image']} alt="" /></Link>
                    <div className="character-card-info">
                        <p className='character-name' key={index}>{character['name']}</p>
                        <p className="character-info">Race: {character['species']}</p>
                        <p className="character-info">Gender: {character['gender']}</p>
                        <p className="character-info">Origin: {character['origin']['name']}</p>
                        <p className="character-info">Location: {character['location']['name']}</p>
                        <p className="character-info">Status: {character['status']}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default EpisodePage;
