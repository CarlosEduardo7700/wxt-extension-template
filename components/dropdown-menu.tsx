import { Button } from "./ui/button"
import * as UI from "./ui/dropdown-menu"

export function DropdownMenu() {
  return (
    <UI.DropdownMenu>

      <UI.DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </UI.DropdownMenuTrigger>

      <UI.DropdownMenuContent className="w-40" align="start">

        <UI.DropdownMenuGroup>
          <UI.DropdownMenuLabel>Add Menu Label</UI.DropdownMenuLabel>
          <UI.DropdownMenuItem>
            Add item one
            <UI.DropdownMenuShortcut>⇧⌘E</UI.DropdownMenuShortcut>
          </UI.DropdownMenuItem>
          <UI.DropdownMenuItem>
            Add item two
            <UI.DropdownMenuShortcut>⌘X</UI.DropdownMenuShortcut>
          </UI.DropdownMenuItem>
          <UI.DropdownMenuItem disabled>
            Add item three
          </UI.DropdownMenuItem>
        </UI.DropdownMenuGroup>

        <UI.DropdownMenuSeparator />

        <UI.DropdownMenuGroup>
          <UI.DropdownMenuSub>
            <UI.DropdownMenuSubTrigger>Submenu</UI.DropdownMenuSubTrigger>
            <UI.DropdownMenuPortal>
              <UI.DropdownMenuSubContent>
                <UI.DropdownMenuItem>Add subitem one</UI.DropdownMenuItem>
                <UI.DropdownMenuItem>Add subitem two</UI.DropdownMenuItem>
                <UI.DropdownMenuSeparator />
                <UI.DropdownMenuItem>More...</UI.DropdownMenuItem>
              </UI.DropdownMenuSubContent>
            </UI.DropdownMenuPortal>
          </UI.DropdownMenuSub>
        </UI.DropdownMenuGroup>

      </UI.DropdownMenuContent>
    </UI.DropdownMenu>
  )
}
