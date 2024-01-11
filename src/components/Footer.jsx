const styles = {
    color : '#585858',
    textDecoration : "none",
    textAlign : "center"

}

const Footer = () => {
    return <div style={styles}>
        <p>
        © {new Date().getFullYear()} All Rights Reserved 
        Developed By <a style={styles} href="/owais-rafiq">Owais Rafiq</a>

        </p>
    </div>
}

export default Footer;