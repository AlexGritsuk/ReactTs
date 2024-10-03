export const filterdCards = (
  filterCategory: string,
  filters: any,
  cards: []
): object[] => {
  if (filterCategory === filters.Like) {
    return cards.filter((card: any) => card.like);
  }
  if (filterCategory === filters.СategoryElectro) {
    return cards.filter((card: any) => card.category == "electronics");
  }
  if (filterCategory === filters.СategoryMensClothing) {
    return cards.filter((card: any) => card.category == "men's clothing");
  }
  if (filterCategory === filters.СategoryJewelery) {
    return cards.filter((card: any) => card.category == "jewelery");
  }
  if (filterCategory === filters.СategoryWomansClothing) {
    return cards.filter((card: any) => card.category == "women's clothing");
  }
  return cards;
};
