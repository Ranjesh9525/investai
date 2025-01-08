import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Brain, FileInputIcon as Input, Shield } from 'lucide-react'

const iconMap = {
  brain: Brain,
  input: Input,
  shield: Shield,
}

interface FeatureHighlightProps {
  title: string
  description: string
  icon: keyof typeof iconMap
}

export default function FeatureHighlight({ title, description, icon }: FeatureHighlightProps) {
  const Icon = iconMap[icon]

  return (
    <Card>
      <CardHeader>
        <Icon className="h-10 w-10 mb-2" />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

