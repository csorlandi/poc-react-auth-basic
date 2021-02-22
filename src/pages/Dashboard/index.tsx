import logo from '../../assets/logo.png';

import * as Styles from './styles';

function Dashboard() {
  return (
    <Styles.Container>
      <Styles.Logo src={logo} alt="CL Logo"/>
    </Styles.Container>
  )
}

export default Dashboard;