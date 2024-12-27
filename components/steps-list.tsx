import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'

interface StepsListProps {
  currentStep: number
  onStepChange: (step: number) => void
}

export function StepsList({ currentStep, onStepChange }: StepsListProps) {
  const steps = [
    { id: 1, title: 'Initial Analysis', progress: 100 },
    { id: 2, title: 'Task Planning', progress: 75 },
    { id: 3, title: 'Resource Gathering', progress: 45 },
    { id: 4, title: 'Execution', progress: 20 },
    { id: 5, title: 'Validation', progress: 0 },
  ]

  return (
    <div className="w-1/2 bg-zinc-900">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-zinc-100 mb-4">Steps</h2>
        <ScrollArea className="h-[calc(100vh-8rem)]">
          <div className="space-y-4 pr-4">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => onStepChange(step.id)}
                className="w-full text-left"
              >
                <div className={`p-4 rounded-lg border ${
                  currentStep === step.id 
                    ? 'bg-zinc-800 border-orange-500/50' 
                    : 'bg-zinc-800/50 border-zinc-700'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-zinc-100">{step.title}</h3>
                    <span className="text-sm text-zinc-400">{step.progress}%</span>
                  </div>
                  <Progress value={step.progress} className="h-1 bg-zinc-700">
                    <div 
                      className="h-full bg-orange-500 transition-all" 
                      style={{ width: `${step.progress}%` }} 
                    />
                  </Progress>
                </div>
              </button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}