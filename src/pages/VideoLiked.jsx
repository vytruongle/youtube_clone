import { Tooltip } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { removeVideoLiked } from "../store/get_video/slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const VideoLiked = () => {
  const { videoLiked } = useSelector((state) => state.manageVideos);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="bg-black">
      <div className="3xl:max-w-screen-3xl 2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm ssm:max-w-screen-ssm mx-auto mt-24 py-4 px-24 h-screen max-ssm:h-full">
        <h1 className="text-white font-medium text-lg py-3">Video đã thích</h1>
        {videoLiked?.map((video) => {
          return (
            <div
              className="xl:flex flex-wrap pb-4 rounded-xl shadow cursor-pointer max-lg:flex max-ssm:flex max-md:flex sssm:max-w-screen-sssm md:max-w-screen-md xl:max-w-screen-2xl"
              key={video?.id}
            >
              <div
                className="3xl:basis-1/6 lg:basis-1/4 md:basis-1/4 max-sssm:basis-[4%] max-ssm:basis-1/4"
                onClick={() => {
                  navigate(`/${video?.id}`);
                }}
              >
                <img
                  className="rounded-md hover:scale-105 transition-all duration-300 hover:duration-300 max-3xl:w-full max-sm:w-[320px]"
                  src={video?.imgVideo}
                  alt={video?.title}
                />
              </div>
              <div className="p-2 3xl:basis-4/6 lg:basis-1/2 w-1/2 md:basis-1/2 max-sssm:basis-[92%] max-ssm:basis-1/2">
                <div>
                  <Tooltip
                    color="cyan"
                    placement="rightTop"
                    title={video?.title}
                  >
                    <h5
                      className="mb-2 text-lg max-ssm:text-sm font-semibold tracking-tight text-white whitespace-nowrap text-ellipsis overflow-hidden"
                      onClick={() => {
                        navigate(`/${video?.id}`);
                      }}
                    >
                      {video?.title}
                    </h5>
                  </Tooltip>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <Tooltip
                    color="magenta"
                    placement="leftTop"
                    title={video?.channelTitle}
                  >
                    <p
                      className="mb-1 font-normal text-xs text-gray-400 "
                      onClick={() => {
                        navigate(
                          "/" + video?.channelId + "/@" + video?.channelTitle
                        );
                      }}
                    >
                      {video?.channelTitle}
                    </p>
                  </Tooltip>
                  <p
                    className="text-gray-400 text-xs font-normal mb-1"
                    onClick={() => {
                      navigate(`/${video?.id}`);
                    }}
                  >
                    {video?.viewCount} lượt xem
                  </p>
                </div>
                <div className="py-2">
                  <p
                    className="text-gray-400 text-xs truncate max-sssm:w-1/6"
                    onClick={() => {
                      navigate(`/${video?.id}`);
                    }}
                  >
                    {video?.description}
                  </p>
                </div>
              </div>
              <div className="3xl:basis-1/6 lg:basis-1/4 md:basis-1/4 max-sssm:basis-[4%] max-ssm:basis-1/4">
                <div
                  className="text-white font-medium text-lg text-end"
                  onClick={() => {
                    dispatch(removeVideoLiked(video?.id));
                  }}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VideoLiked;
