import React, {FunctionComponent} from "react";
import styles from "./Services.module.scss";
import Section from "@/components/Section";
import Button from "@/components/Button";

const Services: FunctionComponent = () => {

    return (
        <Section title="Проектирование и техническое обслуживание" id_text={"Услуги"} id={"services"}>
            <div className={styles.content}>
                <div className={styles.info}>
                    <div className={styles.text}>
                        <p className={"text_24 sbold"}>Проектные работы</p>
                        <p className={"text_18 gray"}>
                            Проектные работы; авторский надзор за работами,
                            выполняемыми по нашим проектам; техническое обслуживание построенных систем.
                            Проектно-сметные решения проходили государственную экспертизу
                        </p>
                    </div>
                    <div className={styles.text}>
                        <p className={"text_24 sbold"}>Проектируем и осуществляем сопровождение</p>
                        <p className={"text_18 gray"}>
                            Изыскательские, проектно-сметные работы систем безопасности (АПС, ОПС, СОУЭ, СКУД),
                            видеонаблюдение, мониторинг и передача извещений о пожаре с автоматическим выводом
                            сигнала на пульт «01», комплексы мониторинга различного назначения
                        </p>
                    </div>
                </div>
                <div className={`${styles.button} ${styles.fullScreen}`}>
                    <Button width={"hug"} href={"#consult"}>Бесплатная консультация</Button>
                </div>
                <div className={`${styles.button} ${styles.smallScreen}`}>
                    <Button width={"full"} href={"#consult"}>Бесплатная консультация</Button>
                </div>
            </div>
        </Section>
    );
};

export default Services;