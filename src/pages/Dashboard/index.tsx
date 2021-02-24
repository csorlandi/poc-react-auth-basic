import logo from '../../assets/logo.png';
import { useAuth } from '../../contexts/auth';

import * as Styles from './styles';

function Dashboard() {
  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <Styles.Container>
      <Styles.Logo src={logo} alt="Orlab's Logo"/>
      <Styles.Button onClick={handleSignOut}>SIGN OUT</Styles.Button>
    </Styles.Container>
  )
}

export default Dashboard;