import React from 'react'
import styles from "./style.module.css"

function LifeProgressBar(props) {
    return (
        <div style={{margin: props.margin}}>
            <div className={styles.outerBar}>
                <div className={styles.innerBar} style={{width: `${props.percentage}%`}}></div>
            </div>
        </div>
    )
}

export default LifeProgressBar