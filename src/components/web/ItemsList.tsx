import { Badge } from '@/components/ui/badge'
import { Button, buttonVariants } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { getItemsFn } from '@/data/items'
import { copyToClipboard } from '@/lib/clipboard'
import { Link } from '@tanstack/react-router'
import { Copy, Inbox } from 'lucide-react'

import { use } from 'react'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'
import { ItemsSearch } from '@/schemas/search'

export default function ItemList({
  q,
  status,
  data,
}: {
  q: ItemsSearch['q']
  status: ItemsSearch['status']
  data: ReturnType<typeof getItemsFn>
}) {
  const items = use(data)
  const filtereditems = items.filter((item) => {
    //filter search quer(title atau tags)
    const matchQuery =
      q === '' ||
      item.title?.toLowerCase().includes(q.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(q.toLowerCase()))

    //Filter status
    const matchesStatus = status === 'all' || item.status === status

    return matchQuery && matchesStatus
  })

  if (filtereditems.length === 0) {
    return (
      <Empty className="border rounded-lg h-full">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Inbox className="size-12" />
          </EmptyMedia>
          <EmptyTitle>
            {items.length === 0 ? 'No Items Saved Yet' : 'No Items Found'}
          </EmptyTitle>
          <EmptyDescription>
            {items.length === 0
              ? 'Import a Url to get started with saving your content'
              : 'No items match your current search filters'}
          </EmptyDescription>
        </EmptyHeader>
        {items.length === 0 && (
          <EmptyContent>
            <Link to="/dashboard/import" className={buttonVariants()}>
              Import Url
            </Link>
          </EmptyContent>
        )}
      </Empty>
    )
  }
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {filtereditems.map((item) => (
        <Card
          key={item.id}
          className="group transition-all overflow-hidden hover:shadow-lg pt-0"
        >
          <Link to="/dashboard" className="block">
            {item.ogImage && (
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <img
                  src={item.ogImage}
                  alt={item.title ?? 'Article Thumbnail'}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
            )}

            <CardHeader className="space-y-3 pt-4">
              <div className="flex items-center justify-between gap-2">
                <Badge
                  variant={
                    item.status === 'COMPLETED' ? 'default' : 'secondary'
                  }
                >
                  {item.status.toLowerCase()}
                </Badge>
                <Button
                  onClick={async (e) => {
                    e.preventDefault()
                    await copyToClipboard(item.url)
                  }}
                  variant="outline"
                  size="icon"
                  className="size-8"
                >
                  <Copy className="size-4" />
                </Button>
              </div>

              <CardTitle className="line-clamp-1 text-xl leading-snug group-hover:text-primary transition-colors">
                {item.title}
              </CardTitle>
              {item.author && (
                <p className="text-xs text-muted-foreground">{item.author}</p>
              )}
            </CardHeader>
          </Link>
        </Card>
      ))}
    </div>
  )
}
