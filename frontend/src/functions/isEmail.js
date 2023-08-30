function isValidEmail(email) {
  const validCharacter = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return validCharacter.test(email)
}
export default isValidEmail