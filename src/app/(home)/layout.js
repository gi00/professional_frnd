import NavBar from "@/components/Home/Navbar.js";
import SideBar from "@/components/Home/Sidebar.js";

export default function HomeLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container-fluid h-100">
          <div className="row bg-transparent">
            <NavBar />
          </div>
          <div className="row h-100">
            <div className="col-2 bg-primary d-flex align-content-between flex-wrap ">
              <SideBar />
            </div>
            <div className="col-10">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
