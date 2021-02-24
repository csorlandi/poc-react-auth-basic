import { Redirect, Route, RouteProps } from "react-router-dom";
import { useAuth } from "../contexts/auth";
import Loading from "../pages/Loading";

interface Props extends RouteProps {
  isPrivate?: boolean;
  signed?: boolean;
}

export default function CustomRoute({ isPrivate = false, signed = false, ...rest }: Props) {
  const { loading } = useAuth();

  if (loading) {
    return <Loading />
  }

  if (isPrivate && !signed) {
    return <Redirect to="/" />;
  } else if (!isPrivate && signed) {
    return <Redirect to="/dashboard" />;
  }

  return <Route {...rest} />
}