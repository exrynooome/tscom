'use client'

import React, { useEffect, useMemo, useState } from 'react';
import styles from './CopyToast.module.scss';
import Icon from "@/components/Icons";

type CopyToastProps = {
    text?: string;
    visible: boolean;
    duration?: number;
    placement?: 'top' | 'bottom';
    onHidden?: () => void;
};

export const CopyToast: React.FC<CopyToastProps> = ({
                                                        text = 'Скопировано',
                                                        visible,
                                                        duration = 1200,
                                                        placement = 'top',
                                                        onHidden,
                                                    }) => {
    const [render, setRender] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    const placementClass = useMemo(() => {
        if (placement === 'bottom') return styles.bottom;
        return styles.top;
    }, [placement]);

    useEffect(() => {
        let hideTimer: ReturnType<typeof setTimeout>;
        let unmountTimer: ReturnType<typeof setTimeout>;

        if (visible) {
            setRender(true);
            setFadeOut(false);

            hideTimer = setTimeout(() => setFadeOut(true), duration);
            unmountTimer = setTimeout(() => {
                setRender(false);
                onHidden?.();
            }, duration + 400);
        } else {
            setRender(false);
            setFadeOut(false);
        }

        return () => {
            clearTimeout(hideTimer);
            clearTimeout(unmountTimer);
        };
    }, [visible, duration, onHidden]);

    if (!render) return null;

    return (
        <div className={`${styles.container} ${placementClass} ${fadeOut && styles.fadeOut}`}>
            <div className={`${styles.corner} ${placementClass}`}>
                <Icon name={"corner"} />
            </div>
            <div
                className={`${styles.toast}`}
            >
                <p className={"text_14"}>{text}</p>
            </div>
        </div>
    );
};

export default CopyToast;