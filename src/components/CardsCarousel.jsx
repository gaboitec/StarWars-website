import { Card } from "./Card"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export const CardsCarousel = ({datasw, dataType}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '0',
        slidesToScroll: 1
    }

    return (
        <>
        <h1>{dataType}</h1>
        <div>
            {console.log(dataType)}
            <Slider {...settings}>
            {
                datasw.map((data,index) => {
                    return <div key={index}><Card dataCard={data}/></div>
                })
            }
            </Slider>
        </div>
        </>
    )
}