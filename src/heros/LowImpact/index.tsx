import React from 'react'

import type { Page } from '@/payload-types'

import { RichText } from '@/components/RichText'

type LowImpactHeroType =
  | {
      children?: React.ReactNode
      richText?: never
    }
  | (Omit<Page['hero'], 'richText'> & {
      children?: never
      richText?: Page['hero']['richText']
    })

export const LowImpactHero: React.FC<LowImpactHeroType> = ({ children, richText }) => {
  return (
    <div className="relative -mt-[10.4rem] min-h-[80vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-20 animate-pulse" />
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-overlay" />

      {/* Content Container */}
      <div className="container relative z-10 flex flex-col items-center text-center">
        <div className="max-w-4xl animate-fadeIn backdrop-blur-sm bg-background/30 p-8 rounded-3xl shadow-2xl border border-white/10 dark:border-white/5">
          {children || (richText && (
            <div className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:tracking-tighter prose-h1:text-6xl prose-a:text-primary hover:prose-a:text-primary/80 transition-colors">
              <RichText data={richText} enableGutter={false} />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-blob mix-blend-multiply filter" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-blob animation-delay-2000 mix-blend-multiply filter" />
    </div>
  )
}
