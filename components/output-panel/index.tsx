import { ScrollArea } from '@/components/ui/scroll-area'
import { OutputCard } from './output-card'
import { OutputPanelProps } from './types'

export function OutputPanel({ outputs, currentStep }: OutputPanelProps) {
  const stepOutputs = outputs.filter(output => output.step_name === currentStep)

  return (
    <div className="w-1/2 border-r border-zinc-800 bg-zinc-900">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-zinc-100 mb-4">Output Log</h2>
        <ScrollArea className="h-[calc(100vh-8rem)]">
          <div className="space-y-4 pr-4">
            {stepOutputs.map((output, index) => (
              <OutputCard key={index} output={output} />
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}