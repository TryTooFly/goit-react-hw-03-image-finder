export const FetchImages = async(page,value) => {
    
    const API_KEY = '27996406-97aa9c49a494d96b999a7c23c'
    const url = `https://pixabay.com/api/?page=${page}&key=${API_KEY}&q=${value}&image_type=photo&orientation=horizontal&per_page=12`
    try {
        const response = await fetch(url)
         if (!response.ok) {
      throw new Error(response.status);
    }
    const res = await response.json()
    return res 
    } catch (error) {
        console.log('error', error)
    } 
}