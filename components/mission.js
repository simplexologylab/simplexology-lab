export default function Mission() {
  return (
    <div className="flex flex-col place-content-center">
      <div className="absolute inset-6 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-10 sm:-rotate-6 sm:rounded-3xl"></div>
      <div className="relative px-4 py-10 shadow-lg sm:rounded-3xl sm:p-20">
        <p className="font-mono text-xl md:text-2xl px-10 py-20">
          Our mission is to understand the seemingly complex world around us and
          to inspire learning by making it simple
        </p>
      </div>
    </div>
  );
}
