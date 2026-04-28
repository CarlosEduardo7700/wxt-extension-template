import * as UI from "./ui/button"

interface ButtonProps {
    variant?: "default" | "outline" | "secondary" | "ghost" | "destructive" | "link"
    size?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"
    children?: React.ReactNode
}

export function Button({ variant = "default", size = "default", children, ...props }: ButtonProps) {
  return (
    <UI.Button variant={variant} size={size} {...props}>
        {children}
    </UI.Button>
  )
}