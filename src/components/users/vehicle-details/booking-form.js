import React from "react";
import { Button, FloatingLabel, Form, InputGroup } from "react-bootstrap";
import SectionHeader from "../common/section-header/section-header";
import * as Yup from "yup";
import { useFormik } from "formik";
import { isVehicleAvailable } from "../../../api/reservation-service";
import { useSelector } from "react-redux";
import { combineDateAndTime } from "../../../utils/functions/date-time";

const BookingForm = () => {
  const vehicle = useSelector((state) => state.reservation.vehicle);

  const initialValues = {
    pickUpLocation: "",
    dropOffLocation: "",
    pickUpDate: "",
    pickUpTime: "",
    dropOffDate: "",
    dropOffTime: "",
  };

  const validationSchema = Yup.object({
    pickUpLocation: Yup.string().required("Enter a pick-up location"),
    dropOffLocation: Yup.string().required("Enter a drop-off location"),
    pickUpDate: Yup.string().required("Select a pick-up date"),
    pickUpTime: Yup.string().required("Select a pick-up time"),
    dropOffDate: Yup.string().required("Select a drop-off date"),
    dropOffTime: Yup.string().required("Select a drop-off time"),
  });

  const onSubmit = (values) => {};

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const checkVehicleAvailability = async () => {
    const { pickUpDate, pickUpTime, dropOffDate, dropOffTime } = formik.values;

    try {
      const dto = {
        carId: vehicle.id,
        pickUpDateTime: combineDateAndTime(pickUpDate, pickUpTime),
        dropOffDateTime: combineDateAndTime(dropOffDate, dropOffTime),
      };

      const resp = await isVehicleAvailable(dto);

      console.log(resp.data);
    } catch (err) {}
  };

  const isInvalid = (field) => {
    return formik.touched[field] && formik.errors[field];
  };

  const isValid = (field) => {
    return formik.touched[field] && !formik.errors[field];
  };

  return (
    <>
      <SectionHeader title="Booking Form" />
      <Form noValidate>
        <FloatingLabel label="Pick-up location" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Pick-up location"
            {...formik.getFieldProps("pickUpLocation")}
            isInvalid={isInvalid("pickUpLocation")}
            isValid={isValid("pickUpLocation")}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.pickUpLocation}
          </Form.Control.Feedback>
        </FloatingLabel>

        <FloatingLabel label="Drop-off location" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Drop-off location"
            {...formik.getFieldProps("dropOffLocation")}
            isInvalid={isInvalid("dropOffLocation")}
            isValid={isValid("dropOffLocation")}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.dropOffLocation}
          </Form.Control.Feedback>
        </FloatingLabel>

        <InputGroup className="mb-3">
          <FloatingLabel label="Pick-up date">
            <Form.Control
              type="date"
              placeholder="Pick-up date"
              {...formik.getFieldProps("pickUpDate")}
              isInvalid={isInvalid("pickUpDate")}
              isValid={isValid("pickUpDate")}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.pickUpDate}
            </Form.Control.Feedback>
          </FloatingLabel>

          <FloatingLabel label="Time">
            <Form.Control
              type="time"
              placeholder="Time"
              {...formik.getFieldProps("pickUpTime")}
              isInvalid={isInvalid("pickUpTime")}
              isValid={isValid("pickUpTime")}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.pickUpTime}
            </Form.Control.Feedback>
          </FloatingLabel>
        </InputGroup>

        <InputGroup className="mb-3">
          <FloatingLabel label="Drop-off date">
            <Form.Control
              type="date"
              placeholder="Drop-off date"
              {...formik.getFieldProps("dropOffDate")}
              isInvalid={isInvalid("dropOffDate")}
              isValid={isValid("dropOffDate")}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.dropOffDate}
            </Form.Control.Feedback>
          </FloatingLabel>

          <FloatingLabel label="Time">
            <Form.Control
              type="time"
              placeholder="Time"
              {...formik.getFieldProps("dropOffTime")}
              isInvalid={isInvalid("dropOffTime")}
              isValid={isValid("dropOffTime")}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.dropOffTime}
            </Form.Control.Feedback>
          </FloatingLabel>
        </InputGroup>

        <Button
          variant="secondary"
          type="button"
          className="w-100"
          onClick={checkVehicleAvailability}
        >
          Check Availability
        </Button>
      </Form>
    </>
  );
};

export default BookingForm;
