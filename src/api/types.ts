interface ExternalUrls {
  spotify: string;
}

interface Image {
  height?: any;
  url: string;
  width?: any;
}

interface ExternalUrls2 {
  spotify: string;
}

interface Owner {
  display_name: string;
  external_urls: ExternalUrls2;
  href: string;
  id: string;
  type: string;
  uri: string;
}

interface Tracks {
  href: string;
  total: number;
}

interface Item {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: Owner;
  primary_color?: any;
  public?: any;
  snapshot_id: string;
  tracks: Tracks;
  type: string;
  uri: string;
}

interface Playlists {
  href: string;
  items: Item[];
  limit: number;
  next?: any;
  offset: number;
  previous?: any;
  total: number;
}

export interface PlayList {
  message: string;
  playlists: Playlists;
}

interface ExternalUrls {
  spotify: string;
}

interface AddedBy {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  type: string;
  uri: string;
}

interface ExternalUrls2 {
  spotify: string;
}

interface Artist {
  external_urls: ExternalUrls2;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface ExternalUrls3 {
  spotify: string;
}

interface Album {
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  external_urls: ExternalUrls3;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

interface ExternalUrls4 {
  spotify: string;
}

interface Artist2 {
  external_urls: ExternalUrls4;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface ExternalIds {
  isrc: string;
}

interface ExternalUrls5 {
  spotify: string;
}

interface Track {
  album: Album;
  artists: Artist2[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  episode: boolean;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls5;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track: boolean;
  track_number: number;
  type: string;
  uri: string;
}

interface VideoThumbnail {
  url?: any;
}

interface Item {
  added_at: Date;
  added_by: AddedBy;
  is_local: boolean;
  primary_color?: any;
  track: Track;
  video_thumbnail: VideoThumbnail;
}

export interface PlaylistTrack {
  href: string;
  items: Item[];
  limit: number;
  next?: any;
  offset: number;
  previous?: any;
  total: number;
}
