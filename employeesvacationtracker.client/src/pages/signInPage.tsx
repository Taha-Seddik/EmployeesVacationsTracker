import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { LoginForm } from "../components/auth/LoginForm";

const LeftSideContainer = styled(Box)(() => ({
  display: "flex",
  overflow: "hideen",
  position: "relative",
  flex: 1,
}));

const LogoImg = styled("img")(() => ({
  position: "absolute",
  top: 20,
  left: "50%",
  transform: "translateX(-50%)",
  width: 250,
}));

const CustomImg = styled("img")(() => ({
  objectFit: "cover",
  width: "100%",
  height: "100%",
}));

const RightSideContainer = styled(Box)(({ theme }) => ({
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const LoginEnvelop = styled(Box)(({ theme }) => ({
  // width: "80%",
  margin: "0 auto",
  // textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(8),
}));

const SignInPage: React.FC<{}> = () => {
  return (
    <Box display="flex" width="100%" height="100%">
      <LeftSideContainer>
        <LogoImg src="/images/logo-01.png" alt="logoImg" />
        <CustomImg src={"/images/loginLeftBg-01.png"} alt="loginImg" />
      </LeftSideContainer>
      <RightSideContainer className="rightSideBlock" flex={1}>
        {/* <LoginEnvelop> */}
        <LoginForm />
        {/* </LoginEnvelop> */}
      </RightSideContainer>
    </Box>
  );
};

export default SignInPage;
