import * as UI from "./ui/dialog"

export function Modal() {
  return (
    <UI.Dialog>

      <UI.DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </UI.DialogTrigger>

      <UI.DialogContent className="sm:max-w-sm">

        <UI.DialogHeader>
          <UI.DialogTitle>Add Modal Title</UI.DialogTitle>
          <UI.DialogDescription>
            Add any description you like here.
          </UI.DialogDescription>
        </UI.DialogHeader>

        <UI.DialogFooter>
          <UI.DialogClose asChild>
            <Button variant="default">Close</Button>
          </UI.DialogClose>
        </UI.DialogFooter>

      </UI.DialogContent>

    </UI.Dialog>
  )
}
