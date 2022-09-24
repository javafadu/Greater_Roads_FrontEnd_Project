import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { getUser, login } from "../../../api/user-service";
import PasswordInput from "../password-input/password-input";
import { loginSuccess } from "../../../store/slices/auth-slice";
import  secureLocalStorage  from  "react-secure-storage";
import { toast } from "../../../utils/functions/swal";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().required("Please enter your password"),
  });

  const onSubmit = async (values) => {
    setLoading(true);

    try {
      let resp = await login(values);
      secureLocalStorage.setItem("token", resp.data.token);
      resp = await getUser();
      dispatch(loginSuccess(resp.data));
      navigate(-1);
    } catch (err) {
      console.log(err);
      toast(err.response.data.message,"error");
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Form noValidate onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          {...formik.getFieldProps("email")}
          isInvalid={formik.touched.email && formik.errors.email}
          isValid={formik.touched.email && !formik.errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.email}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <PasswordInput
          {...formik.getFieldProps("password")}
          isInvalid={formik.touched.password && formik.errors.password}
          isValid={formik.touched.password && !formik.errors.password}
          error={formik.errors.password}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={loading}>
        {loading && <Spinner animation="border" size="sm" />} Login
      </Button>
    </Form>
  );
};

export default LoginForm;
