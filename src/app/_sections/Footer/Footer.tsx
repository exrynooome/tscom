'use client'

import React, { FunctionComponent } from "react";
import styles from "./Footer.module.scss";
import Image from 'next/image';
import TextLink from "@/components/TextLink";

const Footer: FunctionComponent = () => {

    return (
        <>
            <section id="footer" className={`${styles.footer} ${styles.desktop}`}>
                    <div className={styles.info}>
                        <div className={styles.logo}>
                            <Image src="/logo_big.png" alt="logo" width={200} height={71} />
                            <p className={"text_16"}>Проектирование комплексных систем безопасности и технических решений</p>
                        </div>
                        <p className={"text_16 gray"}>© ООО «ТСКом» 2026
                            Все права защищены</p>
                    </div>
                    <div className={styles.links}>
                        <div className={styles.links_block}>
                            <p className={"text_18"}>Навигация</p>
                            <TextLink href="#services">Услуги</TextLink>
                            <TextLink href="#about">О нас</TextLink>
                            <TextLink href="#indicators">Показатели</TextLink>
                            <TextLink href="#office">Офис на карте</TextLink>
                            <TextLink href="#consult">Форма</TextLink>
                        </div>
                        <div className={styles.links_block}>
                            <p className={"text_18"}>Документы</p>
                            <TextLink href="/files/license.pdf">Лицензия</TextLink>
                            <TextLink href="/files/card.pdf">Карточка предприятия</TextLink>
                            <TextLink href="/files/resume.pdf">Резюме предприятия</TextLink>
                            <TextLink href="/files/policy.pdf">Политика конфиденциальности</TextLink>
                        </div>
                        <div className={styles.links_block}>
                            <p className={"text_18"}>Контакты</p>
                            <TextLink href="#footer" onClick={() => navigator.clipboard.writeText("+78612054462")}>+7 861 205-44-62</TextLink>
                            <TextLink href="#footer" onClick={() => navigator.clipboard.writeText("info@tscom.ru")}>info@tscom.ru</TextLink>
                        </div>
                    </div>
            </section>
            <section id="footer" className={`${styles.footer} ${styles.mobile}`}>
                <div className={styles.info}>
                    <Image src="/logo_big.png" alt="logo" width={200} height={71} />
                    <p className={"text_16"}>Проектирование комплексных систем безопасности и технических решений</p>
                </div>
                <div className={styles.second_block}>
                    <div className={styles.links}>
                        <div className={styles.links_block_reverse}>
                            <div className={styles.links_block}>
                                <p className={"text_18"}>Навигация</p>
                                <TextLink href="#services">Услуги</TextLink>
                                <TextLink href="#about">О нас</TextLink>
                                <TextLink href="#indicators">Показатели</TextLink>
                                <TextLink href="#office">Офис на карте</TextLink>
                                <TextLink href="#consult">Форма</TextLink>
                            </div>
                            <div className={styles.links_block}>
                                <p className={"text_18"}>Документы</p>
                                <TextLink href="/files/license.pdf">Лицензия</TextLink>
                                <TextLink href="/files/card.pdf">Карточка предприятия</TextLink>
                                <TextLink href="/files/resume.pdf">Резюме предприятия</TextLink>
                                <TextLink href="/files/policy.pdf">Политика конфиденциальности</TextLink>
                            </div>
                        </div>
                        <div className={`${styles.links_block} ${styles.desktop_links}`}>
                            <p className={"text_18"}>Контакты</p>
                            <TextLink href="#footer" onClick={() => navigator.clipboard.writeText("+78612054462")}>+7 861 205-44-62</TextLink>
                            <TextLink href="#footer" onClick={() => navigator.clipboard.writeText("info@tscom.ru")}>info@tscom.ru</TextLink>
                        </div>
                        <div className={`${styles.links_block} ${styles.mobile_links}`}>
                            <p>Контакты</p>
                            <TextLink href="tel:+78612054462">+7 861 205-44-62</TextLink>
                            <TextLink href="mailto:info@tscom.ru">info@tscom.ru</TextLink>
                        </div>
                    </div>
                    <p className={"text_16 gray"}>© ООО «ТСКом» 2026
                        Все права защищены
                    </p>
                </div>
            </section>
        </>
    );
};

export default Footer;