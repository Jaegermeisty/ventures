"use client";

import Link from "next/link";
import { useState, type KeyboardEvent, type ReactNode } from "react";
import styles from "./daily-saint.module.css";

type View = "privacy" | "help";

export default function DailySaintTabs({
  privacyLead,
  privacy,
  helpLead,
  help,
}: {
  privacyLead: ReactNode;
  privacy: ReactNode;
  helpLead: ReactNode;
  help: ReactNode;
}) {
  const [view, setView] = useState<View>("privacy");
  const isPrivacy = view === "privacy";

  const handleTabKeys = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      setView(isPrivacy ? "help" : "privacy");
    }
  };

  return (
    <div className={styles.shell}>
      <main className={styles.page}>
        <Link className={styles.backLink} href="/">
          ← Jæger-Pedersen Ventures
        </Link>

        <header className={styles.header}>
          <p className={styles.masthead}>THE DAILY SAINT</p>
          <h1 className={styles.title}>{isPrivacy ? "Privacy Policy" : "Help"}</h1>
          <div className={styles.tabList} role="tablist" aria-label="Privacy and help" onKeyDown={handleTabKeys}>
            <button className={styles.tab} id="privacy-tab" role="tab" type="button" aria-selected={isPrivacy} aria-controls="privacy-panel" onClick={() => setView("privacy")}>
              Privacy Policy
            </button>
            <button className={styles.tab} id="help-tab" role="tab" type="button" aria-selected={!isPrivacy} aria-controls="help-panel" onClick={() => setView("help")}>
              Help
            </button>
          </div>
          {isPrivacy ? privacyLead : helpLead}
        </header>

        <div className={styles.shortRule} />

        {isPrivacy ? (
          <div id="privacy-panel" role="tabpanel" aria-labelledby="privacy-tab">{privacy}</div>
        ) : (
          <div id="help-panel" role="tabpanel" aria-labelledby="help-tab">
            {help}
            <p className={styles.afterword}>
              Read the <button className={styles.textButton} type="button" onClick={() => setView("privacy")}>Privacy Policy</button>.
            </p>
          </div>
        )}

        <footer className={styles.footer}>© Jæger-Pedersen Ventures · Norway</footer>
      </main>
    </div>
  );
}
