import React, { useState } from "react";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClock,
  faClockRotateLeft,
  faExclamationTriangle,
  faGear,
  faHouse,
  // faImages,
  faRegistered,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFlag,
  faPlayCircle,
  faQuestionCircle,
} from "@fortawesome/free-regular-svg-icons";

// styles
import styles from "../scss/index.module.scss";

const Sidebar = () => {
  const location = useLocation().pathname;
  const [isBlur, setBlur] = useState(false);
  const [isHide, setIsHide] = useState(true);

  return (
    <div>
      <div className="block">
        <aside
          id="default-sidebar"
          className={
            isHide
              ? "fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-0  ease-in duration-300 max-ssm:h-full "
              : "fixed top-0 left-[100%] z-40 w-64 h-screen transition-transform md:-translate-x-0 sm:-translate-x-1/4  duration-300 "
          }
          aria-label="Sidebar"
        >
          <div
            className={clsx(
              styles.noscroll,
              "h-full px-3 overflow-y-auto bg-black dark:bg-gray-800"
            )}
          >
            <div className="flex items-center gap-6">
              <div
                className="text-white text-center mb-6 text-xl rounded-[50%] hover:bg-white hover:bg-opacity-25 w-16 h-8 cursor-pointer"
                onClick={() => {
                  setIsHide(false);
                }}
              >
                <FontAwesomeIcon icon={faBars} />
              </div>
              <a href="/" className="flex items-center mt-[-1.2rem]">
                <div className="w-3/5">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 -198 512 512"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    preserveAspectRatio="xMidYMid"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      <g>
                        <g>
                          <path
                            d="M159.889142,17.9305215 C157.980727,10.8778981 152.47152,5.36869078 145.418897,3.46027607 C132.731218,0 81.6659313,0 81.6659313,0 C81.6659313,0 30.600645,0.104856851 17.9129661,3.56513292 C10.8603427,5.47354763 5.35113537,10.9827549 3.44272066,18.0353783 C-0.395040075,40.5796012 -1.88400735,74.9307055 3.54757751,96.5731595 C5.45599222,103.625783 10.9651995,109.13499 18.0178229,111.043405 C30.7055018,114.503681 81.7707881,114.503681 81.7707881,114.503681 C81.7707881,114.503681 132.836074,114.503681 145.523753,111.043405 C152.576377,109.13499 158.085584,103.625783 159.993999,96.5731595 C164.041473,73.9974796 165.28927,39.6673466 159.889142,17.9305215 Z"
                            fill="#FF0000"
                          ></path>
                          <polygon
                            fill="#FFFFFF"
                            points="65.4131194 81.7883436 107.775287 57.2518405 65.4131194 32.7153374"
                          ></polygon>
                        </g>
                        <path
                          d="M491.23679,33.2396217 C496.794203,33.2396217 500.988477,34.2881902 503.924469,36.2804703 C506.860461,38.2727505 508.957598,41.418456 510.21588,45.7175869 C511.474162,50.0167178 511.998447,55.8887014 511.998447,63.4383947 L511.998447,75.7066462 L485.050236,75.7066462 L485.050236,79.4814928 L485.469663,89.8623211 C485.784234,92.1691718 486.308518,93.8468814 487.147373,94.8954499 C487.986228,95.9440184 489.349367,96.4683027 491.131933,96.4683027 C493.543641,96.4683027 495.221351,95.524591 496.060205,93.6371677 C497.003917,91.7497444 497.423344,88.6040389 497.528201,84.304908 L511.474162,85.1437628 C511.579019,85.7729039 511.579019,86.6117587 511.579019,87.6603272 C511.579019,94.2663088 509.796453,99.1945808 506.126463,102.445143 C502.456473,105.695706 497.423344,107.373415 490.817363,107.373415 C482.848242,107.373415 477.290829,104.856851 474.145124,99.9285787 C470.999418,95.0003067 469.321708,87.2408998 469.321708,76.8600716 L469.321708,64.1723926 C469.678222,46.346728 472.813442,33.2920501 491.23679,33.2396217 Z M297.356473,34.6027607 L297.356473,87.1360429 C297.356473,90.2817485 297.671044,92.5885992 298.405042,93.9517382 C299.894009,96.8667587 303.752741,96.1222751 305.849878,94.6857362 C307.060626,93.8673257 308.03656,92.7468087 308.681013,91.4351738 L308.681013,34.6027607 L324.724111,34.6027607 L324.724111,106.21999 L312.141289,106.21999 L310.77815,97.4120143 L310.46358,97.4120143 C307.003303,104.017996 301.865318,107.373415 295.049623,107.373415 C284.559219,107.346677 281.993214,99.7894861 281.382173,92.1137327 L281.34221,91.5718144 C281.262321,90.3976499 281.224876,89.2247914 281.208518,88.0797546 L281.208518,34.6027607 L297.356473,34.6027607 Z M380.088528,34.6027607 L380.088528,87.1360429 C380.088528,90.2817485 380.403099,92.5885992 381.137097,93.9517382 C382.626064,96.8667587 386.484796,96.1222751 388.581933,94.6857362 C389.792681,93.8673257 390.768615,92.7468087 391.413068,91.4351738 L391.413068,34.6027607 L407.456166,34.6027607 L407.456166,106.21999 L394.873344,106.21999 L393.510205,97.4120143 L393.195635,97.4120143 C389.735359,104.017996 384.597373,107.373415 377.781678,107.373415 C367.291274,107.346677 364.72527,99.7894861 364.114228,92.1137327 L364.074265,91.5718144 C363.994377,90.3976499 363.956931,89.2247914 363.940573,88.0797546 L363.940573,34.6027607 L380.088528,34.6027607 Z M250.800032,33.2396217 C256.042874,33.2396217 260.342005,34.2881902 263.48771,36.490184 C266.633416,38.6921779 269.045124,42.0475971 270.513119,46.6612986 C271.981115,51.275 272.715113,57.4615542 272.715113,65.1161043 L272.715113,75.4969325 C272.715113,83.1514826 271.981115,89.23318 270.513119,93.8468814 C269.045124,98.4605828 266.738273,101.816002 263.48771,104.017996 C260.237148,106.115133 255.83316,107.268558 250.380604,107.268558 C244.718334,107.373415 240.314346,106.21999 237.063784,104.122853 C233.813222,101.920859 231.506371,98.5654397 230.143232,93.9517382 C228.780093,89.3380368 228.150952,83.2563395 228.150952,75.6017894 L228.150952,65.2209611 C228.150952,57.566411 228.88495,51.275 230.457802,46.6612986 C232.030655,41.9427403 234.442363,38.5873211 237.797782,36.490184 C241.153201,34.393047 245.452332,33.2396217 250.800032,33.2396217 Z M432.621811,4.50884458 L432.621811,42.2573108 L432.726667,42.2573108 C434.194663,39.5310327 436.082087,37.3290389 438.703508,35.6513292 C441.151777,34.0047112 444.036719,33.1282731 446.987199,33.1347648 C450.866903,33.1347648 453.802894,34.1833333 456.004888,36.1756135 C458.206882,38.2727505 459.779735,41.5233129 460.723447,46.0321575 C461.637667,50.4001007 462.158265,56.4409407 462.18991,64.059347 L462.191443,64.8015337 L462.191443,76.1260736 C462.191443,86.7166155 460.828303,94.5808793 458.311739,99.6140082 C455.690318,104.647137 451.705757,107.163701 446.253201,107.163701 C443.212353,107.163701 440.486074,106.429703 437.96951,105.066564 C435.742056,103.768558 433.897942,101.908197 432.619841,99.6750483 L432.412097,99.2994376 L432.097526,99.2994376 L430.419817,106.115133 L417.102997,106.115133 L417.102997,4.50884458 L432.621811,4.50884458 Z M368.449418,8.17883436 L368.449418,21.1810838 L352.511177,21.1810838 L352.511177,106.21999 L336.782649,106.21999 L336.782649,21.1810838 L320.739551,21.1810838 L320.739551,8.17883436 L368.449418,8.17883436 Z M195.540471,8.17883436 L195.549368,8.21831506 C195.702992,8.90029808 197.823461,18.3253965 200.15457,29.3057636 L200.33901,30.1757348 C200.431417,30.6122051 200.52408,31.0508039 200.616892,31.4910893 L200.80268,32.3737779 C200.833667,32.5212237 200.864663,32.6688243 200.895663,32.8165631 L201.081684,33.7045241 C201.112686,33.8527505 201.143684,34.0010824 201.174675,34.1495034 L201.360496,35.0409685 L201.360496,35.0409685 L201.630891,36.3438432 C203.204721,43.9476033 204.707581,51.573842 205.606729,57.0421268 L206.026156,57.0421268 C206.888169,52.1367136 208.138966,45.8595566 209.473227,39.4509076 L209.822988,37.7769188 C209.998614,36.9392485 210.175209,36.1011759 210.352094,35.2654533 L210.627389,33.9677196 C213.194244,21.8944685 215.74837,10.6155298 216.223526,8.52432128 L216.254224,8.38927119 C216.285747,8.2506583 216.302128,8.17883436 216.302128,8.17883436 L232.345226,8.17883436 L213.785563,74.3435072 L213.785563,106.115133 L197.952179,106.115133 L197.952179,74.448364 L197.847322,74.448364 L179.497373,8.17883436 L195.540471,8.17883436 Z M250.485461,44.3544479 C248.283467,44.3544479 246.815471,45.5078732 245.87176,47.9195808 C244.928048,50.3312883 244.50862,54.0012781 244.50862,59.1392638 L244.50862,81.473773 C244.50862,86.7166155 244.928048,90.596319 245.766903,92.9031697 C246.605757,95.2100204 248.17861,96.3634458 250.485461,96.3634458 C252.687455,96.3634458 254.260308,95.2100204 255.204019,92.9031697 C256.147731,90.596319 256.567158,86.7166155 256.567158,81.473773 L256.567158,59.1392638 C256.567158,54.0012781 256.147731,50.2264315 255.204019,47.9195808 C254.260308,45.5078732 252.687455,44.3544479 250.485461,44.3544479 Z M435.452946,46.4515849 C434.175003,47.6312244 433.265697,49.087342 432.725029,50.906337 L432.621811,51.275 L432.621811,91.9594581 C433.922036,94.1614519 435.767516,95.6294479 439.018079,95.7343047 C440.695788,95.7343047 442.058927,95.1051636 443.107496,93.8468814 C444.156064,92.5885992 444.890062,90.4914622 445.30949,87.5554703 C445.71214,84.7369182 445.921518,80.8553692 445.937624,75.9108235 L445.938631,75.2872188 L445.938631,65.9549591 C445.938631,60.2926892 445.728917,55.9935583 445.414346,52.9527096 C444.994919,49.9118609 444.470635,47.7098671 443.526923,46.4515849 C441.702414,43.8301636 437.759796,43.8616207 435.452946,46.4515849 Z M490.92222,44.0398773 C489.139653,44.1447342 487.881371,44.6690184 487.147373,45.6127301 C486.308518,46.6612986 485.784234,48.2341513 485.469663,50.541002 C485.161384,52.8017157 485.054514,60.7018825 485.050363,61.0169849 L485.050236,66.1646728 L496.794203,66.1646728 L496.793373,61.6248446 L496.793236,61.7122499 C496.787382,63.2993708 496.754477,60.7909373 496.681842,57.7119157 L496.671921,57.2983077 C496.605889,54.5919004 496.509592,51.574591 496.374776,50.541002 C496.060205,48.1292945 495.535921,46.4515849 494.697066,45.5078732 C493.858211,44.5641616 492.599929,44.0398773 490.92222,44.0398773 Z"
                          fill="#fbf9f9"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <sup className="font-semibold text-gray-400 px-1 pb-2">VN</sup>
              </a>
            </div>
            <ul
              className={
                isBlur
                  ? clsx(styles.scroll, "space-y-2 font-medium")
                  : clsx(styles.noscroll, "space-y-2 font-medium")
              }
              onMouseOver={() => {
                setBlur(true);
              }}
              onMouseOut={() => {
                setBlur(false);
              }}
            >
              <li
                className={
                  "/" === location
                    ? "bg-white bg-opacity-25 rounded-lg"
                    : "hover:bg-white hover:bg-opacity-25 rounded-lg"
                }
              >
                <Link to="/">
                  <div className="flex items-center p-2">
                    <div className="text-white text-2xl font-bold">
                      <FontAwesomeIcon icon={faHouse} />
                    </div>
                    <span className="ml-6 text-white font-normal">
                      Trang chủ
                    </span>
                  </div>
                </Link>
              </li>
              <li
                className={
                  "/playlist-VN" === location
                    ? "bg-white bg-opacity-25 rounded-lg"
                    : "hover:bg-white hover:bg-opacity-25 rounded-lg"
                }
              >
                <Link to="/playlist-VN">
                  <div className="flex items-center p-2">
                    <div className="text-white text-2xl font-bold">
                      <FontAwesomeIcon icon={faPlayCircle} />
                    </div>
                    <span className="ml-6 text-white font-normal">
                      Playlist Nhạc Việt
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <div>
                  <div className="flex items-center p-2">
                    <div className="text-white text-2xl font-bold">
                      <FontAwesomeIcon icon={faRegistered} />
                    </div>
                    <span className="ml-6 text-white font-normal">
                      Kênh đăng ký
                    </span>
                  </div>
                  <ul className="ml-4">
                    <li
                      className={
                        "/UCmXmlB4-HJytD7wek0Uo97A/@JavaScriptMastery" ===
                        location
                          ? "bg-white bg-opacity-25 rounded-lg"
                          : "hover:bg-white hover:bg-opacity-25 rounded-lg"
                      }
                    >
                      <Link to={`/UCmXmlB4-HJytD7wek0Uo97A/@JavaScriptMastery`}>
                        <div className="flex items-center p-2">
                          <div className="w-8">
                            <img
                              className="rounded-[50%] w-full"
                              src="https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s68-c-k-c0x00ffffff-no-rj"
                              alt="https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s68-c-k-c0x00ffffff-no-rj"
                            />
                          </div>
                          <span className="ml-6 text-white text-sm font-normal">
                            JavaScript Mastery
                          </span>
                        </div>
                      </Link>
                    </li>
                    <li
                      className={
                        "/UCtowbSVJlDLjgs-5qsznSTA/@CamBongDa" === location
                          ? "bg-white bg-opacity-25 rounded-lg"
                          : "hover:bg-white hover:bg-opacity-25 rounded-lg"
                      }
                    >
                      <Link to={`/UCtowbSVJlDLjgs-5qsznSTA/@CamBongDa`}>
                        <div className="flex items-center p-2">
                          <div className="w-8">
                            <img
                              className="rounded-[50%] w-full"
                              src="https://yt3.ggpht.com/ytc/AGIKgqM7iJU6QYRW2aHWWnREVqmR-ZO3nhKndOLwl_-bDg=s88-c-k-c0x00ffffff-no-rj"
                              alt="https://yt3.ggpht.com/ytc/AGIKgqM7iJU6QYRW2aHWWnREVqmR-ZO3nhKndOLwl_-bDg=s88-c-k-c0x00ffffff-no-rj"
                            />
                          </div>
                          <span className="ml-6 text-white font-normal">
                            Cảm bóng đá
                          </span>
                        </div>
                      </Link>
                    </li>
                    <li
                      className={
                        `/UCj06sjVmkCDEapk8JwBg06A/@Optimus96` === location
                          ? "bg-white bg-opacity-25 rounded-lg"
                          : "hover:bg-white hover:bg-opacity-25 rounded-lg"
                      }
                    >
                      <Link to={`/UCj06sjVmkCDEapk8JwBg06A/@Optimus96`}>
                        <div className="flex items-center p-2">
                          <div className="w-8">
                            <img
                              className="rounded-[50%] w-full"
                              src="https://yt3.ggpht.com/ytc/AGIKgqM1QkmiVmw_UiEVR2tsdyLdFN9Ysa43gUK1XDBmmw=s68-c-k-c0x00ffffff-no-rj"
                              alt="https://yt3.ggpht.com/ytc/AGIKgqM1QkmiVmw_UiEVR2tsdyLdFN9Ysa43gUK1XDBmmw=s68-c-k-c0x00ffffff-no-rj"
                            />
                          </div>
                          <span className="ml-6 text-white font-normal">
                            Optimus
                          </span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="bg-gray-400 w-[90%] h-[1px] rounded-md"></li>

              <li
                className={
                  "/feed/history" === location
                    ? "bg-white bg-opacity-25 rounded-lg"
                    : "hover:bg-white hover:bg-opacity-25 rounded-lg"
                }
              >
                <Link to="/feed/history">
                  <div className="flex items-center p-2">
                    <div className="text-white text-2xl font-bold">
                      <FontAwesomeIcon icon={faClockRotateLeft} />
                    </div>
                    <span className="ml-6 text-white font-normal">
                      Video đã xem
                    </span>
                  </div>
                </Link>
              </li>
              <li
                className={
                  location === false
                    ? "bg-white bg-opacity-25 rounded-lg"
                    : "hover:bg-white hover:bg-opacity-25 rounded-lg"
                }
              >
                <Link>
                  <div className="flex items-center p-2">
                    <div className="text-white text-2xl font-bold">
                      <FontAwesomeIcon icon={faClock} />
                    </div>
                    <span className="ml-6 text-white font-normal">Xem sau</span>
                  </div>
                </Link>
              </li>
              <li
                className={
                  "/playlist" === location
                    ? "bg-white bg-opacity-25 rounded-lg"
                    : "hover:bg-white hover:bg-opacity-25 rounded-lg"
                }
              >
                <Link to="/playlist">
                  <div className="flex items-center p-2">
                    <div className="text-white text-2xl font-bold">
                      <FontAwesomeIcon icon={faThumbsUp} />
                    </div>
                    <span className="ml-6 text-white font-normal">
                      Video đã thích
                    </span>
                  </div>
                </Link>
              </li>
              <li className="bg-gray-400 w-[90%] h-[1px] rounded-md"></li>

              <li
                className={
                  location === false
                    ? "bg-white bg-opacity-25 rounded-lg"
                    : "hover:bg-white hover:bg-opacity-25 rounded-lg"
                }
              >
                <Link>
                  <div className="flex items-center p-2">
                    <div className="text-white text-2xl font-bold">
                      <FontAwesomeIcon icon={faGear} />
                    </div>
                    <span className="ml-6 text-white font-normal">Cài đặt</span>
                  </div>
                </Link>
              </li>
              <li
                className={
                  location === false
                    ? "bg-white bg-opacity-25 rounded-lg"
                    : "hover:bg-white hover:bg-opacity-25 rounded-lg"
                }
              >
                <Link>
                  <div className="flex items-center p-2">
                    <div className="text-white text-2xl font-bold">
                      <FontAwesomeIcon icon={faFlag} />
                    </div>
                    <span className="ml-6 text-white font-normal">
                      Nhật ký báo cáo
                    </span>
                  </div>
                </Link>
              </li>
              <li
                className={
                  location === false
                    ? "bg-white bg-opacity-25 rounded-lg"
                    : "hover:bg-white hover:bg-opacity-25 rounded-lg"
                }
              >
                <Link>
                  <div className="flex items-center p-2">
                    <div className="text-white text-2xl font-bold">
                      <FontAwesomeIcon icon={faQuestionCircle} />
                    </div>
                    <span className="ml-6 text-white font-normal">
                      Trợ giúp
                    </span>
                  </div>
                </Link>
              </li>
              <li
                className={
                  location === false
                    ? "bg-white bg-opacity-25 rounded-lg"
                    : "hover:bg-white hover:bg-opacity-25 rounded-lg"
                }
              >
                <Link>
                  <div className="flex items-center p-2">
                    <div className="text-white text-2xl font-bold">
                      <FontAwesomeIcon icon={faExclamationTriangle} />
                    </div>
                    <span className="ml-6 text-white font-normal">
                      Gửi ý kiến phản hồi
                    </span>
                  </div>
                </Link>
              </li>
              <li className="bg-gray-400 w-[90%] h-[1px] rounded-md"></li>

              <li className="flex flex-col gap-2 text-gray-400 text-sm font-normal py-3">
                <p>
                  Giới thiệuBáo chíBản quyềnLiên hệ với chúng tôiNgười sáng tạo
                  Quảng cáo Nhà phát triển
                </p>
                <p>
                  Điều khoản Quyền riêng tư Chính sách và an toàn Cách YouTube
                  hoạt động Thử các tính năng mới
                </p>
                <p>© 2023 Google LLC</p>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      <div className={isHide ? "hidden" : "block"}>
        <aside
          id="default-sidebar"
          className="fixed top-0 left-0 z-40 w-12 h-screen -translate-x-0 transition-transform max-ssm:h-full"
          aria-label="Sidebar"
        >
          <div
            className={clsx(
              styles.noscroll,
              "h-full overflow-y-auto bg-black dark:bg-gray-800"
            )}
          >
            {/* <div className="flex items-center gap-6">
              <div className="text-white text-center mb-6 text-xl rounded-[50%] hover:bg-white hover:bg-opacity-25 w-16 h-8 cursor-pointer">
                <FontAwesomeIcon icon={faBars} />
              </div>
              <div className="flex items-center mt-[-1.2rem]">
                <div className="w-3/5">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 -198 512 512"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    preserveAspectRatio="xMidYMid"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      <g>
                        <g>
                          <path
                            d="M159.889142,17.9305215 C157.980727,10.8778981 152.47152,5.36869078 145.418897,3.46027607 C132.731218,0 81.6659313,0 81.6659313,0 C81.6659313,0 30.600645,0.104856851 17.9129661,3.56513292 C10.8603427,5.47354763 5.35113537,10.9827549 3.44272066,18.0353783 C-0.395040075,40.5796012 -1.88400735,74.9307055 3.54757751,96.5731595 C5.45599222,103.625783 10.9651995,109.13499 18.0178229,111.043405 C30.7055018,114.503681 81.7707881,114.503681 81.7707881,114.503681 C81.7707881,114.503681 132.836074,114.503681 145.523753,111.043405 C152.576377,109.13499 158.085584,103.625783 159.993999,96.5731595 C164.041473,73.9974796 165.28927,39.6673466 159.889142,17.9305215 Z"
                            fill="#FF0000"
                          ></path>
                          <polygon
                            fill="#FFFFFF"
                            points="65.4131194 81.7883436 107.775287 57.2518405 65.4131194 32.7153374"
                          ></polygon>
                        </g>
                        <path
                          d="M491.23679,33.2396217 C496.794203,33.2396217 500.988477,34.2881902 503.924469,36.2804703 C506.860461,38.2727505 508.957598,41.418456 510.21588,45.7175869 C511.474162,50.0167178 511.998447,55.8887014 511.998447,63.4383947 L511.998447,75.7066462 L485.050236,75.7066462 L485.050236,79.4814928 L485.469663,89.8623211 C485.784234,92.1691718 486.308518,93.8468814 487.147373,94.8954499 C487.986228,95.9440184 489.349367,96.4683027 491.131933,96.4683027 C493.543641,96.4683027 495.221351,95.524591 496.060205,93.6371677 C497.003917,91.7497444 497.423344,88.6040389 497.528201,84.304908 L511.474162,85.1437628 C511.579019,85.7729039 511.579019,86.6117587 511.579019,87.6603272 C511.579019,94.2663088 509.796453,99.1945808 506.126463,102.445143 C502.456473,105.695706 497.423344,107.373415 490.817363,107.373415 C482.848242,107.373415 477.290829,104.856851 474.145124,99.9285787 C470.999418,95.0003067 469.321708,87.2408998 469.321708,76.8600716 L469.321708,64.1723926 C469.678222,46.346728 472.813442,33.2920501 491.23679,33.2396217 Z M297.356473,34.6027607 L297.356473,87.1360429 C297.356473,90.2817485 297.671044,92.5885992 298.405042,93.9517382 C299.894009,96.8667587 303.752741,96.1222751 305.849878,94.6857362 C307.060626,93.8673257 308.03656,92.7468087 308.681013,91.4351738 L308.681013,34.6027607 L324.724111,34.6027607 L324.724111,106.21999 L312.141289,106.21999 L310.77815,97.4120143 L310.46358,97.4120143 C307.003303,104.017996 301.865318,107.373415 295.049623,107.373415 C284.559219,107.346677 281.993214,99.7894861 281.382173,92.1137327 L281.34221,91.5718144 C281.262321,90.3976499 281.224876,89.2247914 281.208518,88.0797546 L281.208518,34.6027607 L297.356473,34.6027607 Z M380.088528,34.6027607 L380.088528,87.1360429 C380.088528,90.2817485 380.403099,92.5885992 381.137097,93.9517382 C382.626064,96.8667587 386.484796,96.1222751 388.581933,94.6857362 C389.792681,93.8673257 390.768615,92.7468087 391.413068,91.4351738 L391.413068,34.6027607 L407.456166,34.6027607 L407.456166,106.21999 L394.873344,106.21999 L393.510205,97.4120143 L393.195635,97.4120143 C389.735359,104.017996 384.597373,107.373415 377.781678,107.373415 C367.291274,107.346677 364.72527,99.7894861 364.114228,92.1137327 L364.074265,91.5718144 C363.994377,90.3976499 363.956931,89.2247914 363.940573,88.0797546 L363.940573,34.6027607 L380.088528,34.6027607 Z M250.800032,33.2396217 C256.042874,33.2396217 260.342005,34.2881902 263.48771,36.490184 C266.633416,38.6921779 269.045124,42.0475971 270.513119,46.6612986 C271.981115,51.275 272.715113,57.4615542 272.715113,65.1161043 L272.715113,75.4969325 C272.715113,83.1514826 271.981115,89.23318 270.513119,93.8468814 C269.045124,98.4605828 266.738273,101.816002 263.48771,104.017996 C260.237148,106.115133 255.83316,107.268558 250.380604,107.268558 C244.718334,107.373415 240.314346,106.21999 237.063784,104.122853 C233.813222,101.920859 231.506371,98.5654397 230.143232,93.9517382 C228.780093,89.3380368 228.150952,83.2563395 228.150952,75.6017894 L228.150952,65.2209611 C228.150952,57.566411 228.88495,51.275 230.457802,46.6612986 C232.030655,41.9427403 234.442363,38.5873211 237.797782,36.490184 C241.153201,34.393047 245.452332,33.2396217 250.800032,33.2396217 Z M432.621811,4.50884458 L432.621811,42.2573108 L432.726667,42.2573108 C434.194663,39.5310327 436.082087,37.3290389 438.703508,35.6513292 C441.151777,34.0047112 444.036719,33.1282731 446.987199,33.1347648 C450.866903,33.1347648 453.802894,34.1833333 456.004888,36.1756135 C458.206882,38.2727505 459.779735,41.5233129 460.723447,46.0321575 C461.637667,50.4001007 462.158265,56.4409407 462.18991,64.059347 L462.191443,64.8015337 L462.191443,76.1260736 C462.191443,86.7166155 460.828303,94.5808793 458.311739,99.6140082 C455.690318,104.647137 451.705757,107.163701 446.253201,107.163701 C443.212353,107.163701 440.486074,106.429703 437.96951,105.066564 C435.742056,103.768558 433.897942,101.908197 432.619841,99.6750483 L432.412097,99.2994376 L432.097526,99.2994376 L430.419817,106.115133 L417.102997,106.115133 L417.102997,4.50884458 L432.621811,4.50884458 Z M368.449418,8.17883436 L368.449418,21.1810838 L352.511177,21.1810838 L352.511177,106.21999 L336.782649,106.21999 L336.782649,21.1810838 L320.739551,21.1810838 L320.739551,8.17883436 L368.449418,8.17883436 Z M195.540471,8.17883436 L195.549368,8.21831506 C195.702992,8.90029808 197.823461,18.3253965 200.15457,29.3057636 L200.33901,30.1757348 C200.431417,30.6122051 200.52408,31.0508039 200.616892,31.4910893 L200.80268,32.3737779 C200.833667,32.5212237 200.864663,32.6688243 200.895663,32.8165631 L201.081684,33.7045241 C201.112686,33.8527505 201.143684,34.0010824 201.174675,34.1495034 L201.360496,35.0409685 L201.360496,35.0409685 L201.630891,36.3438432 C203.204721,43.9476033 204.707581,51.573842 205.606729,57.0421268 L206.026156,57.0421268 C206.888169,52.1367136 208.138966,45.8595566 209.473227,39.4509076 L209.822988,37.7769188 C209.998614,36.9392485 210.175209,36.1011759 210.352094,35.2654533 L210.627389,33.9677196 C213.194244,21.8944685 215.74837,10.6155298 216.223526,8.52432128 L216.254224,8.38927119 C216.285747,8.2506583 216.302128,8.17883436 216.302128,8.17883436 L232.345226,8.17883436 L213.785563,74.3435072 L213.785563,106.115133 L197.952179,106.115133 L197.952179,74.448364 L197.847322,74.448364 L179.497373,8.17883436 L195.540471,8.17883436 Z M250.485461,44.3544479 C248.283467,44.3544479 246.815471,45.5078732 245.87176,47.9195808 C244.928048,50.3312883 244.50862,54.0012781 244.50862,59.1392638 L244.50862,81.473773 C244.50862,86.7166155 244.928048,90.596319 245.766903,92.9031697 C246.605757,95.2100204 248.17861,96.3634458 250.485461,96.3634458 C252.687455,96.3634458 254.260308,95.2100204 255.204019,92.9031697 C256.147731,90.596319 256.567158,86.7166155 256.567158,81.473773 L256.567158,59.1392638 C256.567158,54.0012781 256.147731,50.2264315 255.204019,47.9195808 C254.260308,45.5078732 252.687455,44.3544479 250.485461,44.3544479 Z M435.452946,46.4515849 C434.175003,47.6312244 433.265697,49.087342 432.725029,50.906337 L432.621811,51.275 L432.621811,91.9594581 C433.922036,94.1614519 435.767516,95.6294479 439.018079,95.7343047 C440.695788,95.7343047 442.058927,95.1051636 443.107496,93.8468814 C444.156064,92.5885992 444.890062,90.4914622 445.30949,87.5554703 C445.71214,84.7369182 445.921518,80.8553692 445.937624,75.9108235 L445.938631,75.2872188 L445.938631,65.9549591 C445.938631,60.2926892 445.728917,55.9935583 445.414346,52.9527096 C444.994919,49.9118609 444.470635,47.7098671 443.526923,46.4515849 C441.702414,43.8301636 437.759796,43.8616207 435.452946,46.4515849 Z M490.92222,44.0398773 C489.139653,44.1447342 487.881371,44.6690184 487.147373,45.6127301 C486.308518,46.6612986 485.784234,48.2341513 485.469663,50.541002 C485.161384,52.8017157 485.054514,60.7018825 485.050363,61.0169849 L485.050236,66.1646728 L496.794203,66.1646728 L496.793373,61.6248446 L496.793236,61.7122499 C496.787382,63.2993708 496.754477,60.7909373 496.681842,57.7119157 L496.671921,57.2983077 C496.605889,54.5919004 496.509592,51.574591 496.374776,50.541002 C496.060205,48.1292945 495.535921,46.4515849 494.697066,45.5078732 C493.858211,44.5641616 492.599929,44.0398773 490.92222,44.0398773 Z"
                          fill="#fbf9f9"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <sup className="font-semibold text-gray-400 px-1 pb-2">VN</sup>
              </div>
            </div> */}
            <div
              className="text-white py-2 px-3 mt-2 text-xl rounded-[50%] hover:bg-white hover:bg-opacity-25 w-fit h-fit cursor-pointer"
              onClick={() => {
                setIsHide(true);
              }}
            >
              <FontAwesomeIcon icon={faBars} />
            </div>
            {/* <ul
                className={
                  isBlur
                    ? clsx(styles.scroll, "space-y-2 font-medium")
                    : clsx(styles.noscroll, "space-y-2 font-medium")
                }
                onMouseOver={() => {
                  setBlur(true);
                }}
                onMouseOut={() => {
                  setBlur(false);
                }}
              >
                <li
                  className={
                    isSel === 0
                      ? "bg-white bg-opacity-25 rounded-lg"
                      : "hover:bg-white hover:bg-opacity-25 rounded-lg"
                  }
                  onClick={() => setSel(0)}
                >
                  <Link to="/">
                    <div className="flex flex-col items-center py-3">
                      <div className="text-white text-xl font-bold">
                        <FontAwesomeIcon icon={faHouse} />
                      </div>
                      <span className="ml-0 text-white text-xs font-normal">
                        Trang chủ
                      </span>
                    </div>
                  </Link>
                </li>
                <li
                  className={
                    isSel === 1
                      ? "bg-white bg-opacity-25 rounded-lg"
                      : "hover:bg-white hover:bg-opacity-25 rounded-lg"
                  }
                  onClick={() => setSel(1)}
                >
                  <Link to="/short">
                    <div className="flex flex-col items-center py-3">
                      <div className="text-white text-xl font-bold">
                        <FontAwesomeIcon icon={faPlayCircle} />
                      </div>
                      <span className="ml-0 text-white text-xs font-normal">
                        Playlist Nhạc Việt
                      </span>
                    </div>
                  </Link>
                </li>
                <li
                  className={
                    isSel === 2
                      ? "bg-white bg-opacity-25 rounded-lg"
                      : "hover:bg-white hover:bg-opacity-25 rounded-lg"
                  }
                  onClick={() => setSel(2)}
                >
                  <Link>
                    <div className="flex flex-col items-center py-3">
                      <div className="text-white text-2xl font-bold">
                        <FontAwesomeIcon icon={faRegistered} />
                      </div>
                      <span className="ml-0 text-white text-[0.6rem] font-normal">
                        Kênh đăng ký
                      </span>
                    </div>
                  </Link>
                </li>

                <li
                  className={
                    isSel === 3
                      ? "bg-white bg-opacity-25 rounded-lg"
                      : "hover:bg-white hover:bg-opacity-25 rounded-lg"
                  }
                  onClick={() => setSel(3)}
                >
                  <Link>
                    <div className="flex flex-col items-center py-3">
                      <div className="text-white text-xl font-bold">
                        <FontAwesomeIcon icon={faImages} />
                      </div>
                      <span className="ml-0 text-white text-xs font-normal">
                        Thư viện
                      </span>
                    </div>
                  </Link>
                </li>
              </ul> */}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;