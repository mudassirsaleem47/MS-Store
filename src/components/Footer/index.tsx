import type { Footer } from '@/payload-types'

import { FooterMenu } from '@/components/Footer/menu'
import { BrandLogo } from '@/components/Logo/BrandLogo'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import { Suspense } from 'react'

const { COMPANY_NAME, SITE_NAME } = process.env

export async function Footer() {
  const footer: Footer = await getCachedGlobal('footer', 2)()
  const menu = footer.navItems || []
  const currentYear = new Date().getFullYear()
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '')
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700'

  const copyrightName = COMPANY_NAME || SITE_NAME || 'ms.Media Sol'

  return (
    <footer className="bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 text-sm">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <Link className="flex items-center gap-2" href="/">
              <BrandLogo />
            </Link>
            <p className="text-neutral-500 dark:text-neutral-400 max-w-xs">
              Premium customized printing solutions for your business and personal needs. Quality you can trust.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">Quick Links</h3>
            <Suspense
              fallback={
                <div className="flex flex-col gap-2">
                  <div className={skeleton} />
                  <div className={skeleton} />
                  <div className={skeleton} />
                </div>
              }
            >
              <FooterMenu menu={menu} />
            </Suspense>
          </div>

          {/* Settings Column */}
          <div className="flex flex-col gap-4 md:items-end">
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">Settings</h3>
            <ThemeSelector />
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black py-6">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-neutral-500 dark:text-neutral-400 text-xs">
          <p>
            &copy; {copyrightDate} {copyrightName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-[hsl(var(--brand-primary))] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[hsl(var(--brand-primary))] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
