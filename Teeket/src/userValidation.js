import { z } from "zod";

export const loginValidate = z.object({
  email: z.string().email().nonempty(),
  password: z.string().nonempty().min(8),
});
