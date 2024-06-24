class MonstersService {
  async getMonsters() {
    const response = await fetch('https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters')
    console.log('FETCH BOY 🐕🗞️', response);// promise not resolved
    const data = await response.json()
    console.log('parsed data to json', data);

    data.data.forEach(mon => console.log(mon.name))
  }
}

export const monstersService = new MonstersService()