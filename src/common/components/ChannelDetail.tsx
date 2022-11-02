import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { fetchFromAPI } from 'common/utils/fetchFromApi';
import ChannelCard from 'common/components/ChannelCard';
import Videos from 'common/components/Videos';
import { IVideoModel } from 'common/models';

const ChannelDetail: React.FC = () => {
  const [channelDetail, setChannelDetail] = useState<IVideoModel>();
  const [videos, setVideos] = useState<IVideoModel[]>([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet,statistics&id=${id}`).then((data) => {
      setChannelDetail(data?.items[0]);
    });

    fetchFromAPI(`search?channelId=${id}&part=snippet,id&order=date`).then((data) => {
      setVideos(data?.items);
    });
  }, [id]);

  if (!channelDetail) {
    return null;
  }

  return (
    <Box className="channel-detail">
      <Box>
        <div className="channel-detail__header" />
        <ChannelCard channelDetail={channelDetail} />
      </Box>

      <Box className="channel-detail__videos">
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
