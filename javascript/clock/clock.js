exports.at = at;

function at(hours, minutes) {
    minutes = typeof minutes !== 'undefined' ? minutes : 0;

    var clock = {};

    clock.toString = function() {
        var time = '';
        if (10 > hours) {
            time = '0';
        }

        time += hours.toString() + ':';

        if (10 > minutes) {
            time += '0';
        } 

        time += minutes.toString();

        return time;
    };

    clock.plus = function(minToAdd) {
        if (60 <= (minToAdd + minutes)) {
            minutes = minToAdd + minutes - 60;

            if (24 === (hours + 1)) {
                hours = 0;
            } else {
                ++hours;
            }
        } else {
            minutes += minToAdd;
        }

        return clock;
    };

    clock.minus = function(minToSubtract) {
        var subMinutes = minutes - minToSubtract;
        if (0 > subMinutes) {
            if (60 < minToSubtract) {
                minutes += 60 * parseInt(minToSubtract / 60);

                if (0 !== hours) {
                    --hours;
                }
            }

            minutes = Math.abs(minutes - minToSubtract + 60);

            if (0 > (hours - 1)) {
                hours = 23;
            } else {
                --hours;
            }
        } else {
            minutes = subMinutes;
        }

        return clock;
    };

    clock.getHours = function() {
        return hours;
    };

    clock.getMinutes = function() {
        return minutes;
    };

    clock.equals = function(otherClock) {
        if ((otherClock.getHours() === hours) && (otherClock.getMinutes() === minutes)) {
            return true;
        }

        return false;
    };

    return Object.create(clock);
}