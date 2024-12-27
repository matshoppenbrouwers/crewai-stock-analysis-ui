import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavButtonProps {
  icon: LucideIcon
  name: string
}

export function NavButton({ icon: Icon, name }: NavButtonProps) {
  return (
    <button
      className={cn(
        "h-12 w-12 rounded-full flex items-center justify-center",
        "text-zinc-400 hover:text-orange-500 transition-colors"
      )}
      title={name}
    >
      <Icon className="h-6 w-6" />
    </button>
  )
}