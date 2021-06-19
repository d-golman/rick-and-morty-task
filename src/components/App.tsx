import React from 'react';
import MainPage from './pages/MainPage/MainPage';
import Navbar from './navbar/Navbar';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from 'react-router-dom';
import EpisodePage from './pages/EpisodePage/EpisodePage';
import CharacterPage from './pages/CharacterPage/CharacterPage';


const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/' component={MainPage}></Route>
                <Route exact path='/episode_:id' component={EpisodePage}></Route>
                <Route exact path='/character_:id' component={CharacterPage}></Route>
                <Route exact path='*' component={NoMatch}></Route>
            </Switch>
        </Router>
    );
};

export default App;

function NoMatch() {
    let location = useLocation();

    return (
        <div className="error">
            <h1>Ошибка 404</h1>
            <h3>
                Путь <code>{location.pathname}</code> не найден
        </h3>
            <Link to={'/'}>Вернуться на главную</Link>
        </div>
    );
};

