import { Box, Container, Typography } from '@mui/material';
import LoginForm from '../../components/auth/LoginForm';
import HeaderUnderline from '../../global/HeaderUnderline';

const LoginPage = () => {
  return (
    <Container className="w-full h-full flex" maxWidth="xl">
      <Box
        className="relative w-7/12 h-full hidden sm:flex overflow-y-auto"
        sx={{
          backgroundImage: 'url("/images/home-image.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',
        }}
      >
         <div
    className="absolute inset-0 bg-black opacity-50"
    aria-hidden="true"
  ></div>
        <Box className="flex flex-col gap-2 p-8 z-10 w-full m-auto">
          <Box className="bg-gray-50/80 h-[130px] px-8 lg:px-16 py-4 backdrop-blur-sm">
            <img src="/images/eric-logo.png" alt="logo" className="h-full" />
          </Box>

          <Box className="w-full px-8 lg:px-16 py-6 flex flex-col gap-3 bg-primary-light/60 text-white backdrop-blur-sm">
            <Typography variant="header" className="font-semibold leading-tight">
              Eric Money
            </Typography>
            <Typography variant="body1">
            Eric Money is a platform Eric from Code of Africa uses to track his finances. With his permission, you can use it too to improve financial discipline by recording income, expenses, and savings.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box className="w-full sm:w-5/12 h-full overflow-y-auto flex">
        <Box className="w-full m-auto p-4 sm:p-8">
          <Box className="max-w-[200px] w-full m-auto mb-8 sm:hidden">
            <img src="/images/eric-logo.png" alt="logo" className="w-full" />
          </Box>
          <Box className="w-full flex flex-col items-center mb-6">
            <Typography variant="header" className="text-center font-semibold text-dark mb-2">
              Login
            </Typography>
            <HeaderUnderline className="m-auto" />
          </Box>
          <LoginForm />
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
