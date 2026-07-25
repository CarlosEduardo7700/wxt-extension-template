import { InfoTooltip } from "./info-tooltip";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

export function SettingsGroup() {
  return (
    <div className="space-y-4">
      <Card>

        <CardHeader className="pb-3">
          <CardTitle className="text-base">Settings Group</CardTitle>
          <CardDescription>
            Configure how the extension behaves.
          </CardDescription>
        </CardHeader>
        
        <CardContent className="grid gap-4">
          
          <div className="flex items-center justify-between space-x-2">

            <div className="flex items-center gap-2">
              <Label htmlFor="option-1">Name option</Label>
              <InfoTooltip content="Description for this option." />
            </div>
            <Switch id="option-1" />

          </div>

          <div className="flex items-center justify-between space-x-2">

            <div className="flex items-center gap-2">
              <Label htmlFor="option-2">Name option</Label>
              <InfoTooltip content="Description for this option." />
            </div>
            <Switch id="option-2" defaultChecked />
            
          </div>

        </CardContent>
      </Card>
    </div>
  );
}