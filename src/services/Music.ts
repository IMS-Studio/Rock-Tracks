export const musicListApi = async () => {
  let API_URL = "https://itunes.apple.com/search?term=rock&media=music";
  const res = await fetch(API_URL);
  const data = await res.json();
  console.log("here", data);
  return data;
};
