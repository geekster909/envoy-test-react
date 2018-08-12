import React, { Component } from 'react';

import Header from './header';
import AboutHero from './about_hero';
import AboutFeatured from './about_featured';
import AboutWire from './about_wire';

import Data from '../data';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <AboutHero slides={Data.slides}/>
                <div className="hp__body">
                    <div className="container">
                        <div className="about__intro">
                            <h1>An independent full service creative agency helping brave brands build businesses and be heard in a world full of noise. <span>We are Envoy.</span></h1>
                        </div>
                        <hr className="big" />
                        <AboutFeatured featuredWork={Data.featuredWork}/>
                        <AboutWire wire={Data.wire}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
