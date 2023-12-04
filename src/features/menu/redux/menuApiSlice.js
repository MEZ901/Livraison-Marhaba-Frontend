import { apiSlice } from "../../../app/api/apiSlice";

export const menuApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    
    createMenu: builder.mutation({
      query: (menuData) => ({
        url: "/menu/",
        method: "POST",
        body: menuData,
      }),
    }),

    getMenuById: builder.query({
      query: (menuId) => `/menu/${menuId}`,
    }),

    updateMenu: builder.mutation({
      query: ({ menuId, menuData }) => ({
        url: `/menu/${menuId}`,
        method: "PUT",
        body: menuData,
      }),
    }),

    deleteMenu: builder.mutation({
      query: (menuId) => ({
        url: `/menu/${menuId}`,
        method: "DELETE",
      }),
    }),
    getAllMenus: builder.query({
      query: () => "/menu/",
    }),
  }),
});

export const {
  useCreateMenuMutation,
  useGetMenuByIdQuery,
  useUpdateMenuMutation,
  useDeleteMenuMutation,
  useGetAllMenusQuery,
  useUploadPhotoMutation,
} = menuApiSlice;


