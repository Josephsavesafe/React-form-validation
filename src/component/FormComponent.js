import "./FormComponent.css";
import { useState } from "react";

const FormComponent = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");

  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorRePassword, setErrorRePassword] = useState("");

  const validateForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <form className="form" onSubmit={validateForm}>
        <h2>Form ลงทะเบียน</h2>
        <div className="form-control">
          <labal>ชื่อผู้ใช้</labal>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <small>{errorUserName}</small>
        </div>
        <div className="form-control">
          <labal>Email</labal>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <small>{errorEmail}</small>
        </div>
        <div className="form-control">
          <labal>รหัสผ่าน</labal>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <small>{errorPassword}</small>
        </div>
        <div className="form-control">
          <labal>ยืนยันรหัสผ่าน</labal>
          <input
            type="text"
            value={repassword}
            onChange={(e) => setRePassword(e.target.value)}
          />
          <small>{errorRePassword}</small>
        </div>
        <button type="submit">ลงทะเบียน</button>
      </form>
    </div>
  );
};

export default FormComponent;
