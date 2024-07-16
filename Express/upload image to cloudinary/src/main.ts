//אתחול משתני סביבה
import 'dotenv/config';

//ייבוא את האקספרס
import express from 'express';
import userRoutes from './user/user.routes';
import { join } from 'path';
import uploadRoutes from './upload/upload.router';

//הגדרת הפורט
const PORT = process.env.PORT || 7777;

//מייצר את אובייקט השרת
const server = express();

//הגדרת יכולות שונות
server.use(express.json({limit: '50mb'})); //json עבודה עם 

//שימוש בקבצים סטטיים
//url, התיקייה בה נשמרים הקבצים
server.use('/static', express.static(join(__dirname, 'static')));

//routes אפשרויות הניווט השונות
server.use('/api/users', userRoutes);

//העלאת קבצים
server.use('/api/upload', uploadRoutes);

//הפעלת השרת
server.listen(PORT, () => { console.log(`[SERVER] running... http://localhost:${PORT}`) });