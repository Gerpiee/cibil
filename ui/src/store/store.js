import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";

export default configureStore({
  reducer: {
    // Slice'ı kullanacağımız biçimde kısa yazımını yazıyoruz
    todos: todoSlice,
  },
});
