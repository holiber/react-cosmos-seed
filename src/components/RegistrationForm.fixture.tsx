import { RegistrationForm } from './RegistrationForm';
import { useValue } from 'react-cosmos/client';

const RegistrationFormFixture = () => {
  const [formData, setFormData] = useValue('formData', {
    defaultValue: {
      username: 'JohnDoe',
      workExperience: 5,
      mailingAddress: {
        street: '123 Main St',
        city: 'New York',
      },
      comments: 'This is a sample comment',
    },
  });

  const serializedModel = JSON.stringify(formData, null, 2);
  const serializedModelRowsCnt = serializedModel.split('\n').length;

  return (
    <>
      <h1>Registration Form</h1>
      <RegistrationForm model={formData} onSubmit={setFormData} />

      <h2>Preview</h2>
      <textarea
        value={serializedModel}
        readOnly
        rows={serializedModelRowsCnt}
        style={{ width: '100%' }}
      />
    </>
  );
};

export default RegistrationFormFixture;
