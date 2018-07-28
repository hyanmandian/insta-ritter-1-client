import React, { Fragment } from 'react';
import { withFormik } from 'formik';
import SendIcon from 'react-icons/lib/fa/paper-plane';

import { Input, Button, File } from './styles';

function Form({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting
}) {
  return (
    <form onSubmit={handleSubmit}>
      <File
        name="uri"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      { values.uri &&
        <Fragment>
          <Input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          <Button type="submit" icon={<SendIcon />} disabled={isSubmitting}>Submit</Button>
        </Fragment>
      }
    </form>
  );
}

export default withFormik({
  mapPropsToValues: props => ({ title: '', uri: '' }),
  handleSubmit: async (
    values,
    {
      props: {
        onSubmit,
      },
      setSubmitting,
    }
  ) => {
    await onSubmit(values);

    setSubmitting(false);
  },
})(Form);
