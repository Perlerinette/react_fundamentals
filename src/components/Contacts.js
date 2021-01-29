const Contacts = (props) => {
    return(
        <div>
            <h3>{props.name}</h3>
            <p>I'm {props.age}, and I study at {props.school}, expected a graduation in  {props.graduationYear}</p>
        </div>
    );
};

export default Contacts;