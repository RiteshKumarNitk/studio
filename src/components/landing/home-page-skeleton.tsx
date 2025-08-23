import { Skeleton } from "@/components/ui/skeleton";

export default function HomePageSkeleton() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Skeleton className="h-8 w-48" />
          <div className="hidden md:flex gap-6">
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-6 w-20" />
          </div>
          <Skeleton className="hidden md:block h-11 w-48 rounded-md" />
          <Skeleton className="md:hidden h-10 w-10" />
        </div>
      </header>
      <main className="flex-1">
        <section className="h-[80vh] flex items-center justify-center text-center">
            <div className="space-y-6">
                <Skeleton className="h-16 w-[600px] mx-auto" />
                <Skeleton className="h-8 w-[400px] mx-auto" />
                <Skeleton className="h-14 w-64 mx-auto rounded-full" />
            </div>
        </section>
        <section className="py-24 bg-secondary">
            <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-4">
                    <Skeleton className="h-12 w-80" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-6 w-3/4" />
                </div>
                <Skeleton className="aspect-video w-full rounded-2xl" />
            </div>
        </section>
        <section className="py-24">
             <div className="container mx-auto text-center">
                <Skeleton className="h-12 w-1/2 mx-auto mb-4" />
                <Skeleton className="h-8 w-2/3 mx-auto" />
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    <Skeleton className="h-56 w-full rounded-2xl" />
                    <Skeleton className="h-56 w-full rounded-2xl" />
                    <Skeleton className="h-56 w-full rounded-2xl" />
                </div>
             </div>
        </section>
      </main>
      <footer className="bg-foreground text-background">
        <div className="container mx-auto py-12">
            <Skeleton className="h-24 w-full" />
        </div>
      </footer>
    </div>
  );
}
