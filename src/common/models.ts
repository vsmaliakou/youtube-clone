export interface IVideoModel {
  id: {
    channelId?: string;
    videoId?: string;
    kind: string;
  };
  kind: string;
  snippet: any;
  statistics?: any;
}
