import { Navigate, Outlet, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Protected from './components/route/Protected';
import CheckLoggedIn from './global/CheckLoggedIn';
import ErrorPage from './global/ErrorPage';
import Redirect from './global/Redirect';
import AnalyticsPage from './pages/AnalyticsPage';
import DashboardPage from './pages/DashboardPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import LoginPage from './pages/auth/LoginPage';
import ResetPasswordPage from './pages/auth/ResetPasswordPage';
import CreateTransactionPage from './pages/transaction/CreateTransactionPage';
import TransactionsPage from './pages/transaction/TransactionsPage';
import RegisterUserPage from './pages/user/RegisterUserPage';
import UpdateUserPage from './pages/user/UpdateUserPage';
import UsersPage from './pages/user/UsersPage';
import ViewUserPage from './pages/user/ViewUserPage';
import GenerateReportpage from './pages/report/GenerateReportPage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route
        path="/"
        element={
          <CheckLoggedIn>
            {/* Add  here all other validation or action to be taken before the children routes loads. */}
            <Outlet />
          </CheckLoggedIn>
        }
      >
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="login" element={<LoginPage />} />
        {/* <Route path="register" element={<RegisterPage />} /> */}
        <Route path="forgot-password" element={<ForgotPasswordPage />} />
        <Route path="reset-password/:name/:token" element={<ResetPasswordPage />} />

        <Route path="dashboard" element={<DashboardPage />}>
          <Route path="" element={<Redirect />} />
          <Route path="analytics" element={<Protected Component={AnalyticsPage} />} />
          <Route path="profile" element={<ViewUserPage />} />

          <Route path="transactions" element={<Protected Component={Outlet} />}>
            <Route path="" element={<TransactionsPage />} />
            <Route path="create" element={<CreateTransactionPage />} />
          </Route>

          <Route path="users" element={<Outlet />}>
            <Route path="" element={<Protected Component={UsersPage} allowed={['admin']} />} />
            <Route path=":id" element={<ViewUserPage />} />
            <Route path=":id/update" element={<Protected Component={UpdateUserPage} allowed={['admin']} />} />
            <Route path="create" element={<Protected Component={RegisterUserPage} allowed={['admin']} />} />
          </Route>

          <Route path="report" element={<Protected Component={GenerateReportpage} />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Route>
  )
);

export default router;
