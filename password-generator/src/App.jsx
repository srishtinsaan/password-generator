import { useState } from "react"

function App() {

  const [length, setLength] = useState(9)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  return (
    <div className='text-white mt-50'>
      <div className='w-100 bg-gray-600 rounded-md'>
        <div className="flex justify-center">
            <input type="text" name="" id="" className="w-60 bg-gray-300 h-10 mx-4 my-10 rounded-md text-black" placeholder="password"/>
            <button className="ml-4 bg-orange-800 mx-4 my-10 h-10 p-1 rounded-md">copy</button>
        </div>
        <div className="flex mb-4 mx-4 gap-4 text-sm">
          <input type="range" name="" id="" className="mb-4 cursor-pointer"/>
          <label className="text-orange-600">Length : 6</label>
          <div className="flex items-center gap-1">
            <input type="checkbox" name="" id="" />
            <label className="text-orange-600">Numbers</label>
          </div>
          <div className="flex items-center gap-1">
            <input type="checkbox" name="" id="" />
            <label className="text-orange-600">Characters</label>
          </div>
          

        </div>
        
      </div>
    </div>
  )
}

export default App
