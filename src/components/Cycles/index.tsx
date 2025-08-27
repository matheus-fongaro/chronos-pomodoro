import styles from './styles.module.css'

export function Cycles() {
  return (
    <>
      <p>Ciclos:</p>
      <div className={styles['cycle-dots']}>
        <span className={`${styles['cycle-dot']} ${styles['work-time']}`}></span>
        <span className={`${styles['cycle-dot']} ${styles['short-rest-time']}`}></span>
        <span className={`${styles['cycle-dot']} ${styles['work-time']}`}></span>
        <span className={`${styles['cycle-dot']} ${styles['short-rest-time']}`}></span>
        <span className={`${styles['cycle-dot']} ${styles['work-time']}`}></span>
        <span className={`${styles['cycle-dot']} ${styles['short-rest-time']}`}></span>
        <span className={`${styles['cycle-dot']} ${styles['work-time']}`}></span>
        <span className={`${styles['cycle-dot']} ${styles['long-rest-time']}`}></span>
      </div>
    </>
  );
}
