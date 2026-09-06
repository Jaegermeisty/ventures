import type { Metadata } from "next";
import { DailySaintPage, EmailLink } from "../daily-saint-page";

export const metadata: Metadata = {
  title: "Privacy Policy — The Daily Saint",
  description: "Privacy Policy for The Daily Saint by Jæger-Pedersen Ventures.",
};

export default function DailySaintPrivacyPage() {
  return (
    <DailySaintPage
      title="Privacy Policy"
      detail="Effective date: 6 September 2026"
      showContents
      introduction={
        <>
          <p>
            The Daily Saint is operated by Jæger-Pedersen Ventures, Norway (&quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;). This policy explains how the The Daily Saint iPhone
            and iPad app handles information.
          </p>
          <p>
            The short version: The Daily Saint is designed to work offline. It has no
            accounts, advertising, analytics, tracking, or app-operated server. We do not
            collect personal information through normal use of the app.
          </p>
        </>
      }
      sections={[
        {
          id: "responsible",
          title: "Who is responsible for your information",
          children: (
            <p>
              Jæger-Pedersen Ventures is the controller for personal information handled
              under this policy. You can contact us at <EmailLink />.
            </p>
          ),
        },
        {
          id: "on-device",
          title: "Information kept on your device",
          children: (
            <>
              <p>
                The app keeps the following information locally on your device so its
                features work as you choose:
              </p>
              <ul>
                <li>your selected calendar;</li>
                <li>whether daily reminders are enabled and the time you selected;</li>
                <li>
                  the date and calendar needed to open the correct reading after you tap a
                  notification; and
                </li>
                <li>the selected calendar shared with the app&apos;s Home Screen widget.</li>
              </ul>
              <p>
                This information stays on your device. The widget uses an Apple App Group
                solely to read the selected calendar from the app; it does not send that
                information to us. You can remove this local information by deleting the
                app. You can turn reminders off in the app or in iOS Settings.
              </p>
            </>
          ),
        },
        {
          id: "notifications",
          title: "Notifications",
          children: (
            <p>
              If you allow notifications, the app schedules daily reminders locally on
              your device using the reading and calendar you selected. Notification
              permission is controlled by iOS. We do not receive notification tokens,
              notification content, or information about whether you opened a notification.
            </p>
          ),
        },
        {
          id: "purchases",
          title: "Optional support purchases",
          children: (
            <p>
              The app offers optional, repeatable support purchases. They do not unlock any
              feature or content. Purchases are processed by Apple through StoreKit and your
              Apple ID. We do not receive or store your payment-card information, Apple ID,
              or payment details. Apple handles payment information under its own privacy
              policy.
            </p>
          ),
        },
        {
          id: "support",
          title: "Contacting support",
          children: (
            <>
              <p>
                The app can open your email app with a pre-filled support email. If you
                choose to email us, we receive the information you include, such as your
                email address, message, and any diagnostic details you voluntarily provide.
                We use it only to answer your request, troubleshoot the app, and protect our
                legal rights where necessary. We do not use support messages for advertising
                or sell them to anyone.
              </p>
              <p>
                We keep support correspondence only for as long as reasonably needed to
                handle the request and maintain relevant records, unless a longer period is
                required by law or necessary for a legal claim.
              </p>
            </>
          ),
        },
        {
          id: "not-collected",
          title: "Information we do not collect",
          children: (
            <>
              <p>
                The app does not collect or transmit your name, contact list, location,
                health information, photos, browsing history, reading history, device
                identifier, usage data, or diagnostic data. It does not use third-party
                analytics, advertising SDKs, tracking technologies, or an app-operated
                backend.
              </p>
              <p>
                The app includes optional links to external calendar-reference websites.
                Those sites are outside our control; their own privacy policies apply if you
                choose to visit them.
              </p>
            </>
          ),
        },
        {
          id: "sharing",
          title: "Sharing",
          children: (
            <p>
              We do not sell, rent, share, or disclose personal information for advertising
              or tracking. The only external services involved when you choose to use them
              are Apple for App Store and StoreKit purchases, iOS for locally delivered
              notifications, your email provider when you email us, and any external website
              you choose to open.
            </p>
          ),
        },
        {
          id: "rights",
          title: "Your rights",
          children: (
            <p>
              If we hold personal information about you through a support email, you may ask
              for access, correction, deletion, restriction, or object to our processing by
              emailing us at <EmailLink />. You may also complain to the Norwegian Data
              Protection Authority (Datatilsynet). Deleting the app removes the app data
              stored locally on your device.
            </p>
          ),
        },
        {
          id: "children",
          title: "Children",
          children: (
            <p>
              The app does not knowingly collect personal information from children. If you
              believe a child has sent us personal information through a support email,
              contact us and we will address the request.
            </p>
          ),
        },
        {
          id: "changes",
          title: "Changes to this policy",
          children: (
            <p>
              If the app&apos;s privacy practices change, we will update this page and its
              effective date before or when the change takes effect.
            </p>
          ),
        },
        {
          id: "website-scope",
          title: "Website scope",
          children: (
            <p>
              This policy describes the The Daily Saint app. If the website hosting this
              policy uses cookies, analytics, a contact form, or other services, it needs a
              separate website privacy notice that describes those services.
            </p>
          ),
        },
      ]}
    />
  );
}
