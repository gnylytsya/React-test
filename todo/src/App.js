import React, { Component} from 'react'
import {
    Button,
    FormGroup,
    FormControl,
    ControlLabel,
    Grid,
    Row,
    Col,
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';

class App extends Component {

    componentWillMount(){

        this.onAddInputHandleChamge = this.onAddInputHandleChamge.bind(this)

        this.state = {
            tasks: [],
            addInputValue: ''
        }
    }

    onAddInputHandleChamge(e){
        this.setState({
            addInputValue: e.target.value
        })
    }

    onAddClick() {
        let { tasks, addInputValue } = this.state;

        tasks.push( {
            title: addInputValue,
            isDone: false

        })
        this.setState({
            tasks
        })
    }

    render () {
        const { addInputValue } = this.state;
        return (
            <Grid>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
                <Row className="show-grid">
                    <Col xs={12} md={8}>
                        <form>
                            <FormGroup
                                controlId="addNewTask"
                            >
                                <ControlLabel>Working example with validation</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={addInputValue}
                                    placeholder="Enter the task"
                                    onChange={this.onAddInputHandleChamge}
                                />
                                <FormControl.Feedback />
                            </FormGroup>
                        </form>
                    </Col>
                    <Col xs={6} md={4}>
                        asd
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={12} md={8}>
                        <Button bsStyle="primary">Primary</Button>
                    </Col>
                    <Col xs={6} md={4}>asd</Col>
                </Row>


            </Grid>
        )
    }
}


export default App