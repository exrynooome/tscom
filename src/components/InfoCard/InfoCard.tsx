import { FunctionComponent } from "react";
import styles from "./InfoCard.module.scss"
import Icon, { IconName } from "@/components/Icons";

type Props = {
    text: string;
    icon?: IconName | null;
    title?: string;
}

const InfoCard: FunctionComponent<Props> = ({
                                                text,
                                                icon,
                                                title
                                            }) => {

    return (
        <div className={styles.card}>
            {icon ? (
                <Icon name={icon} />
            ) : (
                <h2>{title}</h2>
            )}
            <p className={styles.text}>{text}</p>
        </div>
    )
}

export default InfoCard;