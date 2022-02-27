import { useState } from "react"
import './App.css';

import Contact from './components/Contact'
import About from './components/About'
import Education from './components/Education'
import More from './components/More'
import Experience from './components/Experience'
import { CV } from './CV/CV';
import ButtonComp from "./components/ButtonComp";


function App() {
  const { contact, education, experience, languages, habilities, volunteer } = CV //Hacemos destructuring para un codigo más limpio
  const [showEducation, setShowEducation] = useState(true)



  return (
    <div className="App">
        <Contact contact={contact} />
        <About about={contact} />
        <Education education={education} />
        <ButtonComp/>
         <Experience experience={experience} />
	      <More
        languages={languages}
        habilities={habilities}
        volunteer={volunteer}
	      />
    </div>
  );
}




export default App;
