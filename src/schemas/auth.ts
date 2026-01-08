import { z } from 'zod'

/* ================================
   Reusable validators
================================ */
const passwordRules = z
  .string()
  .min(8, 'Password minimal 8 karakter')
  .max(64, 'Password maksimal 64 karakter')
  .regex(/[a-z]/, 'Password harus mengandung huruf kecil')
  .regex(/[A-Z]/, 'Password harus mengandung huruf besar')
  .regex(/[0-9]/, 'Password harus mengandung angka')
  .regex(/[^a-zA-Z0-9]/, 'Password harus mengandung simbol')

const emailRules = z
  .email('Format email tidak valid')
  .max(255, 'Email terlalu panjang')
  .transform((email) => email.toLowerCase())

/* ================================
   Login Schema
================================ */
export const loginSchema = z.object({
  email: emailRules,
  password: z.string().min(1, 'Password wajib diisi'),
})

/* ================================
   Sign Up Schema
================================ */
export const signUpSchema = z
  .object({
    fullName: z
      .string()
      .min(3, 'Nama minimal 3 karakter')
      .max(50, 'Nama maksimal 50 karakter')
      .regex(/^[a-zA-Z\s]+$/, 'Nama hanya boleh mengandung huruf dan spasi'),

    email: emailRules,

    password: passwordRules,

    confirmPassword: z.string().min(1, 'Konfirmasi password wajib diisi'),
  })
  .superRefine((data, ctx) => {
    // 1️⃣ password === confirmPassword
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: 'custom',
        path: ['confirmPassword'],
        message: 'Password tidak sama',
      })
    }

    // 2️⃣ password tidak boleh mengandung nama
    const normalizedName = data.fullName.replace(/\s/g, '').toLowerCase()

    if (
      normalizedName &&
      data.password.toLowerCase().includes(normalizedName)
    ) {
      ctx.addIssue({
        code: 'custom',
        path: ['password'],
        message: 'Password tidak boleh mengandung nama Anda',
      })
    }

    // 3️⃣ password tidak boleh mirip email
    const emailPrefix = data.email.split('@')[0]?.toLowerCase()

    if (emailPrefix && data.password.toLowerCase().includes(emailPrefix)) {
      ctx.addIssue({
        code: 'custom',
        path: ['password'],
        message: 'Password tidak boleh mirip dengan email',
      })
    }
  })

/* ================================
   Types
================================ */
export type SignUpInput = z.infer<typeof signUpSchema>
export type LoginInput = z.infer<typeof loginSchema>
