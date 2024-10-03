import { z } from "zod";

const loginSchema = z.object({
  email: z.string(),
  password: z.string(),
});

function validateLoginSchema(data: { email: string; password: string }) {
  return loginSchema.safeParse(data);
}

const registerSchema = z.object({
  email: z
    .string()
    .email("Email no válido")
    .max(50, "El email no puede tener más de 50 caracteres"),
  name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre no puede tener más de 50 caracteres"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

function validateRegisterSchema(data: {
  email: string;
  name: string;
  password: string;
}) {
  return registerSchema.safeParse(data);
}

export { validateLoginSchema, validateRegisterSchema };
