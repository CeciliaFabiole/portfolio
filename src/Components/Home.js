import immagineProfilo from "../assets/immagineProfilo.png";
function Home() {
    return (
        <div className="container-fluid altezza">
            <div className="container altezza dekstop-query tablet-query">
                <div className="allineamento">
                    <h1>Cecilia Fabiole</h1>
                    <h3><i>Junior Web Developer</i></h3>
                    <p>Hi! I'm looking for work. Discover why assume me!</p>
                </div>
                <img src={immagineProfilo} alt="immagine profilo professionale" className="immagineProfilo" />
            </div>
        </div>
    );
}

export default Home;