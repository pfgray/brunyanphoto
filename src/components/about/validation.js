
const INVALID = 'INVALID';
const VALID = 'VALID';

const and = function and(validOrInvalid) {
  // hm, wish there was a tuple
  if (this.type === INVALID) {
    return Invalid(this.reason);
  } else {
    if(validOrInvalid.type === VALID) {
      return Valid(this.value);
    } else {
      return Invalid(validOrInvalid.reason);
    }
  }
};

const fold = function fold(f, g) {
  if (this.type === INVALID) {
    return f(this.reason);
  } else {
    return g(this.value);
  }
};

const Invalid = reason => ({
  type: INVALID,
  reason,
  and,
  fold
});

const Valid = value => ({
  type: VALID,
  value,
  and,
  fold
});

const validateEmail = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(email)) {
    return Valid(email);
  } else {
    return Invalid("This doesn't look like a valid email");
  }
};

const nonEmpty = value => {
  if(value && value !== '') {
    return Valid(value);
  } else {
    return Invalid('This field is required');
  }
};

export {
  Valid,
  Invalid,
  validateEmail,
  nonEmpty
};
