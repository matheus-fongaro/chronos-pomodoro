import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { CustomInput } from '../common/CustomInput';
import { Cycles } from '../Cycles';
import { CustomBtn } from '../common/CustomBtn'
import styles from './styles.module.css';

export function TaskForm() {
  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Lógica para lidar com o envio do formulário
  };
  return (
    <form onSubmit={onFormSubmit} className={styles.form}>
      <div className={styles['form-row']}>
        <CustomInput
          id='task-name'
          label='task'
          placeholder='Digite o nome da task'
        />
      </div>
      <div className={styles['form-row']}>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className={styles['form-row']}>
        <Cycles />
      </div>
      <div className={styles['form-row']}>
        <CustomBtn color='error'>
          <StopCircleIcon className={styles['btn-icon']}/>
          {/* <PlayCircleIcon className={styles['btn-icon']}/> */}
        </CustomBtn>
      </div>
    </form>
  );
}
