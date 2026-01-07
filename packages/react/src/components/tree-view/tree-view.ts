import {
  createFileTreeCollection,
  createTreeCollection,
  TreeView,
  type UseTreeViewContext,
  type UseTreeViewNodeContext,
  type UseTreeViewProps,
  type UseTreeViewReturn,
  useTreeView,
  useTreeViewContext,
  useTreeViewNodeContext,
} from "@ark-ui/react/tree-view";
import { createStyleContext } from "@plumui/styled/jsx";
import { treeViewRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export const use = useTreeView;
export const useContext = useTreeViewContext;
export const useNodeContext = useTreeViewNodeContext;

export type {
  UseTreeViewProps as UseProps,
  UseTreeViewReturn as UseReturn,
  UseTreeViewContext as UseContext,
  UseTreeViewNodeContext as UseNodeContext,
};

const { withProvider, withContext } = createStyleContext(treeViewRecipe);

export const createCollection = createTreeCollection;
export const createFileCollection = createFileTreeCollection;

export type ProviderProps = ComponentProps<typeof Provider>;
export const Provider = withProvider(TreeView.RootProvider, "root");
Provider.displayName = "TreeViewProvider";

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(TreeView.Root, "root");
Root.displayName = "TreeViewRoot";

export type TreeProps = ComponentProps<typeof Tree>;
export const Tree = withContext(TreeView.Tree, "tree");
Tree.displayName = "TreeViewTree";

export type ItemProps = ComponentProps<typeof Item>;
export const Item = withContext(TreeView.Item, "item");
Item.displayName = "TreeViewItem";

export type ItemIndicatorProps = ComponentProps<typeof ItemIndicator>;
export const ItemIndicator = withContext(TreeView.ItemIndicator, "itemIndicator");
ItemIndicator.displayName = "TreeViewItemIndicator";

export type ItemTextProps = ComponentProps<typeof ItemText>;
export const ItemText = withContext(TreeView.ItemText, "itemText");
ItemText.displayName = "TreeViewItemText";

export type BranchProps = ComponentProps<typeof Branch>;
export const Branch = withContext(TreeView.Branch, "branch");
Branch.displayName = "TreeViewBranch";

export type BranchControlProps = ComponentProps<typeof BranchControl>;
export const BranchControl = withContext(TreeView.BranchControl, "branchControl");
BranchControl.displayName = "TreeViewBranchControl";

export type BranchContentProps = ComponentProps<typeof BranchContent>;
export const BranchContent = withContext(TreeView.BranchContent, "branchContent");
BranchContent.displayName = "TreeViewBranchContent";

export type BranchIndicatorProps = ComponentProps<typeof BranchIndicator>;
export const BranchIndicator = withContext(TreeView.BranchIndicator, "branchIndicator");
BranchIndicator.displayName = "TreeViewBranchIndicator";

export type BranchTextProps = ComponentProps<typeof BranchText>;
export const BranchText = withContext(TreeView.BranchText, "branchText");
BranchText.displayName = "TreeViewBranchText";

export type BranchIndentGuideProps = ComponentProps<typeof BranchIndentGuide>;
export const BranchIndentGuide = withContext(TreeView.BranchIndentGuide, "branchIndentGuide");
BranchIndentGuide.displayName = "TreeViewBranchIndentGuide";

export type BranchTriggerProps = ComponentProps<typeof BranchTrigger>;
export const BranchTrigger = withContext(TreeView.BranchTrigger, "branchTrigger");
BranchTrigger.displayName = "TreeViewBranchTrigger";

export type LabelProps = ComponentProps<typeof Label>;
export const Label = withContext(TreeView.Label, "label");
Label.displayName = "TreeViewLabel";

export type NodeProviderProps<T> = ComponentProps<typeof NodeProvider<T>>;
export const NodeProvider = TreeView.NodeProvider;
