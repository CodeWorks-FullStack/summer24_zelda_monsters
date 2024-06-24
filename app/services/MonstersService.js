import { AppState } from "../AppState.js";
import { Monster } from "../models/Monster.js";

class MonstersService {
  // NOTE every method that requests data from an API should be async. async allows us to use the await keyword
  async getMonsters() {
    // NOTE we await the response from the API because it will take a bit of time to resolve
    // REVIEW we wait for the dog to bring the ball back
    // 🐕 ---------> Zelda API
    // NOTE axios brought in through CDN script tag, you can ignore red squiggles from it
    // @ts-ignore
    const response = await axios.get('https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters')

    // response from API, we really care about the response body (the data), and that is stored in response.data
    // NOTE ALWAYS LOOK AT THE RESPONSE TO SEE WHERE THE DATA WE CARE ABOUT IS STORED!!!!!
    console.log('🗞️🐕 <---------', response.data);

    // NOTE storing POJOs in AppState, which is bad
    // AppState.monsters = response.data.data

    // Convert all of the Plain Old JavaScript Objects (POJOs) into Monster Objects
    // map converts items from an array into a new data type and returns a new array
    const monsters = response.data.data.map((monsterPOJO) => new Monster(monsterPOJO))

    AppState.monsters = monsters
    console.log('🧌', AppState.monsters);
  }
}

export const monstersService = new MonstersService()