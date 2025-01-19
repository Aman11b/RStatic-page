import { createRoot } from "react-dom/client";
const root  = createRoot(document.getElementById('root'));

function Header(){
  return(
      <header className="header">
        <img src="src/assets/React.png" alt="react-log" className="header-img"/>
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
function MainContent(){
  return (
    <main>
        <h1>Reasons I am excited to learn React</h1>
        <ol>
          <li>React feels artistic</li>
          <li>Its feels like i will be able to develop fast</li>
        </ol>
      </main>
  )
}
function Footer(){
  return(
    <footer>
        <small> &copy; 2024 Singh development. All Right reserved. </small>
      </footer>
  )
}
function Page(){
  return(
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

root.render(
  <Page />
)