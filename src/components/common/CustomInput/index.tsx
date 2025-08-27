import styles from './styles.module.css';

type CustomInputProps = {
  id: string;
  label?: string;
} & React.ComponentProps<'input'>;
export function CustomInput({ type = 'text', label, id, ...args }: CustomInputProps) {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <input className={styles.input} type={type} id={id} {...args}/>
    </>
  );
}
