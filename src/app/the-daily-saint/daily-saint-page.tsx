import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./daily-saint.module.css";

const supportEmail = "mathias.jpventures@gmail.com";

type Section = {
  id: string;
  title: string;
  children: ReactNode;
};

export function DailySaintPage({
  title,
  detail,
  introduction,
  sections,
  showContents = false,
  children,
}: {
  title: string;
  detail?: string;
  introduction?: ReactNode;
  sections: Section[];
  showContents?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className={styles.shell}>
      <main className={styles.page}>
        <Link className={styles.backLink} href="/">
          ← Jæger-Pedersen Ventures
        </Link>

        <header className={styles.header}>
          <p className={styles.masthead}>THE DAILY SAINT</p>
          <h1 className={styles.title}>{title}</h1>
          {detail ? <p className={styles.detail}>{detail}</p> : null}
          {introduction ? <div className={styles.intro}>{introduction}</div> : null}
        </header>

        <div className={styles.shortRule} />

        {showContents ? (
          <nav className={styles.contents} aria-label="Contents">
            <p className={styles.contentsLabel}>Contents</p>
            <ol className={styles.contentsList}>
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.title}</a>
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        {sections.map((section) => (
          <section className={styles.section} id={section.id} key={section.id}>
            <h2 className={styles.heading}>{section.title}</h2>
            {section.children}
          </section>
        ))}

        {children ? <div className={styles.afterword}>{children}</div> : null}

        <footer className={styles.footer}>© Jæger-Pedersen Ventures · Norway</footer>
      </main>
    </div>
  );
}

export function EmailLink() {
  return <a href={`mailto:${supportEmail}`}>{supportEmail}</a>;
}
