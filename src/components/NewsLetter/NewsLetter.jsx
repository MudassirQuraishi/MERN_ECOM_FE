import classes from './NewsLetter.module.css'

const NewsLetter = () => {
    return <>
        <div className={classes.newsletter}>
            <h1>Get Exclusive Offers on Your E-mail</h1>
            <p>Subscribe to our newsletter to stay updated</p>
            <div>
                <input type="email" placeholder='Enter you mail Id' required />
                <button>Subscribe</button>
            </div>

        </div>
    </>
}
export default NewsLetter