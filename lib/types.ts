export enum StepStatus {
  NOT_STARTED = "not_started",
  IN_PROGRESS = "in_progress",
  COMPLETED = "completed",
  FAILED = "failed"
}

export interface AnalysisStep {
  name: string
  description: string
  progress: number
  status: StepStatus
  start_time?: string
  end_time?: string
}

export interface AnalysisOutput {
  step_name: string
  content: string
  timestamp: string
  is_markdown: boolean
}

export interface UIState {
  steps: Record<string, AnalysisStep>
  outputs: AnalysisOutput[]
  current_step: string | null
}