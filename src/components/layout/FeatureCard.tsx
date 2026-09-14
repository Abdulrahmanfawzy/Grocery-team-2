        export function FeatureCard(){
          return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Curated Products', desc: 'Provide free home delivery for all product over $100' },
            { title: 'Handmade', desc: 'WE ensure the product quality that is our main goal' },
            { title: 'Natural Food', desc: 'Return product within 3 days for any product you buy' },
            { title: 'Free home delivery', desc: 'We ensure the product that you can trust easily' },
          ].map((feature, idx) => (
            <div key={idx} className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-app-main/10 text-[#014162]">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                <p className="mt-1 text-xs text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
          )
        }
        