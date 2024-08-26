import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PostSlider() {
    const settings = {
        customPaging: function (i) {
            return (
                <img src={window.location.origin + '/img14.jpg'} className="w-full bg-cover border-4 border-transparent hover:border-green-500 object-top rounded-md cursor-pointer opacity-50" />

            );
        },
        dots: true,
        dotsClass: "navlist space-x-5 py-5",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <div className="slider-container ">
                <Slider {...settings}>
                    <div>
                        <img src={window.location.origin + '/img14.jpg'} className="w-full h-96 bg-cover object-top rounded-xl" />
                    </div>
                    <div>
                        <img src={window.location.origin + '/img14.jpg'} className="w-full h-96 bg-cover object-top rounded-xl" />
                    </div>
                    <div>
                        <img src={window.location.origin + '/img14.jpg'} className="w-full h-96 bg-cover object-top rounded-xl" />
                    </div>
                    <div>
                        <img src={window.location.origin + '/img14.jpg'} className="w-full h-96 bg-cover object-top rounded-xl" />
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default PostSlider
