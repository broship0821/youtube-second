import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getVideoList } from "../api/Video";
import VideoCard from "../components/VideoCard";

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videoList", keyword],
    queryFn: () => getVideoList(keyword),
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
