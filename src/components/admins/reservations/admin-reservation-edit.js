import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Link, useParams } from "react-router-dom";
import {
  Form,
  Button,
  Row,
  Col,
  ButtonGroup,
  InputGroup,
} from "react-bootstrap";
import { getReservationByIdAdmin } from "../../../api/reservation-service";
import { getVehicles } from "../../../api/vehicle-service";
import { getDate, getTime } from "../../../utils/functions/date-time";

const AdminReservationEdit = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const { reservationId } = useParams();

  const [initialValues, setInitialValues] = useState({
    pickUpLocation: "",
    dropOffLocation: "",
    pickUpDate: "",
    pickUpTime: "",
    dropOffDate: "",
    dropOffTime: "",
    carId: "",
    status: "",
    userId: "",
  });

  const validationSchema = Yup.object({
    pickUpLocation: Yup.string().required("Enter the pick up place"),
    dropOffLocation: Yup.string().required("Enter the drop off place"),
    pickUpDate: Yup.string().required("Enter the pick up date"),
    pickUpTime: Yup.string().required("Enter the pick up time"),
    dropOffDate: Yup.string().required("Enter the drop off date"),
    dropOffTime: Yup.string().required("Enter the drop off time"),
    carId: Yup.number().required("Select a car"),
    status: Yup.string().required("Select a status"),
  });

  const onSubmit = (values) => {};

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    enableReinitialize: true,
  });

  const statusData = ["CREATED", "CANCELLED", "DONE"];

  const loadData = async () => {
    setLoading(true);

    try {
      const respReservations = await getReservationByIdAdmin(reservationId);
      const respVehicles = await getVehicles();

      const {
        pickUpLocation,
        dropOffLocation,
        dropOffTime,
        pickUpTime,
        status,
        userId,
        carId,
      } = respReservations.data;

      const dto = {
        pickUpLocation,
        dropOffLocation,
        pickUpDate: getDate(pickUpTime),
        pickUpTime: getTime(pickUpTime),
        dropOffDate: getDate(dropOffTime),
        dropOffTime: getTime(dropOffTime),
        carId: carId.id,
        status: status,
        userId: userId,
      };

      setInitialValues(dto);
      setVehicles(respVehicles.data);
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
      <fieldset disabled={initialValues.builtIn}>
        <Row>
          <Form.Group as={Col} md={4} lg={3} className="mb-3">
            <Form.Label>Pick-Up Location</Form.Label>
            <Form.Control
              type="text"
              {...formik.getFieldProps("pickUpLocation")}
              isInvalid={
                formik.touched.pickUpLocation && formik.errors.pickUpLocation
              }
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.pickUpLocation}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md={4} lg={3} className="mb-3">
            <Form.Label>Drop-off Location</Form.Label>
            <Form.Control
              type="text"
              {...formik.getFieldProps("dropOffLocation")}
              isInvalid={
                formik.touched.dropOffLocation && formik.errors.dropOffLocation
              }
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.dropOffLocation}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md={4} lg={3} className="mb-3">
            <Form.Label>Pick Up Time</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                type="date"
                {...formik.getFieldProps("pickUpDate")}
                isInvalid={
                  formik.touched.pickUpDate && formik.errors.pickUpDate
                }
              />
              <Form.Control
                type="time"
                {...formik.getFieldProps("pickUpTime")}
                isInvalid={
                  formik.touched.pickUpTime && formik.errors.pickUpTime
                }
              />
            </InputGroup>
            <Form.Control.Feedback type="invalid">
              {formik.errors.pickUpDate || formik.errors.pickUpTime}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md={4} lg={3} className="mb-3">
            <Form.Label>Drop Off Time</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                type="date"
                {...formik.getFieldProps("dropOffDate")}
                isInvalid={
                  formik.touched.dropOffDate && formik.errors.dropOffDate
                }
              />
              <Form.Control
                type="time"
                {...formik.getFieldProps("dropOffTime")}
                isInvalid={
                  formik.touched.dropOffTime && formik.errors.dropOffTime
                }
              />
            </InputGroup>
            <Form.Control.Feedback>
              {formik.errors.dropOffDate || formik.errors.dropOffTime}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md={4} lg={3} className="mb-3">
            <Form.Label>Vehicle</Form.Label>
            <Form.Select
              {...formik.getFieldProps("carId")}
              isInvalid={formik.touched.carId && formik.errors.carId}
            >
              <option value="1">Mercedes E-200</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {formik.errors.carId}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md={4} lg={3} className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Select
              {...formik.getFieldProps("status")}
              isInvalid={formik.touched.status && formik.errors.status}
            >
              {statusData.map((status, index) => (
                <option key={index} value={status}>
                  {status}
                </option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {formik.errors.status}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md={4} lg={3} className="mb-3">
            <Form.Label>Customer</Form.Label>
            <div>
              <Link to={`/admin/users/${initialValues.userId}`}>
                Get Customer
              </Link>
            </div>
          </Form.Group>
        </Row>
      </fieldset>

      <div className="text-end">
        <ButtonGroup aria-label="Basic example">
          <Button variant="primary" type="submit">
            Save
          </Button>
          <Button variant="secondary" type="button">
            Cancel
          </Button>
          <Button variant="danger" type="button">
            Delete
          </Button>
        </ButtonGroup>
      </div>
    </Form>
  );
};

export default AdminReservationEdit;
