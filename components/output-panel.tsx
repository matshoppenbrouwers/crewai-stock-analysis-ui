import { ScrollArea } from '@/components/ui/scroll-area'
import { Card } from '@/components/ui/card'

interface OutputPanelProps {
  currentStep: number
}

export function OutputPanel({ currentStep }: OutputPanelProps) {
  return (
    <div className="w-1/2 border-r border-zinc-800 bg-zinc-900">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-zinc-100 mb-4">Output</h2>
        <ScrollArea className="h-[calc(100vh-8rem)]">
          <div className="space-y-4 pr-4">
            <Card className="bg-zinc-800 border-zinc-700 p-4">
              <div className="flex items-center space-x-2 mb-2">
                <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center">
                  <span className="text-sm font-medium text-zinc-900">1</span>
                </div>
                <h3 className="text-sm font-medium text-zinc-100">Initial Analysis</h3>
              </div>
              <p className="text-sm text-zinc-400">
                Processing input data and performing initial analysis of the task requirements...
              </p>
            </Card>
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}