import { Copyright, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <div className="grid md:grid-cols-4 gap-4 py-4">
        <div className="mb-3">
          <h3 className="font-bold">
            Movie<span className="text-primary">Hub</span>
          </h3>

          <p className="mt-3 text-sm gap-4 text-foreground/60">
            Discover and explore the latest movie from around the world.
            MovieHob gives you access to a vast collection of films across all
            genres.
          </p>

          <div className="flex items-center gap-2 mt-2">
            <Twitter
              fill="currentColor"
              className="text-foreground opacity-60 hover:opacity-100 hover:text-primary size-4.5 cursor-pointer"
            />
            <Instagram className="size-4.5 text-foreground/60 hover:text-primary cursor-pointer" />
            <div className="rounded-xs size-4 bg-foreground/60 hover:bg-primary cursor-pointer">
              <Facebook
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
            <li className=" hover:text-primary">
              <a href="#home">Home</a>
            </li>
            <li className=" hover:text-primary">
              <a href="">Trending</a>
            </li>
            <li className=" hover:text-primary">
              <a href="">Popular</a>
            </li>
            <li className=" hover:text-primary">
              <a href="">Top Rated</a>
            </li>
            <li className=" hover:text-primary">
              <a href="">Browse by Genre</a>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h5 className="font-medium">Resources </h5>
          <ul className="space-y-1 text-sm text-foreground/60">
            <li className=" hover:text-primary">
              <a href="">About Us</a>
            </li>
            <li className=" hover:text-primary">
              <a href="">Contact</a>
            </li>
            <li className=" hover:text-primary">
              <a href="">Blog</a>
            </li>
            <li className=" hover:text-primary">
              <a href="">FAQ</a>
            </li>
            <li className=" hover:text-primary">
              <a href="">Help Center</a>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h5 className="font-medium">Newsletter </h5>
          <p className="text-sm text-foreground/50">
            Stay up to date with the latest movies and news
          </p>

          <form action="" className="space-y-2">
            <input
              type="email"
              placeholder="Your Email address"
              className="rounded-sm py-1 px-3 text-sm bg-foreground/10 w-full ring-xs"
            />
            <button type="submit" className=" size-full bg-primary text-white rounded-sm font-medium">
              Subcribe
            </button>
          </form>
        </div>
      </div>
      <div className="flex items-center border-t py-3 border-foreground/50 text-foreground/60 text-xs mb-3">
        <Copyright size={10} strokeWidth={3} />
        <p>
          <span>2025 MovieHub. All rights reserved. · Powered by</span>
          <a className="text-primary ml-1 font-medium hover:border-b cursor-pointer">
            TMDB API
          </a>
        </p>

        <div className="flex gap-2 ml-auto">
          <p>Privacy Policy</p>
          <p>Term of Service</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
