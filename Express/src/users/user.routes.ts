
import { Request, Response, Router } from 'express';

const userRouter = Router();

const users = [
    { first_name: 'momik', last_name: 'epsilon' },
    { first_name: 'zozik', last_name: 'barsum' }
];

userRouter.get('/', async (req: Request, res: Response) => {
    res.status(200).json(users);
});

userRouter.get('/kuku/momo', async (req: Request, res: Response) => {
    users.push({first_name: 'kuku', last_name: 'momo'});
    res.status(200).json(users);
});

userRouter.post('/add', async (req: Request, res: Response) => {
    try {
        let u = req.body;
        users.push(u);
        res.status(201).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
})

export default userRouter;




