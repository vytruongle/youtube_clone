import http from "../../api";

const baseUrl = "https://youtube-v31.p.rapidapi.com";

export const ManageVideo = {
  getSuggestVideo: ({ url, videoId }) => {
    return http.get(`${baseUrl}/${url}`, {
      params: {
        relatedToVideoId: videoId,
        part: "id,snippet",
        type: "video",
        maxResults: "150",
      },
    });
  },

  getVideoDetail: ({ url, videoId }) => {
    return http.get(`${baseUrl}/${url}`, {
      params: {
        part: "contentDetails,snippet,statistics",
        id: videoId,
      },
    });
  },

  getVideoComment: ({ url, videoId }) => {
    return http.get(`${baseUrl}/${url}`, {
      params: {
        part: "snippet",
        videoId: videoId,
        maxResults: "100",
      },
    });
  },
};
