import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { login } from "../actions/userActions";
import FormContainer from "../components/FormContainer";

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const redirect = location.search ? location.search.split("=")[1] : "/homee";
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();

    //dispatch login
    dispatch(login(email, password));
  };
  return (
    <FormContainer>
      <div className="mb-4">
        <h1 style={{ fontSize: "48px" }}>Sign In</h1>
      </div>
      {error && <Message variant="danger" children={error} />}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label className="mb-2">
            <h1>Email address</h1>
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4"
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label className="mb-2">
            <h1>Password</h1>
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <div className="form-gap"></div>
        <Button className="signBtn" type="submit" variant="primary">
          Sign In
        </Button>
      </Form>
      {/* <Row className="py-3">
        <Col>
          New Customer?
          <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
            <span className="login">Register</span>
          </Link>
        </Col>
      </Row> */}
    </FormContainer>
  );
};

export default LoginScreen;
