    import { useState, type JSXElementConstructor, type Key, type ReactElement, type ReactNode, type ReactPortal } from "react";
    import { Link, useParams } from "react-router-dom";

    import {
    ShoppingCart,
    Heart,
    Star,
    } from "lucide-react";

    import { Skeleton } from "@/components/ui/skeleton";

    import ExploreCarousel from "@/features/products/components/ExploreCarousel";
    import { FrequentlyBoughtTogetherCarousel } from "@/features/products/components/FrequentlyBoughtTogetherCarousel";

    import { useProductDetails } from "@/features/products/hooks/useProductDetails";
    import { useProducts } from "@/features/products/hooks/useProducts";
    import { useBoughtTogether } from "@/features/products/hooks/useBoughtTogether";

    import useAddCartItem from "@/features/cart/hooks/useAddCartItem";

    function ProductDetails() {
    const { id } = useParams<{ id: string }>();

    const [quantity, setQuantity] = useState(1);
    const [isFavorite, setIsFavorite] = useState(false);
    const [activeTab, setActiveTab] = useState("description");
    const [carouselQuantities, setCarouselQuantities] = useState<Record<number, number>>({});


    const {
        data: product,
        isLoading,
        isError,
        error,
    } = useProductDetails(id || "");


    const { data: productsData } = useProducts({
        per_page: 10,
    });

    const { data: boughtTogetherProducts = [] } = useBoughtTogether(id || "");

    const { mutate: addProductToCart, isPending } = useAddCartItem();
    if (isLoading) {
        return (
        <div className="mainContainer w-full min-w-0 overflow-x-hidden bg-white px-3 py-4 sm:px-4 sm:py-6 md:px-8 lg:px-12">
            <div className="mx-auto w-full max-w-7xl min-w-0">
            {/* Breadcrumbs Skeleton */}
            <div className="mb-6 flex items-center gap-2">
                <Skeleton className="h-4 w-12" />
                <Skeleton className="h-4 w-3" />
                <Skeleton className="h-4 w-12" />
                <Skeleton className="h-4 w-3" />
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-3" />
                <Skeleton className="h-4 w-32" />
            </div>

            {/* Main Product Layout Skeleton */}
            <div className="flex w-full flex-col gap-6 rounded-lg bg-white p-4 sm:p-6 lg:flex-row">
                {/* Left - Images Skeleton */}
                <div className="flex w-full flex-col items-center gap-3 lg:w-1/2">
                <Skeleton className="h-64 w-full max-w-md rounded-md xs:h-72 sm:h-80 md:h-96" />
                <div className="flex gap-3">
                    <Skeleton className="h-16 w-16 rounded sm:h-20 sm:w-20" />
                    <Skeleton className="h-16 w-16 rounded sm:h-20 sm:w-20" />
                    <Skeleton className="h-16 w-16 rounded sm:h-20 sm:w-20" />
                </div>
                </div>

                {/* Right - Product Details Skeleton */}
                <div className="flex w-full flex-col items-start lg:w-1/2 lg:pr-6">
                <Skeleton className="mt-2 h-4 w-24" />
                <Skeleton className="mt-2 h-8 w-3/4" />
                <div className="mt-3 flex gap-2">
                    <Skeleton className="h-7 w-20 rounded-md" />
                    <Skeleton className="h-7 w-20 rounded-md" />
                </div>
                <Skeleton className="mt-4 h-5 w-36" />
                <Skeleton className="mt-4 h-8 w-28" />
                <Skeleton className="mt-2 h-4 w-32" />
                <div className="my-4 w-full border border-gray-100" />
                <Skeleton className="h-5 w-20" />
                <Skeleton className="mt-2 h-11 w-36 rounded-lg" />
                <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row sm:gap-4">
                    <Skeleton className="h-11 w-full rounded-sm sm:flex-1" />
                    <Skeleton className="h-11 w-full rounded-sm sm:flex-1" />
                </div>
                </div>
            </div>

            {/* Tabs Section Skeleton */}
            <div className="mt-8 rounded-lg border border-gray-200 bg-white p-4 md:mt-16 md:p-6">
                <div className="flex gap-4 border-b border-gray-200 pb-4">
                <Skeleton className="h-9 w-28 rounded-md" />
                <Skeleton className="h-9 w-28 rounded-md" />
                <Skeleton className="h-9 w-28 rounded-md" />
                </div>
                <div className="mt-6 space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-2/3" />
                </div>
            </div>
            </div>
        </div>
        );
    }


    if (isError || !product) {
        return (
        <div className="flex min-h-[500px] items-center justify-center">
            <div className="rounded-xl border border-red-100 bg-red-50 px-6 py-4 text-red-600">
            {error?.message || "Failed to load product."}
            </div>
        </div>
        );
    }

    const exploreProducts =
        productsData?.data.filter((item) => item.id !== product.id) ?? [];

    // Product Quantity
    const handleIncrement = () => {
        setQuantity((prev) => (prev < product.quantity ? prev + 1 : prev));
    };

    const handleDecrement = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    };

    // Add Product To Cart
    const handleAddToCart = () => {
        addProductToCart({
        productId: product.id,
        quantity,
        });
    };

    // Carousel Quantity Handlers
    const handleCarouselQtyChange = (itemId: number, delta: number) => {
        setCarouselQuantities((prev) => {
        const currentQty = prev[itemId] || 1;
        const newQty = Math.max(1, currentQty + delta);
        return { ...prev, [itemId]: newQty };
        });
    };

    const handleCarouselReset = (itemId: number) => {
        setCarouselQuantities((prev) => {
        const { [itemId]: _, ...rest } = prev;
        return rest;
        });
    };

    // Current Price Calculation
    const currentPrice = Number(product.discount_price ?? product.price);
    const getImageUrl = (image: string) => {
  if (image.includes("/storage/https://")) {
    return image.replace(
      "https://round-grocery.huma-volve.com/storage/https://",
      "https://"
    );
  }

  return image;
};

    return (
        <div className="mainContainer w-full min-w-0 overflow-x-hidden bg-white px-3 py-4 sm:px-4 sm:py-6 md:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-7xl min-w-0">
            {/* Breadcrumbs */}
            <div className="mb-4 flex flex-wrap items-center gap-1.5 text-xs sm:mb-6 sm:gap-2 sm:text-sm">
            <Link to="/HomePage" className="text-[#BCB8B1] hover:text-primary">
                Home
            </Link>
            <span className="text-[#BCB8B1]">/</span>
            <Link to="/ProductList" className="text-[#BCB8B1] hover:text-primary">
                Shop
            </Link>
            <span className="text-[#BCB8B1]">/</span>
            <span className="text-gray-800">{product.category?.name_en}</span>
            <span className="text-[#BCB8B1]">/</span>
            <span className="max-w-[10rem] truncate font-medium text-gray-800 sm:max-w-none">
                {product.name}
            </span>
            </div>

            {/* Main Product Details */}
            <div className="flex w-full flex-col gap-6 rounded-lg bg-white p-4 sm:p-6 lg:flex-row">
            {/* LEFT - Product Images */}
            <div className="flex w-full flex-col items-center gap-3 lg:w-1/2">
                <div className="flex w-full flex-col items-center gap-3">
                <img
                    src={getImageUrl(product.image?.[0] ?? "")}
                    alt={product.name}
                    className="h-64 w-full max-w-md rounded bg-gray-50 object-cover shadow-sm shadow-gray-400 xs:h-72 sm:h-80 md:h-96"
                />
                        {product.image?.map((image, index) => (
                        <img
                            key={index}
                            src={getImageUrl(image)}
                            alt={`${product.name} ${index + 1}`}
                            className="h-16 w-16 cursor-pointer rounded object-cover shadow-sm shadow-gray-400 hover:opacity-75 sm:h-20 sm:w-20"
                        />
                        ))}
                </div>
            </div>

            {/* RIGHT - Product Info */}
            <div className="flex w-full flex-col items-start lg:w-1/2 lg:pr-6">
                <p className="mt-2 text-sm font-medium uppercase tracking-wide text-gray-400">
                {product.category?.name_en}
                </p>

                <h1 className="mt-1 text-2xl font-bold text-[#014162] sm:text-3xl">
                {product.name}
                </h1>

                <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-md bg-gray-100 px-3 py-1 text-sm text-gray-700">
                    Brand: {product.brand}
                </span>
                <span className="rounded-md bg-gray-100 px-3 py-1 text-sm capitalize text-gray-700">
                    {product.type}
                </span>
                </div>

                <div className="mt-4 flex items-center gap-2">
                <div className="flex">
                    {[...Array(5)].map((_, index) => (
                    <Star
                        key={index}
                        className={`h-4 w-4 ${
                        index < Math.round(product.average_rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                    />
                    ))}
                </div>
                <span className="text-sm text-gray-500">
                    {product.average_rating} ({product.ratings.length} reviews)
                </span>
                </div>

                <div className="mt-4 flex items-center gap-3">
                <p className="text-2xl font-bold text-gray-900">
                    £ {currentPrice.toFixed(2)}
                </p>
                {product.discount_price && (
                    <p className="text-lg text-gray-400 line-through">
                    £ {Number(product.price).toFixed(2)}
                    </p>
                )}
                </div>

                <p
                className={`mt-2 text-sm font-medium ${
                    product.quantity > 0 ? "text-green-600" : "text-red-500"
                }`}
                >
                {product.quantity > 0
                    ? `${product.quantity} items available`
                    : "Out of stock"}
                </p>

                <div className="mt-4 w-full border border-gray-300" />

                <h2 className="mt-4 font-medium text-gray-700">Quantity</h2>

                <div className="quantity mt-2 flex h-11 w-32 items-center justify-between rounded-lg border-2 border-primary bg-white px-1 sm:w-36">
                <button
                    type="button"
                    onClick={handleDecrement}
                    disabled={quantity <= 1}
                    className="flex h-7 w-7 items-center justify-center rounded text-xl font-bold text-primary hover:bg-gray-100 disabled:opacity-40 sm:h-8 sm:w-8"
                >
                    −
                </button>

                <span className="w-8 text-center font-medium sm:w-10">
                    {quantity}
                </span>

                <button
                    type="button"
                    onClick={handleIncrement}
                    disabled={
                    product.quantity === 0 || quantity >= product.quantity
                    }
                    className="flex h-7 w-7 cursor-pointer items-center justify-center rounded text-xl font-bold text-primary hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 sm:h-8 sm:w-8"
                >
                    +
                </button>
                </div>

                <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row sm:gap-4">
                <button
                    type="button"
                    onClick={handleAddToCart}
                    disabled={isPending || product.quantity === 0}
                    className="flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-sm bg-[#014162] font-medium text-white hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 sm:flex-1"
                >
                    <ShoppingCart className="h-5 w-5" />
                    {isPending ? "Adding..." : "Add To Cart"}
                </button>

                <button
                    type="button"
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={`flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-sm font-medium sm:flex-1 ${
                    isFavorite
                        ? "border border-red-200 bg-red-50 text-red-600"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                >
                    <Heart
                    className={`h-5 w-5 ${
                        isFavorite ? "fill-red-500 text-red-500" : ""
                    }`}
                    />
                    {isFavorite ? "Favorited" : "Add To Favourite"}
                </button>
                </div>
            </div>
            </div>

            {/* Tabs Section */}
            <div className="mt-8 min-w-0 overflow-hidden rounded-lg border border-gray-200 bg-white p-3 shadow-sm sm:mt-10 sm:p-4 md:mt-16 md:p-6">
            <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-4 md:gap-4">
                <button
                type="button"
                onClick={() => setActiveTab("description")}
                className={`rounded-md px-3 py-2 text-xs font-medium sm:px-4 md:px-6 md:text-base ${
                    activeTab === "description"
                    ? "bg-[#014162] text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
                >
                Description
                </button>

                <button
                type="button"
                onClick={() => setActiveTab("reviews")}
                className={`rounded-md px-3 py-2 text-xs font-medium sm:px-4 md:px-6 md:text-base ${
                    activeTab === "reviews"
                    ? "bg-[#014162] text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
                >
                Reviews ({product.ratings.length})
                </button>

                <button
                type="button"
                onClick={() => setActiveTab("howToUse")}
                className={`rounded-md px-3 py-2 text-xs font-medium sm:px-4 md:px-6 md:text-base ${
                    activeTab === "howToUse"
                    ? "bg-[#014162] text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
                >
                How To Use
                </button>
            </div>

            <div className="mt-6">
                {activeTab === "description" && (
                <p className="break-words text-sm text-gray-700 md:text-base">
                    {product.description}
                </p>
                )}

                {activeTab === "reviews" && (
                <div className="space-y-6">
                    {product.ratings.length === 0 ? (
                    <p className="text-sm text-gray-500">No reviews yet.</p>
                    ) : (
                    product.ratings.map((review: { id: Key | null | undefined; user: { avatar: string | undefined; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }; stars: number; comment: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
                        <div
                        key={review.id}
                        className="flex min-w-0 gap-3 border-b border-gray-100 pb-4 sm:gap-4"
                        >
                        {review.user.avatar ? (
                            <img
                            src={review.user.avatar}
                            alt={review.user.name}
                            className="h-9 w-9 shrink-0 rounded-full object-cover sm:h-10 sm:w-10 md:h-12 md:w-12"
                            />
                        ) : (
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-200 text-sm font-semibold text-gray-600 sm:h-10 sm:w-10 md:h-12 md:w-12">
                            {review.user.name.charAt(0).toUpperCase()}
                            </div>
                        )}

                        <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center justify-between gap-1">
                            <h4 className="text-sm font-semibold text-gray-900 md:text-base">
                                {review.user.name}
                            </h4>

                            <div className="flex">
                                {[...Array(5)].map((_, index) => (
                                <Star
                                    key={index}
                                    className={`h-3.5 w-3.5 ${
                                    index < review.stars
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-gray-300"
                                    }`}
                                />
                                ))}
                            </div>
                            </div>

                            <p className="mt-1 break-words text-xs text-gray-600 md:text-sm">
                            {review.comment}
                            </p>
                        </div>
                        </div>
                    ))
                    )}
                </div>
                )}

                {activeTab === "howToUse" && (
                <p className="break-words text-sm text-gray-700 md:text-base">
                    {product.how_to_use || "No instructions available."}
                </p>
                )}
            </div>
            </div>

            <FrequentlyBoughtTogetherCarousel
            products={boughtTogetherProducts}
            carouselQuantities={carouselQuantities}
            handleCarouselQtyChange={handleCarouselQtyChange}
            handleCarouselReset={handleCarouselReset}
            />

            <ExploreCarousel
  products={exploreProducts}
  carouselQuantities={carouselQuantities}
  handleCarouselQtyChange={handleCarouselQtyChange}
  handleCarouselReset={handleCarouselReset}
/>
        </div>
        </div>
    );
    }

    export default ProductDetails;