import * as UI from "./ui/card"

export function Card() {
  return (
    <UI.Card>

      <UI.CardHeader>
        <UI.CardTitle>Add Card Title</UI.CardTitle>
        <UI.CardDescription>Add any description you like here.</UI.CardDescription>
        <UI.CardAction>
          <Button variant="link">Add action</Button>
        </UI.CardAction>
      </UI.CardHeader>

      <UI.CardContent>
        <p>Add any content you like here.</p>
      </UI.CardContent>

      <UI.CardFooter>
        <p>Add any footer content you like here.</p>
      </UI.CardFooter>

    </UI.Card>
  )
}
