import { Copyright, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Trending", href: "#trending" },
    { label: "Popular", href: "#popular" },
    { label: "Top Rated", href: "#top_rated" },
    { label: "Browse by Genre", href: "#byGenre" },
  ];

  return (
    <footer className="px-[6%] mt-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-3 max-w-110">
          <h3 className="font-bold">
            Movie<span className="text-primary">Hub</span>
          </h3>

          <p className="mt-3 text-sm gap-4 text-foreground/60">
            Discover and explore the latest movie from around the world.
            MovieHub gives you access to a vast collection of films across all
            genres.
          </p>

          <div className="flex items-center gap-2 mt-2">
            <Twitter
              aria-label="Twitter"
              fill="currentColor"
              className="text-foreground opacity-60 hover:opacity-100 hover:text-primary size-4.5 cursor-pointer"
            />
            <Instagram aria-label="Instagram" className="size-4.5 text-foreground/60 hover:text-primary cursor-pointer" />
            <div className="rounded-xs size-4 bg-foreground/60 hover:bg-primary cursor-pointer">
              <Facebook
                aria-label="Facebook"
                fill="var(--background)"
                strokeWidth={0}
                className="size-full"
              />
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <h5 className="font-medium">Quick Links</h5>
          <ul className="space-y-1 text-sm text-foreground/60">
            {quickLinks.map((link, i) => (
              <li key={i} className=" hover:text-primary">
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex items-center border-t py-3 border-foreground/50 text-foreground/60 text-xs my-3">
        <Copyright size={10} strokeWidth={3} />
        <p>
          <span>2025 MovieHub. All rights reserved. · Powered by</span>
          <a
            href="https://developer.themoviedb.org/docs/getting-started"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary ml-1 font-medium hover:border-b cursor-pointer"
          >
            TMDB API
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
