import  './App.css';
import {ListGroup} from "./components/BlockOfMessage";
import {ListGroupItem} from "./components/Message";


function App() {
  return (
    <div >
      <ListGroup >
        <ListGroupItem words={'big'} active={true}>?</ListGroupItem>
        <ListGroupItem words={'great'} disabled={true}>?</ListGroupItem>
        <ListGroupItem words={'interesting'}>\/</ListGroupItem>
        <ListGroupItem words={'deal'}></ListGroupItem>
      </ListGroup>
    </div>
  );
}

export default App;
