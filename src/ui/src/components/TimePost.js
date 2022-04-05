import React  from 'react';
import Container from 'react-bootstrap/Container';

class TimePost extends React.Component {

    constructor(props, context) {
        super(props);
        this.state = {
          email: '',
          start: '',
          end: '',
          error: null,
          isLoaded: false,
          items: []
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
        })
    }
    render() {
        return (
            <Container>
                <h3>Submit new Time Entry</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Email:
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                    </label>
                    <label>
                    Start:
                    <input type="text" name="start" value={this.state.start} onChange={this.handleChange} />
                    </label>
                    <label>
                    End:
                    <input type="text" name="end" value={this.state.end} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </Container>
        )
    }
}

export default TimePost