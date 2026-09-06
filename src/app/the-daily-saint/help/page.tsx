import type { Metadata } from "next";
import Link from "next/link";
import { DailySaintPage, EmailLink } from "../daily-saint-page";

export const metadata: Metadata = {
  title: "Help — The Daily Saint",
  description: "Help and support information for The Daily Saint.",
};

export default function DailySaintHelpPage() {
  return (
    <DailySaintPage
      title="Help"
      introduction={
        <p>
          The Daily Saint offers one reading for each day: a saint, group of saints,
          feast, season, or other observance, together with a reflection. Everything needed
          for the daily reading is included in the app and works offline.
        </p>
      }
      sections={[
        {
          id: "todays-reading",
          title: "Today&apos;s reading",
          children: (
            <p>
              Open the app to read the day selected by your device&apos;s local date. Use
              <strong> Previous </strong>and<strong> Next </strong>at the bottom of the
              screen to browse nearby days. Tap<strong> Today </strong>to return to the
              current day.
            </p>
          ),
        },
        {
          id: "calendar",
          title: "Choosing a calendar",
          children: (
            <>
              <p>
                The app includes the current General Roman Calendar and the 1962 Roman
                Calendar. Open the calendar controls to choose the one you prefer. Your
                choice is saved on your device and is also used by the widget and daily
                reminder.
              </p>
              <p>
                The calendars are universal reference calendars, not a complete local Mass
                ordo. National, diocesan, and religious-order celebrations are not included.
              </p>
            </>
          ),
        },
        {
          id: "reminders",
          title: "Daily reminders",
          children: (
            <>
              <p>
                The app can show one local notification each day with that day&apos;s reading.
                On first launch, iOS may ask whether you want to allow notifications. You
                can allow or decline; the app works either way.
              </p>
              <p>
                To manage reminders, open the app&apos;s calendar and information area, choose a
                reminder time, or turn reminders off. You can also change notification
                permission at any time in <strong>Settings &gt; Notifications &gt; The Daily Saint</strong>{" "}
                on your device. Reminders are created locally and do not require an internet
                connection.
              </p>
            </>
          ),
        },
        {
          id: "widgets",
          title: "Widgets",
          children: (
            <p>
              Add a The Daily Saint widget from your device&apos;s widget gallery. The widget
              shows the reading for the calendar selected in the app. Tap it to open the app.
            </p>
          ),
        },
        {
          id: "supporting",
          title: "Supporting the app",
          children: (
            <p>
              Support purchases are optional consumable payments processed by Apple. They are
              a voluntary way to support the app and do not unlock readings or features. If a
              purchase does not complete, check your App Store payment settings or contact
              Apple Support.
            </p>
          ),
        },
        {
          id: "need-help",
          title: "Need help?",
          children: (
            <p>
              Email <EmailLink /> with a description of the issue and, if possible, the app
              version shown in the app. Please do not send passwords, payment-card
              information, or other sensitive information.
            </p>
          ),
        },
      ]}
    >
      <p>
        Read the <Link href="/the-daily-saint/privacy">Privacy Policy</Link>.
      </p>
    </DailySaintPage>
  );
}
