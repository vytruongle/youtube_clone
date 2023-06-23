import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import dateFormat from "dateformat";
import { getSuggestVideo } from "../store/get_video/thunkAction";
import { useNavigate } from "react-router";
import clsx from "clsx";
import { Tooltip } from "antd";

// css loading
import styles from "../scss/loading/loading.module.scss";
// import { getChannelDetails } from "../store/get_channel/thunkAction";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const suggestVideo = JSON.parse(localStorage.getItem("videoId"));
  const { videos, isLoading } = useSelector((state) => state.manageVideos);
  // const { channel } = useSelector((state) => state.manageChannels);
  // console.log(channel);

  useEffect(() => {
    dispatch(
      getSuggestVideo({
        url: "search",
        videoId: suggestVideo || "BMsfFSikYeQ",
      })
    );
  }, [dispatch, suggestVideo]);

  if (isLoading) {
    return (
      <div className={clsx(styles.container)}>
        <div className={clsx(styles.top)}>
          <div className={clsx(styles.square)}>
            <div className={clsx(styles.square)}>
              <div className={clsx(styles.square)}>
                <div className={clsx(styles.square)}>
                  <div className={clsx(styles.square)}>
                    <div className={clsx(styles.square)}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={clsx(styles.bottom)}>
          <div className={clsx(styles.square)}>
            <div className={clsx(styles.square)}>
              <div className={clsx(styles.square)}>
                <div className={clsx(styles.square)}>
                  <div className={clsx(styles.square)}>
                    <div className={clsx(styles.square)}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={clsx(styles.left)}>
          <div className={clsx(styles.square)}>
            <div className={clsx(styles.square)}>
              <div className={clsx(styles.square)}>
                <div className={clsx(styles.square)}>
                  <div className={clsx(styles.square)}>
                    <div className={clsx(styles.square)}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={clsx(styles.right)}>
          <div className={clsx(styles.square)}>
            <div className={clsx(styles.square)}>
              <div className={clsx(styles.square)}>
                <div className={clsx(styles.square)}>
                  <div className={clsx(styles.square)}>
                    <div className={clsx(styles.square)}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={isLoading ? "bg-black h-[100vh]" : "bg-black h-full pt-16"}>
      <div className="3xl:max-w-screen-3xl 2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm ssm:max-w-screen-ssm flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="grid sm:grid-col-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-5 items-baseline gap-5 mx-auto px-8">
          {videos?.map((video) => {
            return (
              <div
                className="max-w-sm rounded-xl shadow cursor-pointer"
                key={video?.id?.videoId}
              >
                <div>
                  <img
                    className="rounded-xl hover:scale-105 transition-all duration-300 hover:duration-300"
                    src={video?.snippet?.thumbnails?.medium?.url}
                    alt={video?.snippet?.description}
                    onClick={() => {
                      navigate(`/${video?.id?.videoId}`);
                      localStorage.setItem(
                        "videoId",
                        JSON.stringify(video?.id?.videoId)
                      );
                    }}
                  />
                </div>
                <div className="px-2 py-4">
                  <div>
                    <Tooltip
                      color="cyan"
                      placement="rightTop"
                      title={video?.snippet?.title}
                    >
                      <h5
                        className="mb-2 text-lg font-semibold tracking-tight text-white truncate"
                        onClick={() => {
                          navigate(`/${video?.id?.videoId}`);
                          localStorage.setItem(
                            "videoId",
                            JSON.stringify(video?.id?.videoId)
                          );
                        }}
                      >
                        {video?.snippet?.title}
                      </h5>
                    </Tooltip>
                  </div>
                  <Tooltip
                    color="magenta"
                    placement="leftTop"
                    title={video?.snippet?.channelTitle}
                  >
                    <p
                      className="mb-1 font-normal text-sm text-gray-400 "
                      onClick={() => {
                        navigate(
                          "/" +
                            video?.snippet?.channelId +
                            "/@" +
                            video?.snippet?.channelTitle
                        );
                      }}
                    >
                      {video?.snippet?.channelTitle}
                    </p>
                  </Tooltip>
                  <p
                    className="mb-1 font-normal text-sm text-gray-400"
                    onClick={() => {
                      navigate(`/${video?.id?.videoId}`);
                      localStorage.setItem(
                        "videoId",
                        JSON.stringify(video?.id?.videoId)
                      );
                    }}
                  >
                    Ngày tải lên{" "}
                    {dateFormat(video?.snippet?.publishTime, "dd/mm/yyyy")}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
