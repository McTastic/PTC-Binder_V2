import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import MuiNextLink from "./MuiNextLink";

const Navbar = ({ navLinks }) => {
  return (
    <Toolbar
      component="nav"
      sx={{
        display: { xs: `none`, md: `flex` },
      }}
    >
      <Stack direction="row" spacing={4}>
        {navLinks.map(({ title, path, onClick }, i) => (
          <MuiNextLink
            key={`${title}${i}`}
            href={path}
            variant="button"
            sx={{ color: `white`, opacity: 1 }}
          >
            {title}
          </MuiNextLink>
        ))}
        <MuiNextLink
          href="/login"
          variant="button"
          title="Login"
          sx={{ color: `#ffffff`, opacity: 1, margin:"auto" }}
        >
          Login
        </MuiNextLink>
      </Stack>
    </Toolbar>
  );
};

export default Navbar;
