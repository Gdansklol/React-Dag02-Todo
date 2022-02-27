// 3 commando körde
//npx create-reat-app todo
//cd todo
//npm start ( själv dev )
//boiler-plate ,det har vi gåttt igenom
//klista in i chatten 

//Vad vi vill ge åsta komma med appen?
//Vi vill kunna ha en lista över todos
//Vi vill kunna skapa todo,
//vi vill kunna ta bort todo
//Jag tänker lämnar på den nivåande börja
//Vi ska inte göra jätte spännande utan vi ska ha en lista med
//todos ,kan lägga till todos lista,och ta bort ur listan.
//all rigt så , vi hade en kort beskrivning, vad vi behöver..

//så jag tänker att vi börjar direkt på listan, vi kommer
//behöva nån search lista så hålla alla todos.
//som vi tittade igår när vi vill ha nån form av state som vi vill kunna
//titta på ändra som en response som nån hände, som vi gjorde emoji
//lista, så använder vi useState...Vi kommer göra precis samma sak  här igen..
// ... useState, vi impoterar {useState} på en gång..
// och useState kommer ta en tom array som start, börjar med inga todos i listan 
//och sen får ändra  av listan och hämta ut själva todos.
//Så vi behöver köra här destructioning som vi pratade igår.
// vi behöver hämta ut två värden själva setTodos listan 
//och sen en To som
// ändra statet  ex)  const [todos, setTodos]= useState([])
//Så vi har våran lista med todos, vi har sättat upp 
//uppdaterat listan. Nu skulle vi vill ha lägga till nåt i
// den här listan. Så jag tänker först lägget bara lägga till
//en kanpp,  vi behöver nånting , lägga till som event ,, lägga till i
//den här listan, 

// plugin, extention i vs code, ES7 + React/Redus/React-Native snippers

//Vi går tillbaks till koden. Som sagt vi vill ha nåt sätt
// att göra i listan , lägga till  en kanpp return(<div> <button></button>
// </div> )den ska göra <button> ADD TODO</button>, 
//men vi behöver sådnaa function som kanppen ska köra
// och lägga till ... jag tänker att vi skapa upp en funtion här
//ex) 2.  const addTodo =()=>{} ...
//add Todo som arrow function och i den här lägget så
//(behöve inte ta några parametra utan vi vill bara 
//köra setTodo functionen där vi vill lägga till ett )
//..... ähhh   , vi ska skpa variabel först , nya todo

//3.{    const newTodo {}}...
// Så vi lägger till lista , och våra nya todo tänker jag
//först lägget ska ha en { titel: //som en hårdkodat sträng 'Hello World!' ,
//väldigt fint,   och en beskrivning : description ..
// här ska vi skriv nåt tevligt : 'Ha en bra dag!' }
// försiktigt för hur många dubbla tecken : ''
//  en väldigt enkelt objekt , en titel och en beskrivning.
// sen så vill vi uppdatera den här todos listan ..

// sen vi vill uppdatera todos lista
//för att skicka in 


      // {}
      // {todo.map}
      // {todos.map(()=>{})}
      // {todos.map(({titel,description})=>{})}
      // {todos.map(({titel,description})=>)}
      // {todos.map(({titel,description})=><Todo/>)} 
      // {todos.map((todo)=><Todo {...todo} />)} 



import {useState} from 'react';
import './App.css';
import Todo from './Todo';

function App() {
  const [id,setId]=useState(0)
  const incrementCounter = ()=>{
    setId((previousValue)=> previousValue +1)
      

  }

  const [title, setTitle]= useState('')
  const [todos, setTodos]= useState([])
  const addTodo = ()=>{
    const newTodo= {
      id:id,
      title:title,
      description:'Todo list !'
    }
    setTodos([...todos, newTodo])
    incrementCounter()
  }

  const deleteTodo = (id)=>{
    const filteredTodos = todos.filter((todo)=> todos.id !== id)
    setTodos(filteredTodos)
  }

  return (
    <div>
      <div style={{display:'flex', padding:'20px' }}>
    <label><input value={title} onChange={(event)=>{
      setTitle(event.target.value)
      console.log(event.target.value)
    }} /></label>
      <label><input onChange={()=>{

    }} /></label>
      <button onClick={addTodo}>ADD TODO</button>
      </div>
      {todos.map(({id,titel,description})=>{
      return <Todo key={id} id={id} title={title} description={description} onDelete={deleteTodo}/>
      })} 
    </div>
  );
}

export default App;
