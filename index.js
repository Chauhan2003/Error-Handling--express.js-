import express from 'express';
import router from './routes/User.js';
import errorMiddleware from './middleware/Error.js';
const app = express();
const PORT = 3000;

app.use('/api', router);

// Error Middleware :)
app.use(errorMiddleware);
app.listen(PORT, ()=>{
    console.log(`server is running on port:  ${PORT}`);
});