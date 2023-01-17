import aboutLight from '../assets/aboutLight.png'
import CVCeciliaFabiole from '../assets/CV-CeciliaFabiole.pdf'
import { FiFileText } from "react-icons/fi";

function AboutMe() {
    return (
        <div className="container-fluid ">
            <div className="container d-flex flex-column ">
                <div className="desktop-about-query">
                    <div className='contenitore-img d-flex align-items-end'>
                        <div className='container'>
                            <img src={aboutLight} alt="" className="spontaneous-img" />
                        </div>
                    </div>

                    <div className="half-about">
                        <h6>I’m a true artist when it comes to web development. </h6>
                        <p>My background in fine arts and photography gives me a unique perspective on design and user experience.
                            I’m able to create visually stunning websites that are not only easy to navigate, but also a pleasure to behold.</p>
                        <p>With my technical expertise in HTML, CSS, SCSS, React, JavaScript, TypeScript, Git, Node.js, Express, and PostgreSQL,
                            I’m able to bring my artistic visions to life on the web. I have a deep understanding of the Adobe Creative Suite,
                            including Illustrator, Photoshop, InDesign, and Lightroom, which allows me to create designs that are both
                            beautiful and functional.</p>
                        <p>My fluency in multiple languages, including Italian, French, English, Greek and German, also allows me to communicate
                            effectively with a diverse group of clients and colleagues. I’m able to understand the unique needs and preferences
                            of different cultures, and use this understanding to create websites that are tailored to their specific audiences.</p>

                        <p>My diverse work experience as a bartender, photographer and lifeguard, also adds to my artistic approach.
                            I’ve learned the importance of hard work, dedication, and flexibility, which are all essential to success in the web development field.</p>
                        <p>Overall, I’m a rare combination of technical expertise and artistic talent. My ability to create visually stunning websites
                            that are both easy to navigate and tailored to specific audiences makes me an asset to any team. The determination and
                            willingness to overcome obstacles make me an ideal candidate for any web development role.</p>
                        
                    </div>
                    <a download="" href={CVCeciliaFabiole}>
                            <h5>Download my CV <FiFileText size="25px" /></h5>
                        </a>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;

// Sono un vero artista quando si tratta di sviluppo web. Il mio background nelle belle arti e nella fotografia mi offre una prospettiva unica sul design e sull'esperienza dell'utente. Sono in grado di creare siti Web visivamente sbalorditivi che non sono solo facili da navigare, ma anche un piacere per gli occhi.

// Con la mia esperienza tecnica in HTML, CSS, SCSS, React, JavaScript, TypeScript, Git, Node.js, Express e PostgreSQL, sono in grado di dare vita alle mie visioni artistiche sul web. Ho una profonda conoscenza di Adobe Creative Suite, inclusi Illustrator, Photoshop, InDesign e Lightroom, che mi consente di creare design belli e funzionali.

// La mia padronanza di più lingue, tra cui italiano, francese, inglese, greco e tedesco, mi consente inoltre di comunicare efficacemente con un gruppo eterogeneo di clienti e colleghi. Sono in grado di comprendere le esigenze e le preferenze uniche delle diverse culture e utilizzare questa comprensione per creare siti Web su misura per il loro pubblico specifico.

// La mia variegata esperienza lavorativa come barista, fotografo e bagnino si aggiunge al mio approccio artistico. Ho imparato l'importanza del duro lavoro, della dedizione e della flessibilità che sono essenziali per il successo nel campo dello sviluppo web.

// Nel complesso, sono una rara combinazione di competenza tecnica e abilità artistica. La mia capacità di creare siti Web visivamente sbalorditivi, facili da navigare e personalizzati per un pubblico specifico, mi rende una risorsa per qualsiasi team. La determinazione e la volontà di superare gli ostacoli mi rendono un candidato ideale per qualsiasi ruolo di sviluppo web.