import React, { FunctionComponent } from "react";
import styles from "./Indicators.module.scss";
import Section from "@/components/Section";
import InfoCard from "@/components/InfoCard";

const Indicators: FunctionComponent = () => {
    return (
        <Section id="indicators" title="О нас в цифрах" id_text={"Показатели"}>
            <div className={styles.grid}>
                <InfoCard text={"населённых пунктов"} title={"4520"} variant={"text_v"} />
                <InfoCard text={"выполненных проектов"} title={"2455"} variant={"text_v"} />
                <InfoCard text={"районов"} title={"920"} variant={"text_v"} />
                <InfoCard text={"субъектов РФ"} title={"35"} variant={"text_v"} />
                <div className={styles.wide}>
                    <InfoCard text={"год на рынке услуг комплексной безопасности"} title={"22"} variant={"text_v"} />
                </div>
                <div className={styles.wide}>
                    <InfoCard text={"Наши главные показатели — это не только цифры, " +
                        "но и доверие клиентов. Мы гордимся тем, что наши системы обеспечивают безопасность " +
                        "тысяч людей по всей стране"} title={''} gray={true} className={styles.noTitle} variant={"text_v"}
                    />
                </div>
            </div>
        </Section>
    );
};

export default Indicators;