import GifService from '../src/services/GifService';
test('random-gif api status code is 200', async () => {
  const data = await GifService.get('random');
  expect(data.status).toBe(200);
});
test('search api status code is 200', async () => {
  const data = await GifService.get('search', {params: {q: 'apple'}});
  expect(data.status).toBe(200);
});
