import React from 'react';
import { ModeToggle } from './ModeToggle';
import { DatePicker } from 'antd';

export default function Navbar(){
    return (
        <div>
            <ModeToggle/>
            <DatePicker/>
            <hr/>
        </div>
    )
}