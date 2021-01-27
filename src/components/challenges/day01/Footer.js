const Footer = () => {

    const theDate = new Date().getFullYear();

    return(
        <>
        &copy; {theDate} - Copyright: <a target="_blank" href="https://www.mdbootstrap.com"> Laurine Leung</a>

        </>
    )

};

export default Footer;