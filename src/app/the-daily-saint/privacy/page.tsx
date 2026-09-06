import type { Metadata } from "next";
import type { ReactNode } from "react";
import DailySaintTabs from "../daily-saint-tabs";
import styles from "../daily-saint.module.css";

const email = "mathias.jpventures@gmail.com";

export const metadata: Metadata = {
  title: "Privacy & Help — The Daily Saint",
  description: "Privacy Policy and help for The Daily Saint by Jæger-Pedersen Ventures.",
};

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return <section className={styles.section} id={id}><h2 className={styles.heading}>{title}</h2>{children}</section>;
}

function EmailLink() {
  return <a href={`mailto:${email}`}>{email}</a>;
}

function PrivacyContent() {
  return <>
    <nav className={styles.contents} aria-label="Privacy policy contents">
      <p className={styles.contentsLabel}>Contents</p>
      <ol className={styles.contentsList}>
        <li><a href="#responsible">Who is responsible for your information</a></li><li><a href="#on-device">Information kept on your device</a></li><li><a href="#notifications">Notifications</a></li><li><a href="#purchases">Optional support purchases</a></li><li><a href="#support">Contacting support</a></li><li><a href="#not-collected">Information we do not collect</a></li><li><a href="#sharing">Sharing</a></li><li><a href="#rights">Your rights</a></li><li><a href="#children">Children</a></li><li><a href="#changes">Changes to this policy</a></li><li><a href="#website-scope">Website scope</a></li>
      </ol>
    </nav>
    <Section id="responsible" title="Who is responsible for your information"><p>Jæger-Pedersen Ventures is the controller for personal information handled under this policy. You can contact us at <EmailLink />.</p></Section>
    <Section id="on-device" title="Information kept on your device"><p>The app keeps the following information locally on your device so its features work as you choose:</p><ul><li>your selected calendar;</li><li>whether daily reminders are enabled and the time you selected;</li><li>the date and calendar needed to open the correct reading after you tap a notification; and</li><li>the selected calendar shared with the app&apos;s Home Screen widget.</li></ul><p>This information stays on your device. The widget uses an Apple App Group solely to read the selected calendar from the app; it does not send that information to us. You can remove this local information by deleting the app. You can turn reminders off in the app or in iOS Settings.</p></Section>
    <Section id="notifications" title="Notifications"><p>If you allow notifications, the app schedules daily reminders locally on your device using the reading and calendar you selected. Notification permission is controlled by iOS. We do not receive notification tokens, notification content, or information about whether you opened a notification.</p></Section>
    <Section id="purchases" title="Optional support purchases"><p>The app offers optional, repeatable support purchases. They do not unlock any feature or content. Purchases are processed by Apple through StoreKit and your Apple ID. We do not receive or store your payment-card information, Apple ID, or payment details. Apple handles payment information under its own privacy policy.</p></Section>
    <Section id="support" title="Contacting support"><p>The app can open your email app with a pre-filled support email. If you choose to email us, we receive the information you include, such as your email address, message, and any diagnostic details you voluntarily provide. We use it only to answer your request, troubleshoot the app, and protect our legal rights where necessary. We do not use support messages for advertising or sell them to anyone.</p><p>We keep support correspondence only for as long as reasonably needed to handle the request and maintain relevant records, unless a longer period is required by law or necessary for a legal claim.</p></Section>
    <Section id="not-collected" title="Information we do not collect"><p>The app does not collect or transmit your name, contact list, location, health information, photos, browsing history, reading history, device identifier, usage data, or diagnostic data. It does not use third-party analytics, advertising SDKs, tracking technologies, or an app-operated backend.</p><p>The app includes optional links to external calendar-reference websites. Those sites are outside our control; their own privacy policies apply if you choose to visit them.</p></Section>
    <Section id="sharing" title="Sharing"><p>We do not sell, rent, share, or disclose personal information for advertising or tracking. The only external services involved when you choose to use them are Apple for App Store and StoreKit purchases, iOS for locally delivered notifications, your email provider when you email us, and any external website you choose to open.</p></Section>
    <Section id="rights" title="Your rights"><p>If we hold personal information about you through a support email, you may ask for access, correction, deletion, restriction, or object to our processing by emailing us at <EmailLink />. You may also complain to the Norwegian Data Protection Authority (Datatilsynet). Deleting the app removes the app data stored locally on your device.</p></Section>
    <Section id="children" title="Children"><p>The app does not knowingly collect personal information from children. If you believe a child has sent us personal information through a support email, contact us and we will address the request.</p></Section>
    <Section id="changes" title="Changes to this policy"><p>If the app&apos;s privacy practices change, we will update this page and its effective date before or when the change takes effect.</p></Section>
    <Section id="website-scope" title="Website scope"><p>This policy describes the The Daily Saint app. If the website hosting this policy uses cookies, analytics, a contact form, or other services, it needs a separate website privacy notice that describes those services.</p></Section>
  </>;
}

function HelpContent() {
  return <>
    <Section id="todays-reading" title="Today&apos;s reading"><p>Open the app to read the day selected by your device&apos;s local date. Use <strong>Previous</strong> and <strong>Next</strong> at the bottom of the screen to browse nearby days. Tap <strong>Today</strong> to return to the current day.</p></Section>
    <Section id="calendar" title="Choosing a calendar"><p>The app includes the current General Roman Calendar and the 1962 Roman Calendar. Open the calendar controls to choose the one you prefer. Your choice is saved on your device and is also used by the widget and daily reminder.</p><p>The calendars are universal reference calendars, not a complete local Mass ordo. National, diocesan, and religious-order celebrations are not included.</p></Section>
    <Section id="reminders" title="Daily reminders"><p>The app can show one local notification each day with that day&apos;s reading. On first launch, iOS may ask whether you want to allow notifications. You can allow or decline; the app works either way.</p><p>To manage reminders, open the app&apos;s calendar and information area, choose a reminder time, or turn reminders off. You can also change notification permission at any time in <strong>Settings &gt; Notifications &gt; The Daily Saint</strong> on your device. Reminders are created locally and do not require an internet connection.</p></Section>
    <Section id="widgets" title="Widgets"><p>Add a The Daily Saint widget from your device&apos;s widget gallery. The widget shows the reading for the calendar selected in the app. Tap it to open the app.</p></Section>
    <Section id="supporting" title="Supporting the app"><p>Support purchases are optional consumable payments processed by Apple. They are a voluntary way to support the app and do not unlock readings or features. If a purchase does not complete, check your App Store payment settings or contact Apple Support.</p></Section>
    <Section id="need-help" title="Need help?"><p>Email <EmailLink /> with a description of the issue and, if possible, the app version shown in the app. Please do not send passwords, payment-card information, or other sensitive information.</p></Section>
  </>;
}

export default function DailySaintPrivacyPage() {
  return <DailySaintTabs
    privacyLead={<><p className={styles.detail}>Effective date: 6 September 2026</p><div className={styles.intro}><p>The Daily Saint is operated by Jæger-Pedersen Ventures, Norway (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). This policy explains how the The Daily Saint iPhone and iPad app handles information.</p><p>The short version: The Daily Saint is designed to work offline. It has no accounts, advertising, analytics, tracking, or app-operated server. We do not collect personal information through normal use of the app.</p></div></>}
    privacy={<PrivacyContent />}
    helpLead={<div className={styles.intro}><p>The Daily Saint offers one reading for each day: a saint, group of saints, feast, season, or other observance, together with a reflection. Everything needed for the daily reading is included in the app and works offline.</p></div>}
    help={<HelpContent />}
  />;
}
