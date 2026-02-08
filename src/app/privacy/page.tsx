export default function PrivacyPage() {
  return (
    <div className="min-h-screen theme-bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold theme-text-primary mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 theme-text-secondary">
            <section>
              <h2 className="text-2xl font-bold theme-text-primary mb-4">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you create an account,
                fill out a form, or communicate with us. This may include your name, email address,
                phone number, and other contact information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold theme-text-primary mb-4">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services,
                to communicate with you, and to comply with legal obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold theme-text-primary mb-4">3. Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personally identifiable information
                to third parties without your consent, except as described in this privacy policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold theme-text-primary mb-4">4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your
                personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold theme-text-primary mb-4">5. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at
                support@scientistshub.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
