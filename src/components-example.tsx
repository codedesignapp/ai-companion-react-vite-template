/**
 * Example: Using extracted Flowbite React components
 * 
 * Instead of importing from "flowbite-react", you can now import
 * directly from your local components directory.
 */

// Option 1: Import individual components
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { DarkThemeToggle } from "./components/DarkThemeToggle";

// Option 2: Import from the index file (all components)
// import { Button, Card, Modal, Alert, Badge } from "./components";

export function ExampleComponent() {
  return (
    <div className="p-4">
      <DarkThemeToggle />
      
      <Card className="max-w-sm mt-4">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Example Card
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          This card uses components extracted from flowbite-react.
        </p>
        <Button>Click me</Button>
      </Card>
    </div>
  );
}

