import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Info } from "lucide-react";

export function InfoTooltip() {
  return (
    <TooltipProvider>
      <Tooltip>

        <TooltipTrigger asChild>
        <Info size={14} className="text-muted-foreground" />
        </TooltipTrigger>

        <TooltipContent>
        <p className="text-xs w-48">
            Description for this option.
        </p>
        </TooltipContent>

      </Tooltip>
    </TooltipProvider>
  );
}