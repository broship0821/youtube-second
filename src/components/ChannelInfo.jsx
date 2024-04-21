import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();
  const {
    error,
    isLoading,
    data: url,
  } = useQuery({
    queryKey: ["channel", id],
    queryFn: () => youtube.channelImgURL(id),
    staleTime: 1000 * 60 * 60,
  });
  return <div>{url && <img src={url} alt={name} />}</div>;
}
