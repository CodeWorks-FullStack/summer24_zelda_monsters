class MonstersService {
  // NOTE every method that requests data from an API should be async
  async getMonsters() {
    // NOTE we await the Promise to be resolved from fetch so that we can access the data
    // REVIEW we wait for the dog to return with the ball
    const response = await fetch('https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters')
    console.log('FETCH BOY 🐕🗞️', response)
    // NOTE convert the response to JSON so we can work with the data
    const data = await response.json()
    console.log('parsed data to json', data)

    // response body looked like this: {data: [{name: 'jeremy', ...}, {name: 'mick', ...}]}
    data.data.forEach(mon => console.log(mon.name))
  }
}

export const monstersService = new MonstersService()