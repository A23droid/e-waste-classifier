export default function PageWrapper({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {children}
      </main>
    </div>
  );
}