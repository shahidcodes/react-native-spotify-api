import { NavigationProp } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import api from "../api";

export interface IPlaylistItem {
  name: string;
  id: string;
  images: any;
  tracks: any;
}

const win = Dimensions.get("window");
export default function Home({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) {
  const [playlists, setPlaylists] = useState<IPlaylistItem[]>();
  useEffect(() => {
    api.getRecommendedPlayList().then((list) => {
      setPlaylists(
        list.playlists.items.map((it) => ({
          name: it.name,
          id: it.id,
          images: it.images,
          tracks: it.tracks,
        }))
      );
    });
  }, []);

  const handleTrackSelect = (item: IPlaylistItem) => {
    navigation.navigate("Tracks", { item });
  };

  if (!playlists) {
    return <Text>loading</Text>;
  }

  return (
    <View>
      <FlatList
        data={playlists}
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
                source={{ uri: item.images[0].url }}
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
                <Text>{item.tracks.total} songs</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
