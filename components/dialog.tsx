import * as UI from "./ui/dialog"

function Dialog({ ...props }: React.ComponentProps<typeof UI.Dialog>) {
  return (
    <UI.Dialog {...props} />
  )
}

function DialogTrigger({ ...props }: React.ComponentProps<typeof UI.DialogTrigger>) {
  return (
    <UI.DialogTrigger {...props} />
  )
}

function DialogPortal({ ...props }: React.ComponentProps<typeof UI.DialogPortal>) {
  return (
    <UI.DialogPortal {...props} />
  )
}

function DialogClose({ ...props }: React.ComponentProps<typeof UI.DialogClose>) {
  return (
    <UI.DialogClose {...props} />
  )
}

function DialogOverlay({ className, ...props }: React.ComponentProps<typeof UI.DialogOverlay>) {
  return (
    <UI.DialogOverlay className={className} {...props} />
  )
}

function DialogContent({ className, children, showCloseButton = true, ...props }: React.ComponentProps<typeof UI.DialogContent> & {showCloseButton?: boolean}) {
  return (
    <UI.DialogContent className={className} showCloseButton={showCloseButton}  {...props} >
      {children}
    </UI.DialogContent>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <UI.DialogHeader className={className} {...props} />
  )
}

function DialogFooter({ className, showCloseButton = true, children, ...props }: React.ComponentProps<"div"> & {showCloseButton?: boolean}) {
  return (
    <UI.DialogFooter className={className} showCloseButton={showCloseButton} {...props} >
      {children}
    </UI.DialogFooter>
  )
}

function DialogTitle({ className, ...props }: React.ComponentProps<typeof UI.DialogTitle>) {
  return (
    <UI.DialogTitle className={className} {...props} />
  )
}

function DialogDescription({ className, ...props }: React.ComponentProps<typeof UI.DialogDescription>) {
  return (
    <UI.DialogDescription className={className} {...props} />
  )
}

export { 
  Dialog, 
  DialogTrigger, 
  DialogTitle, 
  DialogHeader, 
  DialogOverlay, 
  DialogPortal,
  DialogDescription, 
  DialogClose, 
  DialogContent, 
  DialogFooter 
}