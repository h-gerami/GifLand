export interface GifType {
  id: string;
  bitly_url: string;
  title: string;
  rating: string;
  images: GifImgType;
}
export interface GifImgType {
  original: {
    url: string;
  };
}
