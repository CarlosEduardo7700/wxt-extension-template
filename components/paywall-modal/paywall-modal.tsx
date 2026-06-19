import { Check, Crown, Loader2 } from "lucide-react"
import { useState } from "react"
import { Button } from "../ui/button"
import * as UI from "../ui/dialog"
import { handleUpgrade } from "./handle-upgrade"

interface PaywallModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function PaywallModal({ open, onOpenChange }: PaywallModalProps) {
  const [isRedirecting, setIsRedirecting] = useState(false)

  const handleUpgradeClick = () => {
    handleUpgrade(setIsRedirecting)
  }

  return (
    <UI.Dialog open={open} onOpenChange={onOpenChange}>
      <UI.DialogContent className="paywall-content">
        
        <UI.DialogHeader className="paywall-header">
          <Crown className="paywall-crown" />
          <UI.DialogTitle>Upgrade to Pro</UI.DialogTitle>
          <UI.DialogDescription>Unlock all features and eliminate limits to supercharge your workflow.</UI.DialogDescription>
        </UI.DialogHeader>

        <div className="paywall-features">
          <div className="paywall-feature-item">
            <Check className="paywall-feature-check" />
            <span className="paywall-feature-text">Unlimited automations & runs</span>
          </div>
          <div className="paywall-feature-item">
            <Check className="paywall-feature-check" />
            <span className="paywall-feature-text">Priority cloud processing (Faster)</span>
          </div>
          <div className="paywall-feature-item">
            <Check className="paywall-feature-check" />
            <span className="paywall-feature-text">Premium 24/7 support channel</span>
          </div>
        </div>

        <UI.DialogFooter className="paywall-footer">
          <UI.DialogClose asChild>
            <Button variant="ghost">Maybe later</Button>
          </UI.DialogClose>

          <Button onClick={handleUpgradeClick} disabled={isRedirecting}>
            {isRedirecting ? (
              <>
                <Loader2 className="paywall-loader" />
                Redirecting...
              </>
            ) : (
              <>Get Pro Access • $9/mo</>
            )}
          </Button>
        </UI.DialogFooter>

      </UI.DialogContent>
    </UI.Dialog>
  )
}