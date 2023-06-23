import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import {
  getChannelDetails,
  getChannelVideos,
} from "../store/get_channel/thunkAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "antd";
import dateFormat from "dateformat";

const Channel = () => {
  let { channelId } = useParams();
  const navigate = useNavigate();
  const [isSel, setSel] = useState(0);
  const dispatch = useDispatch();
  const { channel, channelVideos } = useSelector(
    (state) => state.manageChannels
  );

  useEffect(() => {
    dispatch(getChannelDetails(channelId));
    dispatch(getChannelVideos(channelId));
  }, [dispatch, channelId]);
  // console.log(channel);
  return (
    <div className="bg-black pt-16">
      <div className="h-[300px]">
        <img
          className="w-full h-full object-cover"
          src={channel[0]?.brandingSettings?.image?.bannerExternalUrl}
          alt={channel[0]?.brandingSettings?.image?.bannerExternalUrl}
        />
      </div>
      <div className="3xl:max-w-screen-3xl 2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm ssm:max-w-screen-ssm mx-auto p-4">
        <div className="py-4 px-6 flex flex-wrap items-center gap-6">
          <div>
            <img
              className="rounded-[50%] w-32"
              src={channel[0]?.snippet?.thumbnails?.high?.url}
              alt={channel[0]?.snippet?.thumbnails?.high?.url}
            />
          </div>
          <div className="flex items-center justify-between ssm:w-[89%] md:w-[89%] xl:w-[86%] 3xl:w-[91%]">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h1 className="text-white text-2xl">
                  {channel[0]?.snippet?.title}
                </h1>
                <div className="text-gray-400 text-sm">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-gray-400 text-base font-medium">
                  {channel[0]?.snippet?.customUrl}
                </p>
                <p className="text-gray-400 text-sm">
                  {channel[0]?.statistics?.subscriberCount} người đăng ký
                </p>
                <p className="text-gray-400 text-sm">
                  {channel[0]?.statistics?.videoCount} video
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#272727] px-4 py-1 rounded-3xl">
              <div className="text-lg text-white">
                <FontAwesomeIcon icon={faBell} />
              </div>
              <p className="text-white text-sm font-medium">Đã đăng ký</p>
            </div>
          </div>
        </div>

        <div class="text-sm font-medium text-center text-gray-500 border-b border-[#2f2f2f] px-16">
          <ul className="flex flex-wrap -mb-px">
            <li
              className="mr-2"
              onClick={() => {
                setSel(0);
              }}
            >
              <div
                className={
                  isSel === 0
                    ? "inline-block p-4 text-white border-b-2 border-gray-400 rounded-t-lg hover:text-white cursor-pointer"
                    : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-white cursor-pointer"
                }
              >
                TRANG CHỦ
              </div>
            </li>
            <li className="mr-2" onClick={() => setSel(1)}>
              <div
                className={
                  isSel === 1
                    ? "inline-block p-4 text-white border-b-2 border-gray-400 rounded-t-lg hover:text-white cursor-pointer"
                    : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-white cursor-pointer"
                }
              >
                GIỚI THIỆU
              </div>
            </li>
          </ul>
        </div>

        <div className="py-8">
          {isSel === 0 ? (
            <div className="grid sm:grid-col-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-5 items-baseline gap-5 mx-auto px-16">
              {channelVideos?.map((video) => {
                return (
                  <div
                    className="max-w-sm rounded-xl shadow cursor-pointer"
                    key={video?.id?.videoId}
                    onClick={() => {
                      navigate(`/${video?.id?.videoId}`);
                      localStorage.setItem(
                        "videoId",
                        JSON.stringify(video?.id?.videoId)
                      );
                    }}
                  >
                    <div>
                      <img
                        className="rounded-xl hover:scale-105 transition-all duration-300 hover:duration-300"
                        src={video?.snippet?.thumbnails?.medium?.url}
                        alt={video?.snippet?.description}
                      />
                    </div>
                    <div className="px-2 py-4">
                      <div>
                        <Tooltip
                          color="cyan"
                          placement="rightTop"
                          title={video?.snippet?.title}
                        >
                          <h5 className="mb-2 text-lg font-semibold tracking-tight text-white truncate">
                            {video?.snippet?.title}
                          </h5>
                        </Tooltip>
                      </div>
                      <Tooltip
                        color="magenta"
                        placement="leftTop"
                        title={video?.snippet?.channelTitle}
                      >
                        <div className="flex items-center gap-2">
                          <div>
                            <img
                              className="rounded-[50%] w-8"
                              src={channel[0]?.snippet?.thumbnails?.high?.url}
                              alt={channel[0]?.snippet?.thumbnails?.high?.url}
                            />
                          </div>
                          <p className="mb-1 font-normal text-sm text-gray-400 ">
                            {video?.snippet?.channelTitle}
                          </p>
                          <div className="text-gray-400 text-sm">
                            <FontAwesomeIcon icon={faCheckCircle} />
                          </div>
                        </div>
                      </Tooltip>
                      <p className="mb-1 font-normal text-sm text-gray-400">
                        Ngày tải lên{" "}
                        {dateFormat(video?.snippet?.publishTime, "dd/mm/yyyy")}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-wrap gap-8 px-16 h-[100vh]">
              <div className="basis-3/4 flex flex-col gap-6">
                <h1 className="text-white text-xl">Mô tả</h1>
                <div className="text-white text-sm whitespace-pre-wrap">
                  {channel[0]?.snippet?.description}
                </div>
              </div>
              <div className="flex-1">
                <h1 className="pb-3 border-b border-[#2f2f2f] text-white">
                  Thống kê
                </h1>
                <p className="py-3 border-b border-[#2f2f2f] text-white">
                  Đã tham gia<span> </span>
                  {dateFormat(channel[0]?.snippet?.publishedAt, "dd/mm/yyyy")}
                </p>
                <p className="py-3 text-white">
                  {channel[0]?.statistics.viewCount} lượt xem
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Channel;
