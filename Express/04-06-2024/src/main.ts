//ייבוא טיפוסים ופונקציות
import express, { Express, Request, Response } from 'express';

//הגדרת הפורט
const PORT = 5555;

//יצירת השרת 
const app = express();

//הפעלת השרת
app.listen(PORT, () => console.log(`[Server] server running at http://localhost:${PORT}`));