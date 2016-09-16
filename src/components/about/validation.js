
const INVALID = 'INVALID';
const VALID = 'VALID';

const Invalid = reasons => ({
  type: 'invalid',
  reasons: reasons,
  and: and,
  bimap: bimap
});

const Valid = values => ({
  type: 'invalid',
  values: values,
  and: and,
  bimap: bimap
});

const and = (validOrInvalid) => {
  //hm, wish there was a tuple
  if (this.type === INVALID) {
    if(validOrInvalid.type === INVALID){
      return Invalid([...this.reasons, ...validOrInvalid.reasons]);
    } else {
      return Invalid(this.reasons);
    }
  } else {
    if(validOrInvalid.type === VALID){
      return Valid([...this.values, ...validOrInvalid.values])
    } else {
      return Invalid(validOrInvalid.reasons)
    }
  }
}

const bifold = (f, g) => {
  if (this.type === INVALID) {
    f(this.values)
  } else {
    g(this.reasons)
  }
}

const validateEmail = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(email)){
    return Valid([email]);
  } else {
    return Invalid([`Uh, ${email} didn't match dat regex`]);
  }
}


const assertion1 = validateEmail()
