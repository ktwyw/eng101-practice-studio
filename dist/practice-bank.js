/* Curated earlier course practice. No assessment source maps or raw instructor files. */
const IMPORTED_MCQS = [
  {
    "id": "mock-A-006",
    "topic": "arithmetic",
    "title": "What is the first printed line?",
    "code": "a = 17\nb = 5\nprint(a + b * 2)\nprint((a + b) * 2)\nprint(a / b, a // b, a % b)\nprint(2 ** 3 ** 2)\nprint(-a // b)",
    "options": [
      "22",
      "27",
      "44",
      "34"
    ],
    "answer": 1,
    "explanation": "Multiplication is performed before addition: 17 + (5 * 2) = 27.",
    "bank": "A",
    "week": 1,
    "program": "A02",
    "source": "Mock A · A02 · Q6",
    "note": ""
  },
  {
    "id": "mock-A-007",
    "topic": "arithmetic",
    "title": "What is the second printed line?",
    "code": "a = 17\nb = 5\nprint(a + b * 2)\nprint((a + b) * 2)\nprint(a / b, a // b, a % b)\nprint(2 ** 3 ** 2)\nprint(-a // b)",
    "options": [
      "34",
      "27",
      "22",
      "44"
    ],
    "answer": 3,
    "explanation": "The parentheses are evaluated first: (17 + 5) * 2 = 44.",
    "bank": "A",
    "week": 1,
    "program": "A02",
    "source": "Mock A · A02 · Q7",
    "note": ""
  },
  {
    "id": "mock-A-008",
    "topic": "arithmetic",
    "title": "What does print(a / b, a // b, a % b) display?",
    "code": "a = 17\nb = 5\nprint(a + b * 2)\nprint((a + b) * 2)\nprint(a / b, a // b, a % b)\nprint(2 ** 3 ** 2)\nprint(-a // b)",
    "options": [
      "3 3 2",
      "3.4 4 2",
      "3.4 3 0.4",
      "3.4 3 2"
    ],
    "answer": 3,
    "explanation": "17 / 5 is 3.4, 17 // 5 is 3, and the integer remainder is 2.",
    "bank": "A",
    "week": 1,
    "program": "A02",
    "source": "Mock A · A02 · Q8",
    "note": ""
  },
  {
    "id": "mock-A-009",
    "topic": "arithmetic",
    "title": "What does print(2 ** 3 ** 2) display?",
    "code": "a = 17\nb = 5\nprint(a + b * 2)\nprint((a + b) * 2)\nprint(a / b, a // b, a % b)\nprint(2 ** 3 ** 2)\nprint(-a // b)",
    "options": [
      "64",
      "12",
      "512",
      "256"
    ],
    "answer": 2,
    "explanation": "Exponentiation groups from the right: 2 ** (3 ** 2) = 2 ** 9 = 512.",
    "bank": "A",
    "week": 1,
    "program": "A02",
    "source": "Mock A · A02 · Q9",
    "note": ""
  },
  {
    "id": "mock-A-010",
    "topic": "arithmetic",
    "title": "What is the last printed line?",
    "code": "a = 17\nb = 5\nprint(a + b * 2)\nprint((a + b) * 2)\nprint(a / b, a // b, a % b)\nprint(2 ** 3 ** 2)\nprint(-a // b)",
    "options": [
      "-3.4",
      "-3",
      "-4",
      "3"
    ],
    "answer": 2,
    "explanation": "The expression is (-17) // 5. Its mathematical quotient is -3.4, and floor division rounds down to -4.",
    "bank": "A",
    "week": 1,
    "program": "A02",
    "source": "Mock A · A02 · Q10",
    "note": ""
  },
  {
    "id": "mock-A-016",
    "topic": "decisions",
    "title": "What is the first printed line?",
    "code": "temperature = 80\npressure = 4\nstatus = \"Normal\"\nif temperature >= 80 and pressure > 5:\n    status = \"Shutdown\"\nelif temperature >= 80 or pressure > 5:\n    status = \"Warning\"\nelse:\n    status = \"Normal\"\nprint(status)\nprint(temperature >= 80, pressure > 5)",
    "options": [
      "Normal",
      "True",
      "Warning",
      "Shutdown"
    ],
    "answer": 2,
    "explanation": "The and condition is false because pressure > 5 is false. The or condition is true because temperature >= 80 is true.",
    "bank": "A",
    "week": 2,
    "program": "A04",
    "source": "Mock A · A04 · Q16",
    "note": "The thresholds are illustrative, not real equipment-safety limits."
  },
  {
    "id": "mock-A-017",
    "topic": "decisions",
    "title": "What is the second printed line?",
    "code": "temperature = 80\npressure = 4\nstatus = \"Normal\"\nif temperature >= 80 and pressure > 5:\n    status = \"Shutdown\"\nelif temperature >= 80 or pressure > 5:\n    status = \"Warning\"\nelse:\n    status = \"Normal\"\nprint(status)\nprint(temperature >= 80, pressure > 5)",
    "options": [
      "True True",
      "True False",
      "False False",
      "False True"
    ],
    "answer": 1,
    "explanation": "80 >= 80 is true, while 4 > 5 is false.",
    "bank": "A",
    "week": 2,
    "program": "A04",
    "source": "Mock A · A04 · Q17",
    "note": "The thresholds are illustrative, not real equipment-safety limits."
  },
  {
    "id": "mock-A-018",
    "topic": "decisions",
    "title": "Change only pressure to 6. What status is printed?",
    "code": "temperature = 80\npressure = 4\nstatus = \"Normal\"\nif temperature >= 80 and pressure > 5:\n    status = \"Shutdown\"\nelif temperature >= 80 or pressure > 5:\n    status = \"Warning\"\nelse:\n    status = \"Normal\"\nprint(status)\nprint(temperature >= 80, pressure > 5)",
    "options": [
      "Shutdown",
      "Normal",
      "Warning",
      "Shutdown Warning"
    ],
    "answer": 0,
    "explanation": "Both parts of the first condition are now true, so the first branch runs and the elif branch is skipped.",
    "bank": "A",
    "week": 2,
    "program": "A04",
    "source": "Mock A · A04 · Q18",
    "note": "The thresholds are illustrative, not real equipment-safety limits."
  },
  {
    "id": "mock-A-019",
    "topic": "decisions",
    "title": "Set temperature = 79 and pressure = 5. What status is printed?",
    "code": "temperature = 80\npressure = 4\nstatus = \"Normal\"\nif temperature >= 80 and pressure > 5:\n    status = \"Shutdown\"\nelif temperature >= 80 or pressure > 5:\n    status = \"Warning\"\nelse:\n    status = \"Normal\"\nprint(status)\nprint(temperature >= 80, pressure > 5)",
    "options": [
      "Warning",
      "Shutdown",
      "Normal",
      "False"
    ],
    "answer": 2,
    "explanation": "79 >= 80 is false and 5 > 5 is also false; the else branch assigns Normal.",
    "bank": "A",
    "week": 2,
    "program": "A04",
    "source": "Mock A · A04 · Q19",
    "note": "The thresholds are illustrative, not real equipment-safety limits."
  },
  {
    "id": "mock-A-020",
    "topic": "decisions",
    "title": "Set pressure = 6 and replace elif with a second if, keeping the indentation and the final else unchanged. What status is printed?",
    "code": "temperature = 80\npressure = 4\nstatus = \"Normal\"\nif temperature >= 80 and pressure > 5:\n    status = \"Shutdown\"\nelif temperature >= 80 or pressure > 5:\n    status = \"Warning\"\nelse:\n    status = \"Normal\"\nprint(status)\nprint(temperature >= 80, pressure > 5)",
    "options": [
      "Warning",
      "Shutdown Warning",
      "Shutdown",
      "Normal"
    ],
    "answer": 0,
    "explanation": "The first if assigns Shutdown. The independent second if is also true and overwrites it with Warning. Its else is skipped.",
    "bank": "A",
    "week": 2,
    "program": "A04",
    "source": "Mock A · A04 · Q20",
    "note": "The thresholds are illustrative, not real equipment-safety limits."
  },
  {
    "id": "mock-A-026",
    "topic": "while",
    "title": "What is the final value of total?",
    "code": "digits = \"314052\"\nindex = 0\ntotal = 0\nwhile index < len(digits):\n    digit = int(digits[index])\n    index += 1\n    if digit == 0:\n        break\n    total += digit\nprint(total, index)\nprint(digits[index:])",
    "options": [
      "8",
      "15",
      "314",
      "3"
    ],
    "answer": 0,
    "explanation": "Only 3, 1 and 4 are added before the zero stops the loop: 3 + 1 + 4 = 8.",
    "bank": "A",
    "week": 2,
    "program": "A06",
    "source": "Mock A · A06 · Q26",
    "note": ""
  },
  {
    "id": "mock-A-027",
    "topic": "while",
    "title": "What is the final value of index?",
    "code": "digits = \"314052\"\nindex = 0\ntotal = 0\nwhile index < len(digits):\n    digit = int(digits[index])\n    index += 1\n    if digit == 0:\n        break\n    total += digit\nprint(total, index)\nprint(digits[index:])",
    "options": [
      "5",
      "3",
      "6",
      "4"
    ],
    "answer": 3,
    "explanation": "The zero is at index 3, but index is incremented to 4 before the break.",
    "bank": "A",
    "week": 2,
    "program": "A06",
    "source": "Mock A · A06 · Q27",
    "note": ""
  },
  {
    "id": "mock-A-028",
    "topic": "while",
    "title": "What is the second printed line?",
    "code": "digits = \"314052\"\nindex = 0\ntotal = 0\nwhile index < len(digits):\n    digit = int(digits[index])\n    index += 1\n    if digit == 0:\n        break\n    total += digit\nprint(total, index)\nprint(digits[index:])",
    "options": [
      "52",
      "2",
      "052",
      "314"
    ],
    "answer": 0,
    "explanation": "digits[4:] returns the unread suffix, \"52\".",
    "bank": "A",
    "week": 2,
    "program": "A06",
    "source": "Mock A · A06 · Q28",
    "note": ""
  },
  {
    "id": "mock-A-029",
    "topic": "while",
    "title": "How many times is the body of the while loop entered?",
    "code": "digits = \"314052\"\nindex = 0\ntotal = 0\nwhile index < len(digits):\n    digit = int(digits[index])\n    index += 1\n    if digit == 0:\n        break\n    total += digit\nprint(total, index)\nprint(digits[index:])",
    "options": [
      "6",
      "3",
      "5",
      "4"
    ],
    "answer": 3,
    "explanation": "The body is entered for the characters 3, 1, 4 and 0. Entering on zero still counts as an iteration.",
    "bank": "A",
    "week": 2,
    "program": "A06",
    "source": "Mock A · A06 · Q29",
    "note": ""
  },
  {
    "id": "mock-A-030",
    "topic": "while",
    "title": "Move only total += digit outside the loop, with no indentation, immediately before the first print statement. What is the first printed line?",
    "code": "digits = \"314052\"\nindex = 0\ntotal = 0\nwhile index < len(digits):\n    digit = int(digits[index])\n    index += 1\n    if digit == 0:\n        break\n    total += digit\nprint(total, index)\nprint(digits[index:])",
    "options": [
      "8 4",
      "0 4",
      "15 6",
      "0 3"
    ],
    "answer": 1,
    "explanation": "No digits are added inside the loop. After break, digit is 0, so the single addition leaves total at 0; index is 4.",
    "bank": "A",
    "week": 2,
    "program": "A06",
    "source": "Mock A · A06 · Q30",
    "note": ""
  },
  {
    "id": "mock-A-031",
    "topic": "strings",
    "title": "What is the value of code after its assignment?",
    "code": "raw = \"  pump-A7  \"\ncode = raw.strip().lower()\npart = code[:4]\ntail = code[-2:]\nchanged = code.replace(\"pump\", \"valve\")\nprint(code)\nprint(part, tail)\nprint(changed)\nprint(code[::2])",
    "options": [
      "\"  pump-a7  \"",
      "\"valve-a7\"",
      "\"pump-a7\"",
      "\"pump-A7\""
    ],
    "answer": 2,
    "explanation": "strip removes the outside spaces, and lower converts A to a.",
    "bank": "A",
    "week": 3,
    "program": "A07",
    "source": "Mock A · A07 · Q31",
    "note": ""
  },
  {
    "id": "mock-A-032",
    "topic": "strings",
    "title": "What does print(part, tail) display?",
    "code": "raw = \"  pump-A7  \"\ncode = raw.strip().lower()\npart = code[:4]\ntail = code[-2:]\nchanged = code.replace(\"pump\", \"valve\")\nprint(code)\nprint(part, tail)\nprint(changed)\nprint(code[::2])",
    "options": [
      "pump a7",
      "pump 7",
      "pum a7",
      "pump- A7"
    ],
    "answer": 0,
    "explanation": "code[:4] selects indices 0 through 3, and code[-2:] selects the last two characters.",
    "bank": "A",
    "week": 3,
    "program": "A07",
    "source": "Mock A · A07 · Q32",
    "note": ""
  },
  {
    "id": "mock-A-033",
    "topic": "strings",
    "title": "What does print(changed) display?",
    "code": "raw = \"  pump-A7  \"\ncode = raw.strip().lower()\npart = code[:4]\ntail = code[-2:]\nchanged = code.replace(\"pump\", \"valve\")\nprint(code)\nprint(part, tail)\nprint(changed)\nprint(code[::2])",
    "options": [
      "pump-valve-a7",
      "pump-a7",
      "valve-a7",
      "valve-A7"
    ],
    "answer": 2,
    "explanation": "replace returns a string in which \"pump\" has been replaced by \"valve\"; code itself remains \"pump-a7\".",
    "bank": "A",
    "week": 3,
    "program": "A07",
    "source": "Mock A · A07 · Q33",
    "note": ""
  },
  {
    "id": "mock-A-034",
    "topic": "strings",
    "title": "What is the last printed line?",
    "code": "raw = \"  pump-A7  \"\ncode = raw.strip().lower()\npart = code[:4]\ntail = code[-2:]\nchanged = code.replace(\"pump\", \"valve\")\nprint(code)\nprint(part, tail)\nprint(changed)\nprint(code[::2])",
    "options": [
      "pm-7",
      "pump",
      "pma",
      "up-a"
    ],
    "answer": 0,
    "explanation": "The selected indices are 0, 2, 4 and 6, giving p, m, - and 7.",
    "bank": "A",
    "week": 3,
    "program": "A07",
    "source": "Mock A · A07 · Q34",
    "note": ""
  },
  {
    "id": "mock-A-035",
    "topic": "strings",
    "title": "Insert code[0] = \"P\" immediately before the first print statement. What happens?",
    "code": "raw = \"  pump-A7  \"\ncode = raw.strip().lower()\npart = code[:4]\ntail = code[-2:]\nchanged = code.replace(\"pump\", \"valve\")\nprint(code)\nprint(part, tail)\nprint(changed)\nprint(code[::2])",
    "options": [
      "The first line becomes P.",
      "An IndexError occurs because index 0 is outside the string.",
      "A TypeError occurs because a string cannot be changed by item assignment.",
      "The first line becomes Pump-a7."
    ],
    "answer": 2,
    "explanation": "Index 0 exists, but strings are immutable. A new string could be constructed instead of assigning to code[0].",
    "bank": "A",
    "week": 3,
    "program": "A07",
    "source": "Mock A · A07 · Q35",
    "note": ""
  },
  {
    "id": "mock-A-036",
    "topic": "while",
    "title": "What is the final value of guess for the original program?",
    "code": "target = 50\nguess = 0\nchecks = 0\nwhile guess * guess < target:\n    guess += 1\n    checks += 1\nif guess * guess == target:\n    print(\"Exact\", guess)\nelse:\n    print(\"Not exact\", guess)\nprint(checks)",
    "options": [
      "7",
      "8",
      "50",
      "25"
    ],
    "answer": 1,
    "explanation": "7 squared is 49, which is below 50, so the loop increments once more to 8.",
    "bank": "A",
    "week": 3,
    "program": "A08",
    "source": "Mock A · A08 · Q36",
    "note": "Assume target is a nonnegative integer."
  },
  {
    "id": "mock-A-037",
    "topic": "while",
    "title": "What is the first printed line for the original program?",
    "code": "target = 50\nguess = 0\nchecks = 0\nwhile guess * guess < target:\n    guess += 1\n    checks += 1\nif guess * guess == target:\n    print(\"Exact\", guess)\nelse:\n    print(\"Not exact\", guess)\nprint(checks)",
    "options": [
      "Not exact 8",
      "Not exact 7",
      "Exact 7",
      "Exact 8"
    ],
    "answer": 0,
    "explanation": "The loop ends at 8, but 8 squared is 64 rather than 50, so the else branch runs.",
    "bank": "A",
    "week": 3,
    "program": "A08",
    "source": "Mock A · A08 · Q37",
    "note": "Assume target is a nonnegative integer."
  },
  {
    "id": "mock-A-038",
    "topic": "while",
    "title": "Change only target to 0. What are the two printed lines?",
    "code": "target = 50\nguess = 0\nchecks = 0\nwhile guess * guess < target:\n    guess += 1\n    checks += 1\nif guess * guess == target:\n    print(\"Exact\", guess)\nelse:\n    print(\"Not exact\", guess)\nprint(checks)",
    "options": [
      "Not exact 1\n1",
      "Not exact 0\n0",
      "Exact 1\n1",
      "Exact 0\n0"
    ],
    "answer": 3,
    "explanation": "The while condition is false immediately. The initial guess 0 satisfies the exact-square test, and checks remains 0.",
    "bank": "A",
    "week": 3,
    "program": "A08",
    "source": "Mock A · A08 · Q38",
    "note": "Assume target is a nonnegative integer."
  },
  {
    "id": "mock-A-039",
    "topic": "while",
    "title": "Change only target to 49. What value of checks is printed?",
    "code": "target = 50\nguess = 0\nchecks = 0\nwhile guess * guess < target:\n    guess += 1\n    checks += 1\nif guess * guess == target:\n    print(\"Exact\", guess)\nelse:\n    print(\"Not exact\", guess)\nprint(checks)",
    "options": [
      "8",
      "6",
      "49",
      "7"
    ],
    "answer": 3,
    "explanation": "The program increments guess from 0 to 7. At 7 squared = 49, the strict less-than condition becomes false.",
    "bank": "A",
    "week": 3,
    "program": "A08",
    "source": "Mock A · A08 · Q39",
    "note": "Assume target is a nonnegative integer."
  },
  {
    "id": "mock-A-040",
    "topic": "while",
    "title": "Set target = 49 and change the while comparison from < to <=. What is the first printed line?",
    "code": "target = 50\nguess = 0\nchecks = 0\nwhile guess * guess < target:\n    guess += 1\n    checks += 1\nif guess * guess == target:\n    print(\"Exact\", guess)\nelse:\n    print(\"Not exact\", guess)\nprint(checks)",
    "options": [
      "Not exact 7",
      "Exact 8",
      "Not exact 8",
      "Exact 7"
    ],
    "answer": 2,
    "explanation": "With <=, the loop also runs when guess is 7 and overshoots to 8. The later equality check then fails.",
    "bank": "A",
    "week": 3,
    "program": "A08",
    "source": "Mock A · A08 · Q40",
    "note": "Assume target is a nonnegative integer."
  },
  {
    "id": "mock-A-056",
    "topic": "functions",
    "title": "What does within_limit(10, 10, 20) return?",
    "code": "def within_limit(value, lower, upper):\n    return lower <= value <= upper\n\ndef classify(value):\n    if within_limit(value, 10, 20):\n        return \"Accept\"\n    return \"Reject\"\n\naccepted = 0\nfor reading in range(8, 25, 4):\n    if classify(reading) == \"Accept\":\n        accepted += 1\nprint(accepted)\nprint(classify(20), classify(21))",
    "options": [
      "True",
      "10",
      "\"Accept\"",
      "False"
    ],
    "answer": 0,
    "explanation": "Both comparisons are true: 10 <= 10 and 10 <= 20. The function returns a Boolean, not a label.",
    "bank": "A",
    "week": 4,
    "program": "A12",
    "source": "Mock A · A12 · Q56",
    "note": ""
  },
  {
    "id": "mock-A-057",
    "topic": "functions",
    "title": "What is the final value of accepted?",
    "code": "def within_limit(value, lower, upper):\n    return lower <= value <= upper\n\ndef classify(value):\n    if within_limit(value, 10, 20):\n        return \"Accept\"\n    return \"Reject\"\n\naccepted = 0\nfor reading in range(8, 25, 4):\n    if classify(reading) == \"Accept\":\n        accepted += 1\nprint(accepted)\nprint(classify(20), classify(21))",
    "options": [
      "5",
      "4",
      "2",
      "3"
    ],
    "answer": 3,
    "explanation": "The loop reads 8, 12, 16, 20 and 24. The accepted readings are 12, 16 and 20.",
    "bank": "A",
    "week": 4,
    "program": "A12",
    "source": "Mock A · A12 · Q57",
    "note": ""
  },
  {
    "id": "mock-A-058",
    "topic": "functions",
    "title": "What is the last printed line?",
    "code": "def within_limit(value, lower, upper):\n    return lower <= value <= upper\n\ndef classify(value):\n    if within_limit(value, 10, 20):\n        return \"Accept\"\n    return \"Reject\"\n\naccepted = 0\nfor reading in range(8, 25, 4):\n    if classify(reading) == \"Accept\":\n        accepted += 1\nprint(accepted)\nprint(classify(20), classify(21))",
    "options": [
      "Reject Reject",
      "Accept Reject",
      "Accept Accept",
      "True False"
    ],
    "answer": 1,
    "explanation": "20 is on the accepted upper boundary; 21 is outside it.",
    "bank": "A",
    "week": 4,
    "program": "A12",
    "source": "Mock A · A12 · Q58",
    "note": ""
  },
  {
    "id": "mock-A-059",
    "topic": "functions",
    "title": "Change only the helper comparison to lower < value < upper. What is the first printed line?",
    "code": "def within_limit(value, lower, upper):\n    return lower <= value <= upper\n\ndef classify(value):\n    if within_limit(value, 10, 20):\n        return \"Accept\"\n    return \"Reject\"\n\naccepted = 0\nfor reading in range(8, 25, 4):\n    if classify(reading) == \"Accept\":\n        accepted += 1\nprint(accepted)\nprint(classify(20), classify(21))",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "answer": 2,
    "explanation": "With strict bounds, 20 is excluded. Only 12 and 16 are accepted.",
    "bank": "A",
    "week": 4,
    "program": "A12",
    "source": "Mock A · A12 · Q59",
    "note": ""
  },
  {
    "id": "mock-A-060",
    "topic": "functions",
    "title": "Replace return lower <= value <= upper with only lower <= value <= upper. What are the two final printed lines?",
    "code": "def within_limit(value, lower, upper):\n    return lower <= value <= upper\n\ndef classify(value):\n    if within_limit(value, 10, 20):\n        return \"Accept\"\n    return \"Reject\"\n\naccepted = 0\nfor reading in range(8, 25, 4):\n    if classify(reading) == \"Accept\":\n        accepted += 1\nprint(accepted)\nprint(classify(20), classify(21))",
    "options": [
      "3\nAccept Reject",
      "5\nAccept Accept",
      "0\nReject Reject",
      "0\nNone None"
    ],
    "answer": 2,
    "explanation": "The comparison is evaluated but not returned. within_limit returns None, which is false in the if test, so classify always returns Reject.",
    "bank": "A",
    "week": 4,
    "program": "A12",
    "source": "Mock A · A12 · Q60",
    "note": ""
  },
  {
    "id": "mock-A-061",
    "topic": "lists",
    "title": "What is the first printed line?",
    "code": "record = (\"Pump A\", 4, 12.5)\nname, units, rating = record\nsingle = (units,)\nextended = record + (True,)\nprint(name)\nprint(record[-1])\nprint(record[1:])\nprint(len(single), len(extended))",
    "options": [
      "Pump A",
      "name",
      "4",
      "12.5"
    ],
    "answer": 0,
    "explanation": "Unpacking assigns the first tuple element to name.",
    "bank": "A",
    "week": 5,
    "program": "A13",
    "source": "Mock A · A13 · Q61",
    "note": ""
  },
  {
    "id": "mock-A-062",
    "topic": "lists",
    "title": "What does print(record[-1]) display?",
    "code": "record = (\"Pump A\", 4, 12.5)\nname, units, rating = record\nsingle = (units,)\nextended = record + (True,)\nprint(name)\nprint(record[-1])\nprint(record[1:])\nprint(len(single), len(extended))",
    "options": [
      "4",
      "12.5",
      "Pump A",
      "True"
    ],
    "answer": 1,
    "explanation": "The index -1 selects the final element of record, not of extended.",
    "bank": "A",
    "week": 5,
    "program": "A13",
    "source": "Mock A · A13 · Q62",
    "note": ""
  },
  {
    "id": "mock-A-063",
    "topic": "lists",
    "title": "What does print(record[1:]) display?",
    "code": "record = (\"Pump A\", 4, 12.5)\nname, units, rating = record\nsingle = (units,)\nextended = record + (True,)\nprint(name)\nprint(record[-1])\nprint(record[1:])\nprint(len(single), len(extended))",
    "options": [
      "(4, 12.5)",
      "(\"Pump A\", 4)",
      "(12.5,)",
      "[4, 12.5]"
    ],
    "answer": 0,
    "explanation": "Slicing starts at index 1 and continues to the end. A tuple slice is also a tuple.",
    "bank": "A",
    "week": 5,
    "program": "A13",
    "source": "Mock A · A13 · Q63",
    "note": ""
  },
  {
    "id": "mock-A-064",
    "topic": "lists",
    "title": "What is the last printed line?",
    "code": "record = (\"Pump A\", 4, 12.5)\nname, units, rating = record\nsingle = (units,)\nextended = record + (True,)\nprint(name)\nprint(record[-1])\nprint(record[1:])\nprint(len(single), len(extended))",
    "options": [
      "0 4",
      "1 4",
      "1 3",
      "4 4"
    ],
    "answer": 1,
    "explanation": "single has one element because of its comma. extended adds one element to the three-element record.",
    "bank": "A",
    "week": 5,
    "program": "A13",
    "source": "Mock A · A13 · Q64",
    "note": ""
  },
  {
    "id": "mock-A-065",
    "topic": "lists",
    "title": "Which single statement, appended to the program, changes units to 5 without modifying record or raising an exception?",
    "code": "record = (\"Pump A\", 4, 12.5)\nname, units, rating = record\nsingle = (units,)\nextended = record + (True,)\nprint(name)\nprint(record[-1])\nprint(record[1:])\nprint(len(single), len(extended))",
    "options": [
      "units = 5",
      "record.append(5)",
      "record[1:2] = (5,)",
      "record[1] = 5"
    ],
    "answer": 0,
    "explanation": "Reassigning the separate name units is valid. A tuple does not allow item or slice assignment and has no append method.",
    "bank": "A",
    "week": 5,
    "program": "A13",
    "source": "Mock A · A13 · Q65",
    "note": ""
  },
  {
    "id": "mock-A-071",
    "topic": "lists",
    "title": "What does print(original) display?",
    "code": "original = [2, 4, 6]\nalias = original\ncopied = original[:]\nalias[0] = 9\ncopied.append(8)\nprint(original)\nprint(copied)\nprint(alias is original)\nprint(copied == original)",
    "options": [
      "[9, 4, 6]",
      "[2, 4, 6, 8]",
      "[9, 4, 6, 8]",
      "[2, 4, 6]"
    ],
    "answer": 0,
    "explanation": "alias and original refer to the same list, so alias[0] = 9 changes the list seen through original.",
    "bank": "A",
    "week": 5,
    "program": "A15",
    "source": "Mock A · A15 · Q71",
    "note": ""
  },
  {
    "id": "mock-A-072",
    "topic": "lists",
    "title": "What does print(copied) display?",
    "code": "original = [2, 4, 6]\nalias = original\ncopied = original[:]\nalias[0] = 9\ncopied.append(8)\nprint(original)\nprint(copied)\nprint(alias is original)\nprint(copied == original)",
    "options": [
      "[9, 4, 6]",
      "[2, 4, 6, 8]",
      "[9, 4, 6, 8]",
      "[2, 4, 6]"
    ],
    "answer": 1,
    "explanation": "The slice copy was made before the replacement through alias. Appending to copied does not change original.",
    "bank": "A",
    "week": 5,
    "program": "A15",
    "source": "Mock A · A15 · Q72",
    "note": ""
  },
  {
    "id": "mock-A-073",
    "topic": "lists",
    "title": "What are the two final printed lines?",
    "code": "original = [2, 4, 6]\nalias = original\ncopied = original[:]\nalias[0] = 9\ncopied.append(8)\nprint(original)\nprint(copied)\nprint(alias is original)\nprint(copied == original)",
    "options": [
      "False\nTrue",
      "False\nFalse",
      "True\nTrue",
      "True\nFalse"
    ],
    "answer": 3,
    "explanation": "alias is original tests object identity and is true. copied == original tests contents and is false.",
    "bank": "A",
    "week": 5,
    "program": "A15",
    "source": "Mock A · A15 · Q73",
    "note": ""
  },
  {
    "id": "mock-A-074",
    "topic": "lists",
    "title": "Append original.append(10) after the original program. What are the resulting lengths of original and copied, respectively?",
    "code": "original = [2, 4, 6]\nalias = original\ncopied = original[:]\nalias[0] = 9\ncopied.append(8)\nprint(original)\nprint(copied)\nprint(alias is original)\nprint(copied == original)",
    "options": [
      "3 and 4",
      "4 and 5",
      "4 and 4",
      "4 and 3"
    ],
    "answer": 2,
    "explanation": "Appending to original increases its length from 3 to 4. The separate copied list stays at length 4.",
    "bank": "A",
    "week": 5,
    "program": "A15",
    "source": "Mock A · A15 · Q74",
    "note": ""
  },
  {
    "id": "mock-A-075",
    "topic": "lists",
    "title": "Change only copied = original[:] to copied = original. What are the two final printed lines?",
    "code": "original = [2, 4, 6]\nalias = original\ncopied = original[:]\nalias[0] = 9\ncopied.append(8)\nprint(original)\nprint(copied)\nprint(alias is original)\nprint(copied == original)",
    "options": [
      "True\nTrue",
      "False\nFalse",
      "False\nTrue",
      "True\nFalse"
    ],
    "answer": 0,
    "explanation": "All three names now refer to the same list. Both modifications affect that shared list, and both identity and equality tests are true.",
    "bank": "A",
    "week": 5,
    "program": "A15",
    "source": "Mock A · A15 · Q75",
    "note": ""
  },
  {
    "id": "mock-A-076",
    "topic": "recursion",
    "title": "What is the first printed line?",
    "code": "def factorial_recursive(n):\n    if n == 0:\n        return 1\n    return n * factorial_recursive(n - 1)\n\ndef factorial_iterative(n):\n    result = 1\n    for k in range(1, n + 1):\n        result *= k\n    return result\n\nprint(factorial_recursive(4))\nprint(factorial_iterative(4))\nprint(factorial_recursive(0), factorial_iterative(0))",
    "options": [
      "4",
      "24",
      "10",
      "12"
    ],
    "answer": 1,
    "explanation": "factorial_recursive(4) returns 4 * 3 * 2 * 1 * 1 = 24.",
    "bank": "A",
    "week": 6,
    "program": "A16",
    "source": "Mock A · A16 · Q76",
    "note": "Assume small nonnegative integer inputs unless a question says otherwise."
  },
  {
    "id": "mock-A-077",
    "topic": "recursion",
    "title": "What is the last printed line?",
    "code": "def factorial_recursive(n):\n    if n == 0:\n        return 1\n    return n * factorial_recursive(n - 1)\n\ndef factorial_iterative(n):\n    result = 1\n    for k in range(1, n + 1):\n        result *= k\n    return result\n\nprint(factorial_recursive(4))\nprint(factorial_iterative(4))\nprint(factorial_recursive(0), factorial_iterative(0))",
    "options": [
      "1 1",
      "1 0",
      "0 0",
      "0 1"
    ],
    "answer": 0,
    "explanation": "The recursive base case returns 1. The iterative range is empty for n = 0, leaving result at its initial value 1.",
    "bank": "A",
    "week": 6,
    "program": "A16",
    "source": "Mock A · A16 · Q77",
    "note": "Assume small nonnegative integer inputs unless a question says otherwise."
  },
  {
    "id": "mock-A-078",
    "topic": "recursion",
    "title": "Considering only one evaluation of factorial_recursive(4), how many times is that function called, including the initial and base-case calls?",
    "code": "def factorial_recursive(n):\n    if n == 0:\n        return 1\n    return n * factorial_recursive(n - 1)\n\ndef factorial_iterative(n):\n    result = 1\n    for k in range(1, n + 1):\n        result *= k\n    return result\n\nprint(factorial_recursive(4))\nprint(factorial_iterative(4))\nprint(factorial_recursive(0), factorial_iterative(0))",
    "options": [
      "3",
      "6",
      "4",
      "5"
    ],
    "answer": 3,
    "explanation": "The arguments are 4, 3, 2, 1 and 0: five invocations in total.",
    "bank": "A",
    "week": 6,
    "program": "A16",
    "source": "Mock A · A16 · Q78",
    "note": "Assume small nonnegative integer inputs unless a question says otherwise."
  },
  {
    "id": "mock-A-079",
    "topic": "recursion",
    "title": "Which statement correctly compares the two functions for the inputs shown?",
    "code": "def factorial_recursive(n):\n    if n == 0:\n        return 1\n    return n * factorial_recursive(n - 1)\n\ndef factorial_iterative(n):\n    result = 1\n    for k in range(1, n + 1):\n        result *= k\n    return result\n\nprint(factorial_recursive(4))\nprint(factorial_iterative(4))\nprint(factorial_recursive(0), factorial_iterative(0))",
    "options": [
      "The iterative function changes the recursive function's local variables.",
      "Only the recursive function can calculate the result for 0.",
      "They return the same results; one calls itself and the other uses a loop.",
      "They must return different results because their control structures differ."
    ],
    "answer": 2,
    "explanation": "Both functions return 24 for 4 and 1 for 0. Their implementations differ, not the intended mathematical result.",
    "bank": "A",
    "week": 6,
    "program": "A16",
    "source": "Mock A · A16 · Q79",
    "note": "Assume small nonnegative integer inputs unless a question says otherwise."
  },
  {
    "id": "mock-A-080",
    "topic": "recursion",
    "title": "Change only the iterative range to range(1, n). What are the first two printed lines?",
    "code": "def factorial_recursive(n):\n    if n == 0:\n        return 1\n    return n * factorial_recursive(n - 1)\n\ndef factorial_iterative(n):\n    result = 1\n    for k in range(1, n + 1):\n        result *= k\n    return result\n\nprint(factorial_recursive(4))\nprint(factorial_iterative(4))\nprint(factorial_recursive(0), factorial_iterative(0))",
    "options": [
      "24\n6",
      "24\n24",
      "6\n6",
      "24\n0"
    ],
    "answer": 0,
    "explanation": "The recursive function is unchanged. The modified loop multiplies only 1, 2 and 3 for n = 4, giving 6.",
    "bank": "A",
    "week": 6,
    "program": "A16",
    "source": "Mock A · A16 · Q80",
    "note": "Assume small nonnegative integer inputs unless a question says otherwise."
  },
  {
    "id": "mock-A-081",
    "topic": "recursion",
    "title": "What is the first printed line?",
    "code": "def fibonacci(n):\n    if n == 0:\n        return 0\n    if n == 1:\n        return 1\n    return fibonacci(n - 1) + fibonacci(n - 2)\n\nprint(fibonacci(5))\nprint(fibonacci(0), fibonacci(1))",
    "options": [
      "10",
      "3",
      "8",
      "5"
    ],
    "answer": 3,
    "explanation": "Starting from F(0) = 0 and F(1) = 1 gives F(2) = 1, F(3) = 2, F(4) = 3 and F(5) = 5.",
    "bank": "A",
    "week": 6,
    "program": "A17",
    "source": "Mock A · A17 · Q81",
    "note": "Assume small nonnegative integer inputs unless a question says otherwise."
  },
  {
    "id": "mock-A-082",
    "topic": "recursion",
    "title": "What is the last printed line?",
    "code": "def fibonacci(n):\n    if n == 0:\n        return 0\n    if n == 1:\n        return 1\n    return fibonacci(n - 1) + fibonacci(n - 2)\n\nprint(fibonacci(5))\nprint(fibonacci(0), fibonacci(1))",
    "options": [
      "0 0",
      "1 1",
      "0 1",
      "1 0"
    ],
    "answer": 2,
    "explanation": "The two explicit base cases return 0 for n = 0 and 1 for n = 1.",
    "bank": "A",
    "week": 6,
    "program": "A17",
    "source": "Mock A · A17 · Q82",
    "note": "Assume small nonnegative integer inputs unless a question says otherwise."
  },
  {
    "id": "mock-A-083",
    "topic": "recursion",
    "title": "Which two calls are made directly by the return expression in fibonacci(3)?",
    "code": "def fibonacci(n):\n    if n == 0:\n        return 0\n    if n == 1:\n        return 1\n    return fibonacci(n - 1) + fibonacci(n - 2)\n\nprint(fibonacci(5))\nprint(fibonacci(0), fibonacci(1))",
    "options": [
      "fibonacci(2) and fibonacci(0)",
      "fibonacci(1) and fibonacci(0)",
      "fibonacci(3) and fibonacci(2)",
      "fibonacci(2) and fibonacci(1)"
    ],
    "answer": 3,
    "explanation": "Substituting n = 3 into the recursive expression gives fibonacci(3 - 1) + fibonacci(3 - 2).",
    "bank": "A",
    "week": 6,
    "program": "A17",
    "source": "Mock A · A17 · Q83",
    "note": "Assume small nonnegative integer inputs unless a question says otherwise."
  },
  {
    "id": "mock-A-084",
    "topic": "recursion",
    "title": "Considering only one evaluation of fibonacci(4), how many calls occur in total, including initial, repeated and base-case calls?",
    "code": "def fibonacci(n):\n    if n == 0:\n        return 0\n    if n == 1:\n        return 1\n    return fibonacci(n - 1) + fibonacci(n - 2)\n\nprint(fibonacci(5))\nprint(fibonacci(0), fibonacci(1))",
    "options": [
      "4",
      "9",
      "5",
      "7"
    ],
    "answer": 1,
    "explanation": "Let C(0) = C(1) = 1 and C(n) = 1 + C(n - 1) + C(n - 2). Then C(2) = 3, C(3) = 5 and C(4) = 9.",
    "bank": "A",
    "week": 6,
    "program": "A17",
    "source": "Mock A · A17 · Q84",
    "note": "Assume small nonnegative integer inputs unless a question says otherwise."
  },
  {
    "id": "mock-A-085",
    "topic": "recursion",
    "title": "Remove both lines of the n == 1 base case. Consider a call to the modified fibonacci(1) in isolation. What happens?",
    "code": "def fibonacci(n):\n    if n == 0:\n        return 0\n    if n == 1:\n        return 1\n    return fibonacci(n - 1) + fibonacci(n - 2)\n\nprint(fibonacci(5))\nprint(fibonacci(0), fibonacci(1))",
    "options": [
      "It returns 1 as before.",
      "It eventually raises RecursionError because some calls continue through negative arguments.",
      "It returns 0 after just one recursive call.",
      "It returns -1 and stops."
    ],
    "answer": 1,
    "explanation": "fibonacci(1) tries fibonacci(0) + fibonacci(-1). The negative branch keeps decreasing and cannot reach the only remaining base case n == 0.",
    "bank": "A",
    "week": 6,
    "program": "A17",
    "source": "Mock A · A17 · Q85",
    "note": "Assume small nonnegative integer inputs unless a question says otherwise."
  },
  {
    "id": "mock-A-086",
    "topic": "recursion",
    "title": "What is the first printed line?",
    "code": "def is_palindrome(text):\n    if len(text) <= 1:\n        return True\n    if text[0] != text[-1]:\n        return False\n    return is_palindrome(text[1:-1])\n\nword = \"Level\".lower()\nprint(is_palindrome(word))\nprint(is_palindrome(\"lever\"))\nprint(is_palindrome(\"\"))",
    "options": [
      "False",
      "level",
      "None",
      "True"
    ],
    "answer": 3,
    "explanation": "The caller changes Level to level. Matching outer pairs leave a one-character base case.",
    "bank": "A",
    "week": 6,
    "program": "A18",
    "source": "Mock A · A18 · Q86",
    "note": ""
  },
  {
    "id": "mock-A-087",
    "topic": "recursion",
    "title": "What is the second printed line?",
    "code": "def is_palindrome(text):\n    if len(text) <= 1:\n        return True\n    if text[0] != text[-1]:\n        return False\n    return is_palindrome(text[1:-1])\n\nword = \"Level\".lower()\nprint(is_palindrome(word))\nprint(is_palindrome(\"lever\"))\nprint(is_palindrome(\"\"))",
    "options": [
      "True",
      "None",
      "lever",
      "False"
    ],
    "answer": 3,
    "explanation": "For lever, the first character l differs from the final character r, so the function returns False immediately.",
    "bank": "A",
    "week": 6,
    "program": "A18",
    "source": "Mock A · A18 · Q87",
    "note": ""
  },
  {
    "id": "mock-A-088",
    "topic": "recursion",
    "title": "What is the last printed line?",
    "code": "def is_palindrome(text):\n    if len(text) <= 1:\n        return True\n    if text[0] != text[-1]:\n        return False\n    return is_palindrome(text[1:-1])\n\nword = \"Level\".lower()\nprint(is_palindrome(word))\nprint(is_palindrome(\"lever\"))\nprint(is_palindrome(\"\"))",
    "options": [
      "False",
      "An IndexError message",
      "True",
      "None"
    ],
    "answer": 2,
    "explanation": "The empty string has length 0 and is handled by the first base case before text[0] is accessed.",
    "bank": "A",
    "week": 6,
    "program": "A18",
    "source": "Mock A · A18 · Q88",
    "note": ""
  },
  {
    "id": "mock-A-089",
    "topic": "recursion",
    "title": "Considering only is_palindrome(\"level\"), how many function calls occur, including the first and base-case calls?",
    "code": "def is_palindrome(text):\n    if len(text) <= 1:\n        return True\n    if text[0] != text[-1]:\n        return False\n    return is_palindrome(text[1:-1])\n\nword = \"Level\".lower()\nprint(is_palindrome(word))\nprint(is_palindrome(\"lever\"))\nprint(is_palindrome(\"\"))",
    "options": [
      "5",
      "3",
      "2",
      "4"
    ],
    "answer": 1,
    "explanation": "The calls receive \"level\", then \"eve\", then \"v\". The one-character argument ends the recursion.",
    "bank": "A",
    "week": 6,
    "program": "A18",
    "source": "Mock A · A18 · Q89",
    "note": ""
  },
  {
    "id": "mock-A-090",
    "topic": "recursion",
    "title": "Change only len(text) <= 1 to len(text) == 1. What happens for is_palindrome(\"\")?",
    "code": "def is_palindrome(text):\n    if len(text) <= 1:\n        return True\n    if text[0] != text[-1]:\n        return False\n    return is_palindrome(text[1:-1])\n\nword = \"Level\".lower()\nprint(is_palindrome(word))\nprint(is_palindrome(\"lever\"))\nprint(is_palindrome(\"\"))",
    "options": [
      "It raises IndexError when the next condition attempts to access text[0].",
      "It returns False.",
      "It returns True.",
      "It raises RecursionError after repeated empty-string calls."
    ],
    "answer": 0,
    "explanation": "The new base case excludes the empty string. Execution reaches text[0], which is invalid for an empty string, before any recursive call occurs.",
    "bank": "A",
    "week": 6,
    "program": "A18",
    "source": "Mock A · A18 · Q90",
    "note": ""
  },
  {
    "id": "mock-A-096",
    "topic": "dicts",
    "title": "What is the final value of counts[\"steel\"]?",
    "code": "materials = [\"steel\", \"glass\", \"steel\", \"wood\", \"glass\", \"steel\"]\ncounts = {}\nfor material in materials:\n    counts[material] = counts.get(material, 0) + 1\nkeys = list(counts.keys())\nvalues = list(counts.values())\nprint(counts)\nprint(keys)\nprint(values)\nprint(sum(values))",
    "options": [
      "2",
      "1",
      "6",
      "3"
    ],
    "answer": 3,
    "explanation": "steel appears three times, and its counter is incremented once per appearance.",
    "bank": "A",
    "week": 6,
    "program": "A20",
    "source": "Mock A · A20 · Q96",
    "note": ""
  },
  {
    "id": "mock-A-097",
    "topic": "dicts",
    "title": "What is the final value of len(counts)?",
    "code": "materials = [\"steel\", \"glass\", \"steel\", \"wood\", \"glass\", \"steel\"]\ncounts = {}\nfor material in materials:\n    counts[material] = counts.get(material, 0) + 1\nkeys = list(counts.keys())\nvalues = list(counts.values())\nprint(counts)\nprint(keys)\nprint(values)\nprint(sum(values))",
    "options": [
      "2",
      "1",
      "3",
      "6"
    ],
    "answer": 2,
    "explanation": "There is one entry for each distinct material: steel, glass and wood.",
    "bank": "A",
    "week": 6,
    "program": "A20",
    "source": "Mock A · A20 · Q97",
    "note": ""
  },
  {
    "id": "mock-A-098",
    "topic": "dicts",
    "title": "What does print(keys) display?",
    "code": "materials = [\"steel\", \"glass\", \"steel\", \"wood\", \"glass\", \"steel\"]\ncounts = {}\nfor material in materials:\n    counts[material] = counts.get(material, 0) + 1\nkeys = list(counts.keys())\nvalues = list(counts.values())\nprint(counts)\nprint(keys)\nprint(values)\nprint(sum(values))",
    "options": [
      "['wood', 'glass', 'steel']",
      "['steel', 'glass', 'steel', 'wood', 'glass', 'steel']",
      "['glass', 'steel', 'wood']",
      "['steel', 'glass', 'wood']"
    ],
    "answer": 3,
    "explanation": "Keys appear in first-insertion order. Later increments do not reorder the existing entries.",
    "bank": "A",
    "week": 6,
    "program": "A20",
    "source": "Mock A · A20 · Q98",
    "note": ""
  },
  {
    "id": "mock-A-099",
    "topic": "dicts",
    "title": "What are the two final printed lines?",
    "code": "materials = [\"steel\", \"glass\", \"steel\", \"wood\", \"glass\", \"steel\"]\ncounts = {}\nfor material in materials:\n    counts[material] = counts.get(material, 0) + 1\nkeys = list(counts.keys())\nvalues = list(counts.values())\nprint(counts)\nprint(keys)\nprint(values)\nprint(sum(values))",
    "options": [
      "[3, 2, 1]\n3",
      "[3, 3, 3]\n9",
      "[3, 2, 1]\n6",
      "[1, 2, 3]\n6"
    ],
    "answer": 2,
    "explanation": "values follows the same key order: 3 for steel, 2 for glass and 1 for wood. Their sum is 6, the number of input items.",
    "bank": "A",
    "week": 6,
    "program": "A20",
    "source": "Mock A · A20 · Q99",
    "note": ""
  },
  {
    "id": "mock-A-100",
    "topic": "dicts",
    "title": "Which assignment would succeed if appended to the program?",
    "code": "materials = [\"steel\", \"glass\", \"steel\", \"wood\", \"glass\", \"steel\"]\ncounts = {}\nfor material in materials:\n    counts[material] = counts.get(material, 0) + 1\nkeys = list(counts.keys())\nvalues = list(counts.values())\nprint(counts)\nprint(keys)\nprint(values)\nprint(sum(values))",
    "options": [
      "counts[{\"id\": 1}] = 1",
      "counts[(1, 2)] = 1",
      "counts[([1, 2],)] = 1",
      "counts[[1, 2]] = 1"
    ],
    "answer": 1,
    "explanation": "A tuple of integers is hashable and may be a key. A list, a dictionary, and a tuple containing a list are unhashable and cannot be keys.",
    "bank": "A",
    "week": 6,
    "program": "A20",
    "source": "Mock A · A20 · Q100",
    "note": ""
  },
  {
    "id": "mock-B-006",
    "topic": "arithmetic",
    "title": "What is the final value of saved?",
    "code": "x = 8\ny = 3\nsaved = x\nx = x - y\ny = saved + y\npower = x ** 2 - y\nratio = power / 2\nprint(x, y, saved)\nprint(power, ratio)",
    "options": [
      "8",
      "11",
      "5",
      "3"
    ],
    "answer": 0,
    "explanation": "saved receives the original value of x, which is 8. Reassigning x does not change saved.",
    "bank": "B",
    "week": 1,
    "program": "B02",
    "source": "Mock B · B02 · Q6",
    "note": ""
  },
  {
    "id": "mock-B-007",
    "topic": "arithmetic",
    "title": "What is the first printed line?",
    "code": "x = 8\ny = 3\nsaved = x\nx = x - y\ny = saved + y\npower = x ** 2 - y\nratio = power / 2\nprint(x, y, saved)\nprint(power, ratio)",
    "options": [
      "8 11 8",
      "5 8 8",
      "5 11 5",
      "5 11 8"
    ],
    "answer": 3,
    "explanation": "x becomes 8 - 3 = 5; y becomes saved + 3 = 11; saved is still 8.",
    "bank": "B",
    "week": 1,
    "program": "B02",
    "source": "Mock B · B02 · Q7",
    "note": ""
  },
  {
    "id": "mock-B-008",
    "topic": "arithmetic",
    "title": "What is the second printed line?",
    "code": "x = 8\ny = 3\nsaved = x\nx = x - y\ny = saved + y\npower = x ** 2 - y\nratio = power / 2\nprint(x, y, saved)\nprint(power, ratio)",
    "options": [
      "-6 -3.0",
      "14 7.0",
      "36 18.0",
      "14 7"
    ],
    "answer": 1,
    "explanation": "Exponentiation is evaluated first: 5 ** 2 - 11 = 14. The / operator produces the float 7.0.",
    "bank": "B",
    "week": 1,
    "program": "B02",
    "source": "Mock B · B02 · Q8",
    "note": ""
  },
  {
    "id": "mock-B-009",
    "topic": "arithmetic",
    "title": "Replace power = x ** 2 - y with power = (x - y) ** 2. What is the second printed line?",
    "code": "x = 8\ny = 3\nsaved = x\nx = x - y\ny = saved + y\npower = x ** 2 - y\nratio = power / 2\nprint(x, y, saved)\nprint(power, ratio)",
    "options": [
      "6 3.0",
      "36 18.0",
      "-36 -18.0",
      "14 7.0"
    ],
    "answer": 1,
    "explanation": "With the added parentheses, (5 - 11) ** 2 = (-6) ** 2 = 36, and 36 / 2 is 18.0.",
    "bank": "B",
    "week": 1,
    "program": "B02",
    "source": "Mock B · B02 · Q9",
    "note": ""
  },
  {
    "id": "mock-B-010",
    "topic": "arithmetic",
    "title": "Replace only y = saved + y with y = x + y. What is the second printed line?",
    "code": "x = 8\ny = 3\nsaved = x\nx = x - y\ny = saved + y\npower = x ** 2 - y\nratio = power / 2\nprint(x, y, saved)\nprint(power, ratio)",
    "options": [
      "14 7.0",
      "25 12.5",
      "56 28.0",
      "17 8.5"
    ],
    "answer": 3,
    "explanation": "The replacement uses the updated x = 5, so y becomes 8. Thus power is 25 - 8 = 17 and ratio is 8.5.",
    "bank": "B",
    "week": 1,
    "program": "B02",
    "source": "Mock B · B02 · Q10",
    "note": ""
  },
  {
    "id": "mock-B-011",
    "topic": "types",
    "title": "What value is stored in repeated?",
    "code": "left = \"6\"\nright = \"2\"\njoined = left + right\nrepeated = right * 3\nnumber = int(joined)\nhalf = number / 2\nis_equal = joined == number\nprint(joined, repeated)\nprint(number + int(right), half)\nprint(is_equal)",
    "options": [
      "\"222\"",
      "\"23\"",
      "6",
      "\"6\""
    ],
    "answer": 0,
    "explanation": "Multiplying the string \"2\" by 3 repeats its characters three times; it does not perform numeric multiplication.",
    "bank": "B",
    "week": 1,
    "program": "B03",
    "source": "Mock B · B03 · Q11",
    "note": ""
  },
  {
    "id": "mock-B-012",
    "topic": "types",
    "title": "What is the type of joined?",
    "code": "left = \"6\"\nright = \"2\"\njoined = left + right\nrepeated = right * 3\nnumber = int(joined)\nhalf = number / 2\nis_equal = joined == number\nprint(joined, repeated)\nprint(number + int(right), half)\nprint(is_equal)",
    "options": [
      "float",
      "int",
      "str",
      "bool"
    ],
    "answer": 2,
    "explanation": "Adding two strings concatenates them. joined is the string \"62\".",
    "bank": "B",
    "week": 1,
    "program": "B03",
    "source": "Mock B · B03 · Q12",
    "note": ""
  },
  {
    "id": "mock-B-013",
    "topic": "types",
    "title": "What is the second printed line?",
    "code": "left = \"6\"\nright = \"2\"\njoined = left + right\nrepeated = right * 3\nnumber = int(joined)\nhalf = number / 2\nis_equal = joined == number\nprint(joined, repeated)\nprint(number + int(right), half)\nprint(is_equal)",
    "options": [
      "64 31",
      "622 31.0",
      "64 31.0",
      "8 4.0"
    ],
    "answer": 2,
    "explanation": "int(joined) is 62 and int(right) is 2. Their sum is 64, while 62 / 2 is 31.0.",
    "bank": "B",
    "week": 1,
    "program": "B03",
    "source": "Mock B · B03 · Q13",
    "note": ""
  },
  {
    "id": "mock-B-014",
    "topic": "types",
    "title": "What is the last printed line?",
    "code": "left = \"6\"\nright = \"2\"\njoined = left + right\nrepeated = right * 3\nnumber = int(joined)\nhalf = number / 2\nis_equal = joined == number\nprint(joined, repeated)\nprint(number + int(right), half)\nprint(is_equal)",
    "options": [
      "62",
      "TypeError",
      "False",
      "True"
    ],
    "answer": 2,
    "explanation": "The string \"62\" and the integer 62 are not equal. Comparing them with == returns False rather than raising an error.",
    "bank": "B",
    "week": 1,
    "program": "B03",
    "source": "Mock B · B03 · Q14",
    "note": ""
  },
  {
    "id": "mock-B-015",
    "topic": "types",
    "title": "Replace number = int(joined) with number = joined. What happens first?",
    "code": "left = \"6\"\nright = \"2\"\njoined = left + right\nrepeated = right * 3\nnumber = int(joined)\nhalf = number / 2\nis_equal = joined == number\nprint(joined, repeated)\nprint(number + int(right), half)\nprint(is_equal)",
    "options": [
      "A TypeError occurs at half = number / 2, before any output.",
      "A ValueError occurs at number = joined.",
      "The program prints 64 31.0 as its second line.",
      "The first print runs, then the second print raises a TypeError."
    ],
    "answer": 0,
    "explanation": "number now refers to a string. A string cannot be divided by 2, so execution stops at half = number / 2 before reaching a print call.",
    "bank": "B",
    "week": 1,
    "program": "B03",
    "source": "Mock B · B03 · Q15",
    "note": ""
  },
  {
    "id": "mock-B-016",
    "topic": "decisions",
    "title": "What is the first printed line?",
    "code": "level = 4\noverride = False\nstatus = \"Idle\"\nif level > 3:\n    if override:\n        status = \"Manual\"\n    else:\n        status = \"Auto\"\nelse:\n    status = \"Standby\"\nprint(status)\nprint(level > 3 and not override)",
    "options": [
      "Standby",
      "Idle",
      "Auto",
      "Manual"
    ],
    "answer": 2,
    "explanation": "level > 3 is True, but override is False, so the inner else assigns \"Auto\".",
    "bank": "B",
    "week": 2,
    "program": "B04",
    "source": "Mock B · B04 · Q16",
    "note": "The controller labels and threshold are illustrative."
  },
  {
    "id": "mock-B-017",
    "topic": "decisions",
    "title": "The else branch that assigns \"Auto\" belongs to which condition?",
    "code": "level = 4\noverride = False\nstatus = \"Idle\"\nif level > 3:\n    if override:\n        status = \"Manual\"\n    else:\n        status = \"Auto\"\nelse:\n    status = \"Standby\"\nprint(status)\nprint(level > 3 and not override)",
    "options": [
      "if level > 3:",
      "level > 3 and not override",
      "Both if statements at once.",
      "if override:"
    ],
    "answer": 3,
    "explanation": "That else is aligned with the inner if override statement. The outer else instead assigns \"Standby\".",
    "bank": "B",
    "week": 2,
    "program": "B04",
    "source": "Mock B · B04 · Q17",
    "note": "The controller labels and threshold are illustrative."
  },
  {
    "id": "mock-B-018",
    "topic": "decisions",
    "title": "What is the last printed line?",
    "code": "level = 4\noverride = False\nstatus = \"Idle\"\nif level > 3:\n    if override:\n        status = \"Manual\"\n    else:\n        status = \"Auto\"\nelse:\n    status = \"Standby\"\nprint(status)\nprint(level > 3 and not override)",
    "options": [
      "Auto",
      "False",
      "True",
      "4"
    ],
    "answer": 2,
    "explanation": "level > 3 is True and not override is also True, so their conjunction is True.",
    "bank": "B",
    "week": 2,
    "program": "B04",
    "source": "Mock B · B04 · Q18",
    "note": "The controller labels and threshold are illustrative."
  },
  {
    "id": "mock-B-019",
    "topic": "decisions",
    "title": "Change the initial values to level = 3 and override = True. What are the two printed lines?",
    "code": "level = 4\noverride = False\nstatus = \"Idle\"\nif level > 3:\n    if override:\n        status = \"Manual\"\n    else:\n        status = \"Auto\"\nelse:\n    status = \"Standby\"\nprint(status)\nprint(level > 3 and not override)",
    "options": [
      "Idle\nTrue",
      "Standby\nFalse",
      "Auto\nFalse",
      "Manual\nTrue"
    ],
    "answer": 1,
    "explanation": "The strict comparison 3 > 3 is False, so the nested override test is never reached. The final conjunction is also False.",
    "bank": "B",
    "week": 2,
    "program": "B04",
    "source": "Mock B · B04 · Q19",
    "note": "The controller labels and threshold are illustrative."
  },
  {
    "id": "mock-B-020",
    "topic": "decisions",
    "title": "Use level = 3 and override = True, and replace the outer condition with if level > 3 or override:. What is the first printed line?",
    "code": "level = 4\noverride = False\nstatus = \"Idle\"\nif level > 3:\n    if override:\n        status = \"Manual\"\n    else:\n        status = \"Auto\"\nelse:\n    status = \"Standby\"\nprint(status)\nprint(level > 3 and not override)",
    "options": [
      "Idle",
      "Standby",
      "Manual",
      "Auto"
    ],
    "answer": 2,
    "explanation": "The new outer condition is True because override is True. The inner if is then True as well, so status becomes \"Manual\".",
    "bank": "B",
    "week": 2,
    "program": "B04",
    "source": "Mock B · B04 · Q20",
    "note": "The controller labels and threshold are illustrative."
  },
  {
    "id": "mock-B-021",
    "topic": "for",
    "title": "Which values does row take, in order?",
    "code": "total = 0\nfor row in range(1, 4):\n    subtotal = 0\n    for column in range(row):\n        subtotal += row + column\n    print(row, subtotal)\n    total += subtotal\nprint(\"Total\", total)",
    "options": [
      "0, 1, 2, 3",
      "1, 2, 3",
      "0, 1, 2",
      "1, 2, 3, 4"
    ],
    "answer": 1,
    "explanation": "range(1, 4) includes its start and excludes its stop.",
    "bank": "B",
    "week": 2,
    "program": "B05",
    "source": "Mock B · B05 · Q21",
    "note": ""
  },
  {
    "id": "mock-B-022",
    "topic": "for",
    "title": "When row is 3, how many times does the inner loop body execute?",
    "code": "total = 0\nfor row in range(1, 4):\n    subtotal = 0\n    for column in range(row):\n        subtotal += row + column\n    print(row, subtotal)\n    total += subtotal\nprint(\"Total\", total)",
    "options": [
      "2",
      "6",
      "3",
      "4"
    ],
    "answer": 2,
    "explanation": "range(3) supplies column values 0, 1, and 2, so the inner body executes three times for that row.",
    "bank": "B",
    "week": 2,
    "program": "B05",
    "source": "Mock B · B05 · Q22",
    "note": ""
  },
  {
    "id": "mock-B-023",
    "topic": "for",
    "title": "What is the second printed line?",
    "code": "total = 0\nfor row in range(1, 4):\n    subtotal = 0\n    for column in range(row):\n        subtotal += row + column\n    print(row, subtotal)\n    total += subtotal\nprint(\"Total\", total)",
    "options": [
      "2 2",
      "2 6",
      "2 3",
      "2 5"
    ],
    "answer": 3,
    "explanation": "For row = 2, the inner additions are 2 + 0 and 2 + 1. Their sum is 5.",
    "bank": "B",
    "week": 2,
    "program": "B05",
    "source": "Mock B · B05 · Q23",
    "note": ""
  },
  {
    "id": "mock-B-024",
    "topic": "for",
    "title": "What is the last printed line?",
    "code": "total = 0\nfor row in range(1, 4):\n    subtotal = 0\n    for column in range(row):\n        subtotal += row + column\n    print(row, subtotal)\n    total += subtotal\nprint(\"Total\", total)",
    "options": [
      "Total 25",
      "Total 6",
      "Total 18",
      "Total 12"
    ],
    "answer": 2,
    "explanation": "The row subtotals are 1, 5, and 12. Their sum is 18.",
    "bank": "B",
    "week": 2,
    "program": "B05",
    "source": "Mock B · B05 · Q24",
    "note": ""
  },
  {
    "id": "mock-B-025",
    "topic": "for",
    "title": "Move subtotal = 0 to immediately before the outer loop, so it is no longer reset inside that loop. What is the last printed line?",
    "code": "total = 0\nfor row in range(1, 4):\n    subtotal = 0\n    for column in range(row):\n        subtotal += row + column\n    print(row, subtotal)\n    total += subtotal\nprint(\"Total\", total)",
    "options": [
      "Total 19",
      "Total 25",
      "Total 12",
      "Total 18"
    ],
    "answer": 1,
    "explanation": "The cumulative subtotals become 1, 6, and 18. total adds all three, giving 1 + 6 + 18 = 25.",
    "bank": "B",
    "week": 2,
    "program": "B05",
    "source": "Mock B · B05 · Q25",
    "note": ""
  },
  {
    "id": "mock-B-026",
    "topic": "while",
    "title": "What is the first value added to total?",
    "code": "n = 9\ntotal = 0\nwhile n > 0:\n    n -= 1\n    if n % 3 == 0:\n        continue\n    total += n\n    if total >= 20:\n        break\nprint(n, total)",
    "options": [
      "9",
      "7",
      "8",
      "6"
    ],
    "answer": 2,
    "explanation": "The first loop iteration changes n from 9 to 8. Since 8 is not divisible by 3, it is added to total.",
    "bank": "B",
    "week": 2,
    "program": "B06",
    "source": "Mock B · B06 · Q26",
    "note": ""
  },
  {
    "id": "mock-B-027",
    "topic": "while",
    "title": "Which value of n causes continue to execute before the loop stops?",
    "code": "n = 9\ntotal = 0\nwhile n > 0:\n    n -= 1\n    if n % 3 == 0:\n        continue\n    total += n\n    if total >= 20:\n        break\nprint(n, total)",
    "options": [
      "5",
      "8",
      "9",
      "6"
    ],
    "answer": 3,
    "explanation": "The tested values are 8, 7, 6, and 5. Only 6 is divisible by 3; 9 is changed before the first skip test.",
    "bank": "B",
    "week": 2,
    "program": "B06",
    "source": "Mock B · B06 · Q27",
    "note": ""
  },
  {
    "id": "mock-B-028",
    "topic": "while",
    "title": "How many times is n -= 1 executed?",
    "code": "n = 9\ntotal = 0\nwhile n > 0:\n    n -= 1\n    if n % 3 == 0:\n        continue\n    total += n\n    if total >= 20:\n        break\nprint(n, total)",
    "options": [
      "5",
      "4",
      "9",
      "3"
    ],
    "answer": 1,
    "explanation": "The loop visits n = 8, 7, 6, and 5 after the decrement. It stops after adding 5.",
    "bank": "B",
    "week": 2,
    "program": "B06",
    "source": "Mock B · B06 · Q28",
    "note": ""
  },
  {
    "id": "mock-B-029",
    "topic": "while",
    "title": "What does the program print?",
    "code": "n = 9\ntotal = 0\nwhile n > 0:\n    n -= 1\n    if n % 3 == 0:\n        continue\n    total += n\n    if total >= 20:\n        break\nprint(n, total)",
    "options": [
      "0 27",
      "5 20",
      "4 24",
      "6 15"
    ],
    "answer": 1,
    "explanation": "The additions are 8 + 7 + 5 = 20. The value 6 is skipped, and the break executes when n is 5.",
    "bank": "B",
    "week": 2,
    "program": "B06",
    "source": "Mock B · B06 · Q29",
    "note": ""
  },
  {
    "id": "mock-B-030",
    "topic": "while",
    "title": "Replace if total >= 20: with if total > 20:. What does the program print?",
    "code": "n = 9\ntotal = 0\nwhile n > 0:\n    n -= 1\n    if n % 3 == 0:\n        continue\n    total += n\n    if total >= 20:\n        break\nprint(n, total)",
    "options": [
      "5 20",
      "3 24",
      "0 27",
      "4 24"
    ],
    "answer": 3,
    "explanation": "A total of exactly 20 no longer triggers break. The next iteration adds 4, so total becomes 24 and the loop stops.",
    "bank": "B",
    "week": 2,
    "program": "B06",
    "source": "Mock B · B06 · Q30",
    "note": ""
  },
  {
    "id": "mock-B-031",
    "topic": "strings",
    "title": "What is the last printed line?",
    "code": "text = \"ABABA\"\npattern = \"ABA\"\ncount = 0\npositions = \"\"\nfor i in range(len(text) - len(pattern) + 1):\n    if text[i:i + len(pattern)] == pattern:\n        count += 1\n        positions += str(i)\nprint(count, positions)\nprint(text[::-1])\nprint(text[1:4])",
    "options": [
      "BAB",
      "ABA",
      "BABA",
      "ABAB"
    ],
    "answer": 0,
    "explanation": "text[1:4] includes indices 1, 2, and 3, which contain B, A, and B.",
    "bank": "B",
    "week": 3,
    "program": "B07",
    "source": "Mock B · B07 · Q31",
    "note": ""
  },
  {
    "id": "mock-B-032",
    "topic": "strings",
    "title": "Which values does i take in the loop?",
    "code": "text = \"ABABA\"\npattern = \"ABA\"\ncount = 0\npositions = \"\"\nfor i in range(len(text) - len(pattern) + 1):\n    if text[i:i + len(pattern)] == pattern:\n        count += 1\n        positions += str(i)\nprint(count, positions)\nprint(text[::-1])\nprint(text[1:4])",
    "options": [
      "1, 2, 3",
      "0, 1, 2",
      "0, 1",
      "0, 1, 2, 3, 4"
    ],
    "answer": 1,
    "explanation": "The stop value is 5 - 3 + 1 = 3, so range(3) gives 0, 1, and 2.",
    "bank": "B",
    "week": 3,
    "program": "B07",
    "source": "Mock B · B07 · Q32",
    "note": ""
  },
  {
    "id": "mock-B-033",
    "topic": "strings",
    "title": "What is the first printed line?",
    "code": "text = \"ABABA\"\npattern = \"ABA\"\ncount = 0\npositions = \"\"\nfor i in range(len(text) - len(pattern) + 1):\n    if text[i:i + len(pattern)] == pattern:\n        count += 1\n        positions += str(i)\nprint(count, positions)\nprint(text[::-1])\nprint(text[1:4])",
    "options": [
      "3 012",
      "1 0",
      "2 2",
      "2 02"
    ],
    "answer": 3,
    "explanation": "\"ABA\" starts at indices 0 and 2. The two matches overlap, and the index strings concatenate to \"02\".",
    "bank": "B",
    "week": 3,
    "program": "B07",
    "source": "Mock B · B07 · Q33",
    "note": ""
  },
  {
    "id": "mock-B-034",
    "topic": "strings",
    "title": "Insert text.replace(\"A\", \"X\") immediately before the loop, without assigning its result. What is the first printed line?",
    "code": "text = \"ABABA\"\npattern = \"ABA\"\ncount = 0\npositions = \"\"\nfor i in range(len(text) - len(pattern) + 1):\n    if text[i:i + len(pattern)] == pattern:\n        count += 1\n        positions += str(i)\nprint(count, positions)\nprint(text[::-1])\nprint(text[1:4])",
    "options": [
      "2 02",
      "0",
      "1 2",
      "2 13"
    ],
    "answer": 0,
    "explanation": "replace returns a new string. Because its result is discarded, text is still \"ABABA\" and the original two matches are found.",
    "bank": "B",
    "week": 3,
    "program": "B07",
    "source": "Mock B · B07 · Q34",
    "note": ""
  },
  {
    "id": "mock-B-035",
    "topic": "strings",
    "title": "Remove + 1 from the stop expression in range(...), changing nothing else. What is the first printed line?",
    "code": "text = \"ABABA\"\npattern = \"ABA\"\ncount = 0\npositions = \"\"\nfor i in range(len(text) - len(pattern) + 1):\n    if text[i:i + len(pattern)] == pattern:\n        count += 1\n        positions += str(i)\nprint(count, positions)\nprint(text[::-1])\nprint(text[1:4])",
    "options": [
      "2 02",
      "0",
      "1 2",
      "1 0"
    ],
    "answer": 3,
    "explanation": "Only starting indices 0 and 1 are tested. The valid final start at index 2 is omitted, so only the match at 0 is counted.",
    "bank": "B",
    "week": 3,
    "program": "B07",
    "source": "Mock B · B07 · Q35",
    "note": ""
  },
  {
    "id": "mock-B-036",
    "topic": "while",
    "title": "What is the first value tested as a possible divisor?",
    "code": "number = 91\ndivisor = 2\nchecks = 0\nwhile divisor * divisor <= number:\n    checks += 1\n    if number % divisor == 0:\n        break\n    divisor += 1\nif divisor * divisor <= number:\n    print(\"Factor\", divisor)\nelse:\n    print(\"No small factor\")\nprint(checks)",
    "options": [
      "3",
      "2",
      "1",
      "0"
    ],
    "answer": 1,
    "explanation": "divisor is initialized to 2 and is tested before it is incremented.",
    "bank": "B",
    "week": 3,
    "program": "B08",
    "source": "Mock B · B08 · Q36",
    "note": "Assume number is an integer greater than or equal to 2."
  },
  {
    "id": "mock-B-037",
    "topic": "while",
    "title": "For the original number, what is number % 3?",
    "code": "number = 91\ndivisor = 2\nchecks = 0\nwhile divisor * divisor <= number:\n    checks += 1\n    if number % divisor == 0:\n        break\n    divisor += 1\nif divisor * divisor <= number:\n    print(\"Factor\", divisor)\nelse:\n    print(\"No small factor\")\nprint(checks)",
    "options": [
      "1",
      "30",
      "3",
      "0"
    ],
    "answer": 0,
    "explanation": "91 = 3 * 30 + 1, so the remainder is 1.",
    "bank": "B",
    "week": 3,
    "program": "B08",
    "source": "Mock B · B08 · Q37",
    "note": "Assume number is an integer greater than or equal to 2."
  },
  {
    "id": "mock-B-038",
    "topic": "while",
    "title": "What are the two printed lines?",
    "code": "number = 91\ndivisor = 2\nchecks = 0\nwhile divisor * divisor <= number:\n    checks += 1\n    if number % divisor == 0:\n        break\n    divisor += 1\nif divisor * divisor <= number:\n    print(\"Factor\", divisor)\nelse:\n    print(\"No small factor\")\nprint(checks)",
    "options": [
      "Factor 7\n6",
      "Factor 13\n12",
      "Factor 7\n7",
      "No small factor\n8"
    ],
    "answer": 0,
    "explanation": "The tested divisors are 2, 3, 4, 5, 6, and 7. The sixth check finds a zero remainder, so the loop stops at 7.",
    "bank": "B",
    "week": 3,
    "program": "B08",
    "source": "Mock B · B08 · Q38",
    "note": "Assume number is an integer greater than or equal to 2."
  },
  {
    "id": "mock-B-039",
    "topic": "while",
    "title": "Change only number = 91 to number = 97. What are the two printed lines?",
    "code": "number = 91\ndivisor = 2\nchecks = 0\nwhile divisor * divisor <= number:\n    checks += 1\n    if number % divisor == 0:\n        break\n    divisor += 1\nif divisor * divisor <= number:\n    print(\"Factor\", divisor)\nelse:\n    print(\"No small factor\")\nprint(checks)",
    "options": [
      "Factor 9\n8",
      "No small factor\n9",
      "Factor 97\n96",
      "No small factor\n8"
    ],
    "answer": 3,
    "explanation": "Divisors 2 through 9 are tested, making eight checks. None divides 97; divisor then becomes 10, whose square exceeds 97.",
    "bank": "B",
    "week": 3,
    "program": "B08",
    "source": "Mock B · B08 · Q39",
    "note": "Assume number is an integer greater than or equal to 2."
  },
  {
    "id": "mock-B-040",
    "topic": "while",
    "title": "Set number = 49 and replace both <= comparisons with <. What are the two printed lines?",
    "code": "number = 91\ndivisor = 2\nchecks = 0\nwhile divisor * divisor <= number:\n    checks += 1\n    if number % divisor == 0:\n        break\n    divisor += 1\nif divisor * divisor <= number:\n    print(\"Factor\", divisor)\nelse:\n    print(\"No small factor\")\nprint(checks)",
    "options": [
      "No small factor\n5",
      "Factor 7\n5",
      "Factor 7\n6",
      "No small factor\n6"
    ],
    "answer": 0,
    "explanation": "Only divisors 2 through 6 are tested. At divisor = 7, the strict square-boundary test fails, so the code incorrectly misses the factor at the boundary.",
    "bank": "B",
    "week": 3,
    "program": "B08",
    "source": "Mock B · B08 · Q40",
    "note": "Assume number is an integer greater than or equal to 2."
  },
  {
    "id": "mock-B-046",
    "topic": "functions",
    "title": "What value is returned by return_double(4)?",
    "code": "def display_double(value):\n    print(value * 2)\n\ndef return_double(value):\n    return value * 2\n\nfirst = display_double(4)\nsecond = return_double(4)\nprint(first, second)",
    "options": [
      "\"8\"",
      "None",
      "4",
      "8"
    ],
    "answer": 3,
    "explanation": "The return statement sends the integer result 4 * 2 = 8 back to the caller.",
    "bank": "B",
    "week": 4,
    "program": "B10",
    "source": "Mock B · B10 · Q46",
    "note": ""
  },
  {
    "id": "mock-B-047",
    "topic": "functions",
    "title": "What value is assigned to first?",
    "code": "def display_double(value):\n    print(value * 2)\n\ndef return_double(value):\n    return value * 2\n\nfirst = display_double(4)\nsecond = return_double(4)\nprint(first, second)",
    "options": [
      "4",
      "8",
      "\"None\"",
      "None"
    ],
    "answer": 3,
    "explanation": "display_double prints 8 but has no return statement, so its return value is None.",
    "bank": "B",
    "week": 4,
    "program": "B10",
    "source": "Mock B · B10 · Q47",
    "note": ""
  },
  {
    "id": "mock-B-048",
    "topic": "functions",
    "title": "What is the complete output?",
    "code": "def display_double(value):\n    print(value * 2)\n\ndef return_double(value):\n    return value * 2\n\nfirst = display_double(4)\nsecond = return_double(4)\nprint(first, second)",
    "options": [
      "8\n8 8",
      "8\n8\nNone 8",
      "None 8",
      "8\nNone 8"
    ],
    "answer": 3,
    "explanation": "The display function prints the first line. The return function does not print. The final print then displays the two stored return values.",
    "bank": "B",
    "week": 4,
    "program": "B10",
    "source": "Mock B · B10 · Q48",
    "note": ""
  },
  {
    "id": "mock-B-049",
    "topic": "functions",
    "title": "Replace only first = display_double(4) with first = return_double(4). What is the complete output?",
    "code": "def display_double(value):\n    print(value * 2)\n\ndef return_double(value):\n    return value * 2\n\nfirst = display_double(4)\nsecond = return_double(4)\nprint(first, second)",
    "options": [
      "8\nNone 8",
      "8\n8 8",
      "8 8",
      "None 8"
    ],
    "answer": 2,
    "explanation": "Both calls now return 8 without printing. Only the final print statement produces output.",
    "bank": "B",
    "week": 4,
    "program": "B10",
    "source": "Mock B · B10 · Q49",
    "note": ""
  },
  {
    "id": "mock-B-050",
    "topic": "functions",
    "title": "Append print(first + second) to the original program. What happens at the appended statement?",
    "code": "def display_double(value):\n    print(value * 2)\n\ndef return_double(value):\n    return value * 2\n\nfirst = display_double(4)\nsecond = return_double(4)\nprint(first, second)",
    "options": [
      "It raises a TypeError because it attempts to add None and 8.",
      "It prints 8 because None is treated as zero.",
      "It prints None8.",
      "It prints 16."
    ],
    "answer": 0,
    "explanation": "The original two output lines appear first. At the appended statement, None + 8 is not a supported addition and raises TypeError.",
    "bank": "B",
    "week": 4,
    "program": "B10",
    "source": "Mock B · B10 · Q50",
    "note": ""
  },
  {
    "id": "mock-B-051",
    "topic": "functions",
    "title": "What value is assigned to fraction?",
    "code": "def normalise(raw, zero, span):\n    return (raw - zero) / span\n\ndef classify(fraction):\n    if fraction < 0.25:\n        return \"LOW\"\n    if fraction <= 0.75:\n        return \"MID\"\n    return \"HIGH\"\n\nraw = 18\nfraction = normalise(raw, 10, 16)\nprint(fraction, classify(fraction))\nprint(classify(normalise(22, 10, 16)))",
    "options": [
      "1.125",
      "0.25",
      "8",
      "0.5"
    ],
    "answer": 3,
    "explanation": "normalise(18, 10, 16) evaluates (18 - 10) / 16 = 0.5.",
    "bank": "B",
    "week": 4,
    "program": "B11",
    "source": "Mock B · B11 · Q51",
    "note": "Assume span is positive; values and thresholds are illustrative."
  },
  {
    "id": "mock-B-052",
    "topic": "functions",
    "title": "What does classify(0.8) return?",
    "code": "def normalise(raw, zero, span):\n    return (raw - zero) / span\n\ndef classify(fraction):\n    if fraction < 0.25:\n        return \"LOW\"\n    if fraction <= 0.75:\n        return \"MID\"\n    return \"HIGH\"\n\nraw = 18\nfraction = normalise(raw, 10, 16)\nprint(fraction, classify(fraction))\nprint(classify(normalise(22, 10, 16)))",
    "options": [
      "\"HIGH\"",
      "\"LOW\"",
      "None",
      "\"MID\""
    ],
    "answer": 0,
    "explanation": "0.8 is not below 0.25 and is not at most 0.75, so the final return is reached.",
    "bank": "B",
    "week": 4,
    "program": "B11",
    "source": "Mock B · B11 · Q52",
    "note": "Assume span is positive; values and thresholds are illustrative."
  },
  {
    "id": "mock-B-053",
    "topic": "functions",
    "title": "What is the second printed line?",
    "code": "def normalise(raw, zero, span):\n    return (raw - zero) / span\n\ndef classify(fraction):\n    if fraction < 0.25:\n        return \"LOW\"\n    if fraction <= 0.75:\n        return \"MID\"\n    return \"HIGH\"\n\nraw = 18\nfraction = normalise(raw, 10, 16)\nprint(fraction, classify(fraction))\nprint(classify(normalise(22, 10, 16)))",
    "options": [
      "0.75",
      "LOW",
      "MID",
      "HIGH"
    ],
    "answer": 2,
    "explanation": "normalise(22, 10, 16) returns 0.75. The <= comparison includes this boundary in \"MID\".",
    "bank": "B",
    "week": 4,
    "program": "B11",
    "source": "Mock B · B11 · Q53",
    "note": "Assume span is positive; values and thresholds are illustrative."
  },
  {
    "id": "mock-B-054",
    "topic": "functions",
    "title": "Change only raw = 18 to raw = 8. What is the first printed line?",
    "code": "def normalise(raw, zero, span):\n    return (raw - zero) / span\n\ndef classify(fraction):\n    if fraction < 0.25:\n        return \"LOW\"\n    if fraction <= 0.75:\n        return \"MID\"\n    return \"HIGH\"\n\nraw = 18\nfraction = normalise(raw, 10, 16)\nprint(fraction, classify(fraction))\nprint(classify(normalise(22, 10, 16)))",
    "options": [
      "0.5 MID",
      "-0.125 LOW",
      "-0.125 MID",
      "0.0 LOW"
    ],
    "answer": 1,
    "explanation": "The calculation gives (8 - 10) / 16 = -0.125. The code does not clamp the result, and a value below 0.25 is classified as \"LOW\".",
    "bank": "B",
    "week": 4,
    "program": "B11",
    "source": "Mock B · B11 · Q54",
    "note": "Assume span is positive; values and thresholds are illustrative."
  },
  {
    "id": "mock-B-055",
    "topic": "functions",
    "title": "Which expression uses the two existing functions to return the category for a reading of 14, with zero = 10 and span = 16?",
    "code": "def normalise(raw, zero, span):\n    return (raw - zero) / span\n\ndef classify(fraction):\n    if fraction < 0.25:\n        return \"LOW\"\n    if fraction <= 0.75:\n        return \"MID\"\n    return \"HIGH\"\n\nraw = 18\nfraction = normalise(raw, 10, 16)\nprint(fraction, classify(fraction))\nprint(classify(normalise(22, 10, 16)))",
    "options": [
      "classify(normalise(14, 10, 16))",
      "classify(14, 10, 16)",
      "normalise(14, 10, 16)",
      "normalise(classify(14), 10, 16)"
    ],
    "answer": 0,
    "explanation": "The inner call converts the reading to 0.25; the outer call classifies that fraction as \"MID\". This keeps conversion and classification as separate reusable tasks.",
    "bank": "B",
    "week": 4,
    "program": "B11",
    "source": "Mock B · B11 · Q55",
    "note": "Assume span is positive; values and thresholds are illustrative."
  },
  {
    "id": "mock-B-056",
    "topic": "functions",
    "title": "In the original program, which value of gain is used by scale(5)?",
    "code": "gain = 3\n\ndef scale(value, gain=2):\n    value = value * gain\n    return value\n\ndef combine(value):\n    return scale(value) + scale(value, gain=1)\n\nreading = 5\nresult = combine(reading)\nprint(reading, result)\nprint(gain)",
    "options": [
      "1",
      "5",
      "2",
      "3"
    ],
    "answer": 2,
    "explanation": "No second argument is supplied, so scale uses the default value 2 from its definition.",
    "bank": "B",
    "week": 4,
    "program": "B12",
    "source": "Mock B · B12 · Q56",
    "note": ""
  },
  {
    "id": "mock-B-057",
    "topic": "functions",
    "title": "What is the last printed line?",
    "code": "gain = 3\n\ndef scale(value, gain=2):\n    value = value * gain\n    return value\n\ndef combine(value):\n    return scale(value) + scale(value, gain=1)\n\nreading = 5\nresult = combine(reading)\nprint(reading, result)\nprint(gain)",
    "options": [
      "15",
      "1",
      "3",
      "2"
    ],
    "answer": 2,
    "explanation": "The module-level gain remains 3. Function parameters with the same name are local bindings.",
    "bank": "B",
    "week": 4,
    "program": "B12",
    "source": "Mock B · B12 · Q57",
    "note": ""
  },
  {
    "id": "mock-B-058",
    "topic": "functions",
    "title": "What is the first printed line?",
    "code": "gain = 3\n\ndef scale(value, gain=2):\n    value = value * gain\n    return value\n\ndef combine(value):\n    return scale(value) + scale(value, gain=1)\n\nreading = 5\nresult = combine(reading)\nprint(reading, result)\nprint(gain)",
    "options": [
      "5 30",
      "10 15",
      "5 20",
      "5 15"
    ],
    "answer": 3,
    "explanation": "combine(5) adds scale(5) = 10 and scale(5, gain=1) = 5. The integer variable reading remains 5.",
    "bank": "B",
    "week": 4,
    "program": "B12",
    "source": "Mock B · B12 · Q58",
    "note": ""
  },
  {
    "id": "mock-B-059",
    "topic": "functions",
    "title": "What does the additional call scale(value=4, gain=3) return?",
    "code": "gain = 3\n\ndef scale(value, gain=2):\n    value = value * gain\n    return value\n\ndef combine(value):\n    return scale(value) + scale(value, gain=1)\n\nreading = 5\nresult = combine(reading)\nprint(reading, result)\nprint(gain)",
    "options": [
      "None",
      "12",
      "8",
      "7"
    ],
    "answer": 1,
    "explanation": "The keyword arguments explicitly set value to 4 and gain to 3, so the function returns 4 * 3 = 12.",
    "bank": "B",
    "week": 4,
    "program": "B12",
    "source": "Mock B · B12 · Q59",
    "note": ""
  },
  {
    "id": "mock-B-060",
    "topic": "functions",
    "title": "Change the header to def scale(value, gain=gain): and insert gain = 4 at module level immediately before reading = 5. What are the two printed lines?",
    "code": "gain = 3\n\ndef scale(value, gain=2):\n    value = value * gain\n    return value\n\ndef combine(value):\n    return scale(value) + scale(value, gain=1)\n\nreading = 5\nresult = combine(reading)\nprint(reading, result)\nprint(gain)",
    "options": [
      "5 20\n3",
      "5 25\n4",
      "5 15\n4",
      "5 20\n4"
    ],
    "answer": 3,
    "explanation": "When scale is defined, the outer gain is 3, so its default becomes 3. The later assignment to 4 does not update that default. combine(5) returns 15 + 5 = 20.",
    "bank": "B",
    "week": 4,
    "program": "B12",
    "source": "Mock B · B12 · Q60",
    "note": ""
  },
  {
    "id": "mock-B-061",
    "topic": "lists",
    "title": "What is the type of record?",
    "code": "record = (\"T3\", [12, 14], \"C\")\nlabel, readings, unit = record\nreadings.append(16)\nsnapshot = tuple(readings)\nreadings[0] = 10\nprint(record[0], record[1][-1])\nprint(snapshot)\nprint(record[1])",
    "options": [
      "dict",
      "tuple",
      "list",
      "str"
    ],
    "answer": 1,
    "explanation": "record is a tuple of three elements: a string, a list, and another string.",
    "bank": "B",
    "week": 5,
    "program": "B13",
    "source": "Mock B · B13 · Q61",
    "note": ""
  },
  {
    "id": "mock-B-062",
    "topic": "lists",
    "title": "What is the first printed line?",
    "code": "record = (\"T3\", [12, 14], \"C\")\nlabel, readings, unit = record\nreadings.append(16)\nsnapshot = tuple(readings)\nreadings[0] = 10\nprint(record[0], record[1][-1])\nprint(snapshot)\nprint(record[1])",
    "options": [
      "T3 16",
      "C 16",
      "T3 14",
      "T3 10"
    ],
    "answer": 0,
    "explanation": "record[0] is \"T3\". record[1] is the readings list, whose final element is the appended value 16.",
    "bank": "B",
    "week": 5,
    "program": "B13",
    "source": "Mock B · B13 · Q62",
    "note": ""
  },
  {
    "id": "mock-B-063",
    "topic": "lists",
    "title": "What is the second printed line?",
    "code": "record = (\"T3\", [12, 14], \"C\")\nlabel, readings, unit = record\nreadings.append(16)\nsnapshot = tuple(readings)\nreadings[0] = 10\nprint(record[0], record[1][-1])\nprint(snapshot)\nprint(record[1])",
    "options": [
      "(12, 14)",
      "[12, 14, 16]",
      "(10, 14, 16)",
      "(12, 14, 16)"
    ],
    "answer": 3,
    "explanation": "snapshot is made after 16 is appended but before the list first element changes to 10. Replacing that list element does not alter the existing tuple.",
    "bank": "B",
    "week": 5,
    "program": "B13",
    "source": "Mock B · B13 · Q63",
    "note": ""
  },
  {
    "id": "mock-B-064",
    "topic": "lists",
    "title": "What is the last printed line?",
    "code": "record = (\"T3\", [12, 14], \"C\")\nlabel, readings, unit = record\nreadings.append(16)\nsnapshot = tuple(readings)\nreadings[0] = 10\nprint(record[0], record[1][-1])\nprint(snapshot)\nprint(record[1])",
    "options": [
      "(10, 14, 16)",
      "[12, 14]",
      "[10, 14, 16]",
      "[12, 14, 16]"
    ],
    "answer": 2,
    "explanation": "Unpacking did not copy the inner list. readings and record[1] refer to the same list, which receives both changes.",
    "bank": "B",
    "week": 5,
    "program": "B13",
    "source": "Mock B · B13 · Q64",
    "note": ""
  },
  {
    "id": "mock-B-065",
    "topic": "lists",
    "title": "Which single statement can be appended to the original program without raising an exception?",
    "code": "record = (\"T3\", [12, 14], \"C\")\nlabel, readings, unit = record\nreadings.append(16)\nsnapshot = tuple(readings)\nreadings[0] = 10\nprint(record[0], record[1][-1])\nprint(snapshot)\nprint(record[1])",
    "options": [
      "snapshot[0] = 10",
      "record.append(\"OK\")",
      "record[0] = \"T4\"",
      "record[1].append(18)"
    ],
    "answer": 3,
    "explanation": "The tuple still refers to a mutable list, so that list can be extended. Tuple-item assignments are prohibited, and tuples have no append method.",
    "bank": "B",
    "week": 5,
    "program": "B13",
    "source": "Mock B · B13 · Q65",
    "note": ""
  },
  {
    "id": "mock-B-066",
    "topic": "lists",
    "title": "Immediately after values.remove(5), what is values?",
    "code": "values = [5, 2, 5, 1]\nordered = sorted(values)\nvalues.remove(5)\nvalues.extend([3, 2])\nreturned = values.sort()\nprint(values)\nprint(ordered)\nprint(returned)\nprint(values.count(2), values.index(3))",
    "options": [
      "[2, 1]",
      "[2, 5, 1]",
      "[5, 2, 1]",
      "[1, 2, 5]"
    ],
    "answer": 1,
    "explanation": "remove(5) deletes only the first occurrence of 5 in the original unsorted list.",
    "bank": "B",
    "week": 5,
    "program": "B14",
    "source": "Mock B · B14 · Q66",
    "note": ""
  },
  {
    "id": "mock-B-067",
    "topic": "lists",
    "title": "By how much does values.extend([3, 2]) increase the list length?",
    "code": "values = [5, 2, 5, 1]\nordered = sorted(values)\nvalues.remove(5)\nvalues.extend([3, 2])\nreturned = values.sort()\nprint(values)\nprint(ordered)\nprint(returned)\nprint(values.count(2), values.index(3))",
    "options": [
      "3",
      "5",
      "1",
      "2"
    ],
    "answer": 3,
    "explanation": "extend adds the two individual integers. It does not append the supplied list as a single nested element.",
    "bank": "B",
    "week": 5,
    "program": "B14",
    "source": "Mock B · B14 · Q67",
    "note": ""
  },
  {
    "id": "mock-B-068",
    "topic": "lists",
    "title": "What is the first printed line?",
    "code": "values = [5, 2, 5, 1]\nordered = sorted(values)\nvalues.remove(5)\nvalues.extend([3, 2])\nreturned = values.sort()\nprint(values)\nprint(ordered)\nprint(returned)\nprint(values.count(2), values.index(3))",
    "options": [
      "[1, 2, 3]",
      "[1, 2, 2, 3, 5]",
      "[2, 5, 1, 3, 2]",
      "[1, 2, 3, 5, 5]"
    ],
    "answer": 1,
    "explanation": "After removal and extension, the list is [2, 5, 1, 3, 2]. Sorting it in place produces [1, 2, 2, 3, 5].",
    "bank": "B",
    "week": 5,
    "program": "B14",
    "source": "Mock B · B14 · Q68",
    "note": ""
  },
  {
    "id": "mock-B-069",
    "topic": "lists",
    "title": "What is the last printed line?",
    "code": "values = [5, 2, 5, 1]\nordered = sorted(values)\nvalues.remove(5)\nvalues.extend([3, 2])\nreturned = values.sort()\nprint(values)\nprint(ordered)\nprint(returned)\nprint(values.count(2), values.index(3))",
    "options": [
      "3 2",
      "2 3",
      "1 3",
      "2 4"
    ],
    "answer": 1,
    "explanation": "The sorted list contains two occurrences of 2, and the first occurrence of 3 is at zero-based index 3.",
    "bank": "B",
    "week": 5,
    "program": "B14",
    "source": "Mock B · B14 · Q69",
    "note": ""
  },
  {
    "id": "mock-B-070",
    "topic": "lists",
    "title": "Which pair gives the final values of ordered and returned, respectively?",
    "code": "values = [5, 2, 5, 1]\nordered = sorted(values)\nvalues.remove(5)\nvalues.extend([3, 2])\nreturned = values.sort()\nprint(values)\nprint(ordered)\nprint(returned)\nprint(values.count(2), values.index(3))",
    "options": [
      "[1, 2, 5, 5] and [1, 2, 2, 3, 5]",
      "[5, 2, 5, 1] and True",
      "[1, 2, 5, 5] and None",
      "[1, 2, 2, 3, 5] and None"
    ],
    "answer": 2,
    "explanation": "sorted(values) made a separate sorted list before any mutation. Later changes leave that list unchanged. values.sort() sorts in place and returns None.",
    "bank": "B",
    "week": 5,
    "program": "B14",
    "source": "Mock B · B14 · Q70",
    "note": ""
  },
  {
    "id": "mock-B-076",
    "topic": "recursion",
    "title": "Which condition is the base case in gcd_recursive?",
    "code": "def gcd_recursive(a, b):\n    if b == 0:\n        return a\n    return gcd_recursive(b, a % b)\n\ndef gcd_iterative(a, b):\n    while b != 0:\n        a, b = b, a % b\n    return a\n\nprint(gcd_recursive(30, 18))\nprint(gcd_iterative(30, 18))",
    "options": [
      "b == 0",
      "a == b",
      "a % b == 1",
      "a == 0"
    ],
    "answer": 0,
    "explanation": "The function returns immediately when b is zero. Otherwise it makes one recursive call.",
    "bank": "B",
    "week": 6,
    "program": "B16",
    "source": "Mock B · B16 · Q76",
    "note": "Assume nonnegative integer inputs, not both zero."
  },
  {
    "id": "mock-B-077",
    "topic": "recursion",
    "title": "What is the first printed line?",
    "code": "def gcd_recursive(a, b):\n    if b == 0:\n        return a\n    return gcd_recursive(b, a % b)\n\ndef gcd_iterative(a, b):\n    while b != 0:\n        a, b = b, a % b\n    return a\n\nprint(gcd_recursive(30, 18))\nprint(gcd_iterative(30, 18))",
    "options": [
      "6",
      "3",
      "12",
      "18"
    ],
    "answer": 0,
    "explanation": "The argument pairs are (30, 18), (18, 12), (12, 6), and (6, 0). The base case returns 6.",
    "bank": "B",
    "week": 6,
    "program": "B16",
    "source": "Mock B · B16 · Q77",
    "note": "Assume nonnegative integer inputs, not both zero."
  },
  {
    "id": "mock-B-078",
    "topic": "recursion",
    "title": "In evaluating gcd_recursive(30, 18), what are the arguments of the first recursive call?",
    "code": "def gcd_recursive(a, b):\n    if b == 0:\n        return a\n    return gcd_recursive(b, a % b)\n\ndef gcd_iterative(a, b):\n    while b != 0:\n        a, b = b, a % b\n    return a\n\nprint(gcd_recursive(30, 18))\nprint(gcd_iterative(30, 18))",
    "options": [
      "(30, 12)",
      "(12, 18)",
      "(18, 30)",
      "(18, 12)"
    ],
    "answer": 3,
    "explanation": "The next arguments are b and a % b. Here 30 % 18 is 12, so the call is gcd_recursive(18, 12).",
    "bank": "B",
    "week": 6,
    "program": "B16",
    "source": "Mock B · B16 · Q78",
    "note": "Assume nonnegative integer inputs, not both zero."
  },
  {
    "id": "mock-B-079",
    "topic": "recursion",
    "title": "For one evaluation of each function with (30, 18), how many recursive function calls (including the initial and base-case calls) and iterative loop-body executions occur?",
    "code": "def gcd_recursive(a, b):\n    if b == 0:\n        return a\n    return gcd_recursive(b, a % b)\n\ndef gcd_iterative(a, b):\n    while b != 0:\n        a, b = b, a % b\n    return a\n\nprint(gcd_recursive(30, 18))\nprint(gcd_iterative(30, 18))",
    "options": [
      "3 calls and 4 loop-body executions",
      "3 calls and 3 loop-body executions",
      "4 calls and 4 loop-body executions",
      "4 calls and 3 loop-body executions"
    ],
    "answer": 3,
    "explanation": "The recursive function has four calls, including (6, 0). The iterative function performs three updates and then exits before another body execution.",
    "bank": "B",
    "week": 6,
    "program": "B16",
    "source": "Mock B · B16 · Q79",
    "note": "Assume nonnegative integer inputs, not both zero."
  },
  {
    "id": "mock-B-080",
    "topic": "recursion",
    "title": "In gcd_iterative, replace a, b = b, a % b with two consecutive statements: a = b followed by b = a % b, both inside the loop. What does the modified function return for (30, 18)?",
    "code": "def gcd_recursive(a, b):\n    if b == 0:\n        return a\n    return gcd_recursive(b, a % b)\n\ndef gcd_iterative(a, b):\n    while b != 0:\n        a, b = b, a % b\n    return a\n\nprint(gcd_recursive(30, 18))\nprint(gcd_iterative(30, 18))",
    "options": [
      "12",
      "18",
      "It raises ZeroDivisionError.",
      "6"
    ],
    "answer": 1,
    "explanation": "The first statement makes a equal to 18. The second therefore computes 18 % 18 = 0, not 30 % 18. The loop immediately ends and returns 18.",
    "bank": "B",
    "week": 6,
    "program": "B16",
    "source": "Mock B · B16 · Q80",
    "note": "Assume nonnegative integer inputs, not both zero."
  },
  {
    "id": "mock-B-081",
    "topic": "recursion",
    "title": "Which inputs make the second if statement return immediately?",
    "code": "def ways(n):\n    if n == 0:\n        return 1\n    if n == 1 or n == 2:\n        return 1\n    return ways(n - 1) + ways(n - 3)\n\nprint(ways(4))\nprint(ways(0), ways(2))",
    "options": [
      "2 and 3",
      "0 and 2",
      "1 and 2",
      "0 and 1"
    ],
    "answer": 2,
    "explanation": "The second condition explicitly checks n == 1 or n == 2. The input 0 is handled by the first condition.",
    "bank": "B",
    "week": 6,
    "program": "B17",
    "source": "Mock B · B17 · Q81",
    "note": "Assume small nonnegative integer inputs unless a question says otherwise."
  },
  {
    "id": "mock-B-082",
    "topic": "recursion",
    "title": "What is the first printed line?",
    "code": "def ways(n):\n    if n == 0:\n        return 1\n    if n == 1 or n == 2:\n        return 1\n    return ways(n - 1) + ways(n - 3)\n\nprint(ways(4))\nprint(ways(0), ways(2))",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": 1,
    "explanation": "ways(3) is ways(2) + ways(0) = 2. Then ways(4) is ways(3) + ways(1) = 3.",
    "bank": "B",
    "week": 6,
    "program": "B17",
    "source": "Mock B · B17 · Q82",
    "note": "Assume small nonnegative integer inputs unless a question says otherwise."
  },
  {
    "id": "mock-B-083",
    "topic": "recursion",
    "title": "What would an additional print(ways(5)) display?",
    "code": "def ways(n):\n    if n == 0:\n        return 1\n    if n == 1 or n == 2:\n        return 1\n    return ways(n - 1) + ways(n - 3)\n\nprint(ways(4))\nprint(ways(0), ways(2))",
    "options": [
      "8",
      "4",
      "5",
      "3"
    ],
    "answer": 1,
    "explanation": "ways(5) = ways(4) + ways(2) = 3 + 1 = 4.",
    "bank": "B",
    "week": 6,
    "program": "B17",
    "source": "Mock B · B17 · Q83",
    "note": "Assume small nonnegative integer inputs unless a question says otherwise."
  },
  {
    "id": "mock-B-084",
    "topic": "recursion",
    "title": "For a single evaluation of ways(4), how many calls to ways occur, including the initial call and all base-case calls?",
    "code": "def ways(n):\n    if n == 0:\n        return 1\n    if n == 1 or n == 2:\n        return 1\n    return ways(n - 1) + ways(n - 3)\n\nprint(ways(4))\nprint(ways(0), ways(2))",
    "options": [
      "3",
      "4",
      "7",
      "5"
    ],
    "answer": 3,
    "explanation": "The call arguments in execution order are 4, 3, 2, 0, and 1. Each invocation counts, including those that return immediately.",
    "bank": "B",
    "week": 6,
    "program": "B17",
    "source": "Mock B · B17 · Q84",
    "note": "Assume small nonnegative integer inputs unless a question says otherwise."
  },
  {
    "id": "mock-B-085",
    "topic": "recursion",
    "title": "Replace if n == 1 or n == 2: with if n == 1:. What happens when the modified program evaluates ways(4)?",
    "code": "def ways(n):\n    if n == 0:\n        return 1\n    if n == 1 or n == 2:\n        return 1\n    return ways(n - 1) + ways(n - 3)\n\nprint(ways(4))\nprint(ways(0), ways(2))",
    "options": [
      "It raises RecursionError after a branch keeps recursing on negative inputs.",
      "It raises SyntaxError because each recursive function needs three base inputs.",
      "It returns 2 because the missing base case is treated as zero.",
      "It returns 3; the third base input was unnecessary."
    ],
    "answer": 0,
    "explanation": "ways(2) is no longer a base case. It calls ways(1) and ways(-1); the negative branch keeps decreasing and never reaches 0 or 1, eventually exceeding the recursion limit.",
    "bank": "B",
    "week": 6,
    "program": "B17",
    "source": "Mock B · B17 · Q85",
    "note": "Assume small nonnegative integer inputs unless a question says otherwise."
  },
  {
    "id": "mock-B-086",
    "topic": "recursion",
    "title": "Which value of text triggers the base case?",
    "code": "def remove_char(text, unwanted):\n    if text == \"\":\n        return \"\"\n    rest = remove_char(text[1:], unwanted)\n    if text[0] == unwanted:\n        return rest\n    return text[0] + rest\n\nword = \"banana\"\ncleaned = remove_char(word, \"a\")\nprint(cleaned)\nprint(word)",
    "options": [
      "None",
      "\"\"",
      "\"banana\"",
      "\"a\""
    ],
    "answer": 1,
    "explanation": "The function immediately returns an empty string when text is empty.",
    "bank": "B",
    "week": 6,
    "program": "B18",
    "source": "Mock B · B18 · Q86",
    "note": ""
  },
  {
    "id": "mock-B-087",
    "topic": "recursion",
    "title": "What is the first printed line?",
    "code": "def remove_char(text, unwanted):\n    if text == \"\":\n        return \"\"\n    rest = remove_char(text[1:], unwanted)\n    if text[0] == unwanted:\n        return rest\n    return text[0] + rest\n\nword = \"banana\"\ncleaned = remove_char(word, \"a\")\nprint(cleaned)\nprint(word)",
    "options": [
      "bnn",
      "banana",
      "nnb",
      "bana"
    ],
    "answer": 0,
    "explanation": "Every lowercase \"a\" is omitted while b, n, and n are kept in their original order.",
    "bank": "B",
    "week": 6,
    "program": "B18",
    "source": "Mock B · B18 · Q87",
    "note": ""
  },
  {
    "id": "mock-B-088",
    "topic": "recursion",
    "title": "What is the last printed line?",
    "code": "def remove_char(text, unwanted):\n    if text == \"\":\n        return \"\"\n    rest = remove_char(text[1:], unwanted)\n    if text[0] == unwanted:\n        return rest\n    return text[0] + rest\n\nword = \"banana\"\ncleaned = remove_char(word, \"a\")\nprint(cleaned)\nprint(word)",
    "options": [
      "banana",
      "bnn",
      "nnb",
      "None"
    ],
    "answer": 0,
    "explanation": "The function constructs a new string; it does not change the original string referenced by word.",
    "bank": "B",
    "week": 6,
    "program": "B18",
    "source": "Mock B · B18 · Q88",
    "note": ""
  },
  {
    "id": "mock-B-089",
    "topic": "recursion",
    "title": "During the single call remove_char(\"banana\", \"a\"), how many calls to remove_char occur, including the initial and empty-string calls?",
    "code": "def remove_char(text, unwanted):\n    if text == \"\":\n        return \"\"\n    rest = remove_char(text[1:], unwanted)\n    if text[0] == unwanted:\n        return rest\n    return text[0] + rest\n\nword = \"banana\"\ncleaned = remove_char(word, \"a\")\nprint(cleaned)\nprint(word)",
    "options": [
      "6",
      "4",
      "7",
      "3"
    ],
    "answer": 2,
    "explanation": "The successive string lengths are 6, 5, 4, 3, 2, 1, and 0, giving seven calls.",
    "bank": "B",
    "week": 6,
    "program": "B18",
    "source": "Mock B · B18 · Q89",
    "note": ""
  },
  {
    "id": "mock-B-090",
    "topic": "recursion",
    "title": "Replace the final return with return rest + text[0]. What is the first printed line?",
    "code": "def remove_char(text, unwanted):\n    if text == \"\":\n        return \"\"\n    rest = remove_char(text[1:], unwanted)\n    if text[0] == unwanted:\n        return rest\n    return text[0] + rest\n\nword = \"banana\"\ncleaned = remove_char(word, \"a\")\nprint(cleaned)\nprint(word)",
    "options": [
      "bnn",
      "banana",
      "nnb",
      "ananab"
    ],
    "answer": 2,
    "explanation": "The \"a\" characters are still omitted. Concatenating each retained character after the recursively processed suffix reverses the retained sequence bnn to nnb.",
    "bank": "B",
    "week": 6,
    "program": "B18",
    "source": "Mock B · B18 · Q90",
    "note": ""
  },
  {
    "id": "mock-B-091",
    "topic": "dicts",
    "title": "How many key-value pairs are in temperatures immediately after its first assignment?",
    "code": "temperatures = {(0, 0): 18, (0, 1): 21}\npoint = (1, 0)\ntemperatures[point] = 19\ntemperatures[(0, 1)] += 2\nold = temperatures.pop((0, 0))\nprint(temperatures.get((0, 0), -1))\nprint(temperatures[point], old)\nprint(list(temperatures.keys()))",
    "options": [
      "3",
      "4",
      "6",
      "2"
    ],
    "answer": 3,
    "explanation": "The dictionary initially has the two coordinate keys (0, 0) and (0, 1). Each tuple is one key.",
    "bank": "B",
    "week": 6,
    "program": "B19",
    "source": "Mock B · B19 · Q91",
    "note": ""
  },
  {
    "id": "mock-B-092",
    "topic": "dicts",
    "title": "At the end, what is temperatures[(0, 1)]?",
    "code": "temperatures = {(0, 0): 18, (0, 1): 21}\npoint = (1, 0)\ntemperatures[point] = 19\ntemperatures[(0, 1)] += 2\nold = temperatures.pop((0, 0))\nprint(temperatures.get((0, 0), -1))\nprint(temperatures[point], old)\nprint(list(temperatures.keys()))",
    "options": [
      "21",
      "19",
      "23",
      "2"
    ],
    "answer": 2,
    "explanation": "The existing value at (0, 1) is increased from 21 to 23.",
    "bank": "B",
    "week": 6,
    "program": "B19",
    "source": "Mock B · B19 · Q92",
    "note": ""
  },
  {
    "id": "mock-B-093",
    "topic": "dicts",
    "title": "What is the last printed line?",
    "code": "temperatures = {(0, 0): 18, (0, 1): 21}\npoint = (1, 0)\ntemperatures[point] = 19\ntemperatures[(0, 1)] += 2\nold = temperatures.pop((0, 0))\nprint(temperatures.get((0, 0), -1))\nprint(temperatures[point], old)\nprint(list(temperatures.keys()))",
    "options": [
      "[(0, 1), (1, 0)]",
      "[(1, 0), (0, 1)]",
      "[(0, 0), (0, 1), (1, 0)]",
      "[23, 19]"
    ],
    "answer": 0,
    "explanation": "The key (0, 0) is removed. The original key (0, 1) keeps its position ahead of the later-added key (1, 0). keys() supplies keys rather than values.",
    "bank": "B",
    "week": 6,
    "program": "B19",
    "source": "Mock B · B19 · Q93",
    "note": ""
  },
  {
    "id": "mock-B-094",
    "topic": "dicts",
    "title": "Which pair gives the first printed line and the final dictionary length?",
    "code": "temperatures = {(0, 0): 18, (0, 1): 21}\npoint = (1, 0)\ntemperatures[point] = 19\ntemperatures[(0, 1)] += 2\nold = temperatures.pop((0, 0))\nprint(temperatures.get((0, 0), -1))\nprint(temperatures[point], old)\nprint(list(temperatures.keys()))",
    "options": [
      "-1 and 2",
      "18 and 2",
      "-1 and 3",
      "0 and 3"
    ],
    "answer": 0,
    "explanation": "The removed key is absent, so get returns the supplied default -1. get does not insert a missing key, leaving the dictionary with two entries.",
    "bank": "B",
    "week": 6,
    "program": "B19",
    "source": "Mock B · B19 · Q94",
    "note": ""
  },
  {
    "id": "mock-B-095",
    "topic": "dicts",
    "title": "Change only point = (1, 0) to point = [1, 0]. What happens first?",
    "code": "temperatures = {(0, 0): 18, (0, 1): 21}\npoint = (1, 0)\ntemperatures[point] = 19\ntemperatures[(0, 1)] += 2\nold = temperatures.pop((0, 0))\nprint(temperatures.get((0, 0), -1))\nprint(temperatures[point], old)\nprint(list(temperatures.keys()))",
    "options": [
      "The list is automatically converted into a tuple key.",
      "A SyntaxError occurs when the list is created.",
      "The first print runs, then temperatures[point] raises a KeyError.",
      "A TypeError occurs at temperatures[point] = 19, before any output."
    ],
    "answer": 3,
    "explanation": "A list is mutable and unhashable, so it cannot be used as a dictionary key. Creating the list itself is valid; the insertion fails.",
    "bank": "B",
    "week": 6,
    "program": "B19",
    "source": "Mock B · B19 · Q95",
    "note": ""
  },
  {
    "id": "mock-B-096",
    "topic": "dicts",
    "title": "After the update, what is stock[\"nut\"]?",
    "code": "stock = {\"bolt\": 4, \"nut\": 6}\nkeys_view = stock.keys()\nsaved_keys = list(stock.keys())\nstock.update({\"nut\": 8, \"washer\": 3})\ntotal = 0\nfor item, amount in stock.items():\n    total += amount\nprint(list(keys_view))\nprint(saved_keys)\nprint(total)\nprint(\"nut\" in stock, 8 in stock.values())",
    "options": [
      "8",
      "3",
      "6",
      "14"
    ],
    "answer": 0,
    "explanation": "update replaces the existing value for \"nut\" with 8; it does not add 8 to 6.",
    "bank": "B",
    "week": 6,
    "program": "B20",
    "source": "Mock B · B20 · Q96",
    "note": ""
  },
  {
    "id": "mock-B-097",
    "topic": "dicts",
    "title": "What is the first printed line?",
    "code": "stock = {\"bolt\": 4, \"nut\": 6}\nkeys_view = stock.keys()\nsaved_keys = list(stock.keys())\nstock.update({\"nut\": 8, \"washer\": 3})\ntotal = 0\nfor item, amount in stock.items():\n    total += amount\nprint(list(keys_view))\nprint(saved_keys)\nprint(total)\nprint(\"nut\" in stock, 8 in stock.values())",
    "options": [
      "['bolt', 'nut']",
      "['bolt', 'nut', 'washer']",
      "['nut', 'washer']",
      "[4, 8, 3]"
    ],
    "answer": 1,
    "explanation": "keys_view reflects the modified original dictionary. The new key \"washer\" appears after \"bolt\" and \"nut\".",
    "bank": "B",
    "week": 6,
    "program": "B20",
    "source": "Mock B · B20 · Q97",
    "note": ""
  },
  {
    "id": "mock-B-098",
    "topic": "dicts",
    "title": "What is the second printed line?",
    "code": "stock = {\"bolt\": 4, \"nut\": 6}\nkeys_view = stock.keys()\nsaved_keys = list(stock.keys())\nstock.update({\"nut\": 8, \"washer\": 3})\ntotal = 0\nfor item, amount in stock.items():\n    total += amount\nprint(list(keys_view))\nprint(saved_keys)\nprint(total)\nprint(\"nut\" in stock, 8 in stock.values())",
    "options": [
      "[4, 6]",
      "['bolt', 'nut']",
      "['bolt', 'nut', 'washer']",
      "['nut', 'washer']"
    ],
    "answer": 1,
    "explanation": "saved_keys is a separate list created before the update, so later dictionary changes do not add entries to that list.",
    "bank": "B",
    "week": 6,
    "program": "B20",
    "source": "Mock B · B20 · Q98",
    "note": ""
  },
  {
    "id": "mock-B-099",
    "topic": "dicts",
    "title": "What are the last two printed lines?",
    "code": "stock = {\"bolt\": 4, \"nut\": 6}\nkeys_view = stock.keys()\nsaved_keys = list(stock.keys())\nstock.update({\"nut\": 8, \"washer\": 3})\ntotal = 0\nfor item, amount in stock.items():\n    total += amount\nprint(list(keys_view))\nprint(saved_keys)\nprint(total)\nprint(\"nut\" in stock, 8 in stock.values())",
    "options": [
      "13\nTrue False",
      "15\nTrue False",
      "15\nTrue True",
      "21\nTrue True"
    ],
    "answer": 2,
    "explanation": "The values are 4, 8, and 3, summing to 15. \"nut\" is a key, and 8 is among the values.",
    "bank": "B",
    "week": 6,
    "program": "B20",
    "source": "Mock B · B20 · Q99",
    "note": ""
  },
  {
    "id": "mock-B-100",
    "topic": "dicts",
    "title": "Replace stock.update({\"nut\": 8, \"washer\": 3}) with stock = {\"nut\": 8, \"washer\": 3}. Which pair gives the first printed line and the final value of total?",
    "code": "stock = {\"bolt\": 4, \"nut\": 6}\nkeys_view = stock.keys()\nsaved_keys = list(stock.keys())\nstock.update({\"nut\": 8, \"washer\": 3})\ntotal = 0\nfor item, amount in stock.items():\n    total += amount\nprint(list(keys_view))\nprint(saved_keys)\nprint(total)\nprint(\"nut\" in stock, 8 in stock.values())",
    "options": [
      "['bolt', 'nut'] and 11",
      "['nut', 'washer'] and 11",
      "['bolt', 'nut'] and 15",
      "['bolt', 'nut', 'washer'] and 15"
    ],
    "answer": 0,
    "explanation": "The assignment rebinds stock to a new dictionary. keys_view still refers to the original dictionary with keys \"bolt\" and \"nut\". The loop uses the new dictionary, so total is 8 + 3 = 11.",
    "bank": "B",
    "week": 6,
    "program": "B20",
    "source": "Mock B · B20 · Q100",
    "note": ""
  },
  {
    "id": "mock-C-001",
    "topic": "arithmetic",
    "title": "What is the first printed line?",
    "code": "quiz = 14\nlab = 19\nscore = (quiz + 3 * lab) / 4\nwhole = int(score)\npassed = score >= 18\nprint(score, whole)\nprint(passed)",
    "options": [
      "17 17",
      "17.75 18",
      "28.25 28",
      "17.75 17"
    ],
    "answer": 3,
    "explanation": "The numerator is 14 + 3 * 19 = 71. Division gives 17.75, and int(17.75) gives 17.",
    "bank": "C",
    "week": 1,
    "program": "C01",
    "source": "Mock C · C01 · Q1",
    "note": "The scores and weights are fictional, not the ENG 101 grading scheme."
  },
  {
    "id": "mock-C-002",
    "topic": "arithmetic",
    "title": "What is the type of passed?",
    "code": "quiz = 14\nlab = 19\nscore = (quiz + 3 * lab) / 4\nwhole = int(score)\npassed = score >= 18\nprint(score, whole)\nprint(passed)",
    "options": [
      "str",
      "float",
      "bool",
      "int"
    ],
    "answer": 2,
    "explanation": "The comparison score >= 18 returns a Boolean value; here it is False.",
    "bank": "C",
    "week": 1,
    "program": "C01",
    "source": "Mock C · C01 · Q2",
    "note": "The scores and weights are fictional, not the ENG 101 grading scheme."
  },
  {
    "id": "mock-C-003",
    "topic": "arithmetic",
    "title": "Change only quiz = 14 to quiz = 18. What is the new value of score?",
    "code": "quiz = 14\nlab = 19\nscore = (quiz + 3 * lab) / 4\nwhole = int(score)\npassed = score >= 18\nprint(score, whole)\nprint(passed)",
    "options": [
      "27.75",
      "18.75",
      "18.0",
      "19.0"
    ],
    "answer": 1,
    "explanation": "The revised expression is (18 + 3 * 19) / 4 = 75 / 4 = 18.75.",
    "bank": "C",
    "week": 1,
    "program": "C01",
    "source": "Mock C · C01 · Q3",
    "note": "The scores and weights are fictional, not the ENG 101 grading scheme."
  },
  {
    "id": "mock-C-004",
    "topic": "arithmetic",
    "title": "Replace / 4 with // 4 in the score calculation. What are the value and type of score?",
    "code": "quiz = 14\nlab = 19\nscore = (quiz + 3 * lab) / 4\nwhole = int(score)\npassed = score >= 18\nprint(score, whole)\nprint(passed)",
    "options": [
      "17.75, of type float",
      "17, of type int",
      "17.0, of type float",
      "18, of type int"
    ],
    "answer": 1,
    "explanation": "Both operands are integers, so 71 // 4 produces the integer 17.",
    "bank": "C",
    "week": 1,
    "program": "C01",
    "source": "Mock C · C01 · Q4",
    "note": "The scores and weights are fictional, not the ENG 101 grading scheme."
  },
  {
    "id": "mock-C-005",
    "topic": "arithmetic",
    "title": "Replace the score expression with quiz + 3 * lab / 4. What value is assigned to score?",
    "code": "quiz = 14\nlab = 19\nscore = (quiz + 3 * lab) / 4\nwhole = int(score)\npassed = score >= 18\nprint(score, whole)\nprint(passed)",
    "options": [
      "71.0",
      "17.75",
      "156.75",
      "28.25"
    ],
    "answer": 3,
    "explanation": "Multiplication and division occur before addition: 14 + (3 * 19 / 4) = 28.25.",
    "bank": "C",
    "week": 1,
    "program": "C01",
    "source": "Mock C · C01 · Q5",
    "note": "The scores and weights are fictional, not the ENG 101 grading scheme."
  },
  {
    "id": "mock-C-006",
    "topic": "arithmetic",
    "title": "What is the first printed line?",
    "code": "a = -7\nb = 4\nquotient = a // b\nremainder = a % b\nrebuilt = quotient * b + remainder\nprint(quotient, remainder)\nprint(rebuilt)\nprint(-2 ** 2, (-2) ** 2)\nprint(a / b)",
    "options": [
      "-2 -1",
      "-1 3",
      "-2 1",
      "-1 -3"
    ],
    "answer": 2,
    "explanation": "-7 // 4 is -2. The remainder is 1 because -7 = (-2) * 4 + 1.",
    "bank": "C",
    "week": 1,
    "program": "C02",
    "source": "Mock C · C02 · Q6",
    "note": ""
  },
  {
    "id": "mock-C-007",
    "topic": "arithmetic",
    "title": "What value is printed for rebuilt?",
    "code": "a = -7\nb = 4\nquotient = a // b\nremainder = a % b\nrebuilt = quotient * b + remainder\nprint(quotient, remainder)\nprint(rebuilt)\nprint(-2 ** 2, (-2) ** 2)\nprint(a / b)",
    "options": [
      "-7",
      "-3",
      "-9",
      "7"
    ],
    "answer": 0,
    "explanation": "The expression reconstructs a: (-2) * 4 + 1 = -7.",
    "bank": "C",
    "week": 1,
    "program": "C02",
    "source": "Mock C · C02 · Q7",
    "note": ""
  },
  {
    "id": "mock-C-008",
    "topic": "arithmetic",
    "title": "What is the third printed line?",
    "code": "a = -7\nb = 4\nquotient = a // b\nremainder = a % b\nrebuilt = quotient * b + remainder\nprint(quotient, remainder)\nprint(rebuilt)\nprint(-2 ** 2, (-2) ** 2)\nprint(a / b)",
    "options": [
      "-4 -4",
      "4 -4",
      "4 4",
      "-4 4"
    ],
    "answer": 3,
    "explanation": "-2 ** 2 means -(2 ** 2), whereas (-2) ** 2 squares the negative number.",
    "bank": "C",
    "week": 1,
    "program": "C02",
    "source": "Mock C · C02 · Q8",
    "note": ""
  },
  {
    "id": "mock-C-009",
    "topic": "arithmetic",
    "title": "Replace quotient = a // b with quotient = int(a / b). What value is now printed for rebuilt?",
    "code": "a = -7\nb = 4\nquotient = a // b\nremainder = a % b\nrebuilt = quotient * b + remainder\nprint(quotient, remainder)\nprint(rebuilt)\nprint(-2 ** 2, (-2) ** 2)\nprint(a / b)",
    "options": [
      "-7",
      "-9",
      "3",
      "-3"
    ],
    "answer": 3,
    "explanation": "int(-1.75) is -1. The unchanged remainder is 1, so rebuilt becomes (-1) * 4 + 1 = -3.",
    "bank": "C",
    "week": 1,
    "program": "C02",
    "source": "Mock C · C02 · Q9",
    "note": ""
  },
  {
    "id": "mock-C-010",
    "topic": "arithmetic",
    "title": "Change only b = 4 to b = -4. What is the new first printed line?",
    "code": "a = -7\nb = 4\nquotient = a // b\nremainder = a % b\nrebuilt = quotient * b + remainder\nprint(quotient, remainder)\nprint(rebuilt)\nprint(-2 ** 2, (-2) ** 2)\nprint(a / b)",
    "options": [
      "1 -3",
      "1 3",
      "2 1",
      "-2 -3"
    ],
    "answer": 0,
    "explanation": "The quotient is floor(1.75) = 1. Reconstruction gives -7 = 1 * (-4) + (-3).",
    "bank": "C",
    "week": 1,
    "program": "C02",
    "source": "Mock C · C02 · Q10",
    "note": ""
  },
  {
    "id": "mock-C-011",
    "topic": "types",
    "title": "What is the first printed line?",
    "code": "value = 5\nsaved = value\nvalue += 3\nvalue /= 2\ntext = str(saved)\nlabel = text + \"0\"\nprint(value, saved)\nprint(label)\nprint(value == saved)",
    "options": [
      "4.0 4.0",
      "4 5",
      "4.0 5",
      "8.0 5"
    ],
    "answer": 2,
    "explanation": "value changes from 5 to 8 to 4.0. saved still refers to the original integer 5.",
    "bank": "C",
    "week": 1,
    "program": "C03",
    "source": "Mock C · C03 · Q11",
    "note": ""
  },
  {
    "id": "mock-C-012",
    "topic": "types",
    "title": "What is the type of label?",
    "code": "value = 5\nsaved = value\nvalue += 3\nvalue /= 2\ntext = str(saved)\nlabel = text + \"0\"\nprint(value, saved)\nprint(label)\nprint(value == saved)",
    "options": [
      "float",
      "int",
      "bool",
      "str"
    ],
    "answer": 3,
    "explanation": "str(saved) is the string \"5\". Concatenating \"0\" produces the string \"50\".",
    "bank": "C",
    "week": 1,
    "program": "C03",
    "source": "Mock C · C03 · Q12",
    "note": ""
  },
  {
    "id": "mock-C-013",
    "topic": "types",
    "title": "Replace value /= 2 with value //= 2. What are the final value and type of value?",
    "code": "value = 5\nsaved = value\nvalue += 3\nvalue /= 2\ntext = str(saved)\nlabel = text + \"0\"\nprint(value, saved)\nprint(label)\nprint(value == saved)",
    "options": [
      "4, of type int",
      "2, of type int",
      "4.0, of type float",
      "8, of type int"
    ],
    "answer": 0,
    "explanation": "The integer operation 8 // 2 produces the integer 4, unlike true division.",
    "bank": "C",
    "week": 1,
    "program": "C03",
    "source": "Mock C · C03 · Q13",
    "note": ""
  },
  {
    "id": "mock-C-014",
    "topic": "types",
    "title": "Append print(label + 1) to the program. What happens at that new line?",
    "code": "value = 5\nsaved = value\nvalue += 3\nvalue /= 2\ntext = str(saved)\nlabel = text + \"0\"\nprint(value, saved)\nprint(label)\nprint(value == saved)",
    "options": [
      "It prints 501.",
      "It prints 51.",
      "It prints 50.0.",
      "A TypeError is raised."
    ],
    "answer": 3,
    "explanation": "The + operator does not concatenate a string and an integer without explicit conversion.",
    "bank": "C",
    "week": 1,
    "program": "C03",
    "source": "Mock C · C03 · Q14",
    "note": ""
  },
  {
    "id": "mock-C-015",
    "topic": "types",
    "title": "Replace text = str(saved) with text = str(value). What is the new second printed line?",
    "code": "value = 5\nsaved = value\nvalue += 3\nvalue /= 2\ntext = str(saved)\nlabel = text + \"0\"\nprint(value, saved)\nprint(label)\nprint(value == saved)",
    "options": [
      "40",
      "4.00",
      "4.0",
      "50"
    ],
    "answer": 1,
    "explanation": "str(4.0) is \"4.0\". Appending the character \"0\" produces \"4.00\", not a new numeric value.",
    "bank": "C",
    "week": 1,
    "program": "C03",
    "source": "Mock C · C03 · Q15",
    "note": ""
  },
  {
    "id": "mock-C-021",
    "topic": "for",
    "title": "What is the first printed line?",
    "code": "digits = \"24153\"\nrises = 0\nlargest_jump = 0\nfor i in range(1, len(digits)):\n    jump = int(digits[i]) - int(digits[i - 1])\n    if jump > 0:\n        rises += 1\n    if jump > largest_jump:\n        largest_jump = jump\nprint(rises, largest_jump)\nprint(i)",
    "options": [
      "4 2",
      "2 5",
      "3 4",
      "2 4"
    ],
    "answer": 3,
    "explanation": "The successive jumps are 2, -3, 4, and -2. Two are positive, and the largest positive jump is 4.",
    "bank": "C",
    "week": 2,
    "program": "C05",
    "source": "Mock C · C05 · Q21",
    "note": ""
  },
  {
    "id": "mock-C-022",
    "topic": "for",
    "title": "How many times does the loop body execute?",
    "code": "digits = \"24153\"\nrises = 0\nlargest_jump = 0\nfor i in range(1, len(digits)):\n    jump = int(digits[i]) - int(digits[i - 1])\n    if jump > 0:\n        rises += 1\n    if jump > largest_jump:\n        largest_jump = jump\nprint(rises, largest_jump)\nprint(i)",
    "options": [
      "5",
      "6",
      "4",
      "3"
    ],
    "answer": 2,
    "explanation": "range(1, 5) supplies the four indices 1, 2, 3, and 4.",
    "bank": "C",
    "week": 2,
    "program": "C05",
    "source": "Mock C · C05 · Q22",
    "note": ""
  },
  {
    "id": "mock-C-023",
    "topic": "for",
    "title": "What is the second printed line?",
    "code": "digits = \"24153\"\nrises = 0\nlargest_jump = 0\nfor i in range(1, len(digits)):\n    jump = int(digits[i]) - int(digits[i - 1])\n    if jump > 0:\n        rises += 1\n    if jump > largest_jump:\n        largest_jump = jump\nprint(rises, largest_jump)\nprint(i)",
    "options": [
      "4",
      "3",
      "0",
      "5"
    ],
    "answer": 0,
    "explanation": "The loop variable retains its final value, 4, after the loop finishes.",
    "bank": "C",
    "week": 2,
    "program": "C05",
    "source": "Mock C · C05 · Q23",
    "note": ""
  },
  {
    "id": "mock-C-024",
    "topic": "for",
    "title": "Change only digits = \"24153\" to digits = \"444\". What is the new first printed line?",
    "code": "digits = \"24153\"\nrises = 0\nlargest_jump = 0\nfor i in range(1, len(digits)):\n    jump = int(digits[i]) - int(digits[i - 1])\n    if jump > 0:\n        rises += 1\n    if jump > largest_jump:\n        largest_jump = jump\nprint(rises, largest_jump)\nprint(i)",
    "options": [
      "3 4",
      "0 0",
      "0 4",
      "2 0"
    ],
    "answer": 1,
    "explanation": "Both adjacent differences are zero, so neither the rise count nor largest_jump increases.",
    "bank": "C",
    "week": 2,
    "program": "C05",
    "source": "Mock C · C05 · Q24",
    "note": ""
  },
  {
    "id": "mock-C-025",
    "topic": "for",
    "title": "Start the range at 0 instead of 1. Which calculation is performed in the first loop iteration?",
    "code": "digits = \"24153\"\nrises = 0\nlargest_jump = 0\nfor i in range(1, len(digits)):\n    jump = int(digits[i]) - int(digits[i - 1])\n    if jump > 0:\n        rises += 1\n    if jump > largest_jump:\n        largest_jump = jump\nprint(rises, largest_jump)\nprint(i)",
    "options": [
      "2 - 2",
      "4 - 2",
      "2 - 3",
      "2 - 0"
    ],
    "answer": 2,
    "explanation": "At i = 0, i - 1 is -1, which selects the final character \"3\". This introduces a last-to-first comparison.",
    "bank": "C",
    "week": 2,
    "program": "C05",
    "source": "Mock C · C05 · Q25",
    "note": ""
  },
  {
    "id": "mock-C-026",
    "topic": "while",
    "title": "What is the first printed line?",
    "code": "n = 45\nsteps = 0\nodd_steps = 0\nwhile n > 1:\n    if n % 2 == 1:\n        odd_steps += 1\n    n //= 2\n    steps += 1\nprint(n, steps)\nprint(odd_steps)",
    "options": [
      "1 6",
      "1 5",
      "0 6",
      "2 4"
    ],
    "answer": 1,
    "explanation": "The successive updated values are 22, 11, 5, 2, and 1. The loop stops after five updates.",
    "bank": "C",
    "week": 2,
    "program": "C06",
    "source": "Mock C · C06 · Q26",
    "note": ""
  },
  {
    "id": "mock-C-027",
    "topic": "while",
    "title": "What is the second printed line?",
    "code": "n = 45\nsteps = 0\nodd_steps = 0\nwhile n > 1:\n    if n % 2 == 1:\n        odd_steps += 1\n    n //= 2\n    steps += 1\nprint(n, steps)\nprint(odd_steps)",
    "options": [
      "4",
      "2",
      "5",
      "3"
    ],
    "answer": 3,
    "explanation": "The tested values at the start of iterations are 45, 22, 11, 5, and 2. Three of these are odd.",
    "bank": "C",
    "week": 2,
    "program": "C06",
    "source": "Mock C · C06 · Q27",
    "note": ""
  },
  {
    "id": "mock-C-028",
    "topic": "while",
    "title": "Change only the initial assignment to n = 1. What is the first printed line?",
    "code": "n = 45\nsteps = 0\nodd_steps = 0\nwhile n > 1:\n    if n % 2 == 1:\n        odd_steps += 1\n    n //= 2\n    steps += 1\nprint(n, steps)\nprint(odd_steps)",
    "options": [
      "0 0",
      "0 1",
      "1 0",
      "1 1"
    ],
    "answer": 2,
    "explanation": "The initial condition 1 > 1 is False, so no loop iteration occurs.",
    "bank": "C",
    "week": 2,
    "program": "C06",
    "source": "Mock C · C06 · Q28",
    "note": ""
  },
  {
    "id": "mock-C-029",
    "topic": "while",
    "title": "Replace while n > 1: with while n >= 1:. What is the first printed line?",
    "code": "n = 45\nsteps = 0\nodd_steps = 0\nwhile n > 1:\n    if n % 2 == 1:\n        odd_steps += 1\n    n //= 2\n    steps += 1\nprint(n, steps)\nprint(odd_steps)",
    "options": [
      "1 6",
      "1 5",
      "0 6",
      "0 5"
    ],
    "answer": 2,
    "explanation": "The revised condition permits one extra iteration at n = 1, which changes n to 0.",
    "bank": "C",
    "week": 2,
    "program": "C06",
    "source": "Mock C · C06 · Q29",
    "note": ""
  },
  {
    "id": "mock-C-030",
    "topic": "while",
    "title": "Remove only the line n //= 2. Ignoring external interruption and resource limits, what happens when the modified program runs?",
    "code": "n = 45\nsteps = 0\nodd_steps = 0\nwhile n > 1:\n    if n % 2 == 1:\n        odd_steps += 1\n    n //= 2\n    steps += 1\nprint(n, steps)\nprint(odd_steps)",
    "options": [
      "It prints 45 0.",
      "It prints 1 5.",
      "The loop is skipped.",
      "The loop does not terminate."
    ],
    "answer": 3,
    "explanation": "n remains 45, so n > 1 never becomes False. The counters increase, but the print statements are never reached.",
    "bank": "C",
    "week": 2,
    "program": "C06",
    "source": "Mock C · C06 · Q30",
    "note": ""
  },
  {
    "id": "mock-C-031",
    "topic": "strings",
    "title": "What is the first printed line?",
    "code": "code = \"R2D4R6\"\ndigits = \"\"\ntotal = 0\nfor char in code:\n    if char in \"0123456789\":\n        digits = char + digits\n        total += int(char)\nprint(digits)\nprint(code[1::2])\nprint(total)",
    "options": [
      "RDR",
      "12",
      "642",
      "246"
    ],
    "answer": 2,
    "explanation": "Each digit is placed at the front of digits, producing \"2\", then \"42\", then \"642\".",
    "bank": "C",
    "week": 3,
    "program": "C07",
    "source": "Mock C · C07 · Q31",
    "note": ""
  },
  {
    "id": "mock-C-032",
    "topic": "strings",
    "title": "What is the last printed line?",
    "code": "code = \"R2D4R6\"\ndigits = \"\"\ntotal = 0\nfor char in code:\n    if char in \"0123456789\":\n        digits = char + digits\n        total += int(char)\nprint(digits)\nprint(code[1::2])\nprint(total)",
    "options": [
      "12",
      "3",
      "642",
      "246"
    ],
    "answer": 0,
    "explanation": "The numeric total is 2 + 4 + 6 = 12, not a concatenation of digit characters.",
    "bank": "C",
    "week": 3,
    "program": "C07",
    "source": "Mock C · C07 · Q32",
    "note": ""
  },
  {
    "id": "mock-C-033",
    "topic": "strings",
    "title": "What is the second printed line?",
    "code": "code = \"R2D4R6\"\ndigits = \"\"\ntotal = 0\nfor char in code:\n    if char in \"0123456789\":\n        digits = char + digits\n        total += int(char)\nprint(digits)\nprint(code[1::2])\nprint(total)",
    "options": [
      "2D4R6",
      "246",
      "642",
      "RDR"
    ],
    "answer": 1,
    "explanation": "The slice starts at index 1 and takes every second character: indices 1, 3, and 5.",
    "bank": "C",
    "week": 3,
    "program": "C07",
    "source": "Mock C · C07 · Q33",
    "note": ""
  },
  {
    "id": "mock-C-034",
    "topic": "strings",
    "title": "Replace digits = char + digits with digits = digits + char. What is the new first printed line?",
    "code": "code = \"R2D4R6\"\ndigits = \"\"\ntotal = 0\nfor char in code:\n    if char in \"0123456789\":\n        digits = char + digits\n        total += int(char)\nprint(digits)\nprint(code[1::2])\nprint(total)",
    "options": [
      "12",
      "246",
      "642",
      "R2D4R6"
    ],
    "answer": 1,
    "explanation": "Appending each digit to the end preserves the order in which the digits are encountered.",
    "bank": "C",
    "week": 3,
    "program": "C07",
    "source": "Mock C · C07 · Q34",
    "note": ""
  },
  {
    "id": "mock-C-035",
    "topic": "strings",
    "title": "Why does building digits not alter the original value of code?",
    "code": "code = \"R2D4R6\"\ndigits = \"\"\ntotal = 0\nfor char in code:\n    if char in \"0123456789\":\n        digits = char + digits\n        total += int(char)\nprint(digits)\nprint(code[1::2])\nprint(total)",
    "options": [
      "The loop makes code a list.",
      "Every assignment changes both string variables.",
      "Strings are changed only at even indices.",
      "Concatenation builds strings assigned to digits, not to code."
    ],
    "answer": 3,
    "explanation": "The loop reads characters from code. The concatenation result is assigned to digits; code is never reassigned or mutated.",
    "bank": "C",
    "week": 3,
    "program": "C07",
    "source": "Mock C · C07 · Q35",
    "note": ""
  },
  {
    "id": "mock-C-036",
    "topic": "while",
    "title": "What is the first printed line?",
    "code": "target = 30\nguess = 0\nchecks = 0\nwhile guess <= 8:\n    checks += 1\n    if guess * (guess + 1) == target:\n        break\n    guess += 1\nprint(guess, checks)\nprint(guess <= 8)",
    "options": [
      "5 5",
      "6 5",
      "5 6",
      "6 6"
    ],
    "answer": 2,
    "explanation": "The candidates 0, 1, 2, 3, 4, and 5 are checked. The sixth check succeeds because 5 * 6 = 30.",
    "bank": "C",
    "week": 3,
    "program": "C08",
    "source": "Mock C · C08 · Q36",
    "note": ""
  },
  {
    "id": "mock-C-037",
    "topic": "while",
    "title": "What is the second printed line?",
    "code": "target = 30\nguess = 0\nchecks = 0\nwhile guess <= 8:\n    checks += 1\n    if guess * (guess + 1) == target:\n        break\n    guess += 1\nprint(guess, checks)\nprint(guess <= 8)",
    "options": [
      "5",
      "None",
      "True",
      "False"
    ],
    "answer": 2,
    "explanation": "The successful candidate is 5, which is within the permitted search range.",
    "bank": "C",
    "week": 3,
    "program": "C08",
    "source": "Mock C · C08 · Q37",
    "note": ""
  },
  {
    "id": "mock-C-038",
    "topic": "while",
    "title": "How many times is guess += 1 executed in the original program?",
    "code": "target = 30\nguess = 0\nchecks = 0\nwhile guess <= 8:\n    checks += 1\n    if guess * (guess + 1) == target:\n        break\n    guess += 1\nprint(guess, checks)\nprint(guess <= 8)",
    "options": [
      "4",
      "6",
      "5",
      "9"
    ],
    "answer": 2,
    "explanation": "The update follows each unsuccessful check at 0 through 4. break skips it after the successful check at 5.",
    "bank": "C",
    "week": 3,
    "program": "C08",
    "source": "Mock C · C08 · Q38",
    "note": ""
  },
  {
    "id": "mock-C-039",
    "topic": "while",
    "title": "Change only target = 30 to target = 20. What is the first printed line?",
    "code": "target = 30\nguess = 0\nchecks = 0\nwhile guess <= 8:\n    checks += 1\n    if guess * (guess + 1) == target:\n        break\n    guess += 1\nprint(guess, checks)\nprint(guess <= 8)",
    "options": [
      "4 5",
      "5 5",
      "4 4",
      "5 6"
    ],
    "answer": 0,
    "explanation": "The candidate 4 succeeds because 4 * 5 = 20. Counting from candidate 0 gives five checks.",
    "bank": "C",
    "week": 3,
    "program": "C08",
    "source": "Mock C · C08 · Q39",
    "note": ""
  },
  {
    "id": "mock-C-040",
    "topic": "while",
    "title": "Change only target = 30 to target = 31. What is the first printed line?",
    "code": "target = 30\nguess = 0\nchecks = 0\nwhile guess <= 8:\n    checks += 1\n    if guess * (guess + 1) == target:\n        break\n    guess += 1\nprint(guess, checks)\nprint(guess <= 8)",
    "options": [
      "9 9",
      "5 6",
      "9 10",
      "8 9"
    ],
    "answer": 0,
    "explanation": "No candidate from 0 through 8 succeeds. Nine checks occur, and the final update makes guess equal to 9 before the condition fails.",
    "bank": "C",
    "week": 3,
    "program": "C08",
    "source": "Mock C · C08 · Q40",
    "note": ""
  },
  {
    "id": "mock-C-041",
    "topic": "while",
    "title": "How many iterations are completed?",
    "code": "target = 0.125\nlow = 0.0\nhigh = 1.0\ntolerance = 0.125\nsteps = 0\nwhile high - low > tolerance:\n    mid = (low + high) / 2\n    if mid ** 3 < target:\n        low = mid\n    else:\n        high = mid\n    steps += 1\nestimate = (low + high) / 2\nprint(steps)\nprint(low, high)\nprint(estimate)",
    "options": [
      "4",
      "2",
      "3",
      "1"
    ],
    "answer": 2,
    "explanation": "The interval widths are 1, 0.5, 0.25, and 0.125. The loop stops when the width is no longer greater than the tolerance.",
    "bank": "C",
    "week": 3,
    "program": "C09",
    "source": "Mock C · C09 · Q41",
    "note": "The intended root is the nonnegative cube root of target; ignore roundoff."
  },
  {
    "id": "mock-C-042",
    "topic": "while",
    "title": "What value is printed for estimate?",
    "code": "target = 0.125\nlow = 0.0\nhigh = 1.0\ntolerance = 0.125\nsteps = 0\nwhile high - low > tolerance:\n    mid = (low + high) / 2\n    if mid ** 3 < target:\n        low = mid\n    else:\n        high = mid\n    steps += 1\nestimate = (low + high) / 2\nprint(steps)\nprint(low, high)\nprint(estimate)",
    "options": [
      "0.46875",
      "0.5",
      "0.375",
      "0.4375"
    ],
    "answer": 3,
    "explanation": "The final bracket is [0.375, 0.5], so its midpoint is (0.375 + 0.5) / 2 = 0.4375.",
    "bank": "C",
    "week": 3,
    "program": "C09",
    "source": "Mock C · C09 · Q42",
    "note": "The intended root is the nonnegative cube root of target; ignore roundoff."
  },
  {
    "id": "mock-C-043",
    "topic": "while",
    "title": "Using the final bracket width alone, what is the guaranteed absolute error bound for the final midpoint estimate? Assume the root remains bracketed and ignore roundoff.",
    "code": "target = 0.125\nlow = 0.0\nhigh = 1.0\ntolerance = 0.125\nsteps = 0\nwhile high - low > tolerance:\n    mid = (low + high) / 2\n    if mid ** 3 < target:\n        low = mid\n    else:\n        high = mid\n    steps += 1\nestimate = (low + high) / 2\nprint(steps)\nprint(low, high)\nprint(estimate)",
    "options": [
      "At most 0.03125.",
      "Exactly 0.125.",
      "At most 0.0625.",
      "Exactly 0.0."
    ],
    "answer": 2,
    "explanation": "A bracketed root is at most half the width from the midpoint. Here the width is 0.125, so the bound is 0.0625.",
    "bank": "C",
    "week": 3,
    "program": "C09",
    "source": "Mock C · C09 · Q43",
    "note": "The intended root is the nonnegative cube root of target; ignore roundoff."
  },
  {
    "id": "mock-C-044",
    "topic": "while",
    "title": "Change only tolerance = 0.125 to tolerance = 0.0625. What is the new value of estimate?",
    "code": "target = 0.125\nlow = 0.0\nhigh = 1.0\ntolerance = 0.125\nsteps = 0\nwhile high - low > tolerance:\n    mid = (low + high) / 2\n    if mid ** 3 < target:\n        low = mid\n    else:\n        high = mid\n    steps += 1\nestimate = (low + high) / 2\nprint(steps)\nprint(low, high)\nprint(estimate)",
    "options": [
      "0.5",
      "0.453125",
      "0.4375",
      "0.46875"
    ],
    "answer": 3,
    "explanation": "One additional halving leaves [0.4375, 0.5], whose midpoint is 0.46875.",
    "bank": "C",
    "week": 3,
    "program": "C09",
    "source": "Mock C · C09 · Q44",
    "note": "The intended root is the nonnegative cube root of target; ignore roundoff."
  },
  {
    "id": "mock-C-045",
    "topic": "while",
    "title": "Why is replacing high = 1.0 with high = target unsuitable for this target?",
    "code": "target = 0.125\nlow = 0.0\nhigh = 1.0\ntolerance = 0.125\nsteps = 0\nwhile high - low > tolerance:\n    mid = (low + high) / 2\n    if mid ** 3 < target:\n        low = mid\n    else:\n        high = mid\n    steps += 1\nestimate = (low + high) / 2\nprint(steps)\nprint(low, high)\nprint(estimate)",
    "options": [
      "Bisection requires integer endpoints.",
      "The root becomes negative.",
      "The comparison always raises a TypeError.",
      "The resulting interval excludes the root 0.5."
    ],
    "answer": 3,
    "explanation": "For this target, high would be 0.125, below the root 0.5. The initial interval would not bracket the desired root.",
    "bank": "C",
    "week": 3,
    "program": "C09",
    "source": "Mock C · C09 · Q45",
    "note": "The intended root is the nonnegative cube root of target; ignore roundoff."
  },
  {
    "id": "mock-C-046",
    "topic": "functions",
    "title": "What value is assigned to first?",
    "code": "def sum_multiples(limit):\n    total = 0\n    for n in range(1, limit + 1):\n        if n % 3 == 0:\n            total += n\n    return total\n\nfirst = sum_multiples(7)\nsecond = sum_multiples(2)\nprint(first, second)\nprint(sum_multiples(0))",
    "options": [
      "3",
      "6",
      "9",
      "28"
    ],
    "answer": 2,
    "explanation": "The multiples of 3 between 1 and 7 inclusive are 3 and 6, giving 9.",
    "bank": "C",
    "week": 4,
    "program": "C10",
    "source": "Mock C · C10 · Q46",
    "note": "Assume limit is a nonnegative integer."
  },
  {
    "id": "mock-C-047",
    "topic": "functions",
    "title": "What is the last printed line?",
    "code": "def sum_multiples(limit):\n    total = 0\n    for n in range(1, limit + 1):\n        if n % 3 == 0:\n            total += n\n    return total\n\nfirst = sum_multiples(7)\nsecond = sum_multiples(2)\nprint(first, second)\nprint(sum_multiples(0))",
    "options": [
      "0",
      "3",
      "None",
      "9"
    ],
    "answer": 0,
    "explanation": "For limit = 0, range(1, 1) is empty. The function returns the initial total of 0.",
    "bank": "C",
    "week": 4,
    "program": "C10",
    "source": "Mock C · C10 · Q47",
    "note": "Assume limit is a nonnegative integer."
  },
  {
    "id": "mock-C-048",
    "topic": "functions",
    "title": "Why is second equal to zero rather than retaining the total from the first call?",
    "code": "def sum_multiples(limit):\n    total = 0\n    for n in range(1, limit + 1):\n        if n % 3 == 0:\n            total += n\n    return total\n\nfirst = sum_multiples(7)\nsecond = sum_multiples(2)\nprint(first, second)\nprint(sum_multiples(0))",
    "options": [
      "The first call deletes the function.",
      "Each call starts with its own local total = 0.",
      "Calling print resets all variables.",
      "The loop always resets first to zero."
    ],
    "answer": 1,
    "explanation": "Each function call has its own local variables. The call with limit = 2 finds no multiples of 3.",
    "bank": "C",
    "week": 4,
    "program": "C10",
    "source": "Mock C · C10 · Q48",
    "note": "Assume limit is a nonnegative integer."
  },
  {
    "id": "mock-C-049",
    "topic": "functions",
    "title": "Change the loop to for n in range(1, limit):. What does sum_multiples(6) return?",
    "code": "def sum_multiples(limit):\n    total = 0\n    for n in range(1, limit + 1):\n        if n % 3 == 0:\n            total += n\n    return total\n\nfirst = sum_multiples(7)\nsecond = sum_multiples(2)\nprint(first, second)\nprint(sum_multiples(0))",
    "options": [
      "3",
      "0",
      "9",
      "6"
    ],
    "answer": 0,
    "explanation": "The modified range excludes 6, leaving only the multiple 3.",
    "bank": "C",
    "week": 4,
    "program": "C10",
    "source": "Mock C · C10 · Q49",
    "note": "Assume limit is a nonnegative integer."
  },
  {
    "id": "mock-C-050",
    "topic": "functions",
    "title": "Indent return total to align with the if line, placing it inside the loop after the if block. What does sum_multiples(7) return?",
    "code": "def sum_multiples(limit):\n    total = 0\n    for n in range(1, limit + 1):\n        if n % 3 == 0:\n            total += n\n    return total\n\nfirst = sum_multiples(7)\nsecond = sum_multiples(2)\nprint(first, second)\nprint(sum_multiples(0))",
    "options": [
      "9",
      "None",
      "3",
      "0"
    ],
    "answer": 3,
    "explanation": "On the first iteration n is 1, so total stays zero. The newly indented return immediately exits the function.",
    "bank": "C",
    "week": 4,
    "program": "C10",
    "source": "Mock C · C10 · Q50",
    "note": "Assume limit is a nonnegative integer."
  },
  {
    "id": "mock-C-056",
    "topic": "functions",
    "title": "What is the first printed line?",
    "code": "def blend(a, b, weight=1):\n    return (weight * a + b) / (weight + 1)\n\nfirst = blend(2, 8)\nsecond = blend(2, 8, 3)\nthird = blend(b=2, a=8, weight=3)\nprint(first)\nprint(second)\nprint(third)",
    "options": [
      "5.0",
      "6.5",
      "10.0",
      "3.5"
    ],
    "answer": 0,
    "explanation": "The omitted weight uses its default of 1: (1 * 2 + 8) / (1 + 1) = 5.0.",
    "bank": "C",
    "week": 4,
    "program": "C12",
    "source": "Mock C · C12 · Q56",
    "note": ""
  },
  {
    "id": "mock-C-057",
    "topic": "functions",
    "title": "What is the second printed line?",
    "code": "def blend(a, b, weight=1):\n    return (weight * a + b) / (weight + 1)\n\nfirst = blend(2, 8)\nsecond = blend(2, 8, 3)\nthird = blend(b=2, a=8, weight=3)\nprint(first)\nprint(second)\nprint(third)",
    "options": [
      "6.5",
      "5.0",
      "14.0",
      "3.5"
    ],
    "answer": 3,
    "explanation": "With weight = 3, the result is (3 * 2 + 8) / 4 = 3.5.",
    "bank": "C",
    "week": 4,
    "program": "C12",
    "source": "Mock C · C12 · Q57",
    "note": ""
  },
  {
    "id": "mock-C-058",
    "topic": "functions",
    "title": "What is the third printed line?",
    "code": "def blend(a, b, weight=1):\n    return (weight * a + b) / (weight + 1)\n\nfirst = blend(2, 8)\nsecond = blend(2, 8, 3)\nthird = blend(b=2, a=8, weight=3)\nprint(first)\nprint(second)\nprint(third)",
    "options": [
      "26.0",
      "3.5",
      "5.0",
      "6.5"
    ],
    "answer": 3,
    "explanation": "Keyword names determine the bindings: a = 8, b = 2, and weight = 3. The result is 26 / 4 = 6.5.",
    "bank": "C",
    "week": 4,
    "program": "C12",
    "source": "Mock C · C12 · Q58",
    "note": ""
  },
  {
    "id": "mock-C-059",
    "topic": "functions",
    "title": "What happens in an additional call blend(2, 8, weight=-1)?",
    "code": "def blend(a, b, weight=1):\n    return (weight * a + b) / (weight + 1)\n\nfirst = blend(2, 8)\nsecond = blend(2, 8, 3)\nthird = blend(b=2, a=8, weight=3)\nprint(first)\nprint(second)\nprint(third)",
    "options": [
      "It returns -6.0.",
      "A ZeroDivisionError is raised.",
      "It returns None.",
      "It returns 6.0."
    ],
    "answer": 1,
    "explanation": "The denominator weight + 1 is zero. The function has no guard against this input.",
    "bank": "C",
    "week": 4,
    "program": "C12",
    "source": "Mock C · C12 · Q59",
    "note": ""
  },
  {
    "id": "mock-C-060",
    "topic": "functions",
    "title": "Which positional call produces the same numeric result as the call assigned to third?",
    "code": "def blend(a, b, weight=1):\n    return (weight * a + b) / (weight + 1)\n\nfirst = blend(2, 8)\nsecond = blend(2, 8, 3)\nthird = blend(b=2, a=8, weight=3)\nprint(first)\nprint(second)\nprint(third)",
    "options": [
      "blend(8, 2, 3)",
      "blend(2, 8, 3)",
      "blend(8, 2)",
      "blend(8, 2, 0)"
    ],
    "answer": 0,
    "explanation": "The parameter order is a, b, weight, so the matching positional arguments are 8, 2, and 3.",
    "bank": "C",
    "week": 4,
    "program": "C12",
    "source": "Mock C · C12 · Q60",
    "note": ""
  },
  {
    "id": "mock-C-061",
    "topic": "lists",
    "title": "What value is printed for moved?",
    "code": "point = (2, 5)\nx, y = point\nx, y = y, x\nmoved = (x + 1, y - 1)\nroute = point + moved\nprint(point)\nprint(moved)\nprint(route[::2])\nprint(route[-1])",
    "options": [
      "(6, 1)",
      "(5, 2)",
      "(3, 4)",
      "(6, 4)"
    ],
    "answer": 0,
    "explanation": "The swap sets x = 5 and y = 2. Therefore moved is (5 + 1, 2 - 1), or (6, 1).",
    "bank": "C",
    "week": 5,
    "program": "C13",
    "source": "Mock C · C13 · Q61",
    "note": ""
  },
  {
    "id": "mock-C-062",
    "topic": "lists",
    "title": "What is the first printed line?",
    "code": "point = (2, 5)\nx, y = point\nx, y = y, x\nmoved = (x + 1, y - 1)\nroute = point + moved\nprint(point)\nprint(moved)\nprint(route[::2])\nprint(route[-1])",
    "options": [
      "(6, 1)",
      "(2, 5)",
      "(5, 2)",
      "[2, 5]"
    ],
    "answer": 1,
    "explanation": "Changing the separate names x and y does not alter the tuple stored in point.",
    "bank": "C",
    "week": 5,
    "program": "C13",
    "source": "Mock C · C13 · Q62",
    "note": ""
  },
  {
    "id": "mock-C-063",
    "topic": "lists",
    "title": "What is the third printed line?",
    "code": "point = (2, 5)\nx, y = point\nx, y = y, x\nmoved = (x + 1, y - 1)\nroute = point + moved\nprint(point)\nprint(moved)\nprint(route[::2])\nprint(route[-1])",
    "options": [
      "(2, 5)",
      "(2, 6)",
      "(2, 5, 6, 1)",
      "(5, 1)"
    ],
    "answer": 1,
    "explanation": "route is (2, 5, 6, 1). Taking indices 0 and 2 produces the tuple (2, 6).",
    "bank": "C",
    "week": 5,
    "program": "C13",
    "source": "Mock C · C13 · Q63",
    "note": ""
  },
  {
    "id": "mock-C-064",
    "topic": "lists",
    "title": "Append point[0] = 9 to the program. What happens at that new line?",
    "code": "point = (2, 5)\nx, y = point\nx, y = y, x\nmoved = (x + 1, y - 1)\nroute = point + moved\nprint(point)\nprint(moved)\nprint(route[::2])\nprint(route[-1])",
    "options": [
      "A TypeError is raised.",
      "point becomes [9, 5].",
      "moved becomes (9, 1).",
      "point becomes (9, 5)."
    ],
    "answer": 0,
    "explanation": "A tuple does not support replacing an element by indexed assignment.",
    "bank": "C",
    "week": 5,
    "program": "C13",
    "source": "Mock C · C13 · Q64",
    "note": ""
  },
  {
    "id": "mock-C-065",
    "topic": "lists",
    "title": "Replace x, y = y, x with two lines, x = y followed by y = x. What value is printed for moved?",
    "code": "point = (2, 5)\nx, y = point\nx, y = y, x\nmoved = (x + 1, y - 1)\nroute = point + moved\nprint(point)\nprint(moved)\nprint(route[::2])\nprint(route[-1])",
    "options": [
      "(6, 4)",
      "(6, 1)",
      "(3, 1)",
      "(3, 4)"
    ],
    "answer": 0,
    "explanation": "The first line makes x equal to 5. The second then assigns that new x to y, so both are 5.",
    "bank": "C",
    "week": 5,
    "program": "C13",
    "source": "Mock C · C13 · Q65",
    "note": ""
  },
  {
    "id": "mock-C-066",
    "topic": "lists",
    "title": "What is values immediately after values[1:4] = [8, 9], before the next line runs?",
    "code": "values = [0, 1, 2, 3, 4]\nvalues[1:4] = [8, 9]\nvalues[2:2] = [6, 7]\nlast = values.pop()\nprint(values)\nprint(last, len(values))\nprint(values[::-1])",
    "options": [
      "[0, 1, 8, 9, 4]",
      "[0, 8, 9, 4]",
      "[8, 9, 4]",
      "[0, 8, 9, 3, 4]"
    ],
    "answer": 1,
    "explanation": "The slice replaces the elements at indices 1, 2, and 3 with the two elements 8 and 9.",
    "bank": "C",
    "week": 5,
    "program": "C14",
    "source": "Mock C · C14 · Q66",
    "note": ""
  },
  {
    "id": "mock-C-067",
    "topic": "lists",
    "title": "What is the first printed line?",
    "code": "values = [0, 1, 2, 3, 4]\nvalues[1:4] = [8, 9]\nvalues[2:2] = [6, 7]\nlast = values.pop()\nprint(values)\nprint(last, len(values))\nprint(values[::-1])",
    "options": [
      "[0, 8, 6, 7, 9, 4]",
      "[0, 8, 6, 7, 9]",
      "[0, 8, 6, 7]",
      "[0, 8, 9, 6, 7]"
    ],
    "answer": 1,
    "explanation": "The insertion adds 6 and 7 before 9. pop() then removes the final element, 4.",
    "bank": "C",
    "week": 5,
    "program": "C14",
    "source": "Mock C · C14 · Q67",
    "note": ""
  },
  {
    "id": "mock-C-068",
    "topic": "lists",
    "title": "What is the second printed line?",
    "code": "values = [0, 1, 2, 3, 4]\nvalues[1:4] = [8, 9]\nvalues[2:2] = [6, 7]\nlast = values.pop()\nprint(values)\nprint(last, len(values))\nprint(values[::-1])",
    "options": [
      "4 5",
      "4 6",
      "9 4",
      "7 5"
    ],
    "answer": 0,
    "explanation": "pop() returns the removed value 4. Five elements remain in values.",
    "bank": "C",
    "week": 5,
    "program": "C14",
    "source": "Mock C · C14 · Q68",
    "note": ""
  },
  {
    "id": "mock-C-069",
    "topic": "lists",
    "title": "Replace values[2:2] = [6, 7] with values[2:3] = [6, 7]. What is the first printed line?",
    "code": "values = [0, 1, 2, 3, 4]\nvalues[1:4] = [8, 9]\nvalues[2:2] = [6, 7]\nlast = values.pop()\nprint(values)\nprint(last, len(values))\nprint(values[::-1])",
    "options": [
      "[0, 6, 7, 9]",
      "[0, 8, 9]",
      "[0, 8, 6, 7]",
      "[0, 8, 6, 7, 9]"
    ],
    "answer": 2,
    "explanation": "The new slice replaces 9 rather than inserting before it. Removing the final 4 then leaves [0, 8, 6, 7].",
    "bank": "C",
    "week": 5,
    "program": "C14",
    "source": "Mock C · C14 · Q69",
    "note": ""
  },
  {
    "id": "mock-C-070",
    "topic": "lists",
    "title": "Why does values[2:2] = [6, 7] increase the list length by two?",
    "code": "values = [0, 1, 2, 3, 4]\nvalues[1:4] = [8, 9]\nvalues[2:2] = [6, 7]\nlast = values.pop()\nprint(values)\nprint(last, len(values))\nprint(values[::-1])",
    "options": [
      "The selected slice is empty, so two items are inserted without removing any.",
      "The start and stop indices are both included.",
      "The operation duplicates every list element.",
      "The operation replaces two items with two items."
    ],
    "answer": 0,
    "explanation": "A slice with equal start and stop indices contains no elements. Assigning two items to it inserts both.",
    "bank": "C",
    "week": 5,
    "program": "C14",
    "source": "Mock C · C14 · Q70",
    "note": ""
  },
  {
    "id": "mock-C-071",
    "topic": "lists",
    "title": "What is the first printed line?",
    "code": "values = [3, 1, 3, 2, 1]\nunique = []\nrepeats = []\nfor value in values:\n    if value in unique:\n        repeats.append(value)\n    else:\n        unique.append(value)\nprint(unique)\nprint(repeats)\nprint(values)",
    "options": [
      "[1, 2, 3]",
      "[3, 1, 2]",
      "[3, 1, 3, 2, 1]",
      "[3, 1]"
    ],
    "answer": 1,
    "explanation": "The first appearances occur in the order 3, then 1, then 2.",
    "bank": "C",
    "week": 5,
    "program": "C15",
    "source": "Mock C · C15 · Q71",
    "note": ""
  },
  {
    "id": "mock-C-072",
    "topic": "lists",
    "title": "What is the second printed line?",
    "code": "values = [3, 1, 3, 2, 1]\nunique = []\nrepeats = []\nfor value in values:\n    if value in unique:\n        repeats.append(value)\n    else:\n        unique.append(value)\nprint(unique)\nprint(repeats)\nprint(values)",
    "options": [
      "[1, 3]",
      "[3, 1, 2]",
      "[3, 1]",
      "[]"
    ],
    "answer": 2,
    "explanation": "The second occurrence of 3 and then the second occurrence of 1 are placed in repeats.",
    "bank": "C",
    "week": 5,
    "program": "C15",
    "source": "Mock C · C15 · Q72",
    "note": ""
  },
  {
    "id": "mock-C-073",
    "topic": "lists",
    "title": "What is the third printed line?",
    "code": "values = [3, 1, 3, 2, 1]\nunique = []\nrepeats = []\nfor value in values:\n    if value in unique:\n        repeats.append(value)\n    else:\n        unique.append(value)\nprint(unique)\nprint(repeats)\nprint(values)",
    "options": [
      "[3, 1, 3, 2, 1]",
      "[]",
      "[3, 1, 2]",
      "[3, 1]"
    ],
    "answer": 0,
    "explanation": "The loop reads values but appends only to the two separate result lists. The original list is unchanged.",
    "bank": "C",
    "week": 5,
    "program": "C15",
    "source": "Mock C · C15 · Q73",
    "note": ""
  },
  {
    "id": "mock-C-074",
    "topic": "lists",
    "title": "Replace unique.append(value) with unique.insert(0, value). What is the first printed line?",
    "code": "values = [3, 1, 3, 2, 1]\nunique = []\nrepeats = []\nfor value in values:\n    if value in unique:\n        repeats.append(value)\n    else:\n        unique.append(value)\nprint(unique)\nprint(repeats)\nprint(values)",
    "options": [
      "[1, 2, 1, 3, 3]",
      "[1, 2, 3]",
      "[3, 1, 2]",
      "[2, 1, 3]"
    ],
    "answer": 3,
    "explanation": "Each new value is inserted at the front, reversing the order of first appearances: 3, then 1, then 2.",
    "bank": "C",
    "week": 5,
    "program": "C15",
    "source": "Mock C · C15 · Q74",
    "note": ""
  },
  {
    "id": "mock-C-075",
    "topic": "lists",
    "title": "For any finite input list of integers, which statement must hold after the original loop?",
    "code": "values = [3, 1, 3, 2, 1]\nunique = []\nrepeats = []\nfor value in values:\n    if value in unique:\n        repeats.append(value)\n    else:\n        unique.append(value)\nprint(unique)\nprint(repeats)\nprint(values)",
    "options": [
      "len(unique) == len(repeats)",
      "len(unique) + len(repeats) == len(values)",
      "unique is always sorted.",
      "repeats never contains repeated values."
    ],
    "answer": 1,
    "explanation": "Each input occurrence is appended to exactly one of the two result lists, so their combined lengths equal the input length.",
    "bank": "C",
    "week": 5,
    "program": "C15",
    "source": "Mock C · C15 · Q75",
    "note": ""
  },
  {
    "id": "mock-C-081",
    "topic": "recursion",
    "title": "What is the first printed line?",
    "code": "def choose(n, k):\n    if k == 0 or k == n:\n        return 1\n    return choose(n - 1, k - 1) + choose(n - 1, k)\n\nprint(choose(4, 2))\nprint(choose(4, 0), choose(4, 4))",
    "options": [
      "2",
      "4",
      "6",
      "8"
    ],
    "answer": 2,
    "explanation": "choose(3, 1) and choose(3, 2) each return 3, so choose(4, 2) returns 6.",
    "bank": "C",
    "week": 6,
    "program": "C17",
    "source": "Mock C · C17 · Q81",
    "note": "Assume integer inputs with 0 <= k <= n. No knowledge beyond the displayed recurrence is needed."
  },
  {
    "id": "mock-C-082",
    "topic": "recursion",
    "title": "What is the second printed line?",
    "code": "def choose(n, k):\n    if k == 0 or k == n:\n        return 1\n    return choose(n - 1, k - 1) + choose(n - 1, k)\n\nprint(choose(4, 2))\nprint(choose(4, 0), choose(4, 4))",
    "options": [
      "4 4",
      "1 0",
      "0 1",
      "1 1"
    ],
    "answer": 3,
    "explanation": "k = 0 and k = n both satisfy the base-case condition and return 1.",
    "bank": "C",
    "week": 6,
    "program": "C17",
    "source": "Mock C · C17 · Q82",
    "note": "Assume integer inputs with 0 <= k <= n. No knowledge beyond the displayed recurrence is needed."
  },
  {
    "id": "mock-C-083",
    "topic": "recursion",
    "title": "Which two calls are made directly by choose(4, 2)?",
    "code": "def choose(n, k):\n    if k == 0 or k == n:\n        return 1\n    return choose(n - 1, k - 1) + choose(n - 1, k)\n\nprint(choose(4, 2))\nprint(choose(4, 0), choose(4, 4))",
    "options": [
      "choose(3, 1) and choose(2, 1)",
      "choose(3, 1) and choose(3, 2)",
      "choose(3, 2) and choose(3, 3)",
      "choose(4, 1) and choose(4, 2)"
    ],
    "answer": 1,
    "explanation": "Substitute n = 4 and k = 2 into the two expressions in the return statement.",
    "bank": "C",
    "week": 6,
    "program": "C17",
    "source": "Mock C · C17 · Q83",
    "note": "Assume integer inputs with 0 <= k <= n. No knowledge beyond the displayed recurrence is needed."
  },
  {
    "id": "mock-C-084",
    "topic": "recursion",
    "title": "How many calls occur in evaluating choose(3, 1) alone, including the initial call and all base-case calls?",
    "code": "def choose(n, k):\n    if k == 0 or k == n:\n        return 1\n    return choose(n - 1, k - 1) + choose(n - 1, k)\n\nprint(choose(4, 2))\nprint(choose(4, 0), choose(4, 4))",
    "options": [
      "5",
      "3",
      "4",
      "6"
    ],
    "answer": 0,
    "explanation": "The five calls are (3,1), (2,0), (2,1), (1,0), and (1,1).",
    "bank": "C",
    "week": 6,
    "program": "C17",
    "source": "Mock C · C17 · Q84",
    "note": "Assume integer inputs with 0 <= k <= n. No knowledge beyond the displayed recurrence is needed."
  },
  {
    "id": "mock-C-085",
    "topic": "recursion",
    "title": "Replace the base-case condition with only if k == 0:. Consider choose(2, 2) by itself. What happens?",
    "code": "def choose(n, k):\n    if k == 0 or k == n:\n        return 1\n    return choose(n - 1, k - 1) + choose(n - 1, k)\n\nprint(choose(4, 2))\nprint(choose(4, 0), choose(4, 4))",
    "options": [
      "It returns 1 immediately.",
      "It returns 0 when n becomes negative.",
      "It eventually raises a RecursionError.",
      "It returns 2 after two calls."
    ],
    "answer": 2,
    "explanation": "The k = n edge no longer stops recursion. A branch repeatedly decreases n while keeping a positive k and never reaches k = 0.",
    "bank": "C",
    "week": 6,
    "program": "C17",
    "source": "Mock C · C17 · Q85",
    "note": "Assume integer inputs with 0 <= k <= n. No knowledge beyond the displayed recurrence is needed."
  },
  {
    "id": "mock-C-086",
    "topic": "recursion",
    "title": "What is the first printed line?",
    "code": "def first_index(text, target):\n    if text == \"\":\n        return -1\n    if text[0] == target:\n        return 0\n    rest = first_index(text[1:], target)\n    if rest == -1:\n        return -1\n    return rest + 1\n\nprint(first_index(\"banana\", \"n\"))\nprint(first_index(\"banana\", \"z\"))\nprint(first_index(\"\", \"b\"))",
    "options": [
      "2",
      "3",
      "4",
      "1"
    ],
    "answer": 0,
    "explanation": "The first \"n\" in \"banana\" occurs at zero-based index 2.",
    "bank": "C",
    "week": 6,
    "program": "C18",
    "source": "Mock C · C18 · Q86",
    "note": "Assume target is one character. Indices start at zero; -1 represents a missing character."
  },
  {
    "id": "mock-C-087",
    "topic": "recursion",
    "title": "What is the second printed line?",
    "code": "def first_index(text, target):\n    if text == \"\":\n        return -1\n    if text[0] == target:\n        return 0\n    rest = first_index(text[1:], target)\n    if rest == -1:\n        return -1\n    return rest + 1\n\nprint(first_index(\"banana\", \"n\"))\nprint(first_index(\"banana\", \"z\"))\nprint(first_index(\"\", \"b\"))",
    "options": [
      "0",
      "5",
      "-1",
      "6"
    ],
    "answer": 2,
    "explanation": "There is no \"z\". The empty-string base case returns -1, and every pending call preserves that failure value.",
    "bank": "C",
    "week": 6,
    "program": "C18",
    "source": "Mock C · C18 · Q87",
    "note": "Assume target is one character. Indices start at zero; -1 represents a missing character."
  },
  {
    "id": "mock-C-088",
    "topic": "recursion",
    "title": "How many calls occur in first_index(\"banana\", \"n\") alone, including the initial call?",
    "code": "def first_index(text, target):\n    if text == \"\":\n        return -1\n    if text[0] == target:\n        return 0\n    rest = first_index(text[1:], target)\n    if rest == -1:\n        return -1\n    return rest + 1\n\nprint(first_index(\"banana\", \"n\"))\nprint(first_index(\"banana\", \"z\"))\nprint(first_index(\"\", \"b\"))",
    "options": [
      "2",
      "7",
      "3",
      "4"
    ],
    "answer": 2,
    "explanation": "The function checks \"banana\", then \"anana\", then \"nana\", where the first character matches.",
    "bank": "C",
    "week": 6,
    "program": "C18",
    "source": "Mock C · C18 · Q88",
    "note": "Assume target is one character. Indices start at zero; -1 represents a missing character."
  },
  {
    "id": "mock-C-089",
    "topic": "recursion",
    "title": "Remove if rest == -1: and its indented return -1, leaving the earlier base cases and final return unchanged. What is the new second printed line?",
    "code": "def first_index(text, target):\n    if text == \"\":\n        return -1\n    if text[0] == target:\n        return 0\n    rest = first_index(text[1:], target)\n    if rest == -1:\n        return -1\n    return rest + 1\n\nprint(first_index(\"banana\", \"n\"))\nprint(first_index(\"banana\", \"z\"))\nprint(first_index(\"\", \"b\"))",
    "options": [
      "-1",
      "6",
      "0",
      "5"
    ],
    "answer": 3,
    "explanation": "The empty string still returns -1, but all six preceding calls add 1, incorrectly producing -1 + 6 = 5.",
    "bank": "C",
    "week": 6,
    "program": "C18",
    "source": "Mock C · C18 · Q89",
    "note": "Assume target is one character. Indices start at zero; -1 represents a missing character."
  },
  {
    "id": "mock-C-090",
    "topic": "recursion",
    "title": "Why does the final line return rest + 1 rather than just rest when a match was found?",
    "code": "def first_index(text, target):\n    if text == \"\":\n        return -1\n    if text[0] == target:\n        return 0\n    rest = first_index(text[1:], target)\n    if rest == -1:\n        return -1\n    return rest + 1\n\nprint(first_index(\"banana\", \"n\"))\nprint(first_index(\"banana\", \"z\"))\nprint(first_index(\"\", \"b\"))",
    "options": [
      "Adding one converts the returned index to a Boolean.",
      "Every successful recursive call must return the string length.",
      "Python string indices normally start at one.",
      "The recursive search used a suffix missing the first character, so its index needs an offset of one."
    ],
    "answer": 3,
    "explanation": "rest is an index within text[1:]. Its position in the current text is one greater.",
    "bank": "C",
    "week": 6,
    "program": "C18",
    "source": "Mock C · C18 · Q90",
    "note": "Assume target is one character. Indices start at zero; -1 represents a missing character."
  },
  {
    "id": "mock-C-091",
    "topic": "dicts",
    "title": "What is the first printed line?",
    "code": "stock = {\"A\": 4, \"B\": 2}\nstock[\"C\"] = stock.pop(\"A\")\nstock[\"B\"] += stock.get(\"D\", 0)\nstock[\"D\"] = stock.get(\"D\", 0) + 1\nprint(list(stock.keys()))\nprint(list(stock.values()))\nprint(\"A\" in stock, \"C\" in stock)\nprint(stock.get(\"E\", 5), len(stock))",
    "options": [
      "['B', 'C', 'D', 'E']",
      "['C', 'B', 'D']",
      "['B', 'C', 'D']",
      "['A', 'B', 'C', 'D']"
    ],
    "answer": 2,
    "explanation": "A is removed, leaving B. C is inserted next, followed later by D. The call to get for E does not insert it.",
    "bank": "C",
    "week": 6,
    "program": "C19",
    "source": "Mock C · C19 · Q91",
    "note": ""
  },
  {
    "id": "mock-C-092",
    "topic": "dicts",
    "title": "What is the second printed line?",
    "code": "stock = {\"A\": 4, \"B\": 2}\nstock[\"C\"] = stock.pop(\"A\")\nstock[\"B\"] += stock.get(\"D\", 0)\nstock[\"D\"] = stock.get(\"D\", 0) + 1\nprint(list(stock.keys()))\nprint(list(stock.values()))\nprint(\"A\" in stock, \"C\" in stock)\nprint(stock.get(\"E\", 5), len(stock))",
    "options": [
      "[2, 4, 1, 5]",
      "[2, 4, 0]",
      "[2, 4, 1]",
      "[4, 2, 1]"
    ],
    "answer": 2,
    "explanation": "B remains 2, C receives the removed value 4, and D is assigned 0 + 1.",
    "bank": "C",
    "week": 6,
    "program": "C19",
    "source": "Mock C · C19 · Q92",
    "note": ""
  },
  {
    "id": "mock-C-093",
    "topic": "dicts",
    "title": "What is the third printed line?",
    "code": "stock = {\"A\": 4, \"B\": 2}\nstock[\"C\"] = stock.pop(\"A\")\nstock[\"B\"] += stock.get(\"D\", 0)\nstock[\"D\"] = stock.get(\"D\", 0) + 1\nprint(list(stock.keys()))\nprint(list(stock.values()))\nprint(\"A\" in stock, \"C\" in stock)\nprint(stock.get(\"E\", 5), len(stock))",
    "options": [
      "True False",
      "False True",
      "False False",
      "True True"
    ],
    "answer": 1,
    "explanation": "Membership in a dictionary tests keys. A was removed, while C was inserted.",
    "bank": "C",
    "week": 6,
    "program": "C19",
    "source": "Mock C · C19 · Q93",
    "note": ""
  },
  {
    "id": "mock-C-094",
    "topic": "dicts",
    "title": "Append print(stock[\"E\"]) to the program. What happens at that new line?",
    "code": "stock = {\"A\": 4, \"B\": 2}\nstock[\"C\"] = stock.pop(\"A\")\nstock[\"B\"] += stock.get(\"D\", 0)\nstock[\"D\"] = stock.get(\"D\", 0) + 1\nprint(list(stock.keys()))\nprint(list(stock.values()))\nprint(\"A\" in stock, \"C\" in stock)\nprint(stock.get(\"E\", 5), len(stock))",
    "options": [
      "It prints None.",
      "It prints 0.",
      "It prints 5.",
      "A KeyError is raised."
    ],
    "answer": 3,
    "explanation": "The earlier get(\"E\", 5) returned a default without creating E. Direct access to the still-missing key raises KeyError.",
    "bank": "C",
    "week": 6,
    "program": "C19",
    "source": "Mock C · C19 · Q94",
    "note": ""
  },
  {
    "id": "mock-C-095",
    "topic": "dicts",
    "title": "Replace stock[\"C\"] = stock.pop(\"A\") with stock[\"C\"] = stock[\"A\"]. What is the last printed line?",
    "code": "stock = {\"A\": 4, \"B\": 2}\nstock[\"C\"] = stock.pop(\"A\")\nstock[\"B\"] += stock.get(\"D\", 0)\nstock[\"D\"] = stock.get(\"D\", 0) + 1\nprint(list(stock.keys()))\nprint(list(stock.values()))\nprint(\"A\" in stock, \"C\" in stock)\nprint(stock.get(\"E\", 5), len(stock))",
    "options": [
      "5 3",
      "5 4",
      "5 5",
      "0 4"
    ],
    "answer": 1,
    "explanation": "The replacement copies the value without removing A. The final keys are A, B, C, and D; get for E still returns 5 without insertion.",
    "bank": "C",
    "week": 6,
    "program": "C19",
    "source": "Mock C · C19 · Q95",
    "note": ""
  },
  {
    "id": "mock-C-096",
    "topic": "dicts",
    "title": "What is the final value of totals[\"Cu\"]?",
    "code": "batches = [(\"Cu\", 2), (\"Al\", 3), (\"Cu\", 4), (\"Al\", 1), (\"Fe\", 5)]\ntotals = {}\nfor material, mass in batches:\n    if material not in totals:\n        totals[material] = 0\n    totals[material] += mass\nselected = []\nfor material in totals:\n    if totals[material] >= 5:\n        selected.append(material)\nprint(totals)\nprint(selected)\nprint(sum(totals.values()))",
    "options": [
      "15",
      "4",
      "2",
      "6"
    ],
    "answer": 3,
    "explanation": "The two Cu batches contribute masses 2 and 4, giving 6.",
    "bank": "C",
    "week": 6,
    "program": "C20",
    "source": "Mock C · C20 · Q96",
    "note": ""
  },
  {
    "id": "mock-C-097",
    "topic": "dicts",
    "title": "What is the second printed line?",
    "code": "batches = [(\"Cu\", 2), (\"Al\", 3), (\"Cu\", 4), (\"Al\", 1), (\"Fe\", 5)]\ntotals = {}\nfor material, mass in batches:\n    if material not in totals:\n        totals[material] = 0\n    totals[material] += mass\nselected = []\nfor material in totals:\n    if totals[material] >= 5:\n        selected.append(material)\nprint(totals)\nprint(selected)\nprint(sum(totals.values()))",
    "options": [
      "['Cu', 'Al', 'Fe']",
      "['Fe', 'Cu']",
      "['Cu', 'Fe']",
      "['Cu']"
    ],
    "answer": 2,
    "explanation": "The totals are Cu = 6, Al = 4, and Fe = 5. Cu and Fe meet the inclusive threshold in insertion order.",
    "bank": "C",
    "week": 6,
    "program": "C20",
    "source": "Mock C · C20 · Q97",
    "note": ""
  },
  {
    "id": "mock-C-098",
    "topic": "dicts",
    "title": "What is the last printed line?",
    "code": "batches = [(\"Cu\", 2), (\"Al\", 3), (\"Cu\", 4), (\"Al\", 1), (\"Fe\", 5)]\ntotals = {}\nfor material, mass in batches:\n    if material not in totals:\n        totals[material] = 0\n    totals[material] += mass\nselected = []\nfor material in totals:\n    if totals[material] >= 5:\n        selected.append(material)\nprint(totals)\nprint(selected)\nprint(sum(totals.values()))",
    "options": [
      "10",
      "11",
      "15",
      "3"
    ],
    "answer": 2,
    "explanation": "Summing the dictionary values gives 6 + 4 + 5 = 15, the total of all input masses.",
    "bank": "C",
    "week": 6,
    "program": "C20",
    "source": "Mock C · C20 · Q98",
    "note": ""
  },
  {
    "id": "mock-C-099",
    "topic": "dicts",
    "title": "Remove if material not in totals: and unindent its body so totals[material] = 0 runs on every iteration of the first loop. What is the last printed line?",
    "code": "batches = [(\"Cu\", 2), (\"Al\", 3), (\"Cu\", 4), (\"Al\", 1), (\"Fe\", 5)]\ntotals = {}\nfor material, mass in batches:\n    if material not in totals:\n        totals[material] = 0\n    totals[material] += mass\nselected = []\nfor material in totals:\n    if totals[material] >= 5:\n        selected.append(material)\nprint(totals)\nprint(selected)\nprint(sum(totals.values()))",
    "options": [
      "0",
      "10",
      "6",
      "15"
    ],
    "answer": 1,
    "explanation": "Each occurrence resets its category total. Only the last masses survive: Cu = 4, Al = 1, and Fe = 5, summing to 10.",
    "bank": "C",
    "week": 6,
    "program": "C20",
    "source": "Mock C · C20 · Q99",
    "note": ""
  },
  {
    "id": "mock-C-100",
    "topic": "dicts",
    "title": "Replace only for material in totals: with for material in totals.values():. What happens?",
    "code": "batches = [(\"Cu\", 2), (\"Al\", 3), (\"Cu\", 4), (\"Al\", 1), (\"Fe\", 5)]\ntotals = {}\nfor material, mass in batches:\n    if material not in totals:\n        totals[material] = 0\n    totals[material] += mass\nselected = []\nfor material in totals:\n    if totals[material] >= 5:\n        selected.append(material)\nprint(totals)\nprint(selected)\nprint(sum(totals.values()))",
    "options": [
      "It prints the same output as before.",
      "A KeyError occurs when the loop tries to read totals[6].",
      "It prints an empty dictionary.",
      "It selects every material label."
    ],
    "answer": 1,
    "explanation": "The first iterated value is 6, not the key \"Cu\". The unchanged lookup totals[material] therefore requests the missing numeric key 6.",
    "bank": "C",
    "week": 6,
    "program": "C20",
    "source": "Mock C · C20 · Q100",
    "note": ""
  },
  {
    "id": "mock-D-001",
    "topic": "arithmetic",
    "title": "What is the first printed line?",
    "code": "solute = 8\nsolvent = 32\ntotal = solute + solvent\npercent = 100 * solute / total\nsolvent = solvent + 8\nprint(total, solvent)\nprint(percent)\nprint(percent == 20)",
    "options": [
      "48 40",
      "40 32",
      "48 32",
      "40 40"
    ],
    "answer": 3,
    "explanation": "total is calculated as 8 + 32 = 40. The later update changes solvent to 40 but does not recalculate total.",
    "bank": "D",
    "week": 1,
    "program": "D01",
    "source": "Mock D · D01 · Q1",
    "note": "Assume the quantities are masses in the same units; the data are illustrative."
  },
  {
    "id": "mock-D-002",
    "topic": "arithmetic",
    "title": "What is the type of percent?",
    "code": "solute = 8\nsolvent = 32\ntotal = solute + solvent\npercent = 100 * solute / total\nsolvent = solvent + 8\nprint(total, solvent)\nprint(percent)\nprint(percent == 20)",
    "options": [
      "int",
      "bool",
      "str",
      "float"
    ],
    "answer": 3,
    "explanation": "The / operator performs true division. Here, 800 / 40 produces 20.0.",
    "bank": "D",
    "week": 1,
    "program": "D01",
    "source": "Mock D · D01 · Q2",
    "note": "Assume the quantities are masses in the same units; the data are illustrative."
  },
  {
    "id": "mock-D-003",
    "topic": "arithmetic",
    "title": "Insert total = solute + solvent immediately before print(total, solvent). What is the new first printed line?",
    "code": "solute = 8\nsolvent = 32\ntotal = solute + solvent\npercent = 100 * solute / total\nsolvent = solvent + 8\nprint(total, solvent)\nprint(percent)\nprint(percent == 20)",
    "options": [
      "40 40",
      "40 48",
      "48 32",
      "48 40"
    ],
    "answer": 3,
    "explanation": "At this point solvent is 40, so recalculating total gives 8 + 40 = 48.",
    "bank": "D",
    "week": 1,
    "program": "D01",
    "source": "Mock D · D01 · Q3",
    "note": "Assume the quantities are masses in the same units; the data are illustrative."
  },
  {
    "id": "mock-D-004",
    "topic": "arithmetic",
    "title": "Replace the percentage expression with 100 * (solute // total). What are the value and type of percent?",
    "code": "solute = 8\nsolvent = 32\ntotal = solute + solvent\npercent = 100 * solute / total\nsolvent = solvent + 8\nprint(total, solvent)\nprint(percent)\nprint(percent == 20)",
    "options": [
      "0.0, of type float",
      "0, of type int",
      "20, of type int",
      "20.0, of type float"
    ],
    "answer": 1,
    "explanation": "The parenthesized integer division is 8 // 40 = 0, so multiplication by 100 gives the integer 0.",
    "bank": "D",
    "week": 1,
    "program": "D01",
    "source": "Mock D · D01 · Q4",
    "note": "Assume the quantities are masses in the same units; the data are illustrative."
  },
  {
    "id": "mock-D-005",
    "topic": "arithmetic",
    "title": "After the original program finishes, which statement correctly describes percent?",
    "code": "solute = 8\nsolvent = 32\ntotal = solute + solvent\npercent = 100 * solute / total\nsolvent = solvent + 8\nprint(total, solvent)\nprint(percent)\nprint(percent == 20)",
    "options": [
      "It still describes the mixture before the solvent update.",
      "It becomes a string when printed.",
      "It includes the added solvent because total refers to an expression.",
      "It is automatically recalculated when solvent changes."
    ],
    "answer": 0,
    "explanation": "An assignment stores the computed result, not a formula that updates itself. percent remains 20.0 after solvent changes.",
    "bank": "D",
    "week": 1,
    "program": "D01",
    "source": "Mock D · D01 · Q5",
    "note": "Assume the quantities are masses in the same units; the data are illustrative."
  },
  {
    "id": "mock-D-006",
    "topic": "arithmetic",
    "title": "What is the first printed line?",
    "code": "a = 2\nb = 3\np = a ** b ** 2\nq = (a ** b) ** 2\nprint(p, q)\nprint(p // q, p % q)\nprint((p - q) / q)",
    "options": [
      "64 64",
      "64 512",
      "512 512",
      "512 64"
    ],
    "answer": 3,
    "explanation": "Exponentiation groups from the right: 2 ** (3 ** 2) = 512. The parentheses in q give (2 ** 3) ** 2 = 64.",
    "bank": "D",
    "week": 1,
    "program": "D02",
    "source": "Mock D · D02 · Q6",
    "note": ""
  },
  {
    "id": "mock-D-007",
    "topic": "arithmetic",
    "title": "What is the last printed line?",
    "code": "a = 2\nb = 3\np = a ** b ** 2\nq = (a ** b) ** 2\nprint(p, q)\nprint(p // q, p % q)\nprint((p - q) / q)",
    "options": [
      "448.0",
      "7",
      "8.0",
      "7.0"
    ],
    "answer": 3,
    "explanation": "The expression is (512 - 64) / 64 = 448 / 64 = 7.0.",
    "bank": "D",
    "week": 1,
    "program": "D02",
    "source": "Mock D · D02 · Q7",
    "note": ""
  },
  {
    "id": "mock-D-008",
    "topic": "arithmetic",
    "title": "Change only b = 3 to b = 2. What is the new second printed line?",
    "code": "a = 2\nb = 3\np = a ** b ** 2\nq = (a ** b) ** 2\nprint(p, q)\nprint(p // q, p % q)\nprint((p - q) / q)",
    "options": [
      "4 0",
      "1 0",
      "1.0 0.0",
      "0 1"
    ],
    "answer": 1,
    "explanation": "Both p and q become 16. Therefore, 16 // 16 is 1 and 16 % 16 is 0.",
    "bank": "D",
    "week": 1,
    "program": "D02",
    "source": "Mock D · D02 · Q8",
    "note": ""
  },
  {
    "id": "mock-D-009",
    "topic": "arithmetic",
    "title": "Replace p // q with p / q in the second print statement. What is that printed line?",
    "code": "a = 2\nb = 3\np = a ** b ** 2\nq = (a ** b) ** 2\nprint(p, q)\nprint(p // q, p % q)\nprint((p - q) / q)",
    "options": [
      "8 0",
      "7.0 0",
      "8.0 0",
      "8.0 0.0"
    ],
    "answer": 2,
    "explanation": "True division gives 8.0, while the unchanged integer remainder remains 0.",
    "bank": "D",
    "week": 1,
    "program": "D02",
    "source": "Mock D · D02 · Q9",
    "note": ""
  },
  {
    "id": "mock-D-010",
    "topic": "arithmetic",
    "title": "Why do p and q differ in the original program?",
    "code": "a = 2\nb = 3\np = a ** b ** 2\nq = (a ** b) ** 2\nprint(p, q)\nprint(p // q, p % q)\nprint((p - q) / q)",
    "options": [
      "Parentheses convert the result to a float.",
      "The ** operator means multiplication by 2.",
      "All arithmetic operators group from the left.",
      "a ** b ** 2 means a ** (b ** 2)."
    ],
    "answer": 3,
    "explanation": "The exponentiation operator is right-associative. Parentheses explicitly change the order used for q.",
    "bank": "D",
    "week": 1,
    "program": "D02",
    "source": "Mock D · D02 · Q10",
    "note": ""
  },
  {
    "id": "mock-D-016",
    "topic": "decisions",
    "title": "What is the first printed line?",
    "code": "flow = 12\narea = 0\nif area != 0 and flow / area > 2:\n    label = \"fast\"\nelif area == 0:\n    label = \"no area\"\nelse:\n    label = \"slow\"\nprint(label)\nprint(area != 0)",
    "options": [
      "slow",
      "no area",
      "A ZeroDivisionError is raised.",
      "fast"
    ],
    "answer": 1,
    "explanation": "area != 0 is False, so the right side of and is skipped. The elif condition then selects \"no area\".",
    "bank": "D",
    "week": 2,
    "program": "D04",
    "source": "Mock D · D04 · Q16",
    "note": "The labels and threshold are illustrative, not operating guidance."
  },
  {
    "id": "mock-D-017",
    "topic": "decisions",
    "title": "What is the second printed line?",
    "code": "flow = 12\narea = 0\nif area != 0 and flow / area > 2:\n    label = \"fast\"\nelif area == 0:\n    label = \"no area\"\nelse:\n    label = \"slow\"\nprint(label)\nprint(area != 0)",
    "options": [
      "0",
      "True",
      "None",
      "False"
    ],
    "answer": 3,
    "explanation": "The comparison 0 != 0 is False.",
    "bank": "D",
    "week": 2,
    "program": "D04",
    "source": "Mock D · D04 · Q17",
    "note": "The labels and threshold are illustrative, not operating guidance."
  },
  {
    "id": "mock-D-018",
    "topic": "decisions",
    "title": "Change only area = 0 to area = 6. What is the new first printed line?",
    "code": "flow = 12\narea = 0\nif area != 0 and flow / area > 2:\n    label = \"fast\"\nelif area == 0:\n    label = \"no area\"\nelse:\n    label = \"slow\"\nprint(label)\nprint(area != 0)",
    "options": [
      "slow",
      "no area",
      "fast",
      "True"
    ],
    "answer": 0,
    "explanation": "12 / 6 equals 2, not a value greater than 2. Neither the if nor elif matches, so else runs.",
    "bank": "D",
    "week": 2,
    "program": "D04",
    "source": "Mock D · D04 · Q18",
    "note": "The labels and threshold are illustrative, not operating guidance."
  },
  {
    "id": "mock-D-019",
    "topic": "decisions",
    "title": "Change only area = 0 to area = 4. What is the new first printed line?",
    "code": "flow = 12\narea = 0\nif area != 0 and flow / area > 2:\n    label = \"fast\"\nelif area == 0:\n    label = \"no area\"\nelse:\n    label = \"slow\"\nprint(label)\nprint(area != 0)",
    "options": [
      "no area",
      "fast",
      "False",
      "slow"
    ],
    "answer": 1,
    "explanation": "area is nonzero and 12 / 4 = 3 > 2, so the first branch runs.",
    "bank": "D",
    "week": 2,
    "program": "D04",
    "source": "Mock D · D04 · Q19",
    "note": "The labels and threshold are illustrative, not operating guidance."
  },
  {
    "id": "mock-D-020",
    "topic": "decisions",
    "title": "Reverse the two tests to if flow / area > 2 and area != 0:. What happens with the original inputs?",
    "code": "flow = 12\narea = 0\nif area != 0 and flow / area > 2:\n    label = \"fast\"\nelif area == 0:\n    label = \"no area\"\nelse:\n    label = \"slow\"\nprint(label)\nprint(area != 0)",
    "options": [
      "The and operator automatically evaluates the safer test first.",
      "It prints slow and False.",
      "A ZeroDivisionError is raised before either print.",
      "It still prints no area and False."
    ],
    "answer": 2,
    "explanation": "and evaluates its left operand first. Moving the division there attempts 12 / 0 before the nonzero check.",
    "bank": "D",
    "week": 2,
    "program": "D04",
    "source": "Mock D · D04 · Q20",
    "note": "The labels and threshold are illustrative, not operating guidance."
  },
  {
    "id": "mock-D-021",
    "topic": "for",
    "title": "What is the first printed line?",
    "code": "text = \"24312\"\nlimit = 8\ntotal = 0\nused = 0\nfor ch in text:\n    value = int(ch)\n    if total + value > limit:\n        break\n    total += value\n    used += 1\nprint(total, used)\nprint(ch)",
    "options": [
      "12 5",
      "9 3",
      "7 3",
      "6 2"
    ],
    "answer": 3,
    "explanation": "The digits 2 and 4 are accepted. Adding the next digit, 3, would exceed 8, so the loop stops before adding it.",
    "bank": "D",
    "week": 2,
    "program": "D05",
    "source": "Mock D · D05 · Q21",
    "note": ""
  },
  {
    "id": "mock-D-022",
    "topic": "for",
    "title": "What is the last printed line?",
    "code": "text = \"24312\"\nlimit = 8\ntotal = 0\nused = 0\nfor ch in text:\n    value = int(ch)\n    if total + value > limit:\n        break\n    total += value\n    used += 1\nprint(total, used)\nprint(ch)",
    "options": [
      "4",
      "2",
      "3",
      "1"
    ],
    "answer": 2,
    "explanation": "The loop variable ch already contains \"3\" when the break statement runs.",
    "bank": "D",
    "week": 2,
    "program": "D05",
    "source": "Mock D · D05 · Q22",
    "note": ""
  },
  {
    "id": "mock-D-023",
    "topic": "for",
    "title": "Change only limit = 8 to limit = 9. What is the new first printed line?",
    "code": "text = \"24312\"\nlimit = 8\ntotal = 0\nused = 0\nfor ch in text:\n    value = int(ch)\n    if total + value > limit:\n        break\n    total += value\n    used += 1\nprint(total, used)\nprint(ch)",
    "options": [
      "6 2",
      "12 5",
      "10 4",
      "9 3"
    ],
    "answer": 3,
    "explanation": "2 + 4 + 3 equals 9 and is allowed. The following digit 1 would take the total above the limit.",
    "bank": "D",
    "week": 2,
    "program": "D05",
    "source": "Mock D · D05 · Q23",
    "note": ""
  },
  {
    "id": "mock-D-024",
    "topic": "for",
    "title": "Replace the single break with continue. What is the first printed line?",
    "code": "text = \"24312\"\nlimit = 8\ntotal = 0\nused = 0\nfor ch in text:\n    value = int(ch)\n    if total + value > limit:\n        break\n    total += value\n    used += 1\nprint(total, used)\nprint(ch)",
    "options": [
      "7 3",
      "9 3",
      "12 5",
      "6 2"
    ],
    "answer": 0,
    "explanation": "The digit 3 is skipped, then 1 is accepted, and the final 2 is skipped. The accepted digits are 2, 4, and 1.",
    "bank": "D",
    "week": 2,
    "program": "D05",
    "source": "Mock D · D05 · Q24",
    "note": ""
  },
  {
    "id": "mock-D-025",
    "topic": "for",
    "title": "Replace the condition with if value > limit:. What is the first printed line?",
    "code": "text = \"24312\"\nlimit = 8\ntotal = 0\nused = 0\nfor ch in text:\n    value = int(ch)\n    if total + value > limit:\n        break\n    total += value\n    used += 1\nprint(total, used)\nprint(ch)",
    "options": [
      "8 4",
      "12 5",
      "6 2",
      "7 3"
    ],
    "answer": 1,
    "explanation": "The revised test checks one digit rather than the proposed running total. Every digit is at most 8, so all five are added.",
    "bank": "D",
    "week": 2,
    "program": "D05",
    "source": "Mock D · D05 · Q25",
    "note": ""
  },
  {
    "id": "mock-D-026",
    "topic": "while",
    "title": "What is the printed line?",
    "code": "remaining = 23\nstep = 4\nrounds = 0\nwhile remaining >= step:\n    remaining -= step\n    step += 2\n    rounds += 1\nprint(remaining, step, rounds)",
    "options": [
      "-5 12 4",
      "13 8 2",
      "5 10 3",
      "5 8 3"
    ],
    "answer": 2,
    "explanation": "The program subtracts 4, 6, and 8. remaining becomes 5, step becomes 10, and three rounds have run.",
    "bank": "D",
    "week": 2,
    "program": "D06",
    "source": "Mock D · D06 · Q26",
    "note": ""
  },
  {
    "id": "mock-D-027",
    "topic": "while",
    "title": "How many times is the while condition evaluated, including its final False result?",
    "code": "remaining = 23\nstep = 4\nrounds = 0\nwhile remaining >= step:\n    remaining -= step\n    step += 2\n    rounds += 1\nprint(remaining, step, rounds)",
    "options": [
      "5",
      "2",
      "4",
      "3"
    ],
    "answer": 2,
    "explanation": "Three successful checks start three loop iterations. A fourth check, 5 >= 10, ends the loop.",
    "bank": "D",
    "week": 2,
    "program": "D06",
    "source": "Mock D · D06 · Q27",
    "note": ""
  },
  {
    "id": "mock-D-028",
    "topic": "while",
    "title": "Change only remaining = 23 to remaining = 18. What is printed?",
    "code": "remaining = 23\nstep = 4\nrounds = 0\nwhile remaining >= step:\n    remaining -= step\n    step += 2\n    rounds += 1\nprint(remaining, step, rounds)",
    "options": [
      "8 8 2",
      "0 8 3",
      "-10 12 4",
      "0 10 3"
    ],
    "answer": 3,
    "explanation": "The values 4, 6, and 8 are subtracted. Equality at the last condition is allowed by >=.",
    "bank": "D",
    "week": 2,
    "program": "D06",
    "source": "Mock D · D06 · Q28",
    "note": ""
  },
  {
    "id": "mock-D-029",
    "topic": "while",
    "title": "Make both changes: set remaining = 18 and replace >= with > in the while condition. What is printed?",
    "code": "remaining = 23\nstep = 4\nrounds = 0\nwhile remaining >= step:\n    remaining -= step\n    step += 2\n    rounds += 1\nprint(remaining, step, rounds)",
    "options": [
      "14 6 1",
      "8 8 2",
      "8 10 2",
      "0 10 3"
    ],
    "answer": 1,
    "explanation": "After subtracting 4 and 6, remaining and step are both 8. The strict test 8 > 8 is False.",
    "bank": "D",
    "week": 2,
    "program": "D06",
    "source": "Mock D · D06 · Q29",
    "note": ""
  },
  {
    "id": "mock-D-030",
    "topic": "while",
    "title": "Delete only remaining -= step. What happens with the original initial values?",
    "code": "remaining = 23\nstep = 4\nrounds = 0\nwhile remaining >= step:\n    remaining -= step\n    step += 2\n    rounds += 1\nprint(remaining, step, rounds)",
    "options": [
      "The loop terminates and prints 23 24 10.",
      "The loop never terminates.",
      "It prints 23 22 9.",
      "It prints 5 10 3."
    ],
    "answer": 0,
    "explanation": "Although remaining stays 23, step still grows by 2. Ten iterations use steps 4 through 22; step = 24 makes the next test False.",
    "bank": "D",
    "week": 2,
    "program": "D06",
    "source": "Mock D · D06 · Q30",
    "note": ""
  },
  {
    "id": "mock-D-036",
    "topic": "while",
    "title": "What is the first printed line?",
    "code": "target = 50\nguess = 0\nchecks = 0\nwhile True:\n    checks += 1\n    if guess ** 3 >= target:\n        break\n    guess += 1\nprint(guess, checks)\nprint((guess - 1) ** 3 < target <= guess ** 3)\nprint(guess ** 3 - target)",
    "options": [
      "3 4",
      "4 4",
      "4 5",
      "5 5"
    ],
    "answer": 2,
    "explanation": "The program checks guesses 0, 1, 2, 3, and 4. The first cube at least 50 is 4 ** 3 = 64.",
    "bank": "D",
    "week": 3,
    "program": "D08",
    "source": "Mock D · D08 · Q36",
    "note": "Assume target is a nonnegative integer."
  },
  {
    "id": "mock-D-037",
    "topic": "while",
    "title": "What is the last printed line?",
    "code": "target = 50\nguess = 0\nchecks = 0\nwhile True:\n    checks += 1\n    if guess ** 3 >= target:\n        break\n    guess += 1\nprint(guess, checks)\nprint((guess - 1) ** 3 < target <= guess ** 3)\nprint(guess ** 3 - target)",
    "options": [
      "14",
      "23",
      "64",
      "4"
    ],
    "answer": 0,
    "explanation": "The excess is 64 - 50 = 14.",
    "bank": "D",
    "week": 3,
    "program": "D08",
    "source": "Mock D · D08 · Q37",
    "note": "Assume target is a nonnegative integer."
  },
  {
    "id": "mock-D-038",
    "topic": "while",
    "title": "Change only target = 50 to target = 64. What is the new first printed line?",
    "code": "target = 50\nguess = 0\nchecks = 0\nwhile True:\n    checks += 1\n    if guess ** 3 >= target:\n        break\n    guess += 1\nprint(guess, checks)\nprint((guess - 1) ** 3 < target <= guess ** 3)\nprint(guess ** 3 - target)",
    "options": [
      "4 4",
      "5 6",
      "4 5",
      "3 4"
    ],
    "answer": 2,
    "explanation": "The >= condition accepts equality, so the same five guesses are checked and guess 4 is accepted.",
    "bank": "D",
    "week": 3,
    "program": "D08",
    "source": "Mock D · D08 · Q38",
    "note": "Assume target is a nonnegative integer."
  },
  {
    "id": "mock-D-039",
    "topic": "while",
    "title": "Change only target = 50 to target = 0. What is the new first printed line?",
    "code": "target = 50\nguess = 0\nchecks = 0\nwhile True:\n    checks += 1\n    if guess ** 3 >= target:\n        break\n    guess += 1\nprint(guess, checks)\nprint((guess - 1) ** 3 < target <= guess ** 3)\nprint(guess ** 3 - target)",
    "options": [
      "0 0",
      "1 2",
      "1 1",
      "0 1"
    ],
    "answer": 3,
    "explanation": "The initial guess 0 is checked once and immediately satisfies the condition.",
    "bank": "D",
    "week": 3,
    "program": "D08",
    "source": "Mock D · D08 · Q39",
    "note": "Assume target is a nonnegative integer."
  },
  {
    "id": "mock-D-040",
    "topic": "while",
    "title": "Make both changes: set target = 9 and use guess += 2. What does the result show?",
    "code": "target = 50\nguess = 0\nchecks = 0\nwhile True:\n    checks += 1\n    if guess ** 3 >= target:\n        break\n    guess += 1\nprint(guess, checks)\nprint((guess - 1) ** 3 < target <= guess ** 3)\nprint(guess ** 3 - target)",
    "options": [
      "It prints 2 2 first because 2 ** 3 exceeds 9.",
      "It prints 4 3 first and skips the smallest qualifying integer, 3.",
      "It prints 3 4 first and still tests every integer.",
      "It cannot terminate because 9 is not an exact cube."
    ],
    "answer": 1,
    "explanation": "Only guesses 0, 2, and 4 are tested. Although 3 ** 3 is already at least 9, that guess is skipped.",
    "bank": "D",
    "week": 3,
    "program": "D08",
    "source": "Mock D · D08 · Q40",
    "note": "Assume target is a nonnegative integer."
  },
  {
    "id": "mock-D-041",
    "topic": "while",
    "title": "What is the first printed line?",
    "code": "target = 5.0\nlow = 2.0\nhigh = 3.0\nsteps = 0\nwhile steps < 3:\n    mid = (low + high) / 2\n    if mid ** 2 < target:\n        low = mid\n    else:\n        high = mid\n    steps += 1\nprint(low, high)\nprint(mid)\nprint((low + high) / 2)",
    "options": [
      "2.0 2.25",
      "2.1875 2.25",
      "2.125 2.25",
      "2.25 2.5"
    ],
    "answer": 2,
    "explanation": "The tested midpoints are 2.5, 2.25, and 2.125. The first two lower high; the third raises low.",
    "bank": "D",
    "week": 3,
    "program": "D09",
    "source": "Mock D · D09 · Q41",
    "note": "The intended root is the positive square root of target; ignore roundoff."
  },
  {
    "id": "mock-D-042",
    "topic": "while",
    "title": "What is the second printed line?",
    "code": "target = 5.0\nlow = 2.0\nhigh = 3.0\nsteps = 0\nwhile steps < 3:\n    mid = (low + high) / 2\n    if mid ** 2 < target:\n        low = mid\n    else:\n        high = mid\n    steps += 1\nprint(low, high)\nprint(mid)\nprint((low + high) / 2)",
    "options": [
      "2.125",
      "2.5",
      "2.1875",
      "2.25"
    ],
    "answer": 0,
    "explanation": "mid retains the last tested midpoint, 2.125. It is not recomputed after the final endpoint update.",
    "bank": "D",
    "week": 3,
    "program": "D09",
    "source": "Mock D · D09 · Q42",
    "note": "The intended root is the positive square root of target; ignore roundoff."
  },
  {
    "id": "mock-D-043",
    "topic": "while",
    "title": "Change only while steps < 3: to while steps < 4:. What is the new final printed line?",
    "code": "target = 5.0\nlow = 2.0\nhigh = 3.0\nsteps = 0\nwhile steps < 3:\n    mid = (low + high) / 2\n    if mid ** 2 < target:\n        low = mid\n    else:\n        high = mid\n    steps += 1\nprint(low, high)\nprint(mid)\nprint((low + high) / 2)",
    "options": [
      "2.234375",
      "2.25",
      "2.1875",
      "2.21875"
    ],
    "answer": 3,
    "explanation": "The fourth midpoint, 2.1875, has a square below 5. The new bracket is [2.1875, 2.25], whose midpoint is 2.21875.",
    "bank": "D",
    "week": 3,
    "program": "D09",
    "source": "Mock D · D09 · Q43",
    "note": "The intended root is the positive square root of target; ignore roundoff."
  },
  {
    "id": "mock-D-044",
    "topic": "while",
    "title": "Using the final bracket width alone, what is the tightest guaranteed upper bound on the absolute error of the final printed midpoint? Assume the root remains bracketed and ignore roundoff.",
    "code": "target = 5.0\nlow = 2.0\nhigh = 3.0\nsteps = 0\nwhile steps < 3:\n    mid = (low + high) / 2\n    if mid ** 2 < target:\n        low = mid\n    else:\n        high = mid\n    steps += 1\nprint(low, high)\nprint(mid)\nprint((low + high) / 2)",
    "options": [
      "0.03125",
      "0.0625",
      "0.125",
      "0"
    ],
    "answer": 1,
    "explanation": "The root remains in [2.125, 2.25]. Its distance from that interval's midpoint is at most half the width: 0.125 / 2 = 0.0625.",
    "bank": "D",
    "week": 3,
    "program": "D09",
    "source": "Mock D · D09 · Q44",
    "note": "The intended root is the positive square root of target; ignore roundoff."
  },
  {
    "id": "mock-D-045",
    "topic": "while",
    "title": "Change only high = 3.0 to high = 2.0. Why can the interval width no longer justify the same type of root-error guarantee?",
    "code": "target = 5.0\nlow = 2.0\nhigh = 3.0\nsteps = 0\nwhile steps < 3:\n    mid = (low + high) / 2\n    if mid ** 2 < target:\n        low = mid\n    else:\n        high = mid\n    steps += 1\nprint(low, high)\nprint(mid)\nprint((low + high) / 2)",
    "options": [
      "The initial interval does not contain the positive square root of 5.",
      "Three iterations always guarantee the correct root.",
      "Every zero-width interval is automatically an exact root.",
      "Bisection requires low to be negative for all problems."
    ],
    "answer": 0,
    "explanation": "The interval is [2, 2], but 2 ** 2 is 4, not 5. A small interval only bounds root error when it actually brackets the root.",
    "bank": "D",
    "week": 3,
    "program": "D09",
    "source": "Mock D · D09 · Q45",
    "note": "The intended root is the positive square root of target; ignore roundoff."
  },
  {
    "id": "mock-D-051",
    "topic": "functions",
    "title": "What is the first printed line?",
    "code": "def square(x):\n    return x * x\n\ndef spread(a, b):\n    centre = (a + b) / 2\n    return (square(a - centre) + square(b - centre)) / 2\n\nresult = spread(2, 6)\nprint(result)\nprint(square(3))\nprint(spread(5, 5))",
    "options": [
      "4",
      "8.0",
      "4.0",
      "2.0"
    ],
    "answer": 2,
    "explanation": "The centre is 4.0. The two squared deviations are 4.0 and 4.0, and their average is 4.0.",
    "bank": "D",
    "week": 4,
    "program": "D11",
    "source": "Mock D · D11 · Q51",
    "note": ""
  },
  {
    "id": "mock-D-052",
    "topic": "functions",
    "title": "What is the last printed line?",
    "code": "def square(x):\n    return x * x\n\ndef spread(a, b):\n    centre = (a + b) / 2\n    return (square(a - centre) + square(b - centre)) / 2\n\nresult = spread(2, 6)\nprint(result)\nprint(square(3))\nprint(spread(5, 5))",
    "options": [
      "25.0",
      "5.0",
      "0.0",
      "0"
    ],
    "answer": 2,
    "explanation": "For equal inputs 5 and 5, the centre is 5.0 and both deviations are zero.",
    "bank": "D",
    "week": 4,
    "program": "D11",
    "source": "Mock D · D11 · Q52",
    "note": ""
  },
  {
    "id": "mock-D-053",
    "topic": "functions",
    "title": "For the single call spread(2, 6), how many times is square called?",
    "code": "def square(x):\n    return x * x\n\ndef spread(a, b):\n    centre = (a + b) / 2\n    return (square(a - centre) + square(b - centre)) / 2\n\nresult = spread(2, 6)\nprint(result)\nprint(square(3))\nprint(spread(5, 5))",
    "options": [
      "4",
      "2",
      "3",
      "1"
    ],
    "answer": 1,
    "explanation": "The return expression calls square once for each of the two deviations.",
    "bank": "D",
    "week": 4,
    "program": "D11",
    "source": "Mock D · D11 · Q53",
    "note": ""
  },
  {
    "id": "mock-D-054",
    "topic": "functions",
    "title": "Replace only return x * x with return abs(x). What is the new first printed line?",
    "code": "def square(x):\n    return x * x\n\ndef spread(a, b):\n    centre = (a + b) / 2\n    return (square(a - centre) + square(b - centre)) / 2\n\nresult = spread(2, 6)\nprint(result)\nprint(square(3))\nprint(spread(5, 5))",
    "options": [
      "0.0",
      "2.0",
      "8.0",
      "4.0"
    ],
    "answer": 1,
    "explanation": "The helper now returns absolute deviations. Both are 2.0, so spread returns 2.0. This intentionally changes the meaning of the calculation: keeping the same function calls does not preserve the original squaring contract.",
    "bank": "D",
    "week": 4,
    "program": "D11",
    "source": "Mock D · D11 · Q54",
    "note": ""
  },
  {
    "id": "mock-D-055",
    "topic": "functions",
    "title": "Append print(centre) at the end of the original program. What happens at that new line?",
    "code": "def square(x):\n    return x * x\n\ndef spread(a, b):\n    centre = (a + b) / 2\n    return (square(a - centre) + square(b - centre)) / 2\n\nresult = spread(2, 6)\nprint(result)\nprint(square(3))\nprint(spread(5, 5))",
    "options": [
      "It prints the name of the square function.",
      "A NameError is raised because centre is local to spread.",
      "It prints 5.0 from the last spread call.",
      "It prints 4.0 from the first spread call."
    ],
    "answer": 1,
    "explanation": "centre is assigned inside spread and is not defined in the module namespace. Finishing a function call does not export its local names.",
    "bank": "D",
    "week": 4,
    "program": "D11",
    "source": "Mock D · D11 · Q55",
    "note": ""
  },
  {
    "id": "mock-D-056",
    "topic": "functions",
    "title": "What is the first printed line?",
    "code": "def first_multiple(start, stop, divisor=3):\n    while start < stop:\n        if start % divisor == 0:\n            return start\n        start += 1\n    return None\n\nprint(first_multiple(4, 10))\nprint(first_multiple(4, 6))\nprint(first_multiple(5, 10, 4))",
    "options": [
      "6",
      "4",
      "None",
      "9"
    ],
    "answer": 0,
    "explanation": "With the default divisor 3, the first qualifying integer from 4 up to but excluding 10 is 6.",
    "bank": "D",
    "week": 4,
    "program": "D12",
    "source": "Mock D · D12 · Q56",
    "note": "Assume start and stop are integers and divisor is a positive integer."
  },
  {
    "id": "mock-D-057",
    "topic": "functions",
    "title": "What is the second printed line?",
    "code": "def first_multiple(start, stop, divisor=3):\n    while start < stop:\n        if start % divisor == 0:\n            return start\n        start += 1\n    return None\n\nprint(first_multiple(4, 10))\nprint(first_multiple(4, 6))\nprint(first_multiple(5, 10, 4))",
    "options": [
      "6",
      "3",
      "4",
      "None"
    ],
    "answer": 3,
    "explanation": "Only 4 and 5 are checked. The upper endpoint 6 is excluded, so no match is returned.",
    "bank": "D",
    "week": 4,
    "program": "D12",
    "source": "Mock D · D12 · Q57",
    "note": "Assume start and stop are integers and divisor is a positive integer."
  },
  {
    "id": "mock-D-058",
    "topic": "functions",
    "title": "What does first_multiple(start=7, stop=10, divisor=2) return?",
    "code": "def first_multiple(start, stop, divisor=3):\n    while start < stop:\n        if start % divisor == 0:\n            return start\n        start += 1\n    return None\n\nprint(first_multiple(4, 10))\nprint(first_multiple(4, 6))\nprint(first_multiple(5, 10, 4))",
    "options": [
      "8",
      "7",
      "None",
      "10"
    ],
    "answer": 0,
    "explanation": "The keyword arguments specify the interval [7, 10) and divisor 2. The first even integer in that interval is 8.",
    "bank": "D",
    "week": 4,
    "program": "D12",
    "source": "Mock D · D12 · Q58",
    "note": "Assume start and stop are integers and divisor is a positive integer."
  },
  {
    "id": "mock-D-059",
    "topic": "functions",
    "title": "Replace only while start < stop: with while start <= stop:. What is the new second printed line?",
    "code": "def first_multiple(start, stop, divisor=3):\n    while start < stop:\n        if start % divisor == 0:\n            return start\n        start += 1\n    return None\n\nprint(first_multiple(4, 10))\nprint(first_multiple(4, 6))\nprint(first_multiple(5, 10, 4))",
    "options": [
      "None",
      "9",
      "6",
      "4"
    ],
    "answer": 2,
    "explanation": "The changed condition includes the endpoint 6, which is divisible by 3.",
    "bank": "D",
    "week": 4,
    "program": "D12",
    "source": "Mock D · D12 · Q59",
    "note": "Assume start and stop are integers and divisor is a positive integer."
  },
  {
    "id": "mock-D-060",
    "topic": "functions",
    "title": "Replace only start += 1 with return None, preserving its indentation. What is the new first printed line?",
    "code": "def first_multiple(start, stop, divisor=3):\n    while start < stop:\n        if start % divisor == 0:\n            return start\n        start += 1\n    return None\n\nprint(first_multiple(4, 10))\nprint(first_multiple(4, 6))\nprint(first_multiple(5, 10, 4))",
    "options": [
      "4",
      "6",
      "None",
      "The loop never terminates."
    ],
    "answer": 2,
    "explanation": "The first candidate, 4, fails the divisibility test. The new return then exits the function rather than trying 5 and 6.",
    "bank": "D",
    "week": 4,
    "program": "D12",
    "source": "Mock D · D12 · Q60",
    "note": "Assume start and stop are integers and divisor is a positive integer."
  },
  {
    "id": "mock-D-061",
    "topic": "lists",
    "title": "What is the first printed line?",
    "code": "pair = (\"Cu\", 3)\nsamples = (pair, (\"Al\", 5), (\"Cu\", 2))\nprint(samples[1][0])\nprint(samples[-1][1] + samples[0][1])\nprint(\"Cu\" in samples, pair in samples)\nprint(pair * 2)",
    "options": [
      "(\"Al\", 5)",
      "Cu",
      "5",
      "Al"
    ],
    "answer": 3,
    "explanation": "samples[1] is (\"Al\", 5), and index 0 selects its material label.",
    "bank": "D",
    "week": 5,
    "program": "D13",
    "source": "Mock D · D13 · Q61",
    "note": ""
  },
  {
    "id": "mock-D-062",
    "topic": "lists",
    "title": "What is the last printed line?",
    "code": "pair = (\"Cu\", 3)\nsamples = (pair, (\"Al\", 5), (\"Cu\", 2))\nprint(samples[1][0])\nprint(samples[-1][1] + samples[0][1])\nprint(\"Cu\" in samples, pair in samples)\nprint(pair * 2)",
    "options": [
      "('CuCu', 6)",
      "(('Cu', 3), ('Cu', 3))",
      "['Cu', 3, 'Cu', 3]",
      "('Cu', 3, 'Cu', 3)"
    ],
    "answer": 3,
    "explanation": "Tuple repetition repeats the tuple's elements. It does not multiply each numeric element or create nested pairs.",
    "bank": "D",
    "week": 5,
    "program": "D13",
    "source": "Mock D · D13 · Q62",
    "note": ""
  },
  {
    "id": "mock-D-063",
    "topic": "lists",
    "title": "What is the third printed line?",
    "code": "pair = (\"Cu\", 3)\nsamples = (pair, (\"Al\", 5), (\"Cu\", 2))\nprint(samples[1][0])\nprint(samples[-1][1] + samples[0][1])\nprint(\"Cu\" in samples, pair in samples)\nprint(pair * 2)",
    "options": [
      "True False",
      "True True",
      "False False",
      "False True"
    ],
    "answer": 3,
    "explanation": "The top-level elements of samples are tuples, not individual strings. pair is one of those tuples.",
    "bank": "D",
    "week": 5,
    "program": "D13",
    "source": "Mock D · D13 · Q63",
    "note": ""
  },
  {
    "id": "mock-D-064",
    "topic": "lists",
    "title": "What is the second printed line?",
    "code": "pair = (\"Cu\", 3)\nsamples = (pair, (\"Al\", 5), (\"Cu\", 2))\nprint(samples[1][0])\nprint(samples[-1][1] + samples[0][1])\nprint(\"Cu\" in samples, pair in samples)\nprint(pair * 2)",
    "options": [
      "7",
      "8",
      "5",
      "3"
    ],
    "answer": 2,
    "explanation": "The last record contributes 2, and the first contributes 3. Their sum is 5.",
    "bank": "D",
    "week": 5,
    "program": "D13",
    "source": "Mock D · D13 · Q64",
    "note": ""
  },
  {
    "id": "mock-D-065",
    "topic": "lists",
    "title": "Append pair = (\"Cu\", 9) and then print(samples[0], pair). What does the new print show?",
    "code": "pair = (\"Cu\", 3)\nsamples = (pair, (\"Al\", 5), (\"Cu\", 2))\nprint(samples[1][0])\nprint(samples[-1][1] + samples[0][1])\nprint(\"Cu\" in samples, pair in samples)\nprint(pair * 2)",
    "options": [
      "('Cu', 3) ('Cu', 3)",
      "A TypeError is raised by rebinding pair.",
      "('Cu', 9) ('Cu', 9)",
      "('Cu', 3) ('Cu', 9)"
    ],
    "answer": 3,
    "explanation": "Reassigning pair binds that name to a different tuple. The original tuple remains the first element of samples.",
    "bank": "D",
    "week": 5,
    "program": "D13",
    "source": "Mock D · D13 · Q65",
    "note": ""
  },
  {
    "id": "mock-D-071",
    "topic": "lists",
    "title": "What is the first printed line?",
    "code": "values = [5, 1, 4, 2]\nswaps = 0\nfor i in range(len(values) - 1):\n    if values[i] > values[i + 1]:\n        values[i], values[i + 1] = values[i + 1], values[i]\n        swaps += 1\nprint(values)\nprint(swaps)\nprint(values[-1])",
    "options": [
      "[1, 5, 4, 2]",
      "[5, 4, 2, 1]",
      "[1, 4, 2, 5]",
      "[1, 2, 4, 5]"
    ],
    "answer": 2,
    "explanation": "The value 5 swaps with 1, then 4, then 2. One pass puts it at the end but leaves 4 before 2.",
    "bank": "D",
    "week": 5,
    "program": "D15",
    "source": "Mock D · D15 · Q71",
    "note": ""
  },
  {
    "id": "mock-D-072",
    "topic": "lists",
    "title": "What is the second printed line?",
    "code": "values = [5, 1, 4, 2]\nswaps = 0\nfor i in range(len(values) - 1):\n    if values[i] > values[i + 1]:\n        values[i], values[i + 1] = values[i + 1], values[i]\n        swaps += 1\nprint(values)\nprint(swaps)\nprint(values[-1])",
    "options": [
      "3",
      "4",
      "1",
      "2"
    ],
    "answer": 0,
    "explanation": "The if condition is True for all three compared pairs, so three swaps occur.",
    "bank": "D",
    "week": 5,
    "program": "D15",
    "source": "Mock D · D15 · Q72",
    "note": ""
  },
  {
    "id": "mock-D-073",
    "topic": "lists",
    "title": "Replace range(len(values) - 1) with range(len(values)). What happens?",
    "code": "values = [5, 1, 4, 2]\nswaps = 0\nfor i in range(len(values) - 1):\n    if values[i] > values[i + 1]:\n        values[i], values[i + 1] = values[i + 1], values[i]\n        swaps += 1\nprint(values)\nprint(swaps)\nprint(values[-1])",
    "options": [
      "The extra iteration is ignored automatically.",
      "An IndexError is raised before any print statement.",
      "A TypeError is raised before the loop starts.",
      "The list becomes fully sorted and prints normally."
    ],
    "answer": 1,
    "explanation": "The additional iteration uses i = 3 and tries values[i + 1], which is values[4], outside the list.",
    "bank": "D",
    "week": 5,
    "program": "D15",
    "source": "Mock D · D15 · Q73",
    "note": ""
  },
  {
    "id": "mock-D-074",
    "topic": "lists",
    "title": "Replace only > with < in the if condition. What is the new first printed line?",
    "code": "values = [5, 1, 4, 2]\nswaps = 0\nfor i in range(len(values) - 1):\n    if values[i] > values[i + 1]:\n        values[i], values[i + 1] = values[i + 1], values[i]\n        swaps += 1\nprint(values)\nprint(swaps)\nprint(values[-1])",
    "options": [
      "[5, 4, 2, 1]",
      "[4, 5, 2, 1]",
      "[1, 2, 4, 5]",
      "[5, 1, 4, 2]"
    ],
    "answer": 0,
    "explanation": "The first pair is left unchanged. Then 1 swaps with 4 and later with 2, moving the smallest value to the end.",
    "bank": "D",
    "week": 5,
    "program": "D15",
    "source": "Mock D · D15 · Q74",
    "note": ""
  },
  {
    "id": "mock-D-075",
    "topic": "lists",
    "title": "For a nonempty list of ordinary integers, what does this original one-pass procedure guarantee?",
    "code": "values = [5, 1, 4, 2]\nswaps = 0\nfor i in range(len(values) - 1):\n    if values[i] > values[i + 1]:\n        values[i], values[i + 1] = values[i + 1], values[i]\n        swaps += 1\nprint(values)\nprint(swaps)\nprint(values[-1])",
    "options": [
      "A smallest value always reaches the last position.",
      "Exactly one swap occurs for every possible input list.",
      "The entire list is always sorted in ascending order.",
      "A largest value reaches the last position, but the list need not be fully sorted."
    ],
    "answer": 3,
    "explanation": "After each comparison, the largest value seen so far is in the right-hand position. At the end a largest value is last; earlier positions can remain unsorted.",
    "bank": "D",
    "week": 5,
    "program": "D15",
    "source": "Mock D · D15 · Q75",
    "note": ""
  },
  {
    "id": "mock-D-076",
    "topic": "recursion",
    "title": "What is the first printed line?",
    "code": "def power_rec(base, n):\n    if n == 0:\n        return 1\n    return base * power_rec(base, n - 1)\n\ndef power_iter(base, n):\n    result = 1\n    for i in range(n):\n        result *= base\n    return result\n\nprint(power_rec(3, 4), power_iter(3, 4))\nprint(power_rec(7, 0), power_iter(7, 0))",
    "options": [
      "27 27",
      "81 81",
      "12 12",
      "81 12"
    ],
    "answer": 1,
    "explanation": "Both functions multiply four factors of 3, producing 3 ** 4 = 81.",
    "bank": "D",
    "week": 6,
    "program": "D16",
    "source": "Mock D · D16 · Q76",
    "note": "Assume base is an integer and n is a nonnegative integer, except where a question explicitly tests an invalid input."
  },
  {
    "id": "mock-D-077",
    "topic": "recursion",
    "title": "What is the second printed line?",
    "code": "def power_rec(base, n):\n    if n == 0:\n        return 1\n    return base * power_rec(base, n - 1)\n\ndef power_iter(base, n):\n    result = 1\n    for i in range(n):\n        result *= base\n    return result\n\nprint(power_rec(3, 4), power_iter(3, 4))\nprint(power_rec(7, 0), power_iter(7, 0))",
    "options": [
      "7 7",
      "1 0",
      "1 1",
      "0 0"
    ],
    "answer": 2,
    "explanation": "The recursive base case returns 1. The iterative loop runs zero times and leaves result at 1.",
    "bank": "D",
    "week": 6,
    "program": "D16",
    "source": "Mock D · D16 · Q77",
    "note": "Assume base is an integer and n is a nonnegative integer, except where a question explicitly tests an invalid input."
  },
  {
    "id": "mock-D-078",
    "topic": "recursion",
    "title": "For power_rec(3, 4) alone, how many calls to power_rec occur, including the initial and base-case calls?",
    "code": "def power_rec(base, n):\n    if n == 0:\n        return 1\n    return base * power_rec(base, n - 1)\n\ndef power_iter(base, n):\n    result = 1\n    for i in range(n):\n        result *= base\n    return result\n\nprint(power_rec(3, 4), power_iter(3, 4))\nprint(power_rec(7, 0), power_iter(7, 0))",
    "options": [
      "3",
      "5",
      "6",
      "4"
    ],
    "answer": 1,
    "explanation": "The exponent arguments are 4, 3, 2, 1, and 0, giving five calls.",
    "bank": "D",
    "week": 6,
    "program": "D16",
    "source": "Mock D · D16 · Q78",
    "note": "Assume base is an integer and n is a nonnegative integer, except where a question explicitly tests an invalid input."
  },
  {
    "id": "mock-D-079",
    "topic": "recursion",
    "title": "Change only the recursive base-case line return 1 to return 0. What is the new first printed line?",
    "code": "def power_rec(base, n):\n    if n == 0:\n        return 1\n    return base * power_rec(base, n - 1)\n\ndef power_iter(base, n):\n    result = 1\n    for i in range(n):\n        result *= base\n    return result\n\nprint(power_rec(3, 4), power_iter(3, 4))\nprint(power_rec(7, 0), power_iter(7, 0))",
    "options": [
      "0 81",
      "81 81",
      "1 81",
      "0 0"
    ],
    "answer": 0,
    "explanation": "Every multiplication in the recursive function ultimately multiplies the zero returned at the base case. The iterative function is unchanged.",
    "bank": "D",
    "week": 6,
    "program": "D16",
    "source": "Mock D · D16 · Q79",
    "note": "Assume base is an integer and n is a nonnegative integer, except where a question explicitly tests an invalid input."
  },
  {
    "id": "mock-D-080",
    "topic": "recursion",
    "title": "Now deliberately use n = -1. Consider power_rec(2, -1) and power_iter(2, -1) separately. Which description is correct?",
    "code": "def power_rec(base, n):\n    if n == 0:\n        return 1\n    return base * power_rec(base, n - 1)\n\ndef power_iter(base, n):\n    result = 1\n    for i in range(n):\n        result *= base\n    return result\n\nprint(power_rec(3, 4), power_iter(3, 4))\nprint(power_rec(7, 0), power_iter(7, 0))",
    "options": [
      "Both return 1.",
      "Both return 0.5.",
      "The recursive call raises RecursionError; the iterative call returns 1.",
      "The iterative call never terminates; the recursive call returns 0.5."
    ],
    "answer": 2,
    "explanation": "Subtracting 1 from a negative exponent never reaches zero, so recursion reaches Python's recursion limit. range(-1) is empty, leaving the iterative result at 1.",
    "bank": "D",
    "week": 6,
    "program": "D16",
    "source": "Mock D · D16 · Q80",
    "note": "Assume base is an integer and n is a nonnegative integer, except where a question explicitly tests an invalid input."
  },
  {
    "id": "mock-D-081",
    "topic": "recursion",
    "title": "What is the first printed line?",
    "code": "def locate(values, target, low, high):\n    if low > high:\n        return -1\n    mid = (low + high) // 2\n    if values[mid] == target:\n        return mid\n    if values[mid] < target:\n        return locate(values, target, mid + 1, high)\n    return locate(values, target, low, mid - 1)\n\ndata = [2, 5, 8, 11, 14]\nprint(locate(data, 11, 0, len(data) - 1))\nprint(locate(data, 7, 0, len(data) - 1))",
    "options": [
      "4",
      "11",
      "2",
      "3"
    ],
    "answer": 3,
    "explanation": "The function returns the index, not the value. The target 11 is at index 3.",
    "bank": "D",
    "week": 6,
    "program": "D17",
    "source": "Mock D · D17 · Q81",
    "note": "Assume values is sorted in ascending order. low and high are inclusive search bounds."
  },
  {
    "id": "mock-D-082",
    "topic": "recursion",
    "title": "What is the second printed line?",
    "code": "def locate(values, target, low, high):\n    if low > high:\n        return -1\n    mid = (low + high) // 2\n    if values[mid] == target:\n        return mid\n    if values[mid] < target:\n        return locate(values, target, mid + 1, high)\n    return locate(values, target, low, mid - 1)\n\ndata = [2, 5, 8, 11, 14]\nprint(locate(data, 11, 0, len(data) - 1))\nprint(locate(data, 7, 0, len(data) - 1))",
    "options": [
      "None",
      "-1",
      "2",
      "7"
    ],
    "answer": 1,
    "explanation": "The target 7 is absent. Eventually low exceeds high, and the failure base case returns -1.",
    "bank": "D",
    "week": 6,
    "program": "D17",
    "source": "Mock D · D17 · Q82",
    "note": "Assume values is sorted in ascending order. low and high are inclusive search bounds."
  },
  {
    "id": "mock-D-083",
    "topic": "recursion",
    "title": "For locate(data, 11, 0, 4) alone, how many calls to locate occur, including the initial call?",
    "code": "def locate(values, target, low, high):\n    if low > high:\n        return -1\n    mid = (low + high) // 2\n    if values[mid] == target:\n        return mid\n    if values[mid] < target:\n        return locate(values, target, mid + 1, high)\n    return locate(values, target, low, mid - 1)\n\ndata = [2, 5, 8, 11, 14]\nprint(locate(data, 11, 0, len(data) - 1))\nprint(locate(data, 7, 0, len(data) - 1))",
    "options": [
      "2",
      "4",
      "1",
      "3"
    ],
    "answer": 0,
    "explanation": "The first call checks index 2 (value 8). The second checks index 3 (value 11) and returns immediately.",
    "bank": "D",
    "week": 6,
    "program": "D17",
    "source": "Mock D · D17 · Q83",
    "note": "Assume values is sorted in ascending order. low and high are inclusive search bounds."
  },
  {
    "id": "mock-D-084",
    "topic": "recursion",
    "title": "What does the extra call locate(data, 14, 0, 3) return?",
    "code": "def locate(values, target, low, high):\n    if low > high:\n        return -1\n    mid = (low + high) // 2\n    if values[mid] == target:\n        return mid\n    if values[mid] < target:\n        return locate(values, target, mid + 1, high)\n    return locate(values, target, low, mid - 1)\n\ndata = [2, 5, 8, 11, 14]\nprint(locate(data, 11, 0, len(data) - 1))\nprint(locate(data, 7, 0, len(data) - 1))",
    "options": [
      "4",
      "3",
      "14",
      "-1"
    ],
    "answer": 3,
    "explanation": "The supplied inclusive interval ends at index 3, so index 4, where 14 is stored, is not searched.",
    "bank": "D",
    "week": 6,
    "program": "D17",
    "source": "Mock D · D17 · Q84",
    "note": "Assume values is sorted in ascending order. low and high are inclusive search bounds."
  },
  {
    "id": "mock-D-085",
    "topic": "recursion",
    "title": "Why does the upper-half recursive call use mid + 1 rather than mid?",
    "code": "def locate(values, target, low, high):\n    if low > high:\n        return -1\n    mid = (low + high) // 2\n    if values[mid] == target:\n        return mid\n    if values[mid] < target:\n        return locate(values, target, mid + 1, high)\n    return locate(values, target, low, mid - 1)\n\ndata = [2, 5, 8, 11, 14]\nprint(locate(data, 11, 0, len(data) - 1))\nprint(locate(data, 7, 0, len(data) - 1))",
    "options": [
      "It excludes the already-tested midpoint and ensures that the search interval shrinks.",
      "It converts an index into the target value.",
      "It allows the code to work on any unsorted list.",
      "It avoids the need for either base case."
    ],
    "answer": 0,
    "explanation": "The midpoint is known not to match. Including it again can repeat an unchanged one-element interval; for example, a search above the largest value may recurse without progress.",
    "bank": "D",
    "week": 6,
    "program": "D17",
    "source": "Mock D · D17 · Q85",
    "note": "Assume values is sorted in ascending order. low and high are inclusive search bounds."
  },
  {
    "id": "mock-D-086",
    "topic": "recursion",
    "title": "What is the first printed line?",
    "code": "def compress(text):\n    if len(text) < 2:\n        return text\n    tail = compress(text[1:])\n    if text[0] == tail[0]:\n        return tail\n    return text[0] + tail\n\nword = \"AAABBCCA\"\nprint(compress(word))\nprint(word)\nprint(compress(\"\"))",
    "options": [
      "ABCA",
      "ABC",
      "AAABBCCA",
      "AABBCA"
    ],
    "answer": 0,
    "explanation": "Each consecutive run is reduced to one character: AAA, BB, CC, A become A, B, C, A.",
    "bank": "D",
    "week": 6,
    "program": "D18",
    "source": "Mock D · D18 · Q86",
    "note": ""
  },
  {
    "id": "mock-D-087",
    "topic": "recursion",
    "title": "What does compress(\"\") return?",
    "code": "def compress(text):\n    if len(text) < 2:\n        return text\n    tail = compress(text[1:])\n    if text[0] == tail[0]:\n        return tail\n    return text[0] + tail\n\nword = \"AAABBCCA\"\nprint(compress(word))\nprint(word)\nprint(compress(\"\"))",
    "options": [
      "\" \"",
      "\"\"",
      "A RecursionError is raised.",
      "None"
    ],
    "answer": 1,
    "explanation": "The empty string has length less than 2, so the base case returns it unchanged. Printing it produces a blank line.",
    "bank": "D",
    "week": 6,
    "program": "D18",
    "source": "Mock D · D18 · Q87",
    "note": ""
  },
  {
    "id": "mock-D-088",
    "topic": "recursion",
    "title": "For compress(word) alone, how many calls to compress occur, including the initial and base-case calls?",
    "code": "def compress(text):\n    if len(text) < 2:\n        return text\n    tail = compress(text[1:])\n    if text[0] == tail[0]:\n        return tail\n    return text[0] + tail\n\nword = \"AAABBCCA\"\nprint(compress(word))\nprint(word)\nprint(compress(\"\"))",
    "options": [
      "8",
      "4",
      "9",
      "7"
    ],
    "answer": 0,
    "explanation": "The argument lengths are 8, 7, 6, 5, 4, 3, 2, and 1. The length-1 call returns without making an empty-string call.",
    "bank": "D",
    "week": 6,
    "program": "D18",
    "source": "Mock D · D18 · Q88",
    "note": ""
  },
  {
    "id": "mock-D-089",
    "topic": "recursion",
    "title": "What does the extra call compress(\"ABBA\") return?",
    "code": "def compress(text):\n    if len(text) < 2:\n        return text\n    tail = compress(text[1:])\n    if text[0] == tail[0]:\n        return tail\n    return text[0] + tail\n\nword = \"AAABBCCA\"\nprint(compress(word))\nprint(word)\nprint(compress(\"\"))",
    "options": [
      "\"AB\"",
      "\"ABA\"",
      "\"ABBA\"",
      "\"BA\""
    ],
    "answer": 1,
    "explanation": "The two adjacent B characters collapse into one. The A characters are separated and both remain.",
    "bank": "D",
    "week": 6,
    "program": "D18",
    "source": "Mock D · D18 · Q89",
    "note": ""
  },
  {
    "id": "mock-D-090",
    "topic": "recursion",
    "title": "Why is the final A retained in the first output even though A also appears at the beginning?",
    "code": "def compress(text):\n    if len(text) < 2:\n        return text\n    tail = compress(text[1:])\n    if text[0] == tail[0]:\n        return tail\n    return text[0] + tail\n\nword = \"AAABBCCA\"\nprint(compress(word))\nprint(word)\nprint(compress(\"\"))",
    "options": [
      "Strings can store each character only once.",
      "Recursion stops as soon as any A is found.",
      "Only adjacent repeated characters are removed; separate runs are preserved.",
      "The function removes every repeated character except the last one."
    ],
    "answer": 2,
    "explanation": "The algorithm compares the first character with the start of the compressed suffix. It collapses consecutive runs, not all repeated letters in the entire string.",
    "bank": "D",
    "week": 6,
    "program": "D18",
    "source": "Mock D · D18 · Q90",
    "note": ""
  },
  {
    "id": "mock-D-091",
    "topic": "dicts",
    "title": "What value is stored in by_temp[18]?",
    "code": "readings = {\"P1\": 18, \"P2\": 20, \"P3\": 18}\nby_temp = {}\nfor sensor, value in readings.items():\n    by_temp[value] = sensor\nprint(by_temp)\nprint(list(by_temp.keys()))\nprint(18 in by_temp, \"P1\" in by_temp.values())\nprint(readings[\"P1\"])",
    "options": [
      "\"P1\"",
      "\"P3\"",
      "[\"P1\", \"P3\"]",
      "18"
    ],
    "answer": 1,
    "explanation": "P1 first creates key 18, but the later P3 reading overwrites the value associated with that same key.",
    "bank": "D",
    "week": 6,
    "program": "D19",
    "source": "Mock D · D19 · Q91",
    "note": ""
  },
  {
    "id": "mock-D-092",
    "topic": "dicts",
    "title": "What is len(by_temp) after the loop?",
    "code": "readings = {\"P1\": 18, \"P2\": 20, \"P3\": 18}\nby_temp = {}\nfor sensor, value in readings.items():\n    by_temp[value] = sensor\nprint(by_temp)\nprint(list(by_temp.keys()))\nprint(18 in by_temp, \"P1\" in by_temp.values())\nprint(readings[\"P1\"])",
    "options": [
      "2",
      "3",
      "4",
      "1"
    ],
    "answer": 0,
    "explanation": "There are only two distinct temperature keys: 18 and 20.",
    "bank": "D",
    "week": 6,
    "program": "D19",
    "source": "Mock D · D19 · Q92",
    "note": ""
  },
  {
    "id": "mock-D-093",
    "topic": "dicts",
    "title": "What is the second printed line?",
    "code": "readings = {\"P1\": 18, \"P2\": 20, \"P3\": 18}\nby_temp = {}\nfor sensor, value in readings.items():\n    by_temp[value] = sensor\nprint(by_temp)\nprint(list(by_temp.keys()))\nprint(18 in by_temp, \"P1\" in by_temp.values())\nprint(readings[\"P1\"])",
    "options": [
      "[18, 20]",
      "['P1', 'P2', 'P3']",
      "[18, 20, 18]",
      "[20, 18]"
    ],
    "answer": 0,
    "explanation": "Key 18 is first inserted before key 20. Replacing its associated value does not move the key to a new insertion-order position.",
    "bank": "D",
    "week": 6,
    "program": "D19",
    "source": "Mock D · D19 · Q93",
    "note": ""
  },
  {
    "id": "mock-D-094",
    "topic": "dicts",
    "title": "Change only the original P3 reading from 18 to 21. What is the new value of by_temp[18]?",
    "code": "readings = {\"P1\": 18, \"P2\": 20, \"P3\": 18}\nby_temp = {}\nfor sensor, value in readings.items():\n    by_temp[value] = sensor\nprint(by_temp)\nprint(list(by_temp.keys()))\nprint(18 in by_temp, \"P1\" in by_temp.values())\nprint(readings[\"P1\"])",
    "options": [
      "\"P1\"",
      "\"P2\"",
      "\"P3\"",
      "A KeyError is raised."
    ],
    "answer": 0,
    "explanation": "P3 now creates a separate key 21 instead of overwriting key 18, which retains P1.",
    "bank": "D",
    "week": 6,
    "program": "D19",
    "source": "Mock D · D19 · Q94",
    "note": ""
  },
  {
    "id": "mock-D-095",
    "topic": "dicts",
    "title": "Why does the original by_temp not preserve both sensor names under temperature 18?",
    "code": "readings = {\"P1\": 18, \"P2\": 20, \"P3\": 18}\nby_temp = {}\nfor sensor, value in readings.items():\n    by_temp[value] = sensor\nprint(by_temp)\nprint(list(by_temp.keys()))\nprint(18 in by_temp, \"P1\" in by_temp.values())\nprint(readings[\"P1\"])",
    "options": [
      "Dictionaries do not allow integer keys.",
      "items() skips every repeated reading automatically.",
      "A dictionary can contain at most two entries.",
      "Each key has one current value, and the assignment replaces that value."
    ],
    "answer": 3,
    "explanation": "Dictionary keys are unique. To retain multiple names under one key, the program would need to build a container such as a list rather than overwrite a single name.",
    "bank": "D",
    "week": 6,
    "program": "D19",
    "source": "Mock D · D19 · Q95",
    "note": ""
  },
  {
    "id": "mock-D-096",
    "topic": "dicts",
    "title": "What is the first printed line?",
    "code": "samples = [(\"Cu\", 2), (\"Al\", 3), (\"Cu\", 5), (\"Fe\", 1), (\"Al\", 4)]\ngroups = {}\nfor metal, mass in samples:\n    if metal not in groups:\n        groups[metal] = []\n    groups[metal].append(mass)\nprint(groups[\"Cu\"])\nprint(list(groups.keys()))\nprint(sum(groups[\"Al\"]))\nprint(len(groups), len(samples))",
    "options": [
      "7",
      "[2, 5]",
      "[2, 3, 5, 1, 4]",
      "[5]"
    ],
    "answer": 1,
    "explanation": "The two Cu samples append masses 2 and 5 to the same Cu list, in input order.",
    "bank": "D",
    "week": 6,
    "program": "D20",
    "source": "Mock D · D20 · Q96",
    "note": ""
  },
  {
    "id": "mock-D-097",
    "topic": "dicts",
    "title": "What is the third printed line?",
    "code": "samples = [(\"Cu\", 2), (\"Al\", 3), (\"Cu\", 5), (\"Fe\", 1), (\"Al\", 4)]\ngroups = {}\nfor metal, mass in samples:\n    if metal not in groups:\n        groups[metal] = []\n    groups[metal].append(mass)\nprint(groups[\"Cu\"])\nprint(list(groups.keys()))\nprint(sum(groups[\"Al\"]))\nprint(len(groups), len(samples))",
    "options": [
      "4",
      "7",
      "3",
      "15"
    ],
    "answer": 1,
    "explanation": "The Al list is [3, 4], and sum([3, 4]) is 7.",
    "bank": "D",
    "week": 6,
    "program": "D20",
    "source": "Mock D · D20 · Q97",
    "note": ""
  },
  {
    "id": "mock-D-098",
    "topic": "dicts",
    "title": "Replace only groups[metal] = [] with groups[metal] = [0]. What is the new value of len(groups[\"Cu\"])?",
    "code": "samples = [(\"Cu\", 2), (\"Al\", 3), (\"Cu\", 5), (\"Fe\", 1), (\"Al\", 4)]\ngroups = {}\nfor metal, mass in samples:\n    if metal not in groups:\n        groups[metal] = []\n    groups[metal].append(mass)\nprint(groups[\"Cu\"])\nprint(list(groups.keys()))\nprint(sum(groups[\"Al\"]))\nprint(len(groups), len(samples))",
    "options": [
      "3",
      "7",
      "1",
      "2"
    ],
    "answer": 0,
    "explanation": "The new Cu list begins with 0 and then receives 2 and 5, producing [0, 2, 5].",
    "bank": "D",
    "week": 6,
    "program": "D20",
    "source": "Mock D · D20 · Q98",
    "note": ""
  },
  {
    "id": "mock-D-099",
    "topic": "dicts",
    "title": "Delete if metal not in groups: and unindent groups[metal] = [] by one level so it runs on every loop iteration. What is the first printed line?",
    "code": "samples = [(\"Cu\", 2), (\"Al\", 3), (\"Cu\", 5), (\"Fe\", 1), (\"Al\", 4)]\ngroups = {}\nfor metal, mass in samples:\n    if metal not in groups:\n        groups[metal] = []\n    groups[metal].append(mass)\nprint(groups[\"Cu\"])\nprint(list(groups.keys()))\nprint(sum(groups[\"Al\"]))\nprint(len(groups), len(samples))",
    "options": [
      "[5]",
      "[2, 5]",
      "[]",
      "[2]"
    ],
    "answer": 0,
    "explanation": "When Cu appears again, its earlier list [2] is discarded. A fresh list is created and only the last Cu mass, 5, is appended.",
    "bank": "D",
    "week": 6,
    "program": "D20",
    "source": "Mock D · D20 · Q99",
    "note": ""
  },
  {
    "id": "mock-D-100",
    "topic": "dicts",
    "title": "Insert shared = [] before the loop and replace groups[metal] = [] with groups[metal] = shared. What is the first printed line?",
    "code": "samples = [(\"Cu\", 2), (\"Al\", 3), (\"Cu\", 5), (\"Fe\", 1), (\"Al\", 4)]\ngroups = {}\nfor metal, mass in samples:\n    if metal not in groups:\n        groups[metal] = []\n    groups[metal].append(mass)\nprint(groups[\"Cu\"])\nprint(list(groups.keys()))\nprint(sum(groups[\"Al\"]))\nprint(len(groups), len(samples))",
    "options": [
      "[5]",
      "[]",
      "[2, 3, 5, 1, 4]",
      "[2, 5]"
    ],
    "answer": 2,
    "explanation": "Each dictionary entry now refers to the same list. Every append changes that shared list, so the Cu entry contains all five masses.",
    "bank": "D",
    "week": 6,
    "program": "D20",
    "source": "Mock D · D20 · Q100",
    "note": ""
  }
];
const PROGRAMS = [
  {
    "id": "A02",
    "bank": "A",
    "week": 1,
    "topic": "arithmetic",
    "name": "Arithmetic and precedence",
    "note": "",
    "code": "a = 17\nb = 5\nprint(a + b * 2)\nprint((a + b) * 2)\nprint(a / b, a // b, a % b)\nprint(2 ** 3 ** 2)\nprint(-a // b)",
    "output": "27\n44\n3.4 3 2\n512\n-4",
    "source": "Mock A · A02",
    "questionIds": [
      "mock-A-006",
      "mock-A-007",
      "mock-A-008",
      "mock-A-009",
      "mock-A-010"
    ]
  },
  {
    "id": "A04",
    "bank": "A",
    "week": 2,
    "topic": "decisions",
    "name": "Conditional equipment status",
    "note": "The thresholds are illustrative, not real equipment-safety limits.",
    "code": "temperature = 80\npressure = 4\nstatus = \"Normal\"\nif temperature >= 80 and pressure > 5:\n    status = \"Shutdown\"\nelif temperature >= 80 or pressure > 5:\n    status = \"Warning\"\nelse:\n    status = \"Normal\"\nprint(status)\nprint(temperature >= 80, pressure > 5)",
    "output": "Warning\nTrue False",
    "source": "Mock A · A04",
    "questionIds": [
      "mock-A-016",
      "mock-A-017",
      "mock-A-018",
      "mock-A-019",
      "mock-A-020"
    ]
  },
  {
    "id": "A06",
    "bank": "A",
    "week": 2,
    "topic": "while",
    "name": "While loops and a stopping digit",
    "note": "",
    "code": "digits = \"314052\"\nindex = 0\ntotal = 0\nwhile index < len(digits):\n    digit = int(digits[index])\n    index += 1\n    if digit == 0:\n        break\n    total += digit\nprint(total, index)\nprint(digits[index:])",
    "output": "8 4\n52",
    "source": "Mock A · A06",
    "questionIds": [
      "mock-A-026",
      "mock-A-027",
      "mock-A-028",
      "mock-A-029",
      "mock-A-030"
    ]
  },
  {
    "id": "A07",
    "bank": "A",
    "week": 3,
    "topic": "strings",
    "name": "String cleaning and slicing",
    "note": "",
    "code": "raw = \"  pump-A7  \"\ncode = raw.strip().lower()\npart = code[:4]\ntail = code[-2:]\nchanged = code.replace(\"pump\", \"valve\")\nprint(code)\nprint(part, tail)\nprint(changed)\nprint(code[::2])",
    "output": "pump-a7\npump a7\nvalve-a7\npm-7",
    "source": "Mock A · A07",
    "questionIds": [
      "mock-A-031",
      "mock-A-032",
      "mock-A-033",
      "mock-A-034",
      "mock-A-035"
    ]
  },
  {
    "id": "A08",
    "bank": "A",
    "week": 3,
    "topic": "while",
    "name": "Integer guess and check",
    "note": "Assume target is a nonnegative integer.",
    "code": "target = 50\nguess = 0\nchecks = 0\nwhile guess * guess < target:\n    guess += 1\n    checks += 1\nif guess * guess == target:\n    print(\"Exact\", guess)\nelse:\n    print(\"Not exact\", guess)\nprint(checks)",
    "output": "Not exact 8\n8",
    "source": "Mock A · A08",
    "questionIds": [
      "mock-A-036",
      "mock-A-037",
      "mock-A-038",
      "mock-A-039",
      "mock-A-040"
    ]
  },
  {
    "id": "A12",
    "bank": "A",
    "week": 4,
    "topic": "functions",
    "name": "Boolean functions and early returns",
    "note": "",
    "code": "def within_limit(value, lower, upper):\n    return lower <= value <= upper\n\ndef classify(value):\n    if within_limit(value, 10, 20):\n        return \"Accept\"\n    return \"Reject\"\n\naccepted = 0\nfor reading in range(8, 25, 4):\n    if classify(reading) == \"Accept\":\n        accepted += 1\nprint(accepted)\nprint(classify(20), classify(21))",
    "output": "3\nAccept Reject",
    "source": "Mock A · A12",
    "questionIds": [
      "mock-A-056",
      "mock-A-057",
      "mock-A-058",
      "mock-A-059",
      "mock-A-060"
    ]
  },
  {
    "id": "A13",
    "bank": "A",
    "week": 5,
    "topic": "lists",
    "name": "Tuples and unpacking",
    "note": "",
    "code": "record = (\"Pump A\", 4, 12.5)\nname, units, rating = record\nsingle = (units,)\nextended = record + (True,)\nprint(name)\nprint(record[-1])\nprint(record[1:])\nprint(len(single), len(extended))",
    "output": "Pump A\n12.5\n(4, 12.5)\n1 4",
    "source": "Mock A · A13",
    "questionIds": [
      "mock-A-061",
      "mock-A-062",
      "mock-A-063",
      "mock-A-064",
      "mock-A-065"
    ]
  },
  {
    "id": "A15",
    "bank": "A",
    "week": 5,
    "topic": "lists",
    "name": "List aliases and copies",
    "note": "",
    "code": "original = [2, 4, 6]\nalias = original\ncopied = original[:]\nalias[0] = 9\ncopied.append(8)\nprint(original)\nprint(copied)\nprint(alias is original)\nprint(copied == original)",
    "output": "[9, 4, 6]\n[2, 4, 6, 8]\nTrue\nFalse",
    "source": "Mock A · A15",
    "questionIds": [
      "mock-A-071",
      "mock-A-072",
      "mock-A-073",
      "mock-A-074",
      "mock-A-075"
    ]
  },
  {
    "id": "A16",
    "bank": "A",
    "week": 6,
    "topic": "recursion",
    "name": "Recursion compared with iteration",
    "note": "Assume small nonnegative integer inputs unless a question says otherwise.",
    "code": "def factorial_recursive(n):\n    if n == 0:\n        return 1\n    return n * factorial_recursive(n - 1)\n\ndef factorial_iterative(n):\n    result = 1\n    for k in range(1, n + 1):\n        result *= k\n    return result\n\nprint(factorial_recursive(4))\nprint(factorial_iterative(4))\nprint(factorial_recursive(0), factorial_iterative(0))",
    "output": "24\n24\n1 1",
    "source": "Mock A · A16",
    "questionIds": [
      "mock-A-076",
      "mock-A-077",
      "mock-A-078",
      "mock-A-079",
      "mock-A-080"
    ]
  },
  {
    "id": "A17",
    "bank": "A",
    "week": 6,
    "topic": "recursion",
    "name": "Recursion with two base cases",
    "note": "Assume small nonnegative integer inputs unless a question says otherwise.",
    "code": "def fibonacci(n):\n    if n == 0:\n        return 0\n    if n == 1:\n        return 1\n    return fibonacci(n - 1) + fibonacci(n - 2)\n\nprint(fibonacci(5))\nprint(fibonacci(0), fibonacci(1))",
    "output": "5\n0 1",
    "source": "Mock A · A17",
    "questionIds": [
      "mock-A-081",
      "mock-A-082",
      "mock-A-083",
      "mock-A-084",
      "mock-A-085"
    ]
  },
  {
    "id": "A18",
    "bank": "A",
    "week": 6,
    "topic": "recursion",
    "name": "Recursion on strings",
    "note": "",
    "code": "def is_palindrome(text):\n    if len(text) <= 1:\n        return True\n    if text[0] != text[-1]:\n        return False\n    return is_palindrome(text[1:-1])\n\nword = \"Level\".lower()\nprint(is_palindrome(word))\nprint(is_palindrome(\"lever\"))\nprint(is_palindrome(\"\"))",
    "output": "True\nFalse\nTrue",
    "source": "Mock A · A18",
    "questionIds": [
      "mock-A-086",
      "mock-A-087",
      "mock-A-088",
      "mock-A-089",
      "mock-A-090"
    ]
  },
  {
    "id": "A20",
    "bank": "A",
    "week": 6,
    "topic": "dicts",
    "name": "Dictionary counting keys and values",
    "note": "",
    "code": "materials = [\"steel\", \"glass\", \"steel\", \"wood\", \"glass\", \"steel\"]\ncounts = {}\nfor material in materials:\n    counts[material] = counts.get(material, 0) + 1\nkeys = list(counts.keys())\nvalues = list(counts.values())\nprint(counts)\nprint(keys)\nprint(values)\nprint(sum(values))",
    "output": "{'steel': 3, 'glass': 2, 'wood': 1}\n['steel', 'glass', 'wood']\n[3, 2, 1]\n6",
    "source": "Mock A · A20",
    "questionIds": [
      "mock-A-096",
      "mock-A-097",
      "mock-A-098",
      "mock-A-099",
      "mock-A-100"
    ]
  },
  {
    "id": "B02",
    "bank": "B",
    "week": 1,
    "topic": "arithmetic",
    "name": "Assignment order and saved values",
    "note": "",
    "code": "x = 8\ny = 3\nsaved = x\nx = x - y\ny = saved + y\npower = x ** 2 - y\nratio = power / 2\nprint(x, y, saved)\nprint(power, ratio)",
    "output": "5 11 8\n14 7.0",
    "source": "Mock B · B02",
    "questionIds": [
      "mock-B-006",
      "mock-B-007",
      "mock-B-008",
      "mock-B-009",
      "mock-B-010"
    ]
  },
  {
    "id": "B03",
    "bank": "B",
    "week": 1,
    "topic": "types",
    "name": "Text and numeric values",
    "note": "",
    "code": "left = \"6\"\nright = \"2\"\njoined = left + right\nrepeated = right * 3\nnumber = int(joined)\nhalf = number / 2\nis_equal = joined == number\nprint(joined, repeated)\nprint(number + int(right), half)\nprint(is_equal)",
    "output": "62 222\n64 31.0\nFalse",
    "source": "Mock B · B03",
    "questionIds": [
      "mock-B-011",
      "mock-B-012",
      "mock-B-013",
      "mock-B-014",
      "mock-B-015"
    ]
  },
  {
    "id": "B04",
    "bank": "B",
    "week": 2,
    "topic": "decisions",
    "name": "Nested decisions and indentation",
    "note": "The controller labels and threshold are illustrative.",
    "code": "level = 4\noverride = False\nstatus = \"Idle\"\nif level > 3:\n    if override:\n        status = \"Manual\"\n    else:\n        status = \"Auto\"\nelse:\n    status = \"Standby\"\nprint(status)\nprint(level > 3 and not override)",
    "output": "Auto\nTrue",
    "source": "Mock B · B04",
    "questionIds": [
      "mock-B-016",
      "mock-B-017",
      "mock-B-018",
      "mock-B-019",
      "mock-B-020"
    ]
  },
  {
    "id": "B05",
    "bank": "B",
    "week": 2,
    "topic": "for",
    "name": "Nested loops and running totals",
    "note": "",
    "code": "total = 0\nfor row in range(1, 4):\n    subtotal = 0\n    for column in range(row):\n        subtotal += row + column\n    print(row, subtotal)\n    total += subtotal\nprint(\"Total\", total)",
    "output": "1 1\n2 5\n3 12\nTotal 18",
    "source": "Mock B · B05",
    "questionIds": [
      "mock-B-021",
      "mock-B-022",
      "mock-B-023",
      "mock-B-024",
      "mock-B-025"
    ]
  },
  {
    "id": "B06",
    "bank": "B",
    "week": 2,
    "topic": "while",
    "name": "While loops with skip and stop",
    "note": "",
    "code": "n = 9\ntotal = 0\nwhile n > 0:\n    n -= 1\n    if n % 3 == 0:\n        continue\n    total += n\n    if total >= 20:\n        break\nprint(n, total)",
    "output": "5 20",
    "source": "Mock B · B06",
    "questionIds": [
      "mock-B-026",
      "mock-B-027",
      "mock-B-028",
      "mock-B-029",
      "mock-B-030"
    ]
  },
  {
    "id": "B07",
    "bank": "B",
    "week": 3,
    "topic": "strings",
    "name": "Finding overlapping text patterns",
    "note": "",
    "code": "text = \"ABABA\"\npattern = \"ABA\"\ncount = 0\npositions = \"\"\nfor i in range(len(text) - len(pattern) + 1):\n    if text[i:i + len(pattern)] == pattern:\n        count += 1\n        positions += str(i)\nprint(count, positions)\nprint(text[::-1])\nprint(text[1:4])",
    "output": "2 02\nABABA\nBAB",
    "source": "Mock B · B07",
    "questionIds": [
      "mock-B-031",
      "mock-B-032",
      "mock-B-033",
      "mock-B-034",
      "mock-B-035"
    ]
  },
  {
    "id": "B08",
    "bank": "B",
    "week": 3,
    "topic": "while",
    "name": "Guess and check for an integer factor",
    "note": "Assume number is an integer greater than or equal to 2.",
    "code": "number = 91\ndivisor = 2\nchecks = 0\nwhile divisor * divisor <= number:\n    checks += 1\n    if number % divisor == 0:\n        break\n    divisor += 1\nif divisor * divisor <= number:\n    print(\"Factor\", divisor)\nelse:\n    print(\"No small factor\")\nprint(checks)",
    "output": "Factor 7\n6",
    "source": "Mock B · B08",
    "questionIds": [
      "mock-B-036",
      "mock-B-037",
      "mock-B-038",
      "mock-B-039",
      "mock-B-040"
    ]
  },
  {
    "id": "B10",
    "bank": "B",
    "week": 4,
    "topic": "functions",
    "name": "Printing versus returning a value",
    "note": "",
    "code": "def display_double(value):\n    print(value * 2)\n\ndef return_double(value):\n    return value * 2\n\nfirst = display_double(4)\nsecond = return_double(4)\nprint(first, second)",
    "output": "8\nNone 8",
    "source": "Mock B · B10",
    "questionIds": [
      "mock-B-046",
      "mock-B-047",
      "mock-B-048",
      "mock-B-049",
      "mock-B-050"
    ]
  },
  {
    "id": "B11",
    "bank": "B",
    "week": 4,
    "topic": "functions",
    "name": "Decomposing a sensor calculation",
    "note": "Assume span is positive; values and thresholds are illustrative.",
    "code": "def normalise(raw, zero, span):\n    return (raw - zero) / span\n\ndef classify(fraction):\n    if fraction < 0.25:\n        return \"LOW\"\n    if fraction <= 0.75:\n        return \"MID\"\n    return \"HIGH\"\n\nraw = 18\nfraction = normalise(raw, 10, 16)\nprint(fraction, classify(fraction))\nprint(classify(normalise(22, 10, 16)))",
    "output": "0.5 MID\nMID",
    "source": "Mock B · B11",
    "questionIds": [
      "mock-B-051",
      "mock-B-052",
      "mock-B-053",
      "mock-B-054",
      "mock-B-055"
    ]
  },
  {
    "id": "B12",
    "bank": "B",
    "week": 4,
    "topic": "functions",
    "name": "Local names and default parameters",
    "note": "",
    "code": "gain = 3\n\ndef scale(value, gain=2):\n    value = value * gain\n    return value\n\ndef combine(value):\n    return scale(value) + scale(value, gain=1)\n\nreading = 5\nresult = combine(reading)\nprint(reading, result)\nprint(gain)",
    "output": "5 15\n3",
    "source": "Mock B · B12",
    "questionIds": [
      "mock-B-056",
      "mock-B-057",
      "mock-B-058",
      "mock-B-059",
      "mock-B-060"
    ]
  },
  {
    "id": "B13",
    "bank": "B",
    "week": 5,
    "topic": "lists",
    "name": "Tuples containing a list",
    "note": "",
    "code": "record = (\"T3\", [12, 14], \"C\")\nlabel, readings, unit = record\nreadings.append(16)\nsnapshot = tuple(readings)\nreadings[0] = 10\nprint(record[0], record[1][-1])\nprint(snapshot)\nprint(record[1])",
    "output": "T3 16\n(12, 14, 16)\n[10, 14, 16]",
    "source": "Mock B · B13",
    "questionIds": [
      "mock-B-061",
      "mock-B-062",
      "mock-B-063",
      "mock-B-064",
      "mock-B-065"
    ]
  },
  {
    "id": "B14",
    "bank": "B",
    "week": 5,
    "topic": "lists",
    "name": "Removing, extending, and sorting lists",
    "note": "",
    "code": "values = [5, 2, 5, 1]\nordered = sorted(values)\nvalues.remove(5)\nvalues.extend([3, 2])\nreturned = values.sort()\nprint(values)\nprint(ordered)\nprint(returned)\nprint(values.count(2), values.index(3))",
    "output": "[1, 2, 2, 3, 5]\n[1, 2, 5, 5]\nNone\n2 3",
    "source": "Mock B · B14",
    "questionIds": [
      "mock-B-066",
      "mock-B-067",
      "mock-B-068",
      "mock-B-069",
      "mock-B-070"
    ]
  },
  {
    "id": "B16",
    "bank": "B",
    "week": 6,
    "topic": "recursion",
    "name": "Recursive and iterative common divisors",
    "note": "Assume nonnegative integer inputs, not both zero.",
    "code": "def gcd_recursive(a, b):\n    if b == 0:\n        return a\n    return gcd_recursive(b, a % b)\n\ndef gcd_iterative(a, b):\n    while b != 0:\n        a, b = b, a % b\n    return a\n\nprint(gcd_recursive(30, 18))\nprint(gcd_iterative(30, 18))",
    "output": "6\n6",
    "source": "Mock B · B16",
    "questionIds": [
      "mock-B-076",
      "mock-B-077",
      "mock-B-078",
      "mock-B-079",
      "mock-B-080"
    ]
  },
  {
    "id": "B17",
    "bank": "B",
    "week": 6,
    "topic": "recursion",
    "name": "Recursion with three base inputs",
    "note": "Assume small nonnegative integer inputs unless a question says otherwise.",
    "code": "def ways(n):\n    if n == 0:\n        return 1\n    if n == 1 or n == 2:\n        return 1\n    return ways(n - 1) + ways(n - 3)\n\nprint(ways(4))\nprint(ways(0), ways(2))",
    "output": "3\n1 1",
    "source": "Mock B · B17",
    "questionIds": [
      "mock-B-081",
      "mock-B-082",
      "mock-B-083",
      "mock-B-084",
      "mock-B-085"
    ]
  },
  {
    "id": "B18",
    "bank": "B",
    "week": 6,
    "topic": "recursion",
    "name": "Recursively removing a character",
    "note": "",
    "code": "def remove_char(text, unwanted):\n    if text == \"\":\n        return \"\"\n    rest = remove_char(text[1:], unwanted)\n    if text[0] == unwanted:\n        return rest\n    return text[0] + rest\n\nword = \"banana\"\ncleaned = remove_char(word, \"a\")\nprint(cleaned)\nprint(word)",
    "output": "bnn\nbanana",
    "source": "Mock B · B18",
    "questionIds": [
      "mock-B-086",
      "mock-B-087",
      "mock-B-088",
      "mock-B-089",
      "mock-B-090"
    ]
  },
  {
    "id": "B19",
    "bank": "B",
    "week": 6,
    "topic": "dicts",
    "name": "Dictionaries with coordinate keys",
    "note": "",
    "code": "temperatures = {(0, 0): 18, (0, 1): 21}\npoint = (1, 0)\ntemperatures[point] = 19\ntemperatures[(0, 1)] += 2\nold = temperatures.pop((0, 0))\nprint(temperatures.get((0, 0), -1))\nprint(temperatures[point], old)\nprint(list(temperatures.keys()))",
    "output": "-1\n19 18\n[(0, 1), (1, 0)]",
    "source": "Mock B · B19",
    "questionIds": [
      "mock-B-091",
      "mock-B-092",
      "mock-B-093",
      "mock-B-094",
      "mock-B-095"
    ]
  },
  {
    "id": "B20",
    "bank": "B",
    "week": 6,
    "topic": "dicts",
    "name": "Dictionary updates, views, and totals",
    "note": "",
    "code": "stock = {\"bolt\": 4, \"nut\": 6}\nkeys_view = stock.keys()\nsaved_keys = list(stock.keys())\nstock.update({\"nut\": 8, \"washer\": 3})\ntotal = 0\nfor item, amount in stock.items():\n    total += amount\nprint(list(keys_view))\nprint(saved_keys)\nprint(total)\nprint(\"nut\" in stock, 8 in stock.values())",
    "output": "['bolt', 'nut', 'washer']\n['bolt', 'nut']\n15\nTrue True",
    "source": "Mock B · B20",
    "questionIds": [
      "mock-B-096",
      "mock-B-097",
      "mock-B-098",
      "mock-B-099",
      "mock-B-100"
    ]
  },
  {
    "id": "C01",
    "bank": "C",
    "week": 1,
    "topic": "arithmetic",
    "name": "Calculating a weighted practice score",
    "note": "The scores and weights are fictional, not the ENG 101 grading scheme.",
    "code": "quiz = 14\nlab = 19\nscore = (quiz + 3 * lab) / 4\nwhole = int(score)\npassed = score >= 18\nprint(score, whole)\nprint(passed)",
    "output": "17.75 17\nFalse",
    "source": "Mock C · C01",
    "questionIds": [
      "mock-C-001",
      "mock-C-002",
      "mock-C-003",
      "mock-C-004",
      "mock-C-005"
    ]
  },
  {
    "id": "C02",
    "bank": "C",
    "week": 1,
    "topic": "arithmetic",
    "name": "Negative values and operator precedence",
    "note": "",
    "code": "a = -7\nb = 4\nquotient = a // b\nremainder = a % b\nrebuilt = quotient * b + remainder\nprint(quotient, remainder)\nprint(rebuilt)\nprint(-2 ** 2, (-2) ** 2)\nprint(a / b)",
    "output": "-2 1\n-7\n-4 4\n-1.75",
    "source": "Mock C · C02",
    "questionIds": [
      "mock-C-006",
      "mock-C-007",
      "mock-C-008",
      "mock-C-009",
      "mock-C-010"
    ]
  },
  {
    "id": "C03",
    "bank": "C",
    "week": 1,
    "topic": "types",
    "name": "Updating values and building text",
    "note": "",
    "code": "value = 5\nsaved = value\nvalue += 3\nvalue /= 2\ntext = str(saved)\nlabel = text + \"0\"\nprint(value, saved)\nprint(label)\nprint(value == saved)",
    "output": "4.0 5\n50\nFalse",
    "source": "Mock C · C03",
    "questionIds": [
      "mock-C-011",
      "mock-C-012",
      "mock-C-013",
      "mock-C-014",
      "mock-C-015"
    ]
  },
  {
    "id": "C05",
    "bank": "C",
    "week": 2,
    "topic": "for",
    "name": "Counting rises in a digit sequence",
    "note": "",
    "code": "digits = \"24153\"\nrises = 0\nlargest_jump = 0\nfor i in range(1, len(digits)):\n    jump = int(digits[i]) - int(digits[i - 1])\n    if jump > 0:\n        rises += 1\n    if jump > largest_jump:\n        largest_jump = jump\nprint(rises, largest_jump)\nprint(i)",
    "output": "2 4\n4",
    "source": "Mock C · C05",
    "questionIds": [
      "mock-C-021",
      "mock-C-022",
      "mock-C-023",
      "mock-C-024",
      "mock-C-025"
    ]
  },
  {
    "id": "C06",
    "bank": "C",
    "week": 2,
    "topic": "while",
    "name": "Repeated halving and a stopping boundary",
    "note": "",
    "code": "n = 45\nsteps = 0\nodd_steps = 0\nwhile n > 1:\n    if n % 2 == 1:\n        odd_steps += 1\n    n //= 2\n    steps += 1\nprint(n, steps)\nprint(odd_steps)",
    "output": "1 5\n3",
    "source": "Mock C · C06",
    "questionIds": [
      "mock-C-026",
      "mock-C-027",
      "mock-C-028",
      "mock-C-029",
      "mock-C-030"
    ]
  },
  {
    "id": "C07",
    "bank": "C",
    "week": 3,
    "topic": "strings",
    "name": "Filtering and reversing digit characters",
    "note": "",
    "code": "code = \"R2D4R6\"\ndigits = \"\"\ntotal = 0\nfor char in code:\n    if char in \"0123456789\":\n        digits = char + digits\n        total += int(char)\nprint(digits)\nprint(code[1::2])\nprint(total)",
    "output": "642\n246\n12",
    "source": "Mock C · C07",
    "questionIds": [
      "mock-C-031",
      "mock-C-032",
      "mock-C-033",
      "mock-C-034",
      "mock-C-035"
    ]
  },
  {
    "id": "C08",
    "bank": "C",
    "week": 3,
    "topic": "while",
    "name": "A bounded guess-and-check search",
    "note": "",
    "code": "target = 30\nguess = 0\nchecks = 0\nwhile guess <= 8:\n    checks += 1\n    if guess * (guess + 1) == target:\n        break\n    guess += 1\nprint(guess, checks)\nprint(guess <= 8)",
    "output": "5 6\nTrue",
    "source": "Mock C · C08",
    "questionIds": [
      "mock-C-036",
      "mock-C-037",
      "mock-C-038",
      "mock-C-039",
      "mock-C-040"
    ]
  },
  {
    "id": "C09",
    "bank": "C",
    "week": 3,
    "topic": "while",
    "name": "Bisection for a fractional cube root",
    "note": "The intended root is the nonnegative cube root of target; ignore roundoff.",
    "code": "target = 0.125\nlow = 0.0\nhigh = 1.0\ntolerance = 0.125\nsteps = 0\nwhile high - low > tolerance:\n    mid = (low + high) / 2\n    if mid ** 3 < target:\n        low = mid\n    else:\n        high = mid\n    steps += 1\nestimate = (low + high) / 2\nprint(steps)\nprint(low, high)\nprint(estimate)",
    "output": "3\n0.375 0.5\n0.4375",
    "source": "Mock C · C09",
    "questionIds": [
      "mock-C-041",
      "mock-C-042",
      "mock-C-043",
      "mock-C-044",
      "mock-C-045"
    ]
  },
  {
    "id": "C10",
    "bank": "C",
    "week": 4,
    "topic": "functions",
    "name": "An accumulator function and return placement",
    "note": "Assume limit is a nonnegative integer.",
    "code": "def sum_multiples(limit):\n    total = 0\n    for n in range(1, limit + 1):\n        if n % 3 == 0:\n            total += n\n    return total\n\nfirst = sum_multiples(7)\nsecond = sum_multiples(2)\nprint(first, second)\nprint(sum_multiples(0))",
    "output": "9 0\n0",
    "source": "Mock C · C10",
    "questionIds": [
      "mock-C-046",
      "mock-C-047",
      "mock-C-048",
      "mock-C-049",
      "mock-C-050"
    ]
  },
  {
    "id": "C12",
    "bank": "C",
    "week": 4,
    "topic": "functions",
    "name": "Positional arguments and keyword order",
    "note": "",
    "code": "def blend(a, b, weight=1):\n    return (weight * a + b) / (weight + 1)\n\nfirst = blend(2, 8)\nsecond = blend(2, 8, 3)\nthird = blend(b=2, a=8, weight=3)\nprint(first)\nprint(second)\nprint(third)",
    "output": "5.0\n3.5\n6.5",
    "source": "Mock C · C12",
    "questionIds": [
      "mock-C-056",
      "mock-C-057",
      "mock-C-058",
      "mock-C-059",
      "mock-C-060"
    ]
  },
  {
    "id": "C13",
    "bank": "C",
    "week": 5,
    "topic": "lists",
    "name": "Tuple unpacking and simultaneous swapping",
    "note": "",
    "code": "point = (2, 5)\nx, y = point\nx, y = y, x\nmoved = (x + 1, y - 1)\nroute = point + moved\nprint(point)\nprint(moved)\nprint(route[::2])\nprint(route[-1])",
    "output": "(2, 5)\n(6, 1)\n(2, 6)\n1",
    "source": "Mock C · C13",
    "questionIds": [
      "mock-C-061",
      "mock-C-062",
      "mock-C-063",
      "mock-C-064",
      "mock-C-065"
    ]
  },
  {
    "id": "C14",
    "bank": "C",
    "week": 5,
    "topic": "lists",
    "name": "Replacing and inserting list slices",
    "note": "",
    "code": "values = [0, 1, 2, 3, 4]\nvalues[1:4] = [8, 9]\nvalues[2:2] = [6, 7]\nlast = values.pop()\nprint(values)\nprint(last, len(values))\nprint(values[::-1])",
    "output": "[0, 8, 6, 7, 9]\n4 5\n[9, 7, 6, 8, 0]",
    "source": "Mock C · C14",
    "questionIds": [
      "mock-C-066",
      "mock-C-067",
      "mock-C-068",
      "mock-C-069",
      "mock-C-070"
    ]
  },
  {
    "id": "C15",
    "bank": "C",
    "week": 5,
    "topic": "lists",
    "name": "Separating first occurrences from repeats",
    "note": "",
    "code": "values = [3, 1, 3, 2, 1]\nunique = []\nrepeats = []\nfor value in values:\n    if value in unique:\n        repeats.append(value)\n    else:\n        unique.append(value)\nprint(unique)\nprint(repeats)\nprint(values)",
    "output": "[3, 1, 2]\n[3, 1]\n[3, 1, 3, 2, 1]",
    "source": "Mock C · C15",
    "questionIds": [
      "mock-C-071",
      "mock-C-072",
      "mock-C-073",
      "mock-C-074",
      "mock-C-075"
    ]
  },
  {
    "id": "C17",
    "bank": "C",
    "week": 6,
    "topic": "recursion",
    "name": "A recursive table with two boundary cases",
    "note": "Assume integer inputs with 0 <= k <= n. No knowledge beyond the displayed recurrence is needed.",
    "code": "def choose(n, k):\n    if k == 0 or k == n:\n        return 1\n    return choose(n - 1, k - 1) + choose(n - 1, k)\n\nprint(choose(4, 2))\nprint(choose(4, 0), choose(4, 4))",
    "output": "6\n1 1",
    "source": "Mock C · C17",
    "questionIds": [
      "mock-C-081",
      "mock-C-082",
      "mock-C-083",
      "mock-C-084",
      "mock-C-085"
    ]
  },
  {
    "id": "C18",
    "bank": "C",
    "week": 6,
    "topic": "recursion",
    "name": "Finding a character with recursion",
    "note": "Assume target is one character. Indices start at zero; -1 represents a missing character.",
    "code": "def first_index(text, target):\n    if text == \"\":\n        return -1\n    if text[0] == target:\n        return 0\n    rest = first_index(text[1:], target)\n    if rest == -1:\n        return -1\n    return rest + 1\n\nprint(first_index(\"banana\", \"n\"))\nprint(first_index(\"banana\", \"z\"))\nprint(first_index(\"\", \"b\"))",
    "output": "2\n-1\n-1",
    "source": "Mock C · C18",
    "questionIds": [
      "mock-C-086",
      "mock-C-087",
      "mock-C-088",
      "mock-C-089",
      "mock-C-090"
    ]
  },
  {
    "id": "C19",
    "bank": "C",
    "week": 6,
    "topic": "dicts",
    "name": "Renaming a dictionary key",
    "note": "",
    "code": "stock = {\"A\": 4, \"B\": 2}\nstock[\"C\"] = stock.pop(\"A\")\nstock[\"B\"] += stock.get(\"D\", 0)\nstock[\"D\"] = stock.get(\"D\", 0) + 1\nprint(list(stock.keys()))\nprint(list(stock.values()))\nprint(\"A\" in stock, \"C\" in stock)\nprint(stock.get(\"E\", 5), len(stock))",
    "output": "['B', 'C', 'D']\n[2, 4, 1]\nFalse True\n5 3",
    "source": "Mock C · C19",
    "questionIds": [
      "mock-C-091",
      "mock-C-092",
      "mock-C-093",
      "mock-C-094",
      "mock-C-095"
    ]
  },
  {
    "id": "C20",
    "bank": "C",
    "week": 6,
    "topic": "dicts",
    "name": "Accumulating sample masses by category",
    "note": "",
    "code": "batches = [(\"Cu\", 2), (\"Al\", 3), (\"Cu\", 4), (\"Al\", 1), (\"Fe\", 5)]\ntotals = {}\nfor material, mass in batches:\n    if material not in totals:\n        totals[material] = 0\n    totals[material] += mass\nselected = []\nfor material in totals:\n    if totals[material] >= 5:\n        selected.append(material)\nprint(totals)\nprint(selected)\nprint(sum(totals.values()))",
    "output": "{'Cu': 6, 'Al': 4, 'Fe': 5}\n['Cu', 'Fe']\n15",
    "source": "Mock C · C20",
    "questionIds": [
      "mock-C-096",
      "mock-C-097",
      "mock-C-098",
      "mock-C-099",
      "mock-C-100"
    ]
  },
  {
    "id": "D01",
    "bank": "D",
    "week": 1,
    "topic": "arithmetic",
    "name": "Calculating a mixture percentage",
    "note": "Assume the quantities are masses in the same units; the data are illustrative.",
    "code": "solute = 8\nsolvent = 32\ntotal = solute + solvent\npercent = 100 * solute / total\nsolvent = solvent + 8\nprint(total, solvent)\nprint(percent)\nprint(percent == 20)",
    "output": "40 40\n20.0\nTrue",
    "source": "Mock D · D01",
    "questionIds": [
      "mock-D-001",
      "mock-D-002",
      "mock-D-003",
      "mock-D-004",
      "mock-D-005"
    ]
  },
  {
    "id": "D02",
    "bank": "D",
    "week": 1,
    "topic": "arithmetic",
    "name": "Powers and grouping of arithmetic",
    "note": "",
    "code": "a = 2\nb = 3\np = a ** b ** 2\nq = (a ** b) ** 2\nprint(p, q)\nprint(p // q, p % q)\nprint((p - q) / q)",
    "output": "512 64\n8 0\n7.0",
    "source": "Mock D · D02",
    "questionIds": [
      "mock-D-006",
      "mock-D-007",
      "mock-D-008",
      "mock-D-009",
      "mock-D-010"
    ]
  },
  {
    "id": "D04",
    "bank": "D",
    "week": 2,
    "topic": "decisions",
    "name": "Guarding a division with a condition",
    "note": "The labels and threshold are illustrative, not operating guidance.",
    "code": "flow = 12\narea = 0\nif area != 0 and flow / area > 2:\n    label = \"fast\"\nelif area == 0:\n    label = \"no area\"\nelse:\n    label = \"slow\"\nprint(label)\nprint(area != 0)",
    "output": "no area\nFalse",
    "source": "Mock D · D04",
    "questionIds": [
      "mock-D-016",
      "mock-D-017",
      "mock-D-018",
      "mock-D-019",
      "mock-D-020"
    ]
  },
  {
    "id": "D05",
    "bank": "D",
    "week": 2,
    "topic": "for",
    "name": "Checking a running-total limit",
    "note": "",
    "code": "text = \"24312\"\nlimit = 8\ntotal = 0\nused = 0\nfor ch in text:\n    value = int(ch)\n    if total + value > limit:\n        break\n    total += value\n    used += 1\nprint(total, used)\nprint(ch)",
    "output": "6 2\n3",
    "source": "Mock D · D05",
    "questionIds": [
      "mock-D-021",
      "mock-D-022",
      "mock-D-023",
      "mock-D-024",
      "mock-D-025"
    ]
  },
  {
    "id": "D06",
    "bank": "D",
    "week": 2,
    "topic": "while",
    "name": "A loop with two changing quantities",
    "note": "",
    "code": "remaining = 23\nstep = 4\nrounds = 0\nwhile remaining >= step:\n    remaining -= step\n    step += 2\n    rounds += 1\nprint(remaining, step, rounds)",
    "output": "5 10 3",
    "source": "Mock D · D06",
    "questionIds": [
      "mock-D-026",
      "mock-D-027",
      "mock-D-028",
      "mock-D-029",
      "mock-D-030"
    ]
  },
  {
    "id": "D08",
    "bank": "D",
    "week": 3,
    "topic": "while",
    "name": "Searching for a cube that meets a threshold",
    "note": "Assume target is a nonnegative integer.",
    "code": "target = 50\nguess = 0\nchecks = 0\nwhile True:\n    checks += 1\n    if guess ** 3 >= target:\n        break\n    guess += 1\nprint(guess, checks)\nprint((guess - 1) ** 3 < target <= guess ** 3)\nprint(guess ** 3 - target)",
    "output": "4 5\nTrue\n14",
    "source": "Mock D · D08",
    "questionIds": [
      "mock-D-036",
      "mock-D-037",
      "mock-D-038",
      "mock-D-039",
      "mock-D-040"
    ]
  },
  {
    "id": "D09",
    "bank": "D",
    "week": 3,
    "topic": "while",
    "name": "Bisection with a fixed iteration budget",
    "note": "The intended root is the positive square root of target; ignore roundoff.",
    "code": "target = 5.0\nlow = 2.0\nhigh = 3.0\nsteps = 0\nwhile steps < 3:\n    mid = (low + high) / 2\n    if mid ** 2 < target:\n        low = mid\n    else:\n        high = mid\n    steps += 1\nprint(low, high)\nprint(mid)\nprint((low + high) / 2)",
    "output": "2.125 2.25\n2.125\n2.1875",
    "source": "Mock D · D09",
    "questionIds": [
      "mock-D-041",
      "mock-D-042",
      "mock-D-043",
      "mock-D-044",
      "mock-D-045"
    ]
  },
  {
    "id": "D11",
    "bank": "D",
    "week": 4,
    "topic": "functions",
    "name": "Decomposing a calculation into helpers",
    "note": "",
    "code": "def square(x):\n    return x * x\n\ndef spread(a, b):\n    centre = (a + b) / 2\n    return (square(a - centre) + square(b - centre)) / 2\n\nresult = spread(2, 6)\nprint(result)\nprint(square(3))\nprint(spread(5, 5))",
    "output": "4.0\n9\n0.0",
    "source": "Mock D · D11",
    "questionIds": [
      "mock-D-051",
      "mock-D-052",
      "mock-D-053",
      "mock-D-054",
      "mock-D-055"
    ]
  },
  {
    "id": "D12",
    "bank": "D",
    "week": 4,
    "topic": "functions",
    "name": "Returning the first matching value",
    "note": "Assume start and stop are integers and divisor is a positive integer.",
    "code": "def first_multiple(start, stop, divisor=3):\n    while start < stop:\n        if start % divisor == 0:\n            return start\n        start += 1\n    return None\n\nprint(first_multiple(4, 10))\nprint(first_multiple(4, 6))\nprint(first_multiple(5, 10, 4))",
    "output": "6\nNone\n8",
    "source": "Mock D · D12",
    "questionIds": [
      "mock-D-056",
      "mock-D-057",
      "mock-D-058",
      "mock-D-059",
      "mock-D-060"
    ]
  },
  {
    "id": "D13",
    "bank": "D",
    "week": 5,
    "topic": "lists",
    "name": "Reading records stored in tuples",
    "note": "",
    "code": "pair = (\"Cu\", 3)\nsamples = (pair, (\"Al\", 5), (\"Cu\", 2))\nprint(samples[1][0])\nprint(samples[-1][1] + samples[0][1])\nprint(\"Cu\" in samples, pair in samples)\nprint(pair * 2)",
    "output": "Al\n5\nFalse True\n('Cu', 3, 'Cu', 3)",
    "source": "Mock D · D13",
    "questionIds": [
      "mock-D-061",
      "mock-D-062",
      "mock-D-063",
      "mock-D-064",
      "mock-D-065"
    ]
  },
  {
    "id": "D15",
    "bank": "D",
    "week": 5,
    "topic": "lists",
    "name": "One pass of adjacent list swaps",
    "note": "",
    "code": "values = [5, 1, 4, 2]\nswaps = 0\nfor i in range(len(values) - 1):\n    if values[i] > values[i + 1]:\n        values[i], values[i + 1] = values[i + 1], values[i]\n        swaps += 1\nprint(values)\nprint(swaps)\nprint(values[-1])",
    "output": "[1, 4, 2, 5]\n3\n5",
    "source": "Mock D · D15",
    "questionIds": [
      "mock-D-071",
      "mock-D-072",
      "mock-D-073",
      "mock-D-074",
      "mock-D-075"
    ]
  },
  {
    "id": "D16",
    "bank": "D",
    "week": 6,
    "topic": "recursion",
    "name": "Recursive and iterative integer powers",
    "note": "Assume base is an integer and n is a nonnegative integer, except where a question explicitly tests an invalid input.",
    "code": "def power_rec(base, n):\n    if n == 0:\n        return 1\n    return base * power_rec(base, n - 1)\n\ndef power_iter(base, n):\n    result = 1\n    for i in range(n):\n        result *= base\n    return result\n\nprint(power_rec(3, 4), power_iter(3, 4))\nprint(power_rec(7, 0), power_iter(7, 0))",
    "output": "81 81\n1 1",
    "source": "Mock D · D16",
    "questionIds": [
      "mock-D-076",
      "mock-D-077",
      "mock-D-078",
      "mock-D-079",
      "mock-D-080"
    ]
  },
  {
    "id": "D17",
    "bank": "D",
    "week": 6,
    "topic": "recursion",
    "name": "Recursive search in an ordered list",
    "note": "Assume values is sorted in ascending order. low and high are inclusive search bounds.",
    "code": "def locate(values, target, low, high):\n    if low > high:\n        return -1\n    mid = (low + high) // 2\n    if values[mid] == target:\n        return mid\n    if values[mid] < target:\n        return locate(values, target, mid + 1, high)\n    return locate(values, target, low, mid - 1)\n\ndata = [2, 5, 8, 11, 14]\nprint(locate(data, 11, 0, len(data) - 1))\nprint(locate(data, 7, 0, len(data) - 1))",
    "output": "3\n-1",
    "source": "Mock D · D17",
    "questionIds": [
      "mock-D-081",
      "mock-D-082",
      "mock-D-083",
      "mock-D-084",
      "mock-D-085"
    ]
  },
  {
    "id": "D18",
    "bank": "D",
    "week": 6,
    "topic": "recursion",
    "name": "Recursively compressing repeated characters",
    "note": "",
    "code": "def compress(text):\n    if len(text) < 2:\n        return text\n    tail = compress(text[1:])\n    if text[0] == tail[0]:\n        return tail\n    return text[0] + tail\n\nword = \"AAABBCCA\"\nprint(compress(word))\nprint(word)\nprint(compress(\"\"))",
    "output": "ABCA\nAAABBCCA",
    "source": "Mock D · D18",
    "questionIds": [
      "mock-D-086",
      "mock-D-087",
      "mock-D-088",
      "mock-D-089",
      "mock-D-090"
    ]
  },
  {
    "id": "D19",
    "bank": "D",
    "week": 6,
    "topic": "dicts",
    "name": "Reversing dictionary keys and values",
    "note": "",
    "code": "readings = {\"P1\": 18, \"P2\": 20, \"P3\": 18}\nby_temp = {}\nfor sensor, value in readings.items():\n    by_temp[value] = sensor\nprint(by_temp)\nprint(list(by_temp.keys()))\nprint(18 in by_temp, \"P1\" in by_temp.values())\nprint(readings[\"P1\"])",
    "output": "{18: 'P3', 20: 'P2'}\n[18, 20]\nTrue False\n18",
    "source": "Mock D · D19",
    "questionIds": [
      "mock-D-091",
      "mock-D-092",
      "mock-D-093",
      "mock-D-094",
      "mock-D-095"
    ]
  },
  {
    "id": "D20",
    "bank": "D",
    "week": 6,
    "topic": "dicts",
    "name": "Grouping samples in dictionary lists",
    "note": "",
    "code": "samples = [(\"Cu\", 2), (\"Al\", 3), (\"Cu\", 5), (\"Fe\", 1), (\"Al\", 4)]\ngroups = {}\nfor metal, mass in samples:\n    if metal not in groups:\n        groups[metal] = []\n    groups[metal].append(mass)\nprint(groups[\"Cu\"])\nprint(list(groups.keys()))\nprint(sum(groups[\"Al\"]))\nprint(len(groups), len(samples))",
    "output": "[2, 5]\n['Cu', 'Al', 'Fe']\n7\n3 5",
    "source": "Mock D · D20",
    "questionIds": [
      "mock-D-096",
      "mock-D-097",
      "mock-D-098",
      "mock-D-099",
      "mock-D-100"
    ]
  },
  {
    "id": "w6-01",
    "bank": "lecture",
    "week": 6,
    "topic": "recursion",
    "name": "Recursive output order",
    "note": "Earlier Week 6 teaching example. Run independently in Python. Follow the assumptions written in the code.",
    "code": "# ENG 101 - Programming for Engineers | Week 6 | Example 01\n# Recursive calls: descent and unwinding\n# Instructor: Prof. Yanwei Wang\n# Source: Slides PDF pp. 8-10; Notes Sections 1.3-1.4 (pp. 8-10).\n# Teaching adaptation: see the source map in the companion guide.\n# Run this file independently; no external packages are required.\n\ndef countdown(n):\n    # Base case: finish this call without making another call.\n    if n <= 0:\n        print(\"Launch\")\n        return\n    print(n)                       # Runs during descent.\n    countdown(n - 1)               # Give the next call a smaller n.\n\n\ndef countdown_after(n):\n    if n <= 0:\n        print(\"Launch\")\n        return\n    countdown_after(n - 1)         # Wait for the smaller call.\n    print(n)                       # Runs during unwinding.\n\n\nprint(\"PRINT BEFORE THE RECURSIVE CALL\")\nreturned_value = countdown(3)\nprint(\"Returned value:\", returned_value)\n\nprint(\"PRINT AFTER THE RECURSIVE CALL\")\nreturned_value = countdown_after(3)\nprint(\"Returned value:\", returned_value)\n\nprint(\"BASE-CASE TEST\")\ncountdown(0)\n",
    "output": "PRINT BEFORE THE RECURSIVE CALL\n3\n2\n1\nLaunch\nReturned value: None\nPRINT AFTER THE RECURSIVE CALL\nLaunch\n1\n2\n3\nReturned value: None\nBASE-CASE TEST\nLaunch",
    "source": "Week 6 · Example 01",
    "questionIds": [],
    "filename": "w6_01_calls_and_output_order.py"
  },
  {
    "id": "w6-02",
    "bank": "lecture",
    "week": 6,
    "topic": "recursion",
    "name": "Factorial: recursion and iteration",
    "note": "Earlier Week 6 teaching example. Run independently in Python. Follow the assumptions written in the code.",
    "code": "# ENG 101 - Programming for Engineers | Week 6 | Example 02\n# Factorial: recursion, iteration, and input checks\n# Instructor: Prof. Yanwei Wang\n# Source: Slides PDF pp. 14-25; Notes Sections 1.7-1.12 and worked solution 4.5(2).\n# Teaching adaptation: see the source map in the companion guide.\n# Run this file independently; no external packages are required.\n\ndef factorial_recursive(n):\n    # Retain the slide's validation policy; see the bool note in the guide.\n    if not isinstance(n, int) or n < 0:\n        return None\n    if n == 0:\n        return 1                   # The neutral value for multiplication.\n    return n * factorial_recursive(n - 1)\n\n\ndef factorial_iterative(n):\n    # Use the same input policy when comparing the two methods.\n    if not isinstance(n, int) or n < 0:\n        return None\n    result = 1\n    for value in range(1, n + 1):\n        result *= value\n    return result                  # Return after the complete loop.\n\n\n# Expected results are written independently of either implementation.\ntests = [(0, 1), (1, 1), (2, 2), (3, 6), (4, 24), (5, 120),\n         (-1, None), (2.5, None)]\nprint(\"n | recursive | iterative | expected | passed\")\nfor n, expected in tests:\n    recursive_value = factorial_recursive(n)\n    iterative_value = factorial_iterative(n)\n    passed = (recursive_value == expected\n              and iterative_value == expected)\n    print(n, recursive_value, iterative_value, expected, passed,\n          sep=\" | \")\n",
    "output": "n | recursive | iterative | expected | passed\n0 | 1 | 1 | 1 | True\n1 | 1 | 1 | 1 | True\n2 | 2 | 2 | 2 | True\n3 | 6 | 6 | 6 | True\n4 | 24 | 24 | 24 | True\n5 | 120 | 120 | 120 | True\n-1 | None | None | None | True\n2.5 | None | None | None | True",
    "source": "Week 6 · Example 02",
    "questionIds": [],
    "filename": "w6_02_factorial_recursion_and_iteration.py"
  },
  {
    "id": "w6-03",
    "bank": "lecture",
    "week": 6,
    "topic": "recursion",
    "name": "Recursive bisection",
    "note": "Earlier Week 6 teaching example. Run independently in Python. Follow the assumptions written in the code.",
    "code": "# ENG 101 - Programming for Engineers | Week 6 | Example 03\n# Recursive bisection: an impact-time calculation\n# Instructor: Prof. Yanwei Wang\n# Source: Slides PDF pp. 27-29; Notes Sections 1.14-1.15 (pp. 18-20).\n# Teaching adaptation: see the source map in the companion guide.\n# Run this file independently; no external packages are required.\n\ndef bisection_recursive(function, left, right, tolerance):\n    # Teaching version from the slides: a valid bracket is assumed.\n    midpoint = (left + right) / 2\n    if abs(function(midpoint)) < tolerance:\n        return midpoint            # Base case: small residual only.\n    if function(left) * function(midpoint) < 0:\n        return bisection_recursive(\n            function, left, midpoint, tolerance)\n    return bisection_recursive(\n        function, midpoint, right, tolerance)\n\n\ndef residual_time(t_s):\n    # Height in m: release from rest, constant gravity, no air resistance.\n    g = 9.81                       # m/s^2\n    return 20.0 - 0.5 * g * t_s**2\n\n\nleft_s = 0.0\nright_s = 3.0\nheight_tolerance_m = 1e-6\nimpact_time_s = bisection_recursive(\n    residual_time, left_s, right_s, height_tolerance_m)\nheight_residual_m = residual_time(impact_time_s)\n\n# Independent algebraic calculation within the SAME physical model.\nanalytical_time_s = (2 * 20.0 / 9.81)**0.5\nprint(f\"Height at left endpoint: {residual_time(left_s):.3f} m\")\nprint(f\"Height at right endpoint: {residual_time(right_s):.3f} m\")\nprint(f\"Recursive estimate: {impact_time_s:.9f} s\")\nprint(f\"Analytical value: {analytical_time_s:.9f} s\")\nprint(f\"Height residual: {height_residual_m:.3e} m\")\nprint(\"Residual test passed:\",\n      abs(height_residual_m) < height_tolerance_m)\nprint(f\"Difference from analytical time: \"\n      f\"{abs(impact_time_s - analytical_time_s):.3e} s\")\n",
    "output": "Height at left endpoint: 20.000 m\nHeight at right endpoint: -24.145 m\nRecursive estimate: 2.019275129 s\nAnalytical value: 2.019275109 s\nHeight residual: -3.854e-07 m\nResidual test passed: True\nDifference from analytical time: 1.946e-08 s",
    "source": "Week 6 · Example 03",
    "questionIds": [],
    "filename": "w6_03_recursive_bisection.py"
  },
  {
    "id": "w6-04",
    "bank": "lecture",
    "week": 6,
    "topic": "recursion",
    "name": "Fibonacci and base cases",
    "note": "Earlier Week 6 teaching example. Run independently in Python. Follow the assumptions written in the code.",
    "code": "# ENG 101 - Programming for Engineers | Week 6 | Example 04\n# Fibonacci: two base cases and repeated work\n# Instructor: Prof. Yanwei Wang\n# Source: Slides PDF pp. 34-41; Notes Sections 2.1-2.4 (pp. 22-25).\n# Teaching adaptation: see the source map in the companion guide.\n# Run this file independently; no external packages are required.\n\ndef fibonacci(n):\n    # WEEK 6 SLIDE CONVENTION: F(0) = F(1) = 1.\n    # Mock Test A, Program 17 instead starts with 0 and 1.\n    if n == 0 or n == 1:\n        return 1\n    return fibonacci(n - 1) + fibonacci(n - 2)\n\n\ndef fibonacci_iterative(n):\n    if n == 0 or n == 1:\n        return 1\n    previous = 1\n    current = 1\n    for index in range(2, n + 1):\n        # Both right-hand expressions use the OLD values.\n        previous, current = current, previous + current\n    return current\n\n\n# Independently written values for the lecture's recurrence.\nexpected_values = [1, 1, 2, 3, 5, 8, 13]\nprint(\"n | recursive | iterative | expected | passed\")\nfor n in range(len(expected_values)):\n    recursive_value = fibonacci(n)\n    iterative_value = fibonacci_iterative(n)\n    expected = expected_values[n]\n    passed = (recursive_value == expected\n              and iterative_value == expected)\n    print(n, recursive_value, iterative_value, expected, passed,\n          sep=\" | \")\n",
    "output": "n | recursive | iterative | expected | passed\n0 | 1 | 1 | 1 | True\n1 | 1 | 1 | 1 | True\n2 | 2 | 2 | 2 | True\n3 | 3 | 3 | 3 | True\n4 | 5 | 5 | 5 | True\n5 | 8 | 8 | 8 | True\n6 | 13 | 13 | 13 | True",
    "source": "Week 6 · Example 04",
    "questionIds": [],
    "filename": "w6_04_fibonacci_multiple_base_cases.py"
  },
  {
    "id": "w6-05",
    "bank": "lecture",
    "week": 6,
    "topic": "recursion",
    "name": "Palindromes and string cleaning",
    "note": "Earlier Week 6 teaching example. Run independently in Python. Follow the assumptions written in the code.",
    "code": "# ENG 101 - Programming for Engineers | Week 6 | Example 05\n# String recursion: palindrome testing and cleaning\n# Instructor: Prof. Yanwei Wang\n# Source: Slides PDF pp. 43-50 and 56-57; Notes Sections 2.6-2.9 and 2.12.\n# Teaching adaptation: see the source map in the companion guide.\n# Run this file independently; no external packages are required.\n\ndef is_palindrome(text):\n    # Check BOTH terminal lengths before indexing the string.\n    if len(text) <= 1:\n        return True\n    # A mismatch skips the recursive call because and short-circuits.\n    return (text[0] == text[-1]\n            and is_palindrome(text[1:-1]))\n\n\ndef letters_only_lower(text):\n    cleaned = \"\"\n    for character in text.lower():\n        if character.isalpha():\n            cleaned += character\n    return cleaned\n\n\ndef is_phrase_palindrome(text):\n    cleaned = letters_only_lower(text)\n    return is_palindrome(cleaned)\n\n\ntests = [\"\", \"x\", \"abba\", \"level\", \"Level\", \"sensor\",\n         \"Never odd or even\", \"123!\"]\nprint(\"INPUT -> EXACT TEST | PHRASE TEST\")\nfor text in tests:\n    print(repr(text), \"->\", is_palindrome(text), \"|\",\n          is_phrase_palindrome(text))\n\nphrase = \"Never odd or even\"\nprint(\"Cleaned phrase:\", letters_only_lower(phrase))\nprint(\"Original phrase:\", phrase)\n",
    "output": "INPUT -> EXACT TEST | PHRASE TEST\n'' -> True | True\n'x' -> True | True\n'abba' -> True | True\n'level' -> True | True\n'Level' -> False | True\n'sensor' -> False | False\n'Never odd or even' -> False | True\n'123!' -> False | True\nCleaned phrase: neveroddoreven\nOriginal phrase: Never odd or even",
    "source": "Week 6 · Example 05",
    "questionIds": [],
    "filename": "w6_05_palindromes_and_cleaning.py"
  },
  {
    "id": "w6-06",
    "bank": "lecture",
    "week": 6,
    "topic": "recursion",
    "name": "Recursive list operations",
    "note": "Earlier Week 6 teaching example. Run independently in Python. Follow the assumptions written in the code.",
    "code": "# ENG 101 - Programming for Engineers | Week 6 | Example 06\n# List recursion: accumulate all values or stop at a match\n# Instructor: Prof. Yanwei Wang\n# Source: Slides PDF pp. 51-55; Notes Sections 2.10-2.11 (pp. 30-32).\n# Teaching adaptation: see the source map in the companion guide.\n# Run this file independently; no external packages are required.\n\ndef recursive_sum(values):\n    if len(values) == 0:\n        return 0                   # No remaining contribution.\n    return values[0] + recursive_sum(values[1:])\n\n\ndef contains_recursive(values, target):\n    if len(values) == 0:\n        return False               # Base case 1: nothing remains.\n    if values[0] == target:\n        return True                # Base case 2: a match is enough.\n    return contains_recursive(values[1:], target)\n\n\n# Exact slide values; their physical unit is not specified in the source.\nreadings = [2.0, 3.5, 4.0]\nsaved_readings = readings.copy()\nprint(\"Input readings:\", readings)\nprint(\"Recursive sum:\", recursive_sum(readings))\nprint(\"Empty-list sum:\", recursive_sum([]))\nprint(\"Contains 3.5:\", contains_recursive(readings, 3.5))\nprint(\"Contains 9.0:\", contains_recursive(readings, 9.0))\nprint(\"Empty list contains 3.5:\", contains_recursive([], 3.5))\nprint(\"Original list unchanged:\", readings == saved_readings)\n",
    "output": "Input readings: [2.0, 3.5, 4.0]\nRecursive sum: 9.5\nEmpty-list sum: 0\nContains 3.5: True\nContains 9.0: False\nEmpty list contains 3.5: False\nOriginal list unchanged: True",
    "source": "Week 6 · Example 06",
    "questionIds": [],
    "filename": "w6_06_recursive_lists.py"
  },
  {
    "id": "w6-07",
    "bank": "lecture",
    "week": 6,
    "topic": "dicts",
    "name": "Dictionary operations",
    "note": "Earlier Week 6 teaching example. Run independently in Python. Follow the assumptions written in the code.",
    "code": "# ENG 101 - Programming for Engineers | Week 6 | Example 07\n# Dictionaries: keys, values, updates, and missing data\n# Instructor: Prof. Yanwei Wang\n# Source: Slides PDF pp. 69-76; Notes Sections 3.3-3.9 and Appendix A.3-A.4.\n# Teaching adaptation: see the source map in the companion guide.\n# Run this file independently; no external packages are required.\n\n# Classroom values, not certified material-property data.\nmaterial_density = {\"steel\": 7850, \"aluminum\": 2700}\nworking = material_density.copy()   # Preserve this flat source record.\nkeys_view = working.keys()         # Reflects later dictionary changes.\nsaved_keys = list(working.keys())  # A separate snapshot of current keys.\n\nworking[\"copper\"] = 8960           # New key: add an entry.\nworking[\"aluminum\"] = 2710         # Existing key: what-if replacement.\nprint(\"Working dictionary:\", working)\nprint(\"Live keys:\", list(keys_view))\nprint(\"Saved keys:\", saved_keys)\nprint(\"Values:\", list(working.values()))\nprint(\"Items:\", list(working.items()))\n\nprint(\"'steel' is a key:\", \"steel\" in working)\nprint(\"7850 is a key:\", 7850 in working)\nprint(\"7850 is a value:\", 7850 in working.values())\nprint(\"Missing titanium:\", working.get(\"titanium\"))\nprint(\"Did get insert titanium?\", \"titanium\" in working)\n\nprint(\"DENSITY TABLE (kg/m^3)\")\nfor material, density in working.items():\n    print(material, \"->\", density)\n\nremoved = working.pop(\"copper\")    # Remove the entry and return its value.\nprint(\"Removed copper value:\", removed)\ndel working[\"aluminum\"]           # Delete this known entry.\nprint(\"Remaining working record:\", working)\nprint(\"Original source record:\", material_density)\n",
    "output": "Working dictionary: {'steel': 7850, 'aluminum': 2710, 'copper': 8960}\nLive keys: ['steel', 'aluminum', 'copper']\nSaved keys: ['steel', 'aluminum']\nValues: [7850, 2710, 8960]\nItems: [('steel', 7850), ('aluminum', 2710), ('copper', 8960)]\n'steel' is a key: True\n7850 is a key: False\n7850 is a value: True\nMissing titanium: None\nDid get insert titanium? False\nDENSITY TABLE (kg/m^3)\nsteel -> 7850\naluminum -> 2710\ncopper -> 8960\nRemoved copper value: 8960\nRemaining working record: {'steel': 7850}\nOriginal source record: {'steel': 7850, 'aluminum': 2700}",
    "source": "Week 6 · Example 07",
    "questionIds": [],
    "filename": "w6_07_dictionary_operations.py"
  },
  {
    "id": "w6-08",
    "bank": "lecture",
    "week": 6,
    "topic": "dicts",
    "name": "Counting and grouping samples",
    "note": "Earlier Week 6 teaching example. Run independently in Python. Follow the assumptions written in the code.",
    "code": "# ENG 101 - Programming for Engineers | Week 6 | Example 08\n# Count and group material samples\n# Instructor: Prof. Yanwei Wang\n# Source: Mock A20 and D20; supporting slides PDF pp. 69, 72-75, 82 and 85; Notes Sections 3.3, 3.6-3.8 and 3.13-3.15.\n# Teaching adaptation: see the source map in the companion guide.\n# Run this file independently; no external packages are required.\n\n# The pairs come from Mock D20. For THIS adaptation, mass is in grams.\n# The original mock code does not specify a mass unit.\nsamples = [(\"Cu\", 2), (\"Al\", 3), (\"Cu\", 5), (\"Fe\", 1), (\"Al\", 4)]\ncounts = {}\ngrouped_masses_g = {}\n\nfor material, mass_g in samples:\n    # No earlier occurrence contributes a count of zero.\n    counts[material] = counts.get(material, 0) + 1\n    if material not in grouped_masses_g:\n        # Each new key receives its OWN new list.\n        grouped_masses_g[material] = []\n    grouped_masses_g[material].append(mass_g)\n\nprint(\"Counts:\", counts)\nprint(\"Grouped masses (g):\", grouped_masses_g)\nprint(\"Number of material categories:\", len(counts))\nprint(\"Number of individual samples:\", len(samples))\nprint(\"All samples counted:\", sum(counts.values()) == len(samples))\n\nprint(\"MATERIAL | COUNT | TOTAL MASS (g)\")\nfor material, masses_g in grouped_masses_g.items():\n    print(material, counts[material], sum(masses_g), sep=\" | \")\nprint(\"Original samples:\", samples)\n",
    "output": "Counts: {'Cu': 2, 'Al': 2, 'Fe': 1}\nGrouped masses (g): {'Cu': [2, 5], 'Al': [3, 4], 'Fe': [1]}\nNumber of material categories: 3\nNumber of individual samples: 5\nAll samples counted: True\nMATERIAL | COUNT | TOTAL MASS (g)\nCu | 2 | 7\nAl | 2 | 7\nFe | 1 | 1\nOriginal samples: [('Cu', 2), ('Al', 3), ('Cu', 5), ('Fe', 1), ('Al', 4)]",
    "source": "Week 6 · Example 08",
    "questionIds": [],
    "filename": "w6_08_count_and_group_samples.py"
  },
  {
    "id": "w6-09",
    "bank": "lecture",
    "week": 6,
    "topic": "dicts",
    "name": "Nested material lookup",
    "note": "Earlier Week 6 teaching example. Run independently in Python. Follow the assumptions written in the code.",
    "code": "# ENG 101 - Programming for Engineers | Week 6 | Example 09\n# Nested dictionaries: material-property lookup\n# Instructor: Prof. Yanwei Wang\n# Source: Slides PDF pp. 77-80 and 86-88; Notes Sections 3.10-3.12 and 3.16-3.17.\n# Teaching adaptation: see the source map in the companion guide.\n# Run this file independently; no external packages are required.\n\n# Exact illustrative property values from the lecture slides.\nmaterials = {\n    \"steel\": {\n        \"density_kg_m3\": 7850,\n        \"yield_strength_pa\": 250e6,\n        \"elastic_modulus_pa\": 200e9\n    },\n    \"aluminum\": {\n        \"density_kg_m3\": 2700,\n        \"yield_strength_pa\": 150e6,\n        \"elastic_modulus_pa\": 69e9\n    }\n}\n\n# Fixed requests make every branch easy to reproduce.\nrequests = [\" Steel \", \"aluminum\", \"titanium\", \"Aluminium\"]\nfor raw_name in requests:\n    selected = raw_name.strip().lower()\n    record = materials.get(selected)\n    print(\"Request:\", repr(raw_name), \"-> key:\", repr(selected))\n    if record is None:\n        print(\"  Unknown material; no properties invented.\")\n    else:\n        # The given inner schema supplies these required fields.\n        density = record[\"density_kg_m3\"]\n        strength_mpa = record[\"yield_strength_pa\"] / 1e6\n        modulus_gpa = record[\"elastic_modulus_pa\"] / 1e9\n        print(f\"  Density: {density} kg/m^3\")\n        print(f\"  Yield strength: {strength_mpa:.1f} MPa\")\n        print(f\"  Elastic modulus: {modulus_gpa:.1f} GPa\")\n\nprint(\"Stored steel strength is still:\",\n      materials[\"steel\"][\"yield_strength_pa\"], \"Pa\")\n",
    "output": "Request: ' Steel ' -> key: 'steel'\n  Density: 7850 kg/m^3\n  Yield strength: 250.0 MPa\n  Elastic modulus: 200.0 GPa\nRequest: 'aluminum' -> key: 'aluminum'\n  Density: 2700 kg/m^3\n  Yield strength: 150.0 MPa\n  Elastic modulus: 69.0 GPa\nRequest: 'titanium' -> key: 'titanium'\n  Unknown material; no properties invented.\nRequest: 'Aluminium' -> key: 'aluminium'\n  Unknown material; no properties invented.\nStored steel strength is still: 250000000.0 Pa",
    "source": "Week 6 · Example 09",
    "questionIds": [],
    "filename": "w6_09_nested_material_lookup.py"
  },
  {
    "id": "w6-10",
    "bank": "lecture",
    "week": 6,
    "topic": "dicts",
    "name": "Sensor report",
    "note": "Earlier Week 6 teaching example. Run independently in Python. Follow the assumptions written in the code.",
    "code": "# ENG 101 - Programming for Engineers | Week 6 | Example 10\n# Integrated example: a sensor record and recursive report\n# Instructor: Prof. Yanwei Wang\n# Source: Slides PDF pp. 81-82 and 92-93; Notes Sections 3.13, 3.19 and worked solution 4.5(12) (pp. 62-64).\n# Teaching adaptation: see the source map in the companion guide.\n# Run this file independently; no external packages are required.\n\ndef count_above_recursive(readings, limit):\n    if len(readings) == 0:\n        return 0\n    if readings[0] > limit:\n        first_count = 1\n    else:\n        first_count = 0\n    return first_count + count_above_recursive(readings[1:], limit)\n\n\ndef count_above_iterative(readings, limit):\n    total = 0\n    for reading in readings:\n        if reading > limit:\n            total += 1\n    return total\n\n\n# Retain the lecture's fields, values, and strict warning rule.\nsensor = {\n    \"id\": \"T-101\", \"quantity\": \"temperature\", \"unit\": \"C\",\n    \"location\": \"heat exchanger outlet\", \"calibrated\": True,\n    \"warning_limit\": 80.0,\n    \"readings_c\": [72.1, 73.5, 75.0, 81.2, 79.8]\n}\nreadings = sensor[\"readings_c\"]\nsaved_readings = readings.copy()\nlimit = sensor[\"warning_limit\"]\nrecursive_count = count_above_recursive(readings, limit)\niterative_count = count_above_iterative(readings, limit)\n\n# Calculated results go in a NEW report, not into the raw sensor record.\nreport = {\n    \"sensor_id\": sensor[\"id\"],\n    \"number_of_readings\": len(readings),\n    \"warning_count\": recursive_count,\n    \"methods_agree\": recursive_count == iterative_count\n}\nprint(\"SENSOR REPORT\")\nfor key, value in report.items():\n    print(f\"{key}: {value}\")\nprint(\"Raw readings unchanged:\", readings == saved_readings)\n\n# Explicit expectations check empty, boundary, and above-limit inputs.\ntests = [([], 0), ([80.0], 0), ([81.0], 1), ([79.0, 80.0, 81.0], 1)]\nprint(\"BOUNDARY TESTS: readings -> recursive | iterative | passed\")\nfor test_readings, expected in tests:\n    rec = count_above_recursive(test_readings, limit)\n    itr = count_above_iterative(test_readings, limit)\n    passed = rec == expected and itr == expected\n    print(test_readings, \"->\", rec, \"|\", itr, \"|\", passed)\n",
    "output": "SENSOR REPORT\nsensor_id: T-101\nnumber_of_readings: 5\nwarning_count: 1\nmethods_agree: True\nRaw readings unchanged: True\nBOUNDARY TESTS: readings -> recursive | iterative | passed\n[] -> 0 | 0 | True\n[80.0] -> 0 | 0 | True\n[81.0] -> 1 | 1 | True\n[79.0, 80.0, 81.0] -> 1 | 1 | True",
    "source": "Week 6 · Example 10",
    "questionIds": [],
    "filename": "w6_10_sensor_report.py"
  }
];
MCQS.push(...IMPORTED_MCQS);
