// Original line-completion additions; earlier exercise objects and IDs are retained.
const CODE_LAB_META = {
  "c1": {
    "week": 1,
    "level": "Foundation",
    "referenceOutput": "23.5"
  },
  "c2": {
    "week": 1,
    "level": "Foundation",
    "referenceOutput": "8.0"
  },
  "c3": {
    "week": 2,
    "level": "Foundation",
    "referenceOutput": "Check cooling"
  },
  "c4": {
    "week": 2,
    "level": "Foundation",
    "referenceOutput": "15"
  },
  "c5": {
    "week": 2,
    "level": "Foundation",
    "referenceOutput": "4"
  },
  "c6": {
    "week": 5,
    "level": "Foundation",
    "referenceOutput": "21.0"
  },
  "c7": {
    "week": 6,
    "level": "Foundation",
    "referenceOutput": "116"
  },
  "c8": {
    "week": 1,
    "level": "Foundation",
    "referenceOutput": "12"
  },
  "c9": {
    "week": 5,
    "level": "Foundation",
    "referenceOutput": "22"
  },
  "c10": {
    "week": 2,
    "level": "Foundation",
    "referenceOutput": "Safe interval"
  },
  "c11": {
    "week": 2,
    "level": "Foundation",
    "referenceOutput": "0\n1\n2\n3\n4"
  },
  "c12": {
    "week": 3,
    "level": "Foundation",
    "referenceOutput": "0.0078125"
  },
  "w6-code-01": {
    "week": 6,
    "level": "Apply",
    "referenceOutput": "3\n2\n1\nLaunch"
  },
  "w6-code-02": {
    "week": 6,
    "level": "Apply",
    "referenceOutput": "120"
  },
  "w6-code-03": {
    "week": 6,
    "level": "Apply",
    "referenceOutput": "1.5"
  },
  "w6-code-04": {
    "week": 6,
    "level": "Apply",
    "referenceOutput": "8"
  },
  "w6-code-05": {
    "week": 6,
    "level": "Apply",
    "referenceOutput": "True"
  },
  "w6-code-06": {
    "week": 6,
    "level": "Apply",
    "referenceOutput": "9.5"
  },
  "w6-code-07": {
    "week": 6,
    "level": "Apply",
    "referenceOutput": "['steel', 'aluminum']"
  },
  "w6-code-08": {
    "week": 6,
    "level": "Apply",
    "referenceOutput": "{'Cu': 2, 'Al': 1}"
  },
  "w6-code-09": {
    "week": 6,
    "level": "Apply",
    "referenceOutput": "250.0"
  },
  "w6-code-10": {
    "week": 6,
    "level": "Apply",
    "referenceOutput": "1"
  }
};
const CODE_LAB_ADDITIONS = [
  {
    "id": "code-add-001",
    "topic": "types",
    "week": 1,
    "level": "Foundation",
    "name": "Parse an integer count",
    "task": "Convert raw to an integer and store it in count using int().",
    "before": "raw = \"18\"",
    "after": "print(count + 2)",
    "answers": [
      "count = int(raw)"
    ],
    "indent": 0,
    "hint": "Use the integer conversion function.",
    "explanation": "The text becomes the integer 18, allowing numeric addition rather than text concatenation.",
    "referenceOutput": "20",
    "tests": "assert count == 18 and type(count) is int",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-002",
    "topic": "types",
    "week": 1,
    "level": "Foundation",
    "name": "Preserve a fractional reading",
    "task": "Convert raw to a float named flow, preserving the decimal part.",
    "before": "raw = \"3.75\"",
    "after": "print(flow * 2)",
    "answers": [
      "flow = float(raw)"
    ],
    "indent": 0,
    "hint": "Use float rather than truncating to an integer.",
    "explanation": "The conversion retains 3.75. Doubling it produces the floating-point result 7.5.",
    "referenceOutput": "7.5",
    "tests": "assert flow == 3.75 and type(flow) is float",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-003",
    "topic": "types",
    "week": 1,
    "level": "Foundation",
    "name": "Keep a snapshot before rebinding",
    "task": "Bind previous to the current integer speed before speed is updated.",
    "before": "speed = 12",
    "after": "speed = 20\nprint(previous, speed)",
    "answers": [
      "previous = speed"
    ],
    "indent": 0,
    "hint": "Assignment binds the current value to another name.",
    "explanation": "The two names initially refer to the same immutable integer. Later rebinding speed leaves previous at 12.",
    "referenceOutput": "12 20",
    "tests": "assert previous == 12 and speed == 20",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-004",
    "topic": "types",
    "week": 1,
    "level": "Foundation",
    "name": "Create a Boolean state flag",
    "task": "Set active using a strict comparison: pressure must exceed 100.",
    "before": "pressure = 105",
    "after": "print(active)",
    "answers": [
      "active = pressure > 100"
    ],
    "indent": 0,
    "hint": "A comparison expression produces a Boolean.",
    "explanation": "The comparison is true for 105. Storing the result gives a Boolean flag rather than a printed message.",
    "referenceOutput": "True",
    "tests": "assert active is True",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-005",
    "topic": "types",
    "week": 1,
    "level": "Foundation",
    "name": "Report a numeric type name",
    "task": "Assign the readable type name of value to kind using type() and __name__.",
    "before": "value = 4.5",
    "after": "print(kind)",
    "answers": [
      "kind = type(value).__name__"
    ],
    "indent": 0,
    "hint": "Read __name__ from the result of type(value).",
    "explanation": "type(value) identifies the float class; its __name__ attribute is the text float.",
    "referenceOutput": "float",
    "tests": "assert kind == \"float\"",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-006",
    "topic": "arithmetic",
    "week": 1,
    "level": "Foundation",
    "name": "Find rectangular area",
    "task": "Set area_m2 to width_m multiplied by height_m.",
    "before": "width_m = 0.3\nheight_m = 0.2",
    "after": "print(f\"{area_m2:.3f}\")",
    "answers": [
      "area_m2 = width_m * height_m",
      "area_m2 = height_m * width_m"
    ],
    "indent": 0,
    "hint": "Area is the product of the two lengths.",
    "explanation": "Multiplying metre lengths produces square metres. The expected area is 0.06 m².",
    "referenceOutput": "0.060",
    "tests": "assert abs(area_m2 - 0.06) < 1e-12",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-007",
    "topic": "arithmetic",
    "week": 1,
    "level": "Foundation",
    "name": "Use a diameter in circular area",
    "task": "Set area using math.pi and the square of half the diameter.",
    "before": "import math\ndiameter = 0.4",
    "after": "print(f\"{area:.4f}\")",
    "answers": [
      "area = math.pi * (diameter / 2)**2"
    ],
    "indent": 0,
    "hint": "Radius is half of diameter; square the radius.",
    "explanation": "The area uses radius 0.2, giving pi times 0.04. Using the diameter directly would quadruple the result.",
    "referenceOutput": "0.1257",
    "tests": "assert math.isclose(area, 0.12566370614359174, abs_tol=1e-12)",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-008",
    "topic": "arithmetic",
    "week": 1,
    "level": "Foundation",
    "name": "Convert cubic millimetres",
    "task": "Convert volume_mm3 to cubic metres in volume_m3 using 1000**3.",
    "before": "volume_mm3 = 5000",
    "after": "print(f\"{volume_m3:.9f}\")",
    "answers": [
      "volume_m3 = volume_mm3 / 1000**3"
    ],
    "indent": 0,
    "hint": "Cube the linear millimetre-to-metre conversion factor.",
    "explanation": "A cubic millimetre is one billionth of a cubic metre. The conversion must account for all three dimensions.",
    "referenceOutput": "0.000005000",
    "tests": "assert abs(volume_m3 - 5e-6) < 1e-15",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-009",
    "topic": "arithmetic",
    "week": 1,
    "level": "Foundation",
    "name": "Compute kinetic energy",
    "task": "Set energy_j to 0.5 times mass_kg times speed_m_s squared.",
    "before": "mass_kg = 4\nspeed_m_s = 3",
    "after": "print(energy_j)",
    "answers": [
      "energy_j = 0.5 * mass_kg * speed_m_s**2"
    ],
    "indent": 0,
    "hint": "Exponentiation is ** in Python.",
    "explanation": "The squared speed is nine, giving 0.5 times four times nine = 18 joules.",
    "referenceOutput": "18.0",
    "tests": "assert energy_j == 18",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-010",
    "topic": "arithmetic",
    "week": 1,
    "level": "Foundation",
    "name": "Separate full groups and leftovers",
    "task": "Use divmod(count, capacity) to assign groups and leftover together.",
    "before": "count = 29\ncapacity = 6",
    "after": "print(groups, leftover)",
    "answers": [
      "groups, leftover = divmod(count, capacity)"
    ],
    "indent": 0,
    "hint": "divmod returns the integer quotient and remainder as a pair.",
    "explanation": "Four full groups hold 24 items, leaving five. The check reconstructs the original count.",
    "referenceOutput": "4 5",
    "tests": "assert (groups,leftover) == (4,5)\nassert groups*capacity+leftover == count",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-011",
    "topic": "arithmetic",
    "week": 1,
    "level": "Foundation",
    "name": "Calculate a percentage change",
    "task": "Set percent to 100 times the change divided by the initial value.",
    "before": "initial = 80\nfinal = 100",
    "after": "print(percent)",
    "answers": [
      "percent = 100 * (final - initial) / initial"
    ],
    "indent": 0,
    "hint": "Parenthesize final minus initial before dividing.",
    "explanation": "The change of 20 is one quarter of the initial 80, so the reported change is 25 percent.",
    "referenceOutput": "25.0",
    "tests": "assert percent == 25",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-012",
    "topic": "strings",
    "week": 3,
    "level": "Foundation",
    "name": "Normalize an instrument label",
    "task": "Use strip() followed by lower() to assign a normalized label to key.",
    "before": "raw = \"  Pump-B  \"",
    "after": "print(key)",
    "answers": [
      "key = raw.strip().lower()"
    ],
    "indent": 0,
    "hint": "Chain the two string methods in the stated order.",
    "explanation": "The result removes edge whitespace and normalizes case without changing the raw string.",
    "referenceOutput": "pump-b",
    "tests": "assert key == \"pump-b\"\nassert raw == \"  Pump-B  \"",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-013",
    "topic": "strings",
    "week": 3,
    "level": "Foundation",
    "name": "Extract a sensor prefix",
    "task": "Use a slice to keep the first three characters in prefix.",
    "before": "label = \"SEN-204\"",
    "after": "print(prefix)",
    "answers": [
      "prefix = label[:3]"
    ],
    "indent": 0,
    "hint": "The slice stop is excluded.",
    "explanation": "The positions zero through two spell SEN; slicing returns a new string.",
    "referenceOutput": "SEN",
    "tests": "assert prefix == \"SEN\"",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-014",
    "topic": "strings",
    "week": 3,
    "level": "Foundation",
    "name": "Read an identifier suffix",
    "task": "Use negative slicing to keep the last three characters in suffix.",
    "before": "label = \"SEN-204\"",
    "after": "print(suffix)",
    "answers": [
      "suffix = label[-3:]"
    ],
    "indent": 0,
    "hint": "Start three positions back from the end.",
    "explanation": "The suffix slice is independent of the prefix length and retains the final identifier characters.",
    "referenceOutput": "204",
    "tests": "assert suffix == \"204\"",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-015",
    "topic": "strings",
    "week": 3,
    "level": "Foundation",
    "name": "Split a delimited record",
    "task": "Split raw on semicolons into fields.",
    "before": "raw = \"A;21.5;good\"",
    "after": "print(fields)",
    "answers": [
      "fields = raw.split(\";\")"
    ],
    "indent": 0,
    "hint": "Use split with the explicit delimiter.",
    "explanation": "The three returned fields remain strings; numerical conversion is a separate step. ",
    "referenceOutput": "['A', '21.5', 'good']",
    "tests": "assert fields == [\"A\",\"21.5\",\"good\"]",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-016",
    "topic": "strings",
    "week": 3,
    "level": "Foundation",
    "name": "Join report headings",
    "task": "Join names using a comma and space, assigning the result to header.",
    "before": "names = [\"time\", \"pressure\", \"flow\"]",
    "after": "print(header)",
    "answers": [
      "header = \", \".join(names)"
    ],
    "indent": 0,
    "hint": "Call join on the separator string.",
    "explanation": "join inserts the separator between the labels without adding extra separators at either end.",
    "referenceOutput": "time, pressure, flow",
    "tests": "assert header == \"time, pressure, flow\"",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-017",
    "topic": "strings",
    "week": 3,
    "level": "Foundation",
    "name": "Count a pattern in a label",
    "task": "Assign the number of nonoverlapping AA occurrences to count.",
    "before": "text = \"AABAA\"",
    "after": "print(count)",
    "answers": [
      "count = text.count(\"AA\")"
    ],
    "indent": 0,
    "hint": "Use the string count method.",
    "explanation": "The prefix and suffix each contribute one nonoverlapping AA occurrence.",
    "referenceOutput": "2",
    "tests": "assert count == 2",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-018",
    "topic": "decisions",
    "week": 2,
    "level": "Foundation",
    "name": "Require two operating constraints",
    "task": "Write the if header requiring temperature <= 80 and pressure <= 200, including the colon.",
    "before": "temperature = 75\npressure = 180",
    "after": "    print(\"Allowed\")\nelse:\n    print(\"Reject\")",
    "answers": [
      "if temperature <= 80 and pressure <= 200:"
    ],
    "indent": 0,
    "hint": "Both conditions must hold.",
    "explanation": "Conjunction makes acceptance depend on both limits, preventing one valid quantity from masking another violation.",
    "referenceOutput": "Allowed",
    "tests": "assert temperature <= 80 and pressure <= 200",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-019",
    "topic": "decisions",
    "week": 2,
    "level": "Foundation",
    "name": "Reject an out-of-range reading",
    "task": "Write the if header for a value below 0 or above 100. Include the colon.",
    "before": "value = 120",
    "after": "    print(\"Outside\")\nelse:\n    print(\"Inside\")",
    "answers": [
      "if value < 0 or value > 100:"
    ],
    "indent": 0,
    "hint": "A violation on either side is sufficient.",
    "explanation": "The strict outside comparisons complement the inclusive valid interval from zero to one hundred.",
    "referenceOutput": "Outside",
    "tests": "assert not 0 <= value <= 100",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-020",
    "topic": "decisions",
    "week": 2,
    "level": "Foundation",
    "name": "Choose a compact sign label",
    "task": "Set label with a conditional expression: negative if x < 0, otherwise nonnegative.",
    "before": "x = -4",
    "after": "print(label)",
    "answers": [
      "label = \"negative\" if x < 0 else \"nonnegative\""
    ],
    "indent": 0,
    "hint": "The true expression comes before if in a conditional expression.",
    "explanation": "The condition selects one of two strings and assigns it without printing inside either branch.",
    "referenceOutput": "negative",
    "tests": "assert label == \"negative\"",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-021",
    "topic": "decisions",
    "week": 2,
    "level": "Foundation",
    "name": "Handle an empty mean input",
    "task": "Complete the if header so mean calculation occurs only for a nonempty values list.",
    "before": "values = []",
    "after": "    print(sum(values)/len(values))\nelse:\n    print(\"No data\")",
    "answers": [
      "if values:"
    ],
    "indent": 0,
    "hint": "An empty list has false truth value.",
    "explanation": "Testing the collection before division avoids an undefined mean and gives the empty case an explicit message.",
    "referenceOutput": "No data",
    "tests": "assert values == []",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-022",
    "topic": "decisions",
    "week": 2,
    "level": "Foundation",
    "name": "Include a threshold in the upper band",
    "task": "Complete the elif header to classify score 60 and above as pass after the high branch.",
    "before": "score = 60\nif score >= 80:\n    print(\"high\")",
    "after": "    print(\"pass\")\nelse:\n    print(\"retry\")",
    "answers": [
      "elif score >= 60:"
    ],
    "indent": 0,
    "hint": "The equality boundary belongs in pass.",
    "explanation": "The first branch fails at 60, and the inclusive elif includes the exact pass threshold.",
    "referenceOutput": "pass",
    "tests": "assert score == 60",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-023",
    "topic": "decisions",
    "week": 2,
    "level": "Foundation",
    "name": "Check evenness with a remainder",
    "task": "Set even to the comparison that n divided by 2 has remainder zero.",
    "before": "n = 18",
    "after": "print(even)",
    "answers": [
      "even = n % 2 == 0"
    ],
    "indent": 0,
    "hint": "Use % to obtain the remainder and == to compare it.",
    "explanation": "Even integers are exact multiples of two, so their remainder on division by two is zero.",
    "referenceOutput": "True",
    "tests": "assert even is True",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-024",
    "topic": "for",
    "week": 2,
    "level": "Foundation",
    "name": "Traverse odd positions",
    "task": "Write a for header giving i the values 1, 3 and 5 using range().",
    "before": "positions = []",
    "after": "    positions.append(i)\nprint(positions)",
    "answers": [
      "for i in range(1, 6, 2):"
    ],
    "indent": 0,
    "hint": "Supply start, excluded stop and step.",
    "explanation": "The stride of two selects three odd positions without including the stop value six.",
    "referenceOutput": "[1, 3, 5]",
    "tests": "assert positions == [1,3,5]",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-025",
    "topic": "for",
    "week": 2,
    "level": "Foundation",
    "name": "Accumulate squared readings",
    "task": "Add x squared to total on the missing indented line.",
    "before": "values = [2, 3, 4]\ntotal = 0\nfor x in values:",
    "after": "print(total)",
    "answers": [
      "total += x**2"
    ],
    "indent": 4,
    "hint": "Square before adding to the retained accumulator.",
    "explanation": "The sum of squares is four plus nine plus sixteen, rather than the square of the sum.",
    "referenceOutput": "29",
    "tests": "assert total == 29",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-026",
    "topic": "for",
    "week": 2,
    "level": "Foundation",
    "name": "Count strict exceedances",
    "task": "Increment count by one inside the condition.",
    "before": "values = [9, 10, 11, 15]\ncount = 0\nfor x in values:\n    if x > 10:",
    "after": "print(count)",
    "answers": [
      "count += 1"
    ],
    "indent": 8,
    "hint": "This missing line is inside both the loop and the if block.",
    "explanation": "Only eleven and fifteen satisfy the strict comparison; ten is a useful boundary fixture.",
    "referenceOutput": "2",
    "tests": "assert count == 2",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-027",
    "topic": "for",
    "week": 2,
    "level": "Foundation",
    "name": "Stop at a sentinel",
    "task": "Insert break in the sentinel branch before the value is accumulated.",
    "before": "values = [4, 6, -1, 100]\ntotal = 0\nfor x in values:\n    if x == -1:",
    "after": "    total += x\nprint(total)",
    "answers": [
      "break"
    ],
    "indent": 8,
    "hint": "Exit the nearest loop at the marker.",
    "explanation": "The sentinel and later values do not enter the total, which therefore remains ten.",
    "referenceOutput": "10",
    "tests": "assert total == 10",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-028",
    "topic": "for",
    "week": 2,
    "level": "Foundation",
    "name": "Retain indexed measurement pairs",
    "task": "Append the tuple (i, value) to indexed inside the loop.",
    "before": "values = [8, 12]\nindexed = []\nfor i, value in enumerate(values):",
    "after": "print(indexed)",
    "answers": [
      "indexed.append((i, value))"
    ],
    "indent": 4,
    "hint": "append accepts the complete tuple as one object.",
    "explanation": "The records preserve each value beside its zero-based source position.",
    "referenceOutput": "[(0, 8), (1, 12)]",
    "tests": "assert indexed == [(0,8),(1,12)]",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-029",
    "topic": "for",
    "week": 2,
    "level": "Foundation",
    "name": "Iterate over matching columns",
    "task": "Complete the for header using zip(times, readings).",
    "before": "times = [0, 1]\nreadings = [20, 23]\npaired = []",
    "after": "    paired.append((time, reading))\nprint(paired)",
    "answers": [
      "for time, reading in zip(times, readings):"
    ],
    "indent": 0,
    "hint": "Unpack each pair produced by zip.",
    "explanation": "Pairing the equal-length inputs keeps each reading attached to its timestamp.",
    "referenceOutput": "[(0, 20), (1, 23)]",
    "tests": "assert paired == [(0,20),(1,23)]",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-030",
    "topic": "while",
    "week": 3,
    "level": "Apply",
    "name": "Consume a remaining budget",
    "task": "Subtract cost from remaining on each pass.",
    "before": "remaining = 10\ncost = 3\nsteps = 0\nwhile remaining >= cost:",
    "after": "    steps += 1\nprint(remaining, steps)",
    "answers": [
      "remaining -= cost"
    ],
    "indent": 4,
    "hint": "The loop condition ensures a full cost remains before an update.",
    "explanation": "Each subtraction consumes three units. Three updates leave one unit, which cannot fund another pass.",
    "referenceOutput": "1 3",
    "tests": "assert remaining == 1 and steps == 3",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-031",
    "topic": "while",
    "week": 3,
    "level": "Apply",
    "name": "Use a bounded convergence condition",
    "task": "Complete the while header requiring both error > tolerance and steps < max_steps.",
    "before": "error = 1.0\ntolerance = 0.1\nsteps = 0\nmax_steps = 8",
    "after": "    error /= 2\n    steps += 1\nprint(error, steps)",
    "answers": [
      "while error > tolerance and steps < max_steps:"
    ],
    "indent": 0,
    "hint": "Keep going only while accuracy is insufficient and the cap has not been reached.",
    "explanation": "Four halvings reach 0.0625, satisfying the tolerance before the step limit is used. The conditions serve distinct purposes.",
    "referenceOutput": "0.0625 4",
    "tests": "assert error <= tolerance and steps == 4",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-032",
    "topic": "while",
    "week": 3,
    "level": "Apply",
    "name": "Advance an index into a sequence",
    "task": "Increase index by one after each value enters total.",
    "before": "values = [3, 4, 5]\nindex = 0\ntotal = 0\nwhile index < len(values):\n    total += values[index]",
    "after": "print(total)",
    "answers": [
      "index += 1"
    ],
    "indent": 4,
    "hint": "The update must advance toward len(values).",
    "explanation": "Without advancing the index, the same value would be added indefinitely. The three distinct values sum to twelve.",
    "referenceOutput": "12",
    "tests": "assert total == 12 and index == 3",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-033",
    "topic": "while",
    "week": 3,
    "level": "Apply",
    "name": "Halve a search interval",
    "task": "Assign midpoint to high after the midpoint has been computed.",
    "before": "low, high = 0.0, 8.0\nwhile high-low > 1:\n    midpoint = (low+high)/2",
    "after": "print(low, high)",
    "answers": [
      "high = midpoint"
    ],
    "indent": 4,
    "hint": "This demonstration always retains the lower half.",
    "explanation": "Replacing the upper endpoint by the midpoint reduces the bracket widths from eight to four, two and one.",
    "referenceOutput": "0.0 1.0",
    "tests": "assert (low,high) == (0.0,1.0)",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-034",
    "topic": "while",
    "week": 3,
    "level": "Apply",
    "name": "Track a growing trial value",
    "task": "Multiply trial by two on each loop pass.",
    "before": "trial = 1\nwhile trial < 20:",
    "after": "print(trial)",
    "answers": [
      "trial *= 2"
    ],
    "indent": 4,
    "hint": "Use augmented multiplication.",
    "explanation": "The repeated doubling sequence reaches 32, the first power of two here that is at least twenty.",
    "referenceOutput": "32",
    "tests": "assert trial == 32",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-035",
    "topic": "while",
    "week": 3,
    "level": "Apply",
    "name": "Report whether a capped loop converged",
    "task": "Set converged by testing the final error against tolerance, inclusively.",
    "before": "error = 1.0\ntolerance = 0.01\nfor _ in range(3):\n    error /= 2",
    "after": "print(converged)",
    "answers": [
      "converged = error <= tolerance"
    ],
    "indent": 0,
    "hint": "Stopping a loop does not itself imply reaching its accuracy target.",
    "explanation": "Three updates leave error at 0.125, larger than 0.01, so the success flag is false.",
    "referenceOutput": "False",
    "tests": "assert error == 0.125 and converged is False",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-036",
    "topic": "lists",
    "week": 5,
    "level": "Apply",
    "name": "Take an independent flat-list copy",
    "task": "Use copy() to create work from raw before changing work.",
    "before": "raw = [2, 4, 6]",
    "after": "work[0] = 99\nprint(raw)",
    "answers": [
      "work = raw.copy()"
    ],
    "indent": 0,
    "hint": "Assignment alone would create an alias.",
    "explanation": "The copied outer list allows replacing a scalar without overwriting the original measurement.",
    "referenceOutput": "[2, 4, 6]",
    "tests": "assert work == [99,4,6] and raw == [2,4,6]\nassert work is not raw",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-037",
    "topic": "lists",
    "week": 5,
    "level": "Apply",
    "name": "Keep a middle slice",
    "task": "Assign values at indices 1 through 3 to middle using a slice.",
    "before": "values = [10, 20, 30, 40, 50]",
    "after": "print(middle)",
    "answers": [
      "middle = values[1:4]"
    ],
    "indent": 0,
    "hint": "The stop index is excluded.",
    "explanation": "The slice includes twenty, thirty and forty while leaving the source list intact.",
    "referenceOutput": "[20, 30, 40]",
    "tests": "assert middle == [20,30,40]",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-038",
    "topic": "lists",
    "week": 5,
    "level": "Apply",
    "name": "Build calibrated readings",
    "task": "Use a list comprehension to add offset to each raw reading.",
    "before": "raw = [18, 20, 22]\noffset = 2",
    "after": "print(calibrated)",
    "answers": [
      "calibrated = [x + offset for x in raw]"
    ],
    "indent": 0,
    "hint": "The expression comes before the comprehension’s for clause.",
    "explanation": "The comprehension creates a new result sequence and preserves the original observations.",
    "referenceOutput": "[20, 22, 24]",
    "tests": "assert calibrated == [20,22,24] and raw == [18,20,22]",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-039",
    "topic": "lists",
    "week": 5,
    "level": "Apply",
    "name": "Filter missing readings",
    "task": "Use a list comprehension retaining values that are not None.",
    "before": "readings = [2, None, 0, 5]",
    "after": "print(valid)",
    "answers": [
      "valid = [x for x in readings if x is not None]"
    ],
    "indent": 0,
    "hint": "Zero is a valid value here, so a truthiness filter would be wrong.",
    "explanation": "The explicit None check retains a real zero measurement while removing only the missing marker.",
    "referenceOutput": "[2, 0, 5]",
    "tests": "assert valid == [2,0,5]",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-040",
    "topic": "lists",
    "week": 5,
    "level": "Apply",
    "name": "Create independent matrix rows",
    "task": "Use a comprehension to create two rows, each containing three zeros.",
    "before": "rows, cols = 2, 3",
    "after": "grid[0][1] = 7\nprint(grid)",
    "answers": [
      "grid = [[0] * cols for _ in range(rows)]"
    ],
    "indent": 0,
    "hint": "Create a new inner list on each pass.",
    "explanation": "Independent rows prevent a change in one row from appearing in another through aliasing.",
    "referenceOutput": "[[0, 7, 0], [0, 0, 0]]",
    "tests": "assert grid[1] == [0,0,0] and grid[0] is not grid[1]",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-041",
    "topic": "lists",
    "week": 5,
    "level": "Apply",
    "name": "Unpack a measurement tuple",
    "task": "Unpack record into sensor, value and unit in that order.",
    "before": "record = (\"A\", 24, \"C\")",
    "after": "print(sensor, value, unit)",
    "answers": [
      "sensor, value, unit = record"
    ],
    "indent": 0,
    "hint": "There must be one target for each field.",
    "explanation": "Unpacking makes each field’s meaning visible without losing the original tuple.",
    "referenceOutput": "A 24 C",
    "tests": "assert (sensor,value,unit) == record",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-042",
    "topic": "lists",
    "week": 5,
    "level": "Apply",
    "name": "Keep complete moving pairs",
    "task": "Use a comprehension to compute the mean of every adjacent pair.",
    "before": "values = [2, 4, 8, 10]",
    "after": "print(means)",
    "answers": [
      "means = [(values[i] + values[i+1]) / 2 for i in range(len(values)-1)]"
    ],
    "indent": 0,
    "hint": "There are n-1 adjacent pairs in a sequence of n values.",
    "explanation": "Each two-entry window has a valid start before the final index. All three complete pair means are retained.",
    "referenceOutput": "[3.0, 6.0, 9.0]",
    "tests": "assert means == [3.0,6.0,9.0]",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-043",
    "topic": "dicts",
    "week": 6,
    "level": "Apply",
    "name": "Use an explicit default reading",
    "task": "Use get() to store -1 in value when key pressure is missing.",
    "before": "record = {\"temperature\": 22}",
    "after": "print(value)",
    "answers": [
      "value = record.get(\"pressure\", -1)"
    ],
    "indent": 0,
    "hint": "Supply the missing-key default as the second get argument.",
    "explanation": "The task deliberately chooses -1 as a missing marker. get reads it without changing the dictionary or raising KeyError.",
    "referenceOutput": "-1",
    "tests": "assert value == -1 and \"pressure\" not in record",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-044",
    "topic": "dicts",
    "week": 6,
    "level": "Apply",
    "name": "Update a mapped measurement",
    "task": "Set the existing flow entry to 7 without changing the other entry.",
    "before": "record = {\"flow\": 3, \"head\": 8}",
    "after": "print(record)",
    "answers": [
      "record[\"flow\"] = 7"
    ],
    "indent": 0,
    "hint": "Assign through the existing key.",
    "explanation": "Updating an existing dictionary key replaces its value without adding another mapping entry.",
    "referenceOutput": "{'flow': 7, 'head': 8}",
    "tests": "assert record == {\"flow\":7,\"head\":8} and len(record) == 2",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-045",
    "topic": "dicts",
    "week": 6,
    "level": "Apply",
    "name": "Read both keys and values",
    "task": "Complete the for header using items() to unpack each key and value.",
    "before": "readings = {\"A\": 2, \"B\": 5}\nrows = []",
    "after": "    rows.append((key, value))\nprint(rows)",
    "answers": [
      "for key, value in readings.items():"
    ],
    "indent": 0,
    "hint": "items supplies pairs; keys alone do not.",
    "explanation": "The loop retains the insertion order of this dictionary and associates each name with its stored value.",
    "referenceOutput": "[('A', 2), ('B', 5)]",
    "tests": "assert rows == [(\"A\",2),(\"B\",5)]",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-046",
    "topic": "dicts",
    "week": 6,
    "level": "Apply",
    "name": "Give each sensor a separate history",
    "task": "Use a dictionary comprehension with a new empty list per key.",
    "before": "sensors = [\"A\", \"B\"]",
    "after": "histories[\"A\"].append(3)\nprint(histories)",
    "answers": [
      "histories = {key: [] for key in sensors}"
    ],
    "indent": 0,
    "hint": "Do not share one mutable default list between keys.",
    "explanation": "Evaluating [] separately for every key creates independent containers and prevents cross-sensor contamination.",
    "referenceOutput": "{'A': [3], 'B': []}",
    "tests": "assert histories[\"B\"] == [] and histories[\"A\"] is not histories[\"B\"]",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-047",
    "topic": "dicts",
    "week": 6,
    "level": "Apply",
    "name": "Group values by their label",
    "task": "Append value to the list returned by groups.setdefault(label, []).",
    "before": "records = [(\"A\", 2), (\"B\", 5), (\"A\", 4)]\ngroups = {}\nfor label, value in records:",
    "after": "print(groups)",
    "answers": [
      "groups.setdefault(label, []).append(value)"
    ],
    "indent": 4,
    "hint": "setdefault retains a new list only when the key is first encountered.",
    "explanation": "Each group keeps all of its values, allowing later aggregation without overwriting earlier samples.",
    "referenceOutput": "{'A': [2, 4], 'B': [5]}",
    "tests": "assert groups == {\"A\":[2,4],\"B\":[5]}",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-048",
    "topic": "dicts",
    "week": 6,
    "level": "Apply",
    "name": "Sum mapping values",
    "task": "Use sum() and values() to assign the total to total.",
    "before": "counts = {\"Cu\": 3, \"Al\": 2}",
    "after": "print(total)",
    "answers": [
      "total = sum(counts.values())"
    ],
    "indent": 0,
    "hint": "The values view contains counts rather than material names.",
    "explanation": "Summing the numeric counts gives five samples, while summing the keys would not implement the task.",
    "referenceOutput": "5",
    "tests": "assert total == 5",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-049",
    "topic": "dicts",
    "week": 6,
    "level": "Apply",
    "name": "Read a nested sensor field",
    "task": "Assign the temperature of sensor B to temperature.",
    "before": "sensors = {\"A\": {\"temperature\": 20}, \"B\": {\"temperature\": 25}}",
    "after": "print(temperature)",
    "answers": [
      "temperature = sensors[\"B\"][\"temperature\"]"
    ],
    "indent": 0,
    "hint": "First select the sensor record, then its field.",
    "explanation": "The two key lookups follow the data structure’s levels instead of treating the inner field as a top-level key.",
    "referenceOutput": "25",
    "tests": "assert temperature == 25",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-050",
    "topic": "functions",
    "week": 4,
    "level": "Apply",
    "name": "Return a geometric calculation",
    "task": "Return the rectangle perimeter using width and height.",
    "before": "def perimeter(width, height):",
    "after": "print(perimeter(3, 5))",
    "answers": [
      "return 2 * (width + height)"
    ],
    "indent": 4,
    "hint": "Add the two lengths before doubling.",
    "explanation": "Returning the calculation makes the result available to the caller and supports independent examples.",
    "referenceOutput": "16",
    "tests": "assert perimeter(0,5) == 10\nassert perimeter(2,2) == 8",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-051",
    "topic": "functions",
    "week": 4,
    "level": "Apply",
    "name": "Return an empty-input policy",
    "task": "Return None when values is empty before the existing mean calculation.",
    "before": "def mean(values):\n    if not values:",
    "after": "    return sum(values)/len(values)\nprint(mean([]), mean([2, 6]))",
    "answers": [
      "return None"
    ],
    "indent": 8,
    "hint": "Exit the function from the empty branch.",
    "explanation": "The early return prevents division by zero and implements the explicitly stated missing-result policy.",
    "referenceOutput": "None 4.0",
    "tests": "assert mean([5]) == 5\nassert mean([]) is None",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-052",
    "topic": "functions",
    "week": 4,
    "level": "Apply",
    "name": "Define a default scale factor",
    "task": "Write the def header for scale(value, factor=2), including the colon.",
    "before": "",
    "after": "    return value*factor\nprint(scale(4), scale(4, 3))",
    "answers": [
      "def scale(value, factor=2):"
    ],
    "indent": 0,
    "hint": "A default argument uses = in the parameter list.",
    "explanation": "The omitted factor uses two, while an explicitly supplied factor overrides that default for one call.",
    "referenceOutput": "8 12",
    "tests": "assert scale(0) == 0\nassert scale(-2,3) == -6",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-053",
    "topic": "functions",
    "week": 4,
    "level": "Apply",
    "name": "Call with named arguments",
    "task": "Call ratio with numerator 10 and denominator 4 using those keyword names; assign result.",
    "before": "def ratio(numerator, denominator):\n    return numerator/denominator",
    "after": "print(result)",
    "answers": [
      "result = ratio(numerator=10, denominator=4)"
    ],
    "indent": 0,
    "hint": "Use the definition’s parameter names as keywords.",
    "explanation": "Named arguments make the intended numerator and denominator explicit even in a longer calling context.",
    "referenceOutput": "2.5",
    "tests": "assert result == 2.5",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-054",
    "topic": "functions",
    "week": 4,
    "level": "Apply",
    "name": "Decompose a formula with a helper",
    "task": "Return square(x)+square(y) inside sum_of_squares.",
    "before": "def square(x):\n    return x*x\ndef sum_of_squares(x, y):",
    "after": "print(sum_of_squares(3, 4))",
    "answers": [
      "return square(x) + square(y)"
    ],
    "indent": 4,
    "hint": "Call the helper separately for each component.",
    "explanation": "The helper owns the squaring operation, while the outer function combines its two results.",
    "referenceOutput": "25",
    "tests": "assert sum_of_squares(0,2) == 4\nassert sum_of_squares(-3,4) == 25",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-055",
    "topic": "functions",
    "week": 4,
    "level": "Apply",
    "name": "Pass an operation to a general helper",
    "task": "Inside apply, return function(value).",
    "before": "def apply(function, value):",
    "after": "def cube(x):\n    return x**3\nprint(apply(cube, 3))",
    "answers": [
      "return function(value)"
    ],
    "indent": 4,
    "hint": "The parameter is a callable supplied by the caller.",
    "explanation": "The general helper can use different operations without rewriting its control flow. This call applies cube to three.",
    "referenceOutput": "27",
    "tests": "assert apply(abs,-4) == 4",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-056",
    "topic": "functions",
    "week": 4,
    "level": "Apply",
    "name": "Return a fresh transformed sequence",
    "task": "Return a comprehension adding 1 to each entry, without mutating values.",
    "before": "def shifted(values):",
    "after": "raw = [2, 4]\nprint(shifted(raw), raw)",
    "answers": [
      "return [x + 1 for x in values]"
    ],
    "indent": 4,
    "hint": "Construct a new list as the return value.",
    "explanation": "The operation derives new data and leaves the input sequence available for later analysis.",
    "referenceOutput": "[3, 5] [2, 4]",
    "tests": "assert shifted([]) == []\nassert raw == [2,4]",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-057",
    "topic": "recursion",
    "week": 6,
    "level": "Challenge",
    "name": "Count list entries recursively",
    "task": "Return 1 plus the recursive length of the tail.",
    "before": "def length(values):\n    if not values:\n        return 0",
    "after": "print(length([3, 5, 7, 9]))",
    "answers": [
      "return 1 + length(values[1:])"
    ],
    "indent": 4,
    "hint": "Each nonempty list contributes one head entry.",
    "explanation": "The tail slice reduces the input size until the empty-list base case contributes zero.",
    "referenceOutput": "4",
    "tests": "assert length([]) == 0\nassert length([8]) == 1",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-058",
    "topic": "recursion",
    "week": 6,
    "level": "Challenge",
    "name": "Raise to a nonnegative integer power",
    "task": "For nonnegative n, return x times power(x, n-1).",
    "before": "def power(x, n):\n    if n == 0:\n        return 1",
    "after": "print(power(2, 5))",
    "answers": [
      "return x * power(x, n - 1)"
    ],
    "indent": 4,
    "hint": "Reduce the exponent by one, preserving the base.",
    "explanation": "The product unwinds from the exponent-zero identity one. The declared domain excludes negative exponents.",
    "referenceOutput": "32",
    "tests": "assert power(7,0) == 1\nassert power(-2,3) == -8",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-059",
    "topic": "recursion",
    "week": 6,
    "level": "Challenge",
    "name": "Sum the digits of a nonnegative integer",
    "task": "Return the final digit plus the recursive digit sum of n//10.",
    "before": "def digit_sum(n):\n    if n < 10:\n        return n",
    "after": "print(digit_sum(407))",
    "answers": [
      "return n % 10 + digit_sum(n // 10)"
    ],
    "indent": 4,
    "hint": "% 10 extracts a digit; // 10 removes it.",
    "explanation": "Integer division shortens a nonnegative decimal representation, and the remainder supplies its last digit.",
    "referenceOutput": "11",
    "tests": "assert digit_sum(0) == 0\nassert digit_sum(123) == 6",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-060",
    "topic": "recursion",
    "week": 6,
    "level": "Challenge",
    "name": "Reverse a string recursively",
    "task": "Return the reversed tail followed by the first character.",
    "before": "def reverse(text):\n    if len(text) <= 1:\n        return text",
    "after": "print(reverse(\"pump\"))",
    "answers": [
      "return reverse(text[1:]) + text[0]"
    ],
    "indent": 4,
    "hint": "The first character belongs at the end of the returned result.",
    "explanation": "The base case protects indexing on an empty input; the recursive call shortens the string before concatenation.",
    "referenceOutput": "pmup",
    "tests": "assert reverse(\"\") == \"\"\nassert reverse(\"A\") == \"A\"\nassert reverse(\"ab\") == \"ba\"",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-061",
    "topic": "recursion",
    "week": 6,
    "level": "Challenge",
    "name": "Apply Euclid’s recursive step",
    "task": "For nonnegative a and b, return gcd(b, a%b) after the zero-b base case.",
    "before": "def gcd(a, b):\n    if b == 0:\n        return a",
    "after": "print(gcd(48, 18))",
    "answers": [
      "return gcd(b, a % b)"
    ],
    "indent": 4,
    "hint": "The remainder replaces the second argument.",
    "explanation": "Euclid’s identity preserves the common divisors while a smaller remainder leads toward the base case.",
    "referenceOutput": "6",
    "tests": "assert gcd(9,0) == 9\nassert gcd(7,5) == 1",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-062",
    "topic": "engineering",
    "week": 1,
    "level": "Apply",
    "name": "Convert a pressure report to kilopascals",
    "task": "Assign pressure_kpa by dividing pressure_pa by 1000.",
    "before": "pressure_pa = 245000",
    "after": "print(pressure_kpa)",
    "answers": [
      "pressure_kpa = pressure_pa / 1000"
    ],
    "indent": 0,
    "hint": "A kilopascal contains one thousand pascals.",
    "explanation": "The conversion changes the numeric scale while retaining the same physical pressure.",
    "referenceOutput": "245.0",
    "tests": "assert pressure_kpa == 245",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-063",
    "topic": "engineering",
    "week": 1,
    "level": "Apply",
    "name": "Compute ideal heating energy",
    "task": "Assign energy_j as mass_kg times heat_capacity times rise_k.",
    "before": "mass_kg = 2\nheat_capacity = 4200\nrise_k = 5",
    "after": "print(energy_j)",
    "answers": [
      "energy_j = mass_kg * heat_capacity * rise_k"
    ],
    "indent": 0,
    "hint": "Use Q = m c delta T under the stated ideal constant-capacity model.",
    "explanation": "The units multiply to joules. The example assumes uniform temperature and no heat loss.",
    "referenceOutput": "42000",
    "tests": "assert energy_j == 42000",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-064",
    "topic": "engineering",
    "week": 2,
    "level": "Apply",
    "name": "Accumulate energy from power intervals",
    "task": "Inside the loop, add power*dt to energy_j.",
    "before": "powers_w = [20, 30, 10]\ndt = 2\nenergy_j = 0\nfor power in powers_w:",
    "after": "print(energy_j)",
    "answers": [
      "energy_j += power * dt"
    ],
    "indent": 4,
    "hint": "Each interval contributes watts times seconds.",
    "explanation": "The common two-second intervals contribute forty, sixty and twenty joules, giving a total of 120.",
    "referenceOutput": "120",
    "tests": "assert energy_j == 120",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-065",
    "topic": "engineering",
    "week": 3,
    "level": "Apply",
    "name": "Measure a square-root residual",
    "task": "Assign residual as the absolute difference between guess squared and target.",
    "before": "target = 10\nguess = 3.2",
    "after": "print(f\"{residual:.2f}\")",
    "answers": [
      "residual = abs(guess**2 - target)"
    ],
    "indent": 0,
    "hint": "Use magnitude so negative and positive deviations are treated equally.",
    "explanation": "The residual compares the equation’s left and right sides, rather than the unknown root directly. It is approximately 0.24 here.",
    "referenceOutput": "0.24",
    "tests": "assert abs(residual-0.24) < 1e-12",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-066",
    "topic": "engineering",
    "week": 5,
    "level": "Apply",
    "name": "Find the largest absolute deviation",
    "task": "Use max() with a generator of abs(x-reference) to assign worst.",
    "before": "reference = 20\nreadings = [17, 21, 25]",
    "after": "print(worst)",
    "answers": [
      "worst = max(abs(x - reference) for x in readings)"
    ],
    "indent": 0,
    "hint": "Convert each signed departure into a magnitude before taking the maximum.",
    "explanation": "The deviations have magnitudes three, one and five. Taking their maximum prevents sign cancellation.",
    "referenceOutput": "5",
    "tests": "assert worst == 5",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-067",
    "topic": "testing",
    "week": 7,
    "level": "Apply",
    "name": "Reject nonfinite parsed values",
    "task": "Write the if header raising the existing error for a value that is not finite.",
    "before": "import math\ndef parse(raw):\n    value = float(raw)",
    "after": "        raise ValueError(\"nonfinite\")\n    return value\ntry:\n    parse(\"nan\")\nexcept ValueError:\n    print(\"Rejected\")",
    "answers": [
      "if not math.isfinite(value):"
    ],
    "indent": 4,
    "hint": "Use not with math.isfinite(value).",
    "explanation": "NaN and infinity can parse successfully as floats. The explicit domain check rejects them before they enter downstream calculations.",
    "referenceOutput": "Rejected",
    "tests": "assert parse(\"2.5\") == 2.5\nfor raw in [\"nan\",\"inf\",\"-inf\"]:\n    try:\n        parse(raw)\n    except ValueError:\n        pass\n    else:\n        raise AssertionError(\"nonfinite accepted\")",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-068",
    "topic": "testing",
    "week": 7,
    "level": "Apply",
    "name": "Check a floating-point known result",
    "task": "Complete an assert using math.isclose(result, 0.3, abs_tol=1e-12).",
    "before": "import math\nresult = 0.1 + 0.2",
    "after": "print(\"Check passed\")",
    "answers": [
      "assert math.isclose(result, 0.3, abs_tol=1e-12)"
    ],
    "indent": 0,
    "hint": "Use an absolute tolerance instead of requiring exact bitwise equality.",
    "explanation": "The decimal values have small binary representation differences. The justified tolerance accepts this known result.",
    "referenceOutput": "Check passed",
    "tests": "assert abs(result-0.3) < 1e-12",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-069",
    "topic": "testing",
    "week": 7,
    "level": "Apply",
    "name": "Catch an expected conversion failure",
    "task": "Write except ValueError: for the conversion attempt.",
    "before": "try:\n    value = int(\"oops\")",
    "after": "    value = None\nprint(value)",
    "answers": [
      "except ValueError:"
    ],
    "indent": 0,
    "hint": "Catch the specific exception produced by invalid integer text.",
    "explanation": "The narrow handler establishes an explicit missing-result marker rather than hiding unrelated exception types.",
    "referenceOutput": "None",
    "tests": "assert value is None",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-070",
    "topic": "testing",
    "week": 7,
    "level": "Apply",
    "name": "Preserve state in an empty-input check",
    "task": "Raise ValueError(\"empty\") inside the existing empty-input branch.",
    "before": "def first(values):\n    if not values:",
    "after": "    return values[0]\ntry:\n    first([])\nexcept ValueError:\n    print(\"Empty rejected\")",
    "answers": [
      "raise ValueError(\"empty\")"
    ],
    "indent": 8,
    "hint": "The invalid-input branch should stop the calculation.",
    "explanation": "An explicit error follows the documented domain contract before the function indexes the empty sequence.",
    "referenceOutput": "Empty rejected",
    "tests": "assert first([7]) == 7\nassert first([0,1]) == 0",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-071",
    "topic": "objects",
    "week": 8,
    "level": "Apply",
    "name": "Initialize independent object history",
    "task": "Inside __init__, assign a new empty list to self.history.",
    "before": "class Log:\n    def __init__(self):",
    "after": "    def add(self, value):\n        self.history.append(value)\na, b = Log(), Log()\na.add(3)\nprint(a.history, b.history)",
    "answers": [
      "self.history = []"
    ],
    "indent": 8,
    "hint": "Construct the list on the receiving instance.",
    "explanation": "Running initialization for each object creates separate mutable histories instead of a shared class-level list.",
    "referenceOutput": "[3] []",
    "tests": "assert a.history == [3]\nassert b.history == []\nassert a.history is not b.history",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-072",
    "topic": "objects",
    "week": 8,
    "level": "Apply",
    "name": "Return a computed object query",
    "task": "Return self.value multiplied by self.gain from read().",
    "before": "class Sensor:\n    def __init__(self, value, gain):\n        self.value, self.gain = value, gain\n    def read(self):",
    "after": "s = Sensor(4, 3)\nprint(s.read())",
    "answers": [
      "return self.value * self.gain"
    ],
    "indent": 8,
    "hint": "Use instance attributes through self.",
    "explanation": "The method computes a result from the receiver’s stored state without changing that state.",
    "referenceOutput": "12",
    "tests": "assert Sensor(0,3).read() == 0\nassert Sensor(-2,5).read() == -10",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-073",
    "topic": "objects",
    "week": 9,
    "level": "Apply",
    "name": "Initialize the base part of a subclass",
    "task": "Inside Child.__init__, call super().__init__(value) before setting gain.",
    "before": "class Base:\n    def __init__(self, value):\n        self.value = value\nclass Child(Base):\n    def __init__(self, value, gain):",
    "after": "        self.gain = gain\nc = Child(7, 2)\nprint(c.value, c.gain)",
    "answers": [
      "super().__init__(value)"
    ],
    "indent": 8,
    "hint": "An overriding initializer must delegate explicitly when base initialization is needed.",
    "explanation": "The base call establishes value on the same receiver; the child then adds its gain field.",
    "referenceOutput": "7 2",
    "tests": "assert isinstance(c,Base) and c.value == 7 and c.gain == 2",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-074",
    "topic": "objects",
    "week": 9,
    "level": "Apply",
    "name": "Protect an internal flat list",
    "task": "Return self._values.copy() from values().",
    "before": "class History:\n    def __init__(self):\n        self._values = [2, 4]\n    def values(self):",
    "after": "h = History()\nexternal = h.values()\nexternal.append(9)\nprint(h.values())",
    "answers": [
      "return self._values.copy()"
    ],
    "indent": 8,
    "hint": "Return a new outer list instead of the stored one.",
    "explanation": "A defensive copy prevents caller-side append operations from modifying this flat numeric history through the returned value.",
    "referenceOutput": "[2, 4]",
    "tests": "assert h.values() == [2,4]\nassert external == [2,4,9]",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-075",
    "topic": "algorithms",
    "week": 10,
    "level": "Apply",
    "name": "Count selected pair operations",
    "task": "Increment comparisons inside the nested loop.",
    "before": "n = 5\ncomparisons = 0\nfor i in range(n):\n    for j in range(i+1, n):",
    "after": "print(comparisons)",
    "answers": [
      "comparisons += 1"
    ],
    "indent": 8,
    "hint": "Count one operation for every unordered index pair.",
    "explanation": "The triangular loop visits four plus three plus two plus one pairs, for ten selected operations. This count is not a runtime measurement.",
    "referenceOutput": "10",
    "tests": "assert comparisons == 10",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-076",
    "topic": "algorithms",
    "week": 11,
    "level": "Apply",
    "name": "Reuse an invariant total",
    "task": "Before the loop, assign total using sum(values).",
    "before": "values = [2, 3, 5]",
    "after": "fractions = []\nfor value in values:\n    fractions.append(value/total)\nprint(fractions)",
    "answers": [
      "total = sum(values)"
    ],
    "indent": 0,
    "hint": "The unchanged total need only be calculated once.",
    "explanation": "Preparing the invariant sum avoids repeated scans inside the normalization loop while preserving the complete output.",
    "referenceOutput": "[0.2, 0.3, 0.5]",
    "tests": "assert total == 10\nassert abs(sum(fractions)-1) < 1e-12",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-077",
    "topic": "algorithms",
    "week": 12,
    "level": "Apply",
    "name": "Exclude a known-small midpoint",
    "task": "Update lo to mid+1 in the binary-search branch.",
    "before": "def search(values, target):\n    lo, hi = 0, len(values)-1\n    while lo <= hi:\n        mid = (lo+hi)//2\n        if values[mid] == target:\n            return mid\n        if values[mid] < target:",
    "after": "        else:\n            hi = mid-1\n    return -1\nprint(search([2, 5, 9], 9))",
    "answers": [
      "lo = mid + 1"
    ],
    "indent": 12,
    "hint": "The midpoint has already been ruled out.",
    "explanation": "Excluding the tested midpoint ensures strict interval progress, including two-entry search intervals. Input order is a precondition.",
    "referenceOutput": "2",
    "tests": "assert search([2,9],9) == 1\nassert search([],4) == -1\nassert search([2,5,9],7) == -1",
    "source": "Original Code lab practice"
  },
  {
    "id": "code-add-078",
    "topic": "algorithms",
    "week": 12,
    "level": "Apply",
    "name": "Sort whole records by a numeric field",
    "task": "Assign ordered using sorted(rows, key=lambda row: row[1]).",
    "before": "rows = [(\"A\", 8), (\"B\", 3), (\"C\", 5)]",
    "after": "print(ordered)",
    "answers": [
      "ordered = sorted(rows, key=lambda row: row[1])"
    ],
    "indent": 0,
    "hint": "The key extracts a field without detaching it from the record.",
    "explanation": "The returned list ranks the numeric values while preserving the associated labels and leaving the original list unchanged.",
    "referenceOutput": "[('B', 3), ('C', 5), ('A', 8)]",
    "tests": "assert [r[0] for r in ordered] == [\"B\",\"C\",\"A\"]\nassert rows == [(\"A\",8),(\"B\",3),(\"C\",5)]",
    "source": "Original Code lab practice"
  }
];
EXERCISES.push(...CODE_LAB_ADDITIONS);
