type Input = {
  user_input: string;
};

type Content = {
  type: string;
  text: string;
};

type Response = {
  content: Content[];
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

export const responseParser = (response: Response) => {
  return response.content[0].text;
};
