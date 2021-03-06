import LifeButton from '@/components/LifeButton'
import LifeNavbar from '@/components/LifeNavbar'
import { useRouter } from 'next/router'
import styles from '@/styles/Home.module.css'

export default function Home() {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <LifeNavbar variant="homepage"></LifeNavbar>
      <h1 className={styles.title}>Life Completeness</h1>
      <h2 className={styles.subTitle}>Live life to the fullest</h2>
      <LifeButton text="Start Now" margin="1.5rem" onClick={e => router.push("/info")}/>
      
      <img src="/background.jpg" className={styles.background}>
      </img>
      <div className={styles.backgroundOverlay}></div>
    </div>
  )
}
