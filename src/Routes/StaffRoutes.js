/*
This file holds the routing information for the admin pages
*/
import { Route, Routes } from "react-router-dom";
import Error from "../pages/Error";
import StaffTemplate from "../pages/Staff/StaffTemplate";
import StaffProfile from "../pages/Staff/StaffProfile";
import ApproveOutpass from "../pages/Staff/ApproveOutpass";

export default function StaffRoutes() {
  return (
    <Routes>
      <Route path="/Staff" element={<StaffTemplate />}>
        <Route path="home" element={<StaffProfile />} />
        <Route path="approve" element={<ApproveOutpass />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}
