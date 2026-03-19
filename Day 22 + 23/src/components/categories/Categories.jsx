import React from 'react';

function Categories(props) {
    return (
        <div className="w-full p-8 lg:p-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                <div>
                    <img src="https://images2.thanhnien.vn/528068263637045248/2024/1/25/e093e9cfc9027d6a142358d24d2ee350-65a11ac2af785880-17061562929701875684912.jpg" className="w-full h-auto object-cover rounded" />
                </div>
                <div>
                    <img src="https://images2.thanhnien.vn/528068263637045248/2024/1/25/e093e9cfc9027d6a142358d24d2ee350-65a11ac2af785880-17061562929701875684912.jpg" className="w-full h-auto object-cover rounded" />
                </div>
                <div>
                    <img src="https://images2.thanhnien.vn/528068263637045248/2024/1/25/e093e9cfc9027d6a142358d24d2ee350-65a11ac2af785880-17061562929701875684912.jpg" className="w-full h-auto object-cover rounded" />
                </div>
                <div>
                    <img src="https://images2.thanhnien.vn/528068263637045248/2024/1/25/e093e9cfc9027d6a142358d24d2ee350-65a11ac2af785880-17061562929701875684912.jpg" className="w-full h-auto object-cover rounded" />
                </div>
            </div>
        </div>
    );
}

export default Categories;