const list = [
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



//Lists in React
function App() {
  return (
    <div>
      <h1>my react stories</h1>
        <Search/>

    
      <hr />
        <List/>
    </div>
  );
}

/*search react component*/
function Search(){
  return(
      <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

      </div>
    )
}





///LIST component  {/*write jsx below inside <ul></ul>*/}
function List(){
  return (
    <ul>
      {list.map(function (item) {
        return (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </li>
        );
      })}
    </ul>
  )
}




export default App;
