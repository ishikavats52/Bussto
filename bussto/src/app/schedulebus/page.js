
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-6 py-4 bg-primary text-primary-foreground">
        <h1 className="text-2xl font-bold">Bus Schedule</h1>
      </header>
      <main className="grid flex-1 grid-cols-1 gap-8 p-8 lg:grid-cols-2">
        <div className="p-6 rounded-lg shadow-md bg-background">
          <h2 className="mb-4 text-xl font-semibold">Schedule a Bus Route</h2>
          <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="route">Bus Route</Label>
              <Input id="route" placeholder="Enter bus route" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="departure">Departure Time</Label>
              <Input id="departure" type="time" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="arrival">Arrival Time</Label>
              <Input id="arrival" type="time" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="destination">Destination</Label>
              <Input id="destination" placeholder="Enter destination" />
            </div>
            <div className="flex justify-end col-span-2">
              <Button type="submit">Save Schedule</Button>
            </div>
          </form>
        </div>
        <div className="bg-background rounded-lg shadow-md p-6 h-[500px]">
          <h2 className="mb-4 text-xl font-semibold">Bus Route Details</h2>
          <div className="grid h-full gap-4 overflow-y-auto">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-semibold">Route 1</div>
                <div className="text-muted-foreground">Departure: 8:00 AM | Arrival: 9:30 AM</div>
              </div>
              <div>
                <MapPinIcon className="w-6 h-6" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-semibold">Route 2</div>
                <div className="text-muted-foreground">Departure: 11:00 AM | Arrival: 12:45 PM</div>
              </div>
              <div>
                <MapPinIcon className="w-6 h-6" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-semibold">Route 3</div>
                <div className="text-muted-foreground">Departure: 3:00 PM | Arrival: 4:45 PM</div>
              </div>
              <div>
                <MapPinIcon className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <section className="px-6 py-8 bg-muted">
        <h2 className="mb-4 text-xl font-semibold">Scheduled Bus Routes</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-semibold">Route 1</div>
                  <div className="text-muted-foreground">Departure: 8:00 AM | Arrival: 9:30 AM</div>
                </div>
                <div>
                  <MapPinIcon className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Book Ticket</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-semibold">Route 2</div>
                  <div className="text-muted-foreground">Departure: 11:00 AM | Arrival: 12:45 PM</div>
                </div>
                <div>
                  <MapPinIcon className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Book Ticket</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-semibold">Route 3</div>
                  <div className="text-muted-foreground">Departure: 3:00 PM | Arrival: 4:45 PM</div>
                </div>
                <div>
                  <MapPinIcon className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Book Ticket</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  )
}

function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}