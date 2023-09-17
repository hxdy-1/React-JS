import { redirect } from "react-router-dom";
import { getAuthToken } from "../utils/auth";

export const action = () => {
	localStorage.removeItem("token");
	return redirect("/");
};

export const loader = () => {
	return getAuthToken();
};
