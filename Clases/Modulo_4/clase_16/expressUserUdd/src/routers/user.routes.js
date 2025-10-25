import { Router } from 'express';
import { userCreate } from '../controllers/user.controller';

export const router = Router();

router.post('/users', userCreate);

export default router;