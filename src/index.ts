type Input = {
  user_input: string;
};

export const validateInput = ({ user_input }: Input) => {
  if (
    user_input.length > 2 &&
    user_input.length < 25 &&
    /^[a-zA-Z0-9\s]+$/.test(user_input)
  ) {
    return true;
  } else {
    return false;
  }
};
