var days = {
    'sunday': 0,
    'monday': 1,
    'tuesday': 2,
    'wednesday': 3,
    'thursday': 4,
    'friday': 5,
    'saturday': 6
};

function generateCandidates(year, month, weekDay) {
    var candidates = [];

    var monthDaysCount = new Date(year, month + 1, 0).getDate();
    for (var i = 0; i < monthDaysCount; ++i) {
        var newDate = new Date(year, month, i + 1);

        if (newDate.getDay() === days[weekDay.toLowerCase()]) {
            candidates.push(newDate);
        }
    }

  return candidates;
}

function parseCandidates(candidatesArr) {
    var limit = candidatesArr.length;
    for (var i = 0; i < limit; ++i) {
        var day = candidatesArr[i].getDate();
        
        if ((13 <= day) && (day <= 19)) {
            return candidatesArr[i];
        }
    }
    
    // FIXME: Bad design, figure out a solution.
    return false;
}

function MeetupDayException() {}

function meetupDay(year, month, weekDay, cardinalNum) {
    cardinalNum = cardinalNum.toLowerCase();
    var candidates = generateCandidates(year, month, weekDay);

    var computedDay = null;
    if ('last' === cardinalNum) {
        computedDay = candidates.pop();
    } else if ('teenth' === cardinalNum) {
        computedDay = parseCandidates(candidates);
    } else {
        // TODO: This can be optimized. Figure out how.
        var iCardinalNum = parseInt(cardinalNum.replace(/[a-z]/, ""));
        computedDay = candidates.slice(iCardinalNum - 1, iCardinalNum).pop();
    }

    if (!computedDay) {
        throw new MeetupDayException();
    }

    return computedDay;
}

module.exports = meetupDay;