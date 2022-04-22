export interface TracksResponse {
  tracks: TracksResponseData;
}

export interface AlbumsResponse {
  albums: AlbumsResponseData;
}
export interface TracksResponseData {
  href: string;
  items: Track[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}

export interface AlbumsResponseData {
  href: string;
  items: Album[];
  limit: number;
  next: string;
  offset: number;
  previous: null;
  total: number;
}

export interface PlaylistResponse {
  collaborative?: boolean;
  description?: null;
  external_urls?: ExternalUrls;
  followers?: Followers;
  href?: string;
  id: string;
  images: Image[];
  name: string;
  owner?: Owner;
  public?: boolean;
  snapshot_id?: string;
  tracks?: TracksResponseData;
  type?: string;
  uri?: string;
}
export interface Track {
  album: Album;
  artists: Artist[];
  available_markets?: string[];
  disc_number?: number;
  duration_ms?: number;
  explicit?: boolean;
  external_ids?: ExternalIDS;
  external_urls?: ExternalUrls;
  href?: string;
  id: string;
  is_local?: boolean;
  name: string;
  popularity?: number;
  preview_url?: string;
  track_number?: number;
  type?: string;
  uri: string;
}

export interface Album {
  album_type?: string;
  artists?: Artist[];
  available_markets?: string[];
  external_urls: ExternalUrls;
  href?: string;
  id: string;
  images: Image[];
  name: string;
  release_date?: Date;
  release_date_precision?: string;
  type?: string;
  uri: string;
}

export interface Artist {
  external_urls: ExternalUrls;
  href?: string;
  id: string;
  name: string;
  type?: string;
  uri?: string;
}

export interface UserProfile {
  country?: string;
  display_name: string;
  email?: string;
  external_urls?: ExternalUrls;
  followers?: Followers;
  href?: string;
  id: string;
  images?: Image[];
  product?: string;
  type?: string;
  uri?: string;
}

export interface ExternalUrls {
  spotify?: string;
}

export interface Image {
  height: number;
  url: string;
  width: number;
}

export interface ExternalIDS {
  isrc?: string;
}

export interface Followers {
  href?: null;
  total?: number;
}

export interface Owner {
  external_urls?: ExternalUrls;
  href?: string;
  id?: string;
  type?: string;
  uri?: string;
}