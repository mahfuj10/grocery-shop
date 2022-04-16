import React, { useEffect, useState } from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

const CategoriesSidebar = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/category.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    const navigate = useNavigate()

    const handleChangeNavigate = category => {
        navigate(`/category=/${category}`);
    }

    return (

        <section style={{ background: "#fff", padding: '15px 20px', borderRadius: 15, marginBottom: 70 }}>



            {
                categories.map(category => <article
                    type="button"
                    className='d-flex align-items-center justify-content-between category'
                    style={{ marginBottom: 10 }}
                    onClick={() => handleChangeNavigate(category.category)}
                >

                    <article className='d-flex gap-2 align-items-center' >

                        <img src={category.image} width='17' height="17" alt={category.name} />

                        <h6 style={{ fontSize: 14, marginTop: 5 }}>{category.name}</h6>

                    </article>
                    <RiArrowRightSLine />

                </article>)
            }

        </section>
    );
};

export default CategoriesSidebar;