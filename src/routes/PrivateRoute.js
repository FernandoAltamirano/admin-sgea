import { Redirect, Route } from "react-router-dom";
import { useUser } from "../hooks/useUser";

export default function PrivateRoute({ component, path, ...rest }) {
  const [{ user }, _] = useUser();

  return (
    <>
      {user ? (
        <Route path={path} component={component} {...rest} />
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
}
