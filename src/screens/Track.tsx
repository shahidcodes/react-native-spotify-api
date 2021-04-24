import { NavigationProp, RouteProp } from "@react-navigation/native";
import React from "react";
import { View, Text, Dimensions, Image } from "react-native";
import { ITrack } from "./Tracks";
import prettyMS from "pretty-ms";

const win = Dimensions.get("window");

export default function Track({
  route,
  navigation,
}: {
  route: RouteProp<{ params: { item: ITrack } }, "params">;
  navigation: NavigationProp<any>;
}) {
  const track = route.params.item;
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 28, fontWeight: "bold", color: "black" }}>
        {track.name}
      </Text>
      <Image
        style={{ width: win.width * 0.95, height: 200, borderRadius: 10 }}
        source={{ uri: track.images[0] }}
        resizeMode="cover"
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ color: "black", fontWeight: "bold" }}>
          By {track.artistName}
        </Text>
        <Text style={{ color: "black" }}>{prettyMS(track.duration)}</Text>
      </View>
    </View>
  );
}
