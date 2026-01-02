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


const createId = (group: string, part: string) => {
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

  const bodyId = ids?.body || createId("card", "body");
  const titleId = ids?.title || createId("card", "title");
  const descriptionId = ids?.description || createId("card", "description");

  return {
    ids: {
      body: bodyId,
      title: titleId,
      description: descriptionId,
    },
  };
}
