import { RegisterFormData } from "./pages/Register";
// import { SignInFormData } from "./pages/SignIn";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export const register = async (formData: RegisterFormData) => {
    // const response = await fetch(`${API_BASE_URL}/api/users/register`,
    //  {
    //     method: "POST",
    //     credentials: "include",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });
    try {
      const response = await fetch(`${API_BASE_URL}/api/users/register`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:5173", // Set your frontend origin
          // Add any other headers as needed
        },
        body: JSON.stringify(formData),
      });
      const responseBody = await response.json();
      if (!response.ok) {
        throw new Error(responseBody.message);
      }
      return responseBody;

    }catch (error){
      console.log(error);

    }
  };
  export const validateToken = async () => {
    const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
      credentials: "include",
    });
  
    if (!response.ok) {
      throw new Error("Token invalid");
    }
  
    return response.json();
  };
    export default register;