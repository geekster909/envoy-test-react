import React, { Component } from 'react';
import Slider from "react-slick";

export default class about_hero extends Component {
    constructor() {
        super();
        this.renderSlide = this.renderSlide.bind(this);
    }

    renderSlide(key) {
        const slide = this.props.slides[key];
        return (
            <div className="about__hero--slide" data-slide={key} key={key}>
                <div className="about__hero--slide-image" style={{backgroundImage: `url('${slide.image}')`}}></div>
                <div className="container">
                    <div className="about__hero--slide-container">
                        <div className="about__hero--text">
                            <h1>{slide.title}</h1>
                            <p>{slide.copy} <a href={slide.link}>View Project</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        let sliderSettings = {
            dots: true,
            infinite: true,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [{
                breakpoint: 930,
                settings: {
                    arrows: false,
                }
            }]
        };
        return (
            <div className="about__hero">
                <Slider className="about__hero--slider" {...sliderSettings}>
                    {Object.keys(this.props.slides).map(this.renderSlide)}
                </Slider>
            </div>
        )
    }
}