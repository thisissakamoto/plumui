import type { DatePickerFocusChangeDetails, DatePickerInputBaseProps, UseDatePickerContext, UseDatePickerProps, UseDatePickerReturn } from "@ark-ui/react/date-picker";
import { DatePicker, useDatePicker, useDatePickerContext } from "@ark-ui/react/date-picker";
import { createStyleContext } from "@plumui/styled/jsx";
import { calendarRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export const use = useDatePicker;
export const useContext = useDatePickerContext;

export type {
  UseDatePickerContext as UseContext,
  UseDatePickerProps as UseProps,
  UseDatePickerReturn as UseReturn,
  DatePickerFocusChangeDetails as FocusChangeDetails,
  DatePickerInputBaseProps as InputBaseProps,
};

const { withProvider, withContext, withRootProvider } = createStyleContext(calendarRecipe);

export type ProviderProps = ComponentProps<typeof Provider>;
export const Provider = withRootProvider(DatePicker.RootProvider);
Provider.displayName = "CalendarProvider";

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(DatePicker.Root, "root");
Root.displayName = "CalendarRoot";

export type ControlProps = ComponentProps<typeof Control>;
export const Control = withContext(DatePicker.Control, "control");
Control.displayName = "CalendarControl";

export type ContentProps = ComponentProps<typeof Content>;
export const Content = withContext(DatePicker.Content, "content");
Content.displayName = "CalendarContent";

export type ViewControlProps = ComponentProps<typeof ViewControl>;
export const ViewControl = withContext(DatePicker.ViewControl, "viewControl");
ViewControl.displayName = "CalendarViewControl";

export type PrevTriggerProps = ComponentProps<typeof PrevTrigger>;
export const PrevTrigger = withContext(DatePicker.PrevTrigger, "prevTrigger");
PrevTrigger.displayName = "CalendarPrevTrigger";

export type NextTriggerProps = ComponentProps<typeof NextTrigger>;
export const NextTrigger = withContext(DatePicker.NextTrigger, "nextTrigger");
NextTrigger.displayName = "CalendarNextTrigger";

export type ViewTriggerProps = ComponentProps<typeof ViewTrigger>;
export const ViewTrigger = withContext(DatePicker.ViewTrigger, "viewTrigger");
ViewTrigger.displayName = "CalendarViewTrigger";

export type RangeTextProps = ComponentProps<typeof RangeText>;
export const RangeText = withContext(DatePicker.RangeText, "rangeText");
RangeText.displayName = "CalendarRangeText";

export type ViewProps = ComponentProps<typeof View>;
export const View = withContext(DatePicker.View, "view");
View.displayName = "CalendarView";

export type TableProps = ComponentProps<typeof Table>;
export const Table = withContext(DatePicker.Table, "table");
Table.displayName = "CalendarTable";

export type TableHeadProps = ComponentProps<typeof TableHead>;
export const TableHead = withContext(DatePicker.TableHead, "tableHead");
TableHead.displayName = "CalendarTableHead";

export type TableBodyProps = ComponentProps<typeof TableBody>;
export const TableBody = withContext(DatePicker.TableBody, "tableBody");
TableBody.displayName = "CalendarTableBody";

export type TableRowProps = ComponentProps<typeof TableRow>;
export const TableRow = withContext(DatePicker.TableRow, "tableRow");
TableRow.displayName = "CalendarTableRow";

export type TableHeaderProps = ComponentProps<typeof TableHeader>;
export const TableHeader = withContext(DatePicker.TableHeader, "tableHeader");
TableHeader.displayName = "CalendarTableHeader";

export type TableCellProps = ComponentProps<typeof TableCell>;
export const TableCell = withContext(DatePicker.TableCell, "tableCell");
TableCell.displayName = "CalendarTableCell";

export type TableCellTriggerProps = ComponentProps<typeof TableCellTrigger>;
export const TableCellTrigger = withContext(DatePicker.TableCellTrigger, "tableCellTrigger");
TableCellTrigger.displayName = "CalendarTableCellTrigger";

export type YearSelectProps = ComponentProps<typeof YearSelect>;
export const YearSelect = withContext(DatePicker.YearSelect, "yearSelect");
YearSelect.displayName = "CalendarYearSelect";

export type MonthSelectProps = ComponentProps<typeof MonthSelect>;
export const MonthSelect = withContext(DatePicker.MonthSelect, "monthSelect");
MonthSelect.displayName = "CalendarMonthSelect";

export type ContextProps = ComponentProps<typeof Context>;
export const Context = DatePicker.Context;
