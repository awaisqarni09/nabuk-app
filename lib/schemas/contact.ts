import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  clinic: z.string().max(150, "Clinic name is too long").optional(),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().max(30, "Phone number is too long").optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
