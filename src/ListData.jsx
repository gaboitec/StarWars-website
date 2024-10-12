import { CardPe } from "./components/Card"
import {CardPla} from './CardPla';
import {CardFi} from './CardFi';
import {CardSta} from './CardSta';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export const ListData = ({datasw, dataType}) => {
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
                    switch(dataType){
                        case "people":
                            return <div key={index}><CardPe dataCard={data}/></div>
                            break;
                        case "planets":
                            return <div key={index}><CardPla dataCard={data}/></div>
                            break;
                        case "films":
                            return <div key={index}><CardFi dataCard={data}/></div>
                            break;
                        case "starships":
                            return <div key={index}><CardSta dataCard={data}/></div>
                            break;
                    }
                })
            }
            </Slider>
        </div>
        </>
    )
}