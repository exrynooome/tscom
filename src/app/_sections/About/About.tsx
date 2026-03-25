import React, { FunctionComponent } from "react";
import styles from "./About.module.scss";
import Section from "@/components/Section";
import InfoCard from "@/components/InfoCard";

const About: FunctionComponent = () => {
    return (
        <Section
            id="about"
            id_text={"О нас"}
            title={"Направления компании"}
            description={"" +
                "Проектируем системы безопасности для государственных организаций, " +
                "объектов энергетики, связи и крупного бизнеса. Наши решения обеспечивают " +
                "защиту для спортивных комплексов, промышленных предприятий " +
                "и критически важной инфраструктуры"}
        >
            <div className={styles.grid}>
                <InfoCard icon={"database"} text={"Системы передачи данных"} />
                <InfoCard icon={"lock"} text={"Системы безопасности"} />
                <InfoCard icon={"plug"} text={"Системы электропитания"} />
            </div>
        </Section>
    );
};

export default About;