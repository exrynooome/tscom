import React from "react";
import styles from "./TextLink.module.scss";
import Link from "next/link";

type Props = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & {
    href?: string;
    error?: string;
    variant?: "default" | "policy";
}

const TextLink: React.FC<Props> = ({
                                       className,
                                       onClick,
                                       href = "/",
                                       children,
                                       variant = "default",
                                       error,
                                       ...props
                                   }) => {

    return (
        <Link
            className={`${styles.link} ${className ? ` ${styles[className]}` : ""} text_18 ${styles[variant]} ${error ? styles.error : ""}`}
            onClick={onClick}
            href={onClick ? '' : href}
            {...props}
        >
            {children}
        </Link>
    )
}

export default TextLink;