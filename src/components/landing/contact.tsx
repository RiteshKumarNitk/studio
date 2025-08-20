import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="w-full relative overflow-hidden">
        <div className="absolute top-0 left-0 -z-10 h-full w-full bg-white [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"></div>
        <div className="absolute bottom-0 right-0 -z-10 h-full w-full bg-blue-50 [mask-image:radial-gradient(100%_100%_at_bottom_left,white,transparent)]"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-xl space-y-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Let's Talk!</h2>
          <p className="text-muted-foreground md:text-xl">
            Have questions or want a custom plan? We'd love to hear from you.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-lg">
          <Card className="shadow-lg rounded-2xl">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>We will get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message..." rows={4} />
                </div>
                <Button type="submit" size="lg" className="w-full font-bold">Chat With Us Now</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
