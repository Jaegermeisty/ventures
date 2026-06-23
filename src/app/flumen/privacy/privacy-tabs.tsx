"use client";

import { KeyboardEvent, ReactNode, useState } from "react";

type Tab = "privacy" | "support";

const colors = {
  background: "#FAF9F6",
  ink: "#18342B",
  body: "#385047",
  muted: "#6E7B75",
  accent: "#1B4D3E",
  panel: "#FFFDF8",
  border: "rgba(27, 77, 62, 0.16)",
  soft: "rgba(27, 77, 62, 0.08)",
  focus: "rgba(27, 77, 62, 0.35)",
};

const supportEmail = "mathias.jpventures@gmail.com";

export default function PrivacyTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("privacy");

  const onTabKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
      return;
    }

    event.preventDefault();
    setActiveTab((current) => (current === "privacy" ? "support" : "privacy"));
  };

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: colors.background,
        color: colors.body,
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      <main className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
        <header className="mx-auto max-w-3xl text-center">
          <p
            className="mb-4 text-sm font-semibold uppercase tracking-[0.18em]"
            style={{ color: colors.accent }}
          >
            Flumen
          </p>
          <h1
            className="text-4xl font-semibold leading-tight sm:text-5xl"
            style={{
              color: colors.ink,
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            Privacy &amp; Support
          </h1>
          <p
            className="mx-auto mt-5 max-w-2xl text-base leading-8 sm:text-lg"
            style={{ color: colors.muted }}
          >
            Clear information about how Flumen handles your reading data, plus a
            simple way to get help.
          </p>

          <div
            className="mx-auto mt-8 grid w-full max-w-md grid-cols-2 gap-1 rounded-lg border p-1"
            role="tablist"
            aria-label="Privacy and support sections"
            onKeyDown={onTabKeyDown}
            style={{
              backgroundColor: colors.soft,
              borderColor: colors.border,
            }}
          >
            <TabButton
              id="privacy-tab"
              controls="privacy-panel"
              active={activeTab === "privacy"}
              onClick={() => setActiveTab("privacy")}
            >
              Privacy Policy
            </TabButton>
            <TabButton
              id="support-tab"
              controls="support-panel"
              active={activeTab === "support"}
              onClick={() => setActiveTab("support")}
            >
              Support
            </TabButton>
          </div>
        </header>

        <div className="mx-auto mt-10 max-w-4xl sm:mt-12">
          {activeTab === "privacy" ? <PrivacyContent /> : <SupportContent />}
        </div>

        <footer
          className="mx-auto mt-14 max-w-4xl border-t pt-8 text-center text-sm leading-7"
          style={{ borderColor: colors.border, color: colors.muted }}
        >
          <p>© 2026 Jæger-Pedersen Ventures</p>
          <p>
            <a
              href={`mailto:${supportEmail}`}
              className="rounded-sm underline underline-offset-4 transition-opacity hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
              style={{ color: colors.accent, outlineColor: colors.focus }}
            >
              {supportEmail}
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}

function TabButton({
  id,
  controls,
  active,
  onClick,
  children,
}: {
  id: string;
  controls: string;
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      id={id}
      role="tab"
      type="button"
      aria-selected={active}
      aria-controls={controls}
      tabIndex={active ? 0 : -1}
      onClick={onClick}
      className="rounded-md px-3 py-3 text-sm font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:px-5"
      style={{
        backgroundColor: active ? colors.accent : "transparent",
        color: active ? colors.background : colors.accent,
        boxShadow: active ? "0 8px 20px rgba(27, 77, 62, 0.14)" : "none",
        outlineColor: colors.focus,
      }}
    >
      {children}
    </button>
  );
}

function PrivacyContent() {
  return (
    <section
      id="privacy-panel"
      role="tabpanel"
      aria-labelledby="privacy-tab"
      className="space-y-6"
    >
      <IntroPanel
        title="Privacy Policy"
        eyebrow="Effective Date: June 23, 2026"
      >
        Flumen is designed to keep your reading private. This policy explains
        what stays on your device, when network services may be contacted, and
        how to reach us with questions.
      </IntroPanel>

      <PolicyCard title="Overview">
        <p>
          Flumen is a premium EPUB reader for iPhone, iPad, and Mac. It is built
          around a simple privacy principle: your reading life should stay yours.
        </p>
        <p>
          Flumen does not sell personal information, does not use third-party
          advertising, and does not use analytics SDKs to track app usage.
        </p>
      </PolicyCard>

      <PolicyCard title="Information Stored On Your Device">
        <p>
          Flumen stores your reading library and app data locally on your
          device. This may include imported or downloaded books, book metadata,
          reading progress, reading time, streaks, statistics, reader settings,
          highlights, notes, collections, notification preferences, and reminder
          time.
        </p>
        <p>
          This information is used to provide the reading experience inside the
          app, including your library, saved places, organization, reminders,
          goals, and reading history.
        </p>
      </PolicyCard>

      <PolicyCard title="iCloud Sync">
        <p>
          Flumen Pro may use Apple&apos;s private iCloud and CloudKit services
          to sync reading data across your Apple devices. Synced data may include
          library data, reading progress, notes, highlights, collections,
          settings, statistics, EPUB files, and cover files.
        </p>
        <p>
          Jæger-Pedersen Ventures does not operate a separate sync server for
          Flumen and does not access your private iCloud account. iCloud is
          provided by Apple and is controlled through your Apple account and
          device settings.
        </p>
      </PolicyCard>

      <PolicyCard title="Book Discovery And Downloads">
        <p>
          When you use Flumen&apos;s discovery, search, or download features, the
          app may contact public-domain book services such as Project Gutenberg,
          Gutendex, and Standard Ebooks.
        </p>
        <p>
          Those services may receive normal network request information, such as
          your IP address, search terms, author or genre queries, metadata
          requests, and book download URLs. Their handling of this information is
          governed by their own policies and systems.
        </p>
      </PolicyCard>

      <PolicyCard title="Notifications">
        <p>
          Flumen may offer optional local notifications, such as reading
          reminders or reflections. Notification preferences are stored locally
          on your device.
        </p>
        <p>
          You can turn notifications off in Flumen or in your device&apos;s
          system settings at any time.
        </p>
      </PolicyCard>

      <PolicyCard title="Purchases">
        <p>
          Flumen Pro purchases are processed by Apple through the App Store.
          Jæger-Pedersen Ventures does not receive your full card number or
          payment details.
        </p>
        <p>
          Flumen may store local purchase status so the app can unlock Pro
          features on your device.
        </p>
      </PolicyCard>

      <PolicyCard title="Contacting Support">
        <p>
          If you email support, we receive your email address and any information
          you choose to include in the message. We use that information only to
          respond to you, troubleshoot issues, and provide support.
        </p>
      </PolicyCard>

      <PolicyCard title="Data Sharing">
        <p>
          Flumen does not sell personal information and does not share your local
          reading data with advertisers or analytics providers.
        </p>
        <p>
          Limited request information is shared with public book sources only
          when needed for search, discovery, metadata, or downloads. Information
          may also be disclosed if legally required.
        </p>
      </PolicyCard>

      <PolicyCard title="Tracking And Advertising">
        <p>
          Flumen does not use third-party advertising and does not track you
          across other companies&apos; apps or websites.
        </p>
      </PolicyCard>

      <PolicyCard title="Children">
        <p>
          Flumen is not designed to knowingly collect personal information from
          children.
        </p>
      </PolicyCard>

      <PolicyCard title="User Choices">
        <p>You can control your Flumen data and settings in several ways:</p>
        <BulletList
          items={[
            "Delete app content inside Flumen where those controls are available.",
            "Disable notifications in Flumen or in system settings.",
            "Control iCloud and CloudKit access through Apple settings.",
            "Delete the app to remove locally stored app data from your device, subject to Apple backup and iCloud behavior.",
            "Contact support with privacy questions or data-related requests.",
          ]}
        />
      </PolicyCard>

      <PolicyCard title="Security">
        <p>
          Flumen is designed to keep reading data local whenever possible and to
          rely on Apple&apos;s iCloud infrastructure when sync is enabled.
          However, no app, device, account, network transmission, or storage
          system can be guaranteed completely secure.
        </p>
      </PolicyCard>

      <PolicyCard title="Changes To This Policy">
        <p>
          We may update this policy from time to time. When we make updates, we
          will change the effective date shown at the top of this page.
        </p>
      </PolicyCard>

      <PolicyCard title="Contact">
        <p>Jæger-Pedersen Ventures</p>
        <p>
          <a
            href={`mailto:${supportEmail}`}
            className="rounded-sm underline underline-offset-4 transition-opacity hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
            style={{ color: colors.accent, outlineColor: colors.focus }}
          >
            {supportEmail}
          </a>
        </p>
      </PolicyCard>
    </section>
  );
}

function SupportContent() {
  return (
    <section
      id="support-panel"
      role="tabpanel"
      aria-labelledby="support-tab"
      className="space-y-6"
    >
      <IntroPanel title="Support" eyebrow="We are here to help">
        Email support for help with bugs, purchases, iCloud sync, importing
        EPUBs, downloads, reading progress, or privacy questions.
      </IntroPanel>

      <section
        className="rounded-lg border p-6 shadow-sm sm:p-8"
        style={{
          backgroundColor: colors.panel,
          borderColor: colors.border,
          boxShadow: "0 12px 32px rgba(27, 77, 62, 0.08)",
        }}
      >
        <h2
          className="text-2xl font-semibold leading-tight sm:text-3xl"
          style={{
            color: colors.ink,
            fontFamily: "Georgia, 'Times New Roman', serif",
          }}
        >
          Get Support
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-8">
          The fastest way to get help is to send a short email with what you
          were trying to do and what happened.
        </p>
        <a
          href={`mailto:${supportEmail}`}
          className="mt-6 inline-flex rounded-md px-5 py-3 text-sm font-semibold transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
          style={{
            backgroundColor: colors.accent,
            color: colors.background,
            outlineColor: colors.focus,
          }}
        >
          Email Support
        </a>
      </section>

      <PolicyCard title="Helpful Details To Include">
        <p>
          A few details can make troubleshooting much faster. Include whatever
          you have available:
        </p>
        <BulletList
          items={[
            "Device type, such as iPhone, iPad, or Mac.",
            "iOS, iPadOS, or macOS version.",
            "Flumen version, if known.",
            "What happened and what you expected to happen.",
            "Steps to reproduce the issue.",
            "Screenshots or screen recordings, if helpful.",
          ]}
        />
      </PolicyCard>

      <PolicyCard title="Purchases And Refunds">
        <p>
          App Store purchases and refunds are handled by Apple. You can still
          contact support if Flumen Pro does not unlock correctly, and we will
          help troubleshoot the app side of the issue.
        </p>
      </PolicyCard>

      <PolicyCard title="iCloud Sync">
        <p>
          If iCloud sync is not working as expected, check that you are signed
          into iCloud on each device and that iCloud is enabled for Flumen in
          Apple settings.
        </p>
      </PolicyCard>
    </section>
  );
}

function IntroPanel({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow: string;
  children: ReactNode;
}) {
  return (
    <section
      className="rounded-lg border p-6 sm:p-8"
      style={{
        backgroundColor: colors.panel,
        borderColor: colors.border,
        boxShadow: "0 10px 28px rgba(27, 77, 62, 0.06)",
      }}
    >
      <p
        className="mb-3 text-xs font-semibold uppercase tracking-[0.16em]"
        style={{ color: colors.accent }}
      >
        {eyebrow}
      </p>
      <h2
        className="text-3xl font-semibold leading-tight sm:text-4xl"
        style={{
          color: colors.ink,
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 sm:text-lg" style={{ color: colors.body }}>
        {children}
      </p>
    </section>
  );
}

function PolicyCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section
      className="rounded-lg border p-6 sm:p-8"
      style={{
        backgroundColor: colors.panel,
        borderColor: colors.border,
      }}
    >
      <h2
        className="text-2xl font-semibold leading-tight"
        style={{
          color: colors.ink,
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        {title}
      </h2>
      <div
        className="mt-4 space-y-4 text-base leading-8"
        style={{ color: colors.body }}
      >
        {children}
      </div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden="true"
            className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full"
            style={{ backgroundColor: colors.accent }}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
