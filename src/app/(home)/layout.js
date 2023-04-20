import NavBar from "@/components/Home/Navbar.js";
import SideBar from "@/components/Home/Sidebar.js";

/*
export default function HomeLayout({ children }) {
  return (
    <>
      <Container fluid className="h-100">
        <Row className="bg-transparent">
          <NavBar />
        </Row>
        <Row className="h-100">
          <Col className="col-2 bg-primary">
            <SideBar />
          </Col>
          <Col className="col-10">
            {children}
          </Col>
        </Row>
      </Container>
    </>
  );
}
*/

export default function HomeLayout({ children }) {
  return (
    <>
      <div className="container-fluid h-100">
        <div className="row bg-transparent">
          <NavBar />
        </div>
        <div className="row h-100">
          <div className="col-2 bg-primary d-flex align-content-between flex-wrap ">
            <SideBar />
          </div>
          <div className="col-10">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}


