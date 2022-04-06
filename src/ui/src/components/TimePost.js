import React  from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

class TimePost extends React.Component {

    constructor(props, context) {
        super(props);
        this.state = {
          email: '',
          start: '10.04.2022 11:00',
          end: '10.04.2022 11:00',
          error: null,
          isLoaded: false,
          items: [],
          show: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       }

    handleChange(event) {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
    }

    closeAlert(){
        this.setState({
            ...this.state,
            show: false
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://0.0.0.0:8081/create/', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: this.state.email,
            start: this.state.start,
            end: this.state.end

          })
        }).then(
            this.setState({
                ...this.state,
                show: true
            }))
    }
    render() {
        return (
            <Container>
                <div className="d-grid gap-2">
                  <div className="p-3 bg-light border">
                       <h3>Submit new Time Entry</h3>
                  </div>
                    <form onSubmit={this.handleSubmit}>
                      <div className="p-3 bg-light border">
                        <label>
                        Email:
                        <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                        </label>
                      </div>
                      <div className="p-3 bg-light border">
                        <label>
                        Start:
                        <input type="text" name="start" value={this.state.start} onChange={this.handleChange} />
                        </label>
                      </div>
                      <div className="p-3 bg-light border">
                        <label>
                        End:
                        <input type="text" name="end" value={this.state.end} onChange={this.handleChange} />
                        </label>
                      </div>
                      <div className="p-3 bg-light border">
                          <Button type="submit" value="Submit" variant="primary">
                          Submit
                          </Button>
                      </div>
                    </form>
                  <Alert show={this.state.show} variant="info" closeLabel="close">
                    <Alert.Heading>Created Time Entry</Alert.Heading>
                     <Button onClick={this.closeAlert.bind(this)} variant="outline-info">
                                Close
                     </Button>
                  </Alert>
                  </div>

            </Container>
        )
    }
}

export default TimePost