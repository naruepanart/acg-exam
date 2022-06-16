import cors from "cors";
import express, { Express, Request, Response } from "express";
import Joi from "joi";
import mongoose from "mongoose";
import { FindBWPrime } from "./func/isPrime";

// Create a new express application instance
const app: Express = express();
const port = 3001;
// express middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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
}
// mongoose Model
const CalculatorSchema = new mongoose.Schema<CalculatorModelInterface>({
  lowerNumber: {
    type: Number,
    required: true,
    min: 10,
  },
  higherNumber: {
    type: Number,
    required: true,
    max: 1000,
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
});
// Schema to be used in mongoose
const CalculatorModel = mongoose.model("Calculator", CalculatorSchema);

// express route handlers
app.get("/", async (_req: Request, res: Response) => {
  res.json({ status: "OK" });
});

app.get("/cal", async (_req: Request, res: Response) => {
  const cal = await CalculatorModel.find({}).sort({ _id: -1 }).limit(10).lean();
  try {
    res.json(cal);
  } catch (error) {
    res.status(500).send(error);
  }
});

// joi validation
const calSchema = Joi.object().keys({
  lowerNumber: Joi.number().integer().min(10).max(1000).required(),
  higherNumber: Joi.number().integer().min(10).max(1000).required(),
});
// express route handlers
app.post("/cal", async (req: Request, res: Response) => {
  try {
    // validate request body
    const validation = calSchema.validate(req.body);
    const { value, error } = validation;
    if (error) {
      const message = error.details.map((x) => x.message);
      return res.status(422).json({
        error: message,
      });
    }
    const { lowerNumber, higherNumber } = value;
    // find if the request body is already in the database
    if (lowerNumber > higherNumber) {
      return res.sendStatus(400);
    }
    // find the prime numbers
    const response = FindBWPrime(lowerNumber, higherNumber);
    const cal = new CalculatorModel(response);
    await cal.save();
    return res.sendStatus(201);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.listen(port, function () {
  console.log(`http://localhost:${port}`);
});
