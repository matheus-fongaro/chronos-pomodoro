import { Container } from './components/common/Container/';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { Countdown } from './components/Countdown';
import { TaskForm } from './components/TaskForm';
import { CustomFooter } from './components/CustomFooter';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <Countdown />
      </Container>
      <Container>
        <TaskForm />
      </Container>
      <Container>
        <CustomFooter />
      </Container>
    </>
  );
}
