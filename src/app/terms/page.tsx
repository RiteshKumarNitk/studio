import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";

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
                Please read these terms and conditions carefully before using
                Our Service.
              </p>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <h2 className="text-2xl font-bold text-text-primary">
                1. Service Definition
              </h2>
              <p>
                Our standard service includes exterior car body wash with water
                and shampoo followed by microfiber wiping. Interior cleaning,
                tire polish, and engine bay cleaning are not included unless
                purchased as an add-on.
              </p>

              <h2 className="text-2xl font-bold text-text-primary">
                2. Subscription Plans & Validity
              </h2>
              <p>
                All plans are valid for 30 calendar days from the start date. 2
                week plans include a total of 14 washes.
              </p>

              <h2 className="text-2xl font-bold text-text-primary">
                3. Fixed Time Slot Commitment
              </h2>
              <p>
                Customer agrees to make their car accessible daily during the
                selected slot. Missed access will be considered a completed
                service.
              </p>

              <h2 className="text-2xl font-bold text-text-primary">
                4. Car Accessibility Clause
              </h2>
              <p>
                It is the customer’s responsibility to ensure car availability
                and parking access. If the car is locked or inaccessible, the
                service for that day is marked completed.
              </p>

              <h2 className="text-2xl font-bold text-text-primary">
                5. Out-of-Town / Vacation Pause
              </h2>
              <p>
                Customers can pause the service up to 5 days per month with
                24-hour prior notice. These days can be adjusted in the next
                month if eligible.
              </p>

              <h2 className="text-2xl font-bold text-text-primary">
                6. Subscription Cancellation Policy
              </h2>
              <p>
                No refunds after service start. In case of permanent relocation,
                a carry-forward or transfer to a different area may be allowed
                with 7-day notice.
              </p>

              <h2 className="text-2xl font-bold text-text-primary">
                7. Advance Payment Policy
              </h2>
              <p>
                All subscriptions must be paid in advance. Non-payment results
                in automatic suspension of service.
              </p>

              <h2 className="text-2xl font-bold text-text-primary">
                8. Missed Service by Worker
              </h2>
              <p>
                If our worker misses a wash due to operational error, the wash
                will be compensated within 48 hours or added to the next billing
                cycle.
              </p>

              <h2 className="text-2xl font-bold text-text-primary">
                9. Direct Worker Deal Prohibition
              </h2>
              <p>
                Customers are strictly prohibited from hiring our staff directly
                or offering private jobs. Doing so may lead to permanent
                suspension of service.
              </p>

              <h2 className="text-2xl font-bold text-text-primary">
                10. Abuse or Misconduct Clause
              </h2>
              <p>
                Any abusive language, threats, or misconduct toward our team
                will result in immediate suspension of services. We maintain a
                zero-tolerance policy.
              </p>

              <h2 className="text-2xl font-bold text-text-primary">
                11. Damage & Liability Disclaimer
              </h2>
              <p>
                Bubble Drive is not responsible for any damage due to loose
                parts, prior wear-and-tear or poor maintenance. We take utmost
                care, but services involve water and chemicals that may affect
                old or damaged areas.
              </p>

              <h2 className="text-2xl font-bold text-text-primary">
                12. Bad Weather & Emergency Policy
              </h2>
              <p>
                In case of rain, extreme weather, strikes or other emergencies,
                services may be rescheduled without refund. We will notify
                customers via SMS/WhatsApp.
              </p>

              <h2 className="text-2xl font-bold text-text-primary">
                13. Customer Support Process
              </h2>
              <p>
                All issues must be reported within the same day for resolution.
                Complaints older than 24 hours may not be eligible for
                compensation.
              </p>

              <h2 className="text-2xl font-bold text-text-primary">
                14. Photo / Check-in Proof
              </h2>
              <p>
                Workers may take before/after photos or GPS check-ins to confirm
                service completion.
              </p>

              <h2 className="text-2xl font-bold text-text-primary">
                15. Feedback Collection
              </h2>
              <p>
                We may request feedback or ratings via WhatsApp/SMS to improve
                service quality.
              </p>

              <h2 className="text-2xl font-bold text-text-primary">
                16. Copyright & Brand Protection
              </h2>
              <p>
                Bubble Drive™ name, logo, and material are protected.
                Unauthorized usage or duplication will result in legal action.
              </p>

              <h2 className="text-2xl font-bold text-text-primary">
                17. Multiple Car Policy
              </h2>
              <p>
                Each car must have a separate subscription unless enrolled under
                a verified family pack. Shared subscriptions are not allowed.
              </p>

              <h2 className="text-2xl font-bold text-text-primary">
                18. Add-On Services Clause
              </h2>
              <p>
                Add-ons like one deep cleaning are available for extra charges
                and require advance booking.
              </p>

              <h2 className="text-2xl font-bold text-text-primary">
                19. Items Left in Car
              </h2>
              <p>
                We are not responsible for valuables or personal items left
                inside the vehicle. Please remove them prior to service.
              </p>

              <h2 className="text-2xl font-bold text-text-primary">
                20. Excessive Pause / Hold Policy
              </h2>
              <p>
                Customers may pause their subscription for up to 5 days in a
                month. These paused days will be adjusted and added to the
                subscription period. If the service is paused for 7 or more days
                in a month, the subscription will continue as per the original
                schedule without any extra days being added.
              </p>

              <h2 className="text-2xl font-bold text-text-primary">
                21. Tax Policy (Future-Ready)
              </h2>
              <p>
                Prices are currently inclusive of taxes. GST may be added in the
                future as per legal requirements.
              </p>

              <h2 className="text-2xl font-bold text-text-primary">
                22. Location Limits
              </h2>
              <p>Service is only available within covered areas of Jaipur.</p>

              <h2 className="text-2xl font-bold text-text-primary">
                23. Legal Jurisdiction
              </h2>
              <p>
                All legal matters will fall under the jurisdiction of Jaipur
                district courts.
              </p>

              <h2 className="text-2xl font-bold text-text-primary">
                24. Item Availability
              </h2>
              <p>
                Please ensure access to electricity and water connections near
                your vehicle for effective service.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
