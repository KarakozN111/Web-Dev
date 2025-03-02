export interface Album{
    userId: number;
    title: string;
    id: number;
  }

  
export interface Images{
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  }