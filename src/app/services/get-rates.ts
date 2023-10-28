export const getRates = async <T>(url: string): Promise<T | undefined> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Something just failed');
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};
