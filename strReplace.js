const line = "Hello __USERNAME___, Welcome to our platform.";

const needle = "__USERNAME__";

function replace(haystack, needle, replaceStr) {

    let isMatched = false;
    let matchedCharCount = 0;
    let needleIndex = 0;

    let matchStartedAt = -1;
    let matchEndedAt = -1;
    
    for (let hi = 0; hi < haystack.length; hi++) {
        const char = haystack[hi];

        if (matchedCharCount == needle.length) {
            matchEndedAt = hi;

            isMatched = true;
            break;
        }

        if (char == needle[needleIndex]) {
            if(needleIndex === 0) {
                matchStartedAt = hi;
            }

            needleIndex++
            matchedCharCount++;
        } else {
            matchedCharCount = 0;
            needleIndex = 0
        }
    }

    haystack = haystack.split('')

    for (let hi = matchStartedAt; hi < matchEndedAt; hi++) {
        haystack[hi] = "-"
    }

    return haystack
}

console.log(replace(line, needle, "ahmud"));

