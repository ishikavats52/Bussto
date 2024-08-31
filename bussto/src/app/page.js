
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/YjQb4L1aSJd
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between px-6 py-4 bg-primary text-primary-foreground sm:px-8 md:px-10">
        <Link href="#" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
          <BusIcon className="w-6 h-6" />
          <span>Automated Scheduling</span>
        </Link>
        <nav className="items-center hidden gap-6 md:flex">
          <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
            Passenger
          </Link>
          <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
            Manager
          </Link>
          <Link href="/schedulebus" className="hover:underline underline-offset-4" prefetch={false}>
            Schedule
          </Link>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <MenuIcon className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 p-6 bg-background">
              <nav className="grid gap-4">
                <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
                  Passenger
                </Link>
                <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
                  Manager
                </Link>
                <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
                  Schedule
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 bg-muted md:py-16 lg:py-20">
          <div className="container px-4 md:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1fr_500px] items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Effortless Bus Scheduling
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  Our automated scheduling system takes the hassle out of managing bus routes and passenger bookings.
                </p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center h-10 px-6 text-sm font-medium transition-colors rounded-md shadow bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Book a Ride
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center h-10 px-6 text-sm font-medium transition-colors border rounded-md shadow-sm border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Manage Schedules
                  </Link>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width={500}
                height={400}
                alt="Automated Scheduling"
                className="mx-auto overflow-hidden rounded-xl"
                style={{ aspectRatio: "500/400", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CalendarIcon className="w-8 h-8 text-primary" />
                  <CardTitle>View Schedules</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Easily view bus schedules and plan your trips with our user-friendly interface.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-primary hover:underline" prefetch={false}>
                    Explore Schedules
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <TicketIcon className="w-8 h-8 text-primary" />
                  <CardTitle>Book Rides</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Secure your seat on the bus with our simple booking process.</p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-primary hover:underline" prefetch={false}>
                    Book a Ride
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <ClipboardIcon className="w-8 h-8 text-primary" />
                  <CardTitle>Manage Reservations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Keep track of your bookings and make changes as needed.</p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-primary hover:underline" prefetch={false}>
                    Manage Reservations
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <RouteIcon className="w-8 h-8 text-primary" />
                  <CardTitle>Schedule Routes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Easily create and manage bus routes and schedules.</p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-primary hover:underline" prefetch={false}>
                    Schedule Routes
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <InfoIcon className="w-8 h-8 text-primary" />
                  <CardTitle>Monitor Operations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Track key metrics and gain insights to optimize your bus operations.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-primary hover:underline" prefetch={false}>
                    View Analytics
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <UsersIcon className="w-8 h-8 text-primary" />
                  <CardTitle>Manage Passengers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Easily manage passenger data and reservations.</p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-primary hover:underline" prefetch={false}>
                    Manage Passengers
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="px-4 py-6 bg-muted md:px-6 lg:px-8">
        <div className="container flex items-center justify-between">
          <p className="text-sm text-muted-foreground">&copy; 2024 Automated Scheduling. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <Link href="#" className="text-sm hover:underline underline-offset-4" prefetch={false}>
              Privacy
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4" prefetch={false}>
              Terms
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4" prefetch={false}>
              Contact
            </Link>
          </nav>
        </div>
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


function ClipboardIcon(props) {
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  )
}


function InfoIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
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


function RouteIcon(props) {
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
      <circle cx="6" cy="19" r="3" />
      <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
      <circle cx="18" cy="5" r="3" />
    </svg>
  )
}


function TicketIcon(props) {
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
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2" />
      <path d="M13 17v2" />
      <path d="M13 11v2" />
    </svg>
  )
}


function UsersIcon(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

