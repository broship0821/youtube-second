import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "./../context/YoutubeApiContext";
import VideoCard from "./VideoCard";

export default function RelatedVideos({ id }) {
  console.log(id);
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["related", id],
    queryFn: () => youtube.relatedVideos(id),
    staleTime: 1000 * 60 * 60,
  });
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} type="list" />
          ))}
        </ul>
      )}
    </>
  );
}
