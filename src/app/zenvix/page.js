import { canonical } from "@/components/zenvix/seo";
import ZenvixPage from "@/components/zenvix/ZenvixPage";

// /zenvix renders the same page as /, so both point search engines at /.
export const metadata = {
  title: { absolute: "Zenvix | Premium Web Development & UI/UX Agency" },
  ...canonical("/"),
};

export default function Page() {
  return <ZenvixPage />;
}
