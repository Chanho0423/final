import React from 'react';
 
function CreateMemo({username, onChange, onCreate}){
    return (
        <div>
            <input 
                id="value"
                name="username" 
                placeholder="내용" 
                onChange={onChange} 
                value={username}
            />
            <button id="value_button" onClick={onCreate}>등록</button>
        </div>
    )
}
 
export default CreateMemo;
