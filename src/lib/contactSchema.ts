import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Please enter a phone number'),
  projectType: z.string().min(1, 'Please choose a project type'),
  budget: z.string().min(1, 'Please choose a budget range'),
  message: z.string().min(20, 'Please add a few more details'),
  consent: z.boolean().refine((value) => value, 'Please confirm you are happy for us to contact you'),
})

export type ContactFormValues = z.infer<typeof contactSchema>