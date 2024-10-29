import { Box, AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: '100px' }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            IPD Ecommerce Demo
          </Typography>
          <ul className="flex justify-center items-center">
            <li className="mx-6">
              <a href="/">Startseite</a>
            </li>
            <li className="mx-6">
              <a href="/catalog">Katalog</a>
            </li>
            <li className="mx-6">
              <a href="/cart">Cart</a>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
