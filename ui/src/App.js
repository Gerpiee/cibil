import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchTodos } from "./store/todoSlice";

function App() {
  // useDispatch ile birlikte redux'u dahil ediyoruz
  const dispatch = useDispatch();
  // stateimizin değerini alıyoruz
  const todos = useSelector((state) => state.todos);
  // useEffect ile çağırıyoruz
  useEffect(() => {
    if (todos) {
      dispatch(fetchTodos(todos));
    }
  }, []);
  //consol'a yazdırıyoruz

  console.log("toodos", todos);
  return (
    <div className="App">
      {/* <button onClick={() => dispatch(fetchTodos())}>Get Ap</button> */}

      {/* Çalışan kod burda  */}

      <div>
        {todos?.data?.entry?.map((item) => (
          <div key={item.id}>
            <h1>{item.resource.birthDate}</h1>
            <h2>{item.resource.gender}</h2>
            <h3>{item.resource.resourceType}</h3>
            {item?.resource?.address?.map((adr) => {
              return <div>{adr.city}</div>;
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
{
}
export default App;
