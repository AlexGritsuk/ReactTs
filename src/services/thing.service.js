import httpService from "./http.service";

const thingEndpoint = "products/";

const thingService = {
  fetch: async () => {
    const { data } = await httpService.get(thingEndpoint);
    return data
  }
}

export default thingService;