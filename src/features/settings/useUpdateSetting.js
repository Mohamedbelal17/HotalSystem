import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";
import toast from "react-hot-toast";

export function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { isLoading: isEditing, mutate: UpdateSetting } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("Settings is Successfully Edited");
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },
    onError: (erro) => {
      toast.error(erro.message);
    },
  });
  return { isEditing, UpdateSetting };
}
