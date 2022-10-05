import React from 'react';
import { Box, Stack } from '@mui/material';
import { ChannelCard, VideoCard } from 'common/components';
import { IVideoModel } from 'common/models';

interface IComponentProps {
  videos: IVideoModel[];
}

const Videos: React.FC<IComponentProps> = ({ videos }) => {
  return (
    <Stack className="videos">
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
