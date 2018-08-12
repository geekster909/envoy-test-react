import React, { Component } from 'react';

export default class about_wire extends Component {
    constructor() {
        super();
        this.renderWire = this.renderWire.bind(this);
    }

    renderWire(key) {
        const work = this.props.wire[key];
        return (
            <div className="about__wired--single col-sm-4" key={key}>
                <div className="about__wired--title">
                    <a href={work.link}>{work.title}</a>
                </div>
                <div className="about__wired--copy">
                    {work.date}
                </div>
                <div className="about__wired--link">
                    <a href={work.link}>Read More</a>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="about__wired">
                <div className="about__wired--main">
                    Wire <a href="/">View All News</a>
                </div>
                <hr />
                <div className="about__wired--group">
                    <div className="row">
                        {Object.keys(this.props.wire).map(this.renderWire)}
                    </div>
                </div>
            </div>
        );
    }
}