// import { useContext } from "react";
// import { AuthContext } from "./AuthContext";

// export const useAuth = () => useContext(AuthContext);

import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

export const useAuth = () => useContext(AuthContext);
