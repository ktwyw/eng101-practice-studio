// Original additions preserve the earlier 342 question objects and IDs.
const FIRST_HALF_WEEKS = [{"week": 1, "name": "Python basics, values and types", "description": "Computational thinking, expressions, numeric and text values, assignment, output and engineering units."}, {"week": 2, "name": "Strings, decisions and iteration", "description": "Boolean conditions, branch structure, indentation, ranges, for loops and while loops."}, {"week": 3, "name": "Strings and numerical problem solving", "description": "String manipulation, exhaustive search, approximation, stopping criteria and bisection."}, {"week": 4, "name": "Functions, decomposition and abstraction", "description": "Parameters, return values, scope, clear interfaces, helper functions and state changes."}, {"week": 5, "name": "Tuples, lists and ordered data", "description": "Indexing, slicing, copying, mutation, record alignment, sorting and list operations."}, {"week": 6, "name": "Recursion and dictionaries", "description": "Base cases, recursive progress, iterative comparisons, key lookup and nested mappings."}];
const FOUNDATION_ADDITIONS = [
  {
    "id": "foundation-w1-001",
    "week": 1,
    "topic": "arithmetic",
    "bank": "foundation-new",
    "title": "Retaining an earlier binding — what is printed?",
    "code": "flow = 8\nold_flow = flow\nflow = 11\nprint(old_flow, flow)",
    "options": [
      "8 11",
      "11 11",
      "8 8",
      "11 8"
    ],
    "answer": 0,
    "explanation": "Rebinding flow does not change the separate old_flow binding.",
    "mode": "python-output",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-002",
    "week": 1,
    "topic": "types",
    "bank": "foundation-new",
    "title": "Numeric text conversion — what is printed?",
    "code": "raw = \"007\"\nvalue = int(raw)\nprint(value, type(value).__name__)",
    "options": [
      "007 str",
      "7 int",
      "7.0 float",
      "007 int"
    ],
    "answer": 1,
    "explanation": "int parses the text as an integer; leading zeros do not remain in its numeric display.",
    "mode": "python-output",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-003",
    "week": 1,
    "topic": "arithmetic",
    "bank": "foundation-new",
    "title": "A true quotient — what is printed?",
    "code": "print(9 / 4)",
    "options": [
      "2",
      "2.0",
      "2.25",
      "1"
    ],
    "answer": 2,
    "explanation": "Python / computes a true quotient rather than integer floor division.",
    "mode": "python-output",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-004",
    "week": 1,
    "topic": "arithmetic",
    "bank": "foundation-new",
    "title": "A floor quotient and remainder — what is printed?",
    "code": "print(17 // 5, 17 % 5)",
    "options": [
      "3.4 2",
      "2 3",
      "4 2",
      "3 2"
    ],
    "answer": 3,
    "explanation": "17 contains three complete groups of five and a remainder of two.",
    "mode": "python-output",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-005",
    "week": 1,
    "topic": "arithmetic",
    "bank": "foundation-new",
    "title": "Power before multiplication — what is printed?",
    "code": "print(3 * 2**3)",
    "options": [
      "24",
      "216",
      "18",
      "12"
    ],
    "answer": 0,
    "explanation": "Exponentiation evaluates 2**3 as eight before multiplication by three.",
    "mode": "python-output",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-006",
    "week": 1,
    "topic": "arithmetic",
    "bank": "foundation-new",
    "title": "Explicit grouping — what is printed?",
    "code": "print((6 + 2) * 3)",
    "options": [
      "12",
      "24",
      "18",
      "11"
    ],
    "answer": 1,
    "explanation": "Parentheses force the addition before the multiplication.",
    "mode": "python-output",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-007",
    "week": 1,
    "topic": "types",
    "bank": "foundation-new",
    "title": "Scientific notation as a number — what is printed?",
    "code": "x = 2.5e3\nprint(x, type(x).__name__)",
    "options": [
      "2500 int",
      "2.5 str",
      "2500.0 float",
      "2500.0 int"
    ],
    "answer": 2,
    "explanation": "An exponent-form numeric literal creates a floating-point value.",
    "mode": "python-output",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-008",
    "week": 1,
    "topic": "arithmetic",
    "bank": "foundation-new",
    "title": "Converting a float to integer — what is printed?",
    "code": "print(int(8.9), int(-8.9))",
    "options": [
      "9 -9",
      "8 -9",
      "9 -8",
      "8 -8"
    ],
    "answer": 3,
    "explanation": "int truncates a finite float toward zero; it does not round to the nearest integer.",
    "mode": "python-output",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-009",
    "week": 1,
    "topic": "types",
    "bank": "foundation-new",
    "title": "Combining numeric types — what is printed?",
    "code": "x = 4 + 0.5\nprint(x, type(x).__name__)",
    "options": [
      "4.5 float",
      "4 int",
      "4.5 int",
      "45 str"
    ],
    "answer": 0,
    "explanation": "Adding an int and a float produces a float here.",
    "mode": "python-output",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-010",
    "week": 1,
    "topic": "strings",
    "bank": "foundation-new",
    "title": "Text repetition — what is printed?",
    "code": "print(\"ha\" * 3)",
    "options": [
      "haha",
      "hahaha",
      "ha3",
      "9"
    ],
    "answer": 1,
    "explanation": "String multiplication repeats the text the requested number of times.",
    "mode": "python-output",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-011",
    "week": 1,
    "topic": "arithmetic",
    "bank": "foundation-new",
    "title": "A formatted length — what is printed?",
    "code": "length = 1.23456\nprint(f\"{length:.3f} m\")",
    "options": [
      "1.234 m",
      "1.23 m",
      "1.235 m",
      "1.23456 m"
    ],
    "answer": 2,
    "explanation": "The format displays three digits after the decimal point, with rounding.",
    "mode": "python-output",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-012",
    "week": 1,
    "topic": "arithmetic",
    "bank": "foundation-new",
    "title": "Separating printed fields — what is printed?",
    "code": "print(\"P\", 12, sep=\":\", end=\"!\\n\")",
    "options": [
      "P 12!",
      "P:12",
      "P12!",
      "P:12!"
    ],
    "answer": 3,
    "explanation": "sep inserts a colon between the two fields, and end supplies the exclamation mark and newline.",
    "mode": "python-output",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-013",
    "week": 1,
    "topic": "strings",
    "bank": "foundation-new",
    "title": "Text addition versus arithmetic — what is printed?",
    "code": "print(\"12\" + \"3\", 12 + 3)",
    "options": [
      "123 15",
      "15 15",
      "123 123",
      "36 15"
    ],
    "answer": 0,
    "explanation": "+ concatenates strings but adds numeric operands.",
    "mode": "python-output",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-014",
    "week": 1,
    "topic": "arithmetic",
    "bank": "foundation-new",
    "title": "A conversion before multiplication — what is printed?",
    "code": "raw = \"2.5\"\nprint(float(raw) * 4)",
    "options": [
      "2.52.52.52.5",
      "10.0",
      "10",
      "6.5"
    ],
    "answer": 1,
    "explanation": "Converting the text to float makes multiplication numerical.",
    "mode": "python-output",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-015",
    "week": 1,
    "topic": "engineering",
    "bank": "foundation-new",
    "title": "Kilometres to metres — what is printed?",
    "code": "distance_km = 1.75\nprint(distance_km * 1000)",
    "options": [
      "1.75",
      "0.00175",
      "1750.0",
      "175.0"
    ],
    "answer": 2,
    "explanation": "There are 1000 metres in a kilometre, so the numeric length increases by that factor.",
    "mode": "python-output",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-016",
    "week": 1,
    "topic": "engineering",
    "bank": "foundation-new",
    "title": "Minutes to seconds — what is printed?",
    "code": "minutes = 7\nprint(minutes * 60)",
    "options": [
      "7",
      "0.11666666666666667",
      "67",
      "420"
    ],
    "answer": 3,
    "explanation": "The conversion multiplies by sixty seconds per minute.",
    "mode": "python-output",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-017",
    "week": 1,
    "topic": "engineering",
    "bank": "foundation-new",
    "title": "A stress calculation — what is printed?",
    "code": "force_n = 90\narea_m2 = 0.003\nprint(force_n / area_m2)",
    "options": [
      "30000.0",
      "0.000033333333333333335",
      "270.0",
      "30.0"
    ],
    "answer": 0,
    "explanation": "Stress in pascals is force in newtons divided by area in square metres.",
    "mode": "python-output",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-018",
    "week": 1,
    "topic": "engineering",
    "bank": "foundation-new",
    "title": "An efficiency fraction — what is printed?",
    "code": "input_w = 120\nefficiency = 0.75\nprint(input_w * efficiency)",
    "options": [
      "160.0",
      "90.0",
      "9000.0",
      "119.25"
    ],
    "answer": 1,
    "explanation": "A 75 percent conversion retains 0.75 of the input under this illustrative model.",
    "mode": "python-output",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-019",
    "week": 1,
    "topic": "engineering",
    "bank": "foundation-new",
    "title": "A percentage increase — what is printed?",
    "code": "initial = 80\nfinal = initial * 1.25\nprint(final)",
    "options": [
      "20.0",
      "81.25",
      "100.0",
      "64.0"
    ],
    "answer": 2,
    "explanation": "A 25 percent increase multiplies the original by 1.25.",
    "mode": "python-output",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-020",
    "week": 1,
    "topic": "arithmetic",
    "bank": "foundation-new",
    "title": "A negative floor quotient — what is printed?",
    "code": "print(-9 // 4, -9 % 4)",
    "options": [
      "-2 -1",
      "-2 3",
      "-3 -1",
      "-3 3"
    ],
    "answer": 3,
    "explanation": "The quotient rounds down to -3, and -9 equals 4*(-3)+3.",
    "mode": "python-output",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-021",
    "week": 1,
    "topic": "types",
    "bank": "foundation-new",
    "title": "Comparison produces a Boolean — what is printed?",
    "code": "limit = 40\nprint(40 <= limit, type(40 <= limit).__name__)",
    "options": [
      "True bool",
      "40 int",
      "False bool",
      "True int"
    ],
    "answer": 0,
    "explanation": "The inclusive comparison succeeds and has Boolean type.",
    "mode": "python-output",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-022",
    "week": 1,
    "topic": "types",
    "bank": "foundation-new",
    "title": "Converting Boolean values — what is printed?",
    "code": "print(int(True), int(False))",
    "options": [
      "True False",
      "1 0",
      "0 1",
      "1 1"
    ],
    "answer": 1,
    "explanation": "The two Boolean values convert to one and zero respectively.",
    "mode": "python-output",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-023",
    "week": 1,
    "topic": "arithmetic",
    "bank": "foundation-new",
    "title": "A simultaneous swap — what is printed?",
    "code": "a, b = 3, 8\na, b = b, a\nprint(a, b)",
    "options": [
      "8 8",
      "3 3",
      "8 3",
      "3 8"
    ],
    "answer": 2,
    "explanation": "Both right-side values are evaluated before the two target bindings change.",
    "mode": "python-output",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-024",
    "week": 1,
    "topic": "arithmetic",
    "bank": "foundation-new",
    "title": "An augmented update — what is printed?",
    "code": "energy = 10\nenergy *= 3\nenergy -= 4\nprint(energy)",
    "options": [
      "18",
      "6",
      "30",
      "26"
    ],
    "answer": 3,
    "explanation": "The updates first produce 30, then subtract four.",
    "mode": "python-output",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-025",
    "week": 1,
    "topic": "types",
    "bank": "foundation-new",
    "title": "Reassigning a new type — what is printed?",
    "code": "reading = 5\nreading = str(reading)\nprint(type(reading).__name__, reading + \"0\")",
    "options": [
      "str 50",
      "int 5",
      "str 5",
      "int 50"
    ],
    "answer": 0,
    "explanation": "str returns text, so the later + concatenates the two strings.",
    "mode": "python-output",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-026",
    "week": 1,
    "topic": "strings",
    "bank": "foundation-new",
    "title": "An explicit newline — what is printed?",
    "code": "print(\"top\\nbottom\")",
    "options": [
      "top bottom",
      "top\nbottom",
      "top\\nbottom",
      "topbottom"
    ],
    "answer": 1,
    "explanation": "The newline escape inside the string starts a second printed line.",
    "mode": "python-output",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-027",
    "week": 1,
    "topic": "engineering",
    "bank": "foundation-new",
    "title": "Mass conversion before weight — what is printed?",
    "code": "mass_g = 500\nprint(mass_g / 1000 * 9.8)",
    "options": [
      "4900.0",
      "49.0",
      "4.9",
      "0.49"
    ],
    "answer": 2,
    "explanation": "Converting 500 grams to 0.5 kilograms gives a weight of 4.9 newtons in this model.",
    "mode": "python-output",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-028",
    "week": 1,
    "topic": "arithmetic",
    "bank": "foundation-new",
    "title": "An absolute difference — what is printed?",
    "code": "print(abs(12 - 19))",
    "options": [
      "-7",
      "31",
      "1.5833333333333333",
      "7"
    ],
    "answer": 3,
    "explanation": "abs returns the nonnegative magnitude of the difference.",
    "mode": "python-output",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-029",
    "week": 1,
    "topic": "types",
    "bank": "foundation-new",
    "title": "Two representations of zero — what is printed?",
    "code": "print(bool(0), bool(0.01))",
    "options": [
      "False True",
      "False False",
      "True True",
      "True False"
    ],
    "answer": 0,
    "explanation": "Numeric zero is false; a nonzero numeric value is true in this Boolean conversion.",
    "mode": "python-output",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-030",
    "week": 1,
    "topic": "arithmetic",
    "bank": "foundation-new",
    "title": "Rounding only for display — what is printed?",
    "code": "x = 2 / 3\nprint(f\"{x:.2f}\", x > 0.66)",
    "options": [
      "0.66 True",
      "0.67 True",
      "0.67 False",
      "0.66 False"
    ],
    "answer": 1,
    "explanation": "Formatting rounds the displayed value while the underlying x remains greater than 0.66.",
    "mode": "python-output",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-031",
    "week": 1,
    "topic": "arithmetic",
    "bank": "foundation-new",
    "title": "Power and unary minus — what is printed?",
    "code": "print(-2**2, (-2)**2)",
    "options": [
      "4 4",
      "-4 -4",
      "-4 4",
      "4 -4"
    ],
    "answer": 2,
    "explanation": "Exponentiation binds before the leading minus unless parentheses include the negative base.",
    "mode": "python-output",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-032",
    "week": 1,
    "topic": "engineering",
    "bank": "foundation-new",
    "title": "A named constant in a formula — what is printed?",
    "code": "gravity = 10\nmass = 6\nheight = 3\nprint(mass * gravity * height)",
    "options": [
      "19",
      "60",
      "18",
      "180"
    ],
    "answer": 3,
    "explanation": "The illustrative potential-energy formula multiplies all three input quantities.",
    "mode": "python-output",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-033",
    "week": 1,
    "topic": "strings",
    "bank": "foundation-new",
    "title": "Quoting a numeric label — what is printed?",
    "code": "label = \"3.0\"\nprint(len(label), type(label).__name__)",
    "options": [
      "3 str",
      "3 float",
      "1 str",
      "3.0 float"
    ],
    "answer": 0,
    "explanation": "The string contains three characters, including its decimal point.",
    "mode": "python-output",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-034",
    "week": 1,
    "topic": "arithmetic",
    "bank": "foundation-new",
    "title": "A copied scalar value — what is printed?",
    "code": "a = 2.0\nb = a\na += 0.5\nprint(a, b)",
    "options": [
      "2.5 2.5",
      "2.5 2.0",
      "2.0 2.5",
      "2.0 2.0"
    ],
    "answer": 1,
    "explanation": "Updating a binds its new float value without changing b.",
    "mode": "python-output",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-035",
    "week": 1,
    "topic": "types",
    "bank": "foundation-new",
    "title": "Which variable name is valid Python?",
    "code": "",
    "options": [
      "2flow",
      "flow-rate",
      "flow_rate",
      "for"
    ],
    "answer": 2,
    "explanation": "Names may use letters, digits and underscores, but cannot begin with a digit or use a reserved keyword.",
    "mode": "concept",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-036",
    "week": 1,
    "topic": "types",
    "bank": "foundation-new",
    "title": "Which expression gives energy in joules from power_w and time_s?",
    "code": "",
    "options": [
      "power_w / time_s",
      "time_s / power_w",
      "power_w + time_s",
      "power_w * time_s"
    ],
    "answer": 3,
    "explanation": "A watt is a joule per second; multiplying by seconds yields joules.",
    "mode": "concept",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-037",
    "week": 1,
    "topic": "types",
    "bank": "foundation-new",
    "title": "What does the assignment x = y establish?",
    "code": "",
    "options": [
      "x is bound to the value referenced by y",
      "y is always copied recursively",
      "x and y must remain equal forever",
      "Python solves an equation for y"
    ],
    "answer": 0,
    "explanation": "Assignment binds a name; later rebinding and mutable-object behavior must be considered separately.",
    "mode": "concept",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-038",
    "week": 1,
    "topic": "types",
    "bank": "foundation-new",
    "title": "Which expression converts decimal-point text raw to a number?",
    "code": "",
    "options": [
      "str(raw)",
      "float(raw)",
      "len(raw)",
      "type(raw)"
    ],
    "answer": 1,
    "explanation": "float parses supported numeric text; the other operations do not perform this numeric conversion.",
    "mode": "concept",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-039",
    "week": 1,
    "topic": "types",
    "bank": "foundation-new",
    "title": "Which is a floating-point literal?",
    "code": "",
    "options": [
      "\"4.0\"",
      "4",
      "4.0",
      "\"4\""
    ],
    "answer": 2,
    "explanation": "A decimal point in this unquoted literal gives a float, while quotes create text.",
    "mode": "concept",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-040",
    "week": 1,
    "topic": "types",
    "bank": "foundation-new",
    "title": "Why put units in names such as distance_m?",
    "code": "",
    "options": [
      "To make Python enforce the unit automatically",
      "To prevent all numeric rounding",
      "To require that every value be positive",
      "To make dimensional meaning visible"
    ],
    "answer": 3,
    "explanation": "The name documents intended units, helping review, but does not impose a runtime unit type.",
    "mode": "concept",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-041",
    "week": 1,
    "topic": "types",
    "bank": "foundation-new",
    "title": "Which operator represents exponentiation in Python?",
    "code": "",
    "options": [
      "**",
      "^",
      "//",
      "%"
    ],
    "answer": 0,
    "explanation": "** raises a base to a power; ^ is a different bitwise operation for integers.",
    "mode": "concept",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-042",
    "week": 1,
    "topic": "types",
    "bank": "foundation-new",
    "title": "Which comparison includes equality at the upper limit?",
    "code": "",
    "options": [
      "value < limit",
      "value <= limit",
      "value > limit",
      "value != limit"
    ],
    "answer": 1,
    "explanation": "The <= relation permits a value exactly equal to its limit.",
    "mode": "concept",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-043",
    "week": 1,
    "topic": "types",
    "bank": "foundation-new",
    "title": "What does a comment beginning with # usually do?",
    "code": "",
    "options": [
      "Prints the remaining text",
      "Creates a string variable automatically",
      "Documents code without being executed as a statement",
      "Runs only in a loop"
    ],
    "answer": 2,
    "explanation": "A comment explains intent or context; it is ignored during ordinary execution.",
    "mode": "concept",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-044",
    "week": 1,
    "topic": "types",
    "bank": "foundation-new",
    "title": "Which conversion is appropriate for seconds from hours?",
    "code": "",
    "options": [
      "hours / 3600",
      "hours * 60",
      "hours + 3600",
      "hours * 3600"
    ],
    "answer": 3,
    "explanation": "One hour contains sixty minutes of sixty seconds, giving a factor of 3600.",
    "mode": "concept",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-045",
    "week": 1,
    "topic": "types",
    "bank": "foundation-new",
    "title": "A meaningful engineering output should normally include:",
    "code": "",
    "options": [
      "The quantity and its unit alongside the result",
      "Only the variable memory address",
      "Only a bare rounded number in every context",
      "A claim that code execution validates the physical model"
    ],
    "answer": 0,
    "explanation": "The label and unit make the number interpretable under the stated model.",
    "mode": "concept",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-046",
    "week": 1,
    "topic": "types",
    "bank": "foundation-new",
    "title": "Which is the best reason to state an input assumption?",
    "code": "",
    "options": [
      "It proves all possible inputs valid",
      "It defines the domain in which the calculation is intended to apply",
      "It makes every exception disappear",
      "It changes the numeric value automatically"
    ],
    "answer": 1,
    "explanation": "Assumptions delimit the contract and support meaningful tests and interpretation.",
    "mode": "concept",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-047",
    "week": 1,
    "topic": "types",
    "bank": "foundation-new",
    "title": "What distinguishes a syntax error from a wrong engineering formula?",
    "code": "",
    "options": [
      "Both always stop parsing",
      "A wrong formula is always a SyntaxError",
      "A syntax error violates Python grammar; a wrong formula may still execute",
      "Python checks the physical meaning of every expression"
    ],
    "answer": 2,
    "explanation": "Grammar checks do not establish that a valid expression models the intended relationship.",
    "mode": "concept",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w1-048",
    "week": 1,
    "topic": "types",
    "bank": "foundation-new",
    "title": "Which expression correctly scales a length from metres to millimetres?",
    "code": "",
    "options": [
      "length_m / 1000",
      "length_m * 100",
      "length_m / 100",
      "length_m * 1000"
    ],
    "answer": 3,
    "explanation": "The numerical length in millimetres is one thousand times the numerical length in metres.",
    "mode": "concept",
    "source": "Week 1 · Original foundation practice"
  },
  {
    "id": "foundation-w2-001",
    "week": 2,
    "topic": "decisions",
    "bank": "foundation-new",
    "title": "A two-way temperature decision — what is printed?",
    "code": "temperature = 15\nif temperature >= 20:\n    print(\"warm\")\nelse:\n    print(\"cool\")",
    "options": [
      "cool",
      "warm",
      "15",
      "No output"
    ],
    "answer": 0,
    "explanation": "The condition is false, so only the else suite runs.",
    "mode": "python-output",
    "source": "Week 2 · Original foundation practice"
  },
  {
    "id": "foundation-w2-002",
    "week": 2,
    "topic": "decisions",
    "bank": "foundation-new",
    "title": "An equality boundary in elif — what is printed?",
    "code": "x = 10\nif x < 10:\n    print(\"low\")\nelif x == 10:\n    print(\"edge\")\nelse:\n    print(\"high\")",
    "options": [
      "low",
      "edge",
      "high",
      "low\nedge"
    ],
    "answer": 1,
    "explanation": "The first branch is false and the equality branch is true.",
    "mode": "python-output",
    "source": "Week 2 · Original foundation practice"
  },
  {
    "id": "foundation-w2-003",
    "week": 2,
    "topic": "decisions",
    "bank": "foundation-new",
    "title": "First matching classification — what is printed?",
    "code": "score = 85\nif score >= 80:\n    print(\"A\")\nelif score >= 60:\n    print(\"B\")",
    "options": [
      "B",
      "A\nB",
      "A",
      "No output"
    ],
    "answer": 2,
    "explanation": "An if/elif chain stops after its first true branch.",
    "mode": "python-output",
    "source": "Week 2 · Original foundation practice"
  },
  {
    "id": "foundation-w2-004",
    "week": 2,
    "topic": "decisions",
    "bank": "foundation-new",
    "title": "Independent conditions — what is printed?",
    "code": "x = 6\nif x > 0:\n    print(\"positive\")\nif x % 2 == 0:\n    print(\"even\")",
    "options": [
      "positive",
      "even",
      "No output",
      "positive\neven"
    ],
    "answer": 3,
    "explanation": "These are independent if statements; both conditions are true.",
    "mode": "python-output",
    "source": "Week 2 · Original foundation practice"
  },
  {
    "id": "foundation-w2-005",
    "week": 2,
    "topic": "decisions",
    "bank": "foundation-new",
    "title": "A conjunction of constraints — what is printed?",
    "code": "mass, cost = 4, 12\nprint(mass <= 5 and cost <= 10)",
    "options": [
      "False",
      "True",
      "4",
      "12"
    ],
    "answer": 0,
    "explanation": "The mass passes, but both constraints are required and cost fails.",
    "mode": "python-output",
    "source": "Week 2 · Original foundation practice"
  },
  {
    "id": "foundation-w2-006",
    "week": 2,
    "topic": "decisions",
    "bank": "foundation-new",
    "title": "An alternative trigger — what is printed?",
    "code": "pressure, temperature = 8, 95\nprint(pressure > 10 or temperature > 90)",
    "options": [
      "False",
      "True",
      "95",
      "8"
    ],
    "answer": 1,
    "explanation": "Only one true operand is needed for this or expression.",
    "mode": "python-output",
    "source": "Week 2 · Original foundation practice"
  },
  {
    "id": "foundation-w2-007",
    "week": 2,
    "topic": "decisions",
    "bank": "foundation-new",
    "title": "Negating a condition — what is printed?",
    "code": "running = False\nprint(not running)",
    "options": [
      "False",
      "None",
      "True",
      "0"
    ],
    "answer": 2,
    "explanation": "not reverses the Boolean truth value.",
    "mode": "python-output",
    "source": "Week 2 · Original foundation practice"
  },
  {
    "id": "foundation-w2-008",
    "week": 2,
    "topic": "decisions",
    "bank": "foundation-new",
    "title": "A nested branch — what is printed?",
    "code": "x, y = 3, -2\nif x > 0:\n    if y > 0:\n        print(\"both\")\n    else:\n        print(\"x only\")",
    "options": [
      "both",
      "No output",
      "x only\nboth",
      "x only"
    ],
    "answer": 3,
    "explanation": "The outer condition passes, but the inner condition selects its else suite.",
    "mode": "python-output",
    "source": "Week 2 · Original foundation practice"
  },
  {
    "id": "foundation-w2-009",
    "week": 2,
    "topic": "decisions",
    "bank": "foundation-new",
    "title": "A range with a step — what is printed?",
    "code": "print(list(range(2, 10, 3)))",
    "options": [
      "[2, 5, 8]",
      "[2, 5, 8, 11]",
      "[2, 3, 10]",
      "[3, 6, 9]"
    ],
    "answer": 0,
    "explanation": "Starting at two and adding three stops before reaching or passing ten.",
    "mode": "python-output",
    "source": "Week 2 · Original foundation practice"
  },
  {
    "id": "foundation-w2-010",
    "week": 2,
    "topic": "for",
    "bank": "foundation-new",
    "title": "A descending loop — what is printed?",
    "code": "for i in range(3, 0, -1):\n    print(i)",
    "options": [
      "3\n2\n1\n0",
      "3\n2\n1",
      "0\n1\n2",
      "3\n0"
    ],
    "answer": 1,
    "explanation": "The negative step counts down while excluding the stop value zero.",
    "mode": "python-output",
    "source": "Week 2 · Original foundation practice"
  },
  {
    "id": "foundation-w2-011",
    "week": 2,
    "topic": "for",
    "bank": "foundation-new",
    "title": "Summing a nonzero range — what is printed?",
    "code": "total = 0\nfor i in range(2, 6):\n    total += i\nprint(total)",
    "options": [
      "15",
      "4",
      "14",
      "6"
    ],
    "answer": 2,
    "explanation": "The values two through five contribute 2+3+4+5.",
    "mode": "python-output",
    "source": "Week 2 · Original foundation practice"
  },
  {
    "id": "foundation-w2-012",
    "week": 2,
    "topic": "for",
    "bank": "foundation-new",
    "title": "Counting selected values — what is printed?",
    "code": "count = 0\nfor x in [2, 7, 4, 9]:\n    if x > 5:\n        count += 1\nprint(count)",
    "options": [
      "4",
      "3",
      "1",
      "2"
    ],
    "answer": 3,
    "explanation": "Only seven and nine satisfy the condition.",
    "mode": "python-output",
    "source": "Week 2 · Original foundation practice"
  },
  {
    "id": "foundation-w2-013",
    "week": 2,
    "topic": "for",
    "bank": "foundation-new",
    "title": "Break before accumulation — what is printed?",
    "code": "total = 0\nfor x in [3, 5, 0, 9]:\n    if x == 0:\n        break\n    total += x\nprint(total)",
    "options": [
      "8",
      "17",
      "0",
      "3"
    ],
    "answer": 0,
    "explanation": "The stop marker ends the loop before it or the later value enters the sum.",
    "mode": "python-output",
    "source": "Week 2 · Original foundation practice"
  },
  {
    "id": "foundation-w2-014",
    "week": 2,
    "topic": "for",
    "bank": "foundation-new",
    "title": "Continue skips one iteration — what is printed?",
    "code": "out = []\nfor i in range(5):\n    if i == 2:\n        continue\n    out.append(i)\nprint(out)",
    "options": [
      "[0, 1]",
      "[0, 1, 3, 4]",
      "[0, 1, 2, 3, 4]",
      "[1, 3, 4]"
    ],
    "answer": 1,
    "explanation": "continue skips the append for two, then the loop proceeds.",
    "mode": "python-output",
    "source": "Week 2 · Original foundation practice"
  },
  {
    "id": "foundation-w2-015",
    "week": 2,
    "topic": "while",
    "bank": "foundation-new",
    "title": "A while counter — what is printed?",
    "code": "n = 1\nwhile n < 9:\n    n *= 2\nprint(n)",
    "options": [
      "8",
      "9",
      "16",
      "18"
    ],
    "answer": 2,
    "explanation": "The updates produce two, four, eight and sixteen; sixteen is the first value not below nine.",
    "mode": "python-output",
    "source": "Week 2 · Original foundation practice"
  },
  {
    "id": "foundation-w2-016",
    "week": 2,
    "topic": "while",
    "bank": "foundation-new",
    "title": "A bounded decrement — what is printed?",
    "code": "n = 10\nsteps = 0\nwhile n > 0:\n    n -= 4\n    steps += 1\nprint(n, steps)",
    "options": [
      "2 2",
      "0 3",
      "-2 4",
      "-2 3"
    ],
    "answer": 3,
    "explanation": "Three updates produce six, two and minus two.",
    "mode": "python-output",
    "source": "Week 2 · Original foundation practice"
  },
  {
    "id": "foundation-w2-017",
    "week": 2,
    "topic": "while",
    "bank": "foundation-new",
    "title": "Zero loop passes — what is printed?",
    "code": "value = 5\nwhile value < 0:\n    value += 1\nprint(value)",
    "options": [
      "5",
      "0",
      "6",
      "No output"
    ],
    "answer": 0,
    "explanation": "The condition is false before the first pass, so the body never runs.",
    "mode": "python-output",
    "source": "Week 2 · Original foundation practice"
  },
  {
    "id": "foundation-w2-018",
    "week": 2,
    "topic": "for",
    "bank": "foundation-new",
    "title": "A product accumulator — what is printed?",
    "code": "product = 1\nfor x in [2, 3, 4]:\n    product *= x\nprint(product)",
    "options": [
      "9",
      "24",
      "0",
      "12"
    ],
    "answer": 1,
    "explanation": "The multiplicative identity one allows all three factors to contribute.",
    "mode": "python-output",
    "source": "Week 2 · Original foundation practice"
  },
  {
    "id": "foundation-w2-019",
    "week": 2,
    "topic": "for",
    "bank": "foundation-new",
    "title": "Nested iteration count — what is printed?",
    "code": "count = 0\nfor i in range(2):\n    for j in range(3):\n        count += 1\nprint(count)",
    "options": [
      "5",
      "3",
      "6",
      "2"
    ],
    "answer": 2,
    "explanation": "Two outer passes each contain three inner passes.",
    "mode": "python-output",
    "source": "Week 2 · Original foundation practice"
  },
  {
    "id": "foundation-w2-020",
    "week": 2,
    "topic": "for",
    "bank": "foundation-new",
    "title": "The last loop binding — what is printed?",
    "code": "for value in [4, 6, 8]:\n    pass\nprint(value)",
    "options": [
      "4",
      "6",
      "None",
      "8"
    ],
    "answer": 3,
    "explanation": "The loop variable remains bound to the last item after this nonempty loop.",
    "mode": "python-output",
    "source": "Week 2 · Original foundation practice"
  },
  {
    "id": "foundation-w2-021",
    "week": 2,
    "topic": "decisions",
    "bank": "foundation-new",
    "title": "String membership condition — what is printed?",
    "code": "label = \"pump-A\"\nprint(\"pump\" in label, \"B\" in label)",
    "options": [
      "True False",
      "True True",
      "False False",
      "False True"
    ],
    "answer": 0,
    "explanation": "The substring pump is present; B is absent.",
    "mode": "python-output",
    "source": "Week 2 · Original foundation practice"
  },
  {
    "id": "foundation-w2-022",
    "week": 2,
    "topic": "decisions",
    "bank": "foundation-new",
    "title": "A conditional expression — what is printed?",
    "code": "x = -3\nprint(\"negative\" if x < 0 else \"nonnegative\")",
    "options": [
      "nonnegative",
      "negative",
      "-3",
      "True"
    ],
    "answer": 1,
    "explanation": "The true condition selects the expression before else.",
    "mode": "python-output",
    "source": "Week 2 · Original foundation practice"
  },
  {
    "id": "foundation-w2-023",
    "week": 2,
    "topic": "decisions",
    "bank": "foundation-new",
    "title": "A parity branch — what is printed?",
    "code": "n = 14\nif n % 2:\n    print(\"odd\")\nelse:\n    print(\"even\")",
    "options": [
      "odd",
      "0",
      "even",
      "14"
    ],
    "answer": 2,
    "explanation": "The remainder is zero, which is false in the if condition.",
    "mode": "python-output",
    "source": "Week 2 · Original foundation practice"
  },
  {
    "id": "foundation-w2-024",
    "week": 2,
    "topic": "for",
    "bank": "foundation-new",
    "title": "An accumulated string — what is printed?",
    "code": "result = \"\"\nfor letter in \"AB\":\n    result += letter * 2\nprint(result)",
    "options": [
      "ABAB",
      "AB",
      "AAAA",
      "AABB"
    ],
    "answer": 3,
    "explanation": "Each character is doubled before being appended to the growing text.",
    "mode": "python-output",
    "source": "Week 2 · Original foundation practice"
  },
  {
    "id": "foundation-w2-025",
    "week": 2,
    "topic": "for",
    "bank": "foundation-new",
    "title": "A loop else after completion — what is printed?",
    "code": "for x in [1, 2]:\n    if x == 9:\n        break\nelse:\n    print(\"not found\")",
    "options": [
      "not found",
      "9",
      "No output",
      "1\n2"
    ],
    "answer": 0,
    "explanation": "The loop finishes without break, so its else suite runs.",
    "mode": "python-output",
    "source": "Week 2 · Original foundation practice"
  },
  {
    "id": "foundation-w2-026",
    "week": 2,
    "topic": "for",
    "bank": "foundation-new",
    "title": "A loop else after break — what is printed?",
    "code": "for x in [1, 2]:\n    if x == 2:\n        print(\"found\")\n        break\nelse:\n    print(\"missing\")",
    "options": [
      "found\nmissing",
      "found",
      "missing",
      "No output"
    ],
    "answer": 1,
    "explanation": "The break suppresses the loop else suite.",
    "mode": "python-output",
    "source": "Week 2 · Original foundation practice"
  },
  {
    "id": "foundation-w2-027",
    "week": 2,
    "topic": "for",
    "bank": "foundation-new",
    "title": "Index and value together — what is printed?",
    "code": "for i, value in enumerate([5, 9], start=1):\n    print(i, value)",
    "options": [
      "0 5\n1 9",
      "1 9\n2 5",
      "1 5\n2 9",
      "5 1\n9 2"
    ],
    "answer": 2,
    "explanation": "enumerate starts the displayed positions at the explicitly supplied one.",
    "mode": "python-output",
    "source": "Week 2 · Original foundation practice"
  },
  {
    "id": "foundation-w2-028",
    "week": 2,
    "topic": "decisions",
    "bank": "foundation-new",
    "title": "A logical interval — what is printed?",
    "code": "x = 7\nprint(3 <= x < 7)",
    "options": [
      "True",
      "7",
      "3",
      "False"
    ],
    "answer": 3,
    "explanation": "The upper inequality is strict, so seven itself is excluded.",
    "mode": "python-output",
    "source": "Week 2 · Original foundation practice"
  },
  {
    "id": "foundation-w2-029",
    "week": 2,
    "topic": "decisions",
    "bank": "foundation-new",
    "title": "Which choice prevents an alternative branch after the first successful classification?",
    "code": "",
    "options": [
      "An if/elif/else chain",
      "Several independent if statements",
      "An unconditional print after every branch",
      "A loop with no condition"
    ],
    "answer": 0,
    "explanation": "The chain chooses one branch at most; independent if statements can all run.",
    "mode": "concept",
    "source": "Week 2 · Original foundation practice"
  },
  {
    "id": "foundation-w2-030",
    "week": 2,
    "topic": "decisions",
    "bank": "foundation-new",
    "title": "Which statement ends the nearest loop immediately?",
    "code": "",
    "options": [
      "continue",
      "break",
      "pass",
      "else"
    ],
    "answer": 1,
    "explanation": "break exits the loop, whereas continue advances to its next iteration and pass does nothing.",
    "mode": "concept",
    "source": "Week 2 · Original foundation practice"
  },
  {
    "id": "foundation-w2-031",
    "week": 2,
    "topic": "decisions",
    "bank": "foundation-new",
    "title": "Which statement skips the remaining body of one loop iteration?",
    "code": "",
    "options": [
      "break",
      "return in every context",
      "continue",
      "pass"
    ],
    "answer": 2,
    "explanation": "continue resumes with the loop’s next iteration rather than ending the entire loop.",
    "mode": "concept",
    "source": "Week 2 · Original foundation practice"
  },
  {
    "id": "foundation-w2-032",
    "week": 2,
    "topic": "decisions",
    "bank": "foundation-new",
    "title": "Why initialize a sum before a loop?",
    "code": "",
    "options": [
      "It makes all inputs positive",
      "It forces the loop to run once",
      "It removes the need to update the total",
      "The accumulator needs a defined starting value"
    ],
    "answer": 3,
    "explanation": "Starting at zero provides the additive identity and avoids using an unbound name.",
    "mode": "concept",
    "source": "Week 2 · Original foundation practice"
  },
  {
    "id": "foundation-w2-033",
    "week": 2,
    "topic": "decisions",
    "bank": "foundation-new",
    "title": "Which input checks the boundary of x < 50 most directly?",
    "code": "",
    "options": [
      "50",
      "20",
      "80",
      "-10"
    ],
    "answer": 0,
    "explanation": "The equality value distinguishes a strict comparison from one that includes its endpoint.",
    "mode": "concept",
    "source": "Week 2 · Original foundation practice"
  },
  {
    "id": "foundation-w2-034",
    "week": 2,
    "topic": "decisions",
    "bank": "foundation-new",
    "title": "How many values does range(4) produce?",
    "code": "",
    "options": [
      "3",
      "4",
      "5",
      "0"
    ],
    "answer": 1,
    "explanation": "It produces zero, one, two and three: four values in total.",
    "mode": "concept",
    "source": "Week 2 · Original foundation practice"
  },
  {
    "id": "foundation-w2-035",
    "week": 2,
    "topic": "decisions",
    "bank": "foundation-new",
    "title": "Which Boolean expression requires both tests?",
    "code": "",
    "options": [
      "a or b",
      "not a",
      "a and b",
      "a != b in every case"
    ],
    "answer": 2,
    "explanation": "Conjunction is true only when both Boolean tests are true.",
    "mode": "concept",
    "source": "Week 2 · Original foundation practice"
  },
  {
    "id": "foundation-w2-036",
    "week": 2,
    "topic": "decisions",
    "bank": "foundation-new",
    "title": "A while loop’s termination argument should identify:",
    "code": "",
    "options": [
      "Only the loop’s indentation",
      "Only a print statement",
      "A variable that never changes",
      "A state change that eventually makes its condition false"
    ],
    "answer": 3,
    "explanation": "Reasoning about progress prevents repeating the same condition and state indefinitely.",
    "mode": "concept",
    "source": "Week 2 · Original foundation practice"
  },
  {
    "id": "foundation-w2-037",
    "week": 2,
    "topic": "decisions",
    "bank": "foundation-new",
    "title": "Which initializer is appropriate for a product of factors?",
    "code": "",
    "options": [
      "1",
      "0",
      "None",
      "An empty string"
    ],
    "answer": 0,
    "explanation": "One is the multiplicative identity; starting at zero would erase every finite numeric factor.",
    "mode": "concept",
    "source": "Week 2 · Original foundation practice"
  },
  {
    "id": "foundation-w2-038",
    "week": 2,
    "topic": "decisions",
    "bank": "foundation-new",
    "title": "Which indentation describes a statement inside a loop body?",
    "code": "",
    "options": [
      "It must begin in the same column as the header",
      "It is indented consistently under the loop header",
      "It must have exactly one space in every program",
      "It must be on the line before the header"
    ],
    "answer": 1,
    "explanation": "Python uses consistent block indentation to determine which statements belong to the loop.",
    "mode": "concept",
    "source": "Week 2 · Original foundation practice"
  },
  {
    "id": "foundation-w3-001",
    "week": 3,
    "topic": "strings",
    "bank": "foundation-new",
    "title": "A character at a known position — what is printed?",
    "code": "label = \"sensor\"\nprint(label[2])",
    "options": [
      "e",
      "s",
      "n",
      "o"
    ],
    "answer": 2,
    "explanation": "Indexing starts at zero, so index two selects the third character.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-002",
    "week": 3,
    "topic": "strings",
    "bank": "foundation-new",
    "title": "A negative position — what is printed?",
    "code": "label = \"valve\"\nprint(label[-2])",
    "options": [
      "e",
      "l",
      "a",
      "v"
    ],
    "answer": 3,
    "explanation": "Minus one is the last character; minus two is the preceding v.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-003",
    "week": 3,
    "topic": "strings",
    "bank": "foundation-new",
    "title": "A half-open substring — what is printed?",
    "code": "text = \"engineering\"\nprint(text[2:6])",
    "options": [
      "gine",
      "ginee",
      "engi",
      "ine"
    ],
    "answer": 0,
    "explanation": "The slice includes positions two through five, excluding position six.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-004",
    "week": 3,
    "topic": "strings",
    "bank": "foundation-new",
    "title": "Every second character — what is printed?",
    "code": "text = \"abcdefg\"\nprint(text[::2])",
    "options": [
      "bdf",
      "aceg",
      "abcdefg",
      "geca"
    ],
    "answer": 1,
    "explanation": "The default start is zero and the positive step visits every second position.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-005",
    "week": 3,
    "topic": "strings",
    "bank": "foundation-new",
    "title": "Reversing text — what is printed?",
    "code": "text = \"loop\"\nprint(text[::-1])",
    "options": [
      "loop",
      "pol",
      "pool",
      "ool"
    ],
    "answer": 2,
    "explanation": "A negative-one step traverses the string from its end toward the beginning.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-006",
    "week": 3,
    "topic": "strings",
    "bank": "foundation-new",
    "title": "A slice beyond the end — what is printed?",
    "code": "text = \"pump\"\nprint(text[2:20])",
    "options": [
      "IndexError",
      "pump",
      "pu",
      "mp"
    ],
    "answer": 3,
    "explanation": "A slice clips its endpoint to the available sequence rather than raising for this large stop.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-007",
    "week": 3,
    "topic": "strings",
    "bank": "foundation-new",
    "title": "An empty slice — what is printed?",
    "code": "text = \"ABCDE\"\nprint(len(text[4:2]))",
    "options": [
      "0",
      "2",
      "4",
      "IndexError"
    ],
    "answer": 0,
    "explanation": "With the default positive step, a start after the stop selects no characters.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-008",
    "week": 3,
    "topic": "strings",
    "bank": "foundation-new",
    "title": "Stripping edge whitespace — what is printed?",
    "code": "raw = \"  pump A  \"\nprint(raw.strip())",
    "options": [
      "pumpA",
      "pump A",
      "  pump A",
      "pump A  "
    ],
    "answer": 1,
    "explanation": "strip removes whitespace at the edges while retaining the interior space.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-009",
    "week": 3,
    "topic": "strings",
    "bank": "foundation-new",
    "title": "Case normalization — what is printed?",
    "code": "raw = \"Valve-B\"\nprint(raw.lower(), raw)",
    "options": [
      "valve-b valve-b",
      "VALVE-B Valve-B",
      "valve-b Valve-B",
      "Valve-B Valve-B"
    ],
    "answer": 2,
    "explanation": "lower returns new normalized text and does not change the original string.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-010",
    "week": 3,
    "topic": "strings",
    "bank": "foundation-new",
    "title": "Replacing a separator — what is printed?",
    "code": "label = \"A-B-C\"\nprint(label.replace(\"-\", \":\"))",
    "options": [
      "ABC",
      "A:B-C",
      "A-B-C",
      "A:B:C"
    ],
    "answer": 3,
    "explanation": "Without a count limit, replace substitutes every occurrence of the selected substring.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-011",
    "week": 3,
    "topic": "strings",
    "bank": "foundation-new",
    "title": "A limited replacement — what is printed?",
    "code": "text = \"a,a,a\"\nprint(text.replace(\",\", \";\", 1))",
    "options": [
      "a;a,a",
      "a;a;a",
      "a,a;a",
      "a,a,a"
    ],
    "answer": 0,
    "explanation": "The count argument limits replacement to the first match.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-012",
    "week": 3,
    "topic": "strings",
    "bank": "foundation-new",
    "title": "Splitting numeric fields — what is printed?",
    "code": "raw = \"2;4;6\"\nparts = raw.split(\";\")\nprint(parts[1], len(parts))",
    "options": [
      "2 3",
      "4 3",
      "4 2",
      "[2, 4, 6] 3"
    ],
    "answer": 1,
    "explanation": "split creates three text fields, with the middle field at index one.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-013",
    "week": 3,
    "topic": "strings",
    "bank": "foundation-new",
    "title": "Default whitespace splitting — what is printed?",
    "code": "raw = \" A   B\tC \"\nprint(raw.split())",
    "options": [
      "['', 'A', '', '', 'B\\tC', '']",
      "['A   B\\tC']",
      "['A', 'B', 'C']",
      "A B C"
    ],
    "answer": 2,
    "explanation": "The default split treats runs of whitespace as separators and drops empty edge fields.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-014",
    "week": 3,
    "topic": "strings",
    "bank": "foundation-new",
    "title": "Joining short labels — what is printed?",
    "code": "parts = [\"S1\", \"S2\", \"S3\"]\nprint(\" | \".join(parts))",
    "options": [
      "S1S2S3",
      "S1, S2, S3",
      "[S1 | S2 | S3]",
      "S1 | S2 | S3"
    ],
    "answer": 3,
    "explanation": "join places the chosen separator between, rather than around, the text fields.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-015",
    "week": 3,
    "topic": "strings",
    "bank": "foundation-new",
    "title": "Locating a substring — what is printed?",
    "code": "text = \"banana\"\nprint(text.find(\"na\"), text.find(\"z\"))",
    "options": [
      "2 -1",
      "3 0",
      "2 0",
      "4 -1"
    ],
    "answer": 0,
    "explanation": "find returns the first matching index and the documented minus-one missing result.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-016",
    "week": 3,
    "topic": "strings",
    "bank": "foundation-new",
    "title": "Counting nonoverlapping matches — what is printed?",
    "code": "print(\"aaaa\".count(\"aa\"))",
    "options": [
      "3",
      "2",
      "4",
      "1"
    ],
    "answer": 1,
    "explanation": "String count counts nonoverlapping occurrences, so the four characters contain two aa matches.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-017",
    "week": 3,
    "topic": "strings",
    "bank": "foundation-new",
    "title": "Prefix and suffix checks — what is printed?",
    "code": "name = \"sensor.csv\"\nprint(name.startswith(\"sensor\"), name.endswith(\".txt\"))",
    "options": [
      "True True",
      "False False",
      "True False",
      "False True"
    ],
    "answer": 2,
    "explanation": "The selected prefix is present, while the selected suffix is not.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-018",
    "week": 3,
    "topic": "strings",
    "bank": "foundation-new",
    "title": "Digit-only text — what is printed?",
    "code": "print(\"123\".isdigit(), \"12.3\".isdigit())",
    "options": [
      "True True",
      "False False",
      "False True",
      "True False"
    ],
    "answer": 3,
    "explanation": "The decimal point prevents the second string from consisting entirely of digits.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-019",
    "week": 3,
    "topic": "strings",
    "bank": "foundation-new",
    "title": "Lexicographic text order — what is printed?",
    "code": "print(\"10\" < \"2\", 10 < 2)",
    "options": [
      "True False",
      "False False",
      "True True",
      "False True"
    ],
    "answer": 0,
    "explanation": "Text compares leading characters; numeric comparison uses the represented integer values.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-020",
    "week": 3,
    "topic": "strings",
    "bank": "foundation-new",
    "title": "Building a normalized identifier — what is printed?",
    "code": "raw = \"  Pump A  \"\nkey = raw.strip().lower().replace(\" \", \"_\")\nprint(key)",
    "options": [
      "Pump_A",
      "pump_a",
      "pumpa",
      "__pump_a__"
    ],
    "answer": 1,
    "explanation": "The methods run in sequence: remove edge spaces, lowercase, then replace the remaining interior space.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-021",
    "week": 3,
    "topic": "strings",
    "bank": "foundation-new",
    "title": "Converting split fields — what is printed?",
    "code": "raw = \"3,5,7\"\nvalues = [int(x) for x in raw.split(\",\")]\nprint(sum(values))",
    "options": [
      "357",
      "3",
      "15",
      "12"
    ],
    "answer": 2,
    "explanation": "The split fields convert to integers before summation.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-022",
    "week": 3,
    "topic": "strings",
    "bank": "foundation-new",
    "title": "Formatting a record — what is printed?",
    "code": "name, value = \"A\", 2.5\nprint(f\"{name}:{value:.1f}\")",
    "options": [
      "A:2.50",
      "name:2.5",
      "A value",
      "A:2.5"
    ],
    "answer": 3,
    "explanation": "The f-string substitutes both bindings and displays one fractional digit.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-023",
    "week": 3,
    "topic": "strings",
    "bank": "foundation-new",
    "title": "A normalized palindrome — what is printed?",
    "code": "raw = \" Level \"\ntext = raw.strip().lower()\nprint(text == text[::-1])",
    "options": [
      "True",
      "False",
      "Level",
      "level"
    ],
    "answer": 0,
    "explanation": "After normalization, level equals its reverse.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-024",
    "week": 3,
    "topic": "strings",
    "bank": "foundation-new",
    "title": "Testing the empty string — what is printed?",
    "code": "text = \"\"\nprint(bool(text), len(text))",
    "options": [
      "True 0",
      "False 0",
      "False 1",
      "True 1"
    ],
    "answer": 1,
    "explanation": "An empty string has length zero and false truth value.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-025",
    "week": 3,
    "topic": "strings",
    "bank": "foundation-new",
    "title": "Independent text slices — what is printed?",
    "code": "text = \"DATA\"\npart = text[:2]\ntext = \"CODE\"\nprint(part, text)",
    "options": [
      "CO CODE",
      "DA DATA",
      "DA CODE",
      "DATA CODE"
    ],
    "answer": 2,
    "explanation": "The earlier slice remains its own value when text is rebound.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-026",
    "week": 3,
    "topic": "while",
    "bank": "foundation-new",
    "title": "First exact square found — what is printed?",
    "code": "answer = None\nfor guess in range(8):\n    if guess*guess == 36:\n        answer = guess\n        break\nprint(answer)",
    "options": [
      "36",
      "7",
      "None",
      "6"
    ],
    "answer": 3,
    "explanation": "The increasing search reaches the nonnegative exact root six before the range ends.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-027",
    "week": 3,
    "topic": "while",
    "bank": "foundation-new",
    "title": "An unsuccessful exact-root search — what is printed?",
    "code": "answer = None\nfor guess in range(6):\n    if guess*guess == 20:\n        answer = guess\n        break\nprint(answer)",
    "options": [
      "None",
      "4",
      "5",
      "20"
    ],
    "answer": 0,
    "explanation": "No tested integer square equals twenty, so the missing-result value remains None.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-028",
    "week": 3,
    "topic": "while",
    "bank": "foundation-new",
    "title": "Counting guesses including zero — what is printed?",
    "code": "checks = 0\nfor guess in range(10):\n    checks += 1\n    if guess == 4:\n        break\nprint(checks)",
    "options": [
      "4",
      "5",
      "6",
      "10"
    ],
    "answer": 1,
    "explanation": "The comparisons test zero through four inclusive, giving five attempts.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-029",
    "week": 3,
    "topic": "while",
    "bank": "foundation-new",
    "title": "A fixed-step approximation — what is printed?",
    "code": "guess = 0.0\nwhile guess < 1.0:\n    guess += 0.25\nprint(guess)",
    "options": [
      "0.75",
      "1.25",
      "1.0",
      "4.0"
    ],
    "answer": 2,
    "explanation": "Four exactly represented quarter-step updates reach one.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-030",
    "week": 3,
    "topic": "while",
    "bank": "foundation-new",
    "title": "The midpoint of a bracket — what is printed?",
    "code": "low, high = 2.0, 6.0\nmid = (low+high)/2\nprint(mid)",
    "options": [
      "2.0",
      "3.0",
      "8.0",
      "4.0"
    ],
    "answer": 3,
    "explanation": "Bisection begins with the arithmetic midpoint of the current bracket.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-031",
    "week": 3,
    "topic": "while",
    "bank": "foundation-new",
    "title": "Retaining the upper root bracket — what is printed?",
    "code": "low, high, target = 0.0, 4.0, 9.0\nmid = (low+high)/2\nif mid*mid < target:\n    low = mid\nelse:\n    high = mid\nprint(low, high)",
    "options": [
      "2.0 4.0",
      "0.0 2.0",
      "2.0 2.0",
      "0.0 4.0"
    ],
    "answer": 0,
    "explanation": "The midpoint square is four, below nine, so the nonnegative root lies above the midpoint.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-032",
    "week": 3,
    "topic": "while",
    "bank": "foundation-new",
    "title": "Retaining the lower root bracket — what is printed?",
    "code": "low, high, target = 0.0, 8.0, 9.0\nmid = (low+high)/2\nif mid*mid < target:\n    low = mid\nelse:\n    high = mid\nprint(low, high)",
    "options": [
      "4.0 8.0",
      "0.0 4.0",
      "0.0 8.0",
      "4.0 4.0"
    ],
    "answer": 1,
    "explanation": "The midpoint square is sixteen, above nine, so the upper endpoint moves down.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-033",
    "week": 3,
    "topic": "while",
    "bank": "foundation-new",
    "title": "An exact midpoint root — what is printed?",
    "code": "low, high = 0.0, 6.0\nmid = (low+high)/2\nprint(mid*mid == 9)",
    "options": [
      "False",
      "9.0",
      "True",
      "3.0"
    ],
    "answer": 2,
    "explanation": "The midpoint is three, whose square exactly equals nine for these values.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-034",
    "week": 3,
    "topic": "while",
    "bank": "foundation-new",
    "title": "Error magnitude instead of sign — what is printed?",
    "code": "estimate, target = 2.0, 9.0\nprint(abs(estimate**2-target))",
    "options": [
      "-5.0",
      "7.0",
      "11.0",
      "5.0"
    ],
    "answer": 3,
    "explanation": "The squared-value residual is minus five, and its magnitude is five.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-035",
    "week": 3,
    "topic": "while",
    "bank": "foundation-new",
    "title": "A residual acceptance rule — what is printed?",
    "code": "error, tolerance = 0.01, 0.01\nprint(error <= tolerance)",
    "options": [
      "True",
      "False",
      "0.01",
      "None"
    ],
    "answer": 0,
    "explanation": "The inclusive acceptance rule admits a residual exactly at the tolerance.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-036",
    "week": 3,
    "topic": "while",
    "bank": "foundation-new",
    "title": "Repeated bracket halving — what is printed?",
    "code": "width = 8.0\nfor _ in range(3):\n    width /= 2\nprint(width)",
    "options": [
      "4.0",
      "1.0",
      "2.0",
      "0.5"
    ],
    "answer": 1,
    "explanation": "Three halvings reduce eight to four, two and one.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-037",
    "week": 3,
    "topic": "while",
    "bank": "foundation-new",
    "title": "A bounded approximation loop — what is printed?",
    "code": "guess = 0\nsteps = 0\nwhile guess*guess < 30 and steps < 4:\n    guess += 1\n    steps += 1\nprint(guess, steps)",
    "options": [
      "6 6",
      "5 4",
      "4 4",
      "4 5"
    ],
    "answer": 2,
    "explanation": "The step limit is reached at four updates before the squared threshold is met.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-038",
    "week": 3,
    "topic": "while",
    "bank": "foundation-new",
    "title": "A bounded Newton update — what is printed?",
    "code": "x, target = 4.0, 9.0\nx = (x + target/x)/2\nprint(x)",
    "options": [
      "3.0",
      "2.25",
      "6.25",
      "3.125"
    ],
    "answer": 3,
    "explanation": "The specified square-root Newton step averages x and target divided by x.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-039",
    "week": 3,
    "topic": "while",
    "bank": "foundation-new",
    "title": "Bracketing a small positive square root — what is printed?",
    "code": "target = 0.25\nlow, high = 0.0, max(1.0, target)\nprint(low, high)",
    "options": [
      "0.0 1.0",
      "0.0 0.25",
      "0.25 1.0",
      "1.0 1.0"
    ],
    "answer": 0,
    "explanation": "For a target below one, the root can exceed the target itself; the unit upper bound encloses it.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-040",
    "week": 3,
    "topic": "while",
    "bank": "foundation-new",
    "title": "A cube-root guess check — what is printed?",
    "code": "target = -8\nfound = [g for g in range(-4, 1) if g**3 == target]\nprint(found)",
    "options": [
      "[2]",
      "[-2]",
      "[-8]",
      "[]"
    ],
    "answer": 1,
    "explanation": "The integer minus two cubes to minus eight.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-041",
    "week": 3,
    "topic": "while",
    "bank": "foundation-new",
    "title": "Grid points include both endpoints — what is printed?",
    "code": "step = 0.5\npoints = [i*step for i in range(5)]\nprint(points)",
    "options": [
      "[0.0, 0.5, 1.0, 1.5]",
      "[0.5, 1.0, 1.5, 2.0]",
      "[0.0, 0.5, 1.0, 1.5, 2.0]",
      "[0, 1, 2, 3, 4]"
    ],
    "answer": 2,
    "explanation": "Five grid points at spacing one half cover zero through two inclusive.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-042",
    "week": 3,
    "topic": "while",
    "bank": "foundation-new",
    "title": "Keeping the best tested approximation — what is printed?",
    "code": "target = 7\ncandidates = [2.0, 2.5, 3.0]\nbest = min(candidates, key=lambda x: abs(x*x-target))\nprint(best)",
    "options": [
      "2.0",
      "3.0",
      "7",
      "2.5"
    ],
    "answer": 3,
    "explanation": "The squared residual magnitudes are three, 0.75 and two, so 2.5 is best among these candidates.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-043",
    "week": 3,
    "topic": "while",
    "bank": "foundation-new",
    "title": "A relative change calculation — what is printed?",
    "code": "old, new = 10.0, 9.5\nprint(abs(new-old)/abs(old))",
    "options": [
      "0.05",
      "0.5",
      "0.95",
      "5.0"
    ],
    "answer": 0,
    "explanation": "The absolute change one half is divided by the previous magnitude ten.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-044",
    "week": 3,
    "topic": "while",
    "bank": "foundation-new",
    "title": "A second-step bisection bracket — what is printed?",
    "code": "low, high = 0.0, 4.0\nfor _ in range(2):\n    mid = (low+high)/2\n    if mid*mid < 9:\n        low = mid\n    else:\n        high = mid\nprint(low, high)",
    "options": [
      "3.0 4.0",
      "2.0 3.0",
      "0.0 2.0",
      "2.0 4.0"
    ],
    "answer": 1,
    "explanation": "The first update raises low to two; the exact midpoint three then becomes high under the stated else rule.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-045",
    "week": 3,
    "topic": "while",
    "bank": "foundation-new",
    "title": "Counting until a squared threshold — what is printed?",
    "code": "n = 0\nwhile n*n < 18:\n    n += 1\nprint(n)",
    "options": [
      "4",
      "6",
      "5",
      "18"
    ],
    "answer": 2,
    "explanation": "Four squared is below eighteen; five squared is the first tested square at or above it.",
    "mode": "python-output",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-046",
    "week": 3,
    "topic": "strings",
    "bank": "foundation-new",
    "title": "For a nonempty string, why does text[-1] select the final character?",
    "code": "",
    "options": [
      "String indices start at one",
      "Minus one always means an error",
      "The first character has index minus one",
      "Negative sequence indices count backward from the end"
    ],
    "answer": 3,
    "explanation": "Python normalizes negative indices relative to sequence length. An empty string has no final character and indexing it raises IndexError.",
    "mode": "concept",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-047",
    "week": 3,
    "topic": "strings",
    "bank": "foundation-new",
    "title": "Which method removes whitespace only at the edges?",
    "code": "",
    "options": [
      "strip()",
      "replace(\" \", \"\") in every case",
      "split()",
      "find()"
    ],
    "answer": 0,
    "explanation": "strip keeps interior whitespace while removing supported whitespace from both ends.",
    "mode": "concept",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-048",
    "week": 3,
    "topic": "strings",
    "bank": "foundation-new",
    "title": "Which expression checks whether text contains a substring key?",
    "code": "",
    "options": [
      "text == key in every case",
      "key in text",
      "text is key",
      "len(key) in text"
    ],
    "answer": 1,
    "explanation": "Membership tests occurrence, which differs from requiring the whole strings to be equal.",
    "mode": "concept",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-049",
    "week": 3,
    "topic": "strings",
    "bank": "foundation-new",
    "title": "A string method such as lower() normally returns:",
    "code": "",
    "options": [
      "An in-place mutation of the original string",
      "A numeric type code",
      "A new string value",
      "A list of character indices"
    ],
    "answer": 2,
    "explanation": "Strings are immutable; callers retain a transformed value by binding or using the returned string.",
    "mode": "concept",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-050",
    "week": 3,
    "topic": "strings",
    "bank": "foundation-new",
    "title": "Which indices does text[a:b] include when 0 <= a < b <= len(text) and the step is 1?",
    "code": "",
    "options": [
      "Both endpoints in every case",
      "Only index b",
      "No indices below b",
      "It starts at index a and stops before b"
    ],
    "answer": 3,
    "explanation": "Under these bounds, the slice contains indices a through b-1 and has length b-a. The stop index b is excluded.",
    "mode": "concept",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-051",
    "week": 3,
    "topic": "while",
    "bank": "foundation-new",
    "title": "What is the key step in exhaustive enumeration?",
    "code": "",
    "options": [
      "Generate candidates and test them against the stated condition",
      "Assume the first candidate succeeds",
      "Discard untested candidates without a reason",
      "Accept a plausible value without checking"
    ],
    "answer": 0,
    "explanation": "Exhaustive search systematically checks the chosen candidate domain.",
    "mode": "concept",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-052",
    "week": 3,
    "topic": "while",
    "bank": "foundation-new",
    "title": "For nonnegative square-root bisection, why compare mid squared with target?",
    "code": "",
    "options": [
      "Every midpoint is already the root",
      "The square function is increasing over nonnegative candidates",
      "Negative values are always allowed without qualification",
      "This comparison eliminates all rounding"
    ],
    "answer": 1,
    "explanation": "The monotonic relation justifies deciding which half can contain the nonnegative root.",
    "mode": "concept",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-053",
    "week": 3,
    "topic": "while",
    "bank": "foundation-new",
    "title": "Why include a maximum iteration count in an approximation procedure?",
    "code": "",
    "options": [
      "To guarantee an exact answer",
      "To make every input take identical work",
      "To provide a bounded failure path if the success criterion is not reached",
      "To replace the convergence criterion"
    ],
    "answer": 2,
    "explanation": "An iteration cap limits work; it must be distinguished from evidence of convergence.",
    "mode": "concept",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-054",
    "week": 3,
    "topic": "while",
    "bank": "foundation-new",
    "title": "A smaller grid step generally trades:",
    "code": "",
    "options": [
      "Less work for an exact answer always",
      "No change in candidate count",
      "Guaranteed physical validity",
      "More candidate evaluations for finer resolution"
    ],
    "answer": 3,
    "explanation": "Covering a fixed interval at smaller spacing requires more candidate points but can resolve smaller differences.",
    "mode": "concept",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w3-055",
    "week": 3,
    "topic": "while",
    "bank": "foundation-new",
    "title": "Which result should an approximate solver report when its cap is reached without meeting tolerance?",
    "code": "",
    "options": [
      "An explicit nonconvergence status under its contract",
      "An unqualified exact-solution claim",
      "A fabricated zero",
      "A guarantee that the model is wrong"
    ],
    "answer": 0,
    "explanation": "The returned value and status must distinguish a stopped attempt from a converged result.",
    "mode": "concept",
    "source": "Week 3 · Original foundation practice"
  },
  {
    "id": "foundation-w4-001",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "A simple returned product — what is printed?",
    "code": "def triple(x):\n    return x*3\nprint(triple(7))",
    "options": [
      "10",
      "21",
      "7",
      "None"
    ],
    "answer": 1,
    "explanation": "The parameter receives seven and the return expression multiplies it by three.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-002",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "A default scale factor — what is printed?",
    "code": "def scale(x, factor=2):\n    return x*factor\nprint(scale(5), scale(5, 3))",
    "options": [
      "10 10",
      "5 15",
      "10 15",
      "15 10"
    ],
    "answer": 2,
    "explanation": "The first call uses the default; the second supplies a replacement factor.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-003",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "Keyword argument order — what is printed?",
    "code": "def difference(a, b):\n    return a-b\nprint(difference(b=2, a=9))",
    "options": [
      "-7",
      "11",
      "2",
      "7"
    ],
    "answer": 3,
    "explanation": "Keyword names, rather than their written order, bind a to nine and b to two.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-004",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "The implicit None result — what is printed?",
    "code": "def announce(x):\n    print(x)\nresult = announce(4)\nprint(result)",
    "options": [
      "4\nNone",
      "4",
      "None",
      "4\n4"
    ],
    "answer": 0,
    "explanation": "The call prints four but reaches its end without returning a value, so result is None.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-005",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "Return ends one call — what is printed?",
    "code": "def choose(x):\n    return x+1\n    print(\"later\")\nprint(choose(2))",
    "options": [
      "later\n3",
      "3",
      "3\nlater",
      "None"
    ],
    "answer": 1,
    "explanation": "Execution of the function call stops at return; the later print is unreachable.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-006",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "A local name masks a global — what is printed?",
    "code": "x = 8\ndef f():\n    x = 3\n    return x\nprint(f(), x)",
    "options": [
      "3 3",
      "8 8",
      "3 8",
      "8 3"
    ],
    "answer": 2,
    "explanation": "The function’s assignment creates a local x and leaves the outer binding unchanged.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-007",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "Reading an enclosing value — what is printed?",
    "code": "offset = 5\ndef add_offset(x):\n    return x+offset\nprint(add_offset(2))",
    "options": [
      "2",
      "5",
      "NameError",
      "7"
    ],
    "answer": 3,
    "explanation": "The function can read the module-level offset when it has no local binding of that name.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-008",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "Independent repeated calls — what is printed?",
    "code": "def f(x):\n    x += 2\n    return x\nprint(f(1), f(1))",
    "options": [
      "3 3",
      "3 5",
      "1 1",
      "None None"
    ],
    "answer": 0,
    "explanation": "Each call begins with its own parameter binding of one.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-009",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "An unchanged caller scalar — what is printed?",
    "code": "def increase(x):\n    x += 10\na = 2\nincrease(a)\nprint(a)",
    "options": [
      "12",
      "2",
      "None",
      "10"
    ],
    "answer": 1,
    "explanation": "Rebinding the local integer parameter does not rebind the caller’s a.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-010",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "An explicitly returned update — what is printed?",
    "code": "def increase(x):\n    return x+10\na = 2\na = increase(a)\nprint(a)",
    "options": [
      "2",
      "10",
      "12",
      "None"
    ],
    "answer": 2,
    "explanation": "The caller assigns the returned value to its own variable.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-011",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "A returned pair — what is printed?",
    "code": "def bounds(xs):\n    return min(xs), max(xs)\nprint(bounds([4, 1, 7]))",
    "options": [
      "[1, 7]",
      "1 7",
      "(4, 7)",
      "(1, 7)"
    ],
    "answer": 3,
    "explanation": "The comma-separated return creates a tuple containing the two extrema.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-012",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "Unpacking returned values — what is printed?",
    "code": "def parts(n):\n    return n//3, n%3\nq, r = parts(11)\nprint(q, r)",
    "options": [
      "3 2",
      "2 3",
      "3 3",
      "11 3"
    ],
    "answer": 0,
    "explanation": "The returned quotient and remainder bind to q and r in order.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-013",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "A Boolean query function — what is printed?",
    "code": "def within(x):\n    return 0 <= x <= 5\nprint(within(0), within(6))",
    "options": [
      "False False",
      "True False",
      "True True",
      "False True"
    ],
    "answer": 1,
    "explanation": "The inclusive lower endpoint passes, while six exceeds the upper bound.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-014",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "A conditional early return — what is printed?",
    "code": "def safe_ratio(a, b):\n    if b == 0:\n        return None\n    return a/b\nprint(safe_ratio(6, 0), safe_ratio(6, 3))",
    "options": [
      "0 2",
      "None 2",
      "None 2.0",
      "ZeroDivisionError"
    ],
    "answer": 2,
    "explanation": "The first call exits before division; the second computes a float quotient.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-015",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "A helper called twice — what is printed?",
    "code": "def square(x):\n    return x*x\nprint(square(2)+square(3))",
    "options": [
      "25",
      "10",
      "6",
      "13"
    ],
    "answer": 3,
    "explanation": "The two calls independently return four and nine.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-016",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "Composing two functions — what is printed?",
    "code": "def double(x):\n    return 2*x\ndef shift(x):\n    return x+3\nprint(double(shift(4)))",
    "options": [
      "14",
      "11",
      "10",
      "7"
    ],
    "answer": 0,
    "explanation": "The inner call returns seven, which becomes the outer call’s input.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-017",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "Order of composition matters — what is printed?",
    "code": "def double(x):\n    return 2*x\ndef shift(x):\n    return x+3\nprint(shift(double(4)))",
    "options": [
      "14",
      "11",
      "10",
      "7"
    ],
    "answer": 1,
    "explanation": "The inner doubling gives eight before the outer shift adds three.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-018",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "Tracing calls and returns — what is printed?",
    "code": "def f(x):\n    print(\"inside\", x)\n    return x+1\nprint(\"outside\", f(2))",
    "options": [
      "outside 3\ninside 2",
      "inside 3\noutside 2",
      "inside 2\noutside 3",
      "outside 2"
    ],
    "answer": 2,
    "explanation": "The argument expression f(2) completes before the outer print can display its fields.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-019",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "Returning a new list — what is printed?",
    "code": "def doubled(xs):\n    return [2*x for x in xs]\na = [1, 3]\nprint(doubled(a), a)",
    "options": [
      "[2, 6] [2, 6]",
      "None [2, 6]",
      "[1, 3] [1, 3]",
      "[2, 6] [1, 3]"
    ],
    "answer": 3,
    "explanation": "The comprehension constructs a new list and leaves the caller’s input unchanged.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-020",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "Mutating a list parameter — what is printed?",
    "code": "def add_last(xs):\n    xs.append(8)\na = [2]\nadd_last(a)\nprint(a)",
    "options": [
      "[2, 8]",
      "[2]",
      "[8]",
      "None"
    ],
    "answer": 0,
    "explanation": "The parameter references the same mutable list as the caller’s a.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-021",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "Rebinding a list parameter — what is printed?",
    "code": "def replace(xs):\n    xs = [8]\na = [2]\nreplace(a)\nprint(a)",
    "options": [
      "[8]",
      "[2]",
      "[2, 8]",
      "None"
    ],
    "answer": 1,
    "explanation": "Rebinding xs changes only the local name, not the caller’s binding.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-022",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "A sum computed inside a function — what is printed?",
    "code": "def total(xs):\n    result = 0\n    for x in xs:\n        result += x\n    return result\nprint(total([2, -1, 4]))",
    "options": [
      "7",
      "4",
      "5",
      "0"
    ],
    "answer": 2,
    "explanation": "The local accumulator adds each value before being returned.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-023",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "A fresh accumulator per call — what is printed?",
    "code": "def total(xs):\n    result = 0\n    for x in xs:\n        result += x\n    return result\nprint(total([1, 2]), total([4]))",
    "options": [
      "3 7",
      "0 0",
      "None None",
      "3 4"
    ],
    "answer": 3,
    "explanation": "Initialization occurs separately each time the function is called.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-024",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "A small unit conversion helper — what is printed?",
    "code": "def minutes(seconds):\n    return seconds/60\nprint(minutes(90))",
    "options": [
      "1.5",
      "5400",
      "1",
      "30"
    ],
    "answer": 0,
    "explanation": "The helper converts seconds to minutes by division by sixty.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-025",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "An identity case in a formula — what is printed?",
    "code": "def energy(mass, speed):\n    return 0.5*mass*speed**2\nprint(energy(4, 0))",
    "options": [
      "2.0",
      "0.0",
      "4",
      "None"
    ],
    "answer": 1,
    "explanation": "A zero speed makes the squared-speed factor zero.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-026",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "A keyword overriding one default — what is printed?",
    "code": "def report(value, unit=\"Pa\", digits=1):\n    return f\"{value:.{digits}f} {unit}\"\nprint(report(12.345, digits=2))",
    "options": [
      "12.3 Pa",
      "12.35 2",
      "12.35 Pa",
      "12.345 Pa"
    ],
    "answer": 2,
    "explanation": "The named digits argument changes only precision; unit retains its default.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-027",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "A function supplied as an argument — what is printed?",
    "code": "def apply(function, x):\n    return function(x)\ndef square(x):\n    return x*x\nprint(apply(square, 5))",
    "options": [
      "5",
      "10",
      "None",
      "25"
    ],
    "answer": 3,
    "explanation": "The function object square is passed without being called until apply uses it.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-028",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "A lambda conversion — what is printed?",
    "code": "convert = lambda x: 2*x+1\nprint(convert(6))",
    "options": [
      "13",
      "12",
      "7",
      "None"
    ],
    "answer": 0,
    "explanation": "The lambda returns its single expression for x equal to six.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-029",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "A closure remembers a factor — what is printed?",
    "code": "def make_scale(factor):\n    def scale(x):\n        return factor*x\n    return scale\nby_three = make_scale(3)\nprint(by_three(4))",
    "options": [
      "7",
      "12",
      "3",
      "NameError"
    ],
    "answer": 1,
    "explanation": "The returned nested function retains access to its enclosing factor binding.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-030",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "Two independent closures — what is printed?",
    "code": "def make_add(offset):\n    return lambda x: x+offset\na = make_add(2)\nb = make_add(5)\nprint(a(3), b(3))",
    "options": [
      "8 8",
      "5 5",
      "5 8",
      "2 5"
    ],
    "answer": 2,
    "explanation": "The two factory calls establish different enclosing offsets.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-031",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "A shadowed parameter name — what is printed?",
    "code": "value = 10\ndef f(value):\n    return value-1\nprint(f(4), value)",
    "options": [
      "3 4",
      "9 10",
      "3 3",
      "3 10"
    ],
    "answer": 3,
    "explanation": "The parameter masks the module binding only during the call.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-032",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "A return with two branches — what is printed?",
    "code": "def sign(x):\n    if x < 0:\n        return -1\n    return 1\nprint(sign(-2), sign(0))",
    "options": [
      "-1 1",
      "-1 0",
      "1 1",
      "-2 0"
    ],
    "answer": 0,
    "explanation": "Under this function’s stated code, zero follows the nonnegative return path.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-033",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "A missing return on one path — what is printed?",
    "code": "def positive(x):\n    if x > 0:\n        return True\nprint(positive(-2))",
    "options": [
      "False",
      "None",
      "True",
      "-2"
    ],
    "answer": 1,
    "explanation": "The negative-input path reaches the end without a return statement.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-034",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "A definition is not a call — what is printed?",
    "code": "def f():\n    print(\"run\")\nprint(\"ready\")",
    "options": [
      "run\nready",
      "ready\nrun",
      "ready",
      "No output"
    ],
    "answer": 2,
    "explanation": "Defining f stores the function; its body runs only if f is called.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-035",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "A function object under another name — what is printed?",
    "code": "def increment(x):\n    return x+1\nother = increment\nprint(other(9))",
    "options": [
      "9",
      "None",
      "NameError",
      "10"
    ],
    "answer": 3,
    "explanation": "Assignment gives another name to the callable function object.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-036",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "Argument expressions run first — what is printed?",
    "code": "def add(a, b):\n    return a+b\nprint(add(2*3, 4+1))",
    "options": [
      "11",
      "10",
      "9",
      "15"
    ],
    "answer": 0,
    "explanation": "The argument expressions evaluate to six and five before binding the parameters.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-037",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "A mean with an explicit empty policy — what is printed?",
    "code": "def mean(xs):\n    return sum(xs)/len(xs) if xs else None\nprint(mean([]), mean([2, 6]))",
    "options": [
      "0 4",
      "None 4.0",
      "None 8",
      "ZeroDivisionError"
    ],
    "answer": 1,
    "explanation": "The conditional expression chooses None for the empty list and computes the nonempty mean.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-038",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "A helper used by a loop — what is printed?",
    "code": "def square(x):\n    return x*x\nprint([square(x) for x in range(4)])",
    "options": [
      "[1, 4, 9, 16]",
      "[0, 1, 2, 3]",
      "[0, 1, 4, 9]",
      "[0, 2, 4, 6]"
    ],
    "answer": 2,
    "explanation": "The helper is called with zero, one, two and three.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-039",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "A tuple argument remains one argument — what is printed?",
    "code": "def count_pair(pair):\n    return len(pair)\nprint(count_pair((4, 7)))",
    "options": [
      "11",
      "4",
      "TypeError",
      "2"
    ],
    "answer": 3,
    "explanation": "The parenthesized pair is one tuple object with two elements.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-040",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "Unpacking arguments with a star — what is printed?",
    "code": "def multiply(a, b):\n    return a*b\nvalues = (3, 5)\nprint(multiply(*values))",
    "options": [
      "15",
      "8",
      "(3, 5)",
      "TypeError"
    ],
    "answer": 0,
    "explanation": "The star expands the two tuple elements into the two positional arguments.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-041",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "A named intermediate value — what is printed?",
    "code": "def rectangle_perimeter(w, h):\n    half = w+h\n    return 2*half\nprint(rectangle_perimeter(3, 6))",
    "options": [
      "9",
      "18",
      "36",
      "12"
    ],
    "answer": 1,
    "explanation": "The intermediate sum is nine and the returned perimeter doubles it.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-042",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "An inner helper with a documented operation — what is printed?",
    "code": "def area_after_scale(w, h, scale):\n    def area(a, b):\n        return a*b\n    return area(w*scale, h*scale)\nprint(area_after_scale(2, 3, 2))",
    "options": [
      "12",
      "6",
      "24",
      "48"
    ],
    "answer": 2,
    "explanation": "Scaling both dimensions by two increases area by four.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-043",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "An explicitly global update — what is printed?",
    "code": "count = 0\ndef step():\n    global count\n    count += 1\nstep()\nstep()\nprint(count)",
    "options": [
      "0",
      "1",
      "None",
      "2"
    ],
    "answer": 3,
    "explanation": "The global declaration directs the assignments to the module-level count.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-044",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "A local calculation leaves external state — what is printed?",
    "code": "count = 5\ndef next_count(count):\n    return count+1\nnew = next_count(count)\nprint(count, new)",
    "options": [
      "5 6",
      "6 6",
      "5 5",
      "6 5"
    ],
    "answer": 0,
    "explanation": "The function returns a derived value without rebinding the external count.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-045",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "A returned string query — what is printed?",
    "code": "def label(sensor, value):\n    return sensor+\":\"+str(value)\nprint(label(\"S2\", 8))",
    "options": [
      "S2 8",
      "S2:8",
      "S28",
      "sensor:8"
    ],
    "answer": 1,
    "explanation": "The function converts the integer to text before concatenating the label.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-046",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "Named numerator and denominator — what is printed?",
    "code": "def divide(numerator, denominator):\n    return numerator/denominator\nprint(divide(denominator=4, numerator=10))",
    "options": [
      "0.4",
      "2",
      "2.5",
      "6"
    ],
    "answer": 2,
    "explanation": "The names bind ten as numerator and four as denominator despite reversed written order.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-047",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "A function returning another call — what is printed?",
    "code": "def shift(x):\n    return x+2\ndef twice_shift(x):\n    return shift(shift(x))\nprint(twice_shift(1))",
    "options": [
      "3",
      "6",
      "4",
      "5"
    ],
    "answer": 3,
    "explanation": "The two nested calls add two successively: one becomes three, then five.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-048",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "An immutable string parameter — what is printed?",
    "code": "def lower_local(text):\n    text = text.lower()\n    return text\nraw = \"ABC\"\nprint(lower_local(raw), raw)",
    "options": [
      "abc ABC",
      "abc abc",
      "ABC ABC",
      "ABC abc"
    ],
    "answer": 0,
    "explanation": "The local transformed string is returned while the caller’s original binding remains unchanged.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-049",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "A default None creates fresh state — what is printed?",
    "code": "def record(value, history=None):\n    if history is None:\n        history = []\n    history.append(value)\n    return history\nprint(record(1), record(2))",
    "options": [
      "[1, 2] [1, 2]",
      "[1] [2]",
      "[1] [1, 2]",
      "None None"
    ],
    "answer": 1,
    "explanation": "Each omitted history argument takes the branch creating a new list.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-050",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "An explicitly supplied history is reused — what is printed?",
    "code": "def record(value, history):\n    history.append(value)\n    return len(history)\nvalues = [2]\nprint(record(4, values), values)",
    "options": [
      "1 [2]",
      "2 [4]",
      "2 [2, 4]",
      "None [2, 4]"
    ],
    "answer": 2,
    "explanation": "The append mutates the supplied list, then its new length is returned.",
    "mode": "python-output",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-051",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "A parameter is best described as:",
    "code": "",
    "options": [
      "The printed result of every call",
      "Only a global variable",
      "A mandatory numeric literal",
      "A name in a function definition that receives an argument"
    ],
    "answer": 3,
    "explanation": "Parameters describe the function’s inputs; arguments are the supplied call-time expressions.",
    "mode": "concept",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-052",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "Why write a function contract?",
    "code": "",
    "options": [
      "To state inputs, results, side effects and relevant assumptions",
      "To guarantee no tests are needed",
      "To force every result to be numeric",
      "To prevent function calls"
    ],
    "answer": 0,
    "explanation": "A contract supports callers and gives tests an independent basis for expected behavior.",
    "mode": "concept",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-053",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "What distinguishes print from return?",
    "code": "",
    "options": [
      "They are interchangeable in all functions",
      "print displays a value; return delivers a value to the caller",
      "print always returns the displayed argument",
      "return automatically displays a value in a script"
    ],
    "answer": 1,
    "explanation": "A displayed result is not automatically available as the function’s return value.",
    "mode": "concept",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-054",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "Which choice improves decomposition?",
    "code": "",
    "options": [
      "Duplicate the same formula in every caller",
      "Use unrelated global state for every intermediate result",
      "Separate operations with clear responsibilities and interfaces",
      "Put the whole project in one giant expression"
    ],
    "answer": 2,
    "explanation": "A small operation can be reasoned about and tested independently of the complete workflow.",
    "mode": "concept",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-055",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "When is a function body executed?",
    "code": "",
    "options": [
      "Immediately every time its name is displayed",
      "Only when the program ends",
      "Every time any variable changes",
      "When that function is called"
    ],
    "answer": 3,
    "explanation": "Definition creates the function object; a call executes its body with argument bindings.",
    "mode": "concept",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-056",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "What does a function return when it reaches the end without an explicit return?",
    "code": "",
    "options": [
      "None",
      "Its last local variable automatically",
      "Zero in every case",
      "True in every case"
    ],
    "answer": 0,
    "explanation": "Python uses None as the implicit return value.",
    "mode": "concept",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-057",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "Why is a mutable default list potentially surprising?",
    "code": "",
    "options": [
      "Python copies every default recursively",
      "The same default object can be reused by later calls",
      "Lists cannot be parameters",
      "The default is always discarded before a call"
    ],
    "answer": 1,
    "explanation": "Default expressions are evaluated at definition time, so retained mutable state can span calls.",
    "mode": "concept",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-058",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "Which is a function side effect?",
    "code": "",
    "options": [
      "Computing a new local integer only",
      "Returning a new numeric result only",
      "Changing a list supplied by the caller",
      "Reading a documented constant only"
    ],
    "answer": 2,
    "explanation": "Mutation of externally observable state is a side effect that callers need to know about.",
    "mode": "concept",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-059",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "Why pass a function as an argument?",
    "code": "",
    "options": [
      "To execute every function in the module",
      "To eliminate parameter binding",
      "To force recursion",
      "To reuse a procedure with different specified operations"
    ],
    "answer": 3,
    "explanation": "Higher-order functions can separate a general procedure from the operation it applies.",
    "mode": "concept",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w4-060",
    "week": 4,
    "topic": "functions",
    "bank": "foundation-new",
    "title": "Which test checks a function that promises no input mutation?",
    "code": "",
    "options": [
      "Save an independent input copy and compare it after the call",
      "Create another name for the same list and assume it is a snapshot",
      "Inspect only the function name",
      "Skip checking the input"
    ],
    "answer": 0,
    "explanation": "A genuine snapshot is necessary to detect whether the original contents changed.",
    "mode": "concept",
    "source": "Week 4 · Original foundation practice"
  },
  {
    "id": "foundation-w5-001",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "The first and last ordered readings — what is printed?",
    "code": "xs = [12, 15, 18, 21]\nprint(xs[0], xs[-1])",
    "options": [
      "15 21",
      "12 21",
      "12 18",
      "21 12"
    ],
    "answer": 1,
    "explanation": "Zero selects the first entry and minus one selects the last.",
    "mode": "python-output",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-002",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "A list slice as a new outer container — what is printed?",
    "code": "a = [2, 4, 6]\nb = a[:2]\nb[0] = 9\nprint(a, b)",
    "options": [
      "[9, 4, 6] [9, 4]",
      "[2, 4, 6] [2, 4]",
      "[2, 4, 6] [9, 4]",
      "[9, 4] [9, 4]"
    ],
    "answer": 2,
    "explanation": "The slice has its own outer list, so replacing one scalar entry does not replace an entry in a.",
    "mode": "python-output",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-003",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "Appending one complete object — what is printed?",
    "code": "a = [1, 2]\na.append([3, 4])\nprint(a)",
    "options": [
      "[1, 2, 3, 4]",
      "[[1, 2], [3, 4]]",
      "[3, 4]",
      "[1, 2, [3, 4]]"
    ],
    "answer": 3,
    "explanation": "append adds its argument as one element, even when that argument is a list.",
    "mode": "python-output",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-004",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "Extending by iterable entries — what is printed?",
    "code": "a = [1, 2]\na.extend([3, 4])\nprint(a)",
    "options": [
      "[1, 2, 3, 4]",
      "[1, 2, [3, 4]]",
      "[3, 4]",
      "None"
    ],
    "answer": 0,
    "explanation": "extend appends each entry of the iterable separately.",
    "mode": "python-output",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-005",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "Inserting at a position — what is printed?",
    "code": "a = [2, 6]\na.insert(1, 4)\nprint(a)",
    "options": [
      "[4, 2, 6]",
      "[2, 4, 6]",
      "[2, 6, 4]",
      "[2, 1, 6]"
    ],
    "answer": 1,
    "explanation": "The new entry goes before the original index-one value.",
    "mode": "python-output",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-006",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "Removing the first equal entry — what is printed?",
    "code": "a = [3, 5, 3, 7]\na.remove(3)\nprint(a)",
    "options": [
      "[5, 7]",
      "[3, 5, 7]",
      "[5, 3, 7]",
      "[3, 5, 3]"
    ],
    "answer": 2,
    "explanation": "remove deletes the first matching value, rather than every match.",
    "mode": "python-output",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-007",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "Popping a selected entry — what is printed?",
    "code": "a = [10, 20, 30]\nx = a.pop(1)\nprint(x, a)",
    "options": [
      "30 [10, 20]",
      "1 [10, 20, 30]",
      "20 [10, 20, 30]",
      "20 [10, 30]"
    ],
    "answer": 3,
    "explanation": "pop returns and removes the entry at the selected index.",
    "mode": "python-output",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-008",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "Deleting a slice — what is printed?",
    "code": "a = [0, 1, 2, 3, 4]\ndel a[1:4]\nprint(a)",
    "options": [
      "[0, 4]",
      "[0, 1, 4]",
      "[1, 2, 3]",
      "[0]"
    ],
    "answer": 0,
    "explanation": "The half-open slice removes positions one, two and three.",
    "mode": "python-output",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-009",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "A sorted copy preserves the source — what is printed?",
    "code": "a = [4, 1, 3]\nb = sorted(a)\nprint(a, b)",
    "options": [
      "[1, 3, 4] [1, 3, 4]",
      "[4, 1, 3] [1, 3, 4]",
      "[4, 1, 3] None",
      "None [1, 3, 4]"
    ],
    "answer": 1,
    "explanation": "sorted returns an ordered new list without mutating a.",
    "mode": "python-output",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-010",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "The in-place sort return — what is printed?",
    "code": "a = [4, 1, 3]\nx = a.sort()\nprint(a, x)",
    "options": [
      "[1, 3, 4] [1, 3, 4]",
      "[4, 1, 3] [1, 3, 4]",
      "[1, 3, 4] None",
      "None None"
    ],
    "answer": 2,
    "explanation": "sort rearranges its receiver and returns None.",
    "mode": "python-output",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-011",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "A reversed copy by slicing — what is printed?",
    "code": "a = [2, 4, 6]\nb = a[::-1]\nprint(a, b)",
    "options": [
      "[6, 4, 2] [6, 4, 2]",
      "[2, 4, 6] None",
      "None [6, 4, 2]",
      "[2, 4, 6] [6, 4, 2]"
    ],
    "answer": 3,
    "explanation": "The negative-step slice creates a new list in reverse order.",
    "mode": "python-output",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-012",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "An in-place reverse — what is printed?",
    "code": "a = [1, 3, 5]\nx = a.reverse()\nprint(a, x)",
    "options": [
      "[5, 3, 1] None",
      "[1, 3, 5] [5, 3, 1]",
      "[5, 3, 1] [5, 3, 1]",
      "None None"
    ],
    "answer": 0,
    "explanation": "reverse mutates the list and follows the usual mutating-method return policy of None.",
    "mode": "python-output",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-013",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "Counting duplicate readings — what is printed?",
    "code": "a = [2, 2, 4, 2]\nprint(a.count(2), a.index(4))",
    "options": [
      "2 3",
      "3 2",
      "3 3",
      "2 2"
    ],
    "answer": 1,
    "explanation": "There are three twos; four first occurs at zero-based index two.",
    "mode": "python-output",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-014",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "A filtered list comprehension — what is printed?",
    "code": "a = [1, 4, 7, 10]\nprint([x for x in a if x > 5])",
    "options": [
      "[1, 4]",
      "[4, 7, 10]",
      "[7, 10]",
      "[True, True]"
    ],
    "answer": 2,
    "explanation": "Only entries satisfying the comparison are included in the new list.",
    "mode": "python-output",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-015",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "Transforming each retained value — what is printed?",
    "code": "a = [-2, 0, 3]\nprint([x*x for x in a if x >= 0])",
    "options": [
      "[4, 0, 9]",
      "[0, 3]",
      "[9]",
      "[0, 9]"
    ],
    "answer": 3,
    "explanation": "Filtering first retains zero and three; squaring them produces zero and nine.",
    "mode": "python-output",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-016",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "List concatenation does not mutate operands — what is printed?",
    "code": "a = [1]\nb = a + [2, 3]\nprint(a, b)",
    "options": [
      "[1] [1, 2, 3]",
      "[1, 2, 3] [1, 2, 3]",
      "[1] [2, 3]",
      "None [1, 2, 3]"
    ],
    "answer": 0,
    "explanation": "The + operation creates a combined new list.",
    "mode": "python-output",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-017",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "A list alias observes mutation — what is printed?",
    "code": "a = [4, 5]\nb = a\nb[1] = 9\nprint(a)",
    "options": [
      "[4, 5]",
      "[4, 9]",
      "[9, 5]",
      "[9]"
    ],
    "answer": 1,
    "explanation": "Both names reference the same list, so the assignment is visible through a.",
    "mode": "python-output",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-018",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "Rebinding an alias to another list — what is printed?",
    "code": "a = [4, 5]\nb = a\nb = [9]\nprint(a, b)",
    "options": [
      "[9] [9]",
      "[4, 9] [9]",
      "[4, 5] [9]",
      "[4, 5] [4, 5]"
    ],
    "answer": 2,
    "explanation": "Rebinding b does not mutate the list to which a remains bound.",
    "mode": "python-output",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-019",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "A shallow copy shares inner lists — what is printed?",
    "code": "a = [[1], [2]]\nb = a.copy()\nb[0].append(8)\nprint(a)",
    "options": [
      "[[1], [2]]",
      "[[1], [2, 8]]",
      "[[8], [2]]",
      "[[1, 8], [2]]"
    ],
    "answer": 3,
    "explanation": "Only the outer container is copied, so its nested list references remain shared.",
    "mode": "python-output",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-020",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "Fresh rows avoid repetition aliasing — what is printed?",
    "code": "grid = [[0]*2 for _ in range(2)]\ngrid[0][1] = 7\nprint(grid)",
    "options": [
      "[[0, 7], [0, 0]]",
      "[[0, 7], [0, 7]]",
      "[[7, 0], [0, 0]]",
      "[[0, 0], [0, 7]]"
    ],
    "answer": 0,
    "explanation": "Each comprehension pass constructs an independent row list.",
    "mode": "python-output",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-021",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "Repeated rows share storage — what is printed?",
    "code": "grid = [[0, 0]]*2\ngrid[1][0] = 7\nprint(grid)",
    "options": [
      "[[0, 0], [7, 0]]",
      "[[7, 0], [7, 0]]",
      "[[7, 0], [0, 0]]",
      "[[0, 7], [0, 7]]"
    ],
    "answer": 1,
    "explanation": "Repetition copies references to the same inner row, not independent rows.",
    "mode": "python-output",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-022",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "Tuple field access — what is printed?",
    "code": "record = (\"S1\", 25, \"C\")\nprint(record[0], record[2])",
    "options": [
      "S1 25",
      "25 C",
      "S1 C",
      "C S1"
    ],
    "answer": 2,
    "explanation": "The immutable tuple preserves the ordered fields; indices select the first and third.",
    "mode": "python-output",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-023",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "A one-entry tuple — what is printed?",
    "code": "a = (5,)\nb = (5)\nprint(type(a).__name__, type(b).__name__)",
    "options": [
      "tuple tuple",
      "int int",
      "int tuple",
      "tuple int"
    ],
    "answer": 3,
    "explanation": "The trailing comma makes the one-entry tuple; parentheses alone merely group the integer.",
    "mode": "python-output",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-024",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "A mutable object inside a tuple — what is printed?",
    "code": "record = (\"A\", [2, 4])\nrecord[1].append(6)\nprint(record)",
    "options": [
      "('A', [2, 4, 6])",
      "('A', [2, 4])",
      "['A', [2, 4, 6]]",
      "TypeError"
    ],
    "answer": 0,
    "explanation": "The tuple’s references are fixed, but a contained list can still mutate.",
    "mode": "python-output",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-025",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "Tuple unpacking with a remainder — what is printed?",
    "code": "first, *rest = [2, 4, 6, 8]\nprint(first, rest)",
    "options": [
      "2 (4, 6, 8)",
      "2 [4, 6, 8]",
      "[2] [4, 6, 8]",
      "8 [2, 4, 6]"
    ],
    "answer": 1,
    "explanation": "The starred target collects the remaining entries into a list.",
    "mode": "python-output",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-026",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "Pairing unequal-length sequences — what is printed?",
    "code": "print(list(zip([1, 2, 3], [\"A\", \"B\"])))",
    "options": [
      "[(1, 'A'), (2, 'B'), (3, None)]",
      "[(1, 'A'), (2, 'B'), (3, 'B')]",
      "[(1, 'A'), (2, 'B')]",
      "ValueError"
    ],
    "answer": 2,
    "explanation": "The default zip stops when the shorter iterable is exhausted.",
    "mode": "python-output",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-027",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "Sorting record pairs — what is printed?",
    "code": "rows = [(\"A\", 8), (\"B\", 3)]\nprint(sorted(rows, key=lambda row: row[1]))",
    "options": [
      "[('A', 8), ('B', 3)]",
      "[('A', 3), ('B', 8)]",
      "None",
      "[('B', 3), ('A', 8)]"
    ],
    "answer": 3,
    "explanation": "The key extracts the numeric second field without detaching it from its name.",
    "mode": "python-output",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-028",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "A stable order for equal keys — what is printed?",
    "code": "rows = [(\"B\", 2), (\"A\", 2), (\"C\", 1)]\nprint([r[0] for r in sorted(rows, key=lambda r:r[1])])",
    "options": [
      "['C', 'B', 'A']",
      "['C', 'A', 'B']",
      "['A', 'B', 'C']",
      "['B', 'A', 'C']"
    ],
    "answer": 0,
    "explanation": "The key-one record moves first; the equal-key B and A retain their input order.",
    "mode": "python-output",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-029",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "Summarizing a nonempty list — what is printed?",
    "code": "a = [2, 8, 5]\nprint(min(a), max(a), sum(a))",
    "options": [
      "2 8 3",
      "2 8 15",
      "8 2 15",
      "5 8 15"
    ],
    "answer": 1,
    "explanation": "The selected functions compute the minimum, maximum and total respectively.",
    "mode": "python-output",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-030",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "An empty list has false truth value — what is printed?",
    "code": "a = []\nprint(bool(a), len(a))",
    "options": [
      "True 0",
      "False 1",
      "False 0",
      "True 1"
    ],
    "answer": 2,
    "explanation": "An empty list contains zero entries and is false in a Boolean context.",
    "mode": "python-output",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-031",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "Replacing a list slice — what is printed?",
    "code": "a = [1, 2, 3, 4]\na[1:3] = [8]\nprint(a)",
    "options": [
      "[1, 8, 3, 4]",
      "[1, 8, 8, 4]",
      "[1, 2, 8, 4]",
      "[1, 8, 4]"
    ],
    "answer": 3,
    "explanation": "Slice assignment replaces the two selected entries by one entry, changing the length.",
    "mode": "python-output",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-032",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "Clearing shared list state — what is printed?",
    "code": "a = [1, 2]\nb = a\na.clear()\nprint(a, b)",
    "options": [
      "[] []",
      "[] [1, 2]",
      "[1, 2] []",
      "None None"
    ],
    "answer": 0,
    "explanation": "clear mutates the shared list object, so both names see it empty.",
    "mode": "python-output",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-033",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "A nested row and column lookup — what is printed?",
    "code": "matrix = [[2, 4, 6], [8, 10, 12]]\nprint(matrix[1][2])",
    "options": [
      "10",
      "12",
      "6",
      "8"
    ],
    "answer": 1,
    "explanation": "The first index selects the second row; the second selects its third entry.",
    "mode": "python-output",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-034",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "Copying before a destructive operation — what is printed?",
    "code": "raw = [3, 1, 2]\nwork = raw.copy()\nwork.sort()\nwork.pop()\nprint(raw, work)",
    "options": [
      "[1, 2] [1, 2]",
      "[3, 1] [1, 2]",
      "[3, 1, 2] [1, 2]",
      "[3, 1, 2] [1, 2, 3]"
    ],
    "answer": 2,
    "explanation": "The sorting and removal affect only the copied flat list.",
    "mode": "python-output",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-035",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "Selecting entries with a stride — what is printed?",
    "code": "a = [0, 10, 20, 30, 40, 50]\nprint(a[1::2])",
    "options": [
      "[0, 20, 40]",
      "[10, 20, 30, 40, 50]",
      "[50, 30, 10]",
      "[10, 30, 50]"
    ],
    "answer": 3,
    "explanation": "The slice starts at index one and visits every second later entry.",
    "mode": "python-output",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-036",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "Lexicographic tuple comparison — what is printed?",
    "code": "print((2, 9) < (3, 1), (2, 9) < (2, 8))",
    "options": [
      "True False",
      "True True",
      "False False",
      "False True"
    ],
    "answer": 0,
    "explanation": "The first differing field determines the tuple comparison.",
    "mode": "python-output",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-037",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "Combining paired numeric measurements — what is printed?",
    "code": "a, b = [2, 4], [3, 5]\nprint([x+y for x,y in zip(a,b)])",
    "options": [
      "[2, 4, 3, 5]",
      "[5, 9]",
      "[6, 20]",
      "[5, 7]"
    ],
    "answer": 1,
    "explanation": "zip aligns corresponding positions before the addition.",
    "mode": "python-output",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-038",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "Constructing independent row copies — what is printed?",
    "code": "raw = [[1, 2], [3, 4]]\nwork = [row.copy() for row in raw]\nwork[0][0] = 9\nprint(raw)",
    "options": [
      "[[9, 2], [3, 4]]",
      "[[9, 2], [9, 4]]",
      "[[1, 2], [3, 4]]",
      "[[1, 2], [9, 4]]"
    ],
    "answer": 2,
    "explanation": "The comprehension copies each flat inner row, so replacing a copied scalar leaves raw unchanged.",
    "mode": "python-output",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-039",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "Membership checks list elements — what is printed?",
    "code": "a = [\"AB\", \"CD\"]\nprint(\"A\" in a, \"AB\" in a)",
    "options": [
      "True True",
      "False False",
      "True False",
      "False True"
    ],
    "answer": 3,
    "explanation": "List membership checks whole elements, not substrings inside every element.",
    "mode": "python-output",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-040",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "A moving-pair summary — what is printed?",
    "code": "a = [1, 3, 6]\nprint([(a[i]+a[i+1])/2 for i in range(len(a)-1)])",
    "options": [
      "[2.0, 4.5]",
      "[2.0]",
      "[1.0, 3.0, 6.0]",
      "[3.3333333333333335]"
    ],
    "answer": 0,
    "explanation": "Two adjacent pairs exist, and each mean uses exactly its two entries.",
    "mode": "python-output",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-041",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "Lengths before and after insertion — what is printed?",
    "code": "a = [2, 4]\nn = len(a)\na.append(6)\nprint(n, len(a))",
    "options": [
      "3 3",
      "2 3",
      "2 2",
      "3 2"
    ],
    "answer": 1,
    "explanation": "The earlier integer length remains two while the current list length becomes three.",
    "mode": "python-output",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-042",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "What distinguishes a list from a tuple in ordinary use?",
    "code": "",
    "options": [
      "A tuple can contain only numbers",
      "A list cannot contain another list",
      "A list permits element replacement; a tuple does not",
      "A tuple always has exactly two entries"
    ],
    "answer": 2,
    "explanation": "Mutability of the outer sequence is the central distinction here; both may contain diverse objects.",
    "mode": "concept",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-043",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "What does a shallow copy preserve for nested data?",
    "code": "",
    "options": [
      "Independent recursive copies of all inner objects",
      "Only numeric entries",
      "No connection to any original value",
      "References to the same inner objects"
    ],
    "answer": 3,
    "explanation": "Copying one container level does not duplicate nested mutable objects.",
    "mode": "concept",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-044",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "Why sort whole timestamp-value pairs rather than each column separately?",
    "code": "",
    "options": [
      "To preserve the correspondence between related fields",
      "To force every value to be distinct",
      "To avoid all sorting comparisons",
      "To remove invalid units automatically"
    ],
    "answer": 0,
    "explanation": "Independent column sorting can attach a reading to the wrong timestamp.",
    "mode": "concept",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-045",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "Which method adds one object to the end of a list?",
    "code": "",
    "options": [
      "extend in every case",
      "append",
      "remove",
      "index"
    ],
    "answer": 1,
    "explanation": "append adds its argument as a single element, while extend iterates over its argument.",
    "mode": "concept",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-046",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "Which function returns a sorted new list from an iterable?",
    "code": "",
    "options": [
      "list.sort() in every case",
      "append",
      "sorted",
      "reverse"
    ],
    "answer": 2,
    "explanation": "sorted is a function constructing a new list; list.sort mutates its receiver.",
    "mode": "concept",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-047",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "A tuple containing a mutable list is:",
    "code": "",
    "options": [
      "Deeply immutable in every contained value",
      "Always a syntax error",
      "Identical to a list in its element-assignment rules",
      "An immutable outer sequence referring to a mutable object"
    ],
    "answer": 3,
    "explanation": "Tuple immutability fixes its element references; it does not recursively freeze the objects to which those references point.",
    "mode": "concept",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-048",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "Which operation creates a second name for the same list?",
    "code": "",
    "options": [
      "backup = original",
      "backup = original.copy()",
      "backup = original[:]",
      "backup = list(original)"
    ],
    "answer": 0,
    "explanation": "Simple assignment shares the reference rather than constructing a new outer list.",
    "mode": "concept",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-049",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "Why can modifying a list while iterating over it skip entries?",
    "code": "",
    "options": [
      "Python always copies the whole list before a loop",
      "Removal shifts later positions while iteration continues",
      "Lists cannot be iterated",
      "Every remove operation restarts the loop"
    ],
    "answer": 1,
    "explanation": "A new filtered result or an intentional index policy is easier to reason about than accidental shifts.",
    "mode": "concept",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-050",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "What does len(xs) count?",
    "code": "",
    "options": [
      "The sum of numeric entries",
      "Every character in every nested string",
      "The number of elements in the outer sequence",
      "Only distinct values"
    ],
    "answer": 2,
    "explanation": "Nested values and repeated entries each occupy their own outer position.",
    "mode": "concept",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w5-051",
    "week": 5,
    "topic": "lists",
    "bank": "foundation-new",
    "title": "Why check equal column lengths before pairing data with zip?",
    "code": "",
    "options": [
      "zip always pads missing values",
      "zip cannot handle unequal lengths syntactically",
      "Equal lengths guarantee correct units",
      "Default zip can silently stop at the shorter input"
    ],
    "answer": 3,
    "explanation": "An explicit length check avoids accidentally omitting unmatched trailing records.",
    "mode": "concept",
    "source": "Week 5 · Original foundation practice"
  },
  {
    "id": "foundation-w6-001",
    "week": 6,
    "topic": "recursion",
    "bank": "foundation-new",
    "title": "A recurrence with two base cases — what is printed?",
    "code": "def f(n):\n    if n < 2:\n        return 1\n    return f(n-1)+f(n-2)\nprint(f(5))",
    "options": [
      "8",
      "5",
      "13",
      "6"
    ],
    "answer": 0,
    "explanation": "Under the explicit F(0)=F(1)=1 convention, the sequence reaches eight at index five.",
    "mode": "python-output",
    "source": "Week 6 · Original foundation practice"
  },
  {
    "id": "foundation-w6-002",
    "week": 6,
    "topic": "recursion",
    "bank": "foundation-new",
    "title": "Recursing on the remainder of a list — what is printed?",
    "code": "def total(xs):\n    if not xs:\n        return 0\n    return xs[0]+total(xs[1:])\nprint(total([5, -2, 4]))",
    "options": [
      "11",
      "7",
      "4",
      "0"
    ],
    "answer": 1,
    "explanation": "The recursive result adds each signed value and terminates at the empty-list base case.",
    "mode": "python-output",
    "source": "Week 6 · Original foundation practice"
  },
  {
    "id": "foundation-w6-003",
    "week": 6,
    "topic": "dicts",
    "bank": "foundation-new",
    "title": "Updating a frequency mapping — what is printed?",
    "code": "counts = {}\nfor label in [\"P\", \"Q\", \"P\", \"P\"]:\n    counts[label] = counts.get(label, 0)+1\nprint(counts[\"P\"], len(counts))",
    "options": [
      "3 4",
      "2 3",
      "3 2",
      "1 2"
    ],
    "answer": 2,
    "explanation": "P occurs three times, while the mapping has two distinct keys.",
    "mode": "python-output",
    "source": "Week 6 · Original foundation practice"
  },
  {
    "id": "foundation-w6-004",
    "week": 6,
    "topic": "dicts",
    "bank": "foundation-new",
    "title": "Querying nested material data — what is printed?",
    "code": "materials = {\"steel\":{\"density\":7800}, \"aluminium\":{\"density\":2700}}\nprint(materials[\"aluminium\"][\"density\"])",
    "options": [
      "7800",
      "density",
      "KeyError",
      "2700"
    ],
    "answer": 3,
    "explanation": "The first lookup selects the material record; the second selects its density.",
    "mode": "python-output",
    "source": "Week 6 · Original foundation practice"
  },
  {
    "id": "foundation-w6-005",
    "week": 6,
    "topic": "recursion",
    "bank": "foundation-new",
    "title": "A recursive function needs a decreasing problem measure because:",
    "code": "",
    "options": [
      "Its non-base calls must progress toward a terminating case",
      "Recursion automatically makes every problem smaller",
      "The base case can be omitted when values are numeric",
      "Every recursive call must repeat the same argument"
    ],
    "answer": 0,
    "explanation": "Termination requires that the actual recursive arguments eventually reach a supported base case.",
    "mode": "concept",
    "source": "Week 6 · Original foundation practice"
  },
  {
    "id": "foundation-w6-006",
    "week": 6,
    "topic": "dicts",
    "bank": "foundation-new",
    "title": "What does a dictionary key identify?",
    "code": "",
    "options": [
      "An obligatory consecutive numeric position",
      "A value through a mapping association",
      "Only a string character offset",
      "The rank after sorting all values"
    ],
    "answer": 1,
    "explanation": "Mappings associate keys with values; they are not defined by list-style positional indexing.",
    "mode": "concept",
    "source": "Week 6 · Original foundation practice"
  }
];
MCQS.push(...FOUNDATION_ADDITIONS);
const FIRST_HALF_MCQS = MCQS.filter(q=>q.bank!=="second-half");
function firstWeek(q){return q.week || ({types:1,arithmetic:1,engineering:1,decisions:2,for:2,while:2,strings:3,functions:4,lists:5,dicts:6,recursion:6})[q.topic];}
