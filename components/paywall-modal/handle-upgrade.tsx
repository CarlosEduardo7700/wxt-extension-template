import * as React from "react"

export function handleUpgrade(setIsRedirecting: React.Dispatch<React.SetStateAction<boolean>>) {
    setIsRedirecting(true)
    
    const STRIPE_CHECKOUT_URL = "https://buy.stripe.com/test_3cI14f8ef0izgribRK8bS00"
    
    window.open(STRIPE_CHECKOUT_URL, "_blank")
    
    setTimeout(() => setIsRedirecting(false), 3000)
  }
