import express from 'express';
import mongoose from 'mongoose';
import * as callbackController from './routes/callback';
import { MONGODB_URI } from './util/secrets';
const app = express();

app.use(express.json());

app.get("/callback", callbackController.callbackRoute);

process.on('unhandledRejection', (ex) => {
    throw ex;
});

const mongoUrl: any = MONGODB_URI;
mongoose.connect(mongoUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {console.log(`Connected to ${mongoUrl}...`)},
    ).catch(err => {
        console.log(`MongoDB connection error. Please make sure MongoDB is running. ${err}`);
    });

const port = process.env.PORT || 6969;
app.listen(port, () => console.log(`Listening on port ${port}...`));