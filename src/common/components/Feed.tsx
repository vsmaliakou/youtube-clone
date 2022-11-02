import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Sidebar, Videos } from 'common/components';
import { fetchFromAPI } from 'common/utils/fetchFromApi';
import { IVideoModel } from 'common/models';

const Feed: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('New');
  const [videos, setVideos] = useState<IVideoModel[]>([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet,id&q=${selectedCategory}`).then((data) => {
      const filteredItems = data.items.filter((item: IVideoModel) => item.id.videoId);
      setVideos(filteredItems);
    });
  }, [selectedCategory]);

  return (
    <Stack className="feed">
      <Box className="feed__sidebar-box">
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

        <Typography className="feed__copyright" variant="body2">
          Copyright 2022 JSM Media
        </Typography>
      </Box>

      <Box className="feed__videos-box">
        <Typography className="feed__videos-typography" variant="h4">
          {selectedCategory} <span>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
