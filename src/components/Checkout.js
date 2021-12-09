import React, { Component } from 'react'
import { connect } from 'react-redux'
class Checkout extends Component{
    
    componentWillUnmount() {
     
              this.props.substractShipping()
    }
    componentDidMount() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'Product POST Request' })
        };
        fetch('https://janam.free.beeceptor.com', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ total: this.props.addedItems }));
    }

   
    render(){
        console.log("jjkw",this.props.addedItems)
        return(
            <div className="container">
                <div className="collection">
                   
                        <li className="collection-item"><b>Total: ₹{this.props.total} </b></li>
                    </div>
                    <div className="checkout">
                        <button className="waves-effect waves-light btn" onClick={this.requestOptions}>Checkout</button>
                    </div>
                 </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Checkout)
