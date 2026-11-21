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
  nodejs: (
    <>
      <path d="m12 2 7 4v12l-7 4-7-4V6z" />
      <path d="M9 9v6" />
      <path d="m9 9 6 6" />
      <path d="M15 9v6" />
    </>
  ),
  expressjs: (
    <>
      <path d="M4 8h16" />
      <path d="M4 12h10" />
      <path d="M4 16h16" />
      <path d="m14 10 4 2-4 2" />
    </>
  ),
  mongodb: (
    <>
      <path d="M12 3c2.5 2.3 4 5.5 4 9.1 0 3.8-1.4 6.9-4 8.9-2.6-2-4-5.1-4-8.9C8 8.5 9.5 5.3 12 3Z" />
      <path d="M12 6v12" />
      <path d="M12 10c-.9.8-1.5 1.9-1.5 3.3 0 1.2.5 2.2 1.5 3" />
    </>
  ),
  postgresql: (
    <>
      <path d="M8 6.5c0-1.9 1.8-3.5 4-3.5s4 1.6 4 3.5c0 1.5-.9 2.6-2.2 3.2 1.6.5 2.7 1.8 2.7 3.6 0 2.2-1.9 4-4.5 4H10" />
      <path d="M8 6.5V20" />
      <path d="M8 10h4.5" />
      <path d="m13.5 13.5 3.5 5.5" />
    </>
  ),
  arrow_outward: (
    <>
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </>
  ),
  flutter: (
    <>
      <path d="M14.5 3 4.5 13l3.5 3.5 10-10z" />
      <path d="m11.5 16 3 3H18l-3.5-3.5L18 12h-3.5z" />
    </>
  ),
  springboot: (
    <>
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
      <path d="M7 15c0-4.5 3.5-8 8-8 0 4.5-3.5 8-8 8z" />
      <path d="m11 11 3 3" />
    </>
  ),
  java: (
    <>
      <path d="M6 14h10a2 2 0 0 1 2 2v1a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-1a2 2 0 0 1 2-2z" />
      <path d="M18 14h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1" />
      <path d="M9 4c-1 1-1 2 0 3s0 2-1 3" />
      <path d="M13 4c-1 1-1 2 0 3s0 2-1 3" />
      <path d="M6 21h12" />
    </>
  ),
  premiere: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7 17V8h3.5a2.5 2.5 0 0 1 0 5H7" />
      <path d="M14 12v5" />
      <path d="M14 14c.5-.7 1.3-1 2-1" />
    </>
  ),
  smartphone: (
    <>
      <rect x="5" y="2" width="14" height="20" rx="3" />
      <path d="M12 18h.01" strokeWidth="2.5" />
      <path d="M9 5h6" />
    </>
  ),
  video_editing: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 8h20" />
      <path d="M2 16h20" />
      <path d="M6 4v4" />
      <path d="M6 16v4" />
      <path d="M10 4v4" />
      <path d="M10 16v4" />
      <path d="M14 4v4" />
      <path d="M14 16v4" />
      <path d="M18 4v4" />
      <path d="M18 16v4" />
      <path d="m10 10 5 2.5-5 2.5z" fill="currentColor" />
    </>
  ),
  arrow_right: (
    <>
      <path d="M4 12h16" />
      <path d="m14 6 6 6-6 6" />
    </>
  ),
  arrow_left: (
    <>
      <path d="M20 12H4" />
      <path d="m10 6-6 6 6 6" />
    </>
  ),
  arrow_up: (
    <>
      <path d="M12 20V4" />
      <path d="m6 10 6-6 6 6" />
    </>
  ),
  plus: (
    <>
      <path d="M12 4v16" />
      <path d="M4 12h16" />
    </>
  ),
  phone: (
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  sparkle: (
    <path d="M12 2c.6 4.8 2.6 7.4 10 10-7.4 2.6-9.4 5.2-10 10-.6-4.8-2.6-7.4-10-10 7.4-2.6 9.4-5.2 10-10Z" fill="currentColor" stroke="none" />
  ),
};

export const whatsappPath =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.197 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z";

export function WhatsAppGlyph({ className = "" }) {
  return (
    <svg aria-hidden="true" className={`fill-current ${className}`} focusable="false" viewBox="0 0 24 24">
      <path d={whatsappPath} />
    </svg>
  );
}

/** Stroke icon set. Server-safe; size follows font-size (1em). */
export default function Icon({ children, name, className = "", strokeWidth = 1.6 }) {
  const key = String(name ?? children).trim();
  const icon = iconPaths[key];

  if (!icon) {
    return null;
  }

  return (
    <svg
      aria-hidden="true"
      className={`inline-block size-[1em] shrink-0 ${className}`}
      fill="none"
      focusable="false"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24"
    >
      {icon}
    </svg>
  );
}
