import express, { Express, Request, Response } from "express";
import mongoose, { model } from "mongoose";
import { FindBWPrime } from "./func/isPrime";
import { body, validationResult } from "express-validator";

const app: Express = express();
const port = 3001;

// mongodb connection
const mongoDB = "mongodb+srv://test:N9yaGAR0fMIDR03I@cluster0.rmgzz.gcp.mongodb.net/acg?retryWrites=true&w=majority";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: true,
  connectTimeoutMS: 10000,
  socketTimeoutMS: 45000,
};
mongoose.connect(mongoDB, options);

// mongoose Schema
interface CalculatorModelInterface {
  lowerNumber: number;
  higherNumber: number;
  sumOutput: Array<number>;
  sumOutputLength: number;
  createdAt: Date;
  updatedAt: Date;
}

const CalculatorSchema = new mongoose.Schema<CalculatorModelInterface>({
  lowerNumber: {
    type: Number,
    required: true,
  },
  higherNumber: {
    type: Number,
    required: true,
  },
  sumOutput: [
    {
      type: Number,
      required: true,
    },
  ],
  sumOutputLength: {
    type: Number,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
// Schema to be used in mongoose
const CalculatorModel = model("Calculator", CalculatorSchema);

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/cal", async (_req: Request, res: Response) => {
  const cal = await CalculatorModel.find({}).sort({ _id: -1 }).limit(10).lean();
  try {
    res.json(cal);
  } catch (error) {
    res.status(500).send(error);
  }
});

const validatorSchema = [
  body("lowerNumber", "force lowerNumber to be a number greater than 10").notEmpty().isNumeric().isInt({ min: 10 }),
  body("higherNumber", "force higherNumber to be a number less than 1000").notEmpty().isNumeric().isInt({ max: 1000 }),
];

app.post("/cal", validatorSchema, async (req: Request, res: Response) => {
  const { lowerNumber, higherNumber } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  if (lowerNumber > higherNumber) {
    return res.sendStatus(400);
  }
  const response = FindBWPrime(lowerNumber, higherNumber);

  const cal = new CalculatorModel(response);
  await cal.save();

  try {
    res.json(response);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
