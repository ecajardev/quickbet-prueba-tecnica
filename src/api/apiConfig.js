// Configuracion para realizar solicitudes a la API
const  apiConfig ={
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '8796268343997d3de7d75182797a9a5d',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;