import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <main className="flex flex-col items-center gap-8 text-center px-8">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Welcome to Localise with Lingo
        </h1>
        <Button size="lg">Explore</Button>
      </main>
    </div>
  );
}
