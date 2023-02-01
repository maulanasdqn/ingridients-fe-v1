import IngridientService from "@service/Ingridients";
import { selector } from "recoil";

export type IngridientType = {
  status: string;
  total: number;
  page: number;
  last_page: number;
  items: Array<{
    name: string;
    qty: string;
    weight: number;
    categories: number;
    created_at: string;
    updated_at: string;
  }>;
};

export const FetchListIngridient = selector({
  key: "fetch-list-ingridient",
  get: async () => await IngridientService.GetIngridient(),
});
