import * as UI from "./ui/tabs"

export function Tabs() {
  return (
    <UI.Tabs defaultValue="overview" orientation="horizontal" className="w-100">

      <UI.TabsList variant="default">
        <UI.TabsTrigger value="overview">Overview</UI.TabsTrigger>
        <UI.TabsTrigger value="analytics">Analytics</UI.TabsTrigger>
        <UI.TabsTrigger value="reports">Reports</UI.TabsTrigger>
        <UI.TabsTrigger value="settings">Settings</UI.TabsTrigger>
      </UI.TabsList>
      
      <UI.TabsContent value="overview">
        <p>Add any overview content you like here.</p>
      </UI.TabsContent>

      <UI.TabsContent value="analytics">
        <p>Add any analytics content you like here.</p>
      </UI.TabsContent>

      <UI.TabsContent value="reports">
        <p>Add any reports content you like here.</p>
      </UI.TabsContent>

      <UI.TabsContent value="settings">
        <p>Add any settings content you like here.</p>
      </UI.TabsContent>

    </UI.Tabs>
  )
}
