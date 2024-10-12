export const Card = ({dataCard, dataT}) => {
    function type (type){
        switch(type){
            case "people":
                return ( <>
                    <h5>Height</h5><p>{dataCard.height} cm</p>
                    <hr/>
                    <h5>Gender</h5><p>{dataCard.gender}</p>
                    <hr/>
                    <h5>Eyes color</h5><p>{dataCard.eye_color}</p>
                    <hr/>
                    <h5>Hair color</h5><p>{dataCard.hair_color}</p>
                </> );
                break;
            case "planets":
                return ( <>
                    <h5>Climate</h5><p>{dataCard.climate}</p>
                    <hr/>
                    <h5>Terrain</h5><p>{dataCard.terrain}</p>
                    <hr/>
                    <h5>Gravity</h5><p>{dataCard.gravity}</p>
                    <hr/>
                    <h5>Diameter</h5><p>{dataCard.diameter} m</p>
                </> );
                break;
            case "films":
                return (<>
                    <h5>Opening</h5><p>{dataCard.opening_crawl}</p>
                    <hr/>
                    <h5>Director</h5><p>{dataCard.director}</p>
                    <hr/>
                    <h5>Producer</h5><p>{dataCard.producer}</p>
                    <hr/>
                    <h5>Release date</h5><p>{dataCard.release_date}</p>
                </>);
                break;
            case "starships":
                return (<>
                    <h5>Model</h5><p>{dataCard.model}</p>
                    <hr/>
                    <h5>Class</h5><p>{dataCard.starship_class}</p>
                    <hr/>
                    <h5>Crew</h5><p>{dataCard.crew}</p>
                    <hr/>
                    <h5>Passenger</h5><p>{dataCard.passengers}</p>
                    <hr/>
                    <h5>Length</h5><p>{dataCard.length} m</p>
                    <hr/>
                    <h5>Manufacturer</h5><p>{dataCard.manufacturer}</p>
                </>);
                break;
        }
    }

    return (
        <>
            <div className="tarjeta">
                <section className="card-head">
                    <h2>{dataCard.name}</h2>
                </section>

                <section className="card-head">
                    <h2>{dataCard.title}</h2>
                </section>

                <section className="card-body">
                    {type(dataT)}
                </section>
            </div>
        </>
    )
}