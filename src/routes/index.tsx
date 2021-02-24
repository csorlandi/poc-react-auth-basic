import { Switch } from 'react-router-dom';
import { useAuth } from '../contexts/auth';

import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';

import CustomRoute from './Route';

export default function Routes() {
  const { signed } = useAuth();

  return (
    <Switch>
      <CustomRoute path="/dashboard" component={Dashboard} signed={signed} isPrivate exact />
      <CustomRoute path="/" component={SignIn} signed={signed} />
    </Switch>
  )
}