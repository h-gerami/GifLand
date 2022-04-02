import {useCallback, useState} from 'react';
import GifService from '../services/GifService';
import {GifType} from '../utils/types';
export default () => {
  const [searchedGifs, setSearchedGifs] = useState<GifType[]>([]);
  const [searchErrText, setSearchErrText] = useState<string>('');
  const [searchedGifLoading, setSearchedGifLoading] = useState<boolean>(false);

  const getSearchedResults = useCallback(async (searchedText: string) => {
    setSearchedGifLoading(true);
    setSearchedGifs([]);
    setSearchErrText('');
    try {
      const response = await GifService.get('search', {
        params: {
          q: searchedText,
        },
      });
      setSearchedGifs(response.data.data);
    } catch (err: any) {
      setSearchErrText(err.message || 'Somthing Went Wrong ...');
    } finally {
      setSearchedGifLoading(false);
    }
  }, []);

  return {
    searchedGifs,
    setSearchedGifs,
    searchErrText,
    searchedGifLoading,
    getSearchedResults,
  };
};
