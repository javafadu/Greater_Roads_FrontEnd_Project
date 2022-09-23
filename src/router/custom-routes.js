import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingPage from "../pages/common/loading-page";
import NotFoundPage from "../pages/common/not-found-page";
import UnauthorizedPage from "../pages/common/unauthorized-page";
import AboutPage from "../pages/users/about-page";
import AuthPage from "../pages/users/auth-page";
import ContactPage from "../pages/users/contact-page";
import HomePage from "../pages/users/home-page";
import PrivacyPolicyPage from "../pages/users/privacy-policy-page";
import VehicleDetailsPage from "../pages/users/vehicle-details-page";
import VehiclesPage from "../pages/users/vehicles-page";
import UserTemplate from "../templates/user-template";

const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <UserTemplate>
                <HomePage />
              </UserTemplate>
            }
          />
          <Route
            path="about"
            element={
              <UserTemplate>
                <AboutPage />
              </UserTemplate>
            }
          />
          <Route
            path="contact"
            element={
              <UserTemplate>
                <ContactPage />
              </UserTemplate>
            }
          />
          <Route
            path="privacy-policy"
            element={
              <UserTemplate>
                <PrivacyPolicyPage />
              </UserTemplate>
            }
          />
          <Route path="vehicles">
            <Route
              index
              element={
                <UserTemplate>
                  <VehiclesPage />
                </UserTemplate>
              }
            />
            <Route
              path=":vehicleId"
              element={
                <UserTemplate>
                  <VehicleDetailsPage />
                </UserTemplate>
              }
            />
          </Route>

          <Route
            path="unauthorized"
            element={
              <UserTemplate>
                <UnauthorizedPage />
              </UserTemplate>
            }
          ></Route>

          <Route
            path="auth"
            element={
              <UserTemplate>
                <AuthPage />
              </UserTemplate>
            }
          ></Route>

          <Route
            path="*"
            element={
              <UserTemplate>
                <NotFoundPage />
              </UserTemplate>
            }
          />
        </Route>

        <Route
          path="loading"
          element={
            <UserTemplate>
              <LoadingPage />
            </UserTemplate>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;
