import NavBar from "@/components/login/Navbar.js";

export default function LoginLayout({ children }) {
  return (
    <body className="bg-light container">
      <NavBar />
      {children}
    </body>
  );
}
