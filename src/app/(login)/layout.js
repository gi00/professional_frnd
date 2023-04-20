import NavBar from "@/components/login/Navbar.js";

export default function LoginLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
