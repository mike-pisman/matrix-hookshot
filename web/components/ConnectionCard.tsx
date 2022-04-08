import { h } from "preact";
import { useEffect, useState, useCallback } from 'preact/hooks';
import style from "./ConnectionCard.module.scss";

interface IProps {
    imageSrc: string;
    serviceName: string;
    description: string;
    onClick: () => void;
}

export function ConnectionCard(props: IProps) {
    return <div className={style.card} onClick={props.onClick}>
        <img src={props.imageSrc}></img>
        <div>
            <span>{props.serviceName}</span>
            <p>{props.description}</p>
        </div>
    </div>;
} 