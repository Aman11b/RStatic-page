import { createRoot } from "react-dom/client";
import { Fragment } from "react";
import '/src/index.css';
const root  = createRoot(document.getElementById('root'));

function Page(){
  return(
    <Fragment>
      <header>
        <img src="src/assets/React.png" alt="react-log" width='40px'/>
      </header>
      <main>
        <h1>Reasons I am excited to learn React</h1>
        <ol>
          <li>React feels artistic</li>
          <li>Its feels like i will be able to develop fast</li>
        </ol>
      </main>
      <footer>
        <small> &copy; 2024 Singh development. All Right reserved. </small>
      </footer>
    </Fragment>
  )
}

root.render(
  <Page />
)