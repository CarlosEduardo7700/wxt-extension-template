import * as UI from "./ui/tabs"
import { ReactNode } from "react"

interface TabsProps {
  tabsTitles: string[]
  defaultValue: string
  children: ReactNode
}

interface TabsContentProps {
  value: string
  children: ReactNode
  [key: string]: any
}

export function Tabs({ tabsTitles, defaultValue, children }: TabsProps) {
  return (
    <UI.Tabs defaultValue={defaultValue} orientation="horizontal">

      <UI.TabsList variant="default">
        {tabsTitles.map((title) => (
          <UI.TabsTrigger key={title} value={title.toLowerCase().replace(/\s+/g, "-")}>
            {title}
          </UI.TabsTrigger>
        ))}
      </UI.TabsList>

      {children}

    </UI.Tabs>
  )
}

export function TabsContent({ value, children, ...props }: TabsContentProps) {
  return (
    <UI.TabsContent 
      value={value} 
      {...props}
    >
      {children}
    </UI.TabsContent>
  )
}
