import Link from "next/link";
import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import { colors } from "utils/theme";
import Menu from "@mui/material/Menu";
import Cart from "components/cart/cart";
import { useLocation } from "react-use";
import { useRouter } from "next/router";
import Button2 from "components/buttons";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Avatar from "@mui/material/Avatar";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import Navlogo from "components/navbar/navlogo";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import LogoutIcon from "@mui/icons-material/Logout";
import { routes, NavRoutes, userRoutes, authUserRoutes } from "components/navbar/data";
import {
  cartCss,
  cartLogoCss,
  logoMobilestyles,
  logoStyles,
  categoryTypeCss,
  categorydescCss,
} from "components/navbar/style";
import { useAppDispatch, useAppSelector } from "redux/store/store";
import cart from "assets/shared/desktop/icon-cart.svg";
import { categoryGroupCss } from "components/categoryGroup/style";
import { RandomlyPositionedModal, Backdrop } from "components/cart/style";
import speaker from "assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "assets/shared/desktop/image-category-thumbnail-earphones.png";
import headphones from "assets/shared/desktop/image-category-thumbnail-headphones.png";
import { useLogoutUserMutation } from "redux/api/auth.api";
import { toast } from "react-hot-toast";
import { selectAuthUser } from "redux/reducers/authUser.reducer";

const ResponsiveAppBar = () => {
  const router = useRouter();
  const loc = useLocation();
  const [open, setOpen] = React.useState(false);
  const { cartProducts } = useAppSelector(({ cartReducer }) => cartReducer);
  // const { user } = useAppSelector(({ authUserReducer }) => authUserReducer);
  const greg = useAppSelector((state) => selectAuthUser(state));
  console.log(greg);
  const [logout] = useLogoutUserMutation();
  const dispatch = useAppDispatch();
  const renderBackdrop = (props: any) => <Backdrop {...props} />;

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElNav(event.currentTarget);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElUser(event.currentTarget);

  const handleCloseNavMenu = () => setAnchorElNav(null);

  const handleCloseUserMenu = (path: string) => setAnchorElUser(null);

  const handleLogOutUser = async () => {
    try {
      const { status } = await logout().unwrap();
      setAnchorElUser(null);
      localStorage.setItem("jwt", "");
      toast.success(`${status}`);
      // dispatch(logUserOut());
      router.push("/");
    } catch (error) {
      setAnchorElUser(null);
      toast.error("Couldn't log out");
    }
  };
  return (
    <AppBar sx={{ backgroundColor: "black", padding: "1rem 0" }} position="sticky">
      <Container sx={{ maxWidth: { xs: "lg", xl: "xl" } }}>
        <Toolbar disableGutters>
          <Box onClick={() => router.push("/")} sx={logoStyles}>
            <Navlogo />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon fontSize="large" />
            </IconButton>

            <Drawer
              id="menu-appbar"
              anchor="top"
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <IconButton onClick={handleCloseNavMenu}>
                <CloseIcon fontSize="large" />
              </IconButton>
              <Box css={categoryGroupCss} style={{ marginTop: "10rem", marginBottom: "5rem" }}>
                <Box css={categoryTypeCss}>
                  <Box style={{ marginBottom: "-3rem" }}>
                    <Image width={146} height={146} alt="headphones image" src={headphones} />
                  </Box>

                  <Box css={categorydescCss}>
                    <h1>HEADPHONES</h1>

                    <Button2
                      onClick={() => router.push("/headphones")}
                      text="shop"
                      variant="BORDERLESS_BLACK"
                    />
                  </Box>
                </Box>

                <Box css={categoryTypeCss}>
                  <Box style={{ marginBottom: "-3rem" }}>
                    <Image width={146} height={146} alt="speaker image" src={speaker} />
                  </Box>

                  <Box css={categorydescCss}>
                    <h1>SPEAKER</h1>

                    <Button2
                      onClick={() => router.push("/speakers")}
                      text="shop"
                      variant="BORDERLESS_BLACK"
                    />
                  </Box>
                </Box>

                <Box
                  css={`
                    ${categoryTypeCss}
                    @media (max-width: 600px) {
                      margin-bottom: 0;
                    }
                  `}
                >
                  <Box style={{ marginBottom: "-3rem" }}>
                    <Image width={146} height={146} alt="earphones image" src={earphones} />
                  </Box>

                  <Box css={categorydescCss}>
                    <h1>EARPHONES</h1>

                    <Button2
                      onClick={() => router.push("/earphones")}
                      text="shop"
                      variant="BORDERLESS_BLACK"
                    />
                  </Box>
                </Box>
              </Box>
            </Drawer>
          </Box>

          <Box onClick={() => router.push("/")} sx={logoMobilestyles}>
            <Navlogo />
          </Box>

          <Box sx={{ flexGrow: 1, justifyContent: "center", display: { xs: "none", md: "flex" } }}>
            {routes.map((page: NavRoutes) => (
              <Button
                key={page.name}
                onClick={() => router.push(`${page.path}`)}
                sx={{
                  my: 2,
                  fontSize: "medium",
                  fontWeight: "bold",
                  color: loc.pathname == page.path ? colors.colorDarkPink : "#fafafa",
                  display: "block",
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Box css={cartLogoCss} onClick={() => setOpen(!open)}>
              {cartProducts.length > 0 && <p css={cartCss}>{cartProducts.length}</p>}
              <Image src={cart} alt="cart" />
            </Box>

            <Tooltip title="Open User Panel">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* <Avatar
                  sx={{ fontSize: "2rem", fontWeight: 700 }}
                  alt={`${user?.firstname?.slice(0, 1)}`}
                  src={user?.photo}
                /> */}
              </IconButton>
            </Tooltip>

            {/* {!user ? (
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {userRoutes.map((panel: NavRoutes) => (
                  <MenuItem
                    key={panel.path}
                    onClick={() => {
                      router.push(`${panel.path}`);
                      setAnchorElUser(null);
                    }}
                  >
                    <Box sx={{ display: "flex" }}>
                      <IconButton sx={{ fontSize: "3rem" }}>{panel.icon}</IconButton>
                      <Typography fontSize="large" textAlign="center">
                        {panel.name}
                      </Typography>
                    </Box>
                  </MenuItem>
                ))}
              </Menu>
            ) : (
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {authUserRoutes.map((panel: NavRoutes) => (
                  <MenuItem
                    key={panel.path}
                    onClick={() => {
                      router.push(`${panel.path}`);
                      setAnchorElUser(null);
                    }}
                  >
                    <Box sx={{ display: "flex" }}>
                      <IconButton sx={{ fontSize: "3rem" }}>{panel.icon}</IconButton>
                      <Typography fontSize="large" textAlign="center">
                        {panel.name}
                      </Typography>
                    </Box>
                  </MenuItem>
                ))}

                <MenuItem onClick={handleLogOutUser}>
                  <Box sx={{ display: "flex" }}>
                    <IconButton sx={{ fontSize: "3rem" }}>
                      <LogoutIcon />
                    </IconButton>
                    <Typography fontSize="large" textAlign="center">
                      Logout
                    </Typography>
                  </Box>
                </MenuItem>
              </Menu>
            )} */}
          </Box>
        </Toolbar>
      </Container>

      <RandomlyPositionedModal
        show={open}
        onHide={() => setOpen(false)}
        renderBackdrop={renderBackdrop}
        aria-labelledby="modal-label"
      >
        <Cart setOpen={setOpen} />
      </RandomlyPositionedModal>
    </AppBar>
  );
};
export default ResponsiveAppBar;
