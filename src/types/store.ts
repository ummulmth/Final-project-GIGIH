import { Artist, Track, UserProfile } from "./spotify";

export interface selectedTrack {
	uri: string;
	name: string;
	artists: Artist[];
}
export interface PlaylistState {
	tracks: Track[];
	selectedTracks: selectedTrack[];
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