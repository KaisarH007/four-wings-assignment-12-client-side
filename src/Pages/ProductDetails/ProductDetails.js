import React, { useEffect, useState } from "react";
import { Alert, Button, Card, Container, Modal } from "react-bootstrap";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import NavigationBar from "../../Shared/NavigationBar/NavigationBar";
import Footer from "../../Shared/Footer/Footer";
const ProductDetails = () => {
  const { productID } = useParams();
  const [productInfo, setProductInfo] = useState({});
  const { user } = useAuth();
  //Load Product from DB
  useEffect(() => {
    fetch(`https://quiet-retreat-21565.herokuapp.com/productInfo/${productID}`)
      .then((res) => res.json())
      .then((data) => setProductInfo(data));
  }, []);
  const { title, photo, description, spec, price } = productInfo;

  //modals
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [orderSuccess, setOrderSuccess] = useState(false);

  //react hook forms
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.ordered = productInfo;
    data.status = "pending";
    axios
      .post("https://quiet-retreat-21565.herokuapp.com/orders", data)
      .then((res) => {
        setOrderSuccess(true);
        reset();
        handleClose();
        console.log(res);
      });
    console.log(data);
  };

  return (
    <>
      <NavigationBar></NavigationBar>
      <Container className="my-5">
        {orderSuccess && (
          <Alert variant="primary" className="text-center fs-4">
            Thank You sir ! Your order receive successfully
          </Alert>
        )}

        <Card>
          <div className="row">
            <div className="col-md-6">
              <Card.Img
                variant="top"
                style={{ width: "100%", height: "300px" }}
                src={photo}
              />
            </div>
            <div className="col md-6">
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>
                  {" "}
                  <h6> &bull; Camera {spec?.camera}</h6>
                  <h6> &bull; Flight Time {spec?.flight_time}</h6>
                  <h6> &bull; Flight Time {spec?.notable_attributes}</h6>
                  <h5> Price ${price}</h5>
                </Card.Text>
                {/* Modal  */}
                <>
                  <Button variant="primary" onClick={handleShow}>
                    Order Now
                  </Button>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                          defaultValue={user?.displayName}
                          {...register("name")}
                          className="w-100 mb-2 p-2"
                        />
                        <br />
                        <input
                          defaultValue={user?.email}
                          {...register("email")}
                          className="w-100 mb-2 p-2"
                        />
                        <br />
                        <input
                          required
                          placeholder="Phone number *"
                          {...register("phone")}
                          className="w-100 mb-2 p-2"
                        />
                        <br />
                        <input
                          placeholder="Address(optional)"
                          {...register("address")}
                          className="w-100 mb-2 p-2"
                        />
                        <br />

                        <br />
                        <input
                          className="btn bg-primary text-white"
                          type="submit"
                          value="CONFIRM"
                        />
                      </form>
                    </Modal.Body>
                  </Modal>
                </>
              </Card.Body>
            </div>
          </div>
        </Card>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default ProductDetails;
