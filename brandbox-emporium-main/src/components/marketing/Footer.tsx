const Footer = () => {
  return (
    <footer id="about" className="border-t">
      <div className="container flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <p className="font-display text-lg font-semibold text-gradient-primary">Brandbox</p>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <a className="hover:text-foreground" href="#solutions">Solutions</a>
          <a className="hover:text-foreground" href="#features">Features</a>
          <a className="hover:text-foreground" href="#pricing">Pricing</a>
          <a className="hover:text-foreground" href="#about">About</a>
        </nav>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Brandbox Emporium. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
