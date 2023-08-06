import { createFormSchema } from '../utils/createFormModel';

export const registrationSchema = createFormSchema({
  username: {
    label: 'User Name',
    type: String,
    min: 2,
    max: 20,
  },

  workExperience: {
    label: 'Work experience in years',
    type: Number,
    min: 0,
    max: 30,
  },

  mailingAddress: Object,
  'mailingAddress.street': {
    type: String,
    label: 'Street Address',
  },
  'mailingAddress.city': {
    type: String,
    label: 'City',
  },

  comments: {
    label: 'Additional Comments',
    type: String,
    defaultValue: '',
    optional: true,
  },
});
