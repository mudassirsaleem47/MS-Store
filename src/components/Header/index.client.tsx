'use client'

import { Cart } from '@/components/Cart'
import { OpenCartButton } from '@/components/Cart/OpenCart'
import { CMSLink } from '@/components/Link'
import { BrandLogo } from '@/components/Logo/BrandLogo'
import { cn } from '@/utilities/cn'
import { Mail, Phone, SearchIcon, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'
import type { Header } from 'src/payload-types'
import { MobileMenu } from './MobileMenu'

type Props = {
  header: Header
}

export function HeaderClient({ header }: Props) {
  const menu = header.navItems || []
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Utility Bar - Clean & Dark */}
      <div className="bg-neutral-950 text-neutral-300 text-[11px] uppercase tracking-widest py-2 hidden md:block">
        <div className="container flex justify-between items-center">
          <span className="font-medium opacity-80">Free Shipping on Orders Over $100</span>
          <div className="flex gap-6">
            <a href="tel:+923001234567" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Phone size={11} /> +92 (300) 123-4567
            </a>
            <a href="mailto:info@msmediasol.com" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Mail size={11} /> info@msmediasol.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-neutral-100 dark:bg-black/90 dark:border-white/10 transition-all duration-300",
          scrolled ? "shadow-sm py-2" : "py-4"
        )}
      >
        <div className="container flex items-center justify-between h-full">

          {/* Left: Mobile Menu & Logo */}
          <div className="flex items-center gap-6">
            <div className="block md:hidden">
              <Suspense fallback={null}>
                <MobileMenu menu={menu} />
              </Suspense>
            </div>

            <Link href="/" className="hover:opacity-90 transition-opacity block shrink-0">
              <BrandLogo />
            </Link>
          </div>

          {/* Center: Desktop Navigation - Clean & Minimal */}
          <nav className="hidden md:flex items-center gap-10">
            {menu.length > 0 && 
              menu.map((item) => {
                const isActive = item.link.url && pathname.includes(item.link.url)
                return (
                  <CMSLink
                    key={item.id}
                    {...item.link}
                    appearance="inline"
                    className={cn(
                      'text-sm font-medium tracking-wide transition-colors relative group py-2 block',
                      isActive
                        ? 'text-black dark:text-white'
                        : 'text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white'
                    )}
                  >
                    {/* Animated Underline */}
                    <span
                      className={cn(
                        "absolute bottom-0 left-0 w-full h-[0.5px] bg-black dark:bg-white transform scale-x-0 transition-transform duration-300 origin-right group-hover:scale-x-100 group-hover:origin-left",
                        isActive && "scale-x-100 origin-left"
                      )}
                    />
                  </CMSLink>
                )
              })
            }
          </nav>

          {/* Right: Actions - Minimal Icons */}
          <div className="flex items-center gap-2">
            <Link
              href="/shop"
              className="w-10 h-10 flex items-center justify-center rounded-full text-neutral-800 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800 transition-all"
              aria-label="Search"
            >
              <SearchIcon strokeWidth={1.5} className="w-5 h-5" />
            </Link>

            <Link
              href="/account"
              className="hidden sm:flex w-10 h-10 items-center justify-center rounded-full text-neutral-800 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800 transition-all"
              aria-label="Account"
            >
              <User strokeWidth={1.5} className="w-5 h-5" />
            </Link>

            <Suspense fallback={<OpenCartButton />}>
              <Cart />
            </Suspense>
          </div>
        </div>
      </header>
    </>
  )
}
