import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/updates", label: "Updates" },
  { to: "/resource-camp", label: "Resource Camp" },
  { to: "/location", label: "Location" },
];

function NavLinkItem({ to, label }) {
  return (
    <li className="relative">
      <NavLink
        to={to}
        className={({ isActive }) =>
          `text-sm md:text-base font-medium no-underline tracking-wide transition-colors duration-200 pb-1 ${
            isActive
              ? "text-accent-warm"
              : "text-text-muted hover:text-text-primary"
          }`
        }
      >
        {({ isActive }) => (
          <>
            {label}
            {isActive && (
              <motion.span
                layoutId="nav-underline"
                className="absolute bottom-0 left-0 h-[2px] bg-accent-warm w-full rounded-full"
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
              />
            )}
          </>
        )}
      </NavLink>
    </li>
  );
}

export default function NavBar() {
  return (
    <nav className="bg-surface border-b border-border-light">
      <div className="max-w-7xl mx-auto px-6">
        <ul className="list-none p-0 m-0 flex flex-wrap justify-center gap-6 md:gap-10 py-4">
          {navItems.map((item) => (
            <NavLinkItem key={item.to} {...item} />
          ))}
          <li>
            <a
              href="https://1drv.ms/p/c/518da1248c8c31b6/EaoSjrxGGVxJkkefBqerhUIByATXJGEBWb2eYntC5u7WIA?e=oMDyyM"
              target="_blank"
              rel="noreferrer"
              className="text-sm md:text-base font-medium text-text-muted no-underline tracking-wide hover:text-text-primary transition-colors duration-200"
            >
              Info
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
