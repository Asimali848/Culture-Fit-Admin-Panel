import { api } from "./core";

export const companies = api.injectEndpoints({
  endpoints: (build) => ({
    postCompany: build.mutation({
      query: (data: CompanyInfo) => ({
        url: "/companies/companies",
        method: "POST",
        body: data,
      }),
    }),
    getCompanies: build.query({
      query: () => ({
        url: "/companies",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCompaniesQuery } = companies;
