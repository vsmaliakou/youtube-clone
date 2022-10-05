import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';
import { IVideoModel } from 'common/models';
import { demoProfilePicture } from 'common/utils/constants';

interface IComponentProps {
  channelDetail: IVideoModel;
}

const ChannelCard: React.FC<IComponentProps> = ({ channelDetail }) => (
  <Box className="channel-card">
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent className="channel-card__content">
        <CardMedia className="channel-card__logo" image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} />

        <Typography variant="h6">
          {channelDetail?.snippet?.title}
          <CheckCircle className="channel-card__icon" />
        </Typography>

        {channelDetail?.statistics?.subscriberCount && (
          <Typography>{parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers</Typography>
        )}
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;
