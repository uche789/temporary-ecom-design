function RegisterLogin({ type = "login" }) {
    const success = false;
    const isRegisterPage = type === "register";
    const isStartPage = type === "start";
    const isLoginForm = type === "login";
    const isForgotPasswordForm = type === "forgot";

    const startForm = <>
        <p className="mb-4">Enter your email to login or register.</p>
        <form>
            <BaseInput label="Email" type="email" className="mb-4" />
            <AppButton type="submit" isPrimary className="w-full mt-2">Continue</AppButton>
        </form>
    </>

    const forgotPasswordForm = <>
        <p className="mb-4">Enter your email to reset your password.</p>
        <form>
            <BaseInput label="Email" type="email" className="mb-4" />
            <AppButton type="submit" isPrimary className="w-full mt-2">Submit</AppButton>
        </form>
    </>

    const forgotPasswordSuccess = <>
        <p className="mb-4">Check your email for a link to reset your password.</p>
        <AppButton type="button" isPrimary isLink href="#" className="w-full mt-2">Back to Login</AppButton>
    </>

    const loginForm = <>
        <p className="mb-4">Welcome back! Please enter your details.</p>
        <form>
            <BaseInput label="Email" type="email" className="mb-4" />
            <BaseInput label="Password" type="password" className="mb-4" />
            <AppButton type="submit" isPrimary className="w-full mt-2">Login</AppButton>
            <AppButton type="button" isLink href="#" className="w-full mt-2">Forgot Password?</AppButton>
            <AppButton type="button" isLink href="#" className="w-full mt-2">Don't have an account? Register</AppButton>
            <AppButton type="button" className="w-full mt-2">Continue as Guest</AppButton>
        </form>
    </>

    const registerForm = <>
        <p className="mb-4">Don't have an account? Create an account with us.</p>
        <form>
            <BaseInput label="First name" type="text" className="mb-4" />
            <BaseInput label="Last name" type="text" className="mb-4" />
            <BaseInput label="Email" type="email" className="mb-4" />
            <BaseInput label="Password" type="password" className="mb-4" />
            <BaseInput label="Confirm Password" type="password" className="mb-4" />
            <AppButton type="submit" isPrimary className="w-full mt-2">Register</AppButton>
            <AppButton type="button" isLink href="#" className="w-full mt-2">Already have an account? Login</AppButton>
            <AppButton type="button" className="w-full mt-2">Continue as Guest</AppButton>
        </form>
    </>

    return <Card className="max-w-120 m-auto">
        <h1 className="text-xl font-bold mb-4">Hi there!</h1>
        {
            isRegisterPage && registerForm
        }
        {
            isLoginForm && loginForm
        }
        {
            isStartPage && startForm
        }
        {
            isForgotPasswordForm && !success && forgotPasswordForm
        }
        {
            isForgotPasswordForm && success && forgotPasswordSuccess
        }
    </Card>
}