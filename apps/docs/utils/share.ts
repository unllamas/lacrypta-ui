export const copy = async (value: any): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch (error) {
    console.log('Failed to copy: ', error);
    return false;
  }
};
