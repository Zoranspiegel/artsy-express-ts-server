import { z } from "zod";

export const xAppTokenSchema = z.object({
  id: z.string().optional(),
  token: z.string(),
  expires_at: z.string(),
});
