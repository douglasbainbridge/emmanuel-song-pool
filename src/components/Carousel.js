import React from 'react'
import Slider from "react-slick";


export default (props) => {
    var settings = {
        dots: true,
        arrows: false,//was causing overflow
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    };

    return (
        <div style={{ paddingTop: '12px' }}>
            <Slider {...settings}>
                {props.children}
            </Slider>
        </div>
    )
}