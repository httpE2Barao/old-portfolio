import { ScrollAnimation } from "./animation.js";
import { Controller } from "./controller.js";
import { ShowProjectsDescription } from "./showDescription.js";
const controller = new Controller();
ScrollAnimation();
controller.AddListeners();
ShowProjectsDescription();
