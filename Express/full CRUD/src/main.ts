//אתחול משתני סביבה
import 'dotenv/config';

//ייבוא את האקספרס
import express from 'express';
import userRoutes from './user/user.routes';

//הגדרת הפורט
const PORT = process.env.PORT || 7777;

//מייצר את אובייקט השרת
const server = express();

//הגדרת יכולות שונות
server.use(express.json()); //json עבודה עם 

//שימוש בקבצים סטטיים - בהמשך

//routes אפשרויות הניווט השונות
server.use('/api/users', userRoutes);

//הפעלת השרת
server.listen(PORT, () => { console.log(`[SERVER] running... http://localhost:${PORT}`) })