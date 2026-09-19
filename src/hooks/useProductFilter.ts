//useProductFilter.ts
import { useSearchParams } from 'react-router-dom';

export function useProductFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  // قراءة القيم الحالية من الـ URL أو إرجاع القيم الافتراضية
  const searchQuery = searchParams.get('search') || '';
  const selectedCategory = searchParams.get('category') || 'all';
  const minPrice = searchParams.get('minPrice') || '';
  const maxPrice = searchParams.get('maxPrice') || '';
  const selectedBrand = searchParams.get('brand') || 'all';
  const selectedProductType = searchParams.get('productType') || 'all';

  // دوال لتحديث الـ URL لكل فلتر بدون إعادة تحميل الصفحة
  const setSearch = (query: string) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      if (query) newParams.set('search', query);
      else newParams.delete('search');
      return newParams;
    });
  };

  const setProductType = (type: string) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      if (type && type !== 'all') newParams.set('productType', type);
      else newParams.delete('productType');
      return newParams;
    });
  };

  const setBrand = (brand: string) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      if (brand && brand !== 'all') newParams.set('brand', brand);
      else newParams.delete('brand');
      return newParams;
    });
  };

  const setCategory = (category: string) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      if (category && category !== 'all') newParams.set('category', category);
      else newParams.delete('category');
      return newParams;
    });
  };

  const setPriceRange = (min: string, max: string) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      if (min) newParams.set('minPrice', min);
      else newParams.delete('minPrice');
      
      if (max) newParams.set('maxPrice', max);
      else newParams.delete('maxPrice');
      return newParams;
    });
  };

  return {
    searchQuery,
    selectedCategory,
    selectedBrand,
    selectedProductType,
    minPrice,
    maxPrice,
    setSearch,
    setCategory,
    setProductType,
    setPriceRange,
    setBrand,
  };
}