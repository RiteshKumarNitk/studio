import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen w-full flex-col  bg-background">
      <Header />
      <main className="flex-1 py-16 sm:py-20 md:py-24 ">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="space-y-2 text-center">
              <h1 className="font-headline text-3xl font-bold tracking-tighter text-text-primary sm:text-4xl md:text-5xl">
                Privacy Policy – Bubble Drive
              </h1>
              <p className="text-muted-foreground">
                Bubble Drive respects your privacy and is committed to protecting your personal data.
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                This Privacy Policy explains how we collect, use, and safeguard your information when you use our doorstep car washing and cleaning services or interact with our website.
              </p>

              <h2 className="text-2xl font-bold text-text-primary">1. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul>
                <li>
                  <strong>Personal Information:</strong> Name, phone number, email address, residential or workplace address (for service delivery), and payment details.
                </li>
                <li>
                  <strong>Service Information:</strong> Vehicle details (make, model, registration number), service preferences, and booking history.
                </li>
                <li>
                  <strong>Technical Information:</strong> IP address, browser type, device details, and cookies to improve website performance.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-text-primary">2. How We Use Your Information</h2>
              <p>Your information is used for the following purposes:</p>
              <ul>
                <li>To process and confirm your bookings.</li>
                <li>To deliver doorstep car washing and cleaning services.</li>
                <li>To communicate with you regarding services, offers, and updates.</li>
                <li>To improve our website, services, and customer experience.</li>
                <li>To comply with legal and regulatory requirements.</li>
              </ul>

              <h2 className="text-2xl font-bold text-text-primary">3. Sharing of Information</h2>
              <p>We do not sell or rent your personal data. However, we may share information in the following cases:</p>
              <ul>
                <li>
                  <strong>Service Providers:</strong> With trusted partners who assist us in service delivery, payment processing, or marketing.
                </li>
                <li>
                  <strong>Legal Obligations:</strong> When required by law, government authorities, or legal processes.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In case of merger, acquisition, or restructuring of Bubble Drive.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-text-primary">4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to safeguard your personal information against unauthorized access, disclosure, or misuse. However, no electronic transmission or storage is 100% secure.
              </p>

              <h2 className="text-2xl font-bold text-text-primary">5. Your Rights</h2>
              <p>As a user, you have the right to:</p>
              <ul>
                <li>Access the personal data we hold about you.</li>
                <li>Request correction of inaccurate or incomplete information.</li>
                <li>Request deletion of your personal data (subject to legal obligations).</li>
                <li>Opt out of promotional communications at any time.</li>
              </ul>

              <h2 className="text-2xl font-bold text-text-primary">6. Cookies & Tracking</h2>
              <p>
                Our website may use cookies and similar technologies to enhance user experience and analyze website traffic. You can control or disable cookies through your browser settings.
              </p>

              <h2 className="text-2xl font-bold text-text-primary">7. Third-Party Links</h2>
              <p>
                Our website may include links to third-party sites. We are not responsible for their privacy practices, so we encourage you to review their policies.
              </p>

              <h2 className="text-2xl font-bold text-text-primary">8. Children’s Privacy</h2>
              <p>
                Our services are not directed towards individuals under the age of 18. We do not knowingly collect personal data from children.
              </p>

              <h2 className="text-2xl font-bold text-text-primary">9. Updates to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date.
              </p>

              <h2 className="text-2xl font-bold text-text-primary">10. Contact Us</h2>
              <p>For questions or concerns regarding this Privacy Policy, please contact us at:</p>
              <p>
                <strong>Bubble Drive</strong>
                <br />
                Email: <a href="mailto:bubbledriveofficial@gmail.com">bubbledriveofficial@gmail.com</a>
                <br />
                Phone: 9461603054
                <br />
                Address: [Insert Address]
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
