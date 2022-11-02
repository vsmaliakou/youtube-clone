import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Videos } from 'common/components';
import { fetchFromAPI } from 'common/utils/fetchFromApi';
import { IVideoModel } from 'common/models';

const SearchFeed: React.FC = () => {
  const [videos, setVideos] = useState<IVideoModel[]>([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet,id&q=${searchTerm}`).then((data) => {
      const filteredItems = data.items.filter((item: IVideoModel) => item.id.videoId);
      setVideos(filteredItems);
    });
  }, [searchTerm]);

  return (
    <Box className="feed__videos-box">
      <Typography className="feed__videos-typography" variant="h4">
        Search Results for: <span>{searchTerm}</span> videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
