import React, {Component} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { store } from '../store';

import { tambahBarang, kurangiBarang } from '../actions/Angkutan'

const ButtonTambah = styled.button`
    background-color: green;
    padding: 10px 20px;
    margin: 15px;
`
const ButtonKurang = styled(ButtonTambah)`
    background-color: red;
    color: white;
`

class Home extends Component {
    constructor(){
        super();
        this.state = {
            barang: 0
        }
    }

    componentDidMount() {
    
     this.setState({
         barang: store.getState().barang.barangInti
     })
     store.subscribe(() => {
         console.log('hai disini ada perubahan lho');
        this.setState({
            barang: store.getState().barang.barangInti
        })
     })
    }

    render(){
        console.log(this.props);
        console.log(store.getState())
        const barang = store.getState().barang.barangInti
        return(
            <div>
                <div className="pasokan">
                    <h2>Pasokan Barang Bulanan</h2>
                    <span>Jumlah Barang :</span> <span> <strong>{barang}</strong></span> <br/>
                    <ButtonKurang onClick={this.props.kurangiBarang}> - </ButtonKurang>
                    <ButtonTambah onClick={this.props.tambahBarang}> + </ButtonTambah>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        tambahBarang: () => dispatch(tambahBarang),
        kurangiBarang: () => dispatch(kurangiBarang)

    }
}

export default connect(null, mapDispatchToProps)(Home);