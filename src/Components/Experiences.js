import exLight from '../assets/exLight.png'
import CardExperience from './CardExperience';

function Experiences() {
    return (
        <div className="container-fluid altezza">
            <div className="container altezza">
                <div className="desktop-about-query">
                    <div className='contenitore-img d-flex align-items-end' id='ex-color'>
                        <div className='container'>
                            <img src={exLight} alt="" className="spontaneous-img" />
                        </div>
                    </div>
                </div>
                <div className='desktop-experience-query mt-5'>
                    <div className='desktop-study-query'>
                        <CardExperience year='2022' job='Develhope' place='Programmazione' />
                        <CardExperience year='2018-2021' job='Accademia di Belle Arti' place='Grafica e Fotografia' />
                        <CardExperience year='2010-2015' job='Liceo linguistico' place='Different places in Aosta Valley' />

                    </div>
                    <div className='desktop-work-query'>
                        <CardExperience year='2022' job='Lifeguard' place='Kos, Greece' />
                        <CardExperience year='2021' job='Photographer' place='Evia, Greece' />
                        <CardExperience year='2014-2020' job='Bartender' place='Different places in Aosta Valley' />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experiences;