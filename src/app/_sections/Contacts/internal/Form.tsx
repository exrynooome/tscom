'use client'

import React, {FormEvent, FunctionComponent, useEffect, useState} from "react";
import styles from "./Form.module.scss";
import Input from "@/components/Input";
import Checkbox from "@/components/Checkbox";
import { FormErrors, FormSubmitData } from "@/types/form";
import { validateEmail, validatePhone, validateFormData, validateName } from "@/utils/validate";
import Button from "@/components/Button";
import Icon from "@/components/Icons";
import TextLink from "@/components/TextLink";

const Form: FunctionComponent = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [checked, setChecked] = useState<boolean>(false);

    const [errors, setErrors] = useState<FormErrors>({
        name: '',
        phone: '',
        email: '',
        checkbox: ''
    });

    const [isSubmited, setIsSubmited] = useState(false);

    useEffect(() => {
        if (!isSubmited) return;

        const scrollY = window.scrollY;

        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = "0";
        document.body.style.right = "0";
        document.body.style.width = "100%";
        document.body.style.overflow = "hidden";
        document.body.style.touchAction = "none";

        return () => {
            const top = document.body.style.top;

            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.left = "";
            document.body.style.right = "";
            document.body.style.width = "";
            document.body.style.overflow = "";
            document.body.style.touchAction = "";

            const y = top ? Math.abs(parseInt(top, 10)) : 0;
            window.scrollTo(0, y);
        };
    }, [isSubmited]);

    const clearFieldError = (fieldName: keyof FormErrors) => {
        if (errors[fieldName]) {
            setErrors(prev => {
                const newErrors = { ...prev, [fieldName]: '' };
                return newErrors;
            });
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const validationErrors = validateFormData({
            name,
            phone,
            email,
            agreedToPolicy: checked,
        });

        if (Object.keys(validationErrors).length > 0) {
            setErrors({
                name: validationErrors.name || '',
                phone: validationErrors.phone || '',
                email: validationErrors.email || '',
                checkbox: validationErrors.checkbox || '',
            });
            return;
        }

        setErrors({
            name: '',
            phone: '',
            email: '',
            checkbox: ''
        });

        try {
            const formData: FormSubmitData = {
                name,
                phone,
                email,
                timestamp: new Date().toISOString(),
                agreedToPolicy: checked,
            };

            const response = await fetch('/api/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok) {
                setName('');
                setPhone('');
                setEmail('');
                setChecked(false);
                setIsSubmited(true);
            } else {
                if (result.fieldErrors) {
                    setErrors({
                        name: result.fieldErrors.name || '',
                        phone: result.fieldErrors.phone || '',
                        email: result.fieldErrors.email || '',
                        checkbox: result.fieldErrors.checkbox || ''
                    });
                }
            }

        } catch (error) {
            console.error(error);
        }
    };

    const closeModal = () => setIsSubmited(false);

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit} noValidate={true}>
                <div className={styles.inputs}>
                    <Input
                        value={name}
                        onChange={(value) => {
                            setName(value);
                            clearFieldError('name')
                        }}
                        validate={validateName}
                        type={"text"}
                        required={true}
                        placeholder="Ваше имя"
                        error={errors.name}
                    />
                    <Input value={email}
                           onChange={(value) => {
                               setEmail(value);
                               clearFieldError('email')
                           }}
                           validate={validateEmail}
                           type={"email"}
                           required={true}
                           placeholder="Электронная почта"
                           error={errors.email}
                    />
                    <Input
                        value={phone}
                        onChange={(value) => {
                            setPhone(value);
                            clearFieldError('phone')
                        }}
                        validate={validatePhone}
                        type={"tel"}
                        required={true}
                        placeholder="Телефон"
                        error={errors.phone}
                    />
                </div>
                <Checkbox
                    checked={checked}
                    onChange={(value) => {setChecked(value); if (errors.checkbox) setErrors({ ...errors, checkbox: ''})}}
                    required={true}
                    href={"/files/policy.pdf"}
                    error={errors.checkbox}
                >
                <TextLink href={"/files/policy.pdf"} variant={"policy"} error={errors.checkbox}>
                        обработку персональных данных
                    </TextLink>
                </Checkbox>

                <Button type="submit">
                    Отправить
                </Button>
            </form>
            {isSubmited && (
                <div className={styles.overlay} onClick={closeModal}>
                    <div
                        className={styles.modal}
                        onClick={(e) => e.stopPropagation()}
                        role="dialog"
                        aria-modal="true"
                    >
                        <div className={styles.info}>
                            <Icon name={"checkmark"} />
                            <p className={styles.text}>Заявка отправлена</p>
                        </div>
                        <Button className={styles.button} onClick={closeModal}>
                            Хорошо
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Form;