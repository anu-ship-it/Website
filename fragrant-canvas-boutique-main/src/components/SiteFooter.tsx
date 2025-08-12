const SiteFooter = () => {
  return (
    <footer id="contact" className="border-t border-border mt-20">
      <div className="container py-10 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground">© {new Date().getFullYear()} Essentia Lux. All rights reserved.</p>
        <nav className="flex items-center gap-6">
          <a href="#" className="story-link">Privacy</a>
          <a href="#" className="story-link">Terms</a>
          <a href="#custom" className="story-link">Custom Scent</a>
        </nav>
      </div>
    </footer>
  );
};

export default SiteFooter;
