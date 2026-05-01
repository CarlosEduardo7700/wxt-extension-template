import * as UI from "./ui/input"

function Input({ className, type, ...props }: React.ComponentProps<typeof UI.Input>) {
	return <UI.Input className={className} type={type} {...props} />
}

export { Input }

