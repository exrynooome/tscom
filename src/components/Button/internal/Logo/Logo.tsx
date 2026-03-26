import React, { FunctionComponent } from "react";
import Icon from "@/components/Icons";
import styles from "./Logo.module.scss";

type Props = {
    variant: "logo_small" | "logo_big";
    href?: string;
}

const LogoButton: FunctionComponent<Props> = ({
                                                  href,
                                                  variant,
                                                  ...props
                                              }) => {

    const content = (
        <>
            <Icon name={variant} />
        </>
    )

    return (
                <a
                    className={`${styles.logo} ${styles[variant]}`}
                    href={href}
                    {...props}
                >
                    {content}
                </a>
    )
};

export default LogoButton;