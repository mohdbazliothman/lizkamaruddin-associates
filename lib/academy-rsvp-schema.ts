import { z } from "zod";
export const academyRsvpSchema = z.object({
  attendance:z.enum(["attending","declined"], { required_error:"Please select whether you’ll attend.", invalid_type_error:"Please select whether you’ll attend." }),
  name:z.string().trim().min(1,"Please enter your full name.").max(160),
  email:z.string().trim().max(254).email("Please enter a valid email address.").transform(value => value.toLowerCase()),
  organisation:z.string().trim().max(160),
  designation:z.string().trim().max(160),
  phone:z.string().trim().max(50),
  website:z.string().max(0)
}).strict();
export type AcademyRsvpValues = z.infer<typeof academyRsvpSchema>;
