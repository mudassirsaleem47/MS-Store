'use client'

import { Media } from '@/components/Media'
import { RichText } from '@/components/RichText'
import type { Page } from '@/payload-types'
import AutoScroll from 'embla-carousel-auto-scroll'
import useEmblaCarousel from 'embla-carousel-react'
import React from 'react'

export const CarouselHero: React.FC<Page['hero']> = ({ slides }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ playOnInit: true, speed: 1, stopOnInteraction: false }),
  ])

  if (!slides || !Array.isArray(slides) || slides.length === 0) {
    return null
  }

  return (
    <div className="relative -mt-[10.4rem] w-full overflow-hidden" data-theme="dark">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div className="relative flex-[0_0_100%] min-w-0" key={index}>
              <div className="relative h-[85vh] w-full flex items-center justify-center">
                
                {/* Background Image */}
                {slide.media && typeof slide.media === 'object' && (
                  <div className="absolute inset-0 z-0">
                    <Media 
                        resource={slide.media} 
                        fill 
                        imgClassName="object-cover" 
                        priority={index === 0} 
                    />
                    <div className="absolute inset-0 bg-black/30" /> 
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                  </div>
                )}

                {/* Content */}
                {slide.richText && (
                  <div className="relative z-10 container text-center text-white hero-text-shadow">
                    <RichText data={slide.richText} enableGutter={false} className="max-w-4xl mx-auto" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
