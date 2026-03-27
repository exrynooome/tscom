import React, {FunctionComponent } from "react";
import styles from "./IconButton.module.scss";
import Icon, { IconName } from "@/components/Icons";
import CopyToast from "@/components/CopyToast";

type Props = {
    variant: "gray" | "green";
    icon: IconName;
    visible?: boolean;
    onHidden?: () => void;
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
                                              visible,
                                              onHidden,
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
                <div className={styles.container}>
                    <button
                        className={classNameFull}
                        onClick={onClick}
                        type="button"
                        {...props}
                    >
                        {content}
                    </button>
                    {visible && (
                        <CopyToast visible={visible} onHidden={onHidden} placement={"top"} />
                    )}
                </div>
            )}
        </>
    );
};

export default IconButton;