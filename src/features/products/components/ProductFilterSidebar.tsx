
import React, { useEffect, useState } from "react";
import type { ProductFilters } from "../types/product.types";
import { useDebounce } from "../hooks/useDebounce";
import { useCategories } from "@/features/products/hooks/useCategories";
import {
  Search,
  X,
} from "lucide-react";

interface ProductFilterSidebarProps {
  filters: ProductFilters;
  onFilterChange: (filters: ProductFilters) => void;
}

const BRANDS = [
  "Organic Valley",
  "Green Giant",
  "Dole",
  "Del Monte",
  "Nestle",
  "Kraft",
  "Fresh Express",
  "Horizon Organic",
];

const TYPES = ["Fresh", "Frozen", "Organic"];

const MIN_PRICE = 11.25;
const MAX_PRICE = 499.72;

export default function ProductFilterSidebar({
  filters,
  onFilterChange,
}: ProductFilterSidebarProps) {
  const [searchValue, setSearchValue] = useState(
    filters.search ?? ""
  );

  const debouncedSearch = useDebounce(
    searchValue,
    500
  );

  const {
    data: categoriesData,
    isLoading: isCategoriesLoading,
  } = useCategories();

  const categories = categoriesData?.data ?? [];

  /*
   * Search
   *
   * The user can type:
   *
   * Fresh Milk
   * Organic Valley
   * Vegetables
   * Frozen
   *
   * without changing the URL while typing.
   *
   * We only apply the search after 500ms.
   */
  useEffect(() => {
    const search = debouncedSearch.trim();

    // Empty search
    if (!search) {
      if (filters.search !== undefined) {
        onFilterChange({
          ...filters,
          search: undefined,
          page: 1,
        });
      }

      return;
    }

    const normalizedSearch =
      search.toLowerCase();

    /*
     * Category
     */
    const matchedCategory = categories.find(
      (category) =>
        category.name_en?.toLowerCase() ===
          normalizedSearch ||
        category.name_ar?.toLowerCase() ===
          normalizedSearch
    );

    if (matchedCategory) {
      onFilterChange({
        ...filters,
        search: undefined,
        category: matchedCategory.id,
        page: 1,
      });

      return;
    }

    /*
     * Brand
     */
    const matchedBrand = BRANDS.find(
      (brand) =>
        brand.toLowerCase() === normalizedSearch
    );

    if (matchedBrand) {
      onFilterChange({
        ...filters,
        search: undefined,
        brand: matchedBrand,
        page: 1,
      });

      return;
    }

    /*
     * Product Type
     */
    const matchedType = TYPES.find(
      (type) =>
        type.toLowerCase() === normalizedSearch
    );

    if (matchedType) {
      onFilterChange({
        ...filters,
        search: undefined,
        type: matchedType.toLowerCase(),
        page: 1,
      });

      return;
    }

    /*
     * Normal Search
     *
     * Example:
     *
     * Fresh Milk
     * Apple Juice
     * Organic Banana
     */
    if (search !== (filters.search ?? "")) {
      onFilterChange({
        ...filters,
        search,
        page: 1,
      });
    }
  }, [debouncedSearch]);

  /*
   * Sync input only when search is changed
   * from outside the component.
   */
  useEffect(() => {
    if (
      filters.search !== undefined &&
      filters.search !== searchValue
    ) {
      setSearchValue(filters.search);
    }
  }, [filters.search]);

  const handleBrandChange = (
    brand: string
  ) => {
    onFilterChange({
      ...filters,
      brand:
        filters.brand === brand
          ? undefined
          : brand,
      page: 1,
    });
  };

  const handleTypeChange = (
    type: string
  ) => {
    onFilterChange({
      ...filters,
      type:
        filters.type === type
          ? undefined
          : type,
      page: 1,
    });
  };

  const handleCategoryChange = (
    categoryId: number
  ) => {
    onFilterChange({
      ...filters,
      category:
        filters.category === categoryId
          ? undefined
          : categoryId,
      page: 1,
    });
  };

  const handleMinPriceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = Number(
      event.target.value
    );

    if (
      filters.max_price === undefined ||
      value <= filters.max_price
    ) {
      onFilterChange({
        ...filters,
        min_price: value,
        page: 1,
      });
    }
  };

  const handleMaxPriceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = Number(
      event.target.value
    );

    if (
      filters.min_price === undefined ||
      value >= filters.min_price
    ) {
      onFilterChange({
        ...filters,
        max_price: value,
        page: 1,
      });
    }
  };

  const clearFilters = () => {
    setSearchValue("");

    onFilterChange({
      page: 1,
    });
  };

  return (
    <aside className="w-full rounded-2xl bg-blue-50/60 p-5 shadow-sm">
      <div className="space-y-6">

        {/* Header */}
        <div className="flex items-center justify-between border-b pb-4">
          <h2 className="text-xl font-bold text-black">
            Filters
          </h2>

          <button
            type="button"
            onClick={clearFilters}
            className="text-sm font-medium text-[#08ABFF] hover:underline"
          >
            Clear All
          </button>
        </div>



        {/* Category */}
        <div>
          <h3 className="mb-3 text-base font-bold text-black">
            Category
          </h3>

          {isCategoriesLoading ? (
            <p className="text-sm text-gray-400">
              Loading categories...
            </p>
          ) : (
            <div className="space-y-2.5">
              {categories.map(
                (category) => (
                  <label
                    key={category.id}
                    className="flex cursor-pointer items-center gap-3 text-sm text-gray-700"
                  >
                    <input
                      type="checkbox"
                      checked={
                        filters.category ===
                        category.id
                      }
                      onChange={() =>
                        handleCategoryChange(
                          category.id
                        )
                      }
                      className="h-4 w-4 accent-[#08ABFF]"
                    />

                    <span>
                      {category.name_en}
                    </span>
                  </label>
                )
              )}
            </div>
          )}
        </div>

        {/* Brand */}
        <div>
          <h3 className="mb-3 text-base font-bold text-black">
            Brand
          </h3>

          <div className="space-y-2.5">
            {BRANDS.map((brand) => (
              <label
                key={brand}
                className="flex cursor-pointer items-center gap-3 text-sm text-gray-700"
              >
                <input
                  type="checkbox"
                  checked={
                    filters.brand === brand
                  }
                  onChange={() =>
                    handleBrandChange(
                      brand
                    )
                  }
                  className="h-4 w-4 accent-[#08ABFF]"
                />

                <span>{brand}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Product Type */}
        <div>
          <h3 className="mb-3 text-base font-bold text-black">
            Product Type
          </h3>

          <div className="space-y-2.5">
            {TYPES.map((type) => (
              <label
                key={type}
                className="flex cursor-pointer items-center gap-3 text-sm text-gray-700"
              >
                <input
                  type="checkbox"
                  checked={
                    filters.type?.toLowerCase() ===
                    type.toLowerCase()
                  }
                  onChange={() =>
                    handleTypeChange(
                      type.toLowerCase()
                    )
                  }
                  className="h-4 w-4 accent-[#08ABFF]"
                />

                <span>{type}</span>
              </label>
            ))}
          </div>
        </div>
                {/* Search */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="h-[3px] w-5 rounded-full bg-[#004A6B]" />

            <h3 className="text-base font-bold text-gray-900">
              Search Products
            </h3>
          </div>

          <div className="flex h-11 w-full overflow-hidden rounded-md bg-gray-200/70">
            <input
              type="text"
              value={searchValue}
              onChange={(event) =>
                setSearchValue(
                  event.target.value
                )
              }
              placeholder="Search product or category..."
              className="w-full bg-transparent px-3 text-sm text-gray-700 placeholder:text-gray-500 focus:outline-none"
            />

            <button
              type="button"
              aria-label="Search"
              className="flex h-full min-w-[44px] items-center justify-center bg-[#004A6B] text-white transition hover:bg-[#003852]"
            >
              <Search className="h-4 w-4" />
            </button>
          </div>

          <p className="mt-2 text-xs text-gray-400">
            Search by product, category, brand or type.
          </p>
        </div>

        {/* Price */}
        <div>
          <h3 className="mb-3 flex items-center gap-2 text-base font-bold text-black">
            <span className="h-[3px] w-5 rounded-full bg-[#004A6B]" />

            Filter by Price
          </h3>

          <div className="mb-4 flex justify-between text-sm font-semibold text-gray-700">
            <span>
              £{filters.min_price ?? MIN_PRICE}
            </span>

            <span>
              £{filters.max_price ?? MAX_PRICE}
            </span>
          </div>

          <div className="relative h-6 w-full">

            {/* Background */}
            <div className="absolute top-1/2 h-1.5 w-full -translate-y-1/2 rounded-full bg-gray-200" />

            {/* Active Range */}
            <div
              className="absolute top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-[#08ABFF]"
              style={{
                left: `${
                  (((filters.min_price ??
                    MIN_PRICE) -
                    MIN_PRICE) /
                    (MAX_PRICE -
                      MIN_PRICE)) *
                  100
                }%`,

                right: `${
                  100 -
                  (((filters.max_price ??
                    MAX_PRICE) -
                    MIN_PRICE) /
                    (MAX_PRICE -
                      MIN_PRICE)) *
                    100
                }%`,
              }}
            />

            {/* Min Price */}
            <input
              type="range"
              min={MIN_PRICE}
              max={MAX_PRICE}
              step="0.01"
              value={
                filters.min_price ??
                MIN_PRICE
              }
              onChange={
                handleMinPriceChange
              }
              className="
                pointer-events-none
                absolute
                top-1/2
                h-2
                w-full
                -translate-y-1/2
                appearance-none
                bg-transparent
                [&::-webkit-slider-thumb]:pointer-events-auto
                [&::-webkit-slider-thumb]:h-5
                [&::-webkit-slider-thumb]:w-5
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:border-2
                [&::-webkit-slider-thumb]:border-white
                [&::-webkit-slider-thumb]:bg-[#08ABFF]
                [&::-webkit-slider-thumb]:shadow-md
                [&::-moz-range-thumb]:pointer-events-auto
                [&::-moz-range-thumb]:h-5
                [&::-moz-range-thumb]:w-5
                [&::-moz-range-thumb]:rounded-full
                [&::-moz-range-thumb]:border-2
                [&::-moz-range-thumb]:bg-[#08ABFF]
              "
            />

            {/* Max Price */}
            <input
              type="range"
              min={MIN_PRICE}
              max={MAX_PRICE}
              step="0.01"
              value={
                filters.max_price ??
                MAX_PRICE
              }
              onChange={
                handleMaxPriceChange
              }
              className="
                pointer-events-none
                absolute
                top-1/2
                h-2
                w-full
                -translate-y-1/2
                appearance-none
                bg-transparent
                [&::-webkit-slider-thumb]:pointer-events-auto
                [&::-webkit-slider-thumb]:h-5
                [&::-webkit-slider-thumb]:w-5
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:border-2
                [&::-webkit-slider-thumb]:border-white
                [&::-webkit-slider-thumb]:bg-[#08ABFF]
                [&::-webkit-slider-thumb]:shadow-md
                [&::-moz-range-thumb]:pointer-events-auto
                [&::-moz-range-thumb]:h-5
                [&::-moz-range-thumb]:w-5
                [&::-moz-range-thumb]:rounded-full
                [&::-moz-range-thumb]:border-2
                [&::-moz-range-thumb]:bg-[#08ABFF]
              "
            />
          </div>
        </div>

      </div>
    </aside>
  );
}

