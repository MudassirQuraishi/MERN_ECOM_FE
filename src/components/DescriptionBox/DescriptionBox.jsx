import classes from './DescriptionBox.module.css'
const DescriptionBox = () => {
    return (
        <div className={classes["description-box"]}>
            <div className={classes["description-box-navigator"]}>
                <div className={classes["description-box-nav-box"]}>
                    Description
                </div>
                <div className={classes["description-box-nav-box-fade"]}>
                    Reviews(122)
                </div>
            </div>
            <div className={classes["description-box-description"]}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum veritatis unde esse placeat vitae animi rem repudiandae similique error magni.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam tempora, temporibus dicta non, voluptas voluptates porro obcaecati mollitia ea magni adipisci ducimus eos eum expedita dolore. Enim distinctio quae natus dolorum culpa laborum, ad nulla. Labore quidem atque perspiciatis qui!</p>
            </div>
        </div>
    )
}
export default DescriptionBox