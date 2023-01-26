import React from 'react'
 
function User({user, onRemove}){
    const { username, id} = user;
    return (
        <div id='memotext'>
              <b>{username}</b>
              <button id='memobutton' onClick={() => onRemove(id)}>삭제</button>
        </div>
    )
}
 
function MemoList({users, onRemove}) {
    return (
        <div>
          {
              users.map(
                  user => (<User user={user} key={user.id} onRemove={onRemove}/>)
              )
          }
        </div>
    )
}
 
export default MemoList;