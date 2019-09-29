const API_KEY = process.env.REACT_APP_API_KEY;

const fetchData = async (e) => {
  const city = e.target.elements.city.value;
  const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${API_KEY}`);
  const dataJson = await apiCall.json(); //transform data into json format
  return dataJson
}

export const GET_DATA = "GET_DATA"

export const getData = () => ({
  type: GET_DATA,
  payload: fetchData()
})