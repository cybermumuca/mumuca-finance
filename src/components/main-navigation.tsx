import { NavLink } from "./nav-link";

export function MainNavigation() {
  if (window.innerWidth <= 768) return null;

  return (
    <nav className="flex items-center space-x-6 lg:space-x-6">
      <NavLink to="/">Início</NavLink>
      <NavLink to="/transfers">Transferências</NavLink>
    </nav>
  );
}
