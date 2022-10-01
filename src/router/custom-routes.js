import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ScrollToTop from "../components/common/scroll-to-top/scroll-to-top";
import AdminDashboardPage from "../pages/admins/admin-dashboard-page";
import AdminUserEditPage from "../pages/admins/admin-user-edit-page";
import AdminUsersPage from "../pages/admins/admin-users-page";
import AdminVehiclesEditPage from "../pages/admins/admin-vehicle-edit-page";
import AdminVehiclesPage from "../pages/admins/admin-vehicles-page";
import NotFoundPage from "../pages/common/not-found-page";
import UnauthorizedPage from "../pages/common/unauthorized-page";
import AboutPage from "../pages/users/about-page";
import AuthPage from "../pages/users/auth-page";
import ContactPage from "../pages/users/contact-page";
import HomePage from "../pages/users/home-page";
import PrivacyPolicyPage from "../pages/users/privacy-policy-page";
import ProfilePage from "../pages/users/profile-page";
import ReservationDetailsPage from "../pages/users/reservation-details-page";
import ReservationsPage from "../pages/users/reservations-page";
import VehicleDetailsPage from "../pages/users/vehicle-details-page";
import VehiclesPage from "../pages/users/vehicles-page";
import AdminTemplate from "../templates/admin-template";
import UserTemplate from "../templates/user-template";
import ProtectedRoute from "./protected-route";

const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
            path="auth"
            element={
              <UserTemplate>
                <AuthPage />
              </UserTemplate>
            }
          />
          <Route
            path="unauthorized"
            element={
              <UserTemplate>
                <UnauthorizedPage />
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

          <Route path="user">
            <Route
              index
              element={
                <ProtectedRoute>
                  <UserTemplate>
                    <ProfilePage />
                  </UserTemplate>
                </ProtectedRoute>
              }
            />
            <Route path="reservations">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <UserTemplate>
                      <ReservationsPage />
                    </UserTemplate>
                  </ProtectedRoute>
                }
              />
              <Route
                path=":reservationId"
                element={
                  <ProtectedRoute>
                    <UserTemplate>
                      <ReservationDetailsPage />
                    </UserTemplate>
                  </ProtectedRoute>
                }
              />
            </Route>
          </Route>

          <Route path="admin">
            <Route
              index
              element={
                <ProtectedRoute admin={true}>
                  <AdminTemplate>
                    <AdminDashboardPage />
                  </AdminTemplate>
                </ProtectedRoute>
              }
            />
            <Route path="users">
              <Route
                index
                element={
                  <ProtectedRoute admin={true}>
                    <AdminTemplate>
                      <AdminUsersPage />
                    </AdminTemplate>
                  </ProtectedRoute>
                }
              />
              <Route
                path=":userId"
                element={
                  <ProtectedRoute admin={true}>
                    <AdminTemplate>
                      <AdminUserEditPage />
                    </AdminTemplate>
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="vehicles">
              <Route
                index
                element={
                  <ProtectedRoute admin={true}>
                    <AdminTemplate>
                      <AdminVehiclesPage />
                    </AdminTemplate>
                  </ProtectedRoute>
                }
              />
              <Route
                path=":vehicleId"
                element={
                  <ProtectedRoute admin={true}>
                    <AdminTemplate>
                      <AdminVehiclesEditPage />
                    </AdminTemplate>
                  </ProtectedRoute>
                }
              />
            </Route>
          </Route>

          <Route
            path="*"
            element={
              <UserTemplate>
                <NotFoundPage />
              </UserTemplate>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;
