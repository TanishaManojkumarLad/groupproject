import { useState } from "react";
export default function Signup() {
    return (
    <div>
        <div>Please Enter your details:</div>
        <div><UserForm/></div>
    </div>)
}

function UserForm() {
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [cpasswd, setCpasswd] = useState("");
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
        if (email.trim().length === 0) {

            errors.push("Email Address is required");
            e.preventDefault();
        }
        if (address.trim().length === 0) {

            errors.push("Address is required");
            e.preventDefault();
        }
        if (number.trim().length === 0) {

            errors.push("Contact number is required");
            e.preventDefault();
        }
        if (cpasswd.trim().length === 0) {

            errors.push("Confirm Password is required");
            e.preventDefault();
        }

        setErrors(errors);

    };

    return (
        <div>
            <form method="POST" onSubmit={CheckValue}>
                <div>
                    <lable id="id"> User Id: </lable>
                    <input type="text" onChange={(e) => setId(e.target.value)} />
                </div>
                <div>
                    <lable id="email"> Email Address: </lable>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <lable id="address"> Address: </lable>
                    <textarea onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div>
                    <lable id="number"> Contact Number: </lable>
                    <input type="text" onChange={(e) => setNumber(e.target.value)} />
                </div>
                <div>
                    <lable id="passwd"> Password: </lable>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <lable id="cpasswd"> Confirm Password: </lable>
                    <input type="password" onChange={(e) => setCpasswd(e.target.value)} />
                </div>
                <div style={{ color: "red" }}>
                    {errors.map((a) => (
                        <div> {a}</div>
                    ))}
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
        </div>
    );
}