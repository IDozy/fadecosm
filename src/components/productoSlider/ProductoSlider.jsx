import React from 'react'
import imagen1 from "../../assets/imagen-1.jpg"
import imagen2 from "../../assets/imagen-2.jpg"
import imagen3 from "../../assets/imagen-3.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./ProductoSlider.css"

const ProductoSlider = () => {
    return (
        <div className="producto-slider">
            <div className='container-product'>
                <input type="radio" name='slider' id="s1" checked />
                <input type="radio" name='slider' id="s2" />
                <input type="radio" name='slider' id="s3" />
                <input type="radio" name='slider' id="s4" />
                <input type="radio" name='slider' id="s5" />


                <div className="cards-product">
                    <label htmlFor="s1" id='slide1'>
                        <div className="card-product">
                            <div className="image">
                                <img src={imagen1} alt="" />
                                <div className="dots">
                                    <div className=""></div>
                                    <div className=""></div>
                                    <div className=""></div>
                                </div>
                            </div>
                            <div className="infos">
                                <span className='name'>adsfafs</span>
                                <span className='lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat,</span>
                                <a href="/detalles" className='btn-details'>detalles</a>
                                <div className="actions">
                                    <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                                    <FontAwesomeIcon icon="fa-solid fa-heart" />
                                    <FontAwesomeIcon icon="fa-solid fa-bookmark" />
                                    <FontAwesomeIcon icon="fa-solid fa-share-nodes" />
                                </div>
                            </div>
                        </div>
                    </label>

                    <label htmlFor="s2" id='slide2'>
                        <div className="card-product">
                            <div className="image">
                                <img src={imagen2} alt="" />
                                <div className="dots">
                                    <div className=""></div>
                                    <div className=""></div>
                                    <div className=""></div>
                                </div>
                            </div>
                            <div className="infos">
                                <span className='name'>adsfafs</span>
                                <span className='lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat,</span>
                                <a href="/detalles" className='btn-details'>detalles</a>
                                <div className="actions">
                                    <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                                    <FontAwesomeIcon icon="fa-solid fa-heart" />
                                    <FontAwesomeIcon icon="fa-solid fa-bookmark" />
                                    <FontAwesomeIcon icon="fa-solid fa-share-nodes" />
                                </div>
                            </div>
                        </div>
                    </label>

                    <label htmlFor="s3" id='slide3'>
                        <div className="card-product">
                            <div className="image">
                                <img src={imagen3} alt="" />
                                <div className="dots">
                                    <div className=""></div>
                                    <div className=""></div>
                                    <div className=""></div>
                                </div>
                            </div>
                            <div className="infos">
                                <span className='name'>adsfafs</span>
                                <span className='lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </span>
                                <a href="/detalles" className='btn-details'>detalles</a>
                                <div className="actions">
                                    <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                                    <FontAwesomeIcon icon="fa-solid fa-heart" />
                                    <FontAwesomeIcon icon="fa-solid fa-bookmark" />
                                    <FontAwesomeIcon icon="fa-solid fa-share-nodes" />
                                </div>
                            </div>
                        </div>
                    </label>
                    <label htmlFor="s4" id='slide4'>
                        <div className="card-product">
                            <div className="image">
                                <img src={imagen1} alt="" />
                                <div className="dots">
                                    <div className=""></div>
                                    <div className=""></div>
                                    <div className=""></div>
                                </div>
                            </div>
                            <div className="infos">
                                <span className='name'>adsfafs</span>
                                <span className='lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat,</span>
                                <a href="/detalles" className='btn-details'>detalles</a>
                                <div className="actions">
                                    <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                                    <FontAwesomeIcon icon="fa-solid fa-heart" />
                                    <FontAwesomeIcon icon="fa-solid fa-bookmark" />
                                    <FontAwesomeIcon icon="fa-solid fa-share-nodes" />
                                </div>
                            </div>
                        </div>
                    </label>

                    <label htmlFor="s5" id='slide5'>
                        <div className="card-product">
                            <div className="image">
                                <img src={imagen2} alt="" />
                                <div className="dots">
                                    <div className=""></div>
                                    <div className=""></div>
                                    <div className=""></div>
                                </div>
                            </div>
                            <div className="infos">
                                <span className='name'>adsfafs</span>
                                <span className='lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat,</span>
                                <a href="/detalles" className='btn-details'>detalles</a>
                                <div className="actions">
                                    <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                                    <FontAwesomeIcon icon="fa-solid fa-heart" />
                                    <FontAwesomeIcon icon="fa-solid fa-bookmark" />
                                    <FontAwesomeIcon icon="fa-solid fa-share-nodes" />
                                </div>
                            </div>
                        </div>
                    </label>


                </div>
            </div>
        </div>
    )
}

export default ProductoSlider
