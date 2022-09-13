import "./FormComponent.css";
import { useState } from "react";

const FormComponent = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");

  return (
    <div className="container">
      <form className="form">
        <h2>Form ลงทะเบียน</h2>
        <div className="form-control">
          <labal>ชื่อผู้ใช้</labal>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <small>error message</small>
        </div>
        <div className="form-control">
          <labal>Email</labal>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <small>error message</small>
        </div>
        <div className="form-control">
          <labal>รหัสผ่าน</labal>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <small>error message</small>
        </div>
        <div className="form-control">
          <labal>ยืนยันรหัสผ่าน</labal>
          <input
            type="text"
            value={repassword}
            onChange={(e) => setRePassword(e.target.value)}
          />
          <small>error message</small>
        </div>
        <button type="submit">ลงทะเบียน</button>
      </form>
    </div>
  );
};

export default FormComponent;
