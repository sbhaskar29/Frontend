import React, { useState } from 'react'

export default function Home() {
  let [username, setUsername] = useState("codegnan")
  const [age, setAge] = useState(2018);
  const [name, setName] = useState(" ")
  function submit() {
    alert(name)
    setName("")
  }
  
  return (
    <div>
      <h1>name: {username}</h1>
      <p>{age}</p>
      <input value={name} placeholder='Enter name' onChange={(e) => setName(e.target.value)} />
      <button onClick={submit}>submit</button>
    </div>
  )
}
