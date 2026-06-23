import type { Metadata } from "next";
import PrivacyTabs from "./privacy-tabs";

export const metadata: Metadata = {
  title: "Privacy & Support - Flumen",
  description:
    "Privacy Policy and support information for Flumen by Jæger-Pedersen Ventures.",
  robots: { index: false, follow: false },
};

export default function FlumenPrivacyAndSupport() {
  return <PrivacyTabs />;
}
