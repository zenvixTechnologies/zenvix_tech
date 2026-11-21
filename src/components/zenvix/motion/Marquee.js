/**
 * CSS-only infinite marquee (server component). The duplicate track is aria-hidden,
 * so assistive tech reads the content once.
 */
export default function Marquee({
  children,
  duration = 36,
  reverse = false,
  pausable = false,
  className = "",
  trackClassName = "",
}) {
  return (
    <div
      className={`marquee ${reverse ? "marquee--reverse" : ""} ${pausable ? "marquee--pausable" : ""} ${className}`}
      style={{ "--marquee-duration": `${duration}s` }}
    >
      <div className={`marquee__track ${trackClassName}`}>{children}</div>
      <div aria-hidden="true" className={`marquee__track ${trackClassName}`}>
        {children}
      </div>
    </div>
  );
}
