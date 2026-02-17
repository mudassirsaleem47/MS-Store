'use client'

import { Cart } from '@/components/Cart'
import { OpenCartButton } from '@/components/Cart/OpenCart'
import { CMSLink } from '@/components/Link'
import { SearchIcon, User } from 'lucide-react'
import Link from 'next/link'
import { Suspense } from 'react'

import type { Header } from 'src/payload-types'
import { MobileMenu } from './MobileMenu'

import { BrandLogo } from '@/components/Logo/BrandLogo'; // Updated to use BrandLogo
import { cn } from '@/utilities/cn'
import { usePathname } from 'next/navigation'

type Props = {
  header: Header
}

export function HeaderClient({ header }: Props) {
  const menu = header.navItems || []
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md dark:bg-black/80 dark:border-white/10">
      <div className="container h-20 flex items-center justify-between">
        {/* Left: Mobile Menu & Logo */}
        <div className="flex items-center gap-4">
          <div className="block md:hidden">
            <Suspense fallback={null}>
              <MobileMenu menu={menu} />
            </Suspense>
          </div>
          <Link href="/" className="flex items-center gap-2">
            <BrandLogo />
          </Link>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {menu.length > 0 &&
            menu.map((item) => (
              <CMSLink
                key={item.id}
                {...item.link}
                appearance="link"
                className={cn(
                  'text-base font-medium transition-colors hover:text-[hsl(var(--brand-primary))]',
                  item.link.url && pathname.includes(item.link.url)
                    ? 'text-[hsl(var(--brand-primary))]'
                    : 'text-neutral-600 dark:text-neutral-300'
                )}
              />
            ))
          }
        </nav>

        {/* Right: Actions (Search, Account, Cart) */}
        <div className="flex items-center gap-4">
          <Link href="/shop" className="p-2 text-neutral-600 hover:text-[hsl(var(--brand-primary))] dark:text-neutral-300 transition-colors" aria-label="Search">
            <SearchIcon className="w-5 h-5" />
          </Link>

          <Link href="/account" className="hidden sm:block p-2 text-neutral-600 hover:text-[hsl(var(--brand-primary))] dark:text-neutral-300 transition-colors" aria-label="Account">
            <User className="w-5 h-5" />
          </Link>

          <Suspense fallback={<OpenCartButton />}>
            <Cart />
          </Suspense>
        </div>
      </div>
    </header>
  )
}
