import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {getServices} from '../../actions/service'
import service from '../../reducers/service'
import { Link } from 'react-router-dom'

const Services = ({ getServices, service: { services, loading }}) => {
    useEffect(() => {
        getServices();
    }, [getServices]);

    return (
        
        <div>
            <div>
            <Link to='/create-service' className="btn btn-primary my-1">
                        Create service
            </Link>
            </div>
            Services list
            {services.map(service => (<div><h1>{service.title}</h1><img src={service.image}></img></div>))}

        </div>
    )
}

Services.propTypes = {
    getServices: PropTypes.func.isRequired,
    service: PropTypes.object.isRequired

}


const mapStateToProps = state => ({
    service: state.service
});

export default connect(mapStateToProps, {getServices})(Services);