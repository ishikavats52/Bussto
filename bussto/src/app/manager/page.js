/**
 * v0 by Vercel.
 * @see https://v0.dev/t/bYHKJSxbMyQ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <h1 className="text-2xl font-bold">Bus Management</h1>
      </header>
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <section>
          <h2 className="text-xl font-bold mb-4">Assign Tasks to Drivers</h2>
          <div className="bg-background rounded-lg shadow p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="driver" className="block text-sm font-medium text-muted-foreground">
                  Driver
                </label>
                <select
                  id="driver"
                  className="block w-full rounded-md border-input bg-background px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option>Select a driver</option>
                  <option>John Doe</option>
                  <option>Jane Smith</option>
                  <option>Bob Johnson</option>
                </select>
              </div>
              <div>
                <label htmlFor="task" className="block text-sm font-medium text-muted-foreground">
                  Task
                </label>
                <input
                  type="text"
                  id="task"
                  className="block w-full rounded-md border-input bg-background px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Enter task details"
                />
              </div>
            </div>
            <Button>Assign Task</Button>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-4">Assign Routes to Buses</h2>
          <div className="bg-background rounded-lg shadow p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="bus" className="block text-sm font-medium text-muted-foreground">
                  Bus
                </label>
                <select
                  id="bus"
                  className="block w-full rounded-md border-input bg-background px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option>Select a bus</option>
                  <option>Bus 1</option>
                  <option>Bus 2</option>
                  <option>Bus 3</option>
                </select>
              </div>
              <div>
                <label htmlFor="route" className="block text-sm font-medium text-muted-foreground">
                  Route
                </label>
                <input
                  type="text"
                  id="route"
                  className="block w-full rounded-md border-input bg-background px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Enter route details"
                />
              </div>
            </div>
            <Button>Assign Route</Button>
          </div>
        </section>
      </main>
      <section className="bg-muted p-6">
        <h2 className="text-xl font-bold mb-4">Current Assignments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-background rounded-lg shadow p-4">
            <h3 className="text-lg font-bold mb-2">Driver Assignments</h3>
            <ul className="space-y-2">
              <li>
                <div className="flex justify-between">
                  <span>John Doe</span>
                  <span>Pick up supplies</span>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  <span>Jane Smith</span>
                  <span>Deliver packages</span>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  <span>Bob Johnson</span>
                  <span>Maintenance run</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-background rounded-lg shadow p-4">
            <h3 className="text-lg font-bold mb-2">Bus Assignments</h3>
            <ul className="space-y-2">
              <li>
                <div className="flex justify-between">
                  <span>Bus 1</span>
                  <span>Route A</span>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  <span>Bus 2</span>
                  <span>Route B</span>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  <span>Bus 3</span>
                  <span>Route C</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <Button>Save Assignments</Button>
        </div>
      </section>
    </div>
  )
}