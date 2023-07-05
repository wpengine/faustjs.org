export const getMdyFormattedDate = (date: string) => {
  return new Date(date).toLocaleDateString('default', {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
