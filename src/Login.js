import { useState } from "react"

export default function Login(){
   
    return(
     <div>
    <div>Please Enter Here:</div>
    <div> <UserForm/></div>
    </div>
    )
}

function UserForm() {
   const [id, setId] = useState("");
   const [password, setPassword] = useState("");
   const [errors, setErrors] = useState([]);

   const CheckValue = (e) => {
    var errors = [];
    if (id.trim().length === 0) {
     
      errors.push("User Id is required");
      e.preventDefault();
    }
    if (password.trim().length === 0) {
      
      errors.push("Password is required");
      e.preventDefault();
    }

    setErrors(errors);

   } ;

   return(
    <div>
        <form method="POST" onSubmit={CheckValue}>
          <div>
            <lable id="id"> User Id: </lable>
             <input type="text" onChange={(e) => setId(e.target.value)}/>
          </div>
          <div>
             <lable id="passwd"> Password: </lable>
             <input type="password" onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div style={{color:"red"}}>
            {errors.map((a)=>(
                <div> {a}</div>
            ))}
          </div>
          <div>
            <input type="submit"/>
          </div>
        </form>
    </div>
   );
}