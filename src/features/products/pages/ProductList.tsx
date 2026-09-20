import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Search,
  X,
  ShoppingCart,
  Trash2,
  Plus,
  SlidersHorizontal,
} from "lucide-react";

import Timer from "@/features/products/components/Timer";
import FeaturesBar from "@/features/products/components/FeatureBar";
import ProductFilterSidebar from "@/features/products/components/ProductFilterSidebar";
import { Skeleton } from "@/components/ui/skeleton";

import { useProductFilter } from "@/features/products/hooks/useProductFilter";
import { useProducts } from "@/features/products/hooks/useProducts";
import useAddCartItem from "@/features/cart/hooks/useAddCartItem";

import type { ProductFilters } from "@/features/products/types/product.types";

export default function ProductList() {
  const { filters } = useProductFilter();
  console.log("CURRENT FILTERS:", filters);
  const [, setSearchParams] = useSearchParams();

  const { data, isLoading, isError, error } = useProducts(filters);
  console.log("PRODUCT QUERY FILTERS:", filters);
console.log("PRODUCT DATA:", data);
  

  const { mutate: addProductToCart } = useAddCartItem();

  // Quantity لكل Product بشكل منفصل
  const [quantities, setQuantities] = useState<Record<number, number>>({});

  // Product اللي بيعمل Add To Cart حالياً
  const [pendingProductId, setPendingProductId] = useState<number | null>(
    null
  );

  // Mobile Filter state
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const products = data?.data ?? [];

  // ==================== Quantity ====================

  const handleQuantityChange = (productId: number, delta: number) => {
    setQuantities((prev) => {
      const currentQty = prev[productId] || 1;

      const newQty = Math.max(1, currentQty + delta);

      return {
        ...prev,
        [productId]: newQty,
      };
    });
  };

  // ==================== Add To Cart ====================

  const handleAddToCart = (productId: number) => {
    const quantity = quantities[productId] || 1;

    setPendingProductId(productId);

    addProductToCart(
      {
        productId,
        quantity,
      },
      {
        onSettled: () => {
          setPendingProductId(null);
        },
      }
    );
  };

  // ==================== Filters ====================

  const handleFilterChange = (nextFilters: ProductFilters) => {
    const newParams = new URLSearchParams();

if (nextFilters.category_id !== undefined) {
  newParams.set("category", String(nextFilters.category_id));
}

    if (nextFilters.brand) {
      newParams.set("brand", nextFilters.brand);
    }

    if (nextFilters.type) {
      newParams.set("type", nextFilters.type);
    }

    if (nextFilters.search) {
      newParams.set("search", nextFilters.search);
    }

    if (nextFilters.min_price !== undefined) {
      newParams.set("min_price", String(nextFilters.min_price));
    }

    if (nextFilters.max_price !== undefined) {
      newParams.set("max_price", String(nextFilters.max_price));
    }

    if (nextFilters.page !== undefined) {
      newParams.set("page", String(nextFilters.page));
    }

    if (nextFilters.per_page !== undefined) {
      newParams.set("per_page", String(nextFilters.per_page));
    }

    setSearchParams(newParams, { replace: true });
  };

  // ==================== Pagination ====================

  const handlePageChange = (page: number) => {
    handleFilterChange({
      ...filters,
      page,
    });
  };

  // ==================== Clear Search ====================

  const handleClearSearch = () => {
    const newParams = new URLSearchParams();

if (filters.category_id !== undefined) {
  newParams.set("category", String(filters.category_id));
}

    if (filters.brand) {
      newParams.set("brand", filters.brand);
    }

    if (filters.type) {
      newParams.set("type", filters.type);
    }

    if (filters.min_price !== undefined) {
      newParams.set("min_price", String(filters.min_price));
    }

    if (filters.max_price !== undefined) {
      newParams.set("max_price", String(filters.max_price));
    }

    if (filters.per_page !== undefined) {
      newParams.set("per_page", String(filters.per_page));
    }

    newParams.set("page", "1");

    setSearchParams(newParams, { replace: true });
  };


  if (isError) {

    return (
      <div className="flex min-h-[400px] items-center justify-center px-4">
        <div className="w-full max-w-md rounded-2xl border border-red-100 bg-red-50 p-8 text-center">
          <h2 className="text-xl font-bold text-red-600">
            No Products Found
          </h2>
          

          <Link
            to="/ProductList"
            onClick={handleClearSearch}
            className="mt-2 inline-flex items-center gap-1 text-sm text-red-600 underline"
          >
            <X className="h-4 w-4" />
            Clear Search
          </Link>

          <p className="mt-2 text-sm text-red-500">
            {error?.message || "Failed to load products."}
          </p>
        </div>
      </div>
    );
  }
console.log("PRODUCTS:", products);
console.log("FIRST PRODUCT IMAGE:", products[0]?.image?.[0]);
  return (
    <div className="container mx-auto overflow-x-hidden px-4 py-8 sm:px-6">
      {/* ==================== Banner ==================== */}

      <div className="relative mb-8 h-[40vh] w-full overflow-hidden rounded-lg bg-cover bg-center sm:h-[50vh] md:h-[60vh]">
        <img
          src="/Banner.jpg"
          alt="Banner"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-start justify-center bg-[#08415F]/80 px-8 sm:px-16 md:px-20 lg:px-24">
          <span className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/90 sm:text-sm md:text-base">
            // WELCOME TO OUR COMPANY
          </span>

          <h1 className="text-4xl font-bold text-[#08ABFF] sm:text-5xl md:text-6xl lg:text-7xl">
            Shop
          </h1>
        </div>
      </div>

      {/* ==================== Main Content ==================== */}

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* ==================== Desktop Sidebar ==================== */}

        <aside className="hidden w-full lg:block lg:w-1/4">
          <ProductFilterSidebar
            filters={filters}
            onFilterChange={handleFilterChange}
          />
        </aside>

        {/* ==================== Products Area ==================== */}

        <main className="w-full lg:w-3/4">
          {/* ==================== Mobile / Tablet Filter Button ==================== */}

          <div className="mb-6 lg:hidden">
            <button
              type="button"
              onClick={() => setIsFilterOpen((prev) => !prev)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#08415F] px-4 py-3 font-semibold text-white transition hover:bg-[#01304a]"
            >
              <SlidersHorizontal className="h-5 w-5" />

              {isFilterOpen ? "Hide Filters" : "Show Filters"}
            </button>
          </div>

          {/* ==================== Mobile / Tablet Filters ==================== */}

          {isFilterOpen && (
            <div className="mb-8 lg:hidden">
              <ProductFilterSidebar
                filters={filters}
                onFilterChange={handleFilterChange}
              />
            </div>
          )}

          {/* ==================== Products Header ==================== */}

          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#08415F]">
                All Products
              </h2>

              {!isLoading && (
                <p className="mt-1 text-sm text-gray-500">
                  {products.length}{" "}
                  {products.length === 1 ? "product" : "products"} found
                </p>
              )}
            </div>

            {/* Search Result */}

            {filters.search && (
              <div className="hidden items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm text-[#08415F] sm:flex">
                <Search className="h-4 w-4" />

                <span className="max-w-[180px] truncate">
                  "{filters.search}"
                </span>

                <button
                  type="button"
                  onClick={handleClearSearch}
                  className="ml-1 rounded-full p-1 transition hover:bg-blue-100"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>

          {/* ==================== Product Grid ==================== */}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* ==================== Loading ==================== */}

            {isLoading ? (
              [...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-4"
                >
                  <Skeleton className="h-48 w-full rounded-md" />

                  <div className="my-3 space-y-2">
                    <Skeleton className="h-3 w-1/3" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-3 w-1/4" />
                  </div>

                  <Skeleton className="mt-2 h-10 w-full rounded-lg" />
                </div>
              ))
            ) : products.length > 0 ? (
              /* ==================== Products ==================== */

              products.map((product) => {
                const currentQty = quantities[product.id] || 1;

                const isAdding = pendingProductId === product.id;

                return (
                  <div
                    key={product.id}
                    className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    {/* ==================== Image ==================== */}

                    <div className="relative overflow-hidden rounded-xl">
                      <Link
                        to={`/productdetails/${product.id}`}
                        className="block cursor-pointer"
                      >
{product.image?.[0] && (
  <img
    src={product.image[0]}
    alt={product.name}
    className="my-2 h-36 w-full rounded-md object-cover"
  />
)}
                      </Link>
                    </div>

                    {/* ==================== Product Info ==================== */}

                    <div className="my-4">
                      <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                        {product.category?.name_en}
                      </p>

                      <Link to={`/productdetails/${product.id}`}>
                        <h3 className="mt-1 line-clamp-1 font-semibold text-gray-800 transition hover:text-[#08ABFF]">
                          {product.name}
                        </h3>
                      </Link>

                      {/* ==================== Price ==================== */}

                      <div className="mt-3 flex items-center gap-2">
                        {product.discount_price ? (
                          <>
                            <span className="font-bold text-gray-900">
                              £{product.discount_price}
                            </span>

                            <span className="text-sm text-gray-400 line-through">
                              £{product.price}
                            </span>
                          </>
                        ) : (
                          <span className="font-bold text-gray-900">
                            £{product.price}
                          </span>
                        )}
                      </div>

                      {/* ==================== Rating ==================== */}

                      <div className="mt-2 text-sm text-gray-500">
                        ⭐ {product.average_rating}
                      </div>

                      {/* ==================== Stock ==================== */}

                      <p
                        className={`mt-2 text-sm font-medium ${
                          product.quantity > 0
                            ? "text-green-600"
                            : "text-red-500"
                        }`}
                      >
                        {product.quantity > 0
                          ? `${product.quantity} items available`
                          : "Out of stock"}
                      </p>
                    </div>
                    

                    {/* ==================== Quantity + Cart ==================== */}

                    <div className="mt-2 flex items-center gap-2">

                                            {/* Add To Cart */}

                      <button
                        type="button"
                        disabled={
                          product.quantity === 0 || isAdding
                        }
                        onClick={() => handleAddToCart(product.id)}
                        className="flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl bg-[#08415F] px-2 py-3 text-sm font-medium text-white transition hover:bg-[#01304a] disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <ShoppingCart className="h-4 w-4 shrink-0" />

                        <span className="truncate">
                          {isAdding ? "Adding..." : "Add To Cart"}
                        </span>
                      </button>
                      {/* Quantity */}

                      <div className="flex shrink-0 items-center justify-between rounded-lg border border-gray-300 px-5 py-2.5">
                        <button
                          type="button"
                          onClick={() =>
                            handleQuantityChange(product.id, -1)
                          }
                          disabled={currentQty <= 1}
                          className="p-1 text-gray-500 hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
                          aria-label="Decrease quantity"
                        >
                          {currentQty <= 1 ? (
                            <Trash2 className="h-4 w-4 text-gray-500" />
                          ) : (
                            <span className="text-base font-bold">−</span>
                          )}
                        </button>

                        <span className="min-w-6 text-center text-sm font-semibold text-gray-900">
                          {currentQty}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            handleQuantityChange(product.id, 1)
                          }
                          disabled={
                            product.quantity === 0 ||
                            currentQty >= product.quantity
                          }
                          className="p-1 text-gray-500 hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-4 w-4 text-gray-700" />
                        </button>
                      </div>


                    </div>
                  </div>
                );
              })
            ) : (
              /* ==================== No Products ==================== */

              <div className="col-span-full flex min-h-[420px] items-center justify-center">
                <div className="flex w-full max-w-lg flex-col items-center rounded-3xl border border-gray-200 bg-white px-6 py-12 text-center shadow-sm">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
                    <Search className="h-10 w-10 text-[#08ABFF]" />
                  </div>

                  <h2 className="mt-6 text-2xl font-bold text-[#08415F] sm:text-3xl">
                    No Products Found
                  </h2>

                  <p className="mt-3 max-w-md text-sm leading-6 text-gray-500 sm:text-base">
                    We couldn't find any products matching your search.
                    Try searching for another product or category.
                  </p>

                  {filters.search && (
                    <div className="mt-5 rounded-full bg-gray-100 px-5 py-2 text-sm text-gray-600">
                      Search:
                      <span className="ml-1 font-semibold text-[#08415F]">
                        "{filters.search}"
                      </span>
                    </div>
                  )}

                  {filters.search && (
                    <button
                      type="button"
                      onClick={handleClearSearch}
                      className="mt-6 flex items-center gap-2 rounded-xl bg-[#08415F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#01304a]"
                    >
                      <X className="h-4 w-4" />
                      Clear Search
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* ==================== Bottom Sections ==================== */}

      <section className="mt-12 w-full space-y-8 sm:mt-16">
        <Timer />
        <FeaturesBar />
      </section>

      {/* ==================== Pagination ==================== */}

      {!isLoading && data?.pagination && products.length > 0 && (
        <div className="mt-12 flex w-full items-center justify-center">
          <div className="flex items-center gap-4">
            <button
              type="button"
              disabled={data.pagination.current_page === 1}
              onClick={() =>
                handlePageChange(
                  data.pagination.current_page - 1
                )
              }
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>

            <span className="text-sm font-medium text-gray-700">
              Page {data.pagination.current_page} of{" "}
              {data.pagination.last_page}
            </span>

            <button
              type="button"
              disabled={
                data.pagination.current_page ===
                data.pagination.last_page
              }
              onClick={() =>
                handlePageChange(
                  data.pagination.current_page + 1
                )
              }
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}





