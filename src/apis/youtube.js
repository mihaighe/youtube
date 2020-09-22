import axios from "axios";

const KEY = "AIzaSyCcTJxn4x-BXtfXLUQ7qktCsSCvb2Em2cY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResult: 5,
    key: KEY,
  },
});
