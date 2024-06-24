import { AppState } from "../AppState.js";
import { monstersService } from "../services/MonstersService.js";
import { setHTML } from "../utils/Writer.js";

export class MonstersController {
  constructor() {
    // NOTE we don't call draw on page load, because there is nothing to draw. Attach a listener instead
    AppState.on('monsters', this.drawMonsters)

    console.log('Loaded Monsters Controller');
    this.getMonsters()
    // NOTE asynchronous code allows the code to pause in the method below, but continue running other actions outside of that
    // this.testPromise()
  }
  async testPromise() {
    // When we await this promise, the code in this method stops running, and will only continue after the promise has been resolved
    const myPromise = await new Promise((resolve, reject) => {
      setTimeout(() => {
        // NOTE this promise resolves in 3 seconds
        resolve("Promise has been resolved");
      }, 3000);
    });
    // NOTE this line starts running after Promise is resolved
    console.log(myPromise);
  }

  getMonsters() {
    console.log('getting monsters 📡🧌');
    monstersService.getMonsters()
  }

  drawMonsters() {
    const monsters = AppState.monsters
    let innerHTMLString = ''
    monsters.forEach((monster) => innerHTMLString += monster.cardHTMLTemplate)
    setHTML('monsterCards', innerHTMLString)
  }
}