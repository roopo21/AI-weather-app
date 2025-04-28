import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY; 
export const getWeatherData = async (endpoint, place_id, measurementSystem) => { 


    const options = {
        method: 'GET',
        url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endpoint}`,
        params: {
          place_id,
          language: 'en',
          units: measurementSystem 
        },
        headers: {
          'x-rapidapi-key': apiKey,
          'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          return response.data;
      } catch (error) {
          console.error(error);
      }
}; 

export const findPlaces = async (text) => {
  const options = {
    method: 'GET',
    url: 'https://ai-weather-by-meteosource.p.rapidapi.com/find_places',
    params: {
      text,
      language: 'en'
    },
    headers: {
      'x-rapidapi-key': apiKey,
      'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    return(response.data);
  } catch (error) {
    console.error(error);
  }
}


