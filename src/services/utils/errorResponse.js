import { useDispatch } from "react-redux";
import { toast } from "react-toastify"
import { toggleSpinner } from "../../store/appConfigSlice";

export const transformErrorRes = (response) => {
    // const dispatch = useDispatch();
    if (response.data) {
       toast.error(response.data.message);
        // dispatch(toggleSpinner(false));
    }
    return response;
}