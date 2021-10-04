import React from 'react'
import styles from "./style.module.css"

function LifeNavbar(props) {
    let isHomePage, isQuiz
    switch (props.variant) {
        case "homepage":
            isHomePage = true;
            break;
        case "quiz":
            isQuiz = true;
            break;
        default:
            isHomePage = true;
            break;
    }
    return (
        <div className={styles.navbar}>
            <div className={styles.left}></div>
            <div className={styles.center}>
                <h1 className={`${isQuiz ? styles.quizPage : "" } ${isHomePage ? styles.homePage : "" }`}>Life Completeness</h1>
            </div>
            <div className={styles.right}></div>
        </div>
    )
}

export default LifeNavbar
