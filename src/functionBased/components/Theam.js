import React, {useState} from "react"

function Theam(props){
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
      if (theme === 'light') {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    }

    return  <div className="container {theme}">
    <div className="row">
        <div className="col-sm-12">
            <h3>This is the text</h3>
            <button onClick={toggleTheme}>Toggle theme</button>
        </div>
    </div>
</div>;
}

export default Theam