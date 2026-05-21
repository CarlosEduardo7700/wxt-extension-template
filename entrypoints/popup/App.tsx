import { Button } from "../../components/ui/button";
import { Header } from "../../components/popup-header";
import { Toaster } from "../../components/ui/sonner";
import { toast } from "sonner";
import { Tabs, TabsContent } from "../../components/tabs";

function App() {
  return (
    <div className="p-4">
      <Header />
      <h1>Hello World!!</h1>
      <h2>Hello World!!</h2>
      <p>Hello World!!</p>
      <hr />
      <Button variant="default" size="lg">
        <a href="https://google.com" target="_blank" rel="noreferrer">
          Abrir Google
        </a>
      </Button>
      <hr />
      <Button variant="default" size="lg" onClick={() => toast.info("Hello World!!")}>
          Abrir
      </Button>
      <hr />
      <Tabs tabsTitles={["Overview", "Analytics", "Reports", "Settings"]} defaultValue="overview">
        <TabsContent value="overview">
          <p>Add any overview content you like here.</p>
        </TabsContent>

        <TabsContent value="analytics">
          <p>Add any analytics content you like here.</p>
        </TabsContent>

        <TabsContent value="reports">
          <p>Add any reports content you like here.</p>
        </TabsContent>

        <TabsContent value="settings">
          <p>Add any settings content you like here.</p>
        </TabsContent>
      </Tabs>
      <hr />
      <Toaster />
    </div>
  );
}

export default App;
