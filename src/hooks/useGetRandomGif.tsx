import {useCallback, useEffect, useState} from 'react';
import GifService from '../services/GifService';
import {GifType} from '../utils/types';
export default () => {
  const [randomGif, setRandomGif] = useState<GifType | null>(null);
  const [errText, setErrText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const getRandomGif = useCallback(async () => {
    setLoading(true);
    setRandomGif(null);
    setErrText('');
    try {
      const response = await GifService.get('random');
      setRandomGif(response.data.data);
    } catch (err: any) {
      setErrText(err.message || 'Somthing Went Wrong ...');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getRandomGif();
    return () => {
      setRandomGif(null);
      setErrText('');
      setLoading(false);
    };
  }, [getRandomGif]);

  return {randomGif, errText, loading, getRandomGif};
};
