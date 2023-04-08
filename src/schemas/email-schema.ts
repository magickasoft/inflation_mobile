import {object, string} from './schema';
export const emailSchema = object({
  email: string('').email().required(),
});
