
/*Handler Function in JSX*/

const App = () => {
const stories = [
  {
    title: 'React',
    url: 'https://react.dev/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
]

  return(
 <div>
      <h1>my react stories</h1>
        <Search/>

    
      <hr />
        <List list={stories}/>
    </div>

    )
  
   
}


 


/*search react component*/
 const Search = ()=> {
   const handleChange = (event)=>{
    //
    console.log(event)
    console.log(event.target.value)
   }


  return(
     <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />

      </div>

    )

 }
  
    
  

/*refactor function to const  => ()  no return*/
 const List = (props) =>(
  
    <ul>
      {props.list.map((item)=> (
        <Item key={item.objectID} item={item}/>
        
      ))}
    </ul>
  
)


 /*            */
const Item = (props)=>(
  <li>
    
      <span>
        <a href={props.item.url}>{props.item.title}</a>
      </span>
      <span>{props.item.author}</span>
      <span>{props.item.num_comments}</span>
      <span>{props.item.points}</span> 
    
  </li>
)






export default App;
