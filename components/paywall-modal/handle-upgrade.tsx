import * as React from "react"

export function handleUpgrade(setIsRedirecting: React.Dispatch<React.SetStateAction<boolean>>) {
    setIsRedirecting(true)
    
    const STRIPE_CHECKOUT_URL = "https://buy.stripe.com/seu_link_aqui"
    
    window.open(STRIPE_CHECKOUT_URL, "_blank")
    
    setIsRedirecting(false)
  }
