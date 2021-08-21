function Card (props) {
    return (
        <div className="card">
            <div className="card-img">
                <img src={props.image} className="card-img"/>
            </div>
            <h1 className='card-title'>{props.title}</h1>
            <h2 className="card-sub">{props.subtitle}</h2>
            <p className='card-desc'>
                {props.desc}
            </p>
            <p className="btn-parent">
            <button className="card-btn">
                Read More
            </button>
            </p>
            
        </div>
    )
}

export default Card;