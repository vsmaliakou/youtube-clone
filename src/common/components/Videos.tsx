import React from 'react';
import { Box, Stack } from '@mui/material';
import { ChannelCard, VideoCard } from 'common/components';
import { IVideoModel } from 'common/models';

interface IComponentProps {
  videos: IVideoModel[];
  className?: string;
}

const Videos: React.FC<IComponentProps> = ({ videos, className }) => {
  if (!videos.length) {
    return null;
  }

  return (
    <Stack className={`videos ${className}`}>
      {videos.map((item, index) => (
        <Box className="videos__item" key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
