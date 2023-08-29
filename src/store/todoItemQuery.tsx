import { selector } from "recoil";
import todoIdState from "./todoIdState";
import axios from "axios";

const todoItemQuery = selector({
  key: "todoItemQuery",
  get: async ({ get }) => {
    const id = get(todoIdState);

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );

    return response.data;
  },
});

export default todoItemQuery;
