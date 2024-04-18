import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videoList", keyword],
    queryFn: () => youtube.getVideoList(keyword),
    staleTime: 1000 * 60 * 60,
  });
  return (
    <>
      <div>Videos {keyword}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id.videoId} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
