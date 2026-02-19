import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useUserStore from "../stores/useUserStore";

export default function usePostLogin() {
  const navigate = useNavigate();
  const { setToken, setIsLoggedIn } = useUserStore();

  const mutationFn = async (loginData) => {
    const { username, password } = loginData;
    const { data } = await axios.post("https://fakestoreapi.com/auth/login", {
      username: username,
      password: password,
    });

    return data;
  };

  return useMutation({
    mutationFn,
    onSuccess: (response) => {
      console.log(response);
      navigate("/admin");
      localStorage.setItem("token", response.token);
      setToken(response.token);
      setIsLoggedIn(true);
    },
    onError: (error) => {
      if (error.status === 401) {
        alert("username or password is wrong!");
      }
    },
  });
}
