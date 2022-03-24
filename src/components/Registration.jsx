import React, { useState } from "react";
import Modal from "react-modal";
import { useFormik } from 'formik';
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const customStyles = {
    content: {
        position: 'relative',
        top: '55%',
        left: '50%',
        right: 'auto',
        width: '70%',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
}

function Registration(props) {
    const [startDate, setStartDate] = useState(new Date());

    function afterOpenModal(e) {
        props.onAfterOpen(e, 'After Modal Opened');
    }
    
    function onModalClose(event) {
        let data = { name: 'example', type: 'closed from child' };
        props.onCloseModal(event, data);
    }

    const formik = useFormik({
        initialValues: {
            fullname: '',
            birthdate: null,
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    return (
        <Modal
            isOpen={props.IsModalOpened}
            onAfterOpen={e => afterOpenModal(e)}
            style={customStyles}
            ariaHideApp={false}
        >
            <button 
                onClick={e => onModalClose(e)}
                style={{ position: 'absolute', top: '1.75rem', right: '1.875rem' }}
            >
                X
            </button>
            <h3 
                style={{ 
                    borderBottom: '1px solid rgba(0, 0, 0, 0.1)', 
                    margin: '0 0 4rem 0', 
                    padding: '0 0 0.5rem 0' 
                }}
            >
                Registration Form
            </h3>
            <form onSubmit={formik.handleSubmit}>
                <div class="form-row">
                    <div class="form-group col-md-5">
                        <label htmlFor="fullname">First Name</label>
                        <input
                            id="fullname"
                            name="fullname"
                            type="text"
                            class="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.fullname}
                        />
                    </div>
                    <div class="form-group col-md-5">
                        <label htmlFor="fullname">Last Name</label>
                        <input
                            id="fullname"
                            name="fullname"
                            type="text"
                            class="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.fullname}
                        />
                    </div>
                    <div class="form-group col-md-2">
                        <label htmlFor="fullname">Middle Initial</label>
                        <input
                            id="fullname"
                            name="fullname"
                            type="text"
                            class="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.fullname}
                        />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-10">
                        <label htmlFor="fullname">Address</label>
                        <input
                            id="address"
                            name="address"
                            type="text"
                            class="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.address}
                        />
                        <small id="emailHelp" class="form-text text-muted">Please enter your house number, street, barangay, municipality &amp; province.</small>
                    </div>
                    <div class="form-group col-md-2">
                        <label htmlFor="fullname">Postal Code</label>
                        <input
                            id="address"
                            name="address"
                            type="text"
                            class="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.address}
                        />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label htmlFor="fullname">Reference Number</label>
                        <input
                            id="fullname"
                            name="fullname"
                            type="text"
                            class="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.fullname}
                        />
                    </div>
                    <div class="form-group col-md-6">
                        <label htmlFor="fullname">Birthdate</label>
                        {/* <input
                            id="fullname"
                            name="fullname"
                            type="text"
                            class="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.fullname}
                        /> */}
                        <div class="form-control">
                            <DateView 
                                selected={startDate} 
                                onChange={(date) => setStartDate(date)}
                            />
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label htmlFor="fullname">Email</label>
                        <input
                            id="address"
                            name="address"
                            type="text"
                            class="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.address}
                        />
                    </div>
                    <div class="form-group col-md-6">
                        <label htmlFor="fullname">Contact Number</label>
                        <input
                            id="address"
                            name="address"
                            type="text"
                            class="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.address}
                        />
                    </div>
                </div>
                <div style={{ paddingLeft: "15px" }}>
                    <button type="button" class="btn btn-primary">Register</button>
                </div>
            </form>
        </Modal>
    )
}

export default Registration;