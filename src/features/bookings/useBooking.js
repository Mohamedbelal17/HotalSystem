import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";
export function useBooking() {
  const { BookingId } = useParams();
  const {
    isLoading,
    error,
    data: booking,
  } = useQuery({
    queryKey: ["booking", BookingId],
    queryFn: () => getBooking(BookingId),
    retry: false,
  });

  return { isLoading, error, booking };
}
