import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import uploadImage from '../../../../images/uploadImage.jpg';
import ImageUploading from 'react-images-uploading';
import { useForm } from "react-hook-form";
import '../../Dashboard/Dashboard.css'; import swal from 'sweetalert';
import axios from 'axios';
;


const AddProduct = () => {


    const [images, setImages] = React.useState([]);
    const [imageURL, setImageURL] = useState('');
    const [loading, setLoading] = useState(false);
    const maxNumber = 69;
    const onChange = (imageList, addUpdateIndex) => {
        setImages(imageList);
    };

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const onSubmit = data => {


        if (imageURL === undefined) swal("OOPS!", "Please upload image", "warning");

        setLoading(true);

        const product = { ...data, image: imageURL, rating: 0, reviews: [] };

        axios.post('https://secret-island-26493.herokuapp.com/addproduct', product).then(() => {
            swal("", "Product added successfully", "success");
            reset();
            setLoading(false);
        })

    };




    // input style
    const inputStyle = {
        width: '70%',
        marginBottom: 20,
        padding: 10,
        background: "#E7E7E7",
        border: 'none',
        borderRadius: 25,
        display: 'block'
    };

    const uploadButton = {
        display: 'block',
        background: '#fff',
        border: '1px solid #2574A9',
        padding: '5px 35px',
        marginBottom: 10,
        textTransform: 'uppercase',
        borderRadius: 25,
        color: "#2574A9",
        letterSpacing: 2
    };

    const submitButton = {
        width: '70%',
        background: '#2574A9',
        textTransform: 'uppercase',
        letterSpacing: 2,
        border: 'none',
        padding: 10,
        borderRadius: 25,
        color: '#fff'
    };


    return (

        <Container>

            <Row className='shadow p-4'>

                <Col lg={6}>

                    <h5 className='fw-bold '>Add Product </h5>

                    <article className='d-grid justify-content-center align-items-center h-100'>

                        <ImageUploading
                            multiple
                            value={images}
                            onChange={onChange}
                            maxNumber={maxNumber}
                            dataURLKey="data_url"
                        >
                            {({
                                imageList,
                                onImageUpload,
                                onImageRemoveAll,
                                onImageUpdate,
                                onImageRemove,
                                isDragging,
                                dragProps
                            }) => (

                                <article className="upload__image-wrapper">

                                    {
                                        setImageURL(imageList[0]?.data_url)
                                    }

                                    {
                                        imageList[0]?.data_url && <img src={imageList[0]?.data_url} alt="productImage" width="400" className='img-fluid mb-3 rounded-3' />
                                    }

                                    {
                                        !imageList[0]?.data_url &&
                                        <img style={isDragging ? { color: "red" } : null}
                                            onClick={onImageUpload}
                                            {...dragProps} src={uploadImage} width="200" className="img-fluid" alt="uploadImage"
                                        />
                                    }

                                    <span className='d-grid justify-content-center'>

                                        <button style={uploadButton} onClick={() => onImageUpdate(0)}>Update</button>

                                        {imageList[0]?.data_url && <button style={uploadButton} className='upload_button' onClick={() => onImageRemove(0)}>Remove</button>}

                                    </span>



                                </article>
                            )}
                        </ImageUploading>


                    </article>


                </Col>

                <Col lg={6}>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input placeholder='Name *'  {...register("name", { required: true })} style={inputStyle} />

                        <input placeholder='Price *' {...register("price", { required: true })} type='number' style={inputStyle} />

                        <input placeholder='Category *' {...register("category", { required: true })} style={inputStyle} />

                        <input placeholder='Origin *' {...register("origin", { required: true })} style={inputStyle} />

                        <input placeholder='Description *' {...register("description", { required: true })} className='p-5' style={inputStyle} />

                        {
                            !loading ?
                                <input type="submit" style={submitButton} />
                                :
                                <input type="button" value='Loading...' style={submitButton} />
                        }

                    </form>

                </Col>

            </Row>

        </Container>

    );
};

export default AddProduct;