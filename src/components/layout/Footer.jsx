export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border-light py-8 mt-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-text-muted text-sm mb-3">
          Supporting communities in times of need
        </p>
        <a
          href="https://www.donationwebsite.com"
          target="_blank"
          rel="noreferrer"
          className="text-accent-warm font-medium no-underline hover:text-accent-hover transition-colors duration-200 text-sm"
        >
          Visit Donation Website
        </a>
      </div>
    </footer>
  );
}
