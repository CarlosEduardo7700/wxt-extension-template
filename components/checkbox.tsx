import * as UI from "./ui/checkbox"

function Checkbox({ className, ...props }: React.ComponentProps<typeof UI.Checkbox>) {
  return (
    <UI.Checkbox className={className} {...props} />
  )
}

export { Checkbox }