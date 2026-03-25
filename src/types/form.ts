export interface FormErrors {
    name: string;
    phone: string;
    email: string;
    checkbox: string;
}

export interface FormSubmitData {
    name: string;
    phone: string;
    email: string;
    timestamp: string;
    agreedToPolicy?: boolean;
}