import { AnalysisOutput } from '@/lib/types'

export interface OutputPanelProps {
  outputs: AnalysisOutput[]
  currentStep: string
}

export interface OutputCardProps {
  output: AnalysisOutput
}