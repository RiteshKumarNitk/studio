import { Sparkles } from 'lucide-react';

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background text-foreground">
      <div className="flex items-center gap-4">
        <Sparkles className="h-12 w-12 animate-pulse text-icon-primary" />
        <span className="font-headline text-4xl font-bold">Bubble Drive</span>
      </div>
      <div className="mt-8 h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
    </div>
  );
}
