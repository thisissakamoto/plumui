import type { StoryDefault } from "@ladle/react";
import { IconButton } from "../button";
import { Card } from "../card";
import { Icon } from "../icon";
import { Calendar } from ".";

export default {
  title: "Calendar",
} satisfies StoryDefault;

export const Base = () => {
  return (
    <Calendar.Root open>
      <Calendar.Content w="256px">
        <Card.Root>
          <Calendar.ViewControl>
            <Card.Header w="full" py="8" px="16" alignItems="center" orientation="horizontal">
              <Calendar.PrevTrigger asChild>
                <IconButton visual="ghost" tone="neutral">
                  <Icon icon="lucide:chevron-left" />
                </IconButton>
              </Calendar.PrevTrigger>
              <Calendar.RangeText />
              <Calendar.NextTrigger asChild>
                <IconButton visual="ghost" tone="neutral">
                  <Icon icon="lucide:chevron-right" />
                </IconButton>
              </Calendar.NextTrigger>
            </Card.Header>
            <Card.Body w="full" pb="8">
              <Calendar.Table>
                <Calendar.TableHead>
                  <Calendar.TableRow>
                    <Calendar.Context>
                      {(calendar) => {
                        return (
                          <>
                            {calendar.weekDays.map((weekDay, id) => (
                              <Calendar.TableHeader key={id.toString()}>{weekDay.narrow}</Calendar.TableHeader>
                            ))}
                          </>
                        )
                      }}
                    </Calendar.Context>
                  </Calendar.TableRow>
                </Calendar.TableHead>
              </Calendar.Table>
            </Card.Body>
          </Calendar.ViewControl>
          <Calendar.View view="day">
            <Card.Footer py="8px" bg="bg.subtle">
              <Calendar.Context>
                {(calendar) => (
                  <>
                    <Calendar.Table>
                      <Calendar.TableBody>
                        {calendar.weeks.map((week, id) => (
                          <Calendar.TableRow key={id.toString()}>
                            {week.map((day, id) => (
                              <Calendar.TableCell key={id.toString()} value={day}>
                                <Calendar.TableCellTrigger>
                                  {day.day}
                                </Calendar.TableCellTrigger>
                              </Calendar.TableCell>
                            ))}
                          </Calendar.TableRow>
                        ))}
                      </Calendar.TableBody>
                    </Calendar.Table>
                  </>
                )}
              </Calendar.Context>
            </Card.Footer>
          </Calendar.View>
        </Card.Root>
      </Calendar.Content>
    </Calendar.Root>
  )
};
