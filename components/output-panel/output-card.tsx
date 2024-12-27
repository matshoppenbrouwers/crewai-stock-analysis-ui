import { Card } from '@/components/ui/card'
import { OutputCardProps } from './types'
import ReactMarkdown from 'react-markdown'

export function OutputCard({ output }: OutputCardProps) {
  const timestamp = new Date(output.timestamp).toLocaleTimeString()

  return (
    <Card className="bg-zinc-800 border-zinc-700 p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-zinc-400">{timestamp}</span>
      </div>
      <div className="prose prose-invert prose-sm max-w-none">
        {output.is_markdown ? (
          <ReactMarkdown
            components={{
              pre: ({ node, ...props }) => (
                <div className="my-2 overflow-auto rounded-lg bg-zinc-900 p-4">
                  <pre {...props} />
                </div>
              ),
              code: ({ node, ...props }) => (
                <code className="bg-zinc-900 px-1 py-0.5 rounded" {...props} />
              )
            }}
          >
            {output.content}
          </ReactMarkdown>
        ) : (
          <pre className="text-sm text-zinc-300">{output.content}</pre>
        )}
      </div>
    </Card>
  )
}