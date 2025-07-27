import type {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from "express";

export function errorHandlerMiddleware(
  err: ErrorRequestHandler,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (err instanceof Error) {
    console.error(err.stack);
    res.status(500).json({ msg: err.message ?? "Internal Server Error" });
  } else {
    res.status(500).json({ msg: "Unknown Error" });
  }
}
