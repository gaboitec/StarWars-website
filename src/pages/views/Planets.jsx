import {CardsCarousel} from '../../components/CardsCarousel';
import {useSWData} from '../../hooks/useSWData';

export const Planets = () => {
    const dataSW = useSWData("planets");

    return (
        <>
        <div className='container'>
            <h1>planets</h1>
            <CardsCarousel datasw={dataSW} dataType={"planets"} />
        </div>
        </>
    )
}