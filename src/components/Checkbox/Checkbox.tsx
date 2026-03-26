'use client'

import React from "react";
import styles from "./Checkbox.module.scss";
import Icon from "@/components/Icons";

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    error?: string;
    children?: React.ReactNode;
    required?: boolean;
    href: string;
}

const Checkbox: React.FC<Props> = ({
                                       checked,
                                       onChange,
                                       error,
                                       href,
                                       className = '',
                                       children,
                                       required = true,
                                   }) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.checked)
    }

    return (
        <div className={styles.container}>
            <label className={`${styles[className]}`}>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => handleChange(e)}
                    className={styles.input}
                    required={required}
                />
                <div className={`${styles.checkbox} ${checked ? styles.checked : ''} ${error ? styles.error : ''}`}>
                    {checked && (
                        <Icon className={styles.icon} name={"agree"} />
                    )}
                </div>
            </label>
            <label className={styles.label}>
                Нажимая кнопку «Отправить», я подтверждаю своё согласие на {" "}
                {children}
            </label>
        </div>
    )
}

export default Checkbox;