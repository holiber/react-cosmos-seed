import { AutoFields, AutoForm, ErrorsField, SubmitField } from 'uniforms-antd';
import { registrationSchema } from '../schemas/registrationForm.schema';
import { AutoFormProps } from 'uniforms';

/**
 * Registration Form Component
 */
export function RegistrationForm(p: Partial<AutoFormProps<any>>) {
  return (
    <AutoForm schema={registrationSchema} {...p}>
      <AutoFields />
      <ErrorsField />
      <SubmitField value="Submit Registration" />
    </AutoForm>
  );
}
