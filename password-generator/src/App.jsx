import { useState , useCallback, useEffect, useRef} from "react"

function App() {

  const [length, setLength] = useState(9)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const copyPasswToClipboard = () => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }
  
  
  const passWordGenerator = useCallback(()=>{
    let pass = ""
    let char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    if(charAllowed) char+= "!@#$%^&*()-_=+[]{}|;:"
    if(numberAllowed) char += "0123456789"
    for(let i = 0; i<length; i++){
      pass += char.charAt(Math.floor(Math.random() * char.length + 1));
    }
    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword])
  
  
  useEffect(function(){
    passWordGenerator()
  }, [length, numberAllowed, charAllowed, passWordGenerator])
  
  

  return (
    <div className='text-white mt-50'>
      <div className='w-100 bg-gray-600 rounded-md'>
        <div className="flex justify-center">
            <input type="text" name="" id="" value={password} ref={passwordRef} className="w-60 bg-gray-300 h-10 mx-4 my-10 rounded-md text-black" placeholder="password"/>
            <button 
            onClick={copyPasswToClipboard}
            className="ml-4 bg-orange-800 mx-4 my-10 h-10 p-1 rounded-md">copy</button>
        </div>
        <div className="flex mb-4 mx-4 gap-4 text-sm">
          <input type="range"  name="" id="" className="mb-4 cursor-pointer" onChange={(e) => {setLength(e.target.value)}}/>
          <label className="text-orange-300">Length : {length}</label>
          <div className="flex items-center gap-1">
            <input type="checkbox" name="" id="" defaultChecked={numberAllowed} onChange={(e) => {setNumberAllowed((prev) => !prev)}}/>
            <label className="text-orange-300">Numbers</label>
          </div>
          <div className="flex items-center gap-1">
            <input type="checkbox" name="" id="" defaultChecked={charAllowed}  onChange={(e) => {setCharAllowed((prev) => !prev)}}/>
            <label className="text-orange-300">Characters</label>
          </div>
          

        </div>
        
      </div>
    </div>
  )
}

export default App
