import type { Footer } from '@/payload-types'

import { CMSLink } from '@/components/Link'

interface Props {
  menu: Footer['navItems']
}

export function FooterMenu({ menu }: Props) {
  if (!menu?.length) return null

  return (
    <nav>
      <ul className="flex flex-col gap-2">
        {menu.map((item) => {
          return (
            <li key={item.id}>
              <CMSLink
                appearance="inline"
                {...item.link}
                className="text-neutral-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
              />
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
