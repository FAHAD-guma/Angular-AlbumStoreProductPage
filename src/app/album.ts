import { Track} from './track';

export interface Album {
  name: string;
  album: string;
  releaseDate: string;
  coverImage: string;
  tracks: Track[];
}
