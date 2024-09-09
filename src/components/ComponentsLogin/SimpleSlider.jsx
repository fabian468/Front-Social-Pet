import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img_1 from "../../img/img_1.jpg"
import img_2 from "../../img/img_2.jpg"
import img_3 from "../../img/img_3.jpg"
import img_4 from "../../img/img_4.jpg"

const SimpleSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        arrows: false
    };

    return (
        <Slider className="slider" {...settings}>
            <div>
                <img src={img_1} alt="Social pet socialpet" />
            </div>
            <div>
                <img src={img_2} alt="Social pet socialpet" />
            </div>
            <div>
                <img src={img_3} alt="Social pet socialpet" />
            </div>
            <div>
                <img src={img_4} alt="Social pet socialpet" />
            </div>
        </Slider>
    );
}

export default SimpleSlider;
