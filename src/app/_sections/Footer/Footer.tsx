'use client'

import React, { FunctionComponent } from "react";
import styles from "./Footer.module.scss";
import TextLink from "@/components/TextLink";
import LogoButton from "@/components/Button/internal/Logo";

const Footer: FunctionComponent = () => {

    return (
        <>
            <section id="footer" className={`${styles.container} ${styles.desktop}`}>
                <div className={styles.footer}>
                    <div className={styles.info}>
                        <div className={styles.logo}>
                            <LogoButton variant={"logo_big"} href={"/"} />
                            <p className={"text_16"}>Проектирование комплексных систем безопасности и технических решений</p>
                        </div>
                        <p className={styles.desc}>
                            © ООО «ТСКом» 2026
                            Все права защищены
                        </p>
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
                            <TextLink href="/files/license.pdf" target="_blank" rel="noopener noreferrer">Лицензия</TextLink>
                            <TextLink href="/files/card.pdf" target="_blank" rel="noopener noreferrer">Карточка предприятия</TextLink>
                            <TextLink href="/files/resume.pdf" target="_blank" rel="noopener noreferrer">Резюме предприятия</TextLink>
                            <TextLink href="/files/policy.pdf" target="_blank" rel="noopener noreferrer">Политика конфиденциальности</TextLink>
                        </div>
                        <div className={styles.links_block}>
                            <p className={"text_18"}>Контакты</p>
                            <TextLink onClick={() => navigator.clipboard.writeText("+78612054462")}>+7 861 205-44-62</TextLink>
                            <TextLink onClick={() => navigator.clipboard.writeText("info@tscom.ru")}>info@tscom.ru</TextLink>
                        </div>
                    </div>
                </div>
            </section>
            <section id="footer" className={`${styles.footer} ${styles.mobile}`}>
                <div className={styles.info}>
                    <LogoButton variant={"logo_big"} href={"/"} />
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
                                <TextLink href="/files/license.pdf" target="_blank" rel="noopener noreferrer">Лицензия</TextLink>
                                <TextLink href="/files/card.pdf" target="_blank" rel="noopener noreferrer">Карточка предприятия</TextLink>
                                <TextLink href="/files/resume.pdf" target="_blank" rel="noopener noreferrer">Резюме предприятия</TextLink>
                                <TextLink href="/files/policy.pdf" target="_blank" rel="noopener noreferrer">Политика конфиденциальности</TextLink>
                            </div>
                        </div>
                        <div className={`${styles.links_block} ${styles.desktop_links}`}>
                            <p className={"text_18"}>Контакты</p>
                            <TextLink onClick={() => navigator.clipboard.writeText("+78612054462")}>+7 861 205-44-62</TextLink>
                            <TextLink onClick={() => navigator.clipboard.writeText("info@tscom.ru")}>info@tscom.ru</TextLink>
                        </div>
                        <div className={`${styles.links_block} ${styles.mobile_links}`}>
                            <p className={"text_18"}>Контакты</p>
                            <TextLink href="tel:+78612054462">+7 861 205-44-62</TextLink>
                            <TextLink href="mailto:info@tscom.ru">info@tscom.ru</TextLink>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        © ООО «ТСКом» 2026.
                        Все права защищены
                    </p>
                    <p className={styles.mobile_desc}>
                        © ООО «ТСКом» 2026
                        Все права защищены
                    </p>
                </div>
            </section>
        </>
    );
};

export default Footer;