import React, { Component } from 'react';

export default class about_featured extends Component {
    constructor() {
        super();
        this.renderFeatured = this.renderFeatured.bind(this);
    }

    renderFeatured(key) {
        const work = this.props.featuredWork[key];
        return (
            <div className="about__featured--single col-sm-4" key={key}>
                <div className="about__featured--image">
                    <a href={work.link}>
                        <img src={work.image} alt="featured-work" />
                    </a>
                </div>
                <div className="about__featured--title">
                    <div dangerouslySetInnerHTML={{ __html: work.title }} />
                </div>
                <div className="about__featured--copy">
                    {work.copy}
                </div>
                <div className="about__featured--link">
                    <a href={work.link}>View Project</a>
                </div>
            </div>
        );
    }
    
    render() {
        return (
            <div className="about__featured">
                <div className="about__featured--main">
                    Featured Work <a href="">View All Work</a>
                </div>
                <hr />
                <div className="about__featured--group">
                    <div className="row">
                        {Object.keys(this.props.featuredWork).map(this.renderFeatured)}
                    </div>
                </div>
            </div>
        );
    }
}