import { Icon } from "../icon";
import { Pagination } from ".";
import { ButtonGroup } from "../button";
import type {  StoryDefault } from "@ladle/react";

export default {
  title: "Pagination",
} satisfies StoryDefault;

export const Base = () => {
  return (
    <Pagination.Root asChild count={64} pageSize={8} siblingCount={1}>
      <ButtonGroup.Root visual="soft">
        <Pagination.PrevTrigger asChild>
          <ButtonGroup.Item iconOnly>
            <Icon boxSize="16" icon="ph:caret-left-bold" />
          </ButtonGroup.Item>
        </Pagination.PrevTrigger>
        <Pagination.Context>
          {(pagination) => {
            return (
              <>
                {pagination.pages.map((page, index) => {
                  if (page.type === "page") {
                    return (
                      <Pagination.Item asChild key={String(index)} {...page}>
                        <ButtonGroup.Item>
                          {page.value}
                        </ButtonGroup.Item>
                      </Pagination.Item>
                    );
                  }
                  return (
                    <Pagination.Ellipsis asChild index={index} key={String(index)}>
                      <ButtonGroup.Item>
                        <Icon boxSize="16" icon="ph:dots-three-bold" />
                      </ButtonGroup.Item>
                    </Pagination.Ellipsis>
                  );
                })}
              </>
            );
          }}
        </Pagination.Context>
        <Pagination.NextTrigger asChild>
          <ButtonGroup.Item iconOnly>
            <Icon boxSize="16" icon="ph:caret-right-bold" />
          </ButtonGroup.Item>
        </Pagination.NextTrigger>
      </ButtonGroup.Root>
    </Pagination.Root>
  );
};
