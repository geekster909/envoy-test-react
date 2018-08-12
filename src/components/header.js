import React, { Component } from 'react';
import logo from '../images/ENVOY_LOGO.png';

export default class header extends Component {
    constructor() {
        super();
        this.state = {
            tweetOpen: false,
            menuOpen: false
        }
    }

    openTweet() {
        this.setState({
            tweetOpen: !this.state.tweetOpen ? true : false
        });
    }

    openMenu() {
        this.setState({
            menuOpen: !this.state.menuOpen ? true : false
        });
    }

    render() {
        const tweetOpen = this.state.tweetOpen ? 'active' : '';
        const menuOpen = this.state.menuOpen ? 'active' : '';
        return (
            <header>
                <div className="container">
                    <div className="header__container">
                        <div className="header__left">
                            <div className="header__logo">
                                <a href="/"><img src={logo} alt="logo"/></a>
                            </div>
                            <div className={`header__nav ${menuOpen}`}>
                                <ul>
                                    <li className=""><a href="/">Work</a></li>
                                    <li className=""><a href="/">Services</a></li>
                                    <li className=""><a href="/">Ventures</a></li>
                                    <li className="active"><a href="/">About</a></li>
                                    <li className=""><a href="/">Contact</a></li>
                                    <li className=""><a href="/">Blog</a></li>
                                </ul>
                                <div className="header__nav--twitter">
                                    <a href="https://twitter.com/weareenvoy?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-show-count="false">Follow @weareenvoy</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                                </div>
                            </div>
                        </div>
                        <div className="header__right">
                            <div className={`header__share ${tweetOpen}`}>
                                <div className="header__share--header">
                                    <div>
                                        <i className="fab fa-twitter fa-lg"></i> Tweet. Tweet.
                                    </div>
                                    <div className="header__share--follow">
                                        <a href="https://twitter.com/weareenvoy?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-show-count="false">Follow @weareenvoy</a>
                                    </div>
                                </div>
                                <div className="header__share--trigger" onClick={()=>this.openTweet()}></div>
                                <div className="header__tweets--container">
                                    <div className="header__tweets">
                                        <div className="header__tweet">
                                            <div className="header__tweet--title">
                                                Can’t wait for the launch of the Envoy Website. <a href="">instagr.am/p/N8d7E/</a> Check our latest work.
                                            </div>
                                            <div className="header__tweet--time">
                                                about an hour ago via twitter
                                            </div>
                                        </div>
                                        <div className="header__tweet">
                                            <div className="header__tweet--title">
                                                ooVoo tabs Envoy as new digital agency. 
                                            </div>
                                            <div className="header__tweet--time">
                                                about an hour ago via twitter
                                            </div>
                                        </div>
                                        <div className="header__tweet">
                                            <div className="header__tweet--title">
                                                Check out our latest work for <a href="">@promax</a>
                                            </div>
                                            <div className="header__tweet--time">
                                                about an hour ago via twitter
                                            </div>
                                        </div>
                                        <div className="header__tweet">
                                            <div className="header__tweet--title">
                                                Sneak peek our new office. <a href="">but.ly/zH3UnDDrop</a> in on us.
                                            </div>
                                            <div className="header__tweet--time">
                                                about an hour ago via twitter
                                            </div>
                                        </div>
                                        <div className="header__tweet">
                                            <div className="header__tweet--title">
                                                Can’t wait for the launch of the Envoy Website. <a href="">instagr.am/p/N8d7E/</a>
                                            </div>
                                            <div className="header__tweet--time">
                                                about an hour ago via twitter
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`hamburger hamburger__spin ${menuOpen}`} onClick={()=>this.openMenu()}>
                                <div className="hamburger__box">
                                    <div className="hamburger__inner"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}