import * as express from 'express';
import CreateMail from './CreateMail';

const app = express();

const PORT = 3000;
const router = express.Router();
const mailSystem = new CreateMail();
app.use(router);
app.listen(PORT, () => {
  console.log('Server listening on PORT ', PORT);
});

router.get('/send-mail', (req, res, err) => {
  mailSystem.sendMailFirst();
  res.end();
});

router.get('/send-mail-2', (req, res, err) => {
  mailSystem.sendMailSecond();
  res.end();
});
