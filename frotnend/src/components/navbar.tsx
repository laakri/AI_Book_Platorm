import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, User, Heart, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <BookOpen className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              BookPlatform
            </span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/browse"
            >
              Browse
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/categories"
            >
              Categories
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/bestsellers"
            >
              Bestsellers
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/new-releases"
            >
              New Releases
            </a>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for books, authors, or ISBN..."
                className="pl-8 md:w-[300px] lg:w-[300px]"
              />
            </div>
          </div>
          <nav className="flex items-center">
            <Button variant="ghost" size="icon" className="mr-2">
              <User className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">My Account</span>
            </Button>
            <Button variant="ghost" size="icon" className="mr-2">
              <Heart className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">Wishlist</span>
            </Button>
            <Button variant="ghost" size="icon" className="mr-2">
              <ShoppingCart className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">Cart</span>
            </Button>
            <Button variant="outline" size="sm" className="ml-4">
              Login
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
