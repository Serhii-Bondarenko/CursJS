class Valid2 extends Valid {

    constructor(email, password, isValid,emailError = '', passwordError = '') {
        super(email, password, isValid);

        this.emailError = emailError;
        this.passwordError = passwordError;
    }

    validate() {
        super.validate();

        if (!this.email) {
            this.isValid = false;
            this.emailError = 'email empty';
        }
        if (this.password.length < 6){
            this.passwordError = 'min length 6';
        }
    }

}