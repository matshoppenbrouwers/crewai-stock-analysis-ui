'use client'

import { useState, useEffect } from 'react'
import { Sidebar } from '@/components/sidebar'
import { StepsList } from '@/components/steps-list'
import { OutputPanel } from '@/components/output-panel'
import { wsClient } from '@/lib/websocket'
import { UIState } from '@/lib/types'

export function AgentDashboard() {
  const [uiState, setUiState] = useState<UIState>({
    steps: {},
    outputs: [],
    current_step: null
  })

  useEffect(() => {
    wsClient.connect()
    wsClient.onMessage(setUiState)

    return () => {
      wsClient.disconnect()
    }
  }, [])

  const currentStepName = uiState.current_step || Object.keys(uiState.steps)[0]
  
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-1 overflow-hidden">
        <OutputPanel 
          outputs={uiState.outputs}
          currentStep={currentStepName}
        />
        <StepsList 
          steps={uiState.steps}
          currentStep={currentStepName}
        />
      </div>
    </div>
  )
}