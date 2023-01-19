import { useState } from 'react';
import CFlogoLight from '../assets/CFlogoLight.png'

function PaginaIniziale() {
    const [ show, setShow ] = useState(true);

    setTimeout(() => {
    	setShow(false);
    }, 3000);

    if (!show) {
    	return null;
    }

    return (
        <div className="fullScreen-section text-light">
            <img src={CFlogoLight} alt="" className='img-fullScreen mb-5'/>
            <p className="title-fullScreen">Cecilia Fabiole</p>
            <p className="subtitle-fullScreen">Jr Full Stack Developer</p>
        </div>
    );
}

export default PaginaIniziale;