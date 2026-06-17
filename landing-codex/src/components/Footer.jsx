import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    Icon: Linkedin,
    colorClass: "text-[#0A66C2] hover:border-[#0A66C2]",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    Icon: Instagram,
    colorClass: "text-[#E4405F] hover:border-[#E4405F]",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com",
    Icon: Facebook,
    colorClass: "text-[#1877F2] hover:border-[#1877F2]",
  },
];

export default function Footer() {
  return (
    <footer className="bg-white px-5 py-8 transition-colors duration-300 dark:bg-slate-950 md:px-8">
      <div className="footer-reveal mx-auto flex max-w-7xl flex-col gap-5 border-t border-slate-200 pt-8 dark:border-slate-800 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © 2026 NovaBrand. Todos los derechos reservados.
        </p>

        <div className="flex gap-3">
          {socialLinks.map(({ label, href, Icon, colorClass }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800 ${colorClass}`}
              aria-label={label}
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
