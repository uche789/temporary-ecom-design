function Newsletter() {
    return (
        <section className="px-4 py-8 bg-gray-100">
            <div className="max-w-7xl mx-auto flex flex-col justify-center text-center">
                <h2 className="text-2xl text-green-700 font-semibold">Sign up for our newsletter today and enjoy a 10% discount!</h2>
                <p className="mt-2 text-gray-600">Simply enter your email address below to join and get the latest updates and offers.</p>
                <form className="mt-4 flex flex-wrap max-w-md mx-auto">
                    <BaseInput
                        type="email"
                        placeholder="Enter your email"
                        className="bg-white w-full md:w-auto"
                    />
                    <AppButton isSubmit className="mt-2 w-full md:mt-0 md:ml-2 md:w-auto">
                        Subscribe
                    </AppButton>
                </form>
            </div>
        </section>
    );
}
