import { createContext } from "react";
import Video from "../api/Video";
import { useContext } from "react";
import VideoClient from "../api/VideoClient";

export const YoutubeApiContext = createContext();

const client = new VideoClient();
const youtube = new Video(client);

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
