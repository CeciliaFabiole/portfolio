import { TiArrowRightThick } from "react-icons/ti";

export function CardExperience({year, job, place}) {
    return (
        <div className="contenitore-card">
            <h4>{year}</h4>
            <h5>{job}</h5>
            <p>{place}</p>
        </div>
    );
}
export function CardProject({year, job, place, link}) {
    return (
        <div className="contenitore-card">
            <h4>{year}</h4>
            <h5>{job}</h5>
            <a href={link} target="_blank" rel="noreferrer"><p>{place} <TiArrowRightThick /></p></a>
        </div>
    );
}

