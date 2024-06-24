export class Monster {
  constructor(data) {
    this.name = data.name
    this.id = data.id // id from the API itself
    this.description = data.description
    this.imgUrl = data.image // we can rename properties on our own objects
    this.isDLC = data.dlc
    this.drops = data.drops
    this.commonLocations = data.common_locations
  }

  get cardHTMLTemplate() {
    return `
    <div class="col-6 mb-3">
      <div class="card">
        <img src="${this.imgUrl}" class="card-img-top"
          alt="${this.name}">
        <div class="card-body">
          <p class="card-title fs-5 fw-bold">Dinraal</p>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        </div>
      </div>
    </div>
    `
  }
}

// NOTE copy and pasted from console
// const rawMonsterDataFromAPI = {
//   "category": "monsters", // we don't save this!
//   "common_locations": [
//     "Eldin Mountains",
//     "Tabantha Frontier"
//   ],
//   "description": "A spirit of fire has taken the form of this giant dragon. Making its home in the Eldin region, it's said to have served the Spring of Power since ancient times. An old saying goes, \"The dragon ascends to the heavens as the sun begins to set,\" but nobody has witnessed this in the current age. The flames that coat its body make it dangerous to get near, but Dinraal bears no ill will toward people.",
//   "dlc": false,
//   "drops": null,
//   "id": 153,
//   "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/dinraal/image",
//   "name": "dinraal"
// }