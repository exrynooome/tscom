export const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) {
        return 'Введите email'
    }

    if (!email) return undefined;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return 'Введите корректный email';
    }

    return undefined;
};

export const validatePhone = (phone: string): string | undefined => {
    if (!phone.trim()) {
        return 'Введите телефон'
    }

    if (!phone) return undefined;

    const phoneRegex = /^[\d\s\+\-\(\)]{10,}$/;
    if (!phoneRegex.test(phone)) {
        return 'Введите корректный номер телефона';
    }

    return undefined;
};

export const validateName = (name: string): string | undefined => {
    if (!name.trim()) {
        return 'Введите имя'
    }

    if (name.trim().length < 2) {
        return 'Имя должно содержать минимум 2 символа';
    }

    return undefined;
};

export interface FormValidationErrors {
    name?: string;
    phone?: string;
    email?: string;
    [key: string]: string | undefined;
}

export const validateFormData = (data: {
    name: string;
    phone: string;
    email: string;
    agreedToPolicy?: boolean;
}): FormValidationErrors => {
    const errors: FormValidationErrors = {};

    const nameValidationError = validateName(data.name);
    if (nameValidationError) {
        errors.name = nameValidationError;
    }

    const phoneValidationError = validatePhone(data.phone);
    if (phoneValidationError) {
        errors.phone = phoneValidationError;
    }

    const emailValidationError = validateEmail(data.email);
    if (emailValidationError) {
        errors.email = emailValidationError;
    }

    if (!data.agreedToPolicy) {
        errors.checkbox = 'Необходимо согласие на обработку данных';
    }

    return errors;
};