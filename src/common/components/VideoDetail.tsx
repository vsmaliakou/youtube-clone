import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import ReactPlayer from 'react-player';
import { Link, useParams } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';
import { fetchFromAPI } from 'common/utils/fetchFromApi';
import { IVideoModel } from 'common/models';
import Videos from 'common/components/Videos';

const VideoDetail: React.FC = () => {
  const [videoDetail, setVideoDetail] = useState<IVideoModel | null>(null);
  const [videos, setVideos] = useState<IVideoModel[]>([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setVideoDetail(data.items[0]);
    });

    fetchFromAPI(`search?part=id,snippet&relatedToVideoId=${id}&type=video`).then((data) => {
      setVideos(data.items);
    });
  }, [id]);

  if (!videoDetail) {
    return null;
  }

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box className="video-detail">
      <Stack className="video-detail__container">
        <Box className="video-detail__player">
          <Box className="video-detail__player_wrapper">
            <ReactPlayer className="video-detail__player_react-player" url={`https://www.youtube.com/watch?v=${id}`} controls />

            <Typography className="video-detail__player_title">{title}</Typography>

            <Stack className="video-detail__player_description">
              <Link to={`/channel/${channelId}`}>
                <Typography className="video-detail__player_description_title">
                  {channelTitle}
                  <CheckCircle className="video-detail__player_description_icon" />
                </Typography>
              </Link>

              <Stack className="video-detail__player_description_container">
                <Typography>{parseInt(viewCount).toLocaleString()} views</Typography>

                <Typography>{parseInt(likeCount).toLocaleString()} likes</Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        <Box className="video-detail__videos">
          <Videos videos={videos} className="videos__column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
