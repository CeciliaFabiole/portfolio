import immagineProfilo from "../assets/immagineProfilo.png";
function Home() {
    return (
        <div className="container-fluid pt-5">
            <div className="container desktop-query tablet-query pt-5">
                <div className="allineamento larghezza">
                    <h1>Cecilia Fabiole</h1>
                    <h3><i>Junior Web Developer</i></h3>
                    <p>Hi! I'm a Junior Web Developer, super passionate about coding.<br/>
                    Welcome to my website! Go ahead to find out more.</p>
                </div>
                <img src={immagineProfilo} alt="immagine profilo professionale" className="immagineProfilo" />
            </div>
        </div>
    );
}

export default Home;