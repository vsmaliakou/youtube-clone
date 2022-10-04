import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Sidebar, Videos } from 'common/components';

const Feed: React.FC = () => {
  return (
    <Stack className="feed">
      <Box className="feed__sidebar-box">
        <Sidebar />

        <Typography className="feed__copyright" variant="body2">
          Copyright 2022 JSM Media
        </Typography>
      </Box>

      <Box className="feed__videos-box">
        <Typography className="feed__videos-typography" variant="h4">
          New <span>videos</span>
        </Typography>

        <Videos videos={[]} />
      </Box>
    </Stack>
  );
};

export default Feed;
