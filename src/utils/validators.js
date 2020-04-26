export const common = v => Boolean(v.length);

export const email = v =>
  Boolean(
    v.length &&
      v.match(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+).([a-zA-Z]{2,5})$/)
  );

export const emailOptional = v =>
  Boolean(
    v.match(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+).([a-zA-Z]{2,5})$/) ||
      !v.length
  );

export const password = v =>
  Boolean(
    v.length && v.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/)
  );

export const checkbox = v => v;

export const validateFormProps = props =>
  Object.keys(props).every(key => props[key].isValid);

export default {
  common,
  email,
  password,
  checkbox,
  validateFormProps,
  emailOptional,
};
