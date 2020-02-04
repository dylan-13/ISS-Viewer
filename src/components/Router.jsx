import React from 'react';
import Map1 from './map/Map';
import { Switch, Route } from 'react-router-dom';
import IssView from './streetview/Streetview';
import Live from './live/Live';
import Minigame from './minigame/Minigame'
import pictureOfDay from './PictureOfDay/pictureOfDay'
import FooterComponent from './footer/footer';
import Navbar from './navbar/Navbar';
import Quizz from './quiz/Quiz'

class Router extends React.Component {

    render(){
        return(
            <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Map1} />
                <Route exact path="/Live" component={Live} />
                <Route exact path="/IssView" component={IssView} />
                <Route exact path="/pictureOfDay" component={pictureOfDay} /> 
                <Route exact path="/Quiz" component={Quizz} /> 
                <Route exact path="/Minigame" component={Minigame} />
            </Switch>
            <FooterComponent />
            </>
        )
    }
}
export default Router;