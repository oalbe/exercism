from calendar import Calendar


def helper(ordinal):
    if 'teenth' == ordinal:
        return lambda dates: next(d for d in dates if 13 <= d.day <= 19)

    ix = -1
    if ('last' != ordinal):
        ix = int(ordinal[0]) - 1

    return lambda dates: dates[ix]

def meetup_day(year, month, day_of_the_week, ordinal):
    candidates = [date
                  for date in Calendar().itermonthdates(year, month)
                  if date.month == month
                  if date.strftime('%A') == day_of_the_week]

    return helper(ordinal)(candidates)