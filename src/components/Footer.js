const Footer = () => {

    const theDate = new Date().getFullYear();

    return(
        <>
        {/* eslint-disable-next-line */}
        &copy; {theDate} - Copyright: <a target="_blank" href="https://www.mdbootstrap.com"> Laurine Leung</a>

        </>
    )

};

export default Footer;