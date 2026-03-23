import React, { FunctionComponent } from "react";
import styles from "./Main.module.scss";
import Button from "@/components/Button";

const Main: FunctionComponent = () => {
    return (
        <section id="main" className={styles.main}>
            <div className={styles.text}>
                <h1>ТСКОМ</h1>
                <p className={"text_32"}>Комплесные системы безопасности</p>
            </div>
            <Button width={"hug"}>Бесплатная консультация</Button>
        </section>
    );
};

export default Main;