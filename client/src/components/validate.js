let validate = function (userData) {
  let errors = {};
  let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/;
  let numberRegex = /.*\d+.*/;

  if (!emailRegex.test(userData.email)) {
    errors.email = "your email is wrong";
  }
  if (!userData.email) {
    errors.email = "must be an email";
  }
  if (userData.email.length >= 35) {
    errors.email = "the email should not be more than 35 characters";
  }

  if (!numberRegex.test(userData.password)) {
    errors.password = "should be at least 1 number";
  }
  if (userData.password.length < 6 || userData.password.length > 12) {
    errors.password = "must be among 6 and 12 characters";
  }
  return errors;
};

export default validate;
