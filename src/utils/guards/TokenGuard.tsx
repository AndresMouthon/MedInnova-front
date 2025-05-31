import { PublicRoutes } from "../../utils/models/RoutesModel";

export const TokenGuard = () => {
    localStorage.clear();
    window.location.assign(PublicRoutes.LOGIN);
}