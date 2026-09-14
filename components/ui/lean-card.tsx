import * as React from "react"

import { cn } from "@/lib/utils"

function LeanCard({ className, onClick, ...props }: React.ComponentProps<"div">) {
  const [isPressed, setIsPressed] = React.useState(false)
  const resetTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  React.useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current)
    }
  }, [])

  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    setIsPressed(true)
    if (resetTimer.current) clearTimeout(resetTimer.current)
    resetTimer.current = setTimeout(() => setIsPressed(false), 520)
    onClick?.(event)
  }

  return (
    <div
      data-slot="lean-card"
      onClick={handleClick}
      className={cn("group/lean relative isolate w-fit cursor-pointer p-3", isPressed && "lean-card-tap", className)}
    >
      <div
        data-slot="lean-card-back"
        className={cn(
          "absolute inset-3 -z-10 rounded-3xl",
          "ring-1 ring-foreground/10",
          "[background:repeating-linear-gradient(45deg,color-mix(in_oklch,var(--color-muted)_30%,transparent)_0px,color-mix(in_oklch,var(--color-muted)_30%,transparent)_10px,var(--color-border)_10px,var(--color-border)_11px)]",
          "transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
          "rotate-0 translate-y-0",
          "md:group-hover/lean:-rotate-4 md:group-hover/lean:translate-y-2"
        )}
      />
      <div {...props} />
    </div>
  )
}

function LeanCardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="lean-card-content"
      className={cn(
        "relative rounded-3xl p-7",
        "bg-card text-card-foreground ring-1 ring-foreground/10",
        "transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
        "rotate-0",
        "md:group-hover/lean:rotate-3",
        className
      )}
      {...props}
    />
  )
}

export { LeanCard, LeanCardContent }