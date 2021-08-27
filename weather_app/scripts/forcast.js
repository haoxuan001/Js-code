class Forecast {
  constructor(){
    this.key = "YuCxz76lcUrf56kKtpn9eItLYoVzfYME";
    this.weatherURI ='http://dataservice.accuweather.com/currentconditions/v1/';
    this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  }
  async updateCity(city){
    const cityDets = await this.getCity(city);
    const weather = await this.getWeather(cityDets.Key);
    return { cityDets, weather };
  }
  async getWeather(id){
    const query = `${id}?apikey=${this.key}`;
    const response = await fetch(this.weatherURI + query);
    const data = await response.json();
    return data[0];
  }
  async getCity(city){
    const query = `?apikey=${this.key}&q=${city}`;
    const response = await fetch(this.cityURI + query);
    const data = await response.json();
    return data[0];
  }
}
  
  
  
  
  // const key ="YuCxz76lcUrf56kKtpn9eItLYoVzfYME";
  // // get weather information
  // const getWeather = async (id) => {
    
  //     const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
  //     const query = `${id}?apikey=${key}`;
    
  //     const response = await fetch(base + query);
  //     const data = await response.json();
    
  //     return data[0];
    
  //   };
    
  //   // get city information
  //   const getCity = async (city) => {
    
  //     const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  //     const query = `?apikey=${key}&q=${city}`;
    
  //     const response = await fetch(base + query);
  //     const data = await response.json();
    
  //     return data[0];
    
  //   };
  


//  function handleErrors(response) {
//     if (!response.ok) {
//       throw Error("Cannot fetch the data ");
//     }
//     return response;
//   }
//    const getCity = async(city) => {
//     const baseUrl = ' http://dataservice.accuweather.com/locations/v1/cities/search'
//     const query = `?apikey=${key}&q=${city}`
 
//     const response = await fetch(baseUrl + query).catch(handleErrors);
 
//     if(response.status !== 200){
//          let error = new Error('Any other error that occurs');
//          throw error
//     }
 
//     const data = await response.json()
 
//     return data[0]  //promise
// };
 
// getCity('brisbane')
//     .then(data=>{
//         return getWeather(data.Key);
//     })
//     .catch(err=>console.log(err.message));