import LifeNavbar from '@/components/LifeNavbar'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <LifeNavbar variant="homepage"></LifeNavbar>
      
      <img src="/background.jpg" className={styles.background}>
      </img>
      <div className={styles.backgroundOverlay}></div>
    </div>
  )
}
