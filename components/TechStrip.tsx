export default function TechStrip() {
  const items = [
    { icon: "fa-eye", label: "Billed & paid visibility" },
    { icon: "fa-clock", label: "Pending claim tracking" },
    { icon: "fa-file-circle-xmark", label: "Denial investigation" },
    { icon: "fa-user-shield", label: "HIPAA certified" },
    { icon: "fa-chart-line", label: "Revenue leak detection" },
  ];
  return (
    <div id="compliance" className="max-w-7xl mx-auto scroll-mt-28 px-6 py-6">
      <div className="reveal-section flex justify-center flex-wrap gap-9 bg-soft-bg py-9 px-10 rounded-[60px]">
        {items.map((it, i) => (
          <div key={i} className="flex items-center gap-3 font-medium text-primary">
            <i className={`fas ${it.icon} text-2xl text-accent`}></i>
            {it.label}
          </div>
        ))}
      </div>
    </div>
  );
}
