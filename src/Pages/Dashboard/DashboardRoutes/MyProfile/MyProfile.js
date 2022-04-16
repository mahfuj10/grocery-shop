import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { MdOutlineModeEdit } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { userProfile } from '../../../../Redux/reducer/cartSlice';
import useFirebase from '../../../Login/Hooks/useFirebase';
import '../WriteReview/UpdateBox.css';
import { useForm } from 'react-hook-form';
import './MyProfile.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { SyncLoader } from 'react-spinners';

const MyProfile = () => {

    const dispatch = useDispatch();
    const { myProfile, myProfileLoading } = useSelector(state => state.products);
    const { user } = useFirebase();
    const { register, watch, setValue } = useForm();
    const [openEditBox, setOpenEditBox] = useState(false);
    const [loading, setLoading] = useState(false);
    const [logo, setLogo] = useState('');
    const numberRef = useRef(null);
    const [imgLoading, setImgLoading] = useState(true);
    const addressRef = useRef(null);
    const nameRef = useRef(null);

    useEffect(() => {
        dispatch(userProfile(user?.uid))
    }, [user.uid, openEditBox])


    // button style
    const editButton = {
        display: 'flex',
        justifyContent: 'center',
        border: '2px solid #2574A9',
        background: '#fff',
        color: "#2574A9",
        fontWeight: 'bold',
        padding: '5px 30px',
        borderRadius: 25,
        marginTop: 20
    };


    // hosting image
    useEffect(() => {
        const file = watch('image');
        if (file?.length) {
            let body = new FormData()
            body.set('key', '752d2bbd9a2e4d6a5910df9c191e1643')
            body.append('image', file[0])
            setImgLoading(false);
            axios({
                method: 'post',
                url: 'https://api.imgbb.com/1/upload',
                data: body
            }).then(res => {
                setLogo(res.data?.data?.url)
                setValue('image', res.data?.data?.url);
            }).finally(() => setImgLoading(true))
        }
        else {
        }
    }, [watch('image')]);

    // number function
    const setUserNumber = () => {
        setLoading(true);
        const number = numberRef.current.value;
        axios.put(`https://secret-island-26493.herokuapp.com/setusernumber?uid=${user?.uid}`, { number }).then(res => setLoading(false))
    };

    // address function
    const setUserAddress = () => {
        setLoading(true);
        const address = addressRef.current.value;
        axios.put(`https://secret-island-26493.herokuapp.com/setuseraddress?uid=${user?.uid}`, { address }).then(res => setLoading(false))
    };

    // update user name
    const updateUserName = () => {
        setLoading(true);
        const name = nameRef.current.value;
        axios.put(`https://secret-island-26493.herokuapp.com/updateusername?uid=${user?.uid}`, { name }).then(res => setLoading(false))
    };

    // handleUpdateImage
    const handleUpdateImage = () => {
        setLoading(true);
        axios.put(`https://secret-island-26493.herokuapp.com/updateuserimage?uid=${user?.uid}`, { logo }).then(() => setLoading(false));
    };

    // set loading 
    if (Object.values(myProfile).length === 0) {
        return <h6 className='text-center'><SyncLoader color='#2574A9' /></h6>
    }



    return (

        <Container className='shadow profile-page'>

            <article className='d-flex align-items-center justify-content-between px-5 py-3 ' style={{ borderBottom: '1px solid #D8DBE0', width: '100%' }}>

                <h3>My Profile</h3>

                {
                    !openEditBox ?

                        <button
                            onClick={() => setOpenEditBox(true)}
                            style={{
                                color: "#2574A9",
                                fontWeight: 'bold',
                                border: 'none',
                                background: '#fff'
                            }}
                        >
                            <MdOutlineModeEdit />
                            Edit
                        </button>

                        :

                        <h4 type='button'
                            onClick={() => setOpenEditBox(false)}
                        >
                            <AiOutlineCloseCircle />
                        </h4>

                }
            </article>

            <Row>

                <Col lg={4} className='d-flex mt-4 mb-4 justify-content-center'>

                    <article className='d-grid justify-content-center'>

                        {
                            watch("image") && openEditBox ?

                                <span>

                                    {
                                        logo ? <img src={logo} style={{
                                            height: 150,
                                            width: 150,
                                            borderRadius: '50%'
                                        }}
                                            alt="myImage"
                                        />

                                            :

                                            <img src={myProfile.image} style={{
                                                height: 150,
                                                width: 150,
                                                borderRadius: '50%'
                                            }}
                                                alt="myImage"
                                            />
                                    }
                                </span>
                                :
                                <img src={myProfile?.image} style={{
                                    height: 150,
                                    width: 150,
                                    borderRadius: '50%'
                                }} alt="myImage" />

                        }

                        {
                            !openEditBox && <button style={editButton} onClick={() => setOpenEditBox(true)}>Edit Profile</button>
                        }


                        {
                            openEditBox && <span>

                                {
                                    !imgLoading ?

                                        <button style={editButton}>Loading...</button>

                                        :

                                        <span>
                                            <input style={{
                                                border: '2px solid #2574A9',
                                                background: '#fff',
                                                color: "#2574A9",
                                                fontWeight: 'bold',
                                                borderRadius: 25,
                                                marginTop: 20,
                                                width: 200
                                            }} type="file" {...register("image")} />

                                            {
                                                logo && <button
                                                    onClick={handleUpdateImage}
                                                    style={editButton}>

                                                    {myProfile.image === logo ? 'UPDATED' : 'UPDATE'}

                                                </button>
                                            }


                                        </span>
                                }
                            </span>
                        }


                    </article>

                </Col>

                <Col lg={4} className='mt-4  update_box'>

                    {!openEditBox &&

                        <article>

                            <label>User Id</label>
                            <p className='mt-2'>{myProfile?.userId}</p>

                            <label>Full Name</label>
                            <p className='mt-2'>{myProfile?.name}</p>

                            <label>Email Address</label>
                            <p className='mt-2'>{myProfile?.email}</p>

                        </article>
                    }

                    {openEditBox && <label className='mb-2'>Full Name</label>}

                    {
                        openEditBox && <span className="form-group">
                            <input ref={nameRef} defaultValue={myProfile?.name} className="form-field" />
                            <span type="button" onClick={updateUserName}>SAVE</span>
                        </span>
                    }


                </Col>


                <Col lg={4} className='mt-4 update_box'>

                    {myProfile.number && !openEditBox &&
                        <span>
                            <label>Phone Number</label>
                            <p className='mt-2'>{myProfile?.number}</p>
                        </span>
                    }

                    {myProfile?.address && !openEditBox &&
                        <span>
                            <label>Address</label>
                            <p className='mt-2'>{myProfile.address}</p>
                        </span>
                    }

                    {
                        openEditBox &&

                        <article>

                            <label className='mb-2'>Number</label>
                            <span className="form-group">
                                <input ref={numberRef} defaultValue={myProfile?.number} type="number" className="form-field" />
                                <span type="button" onClick={setUserNumber}>SAVE</span>
                            </span>

                            <label className='mb-2'>Address</label>
                            <span className="form-group mb-3 mb-lg-0">
                                <input defaultValue={myProfile?.address} ref={addressRef} className="form-field" />
                                <span type="button" onClick={setUserAddress}>SAVE</span>
                            </span>

                        </article>
                    }

                </Col>

            </Row>

        </Container>
    );
};

export default MyProfile;