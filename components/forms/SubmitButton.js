import React from 'react';
import { useFormikContext } from 'formik';

import ButtonEtt from '../ButtonEtt';

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return (
    <ButtonEtt title={title} onPress={handleSubmit} />
  );
}

export default SubmitButton;