import type { Metadata } from "next";
import PrivacyTabs from "./privacy-tabs";

export const metadata: Metadata = {
  title: "Privacy Policy — Summit: Workout Tracker",
  description:
    "Privacy Policy for Summit: Workout Tracker by Jaeger-Pedersen Ventures.",
  robots: { index: false, follow: false },
};

export default function SummitPrivacyPolicy() {
  return <PrivacyTabs />;
}
