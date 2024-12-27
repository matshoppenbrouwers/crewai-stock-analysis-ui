import { Home, Brain, Settings, BarChart } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Dashboard', icon: Home },
  { name: 'Agents', icon: Brain },
  { name: 'Analytics', icon: BarChart },
  { name: 'Settings', icon: Settings },
]

export function Sidebar() {
  return (
    <div className="w-20 bg-zinc-900 border-r border-zinc-800">
      <div className="flex flex-col items-center py-4 space-y-8">
        <div className="h-12 w-12 rounded-full bg-orange-500 flex items-center justify-center">
          <Brain className="h-6 w-6 text-zinc-900" />
        </div>
        {navigation.map((item) => (
          <button
            key={item.name}
            className={cn(
              "h-12 w-12 rounded-full flex items-center justify-center",
              "text-zinc-400 hover:text-orange-500 transition-colors"
            )}
          >
            <item.icon className="h-6 w-6" />
          </button>
        ))}
      </div>
    </div>
  )
}