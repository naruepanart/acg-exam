import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 3001;

export const findPrime = (n: number) => {
  for (var counter = 0; counter <= n; counter++) {
    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
      if (counter % i === 0 && i !== counter) {
        notPrime = true;
      }
    }
    if (notPrime === false) {
      console.log(counter);
    }
  }
};

app.get("/", (_req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`Server is running at https://localhost:${port}`);
});
