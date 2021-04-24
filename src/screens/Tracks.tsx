import { NavigationProp, RouteProp } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import api from "../api";
import { IPlaylistItem } from "./Home";

const win = Dimensions.get("window");

export interface ITrack {
  name: string;
  artistName: string;
  images: string[];
  popularity: number;
  duration: number;
  id: string;
}
export default function Tracks({
  route,
  navigation,
}: {
  route: RouteProp<{ params: { item: IPlaylistItem } }, "params">;
  navigation: NavigationProp<any>;
}) {
  const [tracks, setTracks] = useState<ITrack[]>();
  useEffect(() => {
    const { item } = route.params;
    api.getPlayListTracks(item.id).then((track) => {
      console.log("track", JSON.stringify(track.items, null, 2));
      setTracks(
        track.items.map((it) => ({
          id: it.id,
          name: it.track.name,
          artistName: it.track.artists.map((it) => it.name).join(", "),
          images: it.track.album.images.map((it) => it.url),
          popularity: it.track.popularity,
          duration: it.track.duration_ms,
        }))
      );
    });
  }, []);

  const handleTrackSelect = (item: ITrack) => {
    navigation.navigate("Track", { item });
  };

  if (!tracks) {
    return <Text>loading</Text>;
  }

  return (
    <View>
      <FlatList
        data={tracks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => handleTrackSelect(item)}
              style={{
                flex: 1,
                flexDirection: "column",
                backgroundColor: "#fff",
                borderRadius: 10,
                margin: 10,
                overflow: "hidden",
              }}
            >
              <Image
                style={{ width: win.width, height: 200 }}
                source={{ uri: item.images[0] }}
                resizeMode="cover"
              />
              <View style={{ padding: 10 }}>
                <Text
                  style={{
                    flex: 1,
                    fontSize: 18,
                    color: "black",
                    marginTop: 10,
                  }}
                >
                  {item.name}
                </Text>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text>{item.artistName}</Text>
                  <Text>{item.popularity}%</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
