import styles from './styles.module.css';

type CustomBtnProps = {
  children: React.ReactNode;
  color?: 'primary' | 'error' | 'warning' | 'info';
} & React.ComponentProps<'button'>;
export function CustomBtn({ children, color = 'primary', ...args }: CustomBtnProps) {
  return (
    <button className={`${styles.btn} ${styles[color]}`} {...args}>
      {children}
    </button>
  );
}
