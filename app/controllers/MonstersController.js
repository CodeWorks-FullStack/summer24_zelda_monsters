import { AppState } from "../AppState.js";
import { monstersService } from "../services/MonstersService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class MonstersController {
  constructor() {
    // NOTE we don't call draw on page load, because there is nothing to draw. Attach a listener instead
    AppState.on('monsters', this.drawMonsters)

    console.log('Loaded Monsters Controller');
    // NOTE asynchronous code allows the code to pause in the method below, but continue running other actions outside of that
    this.getMonsters()
    // this.testPromise()
  }
  // a method (or function) must be async in order to use await
  async testPromise() {
    // When we await this promise, the code in this method stops running on the following line, and will only continue after the promise has been resolved
    const myPromise = await new Promise((resolve, reject) => {
      // NOTE this promise resolves in 3 seconds
      setTimeout(() => {
        resolve("Promise has been resolved");
      }, 3000);
    });
    // NOTE this line starts running after Promise is resolved
    console.log(myPromise);
  }

  // NOTE best practice any network request should be using a try/catch
  async getMonsters() {
    // try will attempt to run the code inside of the first codeblock
    try {
      console.log('getting monsters 📡🧌');
      await monstersService.getMonsters()
      Pop.success("WE GOT THE MONSTERS, BABY")

      //if an error is thrown by the try, we catch it here and run code inside of this codeblock 
    } catch (error) {
      // Alert the user that something went wrong
      Pop.error(error)
      // Alert the developer that something went wrong
      console.error("TRIED TO GET THE MONSTERS AND FAILED", error)
    }
  }

  drawMonsters() {
    const monsters = AppState.monsters
    let innerHTMLString = ''
    monsters.forEach((monster) => innerHTMLString += monster.cardHTMLTemplate)
    setHTML('monsterCards', innerHTMLString)
  }
}