import React from 'react';
import {useRef, useState} from 'react';
import CreateMemo from './CreateMemo';
import MemoList from './MemoList';

function Memo() {

  const [inputs, setInputs] = useState({
    username: ''
  })
  const {username} = inputs;

  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      inputs,
      [name]: value
    })
  }

  const [users, setUsers] = useState([
    {
        id:1,
        username: '자유롭게 사용하는 한줄 메모'
    }
  ]);
  const nextId = useRef(2);

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  }
  const onCreate = () =>{
    const user = {
      id: nextId.current,
      username
    }
    setUsers([...users, user])
  setInputs({
    username: ''
  })
  console.log(nextId.current);
  nextId.current += 1;
}
 
  return (
  <>
  <body>
  <div class="searchbox">
    <div class="header">
      <h1>Memo</h1>
    <CreateMemo 
      username={username} 
      onChange={onChange} 
      onCreate={onCreate}
    />
    
  </div>
  
    <div class="container">
      <MemoList users={users} onRemove={onRemove}/>
    </div>
  </div>
  </body>
  </>
  );

}

export default Memo;
