import type { Product } from '@/payload-types'

import { Media } from '@/components/Media'
import { Price } from '@/components/Price'
import Link from 'next/link'
import React from 'react'

type Props = {
  product: Partial<Product>
}

export const ProductGridItem: React.FC<Props> = ({ product }) => {
  const { gallery, priceInUSD, title } = product

  let price = priceInUSD

  const variants = product.variants?.docs

  if (variants && variants.length > 0) {
    const variant = variants[0]
    if (
      variant &&
      typeof variant === 'object' &&
      variant?.priceInUSD &&
      typeof variant.priceInUSD === 'number'
    ) {
      price = variant.priceInUSD
    }
  }

  const image =
    gallery?.[0]?.image && typeof gallery[0]?.image !== 'string' ? gallery[0]?.image : false

  return (
    <Link className="group relative block h-full w-full overflow-hidden rounded-xl bg-card border border-border shadow-sm transition-all hover:shadow-lg hover:-translate-y-1" href={`/products/${product.slug}`}>
      <div className="relative aspect-square overflow-hidden bg-muted">
        {image ? (
          <Media
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            resource={image}
            fill
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-100 dark:bg-gray-800 text-muted-foreground">
            No Image
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold tracking-tight text-foreground line-clamp-1 group-hover:text-primary transition-colors">
          {title}
        </h3>

        <div className="mt-2 flex items-center justify-between">
          {typeof price === 'number' && (
            <div className="text-sm font-medium text-muted-foreground">
              <Price amount={price} />
            </div>
          )}
          <span className="text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
            View Details →
          </span>
        </div>
      </div>
    </Link>
  )
}
