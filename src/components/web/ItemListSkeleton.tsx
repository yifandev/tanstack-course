// ItemListSkeleton.tsx
import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'

export function ItemListSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {Array.from({ length: 6 }).map((_, index) => (
        <Card
          key={index}
          className="group transition-all overflow-hidden hover:shadow-lg pt-0"
        >
          {/* Skeleton untuk gambar */}
          <div className="aspect-video w-full overflow-hidden bg-muted">
            <Skeleton className="h-full w-full rounded-none" />
          </div>

          <CardHeader className="space-y-3 pt-4">
            <div className="flex items-center justify-between gap-2">
              {/* Skeleton untuk badge status */}
              <Skeleton className="h-6 w-20" />

              {/* Skeleton untuk tombol copy */}
              <Skeleton className="size-8 rounded-full" />
            </div>

            {/* Skeleton untuk judul */}
            <CardTitle className="space-y-2">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-3/4" />
            </CardTitle>

            {/* Skeleton untuk author */}
            <Skeleton className="h-4 w-32" />
          </CardHeader>
        </Card>
      ))}
    </div>
  )
}
