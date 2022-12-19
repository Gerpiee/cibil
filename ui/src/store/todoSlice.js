import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// apimizi ekliyoruz
export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  //axios ile apiyi get yapıyoruz
  const response = await axios.get(
    "https://hapi.fhir.org/baseR4/Patient?_format=json"
  );
  // response un datasını dönderiyoruz
  https: return response.data;
});

const todosSlice = createSlice({
  name: "patient",
  // inital state'imizi belirliyoruz
  initialState: { data: [], loading: false, error: "" },
  reducers: {},
  //Extra reduceri olayı ile yapılıyor
  extraReducers: (builder) => {
    // ilk yüklediğimiz de bekleme anı
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    // yüklendiği an
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    // yüklendikten sonraki reddedilme hastaları yükse add
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.loading = false;
      state.error = "error fetching Todos data";
    });
  },
});

export default todosSlice.reducer;

//https://hapi.fhir.org/baseR4/Patient
