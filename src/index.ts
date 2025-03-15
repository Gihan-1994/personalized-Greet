import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Root route
app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Welcome to the Greeting API! The task is to implement /greet-{name} to get a personalized greeting.' });
});

app.get('/greet-:name', (req: Request, res: Response) => {
    const name = req.params.name.substring(0, 3); // Get the first 3 letters of the name
    const message = `Hello! I am ${name}.. Cheers 🥂`;
    res.json({ message });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
