import { UIState } from './types'
import { mockState } from './mock-data'

const WEBSOCKET_RETRY_DELAY = 1000
const MAX_RECONNECT_ATTEMPTS = 5

class WebSocketClient {
  private ws: WebSocket | null = null
  private url: string
  private reconnectAttempts = 0
  private onMessageCallback: ((state: UIState) => void) | null = null
  private isDevEnvironment: boolean

  constructor(url: string) {
    this.url = url
    this.isDevEnvironment = process.env.NODE_ENV === 'development'
  }

  connect() {
    if (this.isDevEnvironment) {
      console.log('Development mode: Using mock data')
      this.simulateDevUpdates()
      return
    }

    try {
      this.ws = new WebSocket(this.url)

      this.ws.onopen = () => {
        console.log('WebSocket connected')
        this.reconnectAttempts = 0
      }

      this.ws.onmessage = (event) => {
        try {
          const state = JSON.parse(event.data) as UIState
          this.onMessageCallback?.(state)
        } catch (error) {
          console.error('Failed to parse WebSocket message:', error)
        }
      }

      this.ws.onclose = () => {
        if (this.reconnectAttempts < MAX_RECONNECT_ATTEMPTS) {
          this.reconnectAttempts++
          const delay = WEBSOCKET_RETRY_DELAY * this.reconnectAttempts
          console.log(`WebSocket disconnected. Retrying in ${delay}ms...`)
          setTimeout(() => this.connect(), delay)
        } else {
          console.log('Max reconnection attempts reached. Falling back to mock data.')
          this.simulateDevUpdates()
        }
      }

      this.ws.onerror = (error) => {
        console.error('WebSocket error:', error)
      }
    } catch (error) {
      console.error('Failed to connect to WebSocket:', error)
      this.simulateDevUpdates()
    }
  }

  private simulateDevUpdates() {
    // Initial state
    this.onMessageCallback?.(mockState)

    // Simulate progress updates
    let progress = { ...mockState }
    
    const updateInterval = setInterval(() => {
      Object.entries(progress.steps).forEach(([name, step]) => {
        if (step.status === 'in_progress') {
          step.progress = Math.min(100, step.progress + 5)
          if (step.progress === 100) {
            step.status = 'completed'
            step.end_time = new Date().toISOString()
            
            // Start next step
            const steps = Object.values(progress.steps)
            const currentIndex = steps.findIndex(s => s.name === name)
            if (currentIndex < steps.length - 1) {
              const nextStep = steps[currentIndex + 1]
              nextStep.status = 'in_progress'
              nextStep.start_time = new Date().toISOString()
              progress.current_step = nextStep.name
            }
          }
        }
      })

      this.onMessageCallback?.(progress)
    }, 2000)

    // Cleanup function
    return () => clearInterval(updateInterval)
  }

  onMessage(callback: (state: UIState) => void) {
    this.onMessageCallback = callback
  }

  disconnect() {
    this.ws?.close()
    this.ws = null
  }
}

// Create singleton instance
export const wsClient = new WebSocketClient('ws://localhost:8000/ws')