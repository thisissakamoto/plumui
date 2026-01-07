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

const useCreateId = (group: string, part: string) => {
  const groupId = React.useId();
  return `${group}:${groupId}:${part}`;
};

export type UseInputGroupProps = Partial<UseInputGroupReturn>;
export const useInputGroup = (props?: UseInputGroupProps) => {
  const { id, ids, invalid } = props || {};

  const baseId = useCreateId("input-group", "input");
  const helperId = useCreateId("input-group", "helper");
  const labelId = useCreateId("input-group", "label");
  const messageId = useCreateId("input-group", "message");

  return {
    id: id || baseId,
    invalid: invalid || false,
    ids: {
      label: ids?.label || labelId,
      helper: ids?.helper || helperId,
      message: ids?.message || messageId,
    },
  }
}
