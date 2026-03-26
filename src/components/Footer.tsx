export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} <span className="neon-text font-semibold">Muhammad Saad Khan</span>. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground font-mono">
          Built with passion & code
        </p>
      </div>
    </footer>
  );
}
