import React from 'react';
import styled from 'styled-components';
import { formatPrice } from '../utils/helpers';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Product = ({ image, name, price, id }) => {
    return (
        <Wrapper>
            <div className='container'>
                <Link to={`/products/${id}`}>
                    <img src={image} alt={name} />
                    <FaSearch className='link search' />
                </Link>
            </div>
            <footer>
                <h5>{name}</h5>
                <p>{formatPrice(price)}</p>
            </footer>
        </Wrapper>
    );
};

const Wrapper = styled.article`
    .container {
        position: relative;
        background: var(--clr-black);
        border-radius: var(--radius);
    }
    img {
        width: 100%;
        display: block;
        object-fit: cover;
        border-radius: var(--radius);
        transition: var(--transition);
    }
    .link {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        transition: var(--transition);
        opacity: 0;
        cursor: pointer;
        color: var(--clr-white);
    }

    search {
        font-size: 0.5rem;
    }
    .container:hover img {
        opacity: 0.5;
    }
    .container:hover .link {
        opacity: 1;
    }
    footer {
        margin-top: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    footer h5,
    footer p {
        margin-bottom: 0;
        font-weight: 400;
    }

    footer p {
        color: var(--clr-primary-5);
        letter-spacing: var(--spacing);
    }
`;
export default Product;
