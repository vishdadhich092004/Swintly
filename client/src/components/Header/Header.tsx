import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 w-full backdrop-blur-md border-b border-border/40 bg-background/95"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand Name */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center space-x-2"
          >
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/vite.svg"
                alt="Vite logo"
                className="h-8 w-8 sm:h-10 sm:w-10 transition-transform duration-200 hover:rotate-12"
              />
              <span className="font-bold text-xl sm:text-2xl font-darumadrop bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Swintly
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { name: "Features", href: "#features" },
              { name: "Pricing", href: "#pricing" },
              { name: "About", href: "#about" },
            ].map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-secondary relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full opacity-70" />
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="relative hover:bg-secondary/10"
              >
                <Menu className="h-5 w-5 text-secondary" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-[200px] animate-in slide-in-from-top-2 border-secondary/20"
            >
              {[
                { name: "Features", href: "#features" },
                { name: "Pricing", href: "#pricing" },
                { name: "About", href: "#about" },
              ].map((item) => (
                <DropdownMenuItem
                  key={item.name}
                  className="cursor-pointer hover:bg-secondary/10"
                >
                  <a href={item.href} className="flex w-full py-1">
                    {item.name}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.02 }}>
              <Button
                variant="ghost"
                size="sm"
                className="hidden sm:inline-flex hover:bg-secondary/10 text-secondary-foreground"
              >
                Login
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }}>
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm transition-all duration-200 hover:shadow-md"
              >
                Sign up
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
