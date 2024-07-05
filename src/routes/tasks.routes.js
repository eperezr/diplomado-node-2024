import { Router } from 'express';
import tasksController from "../controllers/tasks.controller.js";
//import { authenticateToken } from '../middlewares/authenticate.middleware.js';

const router = Router();

router
.route('/')
.get(tasksController.getTasks)
.post(tasksController.createtask);

router
.route('/:id')
.get(tasksController.getTask)
.get(tasksController.updateTask)
.get(tasksController.deleteTask)
.get(tasksController.taskDone);

export default router;