import { useMutation } from "@tanstack/react-query";
import { signup as apisignup } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: ({ email, password, fullName }) =>
      apisignup({ email, password, fullName }),
    onSuccess: (user) => {
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address."
      );
    },
  });
  return { signup, isLoading };
}
