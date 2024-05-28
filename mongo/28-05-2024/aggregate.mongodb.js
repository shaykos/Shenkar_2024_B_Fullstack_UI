use('legends');
db.unicorns.aggregate([
    //מסנן לפני ביצוע הקיבוץ ולוקח רק את אלו שיש להם את התכונה
    { $match: { vampires: { $exists: true } } }, 
    //
    {
        //gneder קיבוץ הנתונים לפי השדה 
        //שהוא סכום הערפדים שכל קבוצה הרגה total_kills מייצר את השדה 
        //הוא לפנות לערך השדה $ התפקיד של ה 
        $group: {
            _id: "$gender",
            total_Kills: {
                //$sum -> פונקציה לביצוע סכום
                $sum: "$vampires"
            }
        }
    }
]);

//ממשקל ממוצע לפי מגדר
use('legends');
db.unicorns.aggregate([
    //מסנן לפני ביצוע הקיבוץ ולוקח רק את אלו שיש להם את התכונה
    { $match: { weight: { $exists: true } } }, 
    //
    {
        //gneder קיבוץ הנתונים לפי השדה 
        //הוא לפנות לערך השדה $ התפקיד של ה 
        $group: {
            _id: "$gender",
            avg_weight: {
                $avg: "$weight"
            }
        }
    }
]);
