import BottomNavigation from "@mui/material/BottomNavigation";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <BottomNavigation
      sx={{
        backgroundColor: "#b9ac9f",
        bottom: 0,
        width: "100%",
      }}
    >
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          mt: '10px',
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "white",
          textDecoration: "none",
        }}
      >
        &copy; 2023
      </Typography>
    </BottomNavigation>
  );
};

export default Footer;
