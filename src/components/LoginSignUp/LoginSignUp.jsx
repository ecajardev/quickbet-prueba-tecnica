import { Button, Form } from 'react-bootstrap';

const LoginSignUp = () => {
    return (
        <div className="login-container p-4">
            <div className="text-center mb-4">
                <h2>Welcome back to Quickbet Movies!</h2>
                <p className="text-muted">
                    🍿 Ready to dive into the world of unlimited entertainment? Enter your credentials and let the cinematic adventure begin!
                </p>
            </div>

            <p className="text-center mb-4">We love having you back</p>

            <Form>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Control
                        type="email"
                        placeholder="Email"
                        className="py-2"
                    />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formPassword">
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        className="py-2"
                    />
                </Form.Group>

                <Button
                    variant="warning"
                    type="submit"
                    className="w-100 py-2 mb-3"
                >
                    Continue
                </Button>
            </Form>

            <p className="text-center text-muted small">
                For any questions, reach out to support@Quickbetmovies.com
            </p>
        </div>
    );
};

export default LoginSignUp;
