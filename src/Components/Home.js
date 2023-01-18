import { useTranslation } from "react-i18next";
import immagineProfilo from "../assets/immagineProfilo.png";
function Home() {
    const {t} = useTranslation();
    return (
        <div className="container-fluid pt-5">
            <div className="container desktop-query tablet-query pt-5">
                <div className="allineamento larghezza">
                    <h1>Cecilia Fabiole</h1>
                    <h3><i>Junior Web Developer</i></h3>
                    <p>{t("home_hi")}<br/>{t("home_welcome")}</p>
                </div>
                <img src={immagineProfilo} alt="immagine profilo professionale" className="immagineProfilo" />
            </div>
        </div>
    );
}

export default Home;