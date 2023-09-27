import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../../style/style.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();


  // on submit form

  const handleSubmit = async () => {

    try {
      const res = await axios.post('/api/user/register',
        { name, email, password, phone, address, answer });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login")
      } else {
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }

  };

  return (
    <Layout title={"Register - Shop Any Time"}>
      <div className="form-container ">
        <form >
          <h4 className="title">Register Form</h4>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              placeholder="Enter Your Phone"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              placeholder="Enter Your Address"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              placeholder="What is Your Age"
              required
            />
          </div>
          <button onClick={handleSubmit} type="button" className="btn btn-primary">
            REGISTER
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default Register