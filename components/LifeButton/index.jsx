import React from 'react'
import styles from "./style.module.css"

function LifeButton(props) {
    let isDark, isLight;
    switch (props.variant) {
        case "light":
            isLight = true;
            break;
        case "dark":
            isDark = true;
            break;
        default:
            isLight = true;
            break;
    }
    return (
        <div style={{margin: props.margin}}>
            <button className={`${styles.button} ${isDark ? styles.dark : ""}`} onClick={props.onClick}>{props.text}</button>
        </div>
    )
}

export default LifeButton
