import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  brand: string;
  type: string;
  inStock: boolean;
  rating: number;
}

export function useProductFilter(initialProducts: Product[] = []) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const [searchParams, setSearchParams] = useSearchParams();

  // =========================
  // Read values from URL
  // =========================

  const searchQuery = searchParams.get('search') || '';

  const selectedCategory =
    searchParams.get('category') || 'all';

  const selectedBrands = searchParams.getAll('brand');

  const selectedTypes = searchParams.getAll('type');

  const selectedAvailability =
    searchParams.get('availability') || 'all';

  const minPrice = searchParams.get('minPrice')
    ? Number(searchParams.get('minPrice'))
    : 0;

  const maxPrice = searchParams.get('maxPrice')
    ? Number(searchParams.get('maxPrice'))
    : 200;

  // =========================
  // Update URL helper
  // =========================

  const updateParam = (
    key: string,
    value: string | string[] | null,
    isArray = false
  ) => {
    const newParams = new URLSearchParams(searchParams);

    newParams.delete(key);

    if (isArray && Array.isArray(value)) {
      value.forEach((v) => {
        newParams.append(key, v);
      });
    } else if (
      value !== null &&
      value !== '' &&
      value !== 'All' &&
      value !== 'all'
    ) {
      newParams.set(key, value);
    }

    setSearchParams(newParams);
  };

  // =========================
  // Search
  // =========================

  const setSearch = (query: string) => {
    updateParam('search', query);
  };

  const setSearchQuery = (query: string) => {
    updateParam('search', query);
  };

  // =========================
  // Category
  // =========================

  const setCategory = (category: string) => {
    updateParam('category', category);
  };

  const setSelectedCategory = (category: string) => {
    updateParam('category', category);
  };

  // =========================
  // Brand
  // =========================

  const handleBrandChange = (brand: string) => {
    const updated = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand];

    updateParam('brand', updated, true);
  };

  const setBrand = (brand: string) => {
    if (brand === 'all') {
      updateParam('brand', null);
      return;
    }

    handleBrandChange(brand);
  };

  // =========================
  // Product Type
  // =========================

  const handleTypeChange = (type: string) => {
    const updated = selectedTypes.includes(type)
      ? selectedTypes.filter((t) => t !== type)
      : [...selectedTypes, type];

    updateParam('type', updated, true);
  };

  const setProductType = (type: string) => {
    if (type === 'all') {
      updateParam('type', null);
      return;
    }

    handleTypeChange(type);
  };

  // =========================
  // Availability
  // =========================

  const setAvailableProduct = (status: string) => {
    updateParam(
      'availability',
      status === 'all' ? null : status
    );
  };

  const setSelectedAvailability = (status: string | null) => {
    updateParam('availability', status);
  };

  // =========================
  // Price
  // =========================

  const setMinPrice = (price: number) => {
    updateParam('minPrice', String(price));
  };

  const setMaxPrice = (price: number) => {
    updateParam('maxPrice', String(price));
  };

  const setPriceRange = (min: number, max: number) => {
    const newParams = new URLSearchParams(searchParams);

    newParams.set('minPrice', String(min));
    newParams.set('maxPrice', String(max));

    setSearchParams(newParams);
  };

  // =========================
  // Quantity
  // =========================

  const handleQuantityChange = (id: number, delta: number) => {
    setQuantities((prev) => {
      const current = prev[id] || 1;
      const updated = Math.max(1, current + delta);

      return {
        ...prev,
        [id]: updated,
      };
    });
  };

  // =========================
  // Delete
  // =========================

  const handleDeleteProduct = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.filter((p) => p.id !== id)
    );
  };

  // =========================
  // Filtering
  // =========================

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === 'all' ||
      product.category.toLowerCase() ===
        selectedCategory.toLowerCase();

    const matchesBrand =
      selectedBrands.length === 0 ||
      selectedBrands.includes(product.brand);

    const matchesType =
      selectedTypes.length === 0 ||
      selectedTypes.includes(product.type);

    const matchesAvailability =
      selectedAvailability === 'all' ||
      (selectedAvailability === 'in stock' && product.inStock) ||
      (selectedAvailability === 'out of stock' && !product.inStock);

    const matchesPrice =
      product.price >= minPrice &&
      product.price <= maxPrice;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesBrand &&
      matchesType &&
      matchesAvailability &&
      matchesPrice
    );
  });

  // =========================
  // Return
  // =========================

  return {
    searchQuery,
    setSearchQuery,
    setSearch,

    selectedCategory,
    setSelectedCategory,
    setCategory,

    // Singular values لأن ProductList الحالي بيستخدمها
    selectedBrand: selectedBrands[0] || 'all',
    setBrand,

    selectedProductType: selectedTypes[0] || 'all',
    setProductType,

    availableProduct: selectedAvailability,
    setAvailableProduct,

    // Original arrays
    selectedBrands,
    handleBrandChange,

    selectedTypes,
    handleTypeChange,

    selectedAvailability,
    setSelectedAvailability,

    // Price
    minPrice,
    setMinPrice,

    maxPrice,
    setMaxPrice,

    setPriceRange,

    // Quantity
    quantities,
    handleQuantityChange,

    // Delete
    handleDeleteProduct,

    // Filtered products
    filteredProducts,
  };
}