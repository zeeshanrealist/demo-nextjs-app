import { forwardRef, ReactNode } from "react";
import { FieldErrors } from 'react-hook-form';

interface Props {
  children?: ReactNode,
  classNames: string,
  placeholder: string,
  name: string,
  type: string,
  errors: FieldErrors
};

type Ref = HTMLInputElement;

const InputField = forwardRef<Ref, Props>(({ classNames, placeholder, name, type, errors, ...rest }, ref) => {
  console.log('rest of----', {...rest});
  return (
    <>
      <input
        {...rest}
        className={classNames}
        placeholder={placeholder}
        name={name}
        type={type}
        ref={ref}
      />
      {
        errors[name] && errors[name].type === 'required' && (
        <div className="text-red-700">Username is required</div>
      )}
      {
        errors[name] && errors[name].type === 'minLength' && (
        <div className="text-red-700">Username should have minimum 6 characters</div>
      )}
    </>
  );
});

InputField.displayName = 'InputField';

export default InputField;
