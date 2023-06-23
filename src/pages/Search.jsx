import React, { useEffect } from "react";
import dateFormat from "dateformat";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getSearchResults } from "../store/get_search/thunkAction";
import clsx from "clsx";

// css loading
import styles from "../scss/loading/loading.module.scss";
import { Tooltip } from "antd";

const Search = () => {
  let { q } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { search } = useSelector((state) => state.manageSearchResults);
  const { isLoading } = useSelector((state) => state.manageVideos);

  useEffect(() => {
    dispatch(getSearchResults(q));
  }, [dispatch, q]);
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
      <div className="3xl:max-w-screen-3xl 2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm ssm:max-w-screen-ssm mx-auto p-4">
        <div className="grid grid-col-1 items-baseline gap-5 mx-auto px-8">
          {search?.map((video) => {
            return (
              <div
                className=" max-w-6xl flex gap-2 rounded-xl shadow cursor-pointer ml-44"
                key={video?.id?.videoId}
              >
                <div className="basis-1/4">
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
                <div className="px-2 flex-1">
                  <div>
                    <Tooltip
                      color="cyan"
                      placement="rightTop"
                      title={video?.snippet?.title}
                    >
                      <h5
                        className="mb-2 text-lg font-semibold tracking-tight text-white text-ellipsis overflow-hidden"
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
                      className="mb-3 font-normal text-sm text-gray-400 truncate"
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
                    className="mb-3 font-normal text-sm text-gray-400"
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

export default Search;
