import { UserData } from "../UserData/UserData";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import "../Form/InputForm.css";
const InputForm = () => {
  const [searchdata, setSearchData] = useState("");
  return (
    <>
      <div className="main-content">
        <Form className="form-content">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="label">Search Data</Form.Label>
            <br/>
            <Form.Control value={searchdata} onChange={(e)=>setSearchData(e.target.value)} className="form-input" type="email" placeholder="Enter Name" />
          </Form.Group>
        </Form>
        <div>
          <ul>
            {
              UserData.filter((el)=>{
                if(searchdata === ""){
                  return el;
                }
                else if(el.name.toLowerCase().includes(searchdata.toLowerCase())){
                  return el
                }
              }).map((e)=>{
                return(
                  <li key={e.id}>{e.name}</li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </>
  );
};
export default InputForm;
