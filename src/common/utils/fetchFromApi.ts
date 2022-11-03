import axios from 'axios';
import { REACT_APP_RAPID_API_KEY } from 'common/config';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

export const fetchFromAPI = async (url: string) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, {
    params: {
      maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
  });

  return data;
};
