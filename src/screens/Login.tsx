import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import {
  makeRedirectUri,
  ResponseType,
  useAuthRequest,
} from "expo-auth-session";
import { Button, View, Text } from "react-native";
import * as SecureStore from "expo-secure-store";
import { NavigationProp } from "@react-navigation/core";

WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
  authorizationEndpoint: "https://accounts.spotify.com/authorize",
  tokenEndpoint: "https://accounts.spotify.com/api/token",
};

export default function Login({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) {
  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: "59ba010e361340cfb7ca5b3e2fa22665",
      scopes: ["user-read-email"],
      usePKCE: false,
      redirectUri: makeRedirectUri({
        native: "myspotify://redirect",
      }),
    },
    discovery
  );

  const saveToken = async (token: string) => {
    return await SecureStore.setItemAsync("token", token);
  };

  React.useEffect(() => {
    console.log("googe");
    if (response?.type === "success") {
      const { access_token } = response.params;
      saveToken(access_token);
      navigation.navigate("Home");
    }
  }, [response]);

  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Button
        disabled={!request}
        title="Login with your spotify account"
        onPress={() => {
          promptAsync();
        }}
      />
    </View>
  );
}
