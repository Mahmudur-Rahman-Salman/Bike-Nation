import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddReviews = () => {
    const { register, handleSubmit, reset} = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://gentle-gorge-15121.herokuapp.com/reviews', data)
        .then(res => {
            if (res.data.insertedId) {
                alert('Successfully added the review.');
                reset();
           }
        })

    }

    return (
        <div className='add-service'>
            <h2 style={{ textAlign: "center", margin: "20px" }}>Give us a review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddReviews;