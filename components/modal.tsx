import { Button } from "./ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"

export function Modal() {
  return (
    <Dialog>

      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-sm">

        <DialogHeader>
          <DialogTitle>Modal Title</DialogTitle>
          <DialogDescription>
            Add any description you like here.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="default">Close</Button>
          </DialogClose>
        </DialogFooter>

      </DialogContent>

    </Dialog>
  )
}
