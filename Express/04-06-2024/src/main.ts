//ייבוא טיפוסים ופונקציות
import express, { Request, Response } from 'express';

/*By importing this module, the routes and functionality defined in 'user.routes' can be used in the main Express application to
handle user-related requests and logic. */
import userRouter from './users/user.routes';

//הגדרת הפורט
const PORT = 5555;

//יצירת השרת 
const app = express();

//הגדרות תצורה לשרת
/* The line `app.use(express.json());` is setting up middleware in the Express application to parse
incoming requests with JSON payloads. This middleware function parses incoming request bodies and
makes the parsed JSON data available on the `req.body` property of the request object. This allows
the application to easily work with JSON data sent in requests. */
app.use(express.json());

//יצירת ניתוב
app.get('/', async (req: Request, res: Response) => {
    res.status(200).send('KUKU from server!');
});

//שימוש בנתיבים של היוזרים
//URL הפרמטר הראשון הוא הבסיס לכתובת ה 
//עצמו Router הפרמטר השני הוא ה 
app.use('/api/users', userRouter);

// app.get('/hello', async (req: Request, res: Response) => {
//     res.status(200).send('Hello');
// });

// app.post('/add', async (req: Request, res: Response) => {
//     console.log(req.body)
//     if(!req.body.name)
//         res.status(500).send('no valid data!');
//     else
//         res.status(201).send('added succesfuly');
// });

//הפעלת השרת
app.listen(PORT, () => console.log(`[Server] server running at http://localhost:${PORT}`));


