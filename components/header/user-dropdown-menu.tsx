import { Crown, LogOut, UserRound } from "lucide-react"
import { Button } from "../ui/button"
import * as UI from "../ui/dropdown-menu"

interface UserDropdownMenuProps {
  onUpgradeClick?: () => void
  onLogoutClick?: () => void
  userEmail?: string
  userName?: string
}

export function UserDropdownMenu({ userName, userEmail, onUpgradeClick, onLogoutClick }: UserDropdownMenuProps) {
  return (
    <UI.DropdownMenu>
      <UI.DropdownMenuTrigger asChild>
        <Button variant="ghost" className="popup-header-avatar-btn">
            <UserRound size={34}/>
        </Button>
      </UI.DropdownMenuTrigger>

      <UI.DropdownMenuContent className="w-56" align="end" forceMount>

        <UI.DropdownMenuLabel className="popup-header-user-label">
          <div className="popup-header-user-info">
            <p className="popup-header-username">{userName}</p>
            <p className="popup-header-useremail">{userEmail}</p>
          </div>
        </UI.DropdownMenuLabel>

        <UI.DropdownMenuSeparator />

        <UI.DropdownMenuItem onClick={onUpgradeClick} className="popup-header-upgrade-item">
          <Crown className="popup-header-upgrade-icon" />
          <span>Upgrade to Pro</span>
        </UI.DropdownMenuItem>
        
        <UI.DropdownMenuSeparator />

        <UI.DropdownMenuItem onClick={onLogoutClick} className="popup-header-logout-item">
          <LogOut className="popup-header-logout-icon" />
          <span>Log Out</span>
        </UI.DropdownMenuItem>

      </UI.DropdownMenuContent>
      
    </UI.DropdownMenu>
  )
}
