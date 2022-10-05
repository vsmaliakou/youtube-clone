import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

export const fetchFromAPI = async (url: string, part?: string) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, {
    params: {
      part: part,
      maxResults: '50',
    },
    headers: {
      // @ts-ignore
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
  });

  return data;
};
