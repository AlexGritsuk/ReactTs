import { useEffect, useState } from "react";
import { PortalProps } from "./portal.props";
import { createPortal } from "react-dom";

type containerOptions = {
  id: string;
  mountNode?: HTMLElement;
};

const createContainer = (options: containerOptions) => {
  if (document.getElementById(options.id)) {
    return;
  }

  const { id, mountNode = document.body } = options;

  const portalContainer = document.createElement("div");
  portalContainer.setAttribute("id", id);
  portalContainer.setAttribute("data-testid", `portalContainer-${id}`);
  mountNode.appendChild(portalContainer);
};

const PORTAL_ERROR_MSG = `There is no portal container in markup. Please add portal container with proper id attribute.`;


const Portal = ({ id, children }: PortalProps) => {
  const [container, setContainer] = useState<HTMLElement>();

  useEffect(() => {
    if (id) {
      const portalContainer: any = document.getElementById(id);
      setContainer(portalContainer);
    }
  }, [id]);

  return container ? createPortal(children, container) : null;
};

export { createContainer, PORTAL_ERROR_MSG };
export default Portal;
