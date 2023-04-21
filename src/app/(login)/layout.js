import NavBar from "@/components/login/Navbar.js";


export default function LoginLayout({ children }) {

  return (
    <html lang="en">
    <body>
      <NavBar />
      {children}
    </body>
    </html>
  );
}
