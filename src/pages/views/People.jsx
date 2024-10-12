import {CardsCarousel} from '../../components/CardsCarousel';
import {useSWData} from '../../hooks/useSWData';

export const People = () => {
    const dataSW = useSWData("people");

    return (
        <>
        <div className='container'>
            <h1>people</h1>
            <CardsCarousel datasw={dataSW} dataType={"people"} />
        </div>
        </>
    )
}