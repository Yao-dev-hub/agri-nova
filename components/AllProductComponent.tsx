import Link from 'next/link'
import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function AllProductComponent() {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <div className='container'>
                <div className="row p-4 " id='nav'>
                    <div className="col-lg-2 bg-info text-center d-flex justify-content-center align-items-center">
                        <Link href="/" className='text-decoration-none h4'><span className="text-success">Agri</span>Nova</Link>
                    </div>
                    <div className="col-lg-6 bg-light">
                        <form className="row  d-flex justify-content-center mt-2">
                            <div className="input-group mb-3">
                                <span className="input-group-text icon-search" id="basic-addon1"><i className="fa fa-search p-2"></i></span>
                                <input type="text" className="form-control form-style" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-4 bg-secondary d-flex align-items-center">
                        <div className="row">
                            <div className="col-lg-3">
                                <Button
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    <Avatar alt="Remy Sharp" className='fs-6' src="/static/images/avatar/1.jpg" />
                                </Button>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                                </Menu>
                            </div>
                            <div className="col-lg-3">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AllProductComponent