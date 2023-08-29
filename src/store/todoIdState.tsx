import { atom } from "recoil";

const todoIdState = atom({
  key: "todoIdState",
  default: 1,
});

export default todoIdState;
