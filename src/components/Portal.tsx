// Portal 구문 수정

import React from "react";
import { createPortal } from "react-dom";

interface Props {
  children: React.ReactNode;
  selector?: string;
}

const Portal: React.FC<Props> = ({ children, selector }) => {
  const rootElement = document.querySelector(selector || "#modal-root"); // 선택자 수정

  return <>{rootElement ? createPortal(children, rootElement) : children}</>;
};

export default Portal;
