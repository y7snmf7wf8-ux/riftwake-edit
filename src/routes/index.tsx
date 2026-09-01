import { createFileRoute } from "@tanstack/react-router";
import { EditPlayer } from "@/components/edit-player";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main className="min-h-dvh bg-bg">
      <EditPlayer />
    </main>
  );
}
