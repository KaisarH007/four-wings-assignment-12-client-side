import React, { useEffect, useState } from "react";
import { Button, Card, Container, Modal } from "react-bootstrap";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import axios from "axios";
const ProductDetails = () => {
  const { productID } = useParams();
  const [productInfo, setProductInfo] = useState({});
  //Load Product from DB
  useEffect(() => {
    fetch(`http://localhost:7000/productInfo/${productID}`)
      .then((res) => res.json())
      .then((data) => setProductInfo(data));
  }, []);
  const { title, photo, description, spec, price } = productInfo;

  //modals
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //react hook forms
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.ordered = productInfo;
    axios.post("http://localhost:7000/orders", data).then((res) => {
      alert("Order Successfully Done");
      reset();
      handleClose();
      console.log(res);
    });
    console.log(data);
  };

  return (
    <Container className="my-5">
      <h2>Deatls will update {productInfo._id}</h2>
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
                        defaultValue="Name"
                        {...register("customerName")}
                        className="w-100 mb-2 p-2"
                      />
                      <br />
                      <input
                        defaultValue="Email"
                        {...register("customerEmail")}
                        className="w-100 mb-2 p-2"
                      />
                      <br />
                      <input
                        defaultValue="Phone"
                        {...register("Phone")}
                        className="w-100 mb-2 p-2"
                      />
                      <br />
                      <input
                        defaultValue="Pending"
                        {...register("status")}
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
  );
};

export default ProductDetails;