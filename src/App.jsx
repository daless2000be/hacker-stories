import * as React from 'react';

/// list on stateful
  const initialstories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
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
  ];

const getAsyncStories = () =>
new Promise((resolve) =>
setTimeout(

() => resolve({ data: { stories:initialstories  } }),
2000
)
)




// use as prefix  and return array add value and key 
const useStorageState = (key,initialSate) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialSate
  );
  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value,key]);

  return [value,setValue]
};


const App = () => {


 const [searchTerm, setSearchTerm] = useStorageState(
  'search',
  'React'
  );

// 
const [stories,setStories] = React.useState([])
const [isLoading, setIsLoading] = React.useState(false);
const [isError, setIsError] = React.useState(false);

React.useEffect(()=>{
  setIsLoading(true)

  getAsyncStories().then(result =>{
    setStories(result.data.stories)
    setIsLoading(false)
    
  })
  .catch(()=> setIsError(true))
},[])


const handleRemoveStory = (item)=>{
  const newStories = stories.filter(
     (story) => item.objectID !== story.objectID
    )
  setStories(newStories)
}


  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>

     <InputWithLabel
     id='search'
     value={searchTerm}
     isFocused
     onInputChange={handleSearch}
     >

      <strong>Search:</strong>
    </InputWithLabel>

    <hr/>
    {isError && <p>Something went wrong ...</p>}


    {isLoading ? (
       <p>Loading ...</p>
      ):(

      <List list={searchedStories} 
        onRemoveItem={handleRemoveStory} 
      />
      )}
    </div>
  );
};

////
const InputWithLabel = ({
  id,
  value,
  type = 'text',
  onInputChange,
  isFocused,
  children,
}) => {
  const inputRef = React.useRef();

  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
      <label htmlFor={id}>{children}</label>
      &nbsp;
      <input
        ref={inputRef}
        id={id}
        type={type}
        value={value}
        onChange={onInputChange}
      />
    </>
  );
};





const List = ({ list, onRemoveItem }) => (
  <ul>
    {list.map((item) => (
      <Item 
        key={item.objectID} 
        item={item} 
          onRemoveItem={onRemoveItem}
        />

    ))}
  </ul>
);

const Item = ({ item, onRemoveItem }) => {
  const handleRemoveItem = ()=>{
    onRemoveItem(item)
  }
  return(
  <li>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
    <span>
      <button type='button' onClick={()=>onRemoveItem(item)}>
        Dismiss
      </button>

    </span>
  </li>


    )
}


export default App;
