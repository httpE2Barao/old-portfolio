import { ScrollAnimation } from "./animation";
import { Controller } from "./controller";
import { ShowProjectsDescription } from "./showDescription";

const controller = new Controller();

ScrollAnimation();
controller.AddListeners()
ShowProjectsDescription()
