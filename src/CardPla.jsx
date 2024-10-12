export const CardPla = ({dataCard}) => {

    return (
        <>
        <div className="tarjeta">
            <section className="card-head">
                <h2>{dataCard.name}</h2>
            </section>
            <section className="card-body">
                <h5>Climate</h5><p>{dataCard.climate} cm</p>
                <hr/>
                <h5>Terrain</h5><p>{dataCard.terrain}</p>
                <hr/>
                <h5>Gravity</h5><p>{dataCard.gravity}</p>
                <hr/>
                <h5>Diameter</h5><p>{dataCard.diameter} m</p>
            </section>
        </div>
        </>
    )
}