import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Info } from "lucide-react";

interface InfoTooltipProps {
  size?: number
  content: string
  [key: string]: any
}

export function InfoTooltip({ size = 14, content, ...props }: InfoTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>

        <TooltipTrigger asChild>
          <Info size={size} className="text-muted-foreground" {...props} />
        </TooltipTrigger>

        <TooltipContent>
          <p className="text-xs w-48">
            {content}
          </p>
        </TooltipContent>

      </Tooltip>
    </TooltipProvider>
  );
}