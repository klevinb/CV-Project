import React from "react";

import {
  Button,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Spinner,
  Alert,
  Col,
} from "reactstrap";

class AddReservation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reservation: {
        name: "",
        phone: "",
        numberOfPersons: 1,
        smoking: false,
        dateTime: "",
        specialRequests: "",
      },
      isLoading: false,
      errMess: "",
      reservations: [],
    };
  }

  submitReservation = async (e) => {
    e.preventDefault();

    this.setState({
      isLoading: true,
    });

    try {
      var response = await fetch(
        "https://striveschool.herokuapp.com/api/reservation",
        {
          method: "POST",
          body: JSON.stringify(this.state.reservation),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        //this.props.addComment(this.state.reservation);

        var json = await response.json();
        this.setState({
          isLoading: false,
          errMess: "",
          reservation: {
            name: "",
            phone: "",
            numberOfPersons: 1,
            smoking: false,
            dateTime: "",
            specialRequests: "",
          },
        });
        this.fetchReservation();
      } else {
        var json = await response.json();
        this.setState({
          errMess: json.message,
          isLoading: false,
        });
      }
    } catch (ex) {
      console.log(ex);
      this.setState({
        errMess: ex.message,
        isLoading: false,
      });
    }
  };

  updateReservation = (input) => {
    var reservation = this.state.reservation;

    var currentId = input.currentTarget.id;

    switch (currentId) {
      case "numberOfPersons":
        reservation[currentId] = parseInt(input.currentTarget.value);
        break;
      case "smoking":
        reservation[currentId] = input.currentTarget.checked;
        break;
      default:
        reservation[currentId] = input.currentTarget.value;
    }

    this.setState({ reservation: reservation });
  };

  fetchReservation = async () => {
    let resp = await fetch(
      "https://striveschool.herokuapp.com/api/reservation"
    );

    if (resp.ok) {
      const data = await resp.json();
      this.setState({
        reservations: data.reverse(),
      });
    }
  };

  componentDidMount() {
    this.fetchReservation();
  }

  render() {
    return (
      <>
        <Container className='reservations'>
          <Row>
            <Col sm={12} md={6}>
              <h3>Reserve your table now!</h3>

              <div>
                <Row>
                  <FormGroup className='col-md-6'>
                    <Label for='name'>Name</Label>
                    <Input
                      type='name'
                      name='name'
                      id='name'
                      placeholder='Your name'
                      value={this.state.reservation.name}
                      onChange={this.updateReservation}
                    />
                  </FormGroup>
                  <FormGroup className='col-md-6'>
                    <Label for='phone'>Phone</Label>
                    <Input
                      type='name'
                      name='phone'
                      id='phone'
                      placeholder='Your phone'
                      value={this.state.reservation.phone}
                      onChange={this.updateReservation}
                    />
                  </FormGroup>
                </Row>
                <Row>
                  <Row className='col-md-6'>
                    <FormGroup className='col-md-6'>
                      <Label for='numberOfPersons'>Number of persons</Label>
                      <Input
                        type='select'
                        name='numberOfPersons'
                        id='numberOfPersons'
                        value={this.state.reservation.numberOfPersons}
                        onChange={this.updateReservation}
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                      </Input>
                    </FormGroup>

                    <FormGroup
                      check
                      style={{ display: "flex", alignSelf: "center" }}
                    >
                      <Label check>
                        <Input
                          type='checkbox'
                          id='smoking'
                          checked={this.state.reservation.smoking}
                          onChange={this.updateReservation}
                        />{" "}
                        Smoking?
                      </Label>
                    </FormGroup>
                  </Row>

                  <FormGroup className='col-md-6'>
                    <Label for='dateTime'>Date &amp; Time</Label>
                    <Input
                      type='datetime-local'
                      name='dateTime'
                      id='dateTime'
                      placeholder='Date &amp; Time'
                      value={this.state.reservation.dateTime}
                      onChange={this.updateReservation}
                    />
                  </FormGroup>
                </Row>
                <FormGroup>
                  <Label for='specialRequests'>Special Requests</Label>
                  <Input
                    type='textarea'
                    name='text'
                    id='specialRequests'
                    value={this.state.reservation.specialRequests}
                    onChange={this.updateReservation}
                  />
                </FormGroup>
                <Button onClick={this.submitReservation}>Submit</Button>
              </div>
              {this.state.errMess.length > 0 && (
                <Alert className='mt-5' color='danger'>
                  We encountered a problem while processing your request:{" "}
                  {this.state.errMess}
                </Alert>
              )}

              {this.state.isLoading && (
                <div className='container d-flex justify-content-center my-5'>
                  Reserving your table, please wait
                  <div>
                    <Spinner color='success' />
                  </div>
                </div>
              )}
            </Col>
            <Col sm={12} md={6}>
              <h3>Reservations!</h3>
              <div className='reservationsDivs'>
                {this.state.reservations.map((reservation, key) => (
                  <div key={key}>
                    <Row>
                      <Col sm={4}>
                        <img src='/avatar.png' />
                      </Col>
                      <Col sm={8}>
                        <p>
                          <span>Name: </span> {reservation.name || "No Name"}
                        </p>
                        <p>
                          <span>Tel: </span> {reservation.phone || "No Tel"}
                        </p>
                        <p>
                          <span>NrOfPersons: </span>{" "}
                          {reservation.numberOfPersons || "1"}
                        </p>
                        <p>
                          <span>Smoking: </span>{" "}
                          {reservation.smoking || reservation.smoking === "True"
                            ? "Yes"
                            : "No"}
                        </p>
                        <p>
                          <span>Special Requests: </span>{" "}
                          {reservation.specialRequests || "No"}
                        </p>
                      </Col>
                    </Row>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default AddReservation;
