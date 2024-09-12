import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { signupRoute } from "../utils/APIRoutes";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";


function HospRegisterForm() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    hname: "hname",
    htype: "htype",
    rnum: "rnum",
    address: "address",
    username: "username",
    password: "password",
    pincode: "pincode",
    ohours: "ohours",
    slinks: "slinks",
    facilities: "facilities",
  });

  const toastOptions = {
    theme: "light",
    position: "bottom-right",
    pauseOnHover: true,
    autoClose: 5000,
    draggable: true,
    transition: Slide,
  };


  const handleChange = (event) => {
    console.log(event.target.name, event.target.value);
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("handle submit......", values);

    const {
      hname,
      htype,
      rnum,
      address,
      username,
      password,
      pincode,
      ohours,
      slinks,
      facilities,
    } = values;
    const { data } = await axios.post(signupRoute, {
      hname,
      htype,
      rnum,
      address,
      username,
      password,
      pincode,
      ohours,
      slinks,
      facilities,
    });
    console.log("response....", data);

    if (data.status === false) {
      toast.error(data.msg, toastOptions);
      return false;
    }
    if (data.status === true) {
      console.log("trueeeee.......",data.hospProfile);
      // localStorage.setItem(secretKey, JSON.stringify(data.user));
      navigate("/hospitals");
    }
  };

  return (
    <div className="text-xl text-gray-200 font-medium ">
      <Form onSubmit={(event) => {
          handleSubmit(event);
        }} method="get">
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>
                Hospital Name : <span className="text-rose-700">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  handleChange(e);
                }}
                placeholder="Enter Your Name"
                className="w-full"
                name="hname"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail1">
              <Form.Label>
                Hospital Type: <span className="text-rose-700">*</span>
              </Form.Label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="htype"
                onChange={(e) => {
                  handleChange(e);
                }}
              >
                {/* <option selected>Select hospital type</option> */}
                <option value="1">Public</option>
                <option value="2">Private</option>
              </select>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail1">
              <Form.Label>
                Registration Number: <span className="text-rose-700">*</span>
              </Form.Label>
              <Form.Control
                onChange={(e) => {
                  handleChange(e);
                }}
                name="rnum"
                type="Number"
                placeholder="Enter Hospital Registration Number"
                className="w-full"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail1">
              <Form.Label>
                Address:<span className="text-rose-700">*</span>
              </Form.Label>
              <Form.Control
                name="address"
                onChange={(e) => {
                  handleChange(e);
                }}
                type="text"
                placeholder="Enter Hospital Address"
                className="w-full"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail1">
              <Form.Label>
                Username:<span className="text-rose-700">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  handleChange(e);
                }}
                placeholder="Enter username"
                className="w-full"
                name="username"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail1">
              <Form.Label>
                Password:<span className="text-rose-700">*</span>
              </Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => {
                  handleChange(e);
                }}
                placeholder="Enter hospital password"
                className="w-full"
                name="password  "
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail1">
              <Form.Label>
                Pincode:<span className="text-rose-700">*</span>
              </Form.Label>
              <Form.Control
                name="pincode"
                onChange={(e) => {
                  handleChange(e);
                }}
                type="number"
                placeholder="Enter Pincode"
                className="w-full"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail1">
              <Form.Label>
                Registration Documents:<span className="text-rose-700">*</span>
              </Form.Label>
              <Form.Control type="file" className="w-full" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail1">
              <Form.Label>
                Operating Hours: <span className="text-rose-700">*</span>
              </Form.Label>
              <Form.Control
                name="ohours"
                onChange={(e) => {
                  handleChange(e);
                }}
                type="text"
                placeholder="Enter Operating Hours"
                className="w-full"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail1">
              <Form.Label>
                Hospital Picture:<span className="text-rose-700">*</span>
              </Form.Label>
              <Form.Control name="hpic" type="file" className="w-full" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail1">
              <Form.Label>Social Links:</Form.Label>
              <Form.Control
                type="links"
                onChange={(e) => {
                  handleChange(e);
                }}
                name="slinks"
                placeholder="Enter Hospital Social links (if any)"
                className="w-full"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail1">
              <Form.Label>Facilities:</Form.Label>
              <Form.Control
                name="facilities"
                onChange={(e) => {
                  handleChange(e);
                }}
                type="text"
                placeholder="Enter facilities like ICU, OPD etc"
                className="w-full"
              />
            </Form.Group>
          </Col>
        </Row>

        <div className="mt-4 ">
          <Button
            variant="primary"
            className="px-5 py-2 font-medium bg-blue-500"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </Form>
      <ToastContainer />

    </div>
  );
}

export default HospRegisterForm;
