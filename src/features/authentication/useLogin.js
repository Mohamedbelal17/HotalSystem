import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Login as apiLogin } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: Login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => apiLogin({ email, password }),

    onSuccess: (user) => {
      //user contain {session and user }
      queryClient.setQueryData(["user"], user.user);
      navigate("/dashboard", { replace: true });
    },

    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { Login, isLoading };
}
