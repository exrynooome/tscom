'use client'

import React, {useState} from "react";
import styles from "./Input.module.scss";

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    value: string;
    onChange: (value: string) => void;
    error?: string;
    validate?: (value: string) => string | undefined;
    required?: boolean;
}

const Input: React.FC<Props> = ({
                                    value,
                                    onChange,
                                    error,
                                    validate,
                                    className = '',
                                    onBlur,
                                    required,
                                    ...restProps

                                }) => {

    const [internalError, setInternalError] = useState<string>('');
    const [touched, setTouched] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        onChange?.(newValue);

        if (touched && internalError) {
            setInternalError('');
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setTouched(true);

         if (validate) {
            const validationError = validate(value);
            setInternalError(validationError || '');
        }

        onBlur?.(e);
    };

    const displayError = error || (touched ? internalError : '');

    return (
        <div className={`${styles.input} ${styles[className]}`}>
            <div className={`${displayError ? styles.error : ''}`}>
                <input
                    value={value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required={required}
                    className={`${styles.inputField} ${displayError ? styles.error : ''}`}
                    {...restProps}
                />
            </div>
            <div className={styles.inputFooter}>
                {displayError && (
                    <p className={`text_14 ${styles.errorMessage}`}>{displayError}</p>
                )}
            </div>
        </div>
    )
}

export default Input;