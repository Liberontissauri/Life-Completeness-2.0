import LifeButton from '@/components/LifeButton'
import LifeNavbar from '@/components/LifeNavbar'
import React, {useEffect} from 'react'
import styles from "@/styles/Results.module.css"
import { useRouter } from 'next/router'
import LifeProgressBar from '@/components/LifeProgressBar'

function Results() {
    const router = useRouter();
    useEffect(() => {
        const storage = window.localStorage
        if(!storage.getItem("sex") || !storage.getItem("age")) {
            router.push("/")
        }
    })
    return (
        <div className={styles.container}>
            <LifeNavbar variant="quiz"></LifeNavbar>
            <h1 className={styles.title}>Congrats, you have lived 50% of your life!</h1>
            <h2 className={styles.subTitle}>This information was estimated using data from worldometers.info</h2>
            <LifeProgressBar percentage={80} margin={"0 0 40px 0"}></LifeProgressBar>
            <h3 className={styles.statisticEntry}>You have lived for 45 years.</h3>
            <h3 className={styles.statisticEntry}>You have lived for 45 years.</h3>
            <h3 className={styles.statisticEntry}>You have lived for 45 years.</h3>
            <h3 className={styles.statisticEntry}>You have lived for 45 years.</h3>
            <h3 className={styles.statisticEntry}>You have lived for 45 years.</h3>
            <h3 className={styles.statisticEntry}>You have lived for 45 years.</h3>
            <h3 className={styles.statisticEntry}>You have lived for 45 years.</h3>
            <LifeButton text="Share!" variant="dark" margin="35px"></LifeButton>
        </div>
    )
}

export default Results
