import {t} from 'i18next';
import * as Yup from 'yup';
import {setLocale} from 'yup';

setLocale({
  string: {
    min: ({min}) => t('fieldTooShort', {min}),
    email: t('validEmail') as string,
  },
  mixed: {
    required: t('required') as string,
  },
});

const URL =
  /((?:http?|ftp)[s]*:\/\/?[a-z0-9-%\/\&=?\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?)/i;

export const bool = (defaultValue: any) =>
  Yup.boolean().default(defaultValue).nullable();
export const object = (schema: any) => Yup.object(schema).nullable();
export const number = (defaultValue: any = null) =>
  Yup.number().default(defaultValue).nullable();
export const string = (defaultValue: any) =>
  Yup.string().default(defaultValue).nullable();
export const date = (defaultValue: any) =>
  Yup.date().default(defaultValue).nullable();
export const array = (schema: any) => Yup.array().of(schema).nullable();
export const url = (defaultValue: any) =>
  string(defaultValue).matches(URL, t('validURL') as string);
