
class MonstersService {
  // NOTE every method that requests data from an API should be async
  async getMonsters() {
    // NOTE we await the response from the API because it will take a bit of time to resolve
    // REVIEW we wait for the dog to bring the ball back
    // 🐕 ---------> Zelda API
    // NOTE axios brought in through CDN script tag, you can ignore red squiggles from it
    // @ts-ignore
    const response = await axios.get('https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters')

    // response from API, we really care about the response body (the data), and that is stored in response.data
    // NOTE ALWAYS LOOK AT THE RESPONSE!!!!!
    console.log('🗞️🐕 <---------', response.data);
  }
}

export const monstersService = new MonstersService()