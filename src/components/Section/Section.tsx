import React, { FunctionComponent } from "react";
import styles from "./Section.module.scss";

type Props = {
    title: string;
    id: string;
    id_text: string;
    description?: string | null;
    children?: React.ReactNode;
}

const Section: FunctionComponent<Props> = ({
                                            title,
                                            description = null,
                                            id,
                                            id_text,
                                            children,
                                 }) => {
    return (
        <section id={id} className={styles.section}>
            <p className={styles.id}>{id_text}</p>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h3>{title}</h3>
                    {description && (
                        <p className={`${styles.desc} gray`}>{description}</p>
                    )}
                </div>
                {children}
            </div>
        </section>
    );
};

export default Section;