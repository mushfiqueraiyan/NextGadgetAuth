import Link from "next/link";

async function getProduct(id) {
  const res = await fetch(`http://localhost:3000/api/products/${id}`);
  if (!res.ok) {
    return null;
  }
  return res.json();
}

export default async function ProductDetailsPage({ params }) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return <div className="p-8">Product not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link
              href="/products"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Products
            </Link>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
          <div className="space-y-8">
            {/* Title and Price */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                {product.name}
              </h1>

              <div className="flex items-baseline space-x-4">
                <span className="text-4xl font-bold text-blue-600">
                  ৳{product.price}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  ৳{Math.round(product.price * 1.2)}
                </span>
                <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                  Save 17%
                </span>
              </div>
            </div>

            <div className="prose prose-gray max-w-none">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Description
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Key Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Premium Quality Materials",
                  "Fast & Free Shipping",
                  "30-Day Money Back Guarantee",
                  "24/7 Customer Support",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/products"
            className="inline-flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-lg transition-all duration-200 hover:scale-105"
          >
            <svg
              className="mr-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to All Products
          </Link>
        </div>
      </div>
    </div>
  );
}
