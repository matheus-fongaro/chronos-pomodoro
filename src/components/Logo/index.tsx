import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Logo() {
  return <div className={styles.logo}>
    <a className={styles['logo-link']} href="#">
      <TimerIcon/>
      <h1>Chronos</h1>
    </a>
  </div>;
}
