import React from 'react'
import styles from "./style.module.css"

function LifeInput(props) {
    function changeLetter(e) {
        const input = e.key;
        const number_check_regex = new RegExp("^[0-9]+$");
        if(!number_check_regex.test(input)) e.preventDefault()
    }
    return (
        <div style={{margin: props.margin}}>
            <input className={styles.input} onKeyPress={changeLetter} onChange={(e) => props.onChange(e.target.value)}></input>
        </div>
    )
}

export default LifeInput
