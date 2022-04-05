import React from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class TimeList extends React.Component {

    constructor(props, context) {
        super(props);
        this.state = {
          email: '',
          error: null,
          isLoaded: false,
          items: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        }

    handleChange(event) {
        this.setState({email: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        fetch("http://0.0.0.0:8081/time/" + this.state.email)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
    }

    render() {

        const { error, isLoaded, items } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        }
        else {
            return (
                <Container>
                    <h3>List current entries</h3>
                    <form onSubmit={this.handleSubmit} >
                        <label>
                        Email:
                        <input type="text" value={this.state.email} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Search" />
                    </form>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                            <th>Email</th>
                            <th>Start</th>
                            <th>End</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => (
                            <tr>
                            <td>{item.email}</td>
                            <td>{item.start}</td>
                            <td>{item.end}</td>
                            </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>
            );
        }
    }

}

export default TimeList