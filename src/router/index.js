import { useRoutes } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Personal from "../pages/Personal";
import PlaylistVN from "../pages/PlaylistVN";
import Channel from "../pages/Channel";
import VideoDetail from "../pages/VideoDetail";
import Search from "../pages/Search";
import VideoWatched from "../pages/VideoWatched";
import VideoLiked from "../pages/VideoLiked";

const Router = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/playlist-VN", element: <PlaylistVN /> },
        { path: "/:channelId/:channelTitle", element: <Channel /> },
        { path: "/:videoId", element: <VideoDetail /> },
        { path: "/result/:q", element: <Search /> },
        { path: "/feed/history", element: <VideoWatched /> },
        { path: "/playlist", element: <VideoLiked /> },
        {
          path: "/ca-nhan",
          element: <Personal />,
        },
      ],
    },
  ]);

  return element;
};

export default Router;
