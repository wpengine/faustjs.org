export const getMdyFormattedDate = (date: string) => {
  const dateObj = new Date(date);
  const dateMDY = `${dateObj.toLocaleString('default', {
    month: 'long',
  })} ${dateObj.getMonth() + 1}, ${dateObj.getFullYear()}`;
  return dateMDY;
};
