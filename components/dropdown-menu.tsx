import * as UI from "./ui/dropdown-menu"

function DropdownMenu({ ...props }: React.ComponentProps<typeof UI.DropdownMenu>) {
	return <UI.DropdownMenu {...props} />
}

function DropdownMenuPortal({ ...props }: React.ComponentProps<typeof UI.DropdownMenuPortal>) {
	return <UI.DropdownMenuPortal {...props} />
}

function DropdownMenuTrigger({ ...props }: React.ComponentProps<typeof UI.DropdownMenuTrigger>) {
	return <UI.DropdownMenuTrigger {...props} />
}

function DropdownMenuContent({
	className,
	align = "start",
	sideOffset = 4,
	...props
}: React.ComponentProps<typeof UI.DropdownMenuContent>) {
	return (
		<UI.DropdownMenuContent className={className} align={align} sideOffset={sideOffset} {...props} />
	)
}

function DropdownMenuGroup({ ...props }: React.ComponentProps<typeof UI.DropdownMenuGroup>) {
	return <UI.DropdownMenuGroup {...props} />
}

function DropdownMenuLabel({ className, inset, ...props }: React.ComponentProps<typeof UI.DropdownMenuLabel> & { inset?: boolean }) {
	return <UI.DropdownMenuLabel className={className} inset={inset} {...props} />
}

function DropdownMenuItem({ className, inset, ...props }: React.ComponentProps<typeof UI.DropdownMenuItem>) {
	return <UI.DropdownMenuItem className={className} {...props} />
}

function DropdownMenuCheckboxItem({
	className,
	children,
	...props
}: React.ComponentProps<typeof UI.DropdownMenuCheckboxItem>) {
	return (
		<UI.DropdownMenuCheckboxItem className={className} {...props}>
			{children}
		</UI.DropdownMenuCheckboxItem>
	)
}

function DropdownMenuRadioGroup({ ...props }: React.ComponentProps<typeof UI.DropdownMenuRadioGroup>) {
	return <UI.DropdownMenuRadioGroup {...props} />
}

function DropdownMenuRadioItem({
	className,
	children,
	...props
}: React.ComponentProps<typeof UI.DropdownMenuRadioItem>) {
	return (
		<UI.DropdownMenuRadioItem className={className} {...props}>
			{children}
		</UI.DropdownMenuRadioItem>
	)
}

function DropdownMenuSeparator({ className, ...props }: React.ComponentProps<typeof UI.DropdownMenuSeparator>) {
	return <UI.DropdownMenuSeparator className={className} {...props} />
}

function DropdownMenuShortcut({ className, ...props }: React.ComponentProps<typeof UI.DropdownMenuShortcut>) {
	return <UI.DropdownMenuShortcut className={className} {...props} />
}

function DropdownMenuSub({ ...props }: React.ComponentProps<typeof UI.DropdownMenuSub>) {
	return <UI.DropdownMenuSub {...props} />
}

function DropdownMenuSubTrigger({
	className,
	children,
	...props
}: React.ComponentProps<typeof UI.DropdownMenuSubTrigger>) {
	return (
		<UI.DropdownMenuSubTrigger className={className} {...props}>
			{children}
		</UI.DropdownMenuSubTrigger>
	)
}

function DropdownMenuSubContent({ className, ...props }: React.ComponentProps<typeof UI.DropdownMenuSubContent>) {
	return <UI.DropdownMenuSubContent className={className} {...props} />
}

export {
	DropdownMenu,
	DropdownMenuPortal,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuLabel,
	DropdownMenuItem,
	DropdownMenuCheckboxItem,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubTrigger,
	DropdownMenuSubContent,
}
