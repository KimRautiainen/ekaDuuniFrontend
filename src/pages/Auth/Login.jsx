import { useContext, useState } from 'react';
import AuthContext from '../../store/AuthContext';


const Login = () => {
    const { login } = useContext(AuthContext); // Get the login function from the AuthContext
    const [formData, setFormData] = useState({ email: "", password: "" }); // Create a state to store the form data

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value }); // Update the form data when the user types
    }
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission
        login(formData); // Call the login function
    }

    return (
        <div className="flex justify-center items-center h-screen">
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Login</h2>
            <input type="email" name="email" placeholder="Email" className="border p-2 w-full mb-2" onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" className="border p-2 w-full mb-2" onChange={handleChange} />
            <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded">Login</button>
          </form>
        </div>
      );
};

export default Login;