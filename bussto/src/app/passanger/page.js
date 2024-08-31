/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Fzdx2cv7Iak
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
     
      <main className="flex-1 bg-muted py-10 px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-background rounded-lg shadow-lg p-6 md:p-10">
          <h1 className="text-2xl font-bold mb-6">Find Your Bus Ticket</h1>
          <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="from">From</Label>
              <Input id="from" placeholder="Enter departure location" />
            </div>
            <div>
              <Label htmlFor="to">To</Label>
              <Input id="to" placeholder="Enter arrival location" />
            </div>
            <div>
              <Label htmlFor="date">Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full flex items-center justify-between">
                    <span>Select date</span>
                    <CalendarIcon className="w-5 h-5" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-4">
                  <Calendar />
                </PopoverContent>
              </Popover>
            </div>
            <Button type="submit" className="md:col-span-3">
              Search Buses
            </Button>
          </form>
        </div>
        <div className="max-w-4xl mx-auto mt-10">
          <h2 className="text-xl font-bold mb-4">Available Buses</h2>
          <div className="grid gap-4">
            <Card>
              <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <div className="font-bold">8:00 AM</div>
                  <div className="text-muted-foreground">Departure</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-bold">12:00 PM</div>
                  <div className="text-muted-foreground">Arrival</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-bold">4h</div>
                  <div className="text-muted-foreground">Duration</div>
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <div className="font-bold text-2xl">$25</div>
                <Button>Book Now</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <div className="font-bold">10:00 AM</div>
                  <div className="text-muted-foreground">Departure</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-bold">2:00 PM</div>
                  <div className="text-muted-foreground">Arrival</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-bold">4h</div>
                  <div className="text-muted-foreground">Duration</div>
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <div className="font-bold text-2xl">$30</div>
                <Button>Book Now</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <div className="font-bold">12:00 PM</div>
                  <div className="text-muted-foreground">Departure</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-bold">4:00 PM</div>
                  <div className="text-muted-foreground">Arrival</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-bold">4h</div>
                  <div className="text-muted-foreground">Duration</div>
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <div className="font-bold text-2xl">$35</div>
                <Button>Book Now</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <footer className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <div className="text-sm">&copy; 2024 BusTickets.com. All rights reserved.</div>
        <nav className="flex items-center gap-4">
          <Link href="#" className="hover:underline" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Contact Us
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function BusIcon(props) {
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
      <path d="M8 6v6" />
      <path d="M15 6v6" />
      <path d="M2 12h19.6" />
      <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" />
      <circle cx="7" cy="18" r="2" />
      <path d="M9 18h5" />
      <circle cx="16" cy="18" r="2" />
    </svg>
  )
}


function CalendarIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}