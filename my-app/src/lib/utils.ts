import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const authFormSchema = (type: string) => z.object({
  //sign-in
  email: z.string().email(),
  password: z.string().min(8),
  //sign-up
  firstName: type ==="login"? z.string().optional() : z.string().min(3),
  lastName: type ==="login"? z.string().optional() : z.string().min(3),
});