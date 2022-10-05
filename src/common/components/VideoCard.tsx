import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';
import { IVideoModel } from 'common/models';
import { demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl } from 'common/utils/constants';

interface IComponentProps {
  video: IVideoModel;
}

const VideoCard: React.FC<IComponentProps> = ({ video }) => {
  const { id, snippet } = video;
  const { videoId } = id;

  return (
    <Card className="video-card">
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia className="video-card__poster" image={snippet?.thumbnails?.high?.url} />
      </Link>

      <CardContent className="video-card__content">
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography className="video-card__title" variant="subtitle1">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>

        <Link to={snippet?.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl}>
          <Typography className="video-card__subtitle" variant="subtitle2">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle className="video-card__icon" />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
