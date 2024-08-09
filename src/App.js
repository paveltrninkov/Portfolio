import {useRef, useState} from 'react'
import './Assets/App.css';
import me from './Assets/Me.png'
import calculator from './Assets/calculator.jpg'
import shoe from './Assets/shoe.jpg'
import python from './Assets/python.png'
import golf from './Assets/golf.jpg'
import { type } from '@testing-library/user-event/dist/type';

function App() {
  const projects = useRef(null);
  const contact = useRef(null);
  const [name, nameSet] = useState();
  const [email, emailSet] = useState();
  const [enquiry, enquirySet] = useState("");
  const [message, messageSet] = useState();
  let valid = true;

  const scrollToSection = (section) => {
    window.scrollTo({
      top: section.current.offsetTop,
      behavior: 'smooth'
    })
  }

  const Submitform = (e) => {
    e.preventDefault();

    if (!name || name === "") {
      valid = false
    }

    if (!email || email === "") {
      valid = false;
    }

    if (enquiry === " " || enquiry === "" || !enquiry) {
      valid = false;
    }

    if (!message || message === "") {
      valid = false;
    }

    if (valid) {
      // I'm not letting people spam emails/messages to me, so insert code here
    }
  }
  
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <a href="https://github.com/paveltrninkov">GitHub</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/pavel-trninkov/">LinkedIn</a>
            </li>
            <li onClick={() => scrollToSection(projects)}>
              Projects
            </li>
            <li onClick={() => scrollToSection(contact)}>
              Contact Me
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="AboutMe">
          <img src={me} alt="Face of me"/>
          <h1>Hello, I am Pavel Trninkov!</h1>
          <p>An aspiring full stack developer in hopes of beggining my journey in this field.</p>
          <h2>Skills</h2>
          <ul>
            <li>C#</li>
            <li>Transact-SQL</li>
            <li>C#</li>
            <li>Razor</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Vue</li>
            <li>MongoDB</li>
            <li>Front-End</li>
            <li>Back-End</li>
          </ul>
        </section>

        <section ref={projects} className="Projects">
          <h2>Projects</h2>
          <div>
            <h2>Calculator</h2>
            <img src={calculator} alt='Calculator'/>
            <p>A simple calculator with Addition, Subtraction, Division and Multiplication functionality. Created with React. <a href='https://github.com/paveltrninkov/Calculator'>See More &rarr;</a></p>
          </div>
          <div>
            <h2>Shoe Shop</h2>
            <img src={shoe} alt='Shoe'/>
            <p>A website created to sell shoes. Has cart and browse functionality. Created with Vue and MongoDB. <a href='https://github.com/paveltrninkov/Python-Algorithms'>See More &rarr;</a></p>
          </div>
          <div>
            <h2>Python Algorithms</h2>
            <img src={python} alt='Python'/>
            <p>A file containing different sorting algorithms. Used as notes to better understand the language and algorithms. <a href='https://github.com/paveltrninkov/Python-Algorithms'>See More &rarr;</a></p>
          </div>
          <div>
            <h2>Golf Course</h2>
            <img src={golf} alt='Golf'/>
            <p>A web-app created and designed to schedule golf for different tiered users. Created in C#, Razor and Transact-SQL. <a href='https://github.com/paveltrninkov/BAIS3130'>See More &rarr;</a></p>
          </div>
        </section>

        <section ref={contact} className="ContactMe">
          <h2>Contact Me</h2>
          <form method="post" onSubmit={Submitform}>
            <div>
              <label htmlFor="name">Name:</label>
              <input onChange={(event) => {nameSet(event.target.value)}}
               type="text" id="name" placeholder="Bob" required></input>
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <input onChange={(event) => {emailSet(event.target.value)}}
               type="email" id="email" placeholder="Email@email.com" required></input>
            </div>

            <div>
              <label htmlFor="enquiry">Type of enquiry:</label>
              <select id="enquiry" onChange={(event) => {enquirySet(event.target.value)}}>
                  <option value=" ">Select...</option>
                  <option value="work">Work Opportunity</option>
                  <option value="question">Ask me something</option>
                  <option value="connect">Connect with me</option>
              </select>
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <input onChange={(event)=>{messageSet(event.target.value)}}
              type="text" id='message' placeholder='Something Nice.' required minLength='25'></input>
            </div>

            <div>
              <button type="submit">Message me!</button>
            </div>
          </form>
        </section>
      </main>

      <footer>
        <p>Pavel Trninkov &copy; 2024</p>
      </footer>
      
    </div>
  );
}

export default App;
