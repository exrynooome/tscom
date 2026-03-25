import { FunctionComponent } from "react";
import styles from "./InfoCard.module.scss"
import Icon, { IconName } from "@/components/Icons";

type Props = {
    text: string;
    icon?: IconName | null;
    title?: string;
    className?: string;
    gray?: boolean;
    variant?: "text_v" | "icon";
}

const InfoCard: FunctionComponent<Props> = ({
                                                text,
                                                icon,
                                                title,
                                                className = "",
                                                gray = false,
                                                variant = "icon"
                                            }) => {

    return (
        <div className={`${styles.card} ${styles[className]} ${styles[variant]} ${gray ? styles.gray : ''}`}>
            {icon ? (
                <Icon name={icon} />
            ) : gray ? (null) : (
                <h2>{title}</h2>
            )
            }
            <p className={`${styles.text} ${gray ? styles.gray_t : ''}`}>{text}</p>
        </div>
    )
}

export default InfoCard;