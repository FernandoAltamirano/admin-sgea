import { Redirect, Route } from "react-router-dom";
import { useUser } from "../hooks/useUser";

export default function PublicRoute({ component, path, ...rest }) {
  const [{ user }, _] = useUser();

  return (
    <>
      {!user ? (
        <Route path={path} component={component} {...rest} />
      ) : (
        <Redirect to="/dashboard/profile" />
      )}
    </>
  );
}
