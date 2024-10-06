
// import PropTypes from 'prop-types'
// this file has examples for Props in react
// use the below code in App.js file to execute in the future
{/*   <Student name={"Sujithra"} age={20} isStudent={true} />
      <Student name={"Hema"} age={20} isStudent={false} />
      <Student name={"Moni"} age={20} isStudent={true} />
      <Student name={"Karthick"} age={20} isStudent={false} />
      <Student name={"Nayanthara"} /> */}


{/*1. This is the starting of the notes!
    it has the basics of props!
    Props: inputs passed to a component, Immutable, Read only properties that are shared between the components*/}

function Student(props) {
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )

}

{/*PropTypes: a mechanism that ensures that the passed values is of correct type*/ }
Student.prototype = {

    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

{/*sets the default value for the props, when a user forgets to set the value, it takes the default value instead of displaying the null*/ }

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}

export default Student;