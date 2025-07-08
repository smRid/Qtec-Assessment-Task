import { useEffect, useState } from 'react'

import productsData from '../../data/products.json'
import ProductCards from './ProductCards';
import ShopFiltering from './ShopFiltering';

const filters = {
    categories: ['all', 'accessories', 'dress', 'top', 'bottom'],
    colors: ['all', 'black', 'white', 'red', 'gold', 'blue', 'green'],
    priceRanges: [
        { label: 'Under $50', min: 0, max: 50 },
        { label: '$50 - $100', min: 50, max: 100 },
        { label: '$100 - $200', min: 100, max: 200 },
        { label: '$200 and above', min: 200, max: Infinity }
    ]
};

const ShopPage = () => {
    const [products, setProducts] = useState(productsData);

    const[filtersState, setFiltersState] = useState({
        category: 'all',
        color: 'all',
        priceRange: ''
    })

    // filtering function
    const applyFilters = () => {
        let filteredProducts = productsData;

        //filter by category
        if(filtersState.category && filtersState.category !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.category === filtersState.category);
        }

        // filter by color
        if(filtersState.color && filtersState.color !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.color === filtersState.color);
        }

        // filter by price range
        if(filtersState.priceRange) {
            const [minPrice, maxPrice] = filtersState.priceRange.split('-').map(Number);
            
            filteredProducts = filteredProducts.filter(product => product.price >= minPrice && product.price <= maxPrice);
        }

        setProducts(filteredProducts);
    }

    useEffect(() => {
        applyFilters();
    }, [filtersState]);


    //clear filters function
    const clearFilters = () => {
        setFiltersState({
            category: 'all',
            color: 'all',
            priceRange: ''
        });
    }

  return (
    <>
      <section className='section__container bg-primary-light'>
        <h2 className='section__header capitalize'>Shop Page</h2>
        <p className='section__subheader'>Discover the Hottest Picks: Evevate Your Style with Our Curated Collection of Trendy Fashion Products.</p>
      </section>

      <section className='section__container'>
        <div className='flex flex-col md:flex-row md:gap-12 gap-8'>

            {/* Left side */}
            <ShopFiltering 
            filters={filters} 
            filtersState={filtersState} setFiltersState={setFiltersState} clearFilters={clearFilters}/>

            {/* Right side */}
            <div>
                <h3 className='text-xl font-medium mb-4'>Products Available: {products.length}</h3>
                <ProductCards products={products}/>
            </div>
        </div>
      </section>
    </>
  )
}

export default ShopPage
