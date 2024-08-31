import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"

function Navbar() {
  return (
    <div>
      <header className="flex items-center justify-between px-6 py-4 bg-primary text-primary-foreground sm:px-8 md:px-10">
        <Link href="#" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
          {/* <BusIcon className="w-6 h-6" /> */}
          <span className="text-7xl">BusSto</span>
        </Link>
        <nav className="items-center hidden gap-6 md:flex">
          <Link href="/passanger" className="hover:underline underline-offset-4" prefetch={false}>
            Passenger
          </Link>
          <Link href="/manager" className="hover:underline underline-offset-4" prefetch={false}>
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
                {/* <MenuIcon className="w-6 h-6" /> */}
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
    </div>
  )
}

export default Navbar;
