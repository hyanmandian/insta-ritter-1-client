import React from 'react';
import { withFormik } from 'formik';
import SendIcon from 'react-icons/lib/fa/paper-plane';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import File from '../../../components/File';

function Form({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting
}) {
  console.log(values);

  return (
    <form onSubmit={handleSubmit}>
      <File
        type="file"
        name="file"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Input
        type="text"
        name="title"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.title}
      />
      <Button type="submit" icon={SendIcon} disabled={isSubmitting}>Submit</Button>
    </form>
  );
}

export default withFormik({
  mapPropsToValues: props => ({ title: '' }),
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
