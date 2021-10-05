import React from 'react'
import styles from "./style.module.css"

function LifeButtonIcon(props) {
    return (
        <div style={{margin: props.margin}}>
            <button className={`${styles.button}`} onClick={props.onClick}>
                <img src={props.img}></img>
            </button>
        </div>
    )
}

export default LifeButtonIcon
