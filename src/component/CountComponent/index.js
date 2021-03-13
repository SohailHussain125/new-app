import React from 'react'
import { ageUp, ageDown } from './../../store/action/index';
import { connect } from 'react-redux'

const CountComponent = (props) => {
    console.log(props)
    return (
        <div>
            {/* Hello world
            <br />
            {props.age}
            <br />

            <button onClick={() => props.ageUpAction(1)}>Up</button>
            <br />

            <button onClick={() => props.createTodo(1)}>Create Todo</button>
             */}
             {/* <object data="https://ptdc.interactivegrp.com/ticket/scp/login.php"     height="500"
            width="700"
            type="text/html">

             </object> */}
             <div style={{height:"100%"}} dangerouslySetInnerHTML={{__html: '<iframe type="text/html" width="600"  height="700"  src="https://ptdc.interactivegrp.com/ticket/scp/"></iframe>'}}></div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        ageUpAction: (payload) => dispatch({ type: 'TODO_FETCH_REQUESTED' }),
        createTodo: (payload) => dispatch({ type: 'CREATE_TODO', payload: { name: "sohail" } }),
    }
}
const mapStateToProps = (state) => {
    return {
        age: state.age
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountComponent);