import { monstersService } from "../services/MonstersService.js";

export class MonstersController {
  constructor() {
    console.log('Loaded Monsters Controller');
    this.getMonsters()
  }

  getMonsters() {
    console.log('getting monsters 📡🧌');
    monstersService.getMonsters()
  }
}