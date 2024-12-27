import { AnalysisStep } from '@/lib/types'

export interface StepItemProps {
  name: string
  step: AnalysisStep
  isActive: boolean
}

export interface StepsListProps {
  steps: Record<string, AnalysisStep>
  currentStep: string
}