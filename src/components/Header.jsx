import Nav from './Nav';

import '.././styles/Header.css';

export default function Header({links}) {
    return (
      <div className="header p-2">
              <h1 className="h1">Amy Lloyd</h1>
              <Nav />
      </div>
    );
}