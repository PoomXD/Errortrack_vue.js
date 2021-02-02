import httpClient from '../httpClient'

const END_POINT = 'api'

class AirportService{
  async examAirport(typeId) {
    const config = {
      method: 'get',
      url: `${END_POINT}/airports`,
      params : {
        typeId: typeId
      }
    }

    const response = await httpClient(config);
    return response.data;
  }

  async examAirportType() {
    const config = {
      method: 'get',
      url: `${END_POINT}/airportType`
    }

    const response = await httpClient(config);
    return response.data;
  }
}

export default new AirportService();

