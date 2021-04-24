import { PlayList, PlaylistTrack } from "./types";
import * as SecureStore from "expo-secure-store";

class SpotifyAPI {
  private host = "https://api.spotify.com";
  private token: null | string = "";

  async getToken() {
    if (!this.token) {
      this.token = await SecureStore.getItemAsync("token");
    }

    return this.token;
  }

  async fetchData(endpoint: string) {
    const response = await fetch(`${this.host}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${await this.getToken()}`,
        "content-type": "application/json",
      },
    });
    const json = await response.json();
    return json;
  }

  // get recomended play list
  async getRecommendedPlayList(): Promise<PlayList> {
    return this.fetchData(`/v1/browse/featured-playlists`);
  }

  async getPlayListTracks(playlistId: string): Promise<PlaylistTrack> {
    return this.fetchData(`/v1/playlists/${playlistId}/tracks`);
  }
}

export default new SpotifyAPI();
