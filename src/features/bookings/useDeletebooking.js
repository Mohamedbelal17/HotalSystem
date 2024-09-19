import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking as DeletingBooking } from "../../services/apiBookings";

export function useDeletebooking() {
  const queryClient = useQueryClient();

  const { mutate: deletebooking, isLoading: isDeletebooking } = useMutation({
    mutationFn: DeletingBooking,

    onSuccess: () => {
      toast.success(`Booking is Successfully deleted`);
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: () => toast.error("There was an error while deleting booking"),
  });

  return { deletebooking, isDeletebooking };
}
