export const getLength = (value: string | undefined) => {
  if (value !== undefined && value.length > 0) {
    return value.length;
  } else return 0;
};
