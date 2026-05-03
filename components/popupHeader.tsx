import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
// import { Badge } from "@/components/ui/badge";
import { Settings, LogOut, User, LayoutGrid, UserRound, UserRoundPen } from "lucide-react"; // Ícones padrão

export function Header() {
  return (
    <header className="flex items-center justify-between w-full px-2 py-1 border-b bg-background">
      <div className="flex items-center gap-2">

        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground">
          <LayoutGrid size={18} />
        </div>

        <div className="flex flex-col">
          <span className="text-sm font-bold leading-none text-foreground">
            WXT Template
          </span>
        </div>

      </div>

      <div className="flex items-center gap-2">

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative w-8 h-8 rounded-full">
                <UserRound size={34}/>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-56" align="end" forceMount>

            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">User Name</p>
                <p className="text-xs leading-none text-muted-foreground">
                  user@example.com
                </p>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <UserRoundPen className="w-4 h-4 mr-2" />
              <span>Profile</span>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Settings className="w-4 h-4 mr-2" />
              <span>Settings</span>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem className="text-destructive">
              <LogOut className="w-4 h-4 mr-2" />
              <span>Logout</span>
            </DropdownMenuItem>

          </DropdownMenuContent>
          
        </DropdownMenu>

      </div>
    </header>
  );
}