import LifeButton from '@/components/LifeButton'
import LifeNavbar from '@/components/LifeNavbar'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <LifeNavbar variant="homepage"></LifeNavbar>
      <h1 className={styles.title}>Life Completeness</h1>
      <h2 className={styles.subTitle}>Live life to the fullest</h2>
      <LifeButton margin="1.5rem"/>
      
      <img src="/background.jpg" className={styles.background}>
      </img>
      <div className={styles.backgroundOverlay}></div>
    </div>
  )
}
