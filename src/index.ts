import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Root route
app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Welcome to the Greeting API! The task is to implement /greet-{name} to get a personalized greeting.' });
});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
