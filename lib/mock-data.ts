import { UIState, StepStatus } from './types'

export const mockState: UIState = {
  steps: {
    "Initial Analysis": {
      name: "Initial Analysis",
      description: "Processing input data and performing initial analysis",
      progress: 100,
      status: StepStatus.COMPLETED,
      start_time: new Date(Date.now() - 300000).toISOString(),
      end_time: new Date(Date.now() - 240000).toISOString()
    },
    "Task Planning": {
      name: "Task Planning",
      description: "Planning and organizing analysis tasks",
      progress: 75,
      status: StepStatus.IN_PROGRESS,
      start_time: new Date(Date.now() - 240000).toISOString()
    },
    "Resource Gathering": {
      name: "Resource Gathering",
      description: "Collecting required data and resources",
      progress: 45,
      status: StepStatus.IN_PROGRESS,
      start_time: new Date(Date.now() - 180000).toISOString()
    },
    "Execution": {
      name: "Execution",
      description: "Performing main analysis tasks",
      progress: 20,
      status: StepStatus.IN_PROGRESS,
      start_time: new Date(Date.now() - 120000).toISOString()
    },
    "Validation": {
      name: "Validation",
      description: "Validating results and generating final report",
      progress: 0,
      status: StepStatus.NOT_STARTED
    }
  },
  outputs: [
    {
      step_name: "Initial Analysis",
      content: "🔄 **Starting Task**: Initial Analysis\n\nBeginning data processing and initial analysis phase\n\n*Analyzing input parameters...*",
      timestamp: new Date(Date.now() - 300000).toISOString(),
      is_markdown: true
    },
    {
      step_name: "Initial Analysis",
      content: "✅ **Task Complete**: Initial Analysis\n\n```json\n{\n  \"status\": \"success\",\n  \"metrics\": {\n    \"processed_items\": 150,\n    \"duration_ms\": 2500\n  }\n}\n```",
      timestamp: new Date(Date.now() - 240000).toISOString(),
      is_markdown: true
    },
    {
      step_name: "Task Planning",
      content: "🔄 **Starting Task**: Task Planning\n\nOrganizing analysis workflow and resource requirements\n\n*Generating task schedule...*",
      timestamp: new Date(Date.now() - 220000).toISOString(),
      is_markdown: true
    }
  ],
  current_step: "Task Planning"
}