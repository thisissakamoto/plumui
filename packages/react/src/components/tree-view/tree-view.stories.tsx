import type { Story, StoryDefault } from "@ladle/react";
import { Box } from "../box";
import { Icon } from "../icon";
import { Separator } from "../separator";
import { Stack } from "../stack";
import { TreeView } from "./";

export default {
  title: "Tree View",
} satisfies StoryDefault;

export const Base: Story<TreeView.RootProps> = () => {
	return (
		<TreeView.Root w="256px" collection={collection as any}>
			<TreeView.Tree>
				{collection.rootNode.children?.map((node: Node, index: number) => (
					<TreeViewNode key={node.id} node={node} indexPath={[index]}/>
				))}
			</TreeView.Tree>
		</TreeView.Root>
	);
};

const TreeViewNode = (props: TreeView.NodeProviderProps<Node>) => {
  const { node, indexPath } = props;

  return (
    <TreeView.NodeProvider key={node.id} node={node} indexPath={indexPath}>
      {node.children ? (
        <TreeView.Branch>
          <TreeView.BranchControl h="28" rounded="8">
            <Icon boxSize="16px" icon="material-icon-theme:folder-less" />
            <TreeView.BranchText>
              {node.name}
            </TreeView.BranchText>
            <TreeView.BranchIndicator asChild>
              <Icon icon="lucide:chevron-down" boxSize="14px" />
            </TreeView.BranchIndicator>
          </TreeView.BranchControl>
          <TreeView.BranchContent>
            <Stack>
              <TreeView.BranchIndentGuide asChild>
                <Separator orientation="vertical" />
              </TreeView.BranchIndentGuide>
              <Box flex="1" spaceY="2">
                {node.children.map((child: Node, index: number) => (
                  <TreeViewNode key={child.id} node={child} indexPath={[...indexPath, index]} />
                ))}
              </Box>
            </Stack>
          </TreeView.BranchContent>
        </TreeView.Branch>
      ) : (
        <TreeView.Item h="28" rounded="8">
          <Icon boxSize="14px" icon="material-icon-theme:citation" />
          <TreeView.ItemText flex="1" textAlign="start">
            {node.name}
          </TreeView.ItemText>
        </TreeView.Item>
      )}
    </TreeView.NodeProvider>
  );
};

type Node = {
	id: string;
	name: string;
	children?: Node[] | undefined;
};

const collection = TreeView.createCollection<Node>({
	nodeToValue: (node: Node) => node.id,
	nodeToString: (node: Node) => node.name,
	rootNode: {
		id: "ROOT",
		name: "",
		children: [
			{
				id: "node_modules",
				name: "node_modules",
				children: [
					{ id: "node_modules/zag-js", name: "zag-js.ts" },
					{ id: "node_modules/pandacss", name: "panda.ts" },
					{
						id: "node_modules/@types",
						name: "@types",
						children: [
							{ id: "node_modules/@types/react", name: "react.ts" },
							{ id: "node_modules/@types/react-dom", name: "react-dom.ts" },
						],
					},
				],
			},
			{
				id: "src",
				name: "src",
				children: [
					{ id: "src/app.tsx", name: "app.tsx" },
					{ id: "src/index.ts", name: "index.ts" },
				],
			},
			{ id: "panda.config", name: "panda.config.ts" },
			{ id: "package.json", name: "package.json" },
			{ id: "renovate.json", name: "renovate.json" },
			{ id: "readme.md", name: "README.md" },
		],
	},
});
