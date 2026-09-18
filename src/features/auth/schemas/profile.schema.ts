import { z } from 'zod';

export const personalSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .min(3, 'First name must be at least 3 characters'),

  lastName: z
    .string()
    .min(1, 'Last name is required')
    .min(3, 'Last name must be at least 3 characters'),

  email: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email address'),

  phone: z
    .string()
    .min(1, 'Phone number is required')
    .min(8, 'Phone number must be at least 8 characters'),

  language: z.string().min(1, 'Language is required'),
});

export type PersonalInfoValues = z.infer<typeof personalSchema>;