import './App.css'

// normal css
import Button1 from './components/example1/Button';

// inline css
import Button2 from './components/example2/Button';

// css in js
import Button3 from './components/example3/Button';

// styled components
import Button4 from './components/example4/Button';

// css modules
import Button5 from './components/example5/Button';

// sass *finger snaps*

function App() {
  return (
    <div className="App">
        <Button1 buttonText="Normal CSS" />
        <Button2 buttonText="Inline CSS" />
        <Button3 buttonText="CSS in JS" />
        <Button4 buttonText="Styled Components" />
        <Button5 buttonText="CSS Modules" />
    </div>
  )
}

export default App
