import {CardsCarousel} from '../../components/CardsCarousel';
import {useSWData} from '../../hooks/useSWData';

export const Starships = () => {
    const dataSW = useSWData("starships");

    return (
        <>
        <div className='container'>
            <h1>starships</h1>
            <CardsCarousel datasw={dataSW} dataType={"starships"} />
        </div>
        </>
    )
}