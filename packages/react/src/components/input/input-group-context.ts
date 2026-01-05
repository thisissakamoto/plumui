import React from 'react';

export type UseInputGroupReturn  = {
  id: string;
  ids: {
    label: string;
    message: string;
    helper: string;
  }
  invalid: boolean;
}

export const InputGroupContext = React.createContext<UseInputGroupReturn | undefined>(undefined);

export const useInputGroupContext = () => {
  const context = React.useContext(InputGroupContext);
  if (!context) {
    throw new Error("InputGroup components must be wrapped in <InputGroup.Provider /> or <InputGroup.Root/> component");
  }
  return context;
};

const createId = (group: string, part: string)=> {
  const baseId = React.useId();
  return `${group}:${baseId}:${part}`;
}

export type UseInputGroupProps = Partial<UseInputGroupReturn>;
export const useInputGroup = (props?: UseInputGroupProps) => {
  const { id, ids, invalid } = props || {};

  const baseId = id || createId("input-group", "input");
  const helperId = ids?.helper || createId("input-group", "helper");
  const labelId = ids?.label || createId("input-group", "label");
  const messageId = ids?.error || createId("input-group", "error");

  return {
    id: baseId,
    invalid: invalid || false,
    ids: {
      label: labelId,
      message: messageId,
      helper: helperId,
    },
  }
}
