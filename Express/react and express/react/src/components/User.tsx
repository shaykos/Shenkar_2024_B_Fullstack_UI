import React, { useState } from 'react'
import { UserCompProps } from '../types/props.type';
import CloudinaryComp from './CloudinaryComp';

export default function User({ u, updateUser }: UserCompProps) {
    const [image, setImage] = useState('');



    return (
        <div>
            {u.image ? <img src={u.image} /> : null}
            <h2>{u.full_name}</h2>
            <h3>{u.email}</h3>
            <CloudinaryComp setImage={setImage} />
            <button onClick={() => updateUser(u, image)}>Save</button>
        </div>
    )
}
