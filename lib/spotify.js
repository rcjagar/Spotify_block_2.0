import SpotifyWebApi from "spotify-web-api-node";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "playlist-modify-private",
  "playlist-read-collaborative",
  "playlist-read-private",
  "playlist-modify-public",
  // "user-read-email",
  // "Playlist-read-private",
  // "playlist-read-collaborative",
  // "user-read-email",
  // "streaming",
  // "user-read-private",
  // "user-library-read",
  // "user-read-currently-playing",
  // "user-read-recently-played",
  // "user-read-playback-state",
  // "user-top-read",
  // "user-modify-playback-state",
  // "user-follow-read",
  // "streaming",
  // "user-read-currently-played",
  // "user-modify-playback-state",
  // "user-read-currently-playing",
  // "user-read-recently-played",
  // "user-read-playback-state",
  // "user-top-read",
  // "user-modify-playback-state",
].join(",");

const params = {
  scope: scopes,
};

const queryParamString = new URLSearchParams(params);

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString.toString()}`;

const SpotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});

export default SpotifyApi;

export { LOGIN_URL };

// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
// export const authEndpoint = "https://accounts.spotify.com/authorize";
// // Replace with your app's client ID, redirect URI and desired scopes
// const clientId = "cff76213089a4e228206c8bf120d67cb";
// const redirectUri = "http://localhost:3000/";
// const scopes = [
//   "user-read-currently-playing",
//   "user-read-recently-played",
//   "user-read-playback-state",
//   "user-top-read",
//   "user-modify-playback-state",
// ];

// export const getTokenFromResponse = () => {
//   return window.location.hash
//     .substring(1)
//     .split("&")
//     .reduce((initial, item) => {
//       var parts = item.split("=");
//       initial[parts[0]] = decodeURIComponent(parts[1]);

//       return initial;
//     }, {});
// };

// export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
//   "%20"
// )}&response_type=token&show_dialog=true`;
