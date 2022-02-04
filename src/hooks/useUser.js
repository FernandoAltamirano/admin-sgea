import { useContext } from "react";
import { UserContext } from "../context/ContextProvider";

export const useUser = () => useContext(UserContext);
