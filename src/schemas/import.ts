import { z } from 'zod'

const urlField = z.url('URL tidak valid').max(2048, 'URL terlalu panjang')

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

export type ImportInput = z.infer<typeof importSchema>
export type BulkImportInput = z.infer<typeof bulkImportSchema>
