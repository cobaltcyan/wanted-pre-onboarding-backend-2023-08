import express, {Request, Response} from 'express';

class App {
    public application: express.Application;
    constructor() {
        this.application = express();
    }
};

const app = new App().application;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log('Listen on port ${PORT}'));