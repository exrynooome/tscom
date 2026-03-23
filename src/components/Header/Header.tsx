'use client'

import { FunctionComponent } from "react";
import styles from "./Header.module.scss"
import Image from "next/image";
import {IconButton} from "@/components/Button";

const Header: FunctionComponent = () => {

    return (
        <div className={styles.header}>
            <Image src={"/logo_small.png"} alt={"logo"} width={112} height={40} />
            <div className={`${styles.buttons} ${styles.desktop}`}>
                <IconButton icon={"mail"} variant={"gray"} onClick={() => navigator.clipboard.writeText("info@tscom.ru")}>
                    info@tscom.ru
                </IconButton>
                <IconButton icon={"call"} variant={"gray"} onClick={() => navigator.clipboard.writeText("+78612054462")}>
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
    )
}

export default Header;