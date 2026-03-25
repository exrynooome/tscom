import React, { FunctionComponent } from "react";
import Section from "@/components/Section";
import Form from './internal'

const Contacts: FunctionComponent = () => {

    return (
        <Section id="consult" title={"Бесплатная консультация"} id_text="Контакты">
            <Form />
        </Section>
    );
};

export default Contacts;