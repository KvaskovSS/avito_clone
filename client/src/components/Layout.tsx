import { AppBar, Toolbar, Typography, Container, Box, Button } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import { useTheme, useMediaQuery } from '@mui/material';

const Layout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Авито Клон
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button 
              component={Link} 
              to="/list" 
              color="inherit"
              sx={{ fontSize: isMobile ? '0.8rem' : '1rem' }}
            >
              Все объявления
            </Button>
            <Button 
              component={Link} 
              to="/form" 
              color="inherit"
              sx={{ fontSize: isMobile ? '0.8rem' : '1rem' }}
            >
              Разместить
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ flex: 1, py: 4 }}>
        <Outlet />
      </Container>

      <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 3, mt: 'auto' }}>
        <Container maxWidth="lg">
          <Typography textAlign="center">
            © 2024 Авито Клон. Все права защищены.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;