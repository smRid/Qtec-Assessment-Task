import React from 'react'
import { Link, useParams } from 'react-router'
import RatingStars from '../../components/RatingStars';



const SingleProduct = () => {
    const {id} = useParams();
    console.log(id);
  return (
    <>
        <section className='section__container bg-primary-light'>
                <h2 className='section__header capitalize'>Single Product Page</h2>
                <div className='section__subheader space-x-2'>
                    <span className='hover:text-primary'><Link to="/">home</Link></span>
                    <i className="ri-arrow-right-s-line"></i>
                    <span className='hover:text-primary'><Link to="/shop">shop</Link></span>
                    <i className="ri-arrow-right-s-line"></i>
                    <span className='hover:text-primary'>Product Name</span>
                </div>
            </section>

        <section className='section__container mt-8'>
                <div className='flex flex-col items-center md:flex-row gap-8'>
                   <div className='md:w-1/2 w-full'>
                   <img src="/src/assets/Product-1.png" alt=""
                        className='rounded-md w-full h-auto'/>
                   </div> 
                   
                   <div className='md:w-1/2 w-full'>
                         <h3 className='text-2xl font-semibold mb-4'>
                            Product Name
                         </h3>
                         <p className='text-xl text-primary mb-4 space-x-1'>
                            $100 <s>$130</s>
                         </p>
                         <p className='text-gray-400 mb-4'>
                            This is product description. 
                         </p>
                         
                         <div>
                            <p><strong>Category:</strong>Accesories</p>
                            <p><strong>Color:</strong>Black</p>
                            <div className='flex gap-1 items-center'>
                                <strong>Rating:</strong>
                                <RatingStars rating={4.5} />
                            </div>
                            
                         </div>

                            <button className='mt-6 px-6 py-3 bg-primary text-white rounded-md flex items-center gap-2 hover:bg-primary-dark transition-all duration-300'>
                                <i className="ri-shopping-cart-2-line"></i>
                                Add to Cart
                            </button>
                   </div>
                </div>
        </section>


    </>
  )
}

export default SingleProduct
