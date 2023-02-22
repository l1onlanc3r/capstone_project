import express from 'express';
import { JsonDB, Config } from 'node-json-db';

// The first argument is the database filename. If no extension, '.json' is assumed and automatically added.
// The second argument is used to tell the DB to save after each push
// If you put false, you'll have to call the save() method.
// The third argument is to ask JsonDB to save the database in an human readable format. (default false)
// The last argument is the separator. By default it's slash (/)
const db = new JsonDB(new Config('db', true, false, '/'));

const quizRouter = express.Router();

quizRouter.post('/submit', async (req, res) => {
  console.log('reading data: ', req.body);

  const ObjectId = (
    m = Math,
    d = Date,
    h = 16,
    s = (s) => m.floor(s).toString(h),
  ) => s(d.now() / 1000) + ' '.repeat(h).replace(/./g, () => s(m.random() * h));

  // Access the parse results as request.body
  console.log(req.body);
  // const answers = req.body;
  // process the data
  // format data for easy access later

  const answers = [];
  let userId = 0;

  console.log(Object.entries(req.body));

  for (const key in req.body) {
    if (key === 'userId') {
      userId = req.body[key];
    } else {
      answers.push({
        questionId: key,
        answer: req.body[key],
      });
    }
  }

  console.log(answers);

  // fetch questions
  // If you try to get some data from a DataPath that doesn't exists
  // You'll get an Error
  try {
    const data = await db.getData('/questions');
    console.log(data);

    const score = data.reduce(
      (p, c) => {
        const ans = answers.find((a) => Number(a.questionId) === c.id);

        console.log('weight: ', c.weight);
        console.log('ans: ', ans);

        if (c.type === 'single' && c.correctAns === ans.answer) {
          console.log('correct');
          return {
            correct: p.correct + 1,
            points: p.points + c.weight,
          };
        }

        if (
          c.type === 'multiple' &&
          c.correctAns.length === ans.answer.length
        ) {
          // c.type === 'multiple'
          if (c.correctAns.every((x) => ans.answer.includes(x))) {
            console.log('correct');
            return {
              correct: p.correct + 1,
              points: p.points + c.weight,
            };
          }
        }

        console.log('wrong:');
        console.log('correct:', c.correctAns);
        return p;
      },
      {
        correct: 0,
        points: 0,
      },
    );

    // save to database
    db.push(
      '/results',
      [
        {
          id: ObjectId(),
          user_id: userId,
          selectedAnswers: answers,
          correct: score.correct,
          score: score.points,
          datetime: new Date(),
        },
      ],
      false,
    );

    // return results

    console.log('total: ', score);
    res.send(JSON.stringify(score));
  } catch (error) {
    // The error will tell you where the DataPath stopped. In this case test1
    // Since /test1/test does't exist.
    console.error(error);
  }

  // res.send(`reading data: ${JSON.stringify(req.body)}`);
});

export default quizRouter;
