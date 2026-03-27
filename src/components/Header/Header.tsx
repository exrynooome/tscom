'use client'

import { FunctionComponent, useState } from "react";
import styles from "./Header.module.scss"
import { IconButton } from "@/components/Button";
import LogoButton from "@/components/Button/internal/Logo";

const Header: FunctionComponent = () => {

    const [emailV, setEmailV] = useState(false);
    const [phoneV, setPhoneV] = useState(false);

    const Email = async () => {
        await navigator.clipboard.writeText("info@tscom.ru");
        setEmailV(false);
        requestAnimationFrame(() => setEmailV(true));
    };

    const Phone = async () => {
        await navigator.clipboard.writeText("+78612054462");
        setPhoneV(false);
        requestAnimationFrame(() => setPhoneV(true));
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <LogoButton variant={"logo_small"} href={"/"} />
                <div className={`${styles.buttons} ${styles.desktop}`}>
                    <IconButton icon={"mail"} variant={"gray"} onClick={Email} visible={emailV} onHidden={() => setEmailV(false)}>
                        info@tscom.ru
                    </IconButton>
                    <IconButton icon={"call"} variant={"gray"} onClick={Phone} visible={phoneV} onHidden={() => setPhoneV(false)} >
                        +7 861 205-44-62
                    </IconButton>
                    <IconButton icon={"call_reseived"} variant={"green"} href={"#consult"}>
                        Бесплатная консультация
                    </IconButton>
                </div>
                <div className={`${styles.buttons} ${styles.mobile}`}>
                    <IconButton icon={"call"} variant={"gray"} href="tel:+78612054462">
                        +7 861 205-44-62
                    </IconButton>
                    <IconButton icon={"mail"} variant={"gray"} href="mailto:info@tscom.ru">
                        info@tscom.ru
                    </IconButton>
                    <IconButton icon={"call_reseived"} variant={"green"} href={"#consult"}>
                        Бесплатная консультация
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Header;