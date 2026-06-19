import { LayoutGrid } from "lucide-react";
import { UserDropdownMenu } from "./user-dropdown-menu";

interface HeaderProps {
  userEmail?: string
  onUpgradeClick: () => void
  onLogoutClick: () => void
  userName?: string
}

export function Header({ userName, userEmail, onUpgradeClick, onLogoutClick }: HeaderProps) {
  return (
    <header className="popup-header">
      <div className="popup-header-brand">

        <div className="popup-header-logo">
          <LayoutGrid size={18} />
        </div>

        <div className="popup-header-title-wrapper">
          <span className="popup-header-title">
            WXT Template
          </span>
        </div>

      </div>

      <div className="popup-header-actions">

        <UserDropdownMenu
          userName={userName}
          userEmail={userEmail}
          onUpgradeClick={onUpgradeClick} 
          onLogoutClick={onLogoutClick}
        />

      </div>
    </header>
  );
}