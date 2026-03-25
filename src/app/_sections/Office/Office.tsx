import React, { FunctionComponent } from "react";
import styles from "./Office.module.scss";
import Section from "@/components/Section";

const Office: FunctionComponent = () => {
    return (
        <Section id="office" title={"НАШ ОФИС НА КАРТЕ"} id_text="Офис"
                 description="350058, Краснодарский край, г. Краснодар, ул. Старокубанская, д. 114, помещ. 15">
            <div className={styles.map}>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Abf5efad7b58571a82225bda8fcdaeeff743c6ee30726ba4d5097ccd04108b7cf&amp;source=constructor"
                    width="100%" height="100%" frameBorder="0">
                </iframe>
            </div>
        </Section>
    );
};

export default Office;