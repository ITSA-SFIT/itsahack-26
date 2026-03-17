const Marquee = () => {
  const Message = () => (
    <span className="whitespace-nowrap text-xl px-20">
      <span className="text-White-300 font-bold">Note: </span>
      <span className="text-red-300">Please submit your application only after </span>
      <strong className="text-red-200/90">all team members</strong>
      <span className="text-red-200/90"> have joined the team.</span>
    </span>
  );

  return (
    <div className="w-full overflow-hidden border border-white/20 rounded-xl bg-white/5 py-6 relative mx-auto max-w-4xl">
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[#0d0000] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-[#0d0000] to-transparent pointer-events-none" />
      <div className="flex w-max animate-marquee">
        <Message />
        <Message />
      </div>
    </div>
  );
};

export default Marquee;