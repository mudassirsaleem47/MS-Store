import type { Footer } from '@/payload-types'

import { FooterMenu } from '@/components/Footer/menu'
import { BrandLogo } from '@/components/Logo/BrandLogo'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import Link from 'next/link'
import { Suspense } from 'react'
import { Newsletter } from './Newsletter'

const { COMPANY_NAME, SITE_NAME } = process.env

export async function Footer() {
  const footer: Footer = await getCachedGlobal('footer', 2)()
  const menu = footer.navItems || []
  const currentYear = new Date().getFullYear()
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '')
  const copyrightName = COMPANY_NAME || SITE_NAME || 'ms.Media Sol'

  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-800">
      {/* Main Footer Content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Column 1: Brand & About */}
          <div className="flex flex-col gap-6">
            <Link className="flex items-center gap-2" href="/">
              <BrandLogo />
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Elevating brands with premium customized printing solutions.
              From business cards to large format displays, we bring your vision to life with precision and quality.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:bg-[hsl(var(--brand-primary))] hover:text-white transition-all transform hover:scale-110">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:bg-[hsl(var(--brand-primary))] hover:text-white transition-all transform hover:scale-110">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:bg-[hsl(var(--brand-primary))] hover:text-white transition-all transform hover:scale-110">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:bg-[hsl(var(--brand-primary))] hover:text-white transition-all transform hover:scale-110">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (Dynamic) */}
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-lg text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[hsl(var(--brand-primary))] rounded-full"></span>
            </h3>
            <Suspense fallback={<div className="h-20 animate-pulse bg-neutral-900 rounded" />}>
              <FooterMenu menu={menu} />
            </Suspense>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-lg text-white relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[hsl(var(--brand-primary))] rounded-full"></span>
            </h3>
            <ul className="flex flex-col gap-4 text-neutral-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[hsl(var(--brand-primary))] shrink-0 mt-0.5" />
                <span>123 Creative Studio, Design Avenue, New York, NY 10012</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[hsl(var(--brand-primary))] shrink-0" />
                <a href="tel:+923001234567" className="hover:text-white transition-colors">+92 (300) 123-4567</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[hsl(var(--brand-primary))] shrink-0" />
                <a href="mailto:info@msmediasol.com" className="hover:text-white transition-colors">info@msmediasol.com</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-lg text-white relative inline-block">
              Newsletter
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[hsl(var(--brand-primary))] rounded-full"></span>
            </h3>
            <p className="text-neutral-400 text-sm">
              Subscribe to our newsletter for the latest updates and exclusive offers.
            </p>
            <Newsletter />
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-900 bg-black py-6">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            &copy; {copyrightDate} <span className="text-white font-medium">{copyrightName}</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[hsl(var(--brand-primary))] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[hsl(var(--brand-primary))] transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-[hsl(var(--brand-primary))] transition-colors">Cookie Policy</Link>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-neutral-600">Theme:</span>
            <ThemeSelector />
          </div>
        </div>
      </div>
    </footer>
  )
}
