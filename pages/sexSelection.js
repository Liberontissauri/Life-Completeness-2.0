import LifeButton from '@/components/LifeButton'
import LifeNavbar from '@/components/LifeNavbar'
import React from 'react'
import styles from "@/styles/SexSelection.module.css"
import LifeButtonIcon from '@/components/LifeButtonIcon'
import { useRouter } from 'next/router'

function SexSelection() {
    const router = useRouter();
    function selectMale() {
        const storage = window.localStorage
        storage.setItem("sex", "male")
        router.push("/ageSelection")
    }
    function selectFemale() {
        const storage = window.localStorage
        storage.setItem("sex", "female")
        router.push("/ageSelection")
    }
    return (
        <div className={styles.container}>
            <LifeNavbar variant="quiz"></LifeNavbar>
            <h1 className={styles.title}>Choose a sex</h1>
            <h2 className={styles.subTitle}>We need this information because life expectancy data is different for men and women</h2>
            <div className={styles.buttonsDiv}>
                <LifeButtonIcon img="/icons/Male.svg" margin="0 0.75rem" onClick={selectMale}></LifeButtonIcon>
                <LifeButtonIcon img="/icons/Female.svg" margin="0 0.75rem" onClick={selectFemale}></LifeButtonIcon>
            </div>
        </div>
    )
}

export default SexSelection
