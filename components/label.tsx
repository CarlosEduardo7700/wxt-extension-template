import * as UI from "./ui/label"

function Label({ className, ...props }: React.ComponentProps<typeof UI.Label>) {
    return <UI.Label className={className} {...props} />
}

export { Label }

