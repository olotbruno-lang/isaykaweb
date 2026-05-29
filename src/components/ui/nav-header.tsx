import { useRef, useState } from "react"
import { motion } from "framer-motion"

type Position = { left: number; width: number; opacity: number }

export const NAV_LINKS = [
  { href: '#gallery',     label: 'Galerie' },
  { href: '#about',       label: "L'Artiste" },
  { href: '#commande',    label: 'Commande' },
  { href: '#expositions', label: 'Expositions' },
  { href: '#news',        label: 'Actualités' },
  { href: '#contact',     label: 'Contact' },
]

interface TabProps {
  children: React.ReactNode
  href: string
  setPosition: React.Dispatch<React.SetStateAction<Position>>
}

function Tab({ children, href, setPosition }: TabProps) {
  const ref = useRef<HTMLLIElement>(null)
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return
        const { width } = ref.current.getBoundingClientRect()
        setPosition({ width, opacity: 1, left: ref.current.offsetLeft })
      }}
      className="relative z-10 list-none"
    >
      <a
        href={href}
        className="block px-4 py-[7px] text-[0.72rem] font-medium tracking-[0.14em] uppercase text-[#7a7368] hover:text-[#f0ebe3] transition-colors duration-200 whitespace-nowrap"
      >
        {children}
      </a>
    </li>
  )
}

function SliderCursor({ position }: { position: Position }) {
  return (
    <motion.li
      animate={position}
      transition={{ type: 'spring', stiffness: 480, damping: 38 }}
      aria-hidden
      className="absolute z-0 top-[3px] h-[calc(100%-6px)] rounded-full pointer-events-none list-none bg-[rgba(200,81,42,0.12)] border border-[rgba(200,81,42,0.22)]"
    />
  )
}

export default function NavHeader() {
  const [position, setPosition] = useState<Position>({ left: 0, width: 0, opacity: 0 })

  return (
    <ul
      className="relative flex rounded-full p-[3px] list-none"
      onMouseLeave={() => setPosition(pv => ({ ...pv, opacity: 0 }))}
    >
      {NAV_LINKS.map(l => (
        <Tab key={l.href} href={l.href} setPosition={setPosition}>
          {l.label}
        </Tab>
      ))}
      <SliderCursor position={position} />
    </ul>
  )
}
