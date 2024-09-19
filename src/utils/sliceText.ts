export function sliceText(text: string): string {
  let sliced = text.slice(0, 25);
  if (sliced.length < text.length) {
    sliced += "...";
  }
  return sliced;
}