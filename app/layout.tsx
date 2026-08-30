import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Buildog — The Goodest Builder on Arc",
  description: "227 teams came to build the future. One dog came dressed for the job.",
  openGraph:{title:"Buildog",description:"The goodest builder on Arc.",images:["/buildog.png"]}
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}