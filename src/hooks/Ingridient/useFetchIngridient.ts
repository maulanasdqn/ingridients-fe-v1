import { FetchListIngridient, IngridientType } from "@store/Ingridient/selectors";
import { useRecoilValue } from "recoil";

export default (): IngridientType => useRecoilValue(FetchListIngridient);
