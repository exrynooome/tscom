import React, { FunctionComponent } from "react";
import styles from "./IconButton.module.scss";
import Icon, { IconName } from "@/components/Icons";

type Props = {
    variant: "gray" | "green";
    icon: IconName;
    href?: string;
    onClick?: React.MouseEventHandler;
    children?: React.ReactNode;
    className?: string;
}

const IconButton: FunctionComponent<Props> = ({
                                              onClick,
                                              href,
                                              children,
                                              className,
                                              icon,
                                              variant,
                                              ...props
                                          }) => {
    const classNameFull = `${styles.button} ${styles[variant]} ${styles.className}`;

    const content = (
        <>
            <p className={`text_16`}>{children}</p>
            <Icon name={icon} />
        </>
    )

    return (
        <>
            {href ? (
                <a
                    className={classNameFull}
                    onClick={onClick}
                    href={href}
                    {...props}
                >
                    {content}
                </a>
            ) : (
                <button
                    className={classNameFull}
                    onClick={onClick}
                    type="button"
                    {...props}
                >
                    {content}
                </button>
            )}
        </>
    );
};

export default IconButton;