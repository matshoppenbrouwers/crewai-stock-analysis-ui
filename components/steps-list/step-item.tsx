import { Progress } from '@/components/ui/progress'
import { StepStatus } from '@/lib/types'
import { StepItemProps } from './types'
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

export function StepItem({ name, step, isActive }: StepItemProps) {
  const getStatusIcon = () => {
    switch (step.status) {
      case StepStatus.COMPLETED:
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case StepStatus.FAILED:
        return <AlertCircle className="h-4 w-4 text-red-500" />
      case StepStatus.IN_PROGRESS:
        return <Loader2 className="h-4 w-4 text-orange-500 animate-spin" />
      default:
        return null
    }
  }

  return (
    <div className={`p-4 rounded-lg border ${
      isActive 
        ? 'bg-zinc-800 border-orange-500/50' 
        : 'bg-zinc-800/50 border-zinc-700'
    }`}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <h3 className="text-sm font-medium text-zinc-100">{name}</h3>
          {getStatusIcon()}
        </div>
        <span className="text-sm text-zinc-400">{step.progress}%</span>
      </div>
      <Progress value={step.progress} className="h-1 bg-zinc-700">
        <div 
          className="h-full bg-orange-500 transition-all" 
          style={{ width: `${step.progress}%` }} 
        />
      </Progress>
      <p className="mt-2 text-xs text-zinc-400">{step.description}</p>
    </div>
  )
}