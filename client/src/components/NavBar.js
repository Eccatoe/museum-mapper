import { useContext, useState } from "react"
import { UserContext } from "./UserContext"
import { Link, useNavigate } from "react-router-dom"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import Tooltip from "@mui/material/Tooltip"
import MenuItem from "@mui/material/MenuItem"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import AppAdapter from "../adapters/AppAdapter"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const theme = createTheme({
  typography: {
    h6: { color: "black" },
  },
})

const pages = ["login", "signup", "booktour"]
const settings = ["Profile", "Logout"]

function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)
  const { currentUser } = useContext(UserContext)
  const { setCurrentUser } = useContext(UserContext)
  let navigate = useNavigate()

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  function handleSelect(e) {
    const path = e.target.textContent.toLowerCase()
    if (path === "profile" && currentUser) {
      navigate("/profile")
    } else if (!currentUser) {
      navigate("/login")
    } else if (path === "logout") {
      AppAdapter.logout()
      setCurrentUser(null)
      navigate("/home")
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppBar
          style={{ backgroundColor: "#21364e", marginBottom: "20px" }}
          position="static"
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              >
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={`/home`}
                >
                  MUSEUM-MAPPER
                </Link>
              </Typography>

              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              >
                <Link style={{ color: "white" }} to={`/home`}>
                  Museum-Mapper
                </Link>
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    <Link style={{ color: "white" }} to={`/${page}`}>
                      {page}
                    </Link>
                  </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <AccountCircleIcon
                      fontSize="large"
                      style={{ color: "white" }}
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography onClick={handleSelect} textAlign="center">
                        {setting}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
      //{" "}
    </ThemeProvider>
  )
}

export default NavBar
