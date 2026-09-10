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
  const availableProduct = searchParams.get('availableProduct') || 'all';   

  // دوال لتحديث الـ URL لكل فلتر بدون إعادة تحميل الصفحة
  const setSearch = (query: string) => {
    setSearchParams((prev) => {
      if (query) prev.set('search', query);
      else prev.delete('search');
      return prev;
    });
  };
  const setAvailableProduct = (availableProduct: string) => {
    setSearchParams((prev) => {
      if (availableProduct && availableProduct !== 'all') prev.set('availableProduct', availableProduct);
      else prev.delete('availableProduct');
      return prev;
    });
  };



  const setProductType = (type: string) => {
    setSearchParams((prev) => {
      if (type && type !== 'all') prev.set('productType', type);
      else prev.delete('productType');
      return prev;
    });
  };

  const setBrand = (brand: string) => {
    setSearchParams((prev) => {
      if (brand && brand !== 'all') prev.set('brand', brand);
      else prev.delete('brand');
      return prev;
    });
  };

  const setCategory = (category: string) => {
    setSearchParams((prev) => {
      if (category && category !== 'all') prev.set('category', category);
      else prev.delete('category');
      return prev;
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
    availableProduct,
    minPrice,
    maxPrice,
    setSearch,
    setCategory,
    setProductType,
    setPriceRange,
    setBrand,
    setAvailableProduct
    
  };
}