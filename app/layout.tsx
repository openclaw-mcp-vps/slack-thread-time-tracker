import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SlackBill — Track Billable Hours from Slack Threads',
  description: 'Automatically extract billable hours from Slack thread timestamps and generate invoices. Built for freelance developers, designers, and consultants.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="32163ebd-f972-4e2b-b328-b5a204c299ef"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
