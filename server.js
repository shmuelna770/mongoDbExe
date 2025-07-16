import express from 'express';
import { router as userRouter } from './reportRouts.js'; 


const app = express();
const PORT = process.env.PORT || 3040;

app.use(express.json());
app.use('/reports', userRouter)

app.listen(PORT, () => {
    console.log(`running on http://localhost:${PORT}`);
});
