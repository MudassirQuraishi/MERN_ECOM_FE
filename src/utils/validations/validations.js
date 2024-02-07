// emailValidation function
export const emailValidation = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);
    if (isValidEmail) return true;
    return false;
};

// passwordValidation function
export const passwordValidation = (password) => {
    if (password.trim().length < 8) {
        return false;
    }
    return true;
};

// userNameValidation function
export const userNameValidation = (name) => {
    if (name.trim() === "") {
        return false;
    }
    return true;
};
