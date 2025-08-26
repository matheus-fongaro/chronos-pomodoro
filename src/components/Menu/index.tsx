import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Menu() {
  return (
    <nav className={styles.menu}>
      <a href='#' className={styles['menu-link']}><HouseIcon /></a>
      <a href='#' className={styles['menu-link']}><HistoryIcon /></a>
      <a href='#' className={styles['menu-link']}><SettingsIcon /></a>
      <a href='#' className={styles['menu-link']}><SunIcon /></a>
    </nav>
  );
}
