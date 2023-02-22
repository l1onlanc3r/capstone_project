import Input from '../../components/Input';
// import Select from '../../components/Select';

export const registerFields = [
  {
    component: Input,
    name: 'name',
    id: 'name',
    'data-value': '',
    label: 'Name',
    className: 'rounded-t-md',
    validate: (value) => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    component: Input,
    name: 'email',
    id: 'email-address',
    type: 'email',
    'data-value': '',
    autoComplete: 'email',
    label: 'Email',
    validate: (value) => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    component: Input,
    name: 'password',
    id: 'password',
    type: 'password',
    'data-value': '',
    label: 'Password',
    validate: (value) => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
];

export const registerInitialValues = registerFields.reduce(
  (p, c) => ({ ...p, [c.name]: c['data-value'] }),
  {},
);
