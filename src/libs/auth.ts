import { useEffect } from "react";
import { getProfile } from "./spotify";
import { useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store";
import { login, storeUser } from "../store/auth";

export const useAuth = () => {
	const { isAuthenticated, accessToken, user } = useAppSelector(
		(state) => state.auth
	);
	const dispatch = useAppDispatch();
	const history = useHistory();

	useEffect(() => {
		if (!isAuthenticated && window.location.hash) {
			const params: string[] = window.location.hash.substr(1).split("&");
			params.forEach((param: string) => {
				const [key, value]: string[] = param.split("=");
				if (key === "access_token") dispatch(login(value));
			});
		}
		if (isAuthenticated && user === null) {
			getProfile(accessToken).then(({ data }) => {
				dispatch(storeUser(data));
				history.push("/create-playlist");
			});
		}
	}, [isAuthenticated, accessToken, user, history, dispatch]);

	return useAppSelector((state) => state.auth);
};