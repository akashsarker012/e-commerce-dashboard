import React from 'react';
import Logo from "../assets/logo.png"
import { Link } from 'react-router-dom';

import { Button, message, Popconfirm } from 'antd';
const confirm = (e) => {
    localStorage.removeItem('user');
    window.location.reload();
    message.success('logout successfully');
};
const cancel = (e) => {
    console.log(e);
    message.error(' Logout cancelled');
};

const Navbar = () => {
    return (
        <div style={{ backgroundColor: "#f0f0f0", padding: "10px", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" , boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.10) 0px 3px 6px",  }}>
            <div>

                <Link to="/" >
                    <img src={Logo} alt="" />
                </Link>
            </div>


            <Popconfirm
                title="Do you want to Logout"
                description="Are you sure to delete this task?"
                onConfirm={confirm}
                onCancel={cancel}
                okText="Yes"
                cancelText="No" >

                <div style={{ width: "40px", cursor: "pointer" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>


                </div>
            </Popconfirm>
        </div>
    );
};

export default Navbar;
