const scalableFont = (width: number) => {
  if (width < 1000 && width >= 600) return "large";
  else if (width < 600 && width >= 400) return "medium";
  else if (width < 400) return "small";
  return "x-large";
};

export { scalableFont };
