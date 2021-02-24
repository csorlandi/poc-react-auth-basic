import logo from '../../assets/logo.png';

import * as Styles from './styles';

function Dashboard() {
  return (
    <Styles.Container>
      <Styles.Logo src={logo} alt="Orlab's Logo"/>
      <Styles.Button>SIGN OUT</Styles.Button>
    </Styles.Container>
  )
}

export default Dashboard;