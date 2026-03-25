import React from "react";
import styles from "./TextLink.module.scss";
import Link from "next/link";

type Props = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & {
    href?: string;
    error?: string;
}

const TextLink: React.FC<Props> = ({
                                       className,
                                       onClick,
                                       href = "/",
                                       children,
                                       error,
                                       ...props
                                   }) => {

    return (
        <Link
            className={`${styles.link} ${className ? ` ${styles[className]}` : ""}`}
            onClick={onClick}
            href={href}
            {...props}
        >
            <p className={"text_18"}>{children}</p>
        </Link>
    )
}

export default TextLink;