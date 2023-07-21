import http from "../../api";

const baseUrl = "https://youtube-v31.p.rapidapi.com/channels";
const url = "https://youtube-v31.p.rapidapi.com/search";

export const ManageChannel = {
  getChannelDetail: (query) => {
    return http.get(baseUrl, {
      params: {
        part: "snippet,statistics",
        id: query,
      },
    });
  },

  getChannelVideos: (query) => {
    return http.get(url, {
      params: {
        channelId: query,
        part: "snippet,id",
        maxResults: "50",
        order: "date",
      },
    });
  },
};
