import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const About = (props) => {
    const barang = props.barang
    return (
        <div>
            <div className="pasokan">
                <h2>About page</h2>
                <span> Jumlah barang : </span> <span><strong>{barang}</strong></span> <br/><br/>
                <Link to="/"> Kembali</Link>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        barang: state.barang.barangInti
    }
}


export default connect(mapStateToProps, null)(About);