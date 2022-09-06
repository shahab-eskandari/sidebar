import './App.css'; 
import Drawer from './Drawer';
import {useState} from 'react'; 

function App() {

  const [isOpen, setIsOpen] = useState(false); 

  return (
    <>
      <div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium inventore aspernatur natus doloribus ipsum facilis recusandae fugit eum distinctio laudantium saepe tempore, excepturi blanditiis animi exercitationem tenetur cumque atque eaque.
        </div>
        <button onClick={()=>setIsOpen(true)}>Open Drawer</button>
      </div>
      <div >
        <Drawer isOpen={isOpen} onClose={()=>setIsOpen(false)} position={'bottom'}>
          <h1>This is Drawer</h1>
          <div>The content of drawer goes here</div>
        </Drawer>
      </div>
    </>
  )
}

export default App
