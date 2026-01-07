import React from "react";

export type CardContextProps = {
  ids: {
    body: string;
    title: string;
    description: string;
  };
}

export const CardContext = React.createContext<CardContextProps | null>(null);

export const useCardContext = () => {
  const context = React.useContext(CardContext);
  if (!context) {
    throw new Error("useCardContext must be used within a CardContext.Provider");
  }
  return context;
};


const useCreateId = (group: string, part: string) => {
  const baseId = React.useId();
  return `${group}:${baseId}:${part}`;
}

export type UseCardProps = {
  ids?: {
    body?: string;
    title?: string;
    description?: string;
  };
};
export const useCard = (props?: UseCardProps) => {
  const { ids } = props || {};

  const bodyId = useCreateId("card", "body");
  const titleId = useCreateId("card", "title");
  const descriptionId = useCreateId("card", "description");

  return {
    ids: {
      body: ids?.body || bodyId,
      title: ids?.title || titleId,
      description: ids?.description || descriptionId,
    },
  };
}
