import React , {useState} from 'react'
import logo from './logo.svg';

import Icon from './components/icon';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Card , CardBody , Button , Container , Col , Row} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const arr = new Array(9).fill("empty")

const App = () => {

  const [isCross,setIsCross] = useState(false)
  const [winMesage,setWinMesage] = useState("")

  const reloadGame =()=> {
    setIsCross(false);
    setWinMesage("");
    arr.fill("empty",0,9);
  }
  
  const checkIsWinner =()=> {
    if(arr[0]===arr[1] && arr[1]===arr[2] && arr[0]!=="empty"){
      setWinMesage(`${arr[0]} wins`)
    }else if(arr[0]===arr[3] && arr[3]===arr[6] && arr[0]!=="empty"){
      setWinMesage(`${arr[0]} wins`)
    }else if(arr[0]===arr[4] && arr[4]===arr[8] && arr[0]!=="empty"){
      setWinMesage(`${arr[0]} wins`)
    }else if(arr[3]===arr[4] && arr[4]===arr[5] && arr[3]!=="empty"){
      setWinMesage(`${arr[3]} wins`)
    }else if(arr[6]===arr[7] && arr[7]===arr[8] && arr[6]!=="empty"){
      setWinMesage(`${arr[6]} wins`)
    }else if(arr[1]===arr[4] && arr[4]===arr[7] && arr[1]!=="empty"){
      setWinMesage(`${arr[1]} wins`)
    }else if(arr[2]===arr[5] && arr[5]===arr[8] && arr[2]!=="empty"){
      setWinMesage(`${arr[2]} wins`)
    }else if(arr[2]===arr[4] && arr[4]===arr[6] && arr[2]!="empty"){
      setWinMesage(`${arr[2]} wins`)
    }
  }
  const changeItem = itemNumber => {
    if(winMesage){
      return toast(winMesage, {type : "success" });

    }
    if(arr[itemNumber]=="empty"){
      arr[itemNumber]= isCross ? "cross":"circle";
      setIsCross(!isCross)
    }else{
      return toast ( "already filled", {type: "error"});
    }
    checkIsWinner();
  }

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center"/>
      <Row>
        <Col md={6} className="offset-md-3">
          {winMesage ? (
            <div className="mb-2 mt-2">
              <h1 className="text-primary text-uppercase text-center">
               {winMesage}
                </h1>
                <Button color="success" block onClick={reloadGame}>Reload the Game</Button>
              </div> ) : (
              <h1 className="text-center text-warning">
              {isCross ? "cross": "circle"} turns
            </h1>
           ) }
          <div className="grid">
            {arr.map((item, index) => (
              <Card color="warning" onClick = {() => changeItem(index) }>
                <CardBody className="box">
                  <Icon name={item}/>
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}


export default App;
