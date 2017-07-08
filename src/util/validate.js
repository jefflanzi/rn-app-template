export function email(value) {
  return /\S+@\S+\.\S{2,}/.test(value);
}

export function password(value) {
  return value.length >= 6;
}
