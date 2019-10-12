const scalableFont = (width: number) => {
  if (width < 1000 && width >= 600) return "large";
  else if (width < 600 && width >= 400) return "medium";
  else if (width < 400) return "small";
  return "x-large";
};

const scalableFontText = (width: number): number => {
  if (width < 1000 && width >= 600) return 0.035 * width;
  else if (width < 600 && width >= 400) return 0.05 * width;
  else if (width < 400) return 0.065 * width;
  return 0.02 * width;
};

const scalableFontDescription = (width: number): number => {
  if (width < 1000 && width >= 600) return 0.2 * width;
  else if (width < 600 && width >= 400) return 0.3 * width;
  else if (width < 400) return 0.4 * width;
  else return 0.08 * width;
};

const scalableAntDComponent = (
  width: number
): "small" | "default" | "large" => {
  if (width < 600 && width >= 400) return "default";
  else if (width < 400) return "small";
  return "large";
};

export {
  scalableFont,
  scalableAntDComponent,
  scalableFontText,
  scalableFontDescription
};
