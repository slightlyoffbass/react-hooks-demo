import React, { useState } from 'react';
import ResourceList from '../components/ResourceList';
import UserList from '../components/UserList';

const App = () => {
  
  const [resource, setResource] = useState('posts');

  return (
    <div className="ui container">
      <UserList/>
      <div>
        <button 
          onClick={() => setResource( 'posts' )}>
            Posts
        </button>
        <button
          onClick={() => setResource( 'todos' )}>
            ToDos
        </button>
      </div>
      <ResourceList resource={resource}/>
    </div>
    );
}

export default App;
