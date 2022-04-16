import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { SyncLoader } from 'react-spinners';
import swal from 'sweetalert';
import { allPorducts, deleteProduct, remainingProducts } from '../../../../Redux/reducer/cartSlice'; import UpdateModalBox from '../UpdateModalBox/UpdateModalBox';
;

const ManageProducts = () => {

    const dispatch = useDispatch();
    const [updateProduct, setUpdateProduct] = useState({});
    const [modalShow, setModalShow] = React.useState(false);
    const { products, deleteProductLoading, productLoading, updateProductLoading } = useSelector(state => state.products);
    const [searchName, setSearchName] = useState('');


    // load data
    useEffect(() => {
        dispatch(allPorducts());
    }, [dispatch, deleteProductLoading, updateProductLoading]);


    // search products
    let searchProducts = products.filter(product => product?.name?.toLocaleLowerCase().includes(searchName?.toLocaleLowerCase()));



    // handleDeletProduct
    const handleDeletProduct = id => {
        swal({
            text: "Are you sure ? you wan'na delete this product !",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    dispatch(deleteProduct(id));
                    dispatch(remainingProducts(id));
                };
            });
    };

    // loading
    if (deleteProductLoading || productLoading) {
        return <h6 className='text-center'><SyncLoader color='#2574A9' /></h6>
    };

    const handleOpenUpdateModal = (status, product) => {
        setModalShow(true);
        setUpdateProduct(product);
    };

    const handleCloseUpdateModal = () => {
        setModalShow(false);
    };


    return (

        <Container>

            <h6 className='mb-3'>Total products {products.length}</h6>

            <input style={{
                padding: 7,
                width: '50%',
                marginBottom: 20,
                borderRadius: 15,
                border: '2px solid #2574A9'
            }}
                placeholder='Search...'
                type="text"
                onChange={e => setSearchName(e.target.value)}
            />

            <Table striped bordered hover>

                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Origin</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>

                    {

                        searchProducts?.map((product, index) => <tr
                            key={product._id}
                            className='manage_testimonials'
                        >
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>${product.price}</td>
                            <td>{product.category}</td>
                            <td>{product.origin}</td>
                            <td>
                                <button onClick={() => handleDeletProduct(product._id)}>DELETE</button>
                                <button onClick={() => handleOpenUpdateModal(true, product)}>UPDATE</button>
                            </td>

                        </tr>
                        )
                    }

                </tbody>

            </Table>

            {/* open update modal box */}
            <UpdateModalBox
                handleCloseUpdateModal={handleCloseUpdateModal}
                show={modalShow}
                product={updateProduct}
                onHide={() => setModalShow(false)}
            />


        </Container>
    );
};

export default ManageProducts;