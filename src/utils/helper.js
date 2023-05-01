export function filterData(searchInput,allRestaurants) {
    const filterdata = allRestaurants.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase()?.includes(searchInput?.toLowerCase())
    );
    return filterdata;
  }