import { YEAR } from '../constants';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="header-title">CHARLOTTESVILLE AREA COMMUNITY FOUNDATION</h1>
        <p className="header-subtitle">{YEAR} Annual Calendar</p>
      </div>
    </header>
  );
}

export default Header;
