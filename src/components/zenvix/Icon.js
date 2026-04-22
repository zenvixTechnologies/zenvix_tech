"use client";

import { motion } from "framer-motion";

const iconPaths = {
  terminal: (
    <>
      <path d="m4 17 5-5-5-5" />
      <path d="M12 19h8" />
    </>
  ),
  architecture: (
    <>
      <path d="M3 21h18" />
      <path d="m6 21 3-12 3 12" />
      <path d="m12 21 3-12 3 12" />
      <path d="M8 13h8" />
      <path d="M9 9h6" />
      <path d="M12 3v6" />
    </>
  ),
  dashboard_customize: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <path d="M17.5 14v7" />
      <path d="M14 17.5h7" />
    </>
  ),
  auto_awesome: (
    <>
      <path d="m12 3 1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7Z" />
      <path d="m19 14 .8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8Z" />
      <path d="m5 15 .8 2.2L8 18l-2.2.8L5 21l-.8-2.2L2 18l2.2-.8Z" />
    </>
  ),
  auto_fix_high: (
    <>
      <path d="m14 5 5 5" />
      <path d="M4 20 18.5 5.5a2.1 2.1 0 0 1 3 3L7 23H4z" />
      <path d="m8 4 .8 2.2L11 7l-2.2.8L8 10l-.8-2.2L5 7l2.2-.8Z" />
      <path d="m3 11 .5 1.5L5 13l-1.5.5L3 15l-.5-1.5L1 13l1.5-.5Z" />
    </>
  ),
  verified_user: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-5" />
    </>
  ),
  developer_board: (
    <>
      <rect x="5" y="5" width="14" height="14" rx="2" />
      <path d="M9 9h2v2H9z" />
      <path d="M13 9h2v2h-2z" />
      <path d="M9 13h6" />
      <path d="M9 17h3" />
      <path d="M3 9h2" />
      <path d="M3 15h2" />
      <path d="M19 9h2" />
      <path d="M19 15h2" />
    </>
  ),
  deployed_code: (
    <>
      <path d="m12 2 8 4.5v9L12 20l-8-4.5v-9Z" />
      <path d="M12 11 4.5 6.8" />
      <path d="M12 11v9" />
      <path d="m12 11 7.5-4.2" />
    </>
  ),
  javascript: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 9v6c0 1.3-.7 2-2 2" />
      <path d="M13 17c1.7 0 3-.8 3-2 0-2.5-5-1.3-5-4 0-1.2 1.1-2 2.6-2 1 0 1.8.3 2.4.9" />
    </>
  ),
  api: (
    <>
      <path d="M4 7h4v10H4z" />
      <path d="M16 7h4v10h-4z" />
      <path d="M8 12h8" />
      <path d="m13 9 3 3-3 3" />
    </>
  ),
};

export default function Icon({ children, className = "" }) {
  const name = String(children).trim();
  const icon = iconPaths[name];

  if (!icon) {
    return null;
  }

  return (
    <motion.svg
      aria-hidden="true"
      className={`inline-block size-[1em] shrink-0 ${className}`}
      fill="none"
      focusable="false"
      initial="rest"
      whileHover="hover"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      variants={{
        rest: { rotate: 0, scale: 1 },
        hover: { rotate: -8, scale: 1.12 },
      }}
      viewBox="0 0 24 24"
    >
      <motion.g
        initial={{ opacity: 0, scale: 0.72 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {icon}
      </motion.g>
    </motion.svg>
  );
}
