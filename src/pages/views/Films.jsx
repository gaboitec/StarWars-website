import {CardsCarousel} from '../../components/CardsCarousel';
import {useSWData} from '../../hooks/useSWData';

export const Films = () => {
    const dataSW = useSWData("films");

    return (
        <>
        <div className="container">
            <h1>films</h1>
            <CardsCarousel datasw={dataSW} dataType={"films"} />
        </div>
        </>
    )
}