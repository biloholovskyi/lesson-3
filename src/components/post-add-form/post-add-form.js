import React, {Component} from 'react';

import './post-add-form.css';
import { Button, Form, Input } from 'reactstrap';

export default class PostAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: ''
    }
  }

  onValueChange = (e) => {
    this.setState({label: e.target.value});
  }

  onSubmit = (e) => {
    this.props.onAdd(this.state.label, e);
    this.setState({label: ''});
  }

  render() {
    return (
      <Form
        className="bottom-panel d-flex"
        onSubmit={this.onSubmit}>
        <Input
          type="text"
          placeholder="О чем вы думаете сейча?"
          className="form-control new-post-label"
          onChange={this.onValueChange}
          value={this.state.label} />
        <Button tag="button" outline>
          Добавить
        </Button>
      </Form>
    )
  }
}