
import { MonstersController } from "./controllers/MonstersController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [MonstersController],
    view: 'app/views/HomeView.html'
  }
])