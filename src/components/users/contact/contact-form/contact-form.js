import React, { useState } from "react";
import SectionHeader from "../../common/section-header/section-header";
import ContactInfo from "../contact-info/contact-info";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const initialValues = {
    name: "",
    subject: "",
    body: "",
    email: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Please enter your  name"),
    subject: Yup.string()
      .max(50, "Your subject should be max 50 characters")
      .min(5, "Your subject should be at least 5 characters")
      .required("Please enter your last name"),
    body: Yup.string()
      .max(200, "Your message should be max 50 characters")
      .min(20, "Your message should be at least 5 characters")
      .required("Please enter your address"),
    email: Yup.string().email().required("Please enter your email"),
  });
  const onSubmit = () => {};
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <Container>
      <Row>
        <Col md={6}>
          <SectionHeader title="Contact Us" subTitle="Need additional info?" />
          <p>
            Looking for a small or medium economy car rental or something a
            little larger to fit all the family? We have a great range of new
            and comfortable rental cars to choose from. Browse our fleet range
            now and rent a car online today.
          </p>
          <ContactInfo />
        </Col>
        <Col md={6}>
          <Form noValidate onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label> Name</Form.Label>
              <Form.Control
                type="text"
                {...formik.getFieldProps("name")}
                isInvalid={formik.touched.name && formik.errors.name}
                isValid={formik.touched.name && !formik.errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.name}
              </Form.Control.Feedback>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
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
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                {...formik.getFieldProps("subject")}
                isInvalid={formik.touched.subject && formik.errors.subject}
                isValid={formik.touched.subject && !formik.errors.subject}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.subject}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                maxLength={200}
                type="text"
                {...formik.getFieldProps("body")}
                isInvalid={formik.touched.body && formik.errors.body}
                isValid={formik.touched.body && !formik.errors.body}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.body}
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              disabled={!(formik.dirty && formik.isValid) || loading}
            >
              {loading && <Spinner animation="border" size="sm" />} Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default ContactForm;
