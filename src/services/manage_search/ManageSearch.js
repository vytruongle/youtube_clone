import http from "../../api";

const url = "https://youtube-v31.p.rapidapi.com/search";

export const ManageSearch = {
  getSearchResults: (q) => {
    return http.get(url, {
      params: {
        q: q,
        part: "snippet,id",
        regionCode: "VN",
        maxResults: "100",
      },
    });
  },
};
