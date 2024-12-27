export interface Step {
  id: number
  title: string
  progress: number
}

export const steps: Step[] = [
  { id: 1, title: 'Initial Analysis', progress: 100 },
  { id: 2, title: 'Task Planning', progress: 75 },
  { id: 3, title: 'Resource Gathering', progress: 45 },
  { id: 4, title: 'Execution', progress: 20 },
  { id: 5, title: 'Validation', progress: 0 },
]