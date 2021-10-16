import LifeButton from '@/components/LifeButton'
import LifeNavbar from '@/components/LifeNavbar'
import React, {useState} from 'react'
import styles from "@/styles/AgeSelection.module.css"
import { useRouter } from 'next/router'
import LifeInput from '@/components/LifeInput'

function AgeSelection() {
    const router = useRouter();
    const [age, setAge] = useState("0")
    
    function selectAge() {
        const storage = window.localStorage
        storage.setItem("age", age)
        router.push("/results")
    }

    return (
        <div className={styles.container}>
            <LifeNavbar variant="quiz"></LifeNavbar>
            <h1 className={styles.title}>Input your age</h1>
            <h2 className={styles.subTitle}>We need this information to determine how much of your life you have already lived</h2>
            <LifeInput margin={"0 0 1.5rem 0"} onChange={(input) => setAge(input)}></LifeInput>
            <LifeButton text="Done" variant="dark" onClick={selectAge}></LifeButton>
        </div>
    )
}

export default AgeSelection;