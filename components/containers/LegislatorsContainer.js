import React, {Component} from 'react';
// import Inbox from '../Inbox';
import { connect } from 'react-redux';

class LegislatorsContainer extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <Legislators addressDetails={this.props.addressDetails}/>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        addressDetails: state.addressDetails
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}



export default connect(mapStateToProps, mapDispatchToProps)(LegislatorsContainer);
