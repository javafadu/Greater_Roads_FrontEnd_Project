import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Form,
  Spinner,
  Row,
  Col,
  ButtonGroup,
  Alert,
} from "react-bootstrap";
import * as Yup from "yup";
import ReactInputMask from "react-input-mask-next";
import { getVehicle } from "../../../api/vehicle-service";

const AdminVehicleEdit = () => {
  const [saving, setSaving] = useState(false);
  const [deleting, setdeleting] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { vehicleId } = useParams();

  const [initialValues, setInitialValues] = useState({
    model: "",
    doors: "",
    seats: "",
    luggage: "",
    transmission: "",
    airConditioning: "",
    age: "",
    pricePerHour: "",
    fuelType: "",
    builtIn: false,
    image: "",
  });

  const validationSchema = Yup.object({
    model: Yup.string().required("Please enter model"),
    doors: Yup.number().required("Please enter doors number"),
    seats: Yup.number("Please enter seat number").required(),
    luggage: Yup.number().required("Please enter luggage capacity"),

    transmission: Yup.string().required("Please enter transmission type"),
    airConditioning: Yup.bool().required(
      "Please set airConditioning true or false"
    ),
    age: Yup.number().required("Please enter age of vehicle"),
    pricePerHour: Yup.number().required("Please enter price per hour"),
    fuelType: Yup.string().required("Please enter fuelType"),
    image: Yup.string().required("Please enter fuelType"),
  });

  const onSubmit = () => {};

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    enableReinitialize: true, // sonradan formik initialValues değerini tekrar initialize yapmak için kullandık
  });

  const loadData = async () => {
    try {
      const resp = await getVehicle(vehicleId);
      console.log(resp.data);
      setInitialValues({ ...resp.data, image: "" });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Form noValidate onSubmit={formik.handleSubmit}>
      <Row>
        <Form.Group as={Col} md={6} lg={4} className="mb-3">
          <Form.Label>Model</Form.Label>
          <Form.Control
            type="text"
            {...formik.getFieldProps("model")}
            isInvalid={formik.touched.model && formik.errors.model}
            isValid={formik.touched.model && !formik.errors.model}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.firstName}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md={6} lg={4} className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            {...formik.getFieldProps("lastName")}
            isInvalid={formik.touched.lastName && formik.errors.lastName}
            isValid={formik.touched.lastName && !formik.errors.lastName}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.lastName}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md={6} lg={4} className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            as={ReactInputMask}
            mask="(999) 999-9999"
            {...formik.getFieldProps("phoneNumber")}
            isInvalid={formik.touched.phoneNumber && formik.errors.phoneNumber}
            isValid={formik.touched.phoneNumber && !formik.errors.phoneNumber}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.phoneNumber}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md={6} lg={4} className="mb-3">
          <Form.Label>Email </Form.Label>
          <Form.Control
            type="email"
            {...formik.getFieldProps("email")}
            isInvalid={formik.touched.email && formik.errors.email}
            isValid={formik.touched.email && !formik.errors.email}
            disabled
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md={6} lg={4} className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            {...formik.getFieldProps("address")}
            isInvalid={formik.touched.address && formik.errors.address}
            isValid={formik.touched.address && !formik.errors.address}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.address}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md={6} lg={4} className="mb-3">
          <Form.Label>Zip Code</Form.Label>
          <Form.Control
            type="text"
            {...formik.getFieldProps("zipCode")}
            isInvalid={formik.touched.zipCode && formik.errors.zipCode}
            isValid={formik.touched.zipCode && !formik.errors.zipCode}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.zipCode}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md={6} lg={4} className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            {...formik.getFieldProps("password")}
            isInvalid={formik.touched.password && formik.errors.password}
            isValid={formik.touched.password && !formik.errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.password}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md={6} lg={4} className="mb-3">
          <Form.Label>Roles</Form.Label>
          <div>
            <Form.Check
              label="Customer"
              type="checkbox"
              name="roles"
              value="Customer"
              checked={formik.values.roles.includes("Customer")}
              onChange={formik.handleChange}
            />
            <Form.Check
              label="Admin"
              type="checkbox"
              name="roles"
              value="Administrator"
              checked={formik.values.roles.includes("Administrator")}
              onChange={formik.handleChange}
            />
          </div>
        </Form.Group>
      </Row>

      {initialValues.builtIn && (
        <Alert variant="danger">
          Built-in accounts can not be deleted and updated
        </Alert>
      )}

      <div className="text-end">
        <ButtonGroup aria-label="Basic example">
          <Button
            variant="secondary"
            type="button"
            onClick={() => navigate(-1)}
          >
            Cancel
          </Button>
          {!initialValues.builtIn && (
            <>
              <Button variant="primary" type="submit" disabled={saving}>
                {saving && <Spinner animation="border" size="sm" />} Update
              </Button>
              <Button variant="danger" type="button" disabled={deleting}>
                {deleting && <Spinner animation="border" size="sm" />} Delete
              </Button>
            </>
          )}
        </ButtonGroup>
      </div>
    </Form>
  );
};

export default AdminVehicleEdit;
