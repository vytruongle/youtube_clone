import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import dateFormat from "dateformat";
import {
  getSuggestVideo,
  getVideoComments,
  getVideoDetails,
} from "../store/get_video/thunkAction";
import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { LikeFilled } from "@ant-design/icons";
import { getChannelDetails } from "../store/get_channel/thunkAction";
import { Tooltip } from "antd";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import {
  getVideoLiked,
  getVideoWatched,
  removeVideoLiked,
} from "../store/get_video/slice";

const VideoDetail = () => {
  let { videoId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isAppear, setIsAppear] = useState(false);
  const { videoDetail, videos, videoComment } = useSelector(
    (state) => state.manageVideos
  );
  const { channel } = useSelector((state) => state.manageChannels);
  const vid = videoDetail[0];
  const localVidWatched = JSON.parse(localStorage.getItem("videoWatched"));
  const localVidLiked = JSON.parse(localStorage.getItem("videoLiked"));
  // console.log(vid?.snippet?.channelId);
  // console.log(channel);

  // find id video in playlist wacthed
  const index = localVidWatched?.findIndex((video) => video.id === vid?.id);
  const idVid = index > -1 ? true : false;
  // find id video in playlist liked
  const indexLiked = localVidLiked?.findIndex((video) => video.id === vid?.id);
  const idVidLike = indexLiked > -1 ? true : false;
  console.log();
  useEffect(() => {
    dispatch(
      getVideoDetails({
        url: "videos",
        videoId,
      })
    );

    dispatch(
      getSuggestVideo({
        url: "search",
        videoId: videoId,
      })
    );
    dispatch(
      getVideoComments({
        url: "commentThreads",
        videoId,
      })
    );
  }, [dispatch, videoId]);

  useEffect(() => {
    dispatch(getChannelDetails(vid?.snippet?.channelId));
    if (vid && !idVid) {
      dispatch(
        getVideoWatched({
          id: vid?.id,
          imgVideo: vid?.snippet?.thumbnails?.medium?.url,
          title: vid?.snippet?.title,
          channelTitle: vid?.snippet?.channelTitle,
          viewCount: vid?.statistics?.viewCount,
          description: vid?.snippet?.description,
        })
      );
    }
  }, [dispatch, vid, idVid]);

  return (
    <div className="bg-black pt-16">
      <div className="3xl:max-w-screen-3xl 2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm flex flex-wrap items-center justify-between mx-auto py-8 px-16">
        <div className="grid 2xl:grid-cols-4 gap-4 md:grid-cols-1">
          <div className="  2xl:col-span-3">
            <div className="w-full">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${vid?.id}`}
                controls={true}
                playing={true}
                className="xl:!w-full xl:!h-[480px] lg:!w-full"
              />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-white font-medium text-xl pt-3">
                {vid?.snippet?.title}
              </h1>
              <div className="flex flex-wrap items-center justify-between gap-2 py-3">
                <div className="flex items-center flex-wrap gap-3">
                  <div className="rounded-[50%]">
                    <img
                      className="rounded-[50%] w-10"
                      src={
                        channel
                          ? channel[0]?.snippet?.thumbnails?.default?.url
                          : ""
                      }
                      alt={channel ? channel[0]?.snippet?.title : ""}
                    />
                  </div>
                  <div>
                    <div
                      className="flex flex-wrap items-center gap-2"
                      onClick={() => {
                        navigate(
                          "/" +
                            vid?.snippet?.channelId +
                            "/@" +
                            vid?.snippet?.channelTitle
                        );
                      }}
                    >
                      <h3 className="text-white font-medium">
                        {vid?.snippet?.channelTitle}
                      </h3>
                      <div className="text-gray-400 text-sm">
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </div>
                    </div>
                    <p className="text-gray-400 text-xs font-medium">
                      {channel ? channel[0]?.statistics?.subscriberCount : ""}{" "}
                      lượt đăng ký
                    </p>
                  </div>
                </div>
                <div className="inline-flex rounded-md shadow-sm" role="group">
                  <button
                    type="button"
                    className="px-2.5 py-2 text-sm font-medium text-white bg-[#2f2e2f]  rounded-l-3xl hover:opacity-90"
                    onClick={() => {
                      if (!idVidLike) {
                        dispatch(
                          getVideoLiked({
                            id: vid?.id,
                            imgVideo: vid?.snippet?.thumbnails?.medium?.url,
                            title: vid?.snippet?.title,
                            channelTitle: vid?.snippet?.channelTitle,
                            viewCount: vid?.statistics?.viewCount,
                            description: vid?.snippet?.description,
                          })
                        );
                      } else {
                        dispatch(removeVideoLiked(vid?.id));
                      }
                    }}
                  >
                    <span className="text-white text-lg font-medium pr-2">
                      {idVidLike ? (
                        <LikeFilled className="mb-2" />
                      ) : (
                        <FontAwesomeIcon icon={faThumbsUp} />
                      )}
                    </span>
                    {vid?.statistics?.likeCount}
                  </button>
                  <button
                    type="button"
                    className="px-1 bg-[#2f2e2f] text-gray-400 text-xl"
                  >
                    |
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 text-sm font-medium text-white bg-[#2f2e2f] rounded-r-3xl hover:opacity-90 "
                  >
                    <div className="text-white font-medium text-lg">
                      <FontAwesomeIcon icon={faThumbsDown} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#272727] rounded-lg p-4 mt-2">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-white font-medium">
                  {vid?.statistics?.viewCount} lượt xem
                </p>
                <p className="text-white font-medium">
                  {dateFormat(vid?.snippet?.publishedAt, "dd/mm/yyyy")}
                </p>
              </div>
              <p className="text-white py-3 text-sm whitespace-pre-wrap">
                {vid?.snippet?.description}
              </p>
            </div>
            <div
              className={
                isAppear
                  ? "min-[300px]:hidden sssm:hidden ssm:hidden sm:hidden md:hidden xl:hidden 2xl:hidden"
                  : "min-[300px]:block sssm:block ssm:block sm:block md:block md:bg-[#2f2e2f] xl:block 2xl:hidden"
              }
            >
              <div className="flex items-center justify-between px-4 py-2 my-4 rounded-lg">
                <h4 className="text-white font-medium text-lg">Bình luận</h4>
                <div
                  className="text-white font-medium"
                  onClick={() => {
                    setIsAppear(true);
                  }}
                >
                  <FontAwesomeIcon icon={faAngleDown} />
                </div>
              </div>
            </div>
            <div
              className={
                isAppear
                  ? "py-8 max-sssm:block max-ssm:block max-sm:block max-md:block xl:block 2xl:block"
                  : "py-8 max-sssm:hidden max-ssm:hidden max-sm:hidden  max-md:hidden xl:hidden 2xl:block"
              }
            >
              {videoComment?.map((cmt) => {
                return (
                  <div className="flex gap-3 py-4" key={cmt.id}>
                    <div className="basis-[5%]">
                      <img
                        className="w-10 rounded-[50%]"
                        src={
                          cmt?.snippet?.topLevelComment?.snippet
                            ?.authorProfileImageUrl
                        }
                        alt={
                          cmt?.snippet?.topLevelComment?.snippet
                            .authorDisplayName
                        }
                      />
                    </div>
                    <div className="basis-[95%] flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <h4 className="text-white text-sm">
                          {
                            cmt?.snippet?.topLevelComment?.snippet
                              .authorDisplayName
                          }
                        </h4>
                        <p className="text-gray-400 text-sm">
                          Ngày cập nhật<span> </span>
                          {dateFormat(
                            cmt?.snippet?.topLevelComment?.snippet.updatedAt,
                            "dd/mm/yyyy"
                          )}
                        </p>
                      </div>
                      <div className="text-white text-sm whitespace-pre-wrap">
                        {cmt?.snippet?.topLevelComment?.snippet.textOriginal}
                      </div>
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-3">
                          <div className=" text-white">
                            <FontAwesomeIcon icon={faThumbsUp} />
                          </div>
                          <p className="text-gray-400 text-sm">
                            {cmt?.snippet?.topLevelComment?.snippet.likeCount}
                          </p>
                        </div>
                        <div className="text-white">
                          <FontAwesomeIcon icon={faThumbsDown} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div
                className={
                  isAppear
                    ? "max-sssm:flex max-ssm:flex max-sm:flex max-md:flex xl:flex 2xl:hidden items-center justify-between py-2 "
                    : "hidden"
                }
              >
                <h4 className="text-white font-medium text-lg">Thu hồi</h4>
                <div
                  className="text-white font-medium"
                  onClick={() => {
                    setIsAppear(false);
                  }}
                >
                  <FontAwesomeIcon icon={faAngleUp} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="grid 2xl:grid-cols-1 items-baseline gap-2 mx-auto justify-end  max-sssm:grid-cols-3 max-ssm:grid-cols-3 max-sm:grid-cols-3 max-md:grid-cols-3 xl:grid-cols-3">
              {videos?.map((video) => {
                return (
                  <div
                    className="xl:flex flex-wrap rounded-xl shadow cursor-pointer md:block sssm:max-w-screen-sssm md:max-w-screen-md xl:max-w-screen-2xl"
                    key={video?.id?.videoId}
                    onClick={() => {
                      navigate(`/${video?.id?.videoId}`);
                    }}
                  >
                    <div className="basis-1/2">
                      <img
                        className="rounded-md hover:scale-105 transition-all duration-300 hover:duration-300 w-44"
                        src={video?.snippet?.thumbnails?.medium?.url}
                        alt={video?.snippet?.description}
                      />
                    </div>
                    <div className="py-4 px-1 basis-1/2 w-1/2">
                      <div>
                        <Tooltip
                          color="cyan"
                          placement="rightTop"
                          title={video?.snippet?.title}
                        >
                          <h5 className="mb-2 text-sm font-semibold tracking-tight text-white whitespace-nowrap text-ellipsis overflow-hidden">
                            {video?.snippet?.title}
                          </h5>
                        </Tooltip>
                      </div>
                      <Tooltip
                        color="magenta"
                        placement="leftTop"
                        title={video?.snippet?.channelTitle}
                      >
                        <p className="mb-1 font-normal text-xs text-gray-400 ">
                          {video?.snippet?.channelTitle}
                        </p>
                      </Tooltip>
                      <p className="mb-1 font-normal text-xs text-gray-400">
                        Ngày đăng tải<span> </span>
                        {dateFormat(video?.snippet?.publishTime, "dd/mm/yyyy")}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
