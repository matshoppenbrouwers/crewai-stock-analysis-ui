import { ScrollArea } from '@/components/ui/scroll-area'
import { StepItem } from './step-item'
import { StepsListProps } from './types'

export function StepsList({ steps, currentStep }: StepsListProps) {
  return (
    <div className="w-1/2 bg-zinc-900">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-zinc-100 mb-4">Analysis Steps</h2>
        <ScrollArea className="h-[calc(100vh-8rem)]">
          <div className="space-y-4 pr-4">
            {Object.entries(steps).map(([name, step]) => (
              <StepItem
                key={name}
                name={name}
                step={step}
                isActive={currentStep === name}
              />
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}