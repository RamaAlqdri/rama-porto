import type { NavItem } from "../data/portfolio";

type NavigationProps = {
  items: NavItem[];
  activeSection: string;
  menuOpen: boolean;
  onToggleMenu: () => void;
  onNavigate: () => void;
};

const navLinkBase =
  "relative text-white after:content-[''] after:absolute after:left-0 after:top-8 after:h-[0.18rem] after:w-full after:origin-left after:scale-x-0 after:bg-gradient-to-r after:from-accent after:via-accentPurple after:to-accentPink after:transition-transform after:duration-300 hover:after:scale-x-100";

export function Navigation({
  items,
  activeSection,
  menuOpen,
  onToggleMenu,
  onNavigate
}: NavigationProps) {
  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav className="nav mx-4 flex h-12 max-w-7xl items-center justify-between rounded-full border border-white/10 bg-base/70 px-4 font-semibold shadow-nav backdrop-blur-2xl md:h-[4.5rem] md:px-8 lg:mx-auto">
        <div>
          <a href="#" className="nav__logo text-gradient">
            Ramadhani Al-Qadri
          </a>
        </div>

        <div
          className={`nav__menu fixed top-12 h-full w-4/5 border-l border-white/10 bg-base/95 p-8 backdrop-blur-2xl transition-all duration-500 md:static md:h-auto md:w-auto md:border-none md:bg-transparent md:p-0 md:backdrop-blur-0 md:transition-none ${
            menuOpen ? "right-0" : "-right-full"
          }`}
          id="nav-menu"
        >
          <ul className="nav__list flex flex-col gap-8 md:flex-row md:gap-12">
            {items.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li className="nav__item" key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`${navLinkBase} ${
                      isActive ? "after:scale-x-100" : ""
                    } nav__link`}
                    onClick={onNavigate}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <button
          className="nav__toggle cursor-pointer text-2xl text-white md:hidden"
          id="nav-toggle"
          onClick={onToggleMenu}
          aria-label="Toggle navigation"
          type="button"
        >
          <i className="bx bx-menu"></i>
        </button>
      </nav>
    </header>
  );
}
