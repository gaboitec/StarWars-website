export const CardSta = ({dataCard}) => {

    return (
        <>
            <div className="tarjeta">
                <section className="card-head">
                    <h2>{dataCard.name}</h2>
                </section>
                <section className="card-body">
                    <h5>Model</h5><p>{dataCard.model} cm</p>
                    <hr/>
                    <h5>Class</h5><p>{dataCard.starship_class}</p>
                    <hr/>
                    <h5>Crew</h5><p>{dataCard.crew}</p>
                    <hr/>
                    <h5>Passenger</h5><p>{dataCard.passengers}</p>
                    <hr/>
                    <h5>Length</h5><p>{dataCard.length}</p>
                    <hr/>
                    <h5>Manufacturer</h5><p>{dataCard.manufacturer}</p>
                </section>
            </div>
        </>
    )
}
