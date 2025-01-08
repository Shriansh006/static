export default function Navbar() {
  return (
    <nav className="fixed md:flex hidden items-center justify-between top-0 left-0 w-full p-8">
      <img src="/vnest-logo.svg" alt="" className="w-24" />

      <div className="uppercase flex items-center justify-center gap-8 font-bold">
        <a
          href="#home"
          className="w-36 text-center py-2 hover:bg-foreground hover:text-background rounded-xl transition-colors duration-300"
        >
          Home
        </a>
        <a
          href="#about"
          className="w-36 text-center py-2 hover:bg-foreground hover:text-background rounded-xl transition-colors duration-300"
        >
          About US
        </a>
        <a
          href="#gallery"
          className="w-36 text-center py-2 hover:bg-foreground hover:text-background rounded-xl transition-colors duration-300"
        >
          Gallery
        </a>
        <a
          href="#initiatives"
          className="w-36 text-center py-2 hover:bg-foreground hover:text-background rounded-xl transition-colors duration-300"
        >
          Initiatives
        </a>
        <a
          href="#contact"
          className="w-36 text-center py-2 hover:bg-foreground hover:text-background rounded-xl transition-colors duration-300"
        >
          Contact
        </a>
      </div>

      <img src="/vit-logo.png" alt="" className="w-32" />
    </nav>
  );
}
