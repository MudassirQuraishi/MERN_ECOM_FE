import { useNavigate } from "react-router-dom";
import classes from './AdminLogin.module.css'



const AdminLogin = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/admin')
    }
    return (
        <div className={classes["container-outer"]}>
            <div className={classes.container}>
                <h1>Admin Login</h1>
                <div className={classes["input-fields"]}>
                    <input type="email" placeholder="Enter your email address" />
                    <input type="password" placeholder="Enter your password" />
                    <button onClick={handleLogin}>Continue</button>
                </div>
            </div>
        </div>
    );
};
export default AdminLogin;
