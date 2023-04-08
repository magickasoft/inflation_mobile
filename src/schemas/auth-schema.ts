import {t} from 'i18next';

import {object, string} from './schema';
const alphabet = /[a-zA-Z]/;
const number = /[0-9]/;
export const authSchema = object({
  email: string('').email().required(),
  password: string('')
    .min(8)
    .required()
    .matches(alphabet, t('atLeastOneAlphabet') as string)
    .matches(number, t('atLeastOneNumber') as string),
});
