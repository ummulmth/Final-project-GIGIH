import { UserProfile, Track } from "./spotify";

export interface PlaylistState {
	tracks: Track[];
	selectedTracks: string[];
	form: {
		title: string;
		description: string;
	};
}

export interface AuthState {
	isAuthenticated: boolean;
	accessToken: string;
	user: UserProfile | null;
}