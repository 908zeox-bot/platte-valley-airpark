interface Report {
  id: string
  date: string
  category: string
  headline: string
  body: string
  tag: string
  link?: string
  source?: string
}

interface RunwayReportsProps {
  reports: Report[]
}

export default function RunwayReports({ reports }: RunwayReportsProps) {
  return (
    <section className="bg-[#1a1a1a] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#BD212F] text-sm font-bold tracking-widest uppercase mb-3">From the Field</p>
          <h2 className="text-4xl font-serif font-bold text-white mb-4">Runway Reports</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Conditions, community, and real-world flying wisdom from 18V and beyond.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report) => (
            <div key={report.id} className="bg-white/10 rounded-lg p-6 flex flex-col">
              {/* Category + Date */}
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-[#BD212F] text-xs font-bold uppercase tracking-wider">
                    {report.category}
                  </span>
                  {report.source === 'linkedin' && (
                    <span className="text-xs bg-[#0A66C2] text-white px-1.5 py-0.5 rounded font-bold">in</span>
                  )}
                </div>
                <span className="text-gray-500 text-xs">{report.date}</span>
              </div>

              {/* Headline */}
              <h3 className="text-white font-serif text-xl font-bold mb-3 leading-snug">
                {report.headline}
              </h3>

              {/* Body */}
              <p className="text-gray-300 text-sm leading-relaxed line-clamp-4 flex-grow">
                {report.body}
              </p>

              {/* Tag + Link */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-gray-500 text-xs italic">{report.tag}</p>
                {report.link && (
                  <a
                    href={report.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#BD212F] text-sm font-semibold mt-2 inline-block hover:underline"
                  >
                    Read more →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
