export default function Page() {
  const faqs = [
    {
      q: 'How does it extract time from Slack?',
      a: 'SlackBill connects via Slack OAuth and reads message timestamps in your chosen channels. It calculates time between your first and last message in a thread and logs it as a billable session.'
    },
    {
      q: 'What does the $19/mo plan include?',
      a: 'Unlimited Slack workspaces, unlimited clients, automatic invoice generation as PDF, and CSV export of all time entries. No per-seat fees.'
    },
    {
      q: 'Can I edit time entries before invoicing?',
      a: 'Yes. Every tracked session appears in your dashboard where you can adjust duration, add notes, or exclude entries before generating an invoice.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Freelancer Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Turn Slack threads into<br />
          <span className="text-[#58a6ff]">billable hours automatically</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          SlackBill monitors your Slack channels, extracts time from thread timestamps, and generates client invoices — no manual timers needed.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start tracking for $19/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No credit card required to connect Slack.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '⚡', title: 'Auto-detection', body: 'Reads thread timestamps the moment you send a message — zero manual input.' },
            { icon: '🧾', title: 'Invoice generation', body: 'Export a clean PDF invoice per client with itemized time entries.' },
            { icon: '🔒', title: 'Slack OAuth', body: 'Secure read-only access. We never store message content, only timestamps.' }
          ].map(f => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$19<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#6e7681] mb-6">Everything you need to bill accurately</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 text-left mb-8">
            {[
              'Unlimited Slack workspaces',
              'Unlimited clients & projects',
              'Automatic PDF invoices',
              'CSV export',
              'Manual time entry editing',
              'Email support'
            ].map(item => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-[#6e7681] mt-12">
          &copy; {new Date().getFullYear()} SlackBill. Built for freelancers.
        </p>
      </section>
    </main>
  )
}
