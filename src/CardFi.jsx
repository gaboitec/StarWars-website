export const CardFi = ({dataCard}) => {

    return (
        <>
        <div className="tarjeta">
            <section className="card-head">
                <h2>{dataCard.title}</h2>
            </section>
            <section className="card-body">
                <h5>Opening</h5><p>{dataCard.opening_crawl} cm</p>
                <hr/>
                <h5>Director</h5><p>{dataCard.director}</p>
                <hr/>
                <h5>Producer</h5><p>{dataCard.producer}</p>
                <hr/>
                <h5>Release date</h5><p>{dataCard.release_date}</p>
            </section>
        </div>
        </>
    )
}