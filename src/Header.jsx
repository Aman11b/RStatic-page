export default function Header(){
  return(
      <header className="header">
        <img src="./src/assets/React.png" alt="react-log" className="header-img"/>
        <nav >
          <ul className="nav-list">
            <li className="nav-list-item">Pricing</li>
            <li className="nav-list-item">About</li>
            <li className="nav-list-item">Contacts</li>
          </ul>
        </nav>
      </header>
  )
}