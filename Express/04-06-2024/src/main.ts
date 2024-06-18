//ייבוא טיפוסים ופונקציות
import express, { Request, Response } from 'express';
import 'dotenv/config';

import userRouter from './users/user.routes';
import carsRouter from './cars/cars.routes';

//הגדרת הפורט
const PORT = process.env.PORT || 5555;

//יצירת השרת 
const app = express();

//הגדרות תצורה לשרת
app.use(express.json());

//יצירת ניתוב
app.get('/', async (req: Request, res: Response) => {
    res.status(200).send('KUKU from server!');
});

//שימוש בנתיבים של היוזרים
//URL הפרמטר הראשון הוא הבסיס לכתובת ה 
//עצמו Router הפרמטר השני הוא ה 
app.use('/api/users', userRouter);
app.use('/api/cars', carsRouter);

//הפעלת השרת
app.listen(PORT, () => console.log(`[Server] server running at http://localhost:${PORT}`));
