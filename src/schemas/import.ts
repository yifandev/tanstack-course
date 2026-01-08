import { z } from 'zod'

const urlField = z
  .string()
  .url('URL tidak valid')
  .max(2048, 'URL terlalu panjang')

export const importSchema = z.object({
  url: urlField,
})

export const bulkImportSchema = z.object({
  url: urlField,
  search: z
    .string()
    .min(1, 'Kata kunci wajib diisi')
    .max(100, 'Kata kunci terlalu panjang')
    .trim(),
})

export const extractSchema = z.object({
  author: z
    .string()
    .min(1, 'Author tidak boleh kosong')
    .max(100, 'Author terlalu panjang')
    .nullable(),

  publishedAt: z.string().nullable(),
})

export type ImportInput = z.infer<typeof importSchema>
export type BulkImportInput = z.infer<typeof bulkImportSchema>
export type ExtractInput = z.infer<typeof extractSchema>
