export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center theme-bg-primary">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-[#0774E8] mb-4">404</h1>
        <h2 className="text-3xl font-bold theme-text-primary mb-4">Page Not Found</h2>
        <p className="theme-text-secondary mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-block bg-[#0774E8] hover:bg-[#0562c7] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
