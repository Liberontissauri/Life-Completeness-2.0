import React from 'react'
import styles from "./style.module.css"

function LifeButton(props) {
    
    return (
        <div style={{margin: props.margin}}>
            <button className={styles.button}>Start Now</button>
        </div>
    )
}

export default LifeButton
