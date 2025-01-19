import { createRoot } from "react-dom/client";
import '/src/index.css';
const root  = createRoot(document.getElementById('root'));

root.render(
  <main>
    <img src="src/assets/React.png" width='40px' alt="react-logo"/>
    <h1>Fun facts about React</h1>
    <ul>
      <li>was first released in 2013</li>
      <li>was originally created by Jordan Walke</li>
      <li>has well over 200k stars on Github</li>
      <li>Is maintained be Meta</li>
      <li>Powers thousands of enterprise app ,including mobile apps</li>
    </ul>
  </main>
)