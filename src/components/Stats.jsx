const Stats = () => {
  const data = [
    { title: "Projects", value: "20+" },
    { title: "Experience", value: "1+" },
    { title: "Happy Clients", value: "10+" },
    { title: "Availability", value: "24/7" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 pb-20">
      {data.map((item, i) => (
        <div key={i} className="bg-white/5 p-6 rounded-xl text-center border border-white/10">
          <h2 className="text-2xl font-bold text-purple-400">{item.value}</h2>
          <p className="text-gray-400">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;