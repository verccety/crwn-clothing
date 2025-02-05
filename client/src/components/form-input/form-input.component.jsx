import React from 'react';
import { GroupContainer, FormInputContainer, FormInputLabel } from './form-input.styles';
const FormInput = ({ handleChange, label, ...props }) => {
  return (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} {...props} />
      {label ? <FormInputLabel {...props}>{label}</FormInputLabel> : null}
    </GroupContainer>
  );
};

export default FormInput;
