import StudentRotes from "./Routes/StudentRoutes";
import AdminRoutes from "./Routes/AdminRoutes";
import StaffRoutes from "./Routes/StaffRoutes";

export default function App() {
  return (
    <>
      <StudentRotes />
      <AdminRoutes />
      <StaffRoutes />
    </>
  );
}
