export default function TrustBar() {
  const items = [
    { icon: "fa-user-md", label: "Clinical expertise" },
    { icon: "fa-lock", label: "HIPAA & compliance" },
    { icon: "fa-chart-line", label: "Data-driven" },
    { icon: "fa-microchip", label: "Tech-forward" },
  ];
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-soft-bg rounded-[60px] py-8 my-6">
        <div className="flex justify-around flex-wrap gap-6 px-6">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 font-medium text-dark-text">
              <i className={`fas ${item.icon} text-2xl text-accent`}></i>
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
