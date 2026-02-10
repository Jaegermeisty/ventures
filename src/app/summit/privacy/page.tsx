import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Summit: Workout Tracker",
  description:
    "Privacy Policy for Summit: Workout Tracker by Jaeger-Pedersen Ventures.",
  robots: { index: false, follow: false },
};

export default function SummitPrivacyPolicy() {
  return (
    <div className="min-h-screen" style={{ background: "#1C1C1E" }}>
      {/* Subtle radial vignette */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(255,149,0,0.06) 0%, transparent 60%)",
        }}
      />

      <main className="relative mx-auto max-w-3xl px-6 py-16 sm:py-24">
        {/* Header */}
        <header className="mb-12 text-center">
          <p
            className="mb-4 text-sm font-semibold uppercase tracking-[0.2em]"
            style={{ color: "#FF9500" }}
          >
            Summit: Workout Tracker
          </p>
          <h1
            className="font-display text-4xl font-bold leading-tight sm:text-5xl"
            style={{ color: "#FFFFFF" }}
          >
            Privacy Policy
          </h1>
          <p className="mt-4 text-base" style={{ color: "#8E8E93" }}>
            Effective Date: February 10, 2026
          </p>
        </header>

        {/* Intro */}
        <section
          className="mb-8 rounded-2xl border p-6 sm:p-8"
          style={{
            backgroundColor: "rgba(255,255,255,0.04)",
            borderColor: "rgba(255,255,255,0.08)",
          }}
        >
          <p
            className="font-body text-base leading-relaxed sm:text-lg"
            style={{ color: "#D1D1D6" }}
          >
            Jaeger&#8209;Pedersen Ventures (&ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the Summit:
            Workout Tracker app (the &ldquo;App&rdquo;). This Privacy Policy
            explains how we handle your information.
          </p>
        </section>

        {/* Policy Sections */}
        <div className="space-y-6">
          <PolicyCard number={1} title="Information We Collect">
            <p>
              The App does not require an account and does not collect personal
              information from you directly.
            </p>
            <p className="mt-4">
              The App stores the workout data you enter, such as:
            </p>
            <ul className="mt-3 list-none space-y-2 pl-0">
              <li className="flex items-start gap-3">
                <span
                  className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: "#FF9500" }}
                />
                Workout plans, phases, and exercises
              </li>
              <li className="flex items-start gap-3">
                <span
                  className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: "#FF9500" }}
                />
                Workout sessions and logs
              </li>
              <li className="flex items-start gap-3">
                <span
                  className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: "#FF9500" }}
                />
                Weights, reps, and notes you record
              </li>
            </ul>
            <p className="mt-4">
              All of this data is stored locally on your device.
            </p>
          </PolicyCard>

          <PolicyCard number={2} title="Data Storage and Backups">
            <p>
              Your data stays on your device. We do not operate any servers for
              storing your workout data.
            </p>
            <p className="mt-4">
              If you enable device backups (iCloud or Finder/iTunes), Apple may
              include the App&apos;s local data in those backups. We do not
              control or access those backups.
            </p>
          </PolicyCard>

          <PolicyCard number={3} title="Analytics and Tracking">
            <p>
              We do not use third&#8209;party analytics or tracking tools.
            </p>
            <p className="mt-4">
              We do not sell your data, and we do not share your data with
              advertisers.
            </p>
          </PolicyCard>

          <PolicyCard number={4} title="In‑App Purchases">
            <p>
              The App offers a one&#8209;time in&#8209;app purchase
              (&ldquo;Pro&rdquo;) processed by Apple. We do not receive your
              payment details. Apple may collect and process purchase information
              according to their own policies.
            </p>
          </PolicyCard>

          <PolicyCard number={5} title="Sharing of Information">
            <p>
              We do not share your personal data with third parties.
            </p>
          </PolicyCard>

          <PolicyCard number={6} title="Data Retention">
            <p>
              Your workout data remains on your device until you delete the App
              or remove the data.
            </p>
          </PolicyCard>

          <PolicyCard number={7} title="Children's Privacy">
            <p>
              The App is not directed to children under 13, and we do not
              knowingly collect personal information from children.
            </p>
          </PolicyCard>

          <PolicyCard number={8} title="Changes to This Policy">
            <p>
              We may update this policy over time. If we make changes, we will
              update the &ldquo;Effective Date.&rdquo;
            </p>
          </PolicyCard>

          <PolicyCard number={9} title="Contact Us">
            <p>
              If you have questions about this policy, contact us at:
            </p>
            <div className="mt-4 space-y-1">
              <p>
                <a
                  href="mailto:mathias.jpventures@gmail.com"
                  className="underline underline-offset-4 transition-colors hover:opacity-80"
                  style={{ color: "#FF9500" }}
                >
                  mathias.jpventures@gmail.com
                </a>
              </p>
              <p>Jaeger&#8209;Pedersen Ventures, Stavanger, Norway</p>
            </div>
          </PolicyCard>
        </div>

        {/* Footer */}
        <footer
          className="mt-16 border-t pt-8 text-center text-sm"
          style={{ borderColor: "rgba(255,255,255,0.08)", color: "#8E8E93" }}
        >
          <p>&copy; {new Date().getFullYear()} Jaeger&#8209;Pedersen Ventures. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

function PolicyCard({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className="rounded-2xl border p-6 sm:p-8"
      style={{
        backgroundColor: "rgba(255,255,255,0.04)",
        borderColor: "rgba(255,255,255,0.08)",
      }}
    >
      <h2
        className="font-display mb-4 text-xl font-semibold sm:text-2xl"
        style={{ color: "#FFFFFF" }}
      >
        <span style={{ color: "#FF9500" }}>{number}.</span> {title}
      </h2>
      <div
        className="font-body text-base leading-relaxed"
        style={{ color: "#D1D1D6" }}
      >
        {children}
      </div>
    </section>
  );
}
