function CardExperience({year, job, place}) {
    return (
        <div className="contenitore-card">
            <h4>{year}</h4>
            <h5>{job}</h5>
            <p>{place}</p>
        </div>
    );
}

export default CardExperience;