import React from 'react'
import { UserType } from '../types/props.type';
import CloudinaryComp from './CloudinaryComp';

export default function User({ full_name, email, image, updateUserImage }: UserType) {
    return (
        <div>
            {image ? <img src={image} /> : null}
            <h2>{full_name}</h2>
            <h3>{email}</h3>
            <CloudinaryComp updateUserImage={updateUserImage}/>
        </div>
    )
}
