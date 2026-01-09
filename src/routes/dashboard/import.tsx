import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { bulkScrapeUrlsFn, mapUrlFn, scrapeUrlFn } from '@/data/items'
import { bulkImportSchema, importSchema } from '@/schemas/import'
import { SearchResultWeb } from '@mendable/firecrawl-js'
import { useForm } from '@tanstack/react-form'
import { createFileRoute } from '@tanstack/react-router'

import { Globe, LinkIcon, Loader2 } from 'lucide-react'
import { useState, useTransition } from 'react'
import { toast } from 'sonner'

export const Route = createFileRoute('/dashboard/import')({
  component: RouteComponent,
})

function RouteComponent() {
  const [isPending, startTransition] = useTransition()
  const [bulkIsPending, startBulkTransition] = useTransition()

  //bulk import state
  const [discoveredLinks, setDiscoveredLinks] = useState<
    Array<SearchResultWeb>
  >([])

  const [selectedUrls, setSelectedUrls] = useState<Set<string>>(new Set())

  function handleSelectAll() {
    if (selectedUrls.size === discoveredLinks.length) {
      setSelectedUrls(new Set())
    } else {
      setSelectedUrls(new Set(discoveredLinks.map((link) => link.url)))
    }
  }

  function handleToggleUrl(url: string) {
    const newSelected = new Set(selectedUrls)

    if (newSelected.has(url)) {
      newSelected.delete(url)
    } else {
      newSelected.add(url)
    }

    setSelectedUrls(newSelected)
  }

  function handleBulkImport() {
    startBulkTransition(async () => {
      if (selectedUrls.size === 0) {
        toast.error('Please select at least one URL to import')
        return
      }

      await bulkScrapeUrlsFn({
        data: { urls: Array.from(selectedUrls) },
      })
      toast.success(`Successfully Imported ${selectedUrls.size} URLs`)
    })
  }

  const form = useForm({
    defaultValues: {
      url: '',
    },
    validators: {
      onSubmit: importSchema,
    },
    onSubmit: ({ value }) => {
      startTransition(async () => {
        console.log(value)
        await scrapeUrlFn({ data: value })
        toast.success('URL Scraped Berhasil')
      })
    },
  })

  const bulkForm = useForm({
    defaultValues: {
      url: '',
      search: '',
    },
    validators: {
      onSubmit: bulkImportSchema,
    },
    onSubmit: ({ value }) => {
      startTransition(async () => {
        console.log(value)
        const data = await mapUrlFn({ data: value })

        setDiscoveredLinks(data)
      })
    },
  })

  return (
    <div className="flex flex-1 items-center justify-center py-8">
      <div className="w-full max-w-2xl space-y-6 px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold ">Import Content</h1>
          <p className="text-muted-foreground pt-1">
            Simpan halaman web ke perpustakaan Anda untuk dibaca nanti
          </p>
        </div>

        <Tabs defaultValue="single">
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="single" className="gap-2">
              <LinkIcon className="size-4" />
              Tautan Tunggal
            </TabsTrigger>
            <TabsTrigger value="bulk" className="gap-2">
              <Globe className="size-4" />
              Impor Massal
            </TabsTrigger>
          </TabsList>

          {/* SingleTabs */}
          <TabsContent value="single">
            <Card>
              <CardHeader>
                <CardTitle>Impor URL Tunggal</CardTitle>
                <CardDescription>
                  Ambil dan simpan konten dari aplikasi web mana pun! 👀
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    form.handleSubmit()
                  }}
                >
                  <FieldGroup>
                    <form.Field
                      name="url"
                      children={(field) => {
                        const isInvalid =
                          field.state.meta.isTouched &&
                          !field.state.meta.isValid
                        return (
                          <Field data-invalid={isInvalid}>
                            <FieldLabel htmlFor={field.name}>URL</FieldLabel>
                            <Input
                              id={field.name}
                              name={field.name}
                              value={field.state.value}
                              onBlur={field.handleBlur}
                              onChange={(e) =>
                                field.handleChange(e.target.value)
                              }
                              aria-invalid={isInvalid}
                              placeholder="https://tanstack.com/start/latest"
                              autoComplete="off"
                            />
                            {isInvalid && (
                              <FieldError errors={field.state.meta.errors} />
                            )}
                          </Field>
                        )
                      }}
                    />

                    <Button type="submit" disabled={isPending}>
                      {isPending ? (
                        <>
                          <Loader2 className="size-4 animate-spin" />
                          "Processing..."
                        </>
                      ) : (
                        <>
                          <p>Import URL</p>
                        </>
                      )}
                    </Button>
                  </FieldGroup>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* BulkTabs */}
          <TabsContent value="bulk">
            <Card>
              <CardHeader>
                <CardTitle>Impor Massal</CardTitle>
                <CardDescription>
                  Temukan dan impor beberapa URL dari sebuah situs web sekaligus
                  🚀
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    bulkForm.handleSubmit()
                  }}
                >
                  <FieldGroup>
                    <bulkForm.Field
                      name="url"
                      children={(field) => {
                        const isInvalid =
                          field.state.meta.isTouched &&
                          !field.state.meta.isValid
                        return (
                          <Field data-invalid={isInvalid}>
                            <FieldLabel htmlFor={field.name}>
                              Bulk Import
                            </FieldLabel>
                            <Input
                              id={field.name}
                              name={field.name}
                              value={field.state.value}
                              onBlur={field.handleBlur}
                              onChange={(e) =>
                                field.handleChange(e.target.value)
                              }
                              aria-invalid={isInvalid}
                              placeholder="https://tanstack.com/start/latest"
                              autoComplete="off"
                            />
                            {isInvalid && (
                              <FieldError errors={field.state.meta.errors} />
                            )}
                          </Field>
                        )
                      }}
                    />

                    <bulkForm.Field
                      name="search"
                      children={(field) => {
                        const isInvalid =
                          field.state.meta.isTouched &&
                          !field.state.meta.isValid
                        return (
                          <Field data-invalid={isInvalid}>
                            <FieldLabel htmlFor={field.name}>
                              Filter (optional)
                            </FieldLabel>
                            <Input
                              id={field.name}
                              name={field.name}
                              value={field.state.value}
                              onBlur={field.handleBlur}
                              onChange={(e) =>
                                field.handleChange(e.target.value)
                              }
                              aria-invalid={isInvalid}
                              placeholder="e.g Blog,docs,tutorial"
                              autoComplete="off"
                            />
                            {isInvalid && (
                              <FieldError errors={field.state.meta.errors} />
                            )}
                          </Field>
                        )
                      }}
                    />

                    <Button type="submit" disabled={isPending}>
                      {isPending ? (
                        <>
                          <Loader2 className="size-4 animate-spin" />
                          "Processing..."
                        </>
                      ) : (
                        <>
                          <p>Import URLs</p>
                        </>
                      )}
                    </Button>
                  </FieldGroup>
                </form>

                {/* Discover Urls List */}
                {discoveredLinks.length > 0 && (
                  <div className="space-y-4">
                    <div className="flex  items-center justify-between">
                      <p className="text-sm font-medium">
                        Found {discoveredLinks.length} URLs
                      </p>

                      <Button
                        onClick={handleSelectAll}
                        variant="outline"
                        size="sm"
                      >
                        {selectedUrls.size === discoveredLinks.length
                          ? 'Deselect All'
                          : 'Select All'}
                      </Button>
                    </div>

                    <div className="max-h-80 space-y-2 overflow-y-auto rounded-md border p-4">
                      {discoveredLinks.map((link) => (
                        <Label
                          key={link.url}
                          className="hover:bg-muted/50 cursor-pointer flex items-start rounded-md p-2"
                        >
                          <Checkbox
                            checked={selectedUrls.has(link.url)}
                            onCheckedChange={() => handleToggleUrl(link.url)}
                            className="mt-0.5"
                          />
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium">
                              {link.title ?? 'Title has not been  Found'}
                            </p>
                            <p className="text-muted-foreground truncate text-xs">
                              {link.description ??
                                'Description has not been found'}
                            </p>
                            <p className="text-muted-foreground truncate text-xs">
                              {link.url}
                            </p>
                          </div>
                        </Label>
                      ))}
                    </div>

                    <Button
                      onClick={handleBulkImport}
                      disabled={bulkIsPending}
                      className="w-full"
                      type="button"
                    >
                      {bulkIsPending ? (
                        <>
                          <Loader2 className="size-4 animate-spin" />
                          Importing...
                        </>
                      ) : (
                        `Import ${selectedUrls.size} URLs`
                      )}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
