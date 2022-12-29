import LoginIcon from "@mui/icons-material/Login";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import Person2Icon from "@mui/icons-material/Person2";
import SettingsIcon from "@mui/icons-material/Settings";
import LocalMallIcon from "@mui/icons-material/LocalMall";

export interface NavRoutes {
  name: string;
  path: string;
  icon?: any;
}

export const routes: NavRoutes[] = [
  { name: "Home", path: "/" },
  { name: "HEADPHONES", path: "/headphones" },
  { name: "SPEAKERS", path: "/speakers" },
  { name: "EARPHONES", path: "/earphones" },
];

export const userRoutes: NavRoutes[] = [
  { name: "Login", path: "/auth/login", icon: <LoginIcon /> },
  { name: "Signup", path: "/auth/signup", icon: <VpnKeyIcon /> },
];

export const authUserRoutes: NavRoutes[] = [
  { name: "Profile", path: "/user/me", icon: <Person2Icon /> },
  { name: "My Orders", path: "/user/my-orders", icon: <LocalMallIcon /> },
  { name: "Profile Settings", path: "/user/profile-settings", icon: <SettingsIcon /> },
];
