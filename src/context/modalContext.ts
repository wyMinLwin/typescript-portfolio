import { createContext } from "react";

type ModelType = boolean;

const ModalContext = createContext<ModelType>(false);