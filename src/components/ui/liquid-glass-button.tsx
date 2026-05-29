import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/* ── Liquid Button ─────────────────────────────────────────────── */
const liquidbuttonVariants = cva(
  "inline-flex items-center justify-center cursor-pointer gap-2 whitespace-nowrap rounded-full font-body font-light transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 outline-none",
  {
    variants: {
      variant: {
        default: "bg-transparent hover:scale-[1.03] duration-300 text-[#7a7368]",
        accent:  "bg-transparent hover:scale-[1.03] duration-300 text-[#c8512a]",
      },
      size: {
        xs:  "h-6 px-3 text-[0.72rem]",
        sm:  "h-7 px-4 text-[0.78rem]",
        md:  "h-8 px-5 text-[0.85rem]",
        lg:  "h-9 px-6 text-[0.88rem]",
        xl:  "h-10 px-8 text-[0.9rem]",
        xxl: "h-11 px-9 text-sm",
      },
    },
    defaultVariants: { variant: "default", size: "md" },
  }
)

function GlassFilter() {
  return (
    <svg className="hidden" aria-hidden>
      <defs>
        <filter id="container-glass" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.05 0.05" numOctaves="1" seed="1" result="turbulence" />
          <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />
          <feDisplacementMap in="SourceGraphic" in2="blurredNoise" scale="70" xChannelSelector="R" yChannelSelector="B" result="displaced" />
          <feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur" />
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  )
}

export function LiquidButton({
  className, variant, size, asChild = false, children, ...props
}: React.ComponentProps<"button"> & VariantProps<typeof liquidbuttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn("relative", liquidbuttonVariants({ variant, size, className }))}
      {...props}
    >
      <div className="liquid-shadow absolute inset-0 z-0 rounded-full transition-all
        shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(255,255,255,0.15),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.3),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.06),inset_0_0_2px_2px_rgba(255,255,255,0.04),0_0_12px_rgba(200,81,42,0.15)]
        hover:shadow-[0_0_8px_rgba(200,81,42,0.2),0_4px_12px_rgba(0,0,0,0.15),inset_3px_3px_0.5px_-3px_rgba(255,255,255,0.2),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.8),inset_0_0_8px_8px_rgba(255,255,255,0.08),0_0_20px_rgba(200,81,42,0.2)]" />
      <div
        className="absolute inset-0 -z-10 overflow-hidden rounded-full"
        style={{ backdropFilter: 'url("#container-glass")' }}
      />
      <span className="relative z-10 pointer-events-none">{children}</span>
      <GlassFilter />
    </Comp>
  )
}

/* ── Metal Button ──────────────────────────────────────────────── */
type ColorVariant = "default" | "accent" | "gold" | "dark"

const colorVariants: Record<ColorVariant, { outer: string; inner: string; button: string; textColor: string }> = {
  default: {
    outer: "bg-gradient-to-b from-[#1a1510] to-[#6b5a42]",
    inner: "bg-gradient-to-b from-[#3a2f20] via-[#201a12] to-[#2e2518]",
    button: "bg-gradient-to-b from-[#3d3020] to-[#251d12]",
    textColor: "text-[#c8a878]",
  },
  accent: {
    outer: "bg-gradient-to-b from-[#6b1a0a] to-[#e06840]",
    inner: "bg-gradient-to-b from-[#ff8060] via-[#8b2510] to-[#ffa080]",
    button: "bg-gradient-to-b from-[#c8512a] to-[#8b2510]",
    textColor: "text-white",
  },
  gold: {
    outer: "bg-gradient-to-b from-[#917100] to-[#EAD98F]",
    inner: "bg-gradient-to-b from-[#FFFDDD] via-[#856807] to-[#FFF1B3]",
    button: "bg-gradient-to-b from-[#FFEBA1] to-[#9B873F]",
    textColor: "text-[#3a2800]",
  },
  dark: {
    outer: "bg-gradient-to-b from-[#000] to-[#444]",
    inner: "bg-gradient-to-b from-[#aaa] via-[#333] to-[#888]",
    button: "bg-gradient-to-b from-[#666] to-[#444]",
    textColor: "text-white",
  },
}

interface MetalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ColorVariant
}

export const MetalButton = React.forwardRef<HTMLButtonElement, MetalButtonProps>(
  ({ children, className, variant = "default", ...props }, ref) => {
    const [pressed, setPressed] = React.useState(false)
    const [hovered, setHovered] = React.useState(false)
    const c = colorVariants[variant]
    return (
      <div
        className={cn("relative inline-flex rounded-full p-[1.5px]", c.outer)}
        style={{
          transform: pressed ? "translateY(2px) scale(0.98)" : "translateY(0) scale(1)",
          boxShadow: pressed ? "0 1px 2px rgba(0,0,0,0.3)" : hovered ? "0 6px 20px rgba(0,0,0,0.3)" : "0 3px 10px rgba(0,0,0,0.2)",
          transition: "all 220ms cubic-bezier(0.1,0.4,0.2,1)",
        }}
      >
        <div className={cn("absolute inset-[1.5px] rounded-full", c.inner)} />
        <button
          ref={ref}
          className={cn(
            "relative z-10 m-[1.5px] rounded-full inline-flex items-center justify-center px-6 py-2 h-10 text-xs font-semibold tracking-widest uppercase cursor-pointer outline-none overflow-hidden",
            c.button, c.textColor, className
          )}
          style={{ transform: pressed ? "scale(0.97)" : "scale(1)", transition: "all 220ms cubic-bezier(0.1,0.4,0.2,1)", filter: hovered && !pressed ? "brightness(1.1)" : "none" }}
          {...props}
          onMouseDown={() => setPressed(true)}
          onMouseUp={() => setPressed(false)}
          onMouseLeave={() => { setPressed(false); setHovered(false) }}
          onMouseEnter={() => setHovered(true)}
          onTouchStart={() => setPressed(true)}
          onTouchEnd={() => setPressed(false)}
        >
          {hovered && !pressed && <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-transparent to-white/10 rounded-full" />}
          {children}
        </button>
      </div>
    )
  }
)
MetalButton.displayName = "MetalButton"
