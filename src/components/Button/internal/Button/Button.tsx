import React, { FunctionComponent } from "react";
import styles from "./Button.module.scss";
import Icon, { IconName } from "@/components/Icons";

type Props = {
    leftIcon?: IconName | null;
    rightIcon?: IconName | null;
    href?: string;
    onClick?: React.MouseEventHandler;
    children?: React.ReactNode;
    width?: "full" | "hug";
    className?: string;
}

const Button: FunctionComponent<Props> = ({
                                              onClick,
                                              href,
                                              children,
                                              leftIcon = null,
                                              rightIcon = null,
                                              width = "full",
                                              className,
                                              ...props
                                          }) => {
    const content = (
        <>
            {leftIcon && <Icon name={leftIcon} />}
            <p className={`text_18 sbold ${styles.text}`}>{children}</p>
            {rightIcon && <Icon name={rightIcon} />}
        </>
    );

    const classNameResult = `${styles.button} ${styles[width]} ${className}`;

    return (
        <>
            {href ? (
                <a
                    className={classNameResult}
                    onClick={onClick}
                    href={href}
                    {...props}
                >
                    {content}
                </a>
            ) : (
                <button
                    className={classNameResult}
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

export default Button;