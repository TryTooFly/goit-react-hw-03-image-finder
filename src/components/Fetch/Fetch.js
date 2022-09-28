export const FetchImages = async (page, value) => {
  const API_KEY = '29269547-c3c4a7aec66b50e4a61abf60d';
  const url = `https://pixabay.com/api/?page=${page}&key=${API_KEY}&q=${value}&image_type=photo&orientation=horizontal&per_page=12`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const res = await response.json();
    return res;
  } catch (error) {
    console.log('error', error);
  }
};
