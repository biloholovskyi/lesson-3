import React from 'react';

import './post-add-form.css';
import { Button, Form, Input } from 'reactstrap';

const PostAddForm = ({onAdd}) => {
  return (
    <Form
      className="bottom-panel d-flex"
      onSubmit={(e) => onAdd('Hello', e)}>
      <Input
        type="text"
        placeholder="О чем вы думаете сейча?"
        className="form-control new-post-label"/>
        <Button tag="button" outline>
          Добавить
        </Button>
    </Form>
  )
}

export default PostAddForm;