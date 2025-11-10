const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <svg width="64" height="64" viewBox="0 0 120 120" fill="none" className="mb-6">
        <rect width="120" height="120" rx="24" fill="#181818"/>
        <path d="M35 35L85 85M85 35L35 85" stroke="#fff" strokeWidth="8" strokeLinecap="round"/>
      </svg>
      <h1 className="text-3xl font-bold mb-2">Page not found</h1>
      <p className="text-white/70 mb-6 text-center max-w-md">
        Sorry, this page doesn’t exist. The link you followed may be broken, or the page may have been removed.
      </p>
      <a
        href="/"
        className="inline-block px-6 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition"
      >
        Go to Home
      </a>
    </div>
  );
};

export default NotFound;