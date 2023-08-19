export function filterData(searchInput,allRestaurants) {
    const filterdata = allRestaurants.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase()?.includes(searchInput?.toLowerCase())
    );
    return filterdata;
  }