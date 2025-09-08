
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';

export default function TermsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1 py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="space-y-2 text-center">
              <h1 className="font-headline text-3xl font-bold tracking-tighter text-text-primary sm:text-4xl md:text-5xl">
                Terms & Conditions
              </h1>
              <p className="text-muted-foreground">
                Please read these terms and conditions carefully before using Our Service.
              </p>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <h2 className="text-2xl font-bold text-text-primary">1. Our Services</h2>
                <p>
                    Bubble Drive provides mobile car wash services at your specified location. By booking a service with us, you agree to provide a safe and legal parking space for our team to perform the services. 
                </p>

                <h2 className="text-2xl font-bold text-text-primary">2. Bookings and Payments</h2>
                <p>
                    All bookings must be made through our official channels. Payments are due upon completion of the service. We accept various forms of payment, which will be communicated at the time of booking.
                </p>

                <h2 className="text-2xl font-bold text-text-primary">3. Cancellations and Rescheduling</h2>
                <p>
                    If you need to cancel or reschedule your appointment, please provide at least 24 hours notice. Cancellations made with less than 24 hours notice may be subject to a cancellation fee.
                </p>

                <h2 className="text-2xl font-bold text-text-primary">4. Customer Satisfaction</h2>
                <p>
                    We strive for 100% customer satisfaction. If you are not satisfied with our service, please contact us within 24 hours, and we will address your concerns.
                </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
