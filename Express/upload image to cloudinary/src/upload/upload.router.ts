import {Router} from 'express';
import { uploadImage } from './upload.controller';

const uploadRoutes = Router();

uploadRoutes.post('/image', uploadImage)

export default uploadRoutes;