import styles from './styles.module.css';

export function CustomFooter() {
  return (
    <footer className={styles.footer}>
      <a href='#'>Entenda como funciona a técnica Pomodoro</a>
      <p>Feito com 💚 por <a href="https://www.linkedin.com/in/matheus-fongaro/">Matheus Fongaro</a></p>
      <p>Chronos Pomodoro &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}
