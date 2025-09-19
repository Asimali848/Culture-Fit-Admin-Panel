import { z } from "zod";

export const companySchema = z.object({
  company_name: z.string().min(2, "Company name must be at least 2 characters"),
  email: z.string().email("Invalid company email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  owner_name: z.string().min(2, "Owner name must be at least 2 characters"),
  owner_email: z.string().email("Invalid owner email address"),
  company_type: z.string().min(2, "Company type must be at least 2 characters"),
  website: z.string().url("Invalid website URL").optional(),
  contact_number: z.string().min(10, "Contact number must be at least 10 characters"),
  company_address: z.string().min(5, "Company address must be at least 5 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
});
