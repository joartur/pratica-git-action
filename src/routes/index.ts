import { Router } from 'express';
import healthRouter from './healthRouter';
import helloWorldRouter from './helloWorldRouter';

const router = Router();

router.use('/health', healthRouter);
router.use('/hello-world', helloWorldRouter);

export default router;