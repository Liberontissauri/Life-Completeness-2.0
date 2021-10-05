import LifeButton from '@/components/LifeButton'
import LifeNavbar from '@/components/LifeNavbar'
import React from 'react'
import styles from "@/styles/Info.module.css"

function info() {
    return (
        <div className={styles.container}>
            <LifeNavbar variant="quiz"></LifeNavbar>
            <h1 className={styles.title}>Life Completeness</h1>
            <h2 className={styles.subTitle}>Life completeness is an app to see how much of your life you have possibly lived. We will now ask you some questions to better reach this goal, are you ready?</h2>
            <LifeButton text="Yeah!" variant="dark"></LifeButton>
        </div>
    )
}

export default info
