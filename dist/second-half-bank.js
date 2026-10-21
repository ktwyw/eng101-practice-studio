// Original formative practice, aligned to the weekly lecture-note sequence.
const SECOND_HALF_WEEKS = [{"week": 7, "name": "Testing and debugging", "description": "Tests, boundaries, exceptions, assertions and diagnosis."}, {"week": 8, "name": "Object-oriented programming", "description": "Instances, methods, state, identity and composition."}, {"week": 9, "name": "Classes and inheritance", "description": "Interfaces, information hiding, inheritance and polymorphism."}, {"week": 10, "name": "Program efficiency I", "description": "Operation counts, growth classes and timing methods."}, {"week": 11, "name": "Program efficiency II", "description": "Hidden work, recursion, caches, windows and memory."}, {"week": 12, "name": "Searching and sorting", "description": "Search contracts, binary boundaries, sorting and rankings."}, {"week": 13, "name": "Python, MATLAB, C++ and Java", "description": "Transferable contracts and language translation pitfalls."}, {"week": 14, "name": "Comprehensive course review", "description": "Integrated engineering calculations and course revision."}];
const SECOND_HALF_MCQS = [
  {
    "id": "sh-w7-01",
    "topic": "week7",
    "week": 7,
    "title": "Boundary comparison — what is the complete printed output?",
    "code": "print([x >= 10 for x in [9, 10, 11]])",
    "options": [
      "[False, True, True]",
      "[False, False, True]",
      "[True, True, True]",
      "[True, False, False]"
    ],
    "answer": 0,
    "explanation": "The equality boundary is included by >=; 9 fails while 10 and 11 pass.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "python-output"
  },
  {
    "id": "sh-w7-02",
    "topic": "week7",
    "week": 7,
    "title": "Caught conversion — what is the complete printed output?",
    "code": "try:\n    print(int('4.5'))\nexcept ValueError:\n    print('invalid')",
    "options": [
      "4",
      "invalid",
      "4.5",
      "ValueError"
    ],
    "answer": 1,
    "explanation": "int does not parse a decimal-point string; the matching ValueError handler prints invalid.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "python-output"
  },
  {
    "id": "sh-w7-03",
    "topic": "week7",
    "week": 7,
    "title": "Finally after handling — what is the complete printed output?",
    "code": "try:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print('recover')\nfinally:\n    print('cleanup')",
    "options": [
      "cleanup\nrecover",
      "recover",
      "recover\ncleanup",
      "cleanup"
    ],
    "answer": 2,
    "explanation": "The division fails, the handler runs, and finally runs after the handler.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "python-output"
  },
  {
    "id": "sh-w7-04",
    "topic": "week7",
    "week": 7,
    "title": "Else on success — what is the complete printed output?",
    "code": "try:\n    x = int('12')\nexcept ValueError:\n    print('bad')\nelse:\n    print(x + 1)",
    "options": [
      "12",
      "bad",
      "No output",
      "13"
    ],
    "answer": 3,
    "explanation": "The conversion succeeds, so the else suite executes with x equal to 12.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "python-output"
  },
  {
    "id": "sh-w7-05",
    "topic": "week7",
    "week": 7,
    "title": "Assertion guard — what is the complete printed output?",
    "code": "try:\n    assert -2 > 0, 'positive required'\n    print('ok')\nexcept AssertionError:\n    print('guard failed')",
    "options": [
      "guard failed",
      "ok",
      "positive required\nok",
      "No output"
    ],
    "answer": 0,
    "explanation": "With assertions enabled, the false condition raises AssertionError before the next print.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "python-output"
  },
  {
    "id": "sh-w7-06",
    "topic": "week7",
    "week": 7,
    "title": "Rejected empty input — what is the complete printed output?",
    "code": "def mean(xs):\n    if not xs:\n        raise ValueError('empty')\n    return sum(xs) / len(xs)\ntry:\n    mean([])\nexcept ValueError:\n    print('empty rejected')",
    "options": [
      "0",
      "empty rejected",
      "None",
      "ZeroDivisionError"
    ],
    "answer": 1,
    "explanation": "The explicit empty-input check raises ValueError before division is attempted.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "python-output"
  },
  {
    "id": "sh-w7-07",
    "topic": "week7",
    "week": 7,
    "title": "Tracking a loop defect — what is the complete printed output?",
    "code": "total = 0\nfor x in [2, 4, 6]:\n    total = x\nprint(total)",
    "options": [
      "12",
      "0",
      "6",
      "2"
    ],
    "answer": 2,
    "explanation": "Assignment overwrites the accumulator on each iteration; the final value is 6.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "python-output"
  },
  {
    "id": "sh-w7-08",
    "topic": "week7",
    "week": 7,
    "title": "Testing approximate equality — what is the complete printed output?",
    "code": "import math\nprint(math.isclose(0.1 + 0.2, 0.3, abs_tol=1e-12))",
    "options": [
      "False",
      "0.3",
      "TypeError",
      "True"
    ],
    "answer": 3,
    "explanation": "isclose accepts the tiny floating-point difference under the stated tolerance.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "python-output"
  },
  {
    "id": "sh-w7-09",
    "topic": "week7",
    "week": 7,
    "title": "A trace of a repaired accumulator — what is the complete printed output?",
    "code": "total = 0\nfor x in [2, 4, 6]:\n    total += x\nprint(total)",
    "options": [
      "12",
      "6",
      "0",
      "246"
    ],
    "answer": 0,
    "explanation": "The accumulator adds all three values: 2 + 4 + 6 = 12.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "python-output"
  },
  {
    "id": "sh-w7-10",
    "topic": "week7",
    "week": 7,
    "title": "Different exception classes — what is the complete printed output?",
    "code": "try:\n    print([3][2])\nexcept ValueError:\n    print('value')\nexcept IndexError:\n    print('index')",
    "options": [
      "value",
      "index",
      "3",
      "None"
    ],
    "answer": 1,
    "explanation": "Index 2 is outside the one-element list, producing IndexError rather than ValueError.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "python-output"
  },
  {
    "id": "sh-w7-11",
    "topic": "week7",
    "week": 7,
    "title": "A missing mapping entry — what is the complete printed output?",
    "code": "try:\n    print({'p': 8}['q'])\nexcept KeyError:\n    print('missing')",
    "options": [
      "8",
      "None",
      "missing",
      "q"
    ],
    "answer": 2,
    "explanation": "Direct indexing of an absent dictionary key raises KeyError, which this handler catches.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "python-output"
  },
  {
    "id": "sh-w7-12",
    "topic": "week7",
    "week": 7,
    "title": "A default lookup — what is the complete printed output?",
    "code": "print({'p': 8}.get('q', -1))",
    "options": [
      "None",
      "8",
      "KeyError",
      "-1"
    ],
    "answer": 3,
    "explanation": "get returns the supplied default for a missing key without raising KeyError.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "python-output"
  },
  {
    "id": "sh-w7-13",
    "topic": "week7",
    "week": 7,
    "title": "A successful return with cleanup — what is the complete printed output?",
    "code": "def f():\n    try:\n        return 7\n    finally:\n        print('done')\nprint(f())",
    "options": [
      "done\n7",
      "7\ndone",
      "7",
      "done\nNone"
    ],
    "answer": 0,
    "explanation": "The finally suite prints before the pending return value is delivered to the caller.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "python-output"
  },
  {
    "id": "sh-w7-14",
    "topic": "week7",
    "week": 7,
    "title": "Testing mutation — what is the complete printed output?",
    "code": "def add(xs):\n    xs.append(9)\na = [1]\nadd(a)\nprint(a)",
    "options": [
      "[1]",
      "[1, 9]",
      "[9]",
      "None"
    ],
    "answer": 1,
    "explanation": "The parameter refers to the caller’s list, so append changes that list.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "python-output"
  },
  {
    "id": "sh-w7-15",
    "topic": "week7",
    "week": 7,
    "title": "Validation before calculation — what is the complete printed output?",
    "code": "def ratio(a, b):\n    if b == 0:\n        return None\n    return a / b\nprint(ratio(4, 0))",
    "options": [
      "0",
      "4",
      "None",
      "ZeroDivisionError"
    ],
    "answer": 2,
    "explanation": "The early return handles a zero denominator before division.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "python-output"
  },
  {
    "id": "sh-w7-16",
    "topic": "week7",
    "week": 7,
    "title": "A finite test set — what is the complete printed output?",
    "code": "tests = [0, 1, -1, 5]\nprint(sum(x >= 0 for x in tests))",
    "options": [
      "2",
      "4",
      "1",
      "3"
    ],
    "answer": 3,
    "explanation": "True counts as 1 in sum; zero, one and five satisfy the condition.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "python-output"
  },
  {
    "id": "sh-w7-17",
    "topic": "week7",
    "week": 7,
    "title": "Short circuit and safety — what is the complete printed output?",
    "code": "x = 0\nprint(x != 0 and 10 / x > 1)",
    "options": [
      "False",
      "True",
      "ZeroDivisionError",
      "None"
    ],
    "answer": 0,
    "explanation": "and stops after its false left operand, so the division is not evaluated.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "python-output"
  },
  {
    "id": "sh-w7-18",
    "topic": "week7",
    "week": 7,
    "title": "Exception scope — what is the complete printed output?",
    "code": "def parse(s):\n    try:\n        return int(s)\n    except ValueError:\n        return -1\nprint(parse('bad'), parse('6'))",
    "options": [
      "bad 6",
      "-1 6",
      "-1 -1",
      "None 6"
    ],
    "answer": 1,
    "explanation": "Only the first conversion fails; the successful second call returns 6.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "python-output"
  },
  {
    "id": "sh-w7-19",
    "topic": "week7",
    "week": 7,
    "title": "A test that exposes a sign bug — what is the complete printed output?",
    "code": "def magnitude(x):\n    return x\nprint(magnitude(-4) == 4)",
    "options": [
      "True",
      "4",
      "False",
      "-4"
    ],
    "answer": 2,
    "explanation": "The defective function returns -4, so comparison with the required magnitude 4 fails.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "python-output"
  },
  {
    "id": "sh-w7-20",
    "topic": "week7",
    "week": 7,
    "title": "Two passes through a handler — what is the complete printed output?",
    "code": "for raw in ['2', 'x', '5']:\n    try:\n        print(int(raw) * 2)\n    except ValueError:\n        print('skip')",
    "options": [
      "4\n10",
      "2\nskip\n5",
      "skip",
      "4\nskip\n10"
    ],
    "answer": 3,
    "explanation": "Each iteration has its own conversion attempt; the middle failure does not end the loop.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "python-output"
  },
  {
    "id": "sh-w7-21",
    "topic": "week7",
    "week": 7,
    "title": "An explicit failure signal — what is the complete printed output?",
    "code": "def f(x):\n    if x < 0:\n        raise ValueError('negative')\n    return x * 2\ntry:\n    print(f(-1))\nexcept ValueError as err:\n    print(str(err))",
    "options": [
      "negative",
      "-2",
      "ValueError",
      "None"
    ],
    "answer": 0,
    "explanation": "The raised exception carries the message negative, printed by the handler.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "python-output"
  },
  {
    "id": "sh-w7-22",
    "topic": "week7",
    "week": 7,
    "title": "An off-by-one test — what is the complete printed output?",
    "code": "def count(n):\n    return len(range(1, n))\nprint(count(4))",
    "options": [
      "4",
      "3",
      "5",
      "0"
    ],
    "answer": 1,
    "explanation": "range excludes its stop value; it contains 1, 2 and 3.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "python-output"
  },
  {
    "id": "sh-w7-23",
    "topic": "week7",
    "week": 7,
    "title": "The cleanup path without failure — what is the complete printed output?",
    "code": "try:\n    print('work')\nexcept RuntimeError:\n    print('error')\nfinally:\n    print('end')",
    "options": [
      "work",
      "error\nend",
      "work\nend",
      "end\nwork"
    ],
    "answer": 2,
    "explanation": "The try succeeds and skips the handler; finally still executes.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "python-output"
  },
  {
    "id": "sh-w7-24",
    "topic": "week7",
    "week": 7,
    "title": "Testing the original list — what is the complete printed output?",
    "code": "a = [5, 1, 3]\nb = sorted(a)\nprint(a == b)",
    "options": [
      "True",
      "None",
      "TypeError",
      "False"
    ],
    "answer": 3,
    "explanation": "sorted produces a new ordered list and leaves the original order unchanged.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "python-output"
  },
  {
    "id": "sh-w7-25",
    "topic": "week7",
    "week": 7,
    "title": "Regression fixture — what is the complete printed output?",
    "code": "def clamp(x):\n    return min(10, max(0, x))\nprint([clamp(x) for x in [-1, 0, 7, 10, 12]])",
    "options": [
      "[0, 0, 7, 10, 10]",
      "[-1, 0, 7, 10, 12]",
      "[0, 0, 10, 10, 10]",
      "[0, 1, 7, 9, 10]"
    ],
    "answer": 0,
    "explanation": "Values below zero become zero, values above ten become ten, and interior/end-point values are preserved.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "python-output"
  },
  {
    "id": "sh-w7-26",
    "topic": "week7",
    "week": 7,
    "title": "Which input most directly distinguishes x > 10 from x >= 10?",
    "code": "",
    "options": [
      "9",
      "10",
      "11",
      "100"
    ],
    "answer": 1,
    "explanation": "Only the equality boundary yields different Boolean results for these two conditions.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "concept"
  },
  {
    "id": "sh-w7-27",
    "topic": "week7",
    "week": 7,
    "title": "What does one passing test establish?",
    "code": "",
    "options": [
      "The program is correct for every input",
      "The algorithm is optimal",
      "The observed case matched its expectation",
      "There are no type errors anywhere"
    ],
    "answer": 2,
    "explanation": "A finite observed case supports that case; it does not prove universal correctness.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "concept"
  },
  {
    "id": "sh-w7-28",
    "topic": "week7",
    "week": 7,
    "title": "A test oracle is best described as:",
    "code": "",
    "options": [
      "The newest actual output copied without review",
      "A timer for the program",
      "A syntax-highlighting tool",
      "An independently justified expected result"
    ],
    "answer": 3,
    "explanation": "An oracle defines what should happen, using the specification, hand calculation, or another justified reference.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "concept"
  },
  {
    "id": "sh-w7-29",
    "topic": "week7",
    "week": 7,
    "title": "Which is a syntax error?",
    "code": "",
    "options": [
      "An if statement missing its colon",
      "A valid program using the wrong formula",
      "Division by zero during execution",
      "Accessing an absent dictionary key"
    ],
    "answer": 0,
    "explanation": "A missing colon violates the language grammar before normal execution begins.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "concept"
  },
  {
    "id": "sh-w7-30",
    "topic": "week7",
    "week": 7,
    "title": "Which is a logic error?",
    "code": "",
    "options": [
      "A missing closing parenthesis",
      "Returning area * 2 when the contract requires area",
      "An uncaught IndexError",
      "An invalid indentation token"
    ],
    "answer": 1,
    "explanation": "A logic error can execute normally while returning a result inconsistent with the contract.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "concept"
  },
  {
    "id": "sh-w7-31",
    "topic": "week7",
    "week": 7,
    "title": "For a nonempty-mean function, which boundary should be tested explicitly?",
    "code": "",
    "options": [
      "Only one large random collection",
      "Only three positive readings",
      "An empty collection and a one-item collection",
      "Only collections already used in the implementation"
    ],
    "answer": 2,
    "explanation": "Empty input checks the stated rejection behavior, and one item checks the smallest valid size.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "concept"
  },
  {
    "id": "sh-w7-32",
    "topic": "week7",
    "week": 7,
    "title": "Why keep a regression test after fixing a bug?",
    "code": "",
    "options": [
      "To guarantee no unrelated bugs exist",
      "To replace the specification",
      "To force the same runtime on every machine",
      "To detect a later return of the same failure"
    ],
    "answer": 3,
    "explanation": "A regression fixture preserves evidence of a previously failing behavior.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "concept"
  },
  {
    "id": "sh-w7-33",
    "topic": "week7",
    "week": 7,
    "title": "Which handler is usually most informative for a known conversion failure?",
    "code": "",
    "options": [
      "except ValueError:",
      "except: pass",
      "except BaseException: pass",
      "Removing all handlers"
    ],
    "answer": 0,
    "explanation": "A specific handler addresses the anticipated failure without hiding unrelated defects.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "concept"
  },
  {
    "id": "sh-w7-34",
    "topic": "week7",
    "week": 7,
    "title": "What should happen after a test fails?",
    "code": "",
    "options": [
      "Immediately replace the expected value with actual output",
      "Compare actual and expected values, then isolate the cause",
      "Delete the test without investigation",
      "Change several unrelated modules at once"
    ],
    "answer": 1,
    "explanation": "A failure is evidence to investigate; either implementation or expectation may need a justified correction.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "concept"
  },
  {
    "id": "sh-w7-35",
    "topic": "week7",
    "week": 7,
    "title": "Why is print debugging useful on a small loop?",
    "code": "",
    "options": [
      "It proves the program correct for all inputs",
      "It prevents every exception",
      "It reveals selected intermediate values and execution order",
      "It automatically repairs the loop"
    ],
    "answer": 2,
    "explanation": "Selected traces can expose when state first departs from the intended invariant.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "concept"
  },
  {
    "id": "sh-w7-36",
    "topic": "week7",
    "week": 7,
    "title": "Which practice makes a timing comparison fairer?",
    "code": "",
    "options": [
      "Time one function including file loading and the other excluding it",
      "Compare different output contracts",
      "Use one unrecorded run only",
      "Use equivalent inputs and verify equivalent results"
    ],
    "answer": 3,
    "explanation": "Equivalent work and a stated timing boundary are prerequisites for interpreting a comparison.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "concept"
  },
  {
    "id": "sh-w7-37",
    "topic": "week7",
    "week": 7,
    "title": "Which is a suitable use of an assertion?",
    "code": "",
    "options": [
      "Checking an internal invariant during development",
      "Replacing all validation of untrusted input",
      "Silently correcting invalid data",
      "Guaranteeing execution even with optimization enabled"
    ],
    "answer": 0,
    "explanation": "Assertions document/check internal assumptions; Python may omit them under optimized execution.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "concept"
  },
  {
    "id": "sh-w7-38",
    "topic": "week7",
    "week": 7,
    "title": "Which statement about finally is correct?",
    "code": "",
    "options": [
      "It runs only when no exception occurs",
      "It runs on normal exit and while propagating an exception",
      "It runs only if except prints something",
      "It always suppresses exceptions"
    ],
    "answer": 1,
    "explanation": "Cleanup runs even when an exception is not handled. Without an overriding action in finally, the pending exception continues to propagate.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "concept"
  },
  {
    "id": "sh-w7-39",
    "topic": "week7",
    "week": 7,
    "title": "An input parser should normally separate which concerns?",
    "code": "",
    "options": [
      "Variable names and font colors",
      "Expected output and actual output by making them identical",
      "Text conversion and domain validation",
      "Every operation into a broad silent handler"
    ],
    "answer": 2,
    "explanation": "A string may convert successfully yet represent an invalid physical/domain value.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "concept"
  },
  {
    "id": "sh-w7-40",
    "topic": "week7",
    "week": 7,
    "title": "Which pair checks a lower-bound contract x >= 0 most directly?",
    "code": "",
    "options": [
      "4 and 5",
      "20 and 30",
      "100 and 101",
      "-1 and 0"
    ],
    "answer": 3,
    "explanation": "The pair crosses the rejection boundary and includes its exact valid endpoint.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "concept"
  },
  {
    "id": "sh-w7-41",
    "topic": "week7",
    "week": 7,
    "title": "What is a minimal reproducing example?",
    "code": "",
    "options": [
      "A small case retaining the failure and necessary setup",
      "The complete project plus unrelated files",
      "A case that no longer fails",
      "A screenshot without inputs"
    ],
    "answer": 0,
    "explanation": "Removing unrelated details makes the causal behavior easier to understand while preserving the fault.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "concept"
  },
  {
    "id": "sh-w7-42",
    "topic": "week7",
    "week": 7,
    "title": "Why compare floating-point calculations using a justified tolerance?",
    "code": "",
    "options": [
      "All floating-point values are random",
      "Rounding can make mathematically equal expressions differ slightly",
      "A tolerance makes every algorithm correct",
      "Exact equality always raises an exception"
    ],
    "answer": 1,
    "explanation": "Binary floating-point arithmetic can introduce small representation and rounding differences.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "concept"
  },
  {
    "id": "sh-w7-43",
    "topic": "week7",
    "week": 7,
    "title": "Which tolerance policy is meaningful near an expected zero?",
    "code": "",
    "options": [
      "Use only a relative tolerance and no absolute tolerance",
      "Accept any result with a positive sign",
      "Include an absolute tolerance appropriate to the units",
      "Round every value to an integer"
    ],
    "answer": 2,
    "explanation": "A purely relative criterion against zero offers no nonzero allowance; absolute tolerance supplies a scale.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "concept"
  },
  {
    "id": "sh-w7-44",
    "topic": "week7",
    "week": 7,
    "title": "Which test detects unintended input mutation?",
    "code": "",
    "options": [
      "Assign backup = input and compare the aliases",
      "Check only that the function returns quickly",
      "Print only the function name",
      "Compare the input with an independent saved copy after the call"
    ],
    "answer": 3,
    "explanation": "A true copy preserves the original content; another name for the same list does not.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "concept"
  },
  {
    "id": "sh-w7-45",
    "topic": "week7",
    "week": 7,
    "title": "A function rejects negative lengths. Which behavior should its test verify?",
    "code": "",
    "options": [
      "The documented exception for a negative input",
      "An arbitrary numeric result",
      "That every exception is silently ignored",
      "Only that a positive example runs"
    ],
    "answer": 0,
    "explanation": "Invalid-input behavior is part of the contract and deserves an explicit expected exception.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "concept"
  },
  {
    "id": "sh-w7-46",
    "topic": "week7",
    "week": 7,
    "title": "What is the main risk of except: pass around a whole workflow?",
    "code": "",
    "options": [
      "It makes all calculations faster",
      "It can hide unrelated failures and leave invalid state",
      "It catches only ValueError",
      "It guarantees cleanup"
    ],
    "answer": 1,
    "explanation": "A broad silent catch removes evidence and can allow later code to proceed with incomplete results.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "concept"
  },
  {
    "id": "sh-w7-47",
    "topic": "week7",
    "week": 7,
    "title": "What does branch coverage measure?",
    "code": "",
    "options": [
      "Whether every possible input was tested",
      "Whether every numeric result is correct",
      "The proportion of decision outcomes exercised by the tests",
      "Whether the code is fastest"
    ],
    "answer": 2,
    "explanation": "Branch coverage records which decision outcomes the tests take. It measures executed structure, not whether the results are correct or all possible inputs have been tested.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "concept"
  },
  {
    "id": "sh-w7-48",
    "topic": "week7",
    "week": 7,
    "title": "Which is a good debugging change strategy?",
    "code": "",
    "options": [
      "Make many speculative changes simultaneously",
      "Remove validation until the output looks plausible",
      "Use a new input for every comparison",
      "Change one justified cause and rerun relevant tests"
    ],
    "answer": 3,
    "explanation": "Small changes preserve the ability to relate a behavior change to a specific cause.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "concept"
  },
  {
    "id": "sh-w7-49",
    "topic": "week7",
    "week": 7,
    "title": "An exception message should ideally help identify:",
    "code": "",
    "options": [
      "The failed condition and relevant context",
      "The author’s preferred editor theme",
      "An unrelated successful test",
      "Only a generic word such as error"
    ],
    "answer": 0,
    "explanation": "A precise message makes diagnosis easier without requiring reconstruction of all preceding state.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "concept"
  },
  {
    "id": "sh-w7-50",
    "topic": "week7",
    "week": 7,
    "title": "A calculation passes all supplied examples. What is the next sound claim?",
    "code": "",
    "options": [
      "All future inputs are safe",
      "Those examples passed under the tested conditions",
      "The model assumptions are physically verified",
      "No review is needed"
    ],
    "answer": 1,
    "explanation": "The claim must remain within the tested cases and assumptions.",
    "bank": "second-half",
    "source": "Week 7 · Original practice · Testing and debugging",
    "mode": "concept"
  },
  {
    "id": "sh-w8-01",
    "topic": "week8",
    "week": 8,
    "title": "Instance initialization — what is the complete printed output?",
    "code": "class Sensor:\n    def __init__(self, value):\n        self.value = value\ns = Sensor(12)\nprint(s.value)",
    "options": [
      "0",
      "None",
      "12",
      "Sensor"
    ],
    "answer": 2,
    "explanation": "The constructor stores the supplied argument on the new instance.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "python-output"
  },
  {
    "id": "sh-w8-02",
    "topic": "week8",
    "week": 8,
    "title": "Independent instances — what is the complete printed output?",
    "code": "class Box:\n    def __init__(self, x):\n        self.x = x\na, b = Box(2), Box(5)\na.x = 9\nprint(a.x, b.x)",
    "options": [
      "9 9",
      "2 5",
      "2 9",
      "9 5"
    ],
    "answer": 3,
    "explanation": "Each instance has its own x attribute; changing a does not change b.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "python-output"
  },
  {
    "id": "sh-w8-03",
    "topic": "week8",
    "week": 8,
    "title": "A bound method — what is the complete printed output?",
    "code": "class Scale:\n    def __init__(self, factor):\n        self.factor = factor\n    def apply(self, x):\n        return self.factor * x\nprint(Scale(3).apply(4))",
    "options": [
      "12",
      "7",
      "3",
      "TypeError"
    ],
    "answer": 0,
    "explanation": "The bound call supplies self automatically and multiplies the stored factor by 4.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "python-output"
  },
  {
    "id": "sh-w8-04",
    "topic": "week8",
    "week": 8,
    "title": "A method return — what is the complete printed output?",
    "code": "class Counter:\n    def __init__(self):\n        self.n = 0\n    def step(self):\n        self.n += 1\nc = Counter()\nprint(c.step(), c.n)",
    "options": [
      "1 1",
      "None 1",
      "0 1",
      "None 0"
    ],
    "answer": 1,
    "explanation": "The method mutates n but has no explicit return, so its result is None.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "python-output"
  },
  {
    "id": "sh-w8-05",
    "topic": "week8",
    "week": 8,
    "title": "Aliased object state — what is the complete printed output?",
    "code": "class Tank:\n    def __init__(self):\n        self.level = 4\na = Tank()\nb = a\nb.level = 8\nprint(a.level, a is b)",
    "options": [
      "4 False",
      "4 True",
      "8 True",
      "8 False"
    ],
    "answer": 2,
    "explanation": "Both names reference the same Tank object.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "python-output"
  },
  {
    "id": "sh-w8-06",
    "topic": "week8",
    "week": 8,
    "title": "Fresh list per instance — what is the complete printed output?",
    "code": "class Log:\n    def __init__(self):\n        self.values = []\na, b = Log(), Log()\na.values.append(3)\nprint(a.values, b.values)",
    "options": [
      "[3] [3]",
      "[] []",
      "3 None",
      "[3] []"
    ],
    "answer": 3,
    "explanation": "The list expression runs on each initialization, creating distinct lists.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "python-output"
  },
  {
    "id": "sh-w8-07",
    "topic": "week8",
    "week": 8,
    "title": "Shared class list — what is the complete printed output?",
    "code": "class Log:\n    values = []\na, b = Log(), Log()\na.values.append(3)\nprint(b.values)",
    "options": [
      "[3]",
      "[]",
      "3",
      "AttributeError"
    ],
    "answer": 0,
    "explanation": "No instance attribute shadows values, so both objects find and mutate the class list.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "python-output"
  },
  {
    "id": "sh-w8-08",
    "topic": "week8",
    "week": 8,
    "title": "Class attribute shadowing — what is the complete printed output?",
    "code": "class Gauge:\n    unit = \"Pa\"\na, b = Gauge(), Gauge()\na.unit = \"kPa\"\nprint(a.unit, b.unit)",
    "options": [
      "kPa kPa",
      "kPa Pa",
      "Pa Pa",
      "Pa kPa"
    ],
    "answer": 1,
    "explanation": "Assigning a.unit creates an instance attribute; b still reads the class attribute.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "python-output"
  },
  {
    "id": "sh-w8-09",
    "topic": "week8",
    "week": 8,
    "title": "A getter computes a result — what is the complete printed output?",
    "code": "class Rectangle:\n    def __init__(self, w, h):\n        self.w, self.h = w, h\n    def area(self):\n        return self.w * self.h\nprint(Rectangle(3, 5).area())",
    "options": [
      "8",
      "3",
      "15",
      "None"
    ],
    "answer": 2,
    "explanation": "The method combines the two stored dimensions by multiplication.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "python-output"
  },
  {
    "id": "sh-w8-10",
    "topic": "week8",
    "week": 8,
    "title": "Two state changes — what is the complete printed output?",
    "code": "class Counter:\n    def __init__(self):\n        self.n = 0\n    def add(self, amount):\n        self.n += amount\nc = Counter()\nc.add(2)\nc.add(5)\nprint(c.n)",
    "options": [
      "5",
      "2",
      "0",
      "7"
    ],
    "answer": 3,
    "explanation": "Both calls update the same instance, so the changes accumulate.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "python-output"
  },
  {
    "id": "sh-w8-11",
    "topic": "week8",
    "week": 8,
    "title": "Returning a snapshot — what is the complete printed output?",
    "code": "class Record:\n    def __init__(self):\n        self.data = [1, 2]\n    def snapshot(self):\n        return self.data.copy()\nr = Record()\nx = r.snapshot()\nx.append(9)\nprint(r.data)",
    "options": [
      "[1, 2]",
      "[1, 2, 9]",
      "[9]",
      "None"
    ],
    "answer": 0,
    "explanation": "The copied list can be changed without changing the stored flat list.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "python-output"
  },
  {
    "id": "sh-w8-12",
    "topic": "week8",
    "week": 8,
    "title": "A method reference — what is the complete printed output?",
    "code": "class Tool:\n    def value(self):\n        return 6\nt = Tool()\nf = t.value\nprint(f())",
    "options": [
      "None",
      "6",
      "Tool",
      "TypeError"
    ],
    "answer": 1,
    "explanation": "The bound method keeps its receiver even when assigned to another name.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "python-output"
  },
  {
    "id": "sh-w8-13",
    "topic": "week8",
    "week": 8,
    "title": "Object type test — what is the complete printed output?",
    "code": "class Sensor:\n    pass\ns = Sensor()\nprint(isinstance(s, Sensor))",
    "options": [
      "False",
      "Sensor",
      "True",
      "None"
    ],
    "answer": 2,
    "explanation": "The object was constructed from Sensor, so the instance check succeeds.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "python-output"
  },
  {
    "id": "sh-w8-14",
    "topic": "week8",
    "week": 8,
    "title": "Class versus instance — what is the complete printed output?",
    "code": "class Sensor:\n    pass\ns = Sensor()\nprint(type(s) is Sensor)",
    "options": [
      "False",
      "None",
      "TypeError",
      "True"
    ],
    "answer": 3,
    "explanation": "type returns the class of the instance, which here is exactly Sensor.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "python-output"
  },
  {
    "id": "sh-w8-15",
    "topic": "week8",
    "week": 8,
    "title": "A local variable is separate — what is the complete printed output?",
    "code": "class Meter:\n    def __init__(self):\n        self.x = 5\n    def read(self):\n        x = 99\n        return self.x\nprint(Meter().read())",
    "options": [
      "5",
      "99",
      "None",
      "NameError"
    ],
    "answer": 0,
    "explanation": "The local x does not replace the instance attribute self.x.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "python-output"
  },
  {
    "id": "sh-w8-16",
    "topic": "week8",
    "week": 8,
    "title": "Resetting state — what is the complete printed output?",
    "code": "class Counter:\n    def __init__(self):\n        self.n = 4\n    def reset(self):\n        self.n = 0\nc = Counter()\nc.reset()\nprint(c.n)",
    "options": [
      "4",
      "0",
      "None",
      "1"
    ],
    "answer": 1,
    "explanation": "reset assigns zero to the stored count.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "python-output"
  },
  {
    "id": "sh-w8-17",
    "topic": "week8",
    "week": 8,
    "title": "Method delegation — what is the complete printed output?",
    "code": "class Sensor:\n    def read(self):\n        return 10\n    def double(self):\n        return 2 * self.read()\nprint(Sensor().double())",
    "options": [
      "10",
      "2",
      "20",
      "TypeError"
    ],
    "answer": 2,
    "explanation": "double calls another method through self and doubles its returned value.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "python-output"
  },
  {
    "id": "sh-w8-18",
    "topic": "week8",
    "week": 8,
    "title": "Constructor defaults — what is the complete printed output?",
    "code": "class Sample:\n    def __init__(self, value=2):\n        self.value = value\nprint(Sample().value, Sample(7).value)",
    "options": [
      "2 2",
      "None 7",
      "7 2",
      "2 7"
    ],
    "answer": 3,
    "explanation": "The default applies only when the caller omits the value argument.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "python-output"
  },
  {
    "id": "sh-w8-19",
    "topic": "week8",
    "week": 8,
    "title": "A formatted representation — what is the complete printed output?",
    "code": "class Reading:\n    def __init__(self, x):\n        self.x = x\n    def __str__(self):\n        return f\"reading={self.x}\"\nprint(Reading(4))",
    "options": [
      "reading=4",
      "4",
      "Reading(4)",
      "None"
    ],
    "answer": 0,
    "explanation": "print uses the string returned by __str__.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "python-output"
  },
  {
    "id": "sh-w8-20",
    "topic": "week8",
    "week": 8,
    "title": "Object collection — what is the complete printed output?",
    "code": "class Item:\n    def __init__(self, mass):\n        self.mass = mass\nitems = [Item(2), Item(5)]\nprint(sum(x.mass for x in items))",
    "options": [
      "2",
      "7",
      "5",
      "TypeError"
    ],
    "answer": 1,
    "explanation": "The generator reads each object’s mass and sum adds both values.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "python-output"
  },
  {
    "id": "sh-w8-21",
    "topic": "week8",
    "week": 8,
    "title": "Constructor validation — what is the complete printed output?",
    "code": "class Length:\n    def __init__(self, x):\n        if x < 0:\n            raise ValueError(\"length\")\n        self.x = x\ntry:\n    Length(-1)\nexcept ValueError:\n    print(\"rejected\")",
    "options": [
      "-1",
      "None",
      "rejected",
      "0"
    ],
    "answer": 2,
    "explanation": "Validation fails before a valid initialized Length is returned to the caller.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "python-output"
  },
  {
    "id": "sh-w8-22",
    "topic": "week8",
    "week": 8,
    "title": "Mutation through a method — what is the complete printed output?",
    "code": "class Box:\n    def __init__(self, x):\n        self.x = x\n    def multiply(self, k):\n        self.x *= k\nb = Box(3)\nb.multiply(4)\nprint(b.x)",
    "options": [
      "3",
      "4",
      "7",
      "12"
    ],
    "answer": 3,
    "explanation": "The augmented assignment updates the instance value to 3 * 4.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "python-output"
  },
  {
    "id": "sh-w8-23",
    "topic": "week8",
    "week": 8,
    "title": "Identity comparison — what is the complete printed output?",
    "code": "class Box:\n    def __init__(self, x):\n        self.x = x\na, b = Box(3), Box(3)\nprint(a is b, a.x == b.x)",
    "options": [
      "False True",
      "True True",
      "False False",
      "True False"
    ],
    "answer": 0,
    "explanation": "The objects are distinct even though their stored numeric values are equal.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "python-output"
  },
  {
    "id": "sh-w8-24",
    "topic": "week8",
    "week": 8,
    "title": "An attribute added later — what is the complete printed output?",
    "code": "class Record:\n    pass\nr = Record()\nr.tag = \"A\"\nprint(r.tag)",
    "options": [
      "None",
      "A",
      "Record",
      "AttributeError"
    ],
    "answer": 1,
    "explanation": "This ordinary class permits assigning a new instance attribute.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "python-output"
  },
  {
    "id": "sh-w8-25",
    "topic": "week8",
    "week": 8,
    "title": "A computed temperature — what is the complete printed output?",
    "code": "class Temperature:\n    def __init__(self, c):\n        self.c = c\n    def kelvin(self):\n        return self.c + 273.15\nprint(f\"{Temperature(20).kelvin():.2f}\")",
    "options": [
      "20.00",
      "253.15",
      "293.15",
      "273.15"
    ],
    "answer": 2,
    "explanation": "The conversion adds the Kelvin offset and formats to two decimal places.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "python-output"
  },
  {
    "id": "sh-w8-26",
    "topic": "week8",
    "week": 8,
    "title": "What is a class in this introductory model?",
    "code": "",
    "options": [
      "One particular stored measurement",
      "A loop that always executes once",
      "A replacement for every function",
      "A definition of an object type with related state and behavior"
    ],
    "answer": 3,
    "explanation": "A class describes how instances represent data and expose operations.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "concept"
  },
  {
    "id": "sh-w8-27",
    "topic": "week8",
    "week": 8,
    "title": "What is an instance attribute?",
    "code": "",
    "options": [
      "State associated with a particular object",
      "A variable shared by every class automatically",
      "A compulsory global variable",
      "A Python keyword"
    ],
    "answer": 0,
    "explanation": "An attribute stored on an instance represents that object’s state.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "concept"
  },
  {
    "id": "sh-w8-28",
    "topic": "week8",
    "week": 8,
    "title": "In an ordinary instance method, what does self refer to?",
    "code": "",
    "options": [
      "The parent class in every call",
      "The receiving instance",
      "The Python interpreter",
      "A copy of every argument"
    ],
    "answer": 1,
    "explanation": "A bound call passes the receiver as the method’s first argument, conventionally named self.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "concept"
  },
  {
    "id": "sh-w8-29",
    "topic": "week8",
    "week": 8,
    "title": "What is the main purpose of __init__?",
    "code": "",
    "options": [
      "Return a replacement class",
      "Run automatically after every method",
      "Initialize the newly created instance",
      "Delete the object"
    ],
    "answer": 2,
    "explanation": "__init__ establishes initial state after instance creation and must return None.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "concept"
  },
  {
    "id": "sh-w8-30",
    "topic": "week8",
    "week": 8,
    "title": "Which call correctly invokes an instance method read on s?",
    "code": "",
    "options": [
      "read.s()",
      "s.read",
      "class.read(s) with class used as a keyword",
      "s.read()"
    ],
    "answer": 3,
    "explanation": "Parentheses invoke the bound method; s.read alone retrieves the method object.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "concept"
  },
  {
    "id": "sh-w8-31",
    "topic": "week8",
    "week": 8,
    "title": "Two instances should keep independent measurement histories. Where should each history be created?",
    "code": "",
    "options": [
      "self.history = [] inside __init__",
      "history = [] only in the class body",
      "One shared global list",
      "As the default argument history=[] reused by every call"
    ],
    "answer": 0,
    "explanation": "Creating a list during each initialization gives each object its own mutable history.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "concept"
  },
  {
    "id": "sh-w8-32",
    "topic": "week8",
    "week": 8,
    "title": "What does b = a do when a is an object?",
    "code": "",
    "options": [
      "Deep-copies every attribute",
      "Creates another reference to the same object",
      "Calls the constructor again",
      "Converts the object to a class"
    ],
    "answer": 1,
    "explanation": "Assignment binds a name; it does not duplicate the object.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "concept"
  },
  {
    "id": "sh-w8-33",
    "topic": "week8",
    "week": 8,
    "title": "Which is a method’s public interface?",
    "code": "",
    "options": [
      "Every temporary local variable",
      "The editor’s line numbers",
      "Its documented callable behavior and contract",
      "Only its execution time"
    ],
    "answer": 2,
    "explanation": "Clients should depend on the documented operations, inputs, results and failure behavior.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "concept"
  },
  {
    "id": "sh-w8-34",
    "topic": "week8",
    "week": 8,
    "title": "Why group a value and its unit in one object?",
    "code": "",
    "options": [
      "To remove the need for dimensional reasoning",
      "To make all units interchangeable",
      "To ensure every measurement is accurate",
      "To keep related state and operations consistent"
    ],
    "answer": 3,
    "explanation": "Encapsulation can centralize conversions and checks, while the programmer still supplies a correct unit model.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "concept"
  },
  {
    "id": "sh-w8-35",
    "topic": "week8",
    "week": 8,
    "title": "A method changes state and has no return statement. Its call returns:",
    "code": "",
    "options": [
      "None",
      "The receiving object automatically",
      "The last assigned value automatically",
      "True automatically"
    ],
    "answer": 0,
    "explanation": "Python functions and methods return None when execution reaches the end without an explicit return.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "concept"
  },
  {
    "id": "sh-w8-36",
    "topic": "week8",
    "week": 8,
    "title": "Which design best supports an invariant that length is nonnegative?",
    "code": "",
    "options": [
      "Validate only one example in a notebook",
      "Validate construction and every public state-changing operation",
      "Allow arbitrary public writes while assuming they never happen",
      "Catch every exception and continue"
    ],
    "answer": 1,
    "explanation": "The invariant must be protected at each supported entry point that can establish or change the value.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "concept"
  },
  {
    "id": "sh-w8-37",
    "topic": "week8",
    "week": 8,
    "title": "What is a class attribute useful for?",
    "code": "",
    "options": [
      "A guaranteed independent mutable list for each object",
      "A substitute for every method parameter",
      "A shared setting or constant associated with the type",
      "An automatically private field"
    ],
    "answer": 2,
    "explanation": "Class attributes provide defaults/shared information; mutable shared state requires care.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "concept"
  },
  {
    "id": "sh-w8-38",
    "topic": "week8",
    "week": 8,
    "title": "Why prefer a method that computes area from width and height over a stale stored area?",
    "code": "",
    "options": [
      "It guarantees constant physical accuracy",
      "It prevents all mutation automatically",
      "It makes multiplication unnecessary",
      "It derives the result from current dimensions"
    ],
    "answer": 3,
    "explanation": "A derived property avoids maintaining a redundant value after dimension changes.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "concept"
  },
  {
    "id": "sh-w8-39",
    "topic": "week8",
    "week": 8,
    "title": "Which distinguishes object identity from equal data?",
    "code": "",
    "options": [
      "Distinct objects can contain equal values",
      "Equal values require the same identity",
      "is compares every attribute recursively",
      "Identity changes on every attribute assignment"
    ],
    "answer": 0,
    "explanation": "Identity asks whether references name the same object; value comparisons ask a different question.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "concept"
  },
  {
    "id": "sh-w8-40",
    "topic": "week8",
    "week": 8,
    "title": "Which operation can expose mutable internal state?",
    "code": "",
    "options": [
      "Returning a numeric mean",
      "Returning the original internal list",
      "Returning a copied flat list",
      "Returning a descriptive string"
    ],
    "answer": 1,
    "explanation": "A caller holding the original list can mutate state without using the intended interface.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "concept"
  },
  {
    "id": "sh-w8-41",
    "topic": "week8",
    "week": 8,
    "title": "What does calling a bound method supply automatically?",
    "code": "",
    "options": [
      "Every optional argument",
      "A deep copy of the instance",
      "The instance receiver",
      "A new class definition"
    ],
    "answer": 2,
    "explanation": "The receiver is bound; remaining required arguments must still be supplied.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "concept"
  },
  {
    "id": "sh-w8-42",
    "topic": "week8",
    "week": 8,
    "title": "What is composition?",
    "code": "",
    "options": [
      "Every class inherits from all others",
      "A function can only return numbers",
      "A method changes its own source",
      "An object contains or uses another object"
    ],
    "answer": 3,
    "explanation": "Composition models a has-a relationship and can reuse behavior through contained objects.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "concept"
  },
  {
    "id": "sh-w8-43",
    "topic": "week8",
    "week": 8,
    "title": "A sensor object models a real sensor. Which claim is sound?",
    "code": "",
    "options": [
      "The model represents selected state and behavior under assumptions",
      "The object guarantees hardware accuracy",
      "The object eliminates calibration needs",
      "A successful constructor certifies physical safety"
    ],
    "answer": 0,
    "explanation": "Software models capture selected contracts; physical validity requires separate evidence.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "concept"
  },
  {
    "id": "sh-w8-44",
    "topic": "week8",
    "week": 8,
    "title": "Which method is a query rather than a state-changing command?",
    "code": "",
    "options": [
      "append_reading(x) adding a sample",
      "mean() returning the current average without modifying history",
      "reset() clearing the log",
      "set_limit(x) updating a limit"
    ],
    "answer": 1,
    "explanation": "A query observes state, while a command changes it under the declared contract.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "concept"
  },
  {
    "id": "sh-w8-45",
    "topic": "week8",
    "week": 8,
    "title": "What is a useful unit test for two new Counter objects?",
    "code": "",
    "options": [
      "Compare only their class names",
      "Advance both and inspect neither",
      "Advance one and verify the other remains unchanged",
      "Assume independent state because names differ"
    ],
    "answer": 2,
    "explanation": "This test directly detects accidentally shared mutable state.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "concept"
  },
  {
    "id": "sh-w8-46",
    "topic": "week8",
    "week": 8,
    "title": "Why document whether a method mutates the receiver?",
    "code": "",
    "options": [
      "Mutation always raises an exception",
      "Every method is required to mutate",
      "Documentation changes Python binding rules",
      "Callers need to predict subsequent state"
    ],
    "answer": 3,
    "explanation": "Mutation is observable behavior and therefore part of the interface contract.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "concept"
  },
  {
    "id": "sh-w8-47",
    "topic": "week8",
    "week": 8,
    "title": "What does obj.method without parentheses usually produce?",
    "code": "",
    "options": [
      "A bound method object",
      "The method’s returned numeric result",
      "A new instance of obj",
      "A syntax error"
    ],
    "answer": 0,
    "explanation": "Attribute access retrieves the method; a following call expression executes it.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "concept"
  },
  {
    "id": "sh-w8-48",
    "topic": "week8",
    "week": 8,
    "title": "An ordinary local variable x inside a method differs from self.x because:",
    "code": "",
    "options": [
      "Both names always reference the same storage",
      "x is local to the call while self.x belongs to the receiver",
      "self.x is always global",
      "x persists on the object automatically"
    ],
    "answer": 1,
    "explanation": "Attribute qualification explicitly accesses object state rather than the local namespace.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "concept"
  },
  {
    "id": "sh-w8-49",
    "topic": "week8",
    "week": 8,
    "title": "Which constructor signature avoids a shared mutable default?",
    "code": "",
    "options": [
      "def __init__(self, values=[]):",
      "def __init__(self, values={}):",
      "def __init__(self, values=None):",
      "def __init__(self, values=set()):"
    ],
    "answer": 2,
    "explanation": "Use None as a sentinel and create/copy the desired collection inside the constructor.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "concept"
  },
  {
    "id": "sh-w8-50",
    "topic": "week8",
    "week": 8,
    "title": "When is a small ordinary function often appropriate?",
    "code": "",
    "options": [
      "Every operation requires inheritance",
      "Whenever classes exist elsewhere in the project",
      "Only when Python cannot define a class",
      "The operation needs no persistent object state"
    ],
    "answer": 3,
    "explanation": "Choose the simpler abstraction matching the state and behavior needed.",
    "bank": "second-half",
    "source": "Week 8 · Original practice · Object-oriented programming",
    "mode": "concept"
  },
  {
    "id": "sh-w9-01",
    "topic": "week9",
    "week": 9,
    "title": "An inherited method — what is the complete printed output?",
    "code": "class Base:\n    def read(self):\n        return 5\nclass Child(Base):\n    pass\nprint(Child().read())",
    "options": [
      "5",
      "None",
      "0",
      "AttributeError"
    ],
    "answer": 0,
    "explanation": "Child inherits read because it supplies no override.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "python-output"
  },
  {
    "id": "sh-w9-02",
    "topic": "week9",
    "week": 9,
    "title": "Overriding a method — what is the complete printed output?",
    "code": "class Base:\n    def read(self):\n        return 5\nclass Child(Base):\n    def read(self):\n        return 9\nprint(Child().read())",
    "options": [
      "5",
      "9",
      "14",
      "None"
    ],
    "answer": 1,
    "explanation": "Method lookup selects the override defined by Child.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "python-output"
  },
  {
    "id": "sh-w9-03",
    "topic": "week9",
    "week": 9,
    "title": "Calling a base constructor — what is the complete printed output?",
    "code": "class Base:\n    def __init__(self, x):\n        self.x = x\nclass Child(Base):\n    def __init__(self, x):\n        super().__init__(x)\n        self.y = 2\nc = Child(7)\nprint(c.x + c.y)",
    "options": [
      "7",
      "2",
      "9",
      "AttributeError"
    ],
    "answer": 2,
    "explanation": "super initialization sets x before the child stores y.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "python-output"
  },
  {
    "id": "sh-w9-04",
    "topic": "week9",
    "week": 9,
    "title": "Subtype checks — what is the complete printed output?",
    "code": "class A:\n    pass\nclass B(A):\n    pass\nb = B()\nprint(isinstance(b, A), type(b) is A)",
    "options": [
      "True True",
      "False False",
      "False True",
      "True False"
    ],
    "answer": 3,
    "explanation": "A B instance is also an A instance, but its exact type is B.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "python-output"
  },
  {
    "id": "sh-w9-05",
    "topic": "week9",
    "week": 9,
    "title": "Dynamic dispatch — what is the complete printed output?",
    "code": "class Base:\n    def value(self):\n        return 2\n    def report(self):\n        return self.value() * 3\nclass Child(Base):\n    def value(self):\n        return 5\nprint(Child().report())",
    "options": [
      "15",
      "6",
      "5",
      "10"
    ],
    "answer": 0,
    "explanation": "The inherited report calls self.value, which resolves to the child override.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "python-output"
  },
  {
    "id": "sh-w9-06",
    "topic": "week9",
    "week": 9,
    "title": "An inherited setting — what is the complete printed output?",
    "code": "class A:\n    limit = 10\nclass B(A):\n    pass\nprint(B.limit)",
    "options": [
      "0",
      "10",
      "None",
      "AttributeError"
    ],
    "answer": 1,
    "explanation": "Class attribute lookup continues to the base class.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "python-output"
  },
  {
    "id": "sh-w9-07",
    "topic": "week9",
    "week": 9,
    "title": "Subclass shadowing — what is the complete printed output?",
    "code": "class A:\n    limit = 10\nclass B(A):\n    limit = 20\nprint(A.limit, B.limit)",
    "options": [
      "20 20",
      "10 10",
      "10 20",
      "20 10"
    ],
    "answer": 2,
    "explanation": "The subclass defines its own limit without changing A.limit.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "python-output"
  },
  {
    "id": "sh-w9-08",
    "topic": "week9",
    "week": 9,
    "title": "Validated state update — what is the complete printed output?",
    "code": "class Gauge:\n    def __init__(self):\n        self._x = 4\n    def set(self, x):\n        if x < 0:\n            raise ValueError(\"negative\")\n        self._x = x\ng = Gauge()\ntry:\n    g.set(-1)\nexcept ValueError:\n    pass\nprint(g._x)",
    "options": [
      "-1",
      "0",
      "None",
      "4"
    ],
    "answer": 3,
    "explanation": "Validation occurs before assignment, so the rejected update leaves the old state intact.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "python-output"
  },
  {
    "id": "sh-w9-09",
    "topic": "week9",
    "week": 9,
    "title": "A read-only property — what is the complete printed output?",
    "code": "class Meter:\n    def __init__(self, x):\n        self._x = x\n    @property\n    def value(self):\n        return self._x * 2\nprint(Meter(3).value)",
    "options": [
      "6",
      "3",
      "None",
      "TypeError"
    ],
    "answer": 0,
    "explanation": "Property access invokes the getter without a call at the access site.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "python-output"
  },
  {
    "id": "sh-w9-10",
    "topic": "week9",
    "week": 9,
    "title": "Public interface delegation — what is the complete printed output?",
    "code": "class Log:\n    def __init__(self):\n        self._xs = []\n    def add(self, x):\n        self._xs.append(x)\n    def count(self):\n        return len(self._xs)\nl = Log()\nl.add(2)\nl.add(8)\nprint(l.count())",
    "options": [
      "10",
      "2",
      "8",
      "0"
    ],
    "answer": 1,
    "explanation": "Two add calls append two entries; count reports entries rather than their sum.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "python-output"
  },
  {
    "id": "sh-w9-11",
    "topic": "week9",
    "week": 9,
    "title": "Base method extension — what is the complete printed output?",
    "code": "class A:\n    def text(self):\n        return \"A\"\nclass B(A):\n    def text(self):\n        return super().text() + \"B\"\nprint(B().text())",
    "options": [
      "B",
      "A",
      "AB",
      "BA"
    ],
    "answer": 2,
    "explanation": "The override extends the base result by concatenating B after A.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "python-output"
  },
  {
    "id": "sh-w9-12",
    "topic": "week9",
    "week": 9,
    "title": "A shared inherited list — what is the complete printed output?",
    "code": "class A:\n    tags = []\nclass B(A):\n    pass\nB.tags.append(\"x\")\nprint(A.tags)",
    "options": [
      "[]",
      "x",
      "AttributeError",
      "['x']"
    ],
    "answer": 3,
    "explanation": "B.tags finds the same list stored on A; append mutates that shared object.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "python-output"
  },
  {
    "id": "sh-w9-13",
    "topic": "week9",
    "week": 9,
    "title": "Rebinding an inherited attribute — what is the complete printed output?",
    "code": "class A:\n    limit = 10\nclass B(A):\n    pass\nB.limit = 30\nprint(A.limit, B.limit)",
    "options": [
      "10 30",
      "30 30",
      "10 10",
      "30 10"
    ],
    "answer": 0,
    "explanation": "Assignment creates B.limit, leaving the numeric A.limit binding unchanged.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "python-output"
  },
  {
    "id": "sh-w9-14",
    "topic": "week9",
    "week": 9,
    "title": "Per-instance override of a default — what is the complete printed output?",
    "code": "class Sensor:\n    unit = \"Pa\"\ns = Sensor()\ns.unit = \"bar\"\nSensor.unit = \"kPa\"\nprint(s.unit, Sensor().unit)",
    "options": [
      "kPa kPa",
      "bar kPa",
      "bar Pa",
      "Pa bar"
    ],
    "answer": 1,
    "explanation": "s has its own unit; the new instance reads the updated class default.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "python-output"
  },
  {
    "id": "sh-w9-15",
    "topic": "week9",
    "week": 9,
    "title": "An explicit equality policy — what is the complete printed output?",
    "code": "class Sample:\n    def __init__(self, x):\n        self.x = x\n    def __eq__(self, other):\n        return isinstance(other, Sample) and self.x == other.x\nprint(Sample(3) == Sample(3))",
    "options": [
      "False",
      "3",
      "True",
      "TypeError"
    ],
    "answer": 2,
    "explanation": "The supplied equality method compares the stored values for Sample instances.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "python-output"
  },
  {
    "id": "sh-w9-16",
    "topic": "week9",
    "week": 9,
    "title": "A copied interface result — what is the complete printed output?",
    "code": "class History:\n    def __init__(self):\n        self._v = [4, 5]\n    def values(self):\n        return tuple(self._v)\nh = History()\nprint(h.values())",
    "options": [
      "[4, 5]",
      "4 5",
      "None",
      "(4, 5)"
    ],
    "answer": 3,
    "explanation": "The interface returns an immutable tuple snapshot of the two entries.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "python-output"
  },
  {
    "id": "sh-w9-17",
    "topic": "week9",
    "week": 9,
    "title": "Duck typing — what is the complete printed output?",
    "code": "class A:\n    def read(self):\n        return 2\nclass B:\n    def read(self):\n        return 7\nprint(sum(x.read() for x in [A(), B()]))",
    "options": [
      "9",
      "2",
      "7",
      "TypeError"
    ],
    "answer": 0,
    "explanation": "Both objects support the required method even though neither inherits from the other.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "python-output"
  },
  {
    "id": "sh-w9-18",
    "topic": "week9",
    "week": 9,
    "title": "Base initialization omitted — what is the complete printed output?",
    "code": "class A:\n    def __init__(self):\n        self.x = 5\nclass B(A):\n    def __init__(self):\n        self.y = 2\nb = B()\nprint(hasattr(b, \"x\"))",
    "options": [
      "True",
      "False",
      "5",
      "AttributeError"
    ],
    "answer": 1,
    "explanation": "Defining B.__init__ replaces inherited initialization; it does not automatically call A.__init__.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "python-output"
  },
  {
    "id": "sh-w9-19",
    "topic": "week9",
    "week": 9,
    "title": "A subclass relationship — what is the complete printed output?",
    "code": "class A:\n    pass\nclass B(A):\n    pass\nprint(issubclass(B, A), issubclass(A, B))",
    "options": [
      "True True",
      "False True",
      "True False",
      "False False"
    ],
    "answer": 2,
    "explanation": "B derives from A, while the reverse relationship is absent.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "python-output"
  },
  {
    "id": "sh-w9-20",
    "topic": "week9",
    "week": 9,
    "title": "Shared counter through explicit class access — what is the complete printed output?",
    "code": "class Item:\n    created = 0\n    def __init__(self):\n        Item.created += 1\na = Item()\nb = Item()\nprint(Item.created)",
    "options": [
      "0",
      "1",
      "3",
      "2"
    ],
    "answer": 3,
    "explanation": "Each constructor increments the same class attribute explicitly.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "python-output"
  },
  {
    "id": "sh-w9-21",
    "topic": "week9",
    "week": 9,
    "title": "Name-mangled storage through a getter — what is the complete printed output?",
    "code": "class Box:\n    def __init__(self):\n        self.__x = 6\n    def get(self):\n        return self.__x\nprint(Box().get())",
    "options": [
      "6",
      "None",
      "0",
      "AttributeError"
    ],
    "answer": 0,
    "explanation": "The matching definition/access inside Box use the same name-mangled attribute.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "python-output"
  },
  {
    "id": "sh-w9-22",
    "topic": "week9",
    "week": 9,
    "title": "Information hiding by convention — what is the complete printed output?",
    "code": "class Box:\n    def __init__(self):\n        self._x = 3\nb = Box()\nb._x = 8\nprint(b._x)",
    "options": [
      "3",
      "8",
      "AttributeError",
      "None"
    ],
    "answer": 1,
    "explanation": "A single leading underscore is a nonpublic-use convention, not an enforced access barrier.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "python-output"
  },
  {
    "id": "sh-w9-23",
    "topic": "week9",
    "week": 9,
    "title": "Nested mutable snapshot — what is the complete printed output?",
    "code": "a = [[1], [2]]\nb = a.copy()\nb[0].append(9)\nprint(a)",
    "options": [
      "[[1], [2]]",
      "[[1], [2, 9]]",
      "[[1, 9], [2]]",
      "[[9], [2]]"
    ],
    "answer": 2,
    "explanation": "A shallow copy duplicates the outer list but shares its nested lists.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "python-output"
  },
  {
    "id": "sh-w9-24",
    "topic": "week9",
    "week": 9,
    "title": "Property with a setter — what is the complete printed output?",
    "code": "class Level:\n    def __init__(self):\n        self._x = 1\n    @property\n    def value(self):\n        return self._x\n    @value.setter\n    def value(self, x):\n        self._x = max(0, x)\nl = Level()\nl.value = -3\nprint(l.value)",
    "options": [
      "-3",
      "1",
      "AttributeError",
      "0"
    ],
    "answer": 3,
    "explanation": "Assignment invokes the setter, which clamps the stored value to zero.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "python-output"
  },
  {
    "id": "sh-w9-25",
    "topic": "week9",
    "week": 9,
    "title": "Polymorphic reporting — what is the complete printed output?",
    "code": "class A:\n    def unit(self):\n        return \"Pa\"\nclass B(A):\n    def unit(self):\n        return \"K\"\nprint([s.unit() for s in [A(), B()]])",
    "options": [
      "['Pa', 'K']",
      "['Pa', 'Pa']",
      "['K', 'K']",
      "Pa K"
    ],
    "answer": 0,
    "explanation": "Each call resolves against the actual receiver’s class.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "python-output"
  },
  {
    "id": "sh-w9-26",
    "topic": "week9",
    "week": 9,
    "title": "Which relationship best motivates inheritance?",
    "code": "",
    "options": [
      "Two classes happen to use the same variable name",
      "A subclass satisfies the base type’s public contract",
      "One object merely contains another",
      "Two files use the same editor"
    ],
    "answer": 1,
    "explanation": "Inheritance expresses a substitutable is-a relationship, not just incidental code overlap.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "concept"
  },
  {
    "id": "sh-w9-27",
    "topic": "week9",
    "week": 9,
    "title": "Information hiding primarily asks clients to depend on:",
    "code": "",
    "options": [
      "The exact internal attribute layout",
      "Every temporary local variable",
      "A stable public interface",
      "Name-mangled field spellings"
    ],
    "answer": 2,
    "explanation": "Internal representation can then change while documented client behavior remains stable.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "concept"
  },
  {
    "id": "sh-w9-28",
    "topic": "week9",
    "week": 9,
    "title": "A single leading underscore on an attribute means:",
    "code": "",
    "options": [
      "It is inaccessible to Python code",
      "It is automatically immutable",
      "It belongs to the base class only",
      "It is conventionally nonpublic"
    ],
    "answer": 3,
    "explanation": "Python uses naming conventions to signal intended use without enforcing strict privacy.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "concept"
  },
  {
    "id": "sh-w9-29",
    "topic": "week9",
    "week": 9,
    "title": "Double-leading-underscore name mangling mainly helps:",
    "code": "",
    "options": [
      "Reduce accidental name collisions in subclasses",
      "Encrypt stored data",
      "Prevent every external access",
      "Make values immutable"
    ],
    "answer": 0,
    "explanation": "Mangling changes attribute names to reduce accidental clashes; it is not a security boundary.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "concept"
  },
  {
    "id": "sh-w9-30",
    "topic": "week9",
    "week": 9,
    "title": "An overriding method should preserve:",
    "code": "",
    "options": [
      "Only the original source formatting",
      "The promises required by callers of the base interface",
      "Only the original variable names",
      "Every internal step exactly"
    ],
    "answer": 1,
    "explanation": "Substitutability depends on compatible observable behavior and contracts.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "concept"
  },
  {
    "id": "sh-w9-31",
    "topic": "week9",
    "week": 9,
    "title": "What does super() support in a simple single-inheritance override?",
    "code": "",
    "options": [
      "Creating a second independent receiver",
      "Calling every class in the file",
      "Delegating to the next class implementation",
      "Disabling dynamic dispatch everywhere"
    ],
    "answer": 2,
    "explanation": "It allows an override to reuse or extend inherited behavior using the same receiver.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "concept"
  },
  {
    "id": "sh-w9-32",
    "topic": "week9",
    "week": 9,
    "title": "Why validate a setter before assigning the new value?",
    "code": "",
    "options": [
      "Assignment must always precede comparison",
      "It makes invalid input impossible to supply",
      "It eliminates all need for tests",
      "A rejected update can leave valid prior state intact"
    ],
    "answer": 3,
    "explanation": "Performing checks first prevents partial mutation for the rejected condition.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "concept"
  },
  {
    "id": "sh-w9-33",
    "topic": "week9",
    "week": 9,
    "title": "Which is a risk of returning a mutable internal list directly?",
    "code": "",
    "options": [
      "Clients can bypass validation by mutating it",
      "Clients can no longer read it",
      "The list becomes automatically immutable",
      "The return statement always copies it"
    ],
    "answer": 0,
    "explanation": "The reference exposes the same storage the object uses internally.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "concept"
  },
  {
    "id": "sh-w9-34",
    "topic": "week9",
    "week": 9,
    "title": "A shallow copy of a list of lists:",
    "code": "",
    "options": [
      "Recursively copies every nested value",
      "Copies the outer list but shares the inner objects",
      "Creates only a second name for the same outer list",
      "Converts every inner list to a tuple"
    ],
    "answer": 1,
    "explanation": "Shallow copying reproduces one container level; nested mutable objects remain shared.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "concept"
  },
  {
    "id": "sh-w9-35",
    "topic": "week9",
    "week": 9,
    "title": "Which test checks polymorphism meaningfully?",
    "code": "",
    "options": [
      "Inspect only one class’s filename",
      "Rename every method before each call",
      "Pass different valid implementations through the same client operation",
      "Require exact type equality for all receivers"
    ],
    "answer": 2,
    "explanation": "A common client exercises whether each object honors the required interface.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "concept"
  },
  {
    "id": "sh-w9-36",
    "topic": "week9",
    "week": 9,
    "title": "Which is usually preferable to inheritance for a device containing a logger?",
    "code": "",
    "options": [
      "Making Logger a subclass of Device merely for containment",
      "Duplicating every logger method manually",
      "Using an unrelated global list without a contract",
      "Composition"
    ],
    "answer": 3,
    "explanation": "Containment is a has-a relationship; composition represents it directly.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "concept"
  },
  {
    "id": "sh-w9-37",
    "topic": "week9",
    "week": 9,
    "title": "If a subclass defines __init__, base initialization:",
    "code": "",
    "options": [
      "Must be invoked explicitly when needed",
      "Always runs automatically first",
      "Can never be called",
      "Runs twice automatically"
    ],
    "answer": 0,
    "explanation": "The subclass initializer replaces lookup of the inherited initializer unless it delegates.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "concept"
  },
  {
    "id": "sh-w9-38",
    "topic": "week9",
    "week": 9,
    "title": "isinstance(child, Base) can be True when:",
    "code": "",
    "options": [
      "Only when type(child) is exactly Base",
      "child is an instance of a subclass of Base",
      "Only when child has no attributes",
      "Only before __init__ runs"
    ],
    "answer": 1,
    "explanation": "isinstance recognizes subclass instances as instances of the base type.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "concept"
  },
  {
    "id": "sh-w9-39",
    "topic": "week9",
    "week": 9,
    "title": "Which policy avoids mixing an absolute-pressure model with a signed-reading model?",
    "code": "",
    "options": [
      "Assume every sensor rejects negative readings",
      "Assume every sensor accepts all negatives",
      "State and enforce each model’s own value contract",
      "Use the same label to hide the difference"
    ],
    "answer": 2,
    "explanation": "Different physical/data meanings can require different valid domains; interfaces must state them.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "concept"
  },
  {
    "id": "sh-w9-40",
    "topic": "week9",
    "week": 9,
    "title": "A property allows:",
    "code": "",
    "options": [
      "Guaranteed physical privacy",
      "Automatic deep copying of every result",
      "Multiple inheritance without classes",
      "Attribute-style access backed by getter/setter logic"
    ],
    "answer": 3,
    "explanation": "Properties can validate or derive values while preserving an attribute-style interface.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "concept"
  },
  {
    "id": "sh-w9-41",
    "topic": "week9",
    "week": 9,
    "title": "Which change most clearly breaks a documented base contract returning a numeric reading?",
    "code": "",
    "options": [
      "An override returns an unrelated string on valid input",
      "An override computes the same reading differently",
      "An override adds internal comments",
      "An override uses a different local variable name"
    ],
    "answer": 0,
    "explanation": "Callers relying on numeric behavior cannot substitute an unrelated string result safely.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "concept"
  },
  {
    "id": "sh-w9-42",
    "topic": "week9",
    "week": 9,
    "title": "Which shared class setting is safest as a simple default?",
    "code": "",
    "options": [
      "A mutable history list intended to be independent",
      "An immutable unit string",
      "A mutable per-instance cache shared accidentally",
      "A list of every object’s private readings without a policy"
    ],
    "answer": 1,
    "explanation": "Immutable defaults avoid accidental shared mutation, though instances may still shadow the binding.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "concept"
  },
  {
    "id": "sh-w9-43",
    "topic": "week9",
    "week": 9,
    "title": "Changing internal storage from a list to another representation should preserve:",
    "code": "",
    "options": [
      "All private attribute names for every client",
      "The original memory addresses",
      "Documented public behavior",
      "Every timing measurement exactly"
    ],
    "answer": 2,
    "explanation": "Encapsulation permits representation changes when interface promises remain intact.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "concept"
  },
  {
    "id": "sh-w9-44",
    "topic": "week9",
    "week": 9,
    "title": "What is method overriding?",
    "code": "",
    "options": [
      "A variable receives a larger numeric value",
      "A caller changes an unrelated local variable",
      "A module imports another module",
      "A subclass supplies an implementation with an inherited method name"
    ],
    "answer": 3,
    "explanation": "Method lookup can select the subclass implementation for the same public operation.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "concept"
  },
  {
    "id": "sh-w9-45",
    "topic": "week9",
    "week": 9,
    "title": "Which is a reasonable boundary for introductory inheritance practice?",
    "code": "",
    "options": [
      "A simple hierarchy with explicit contracts and tests",
      "Arbitrary multiple inheritance without a need",
      "Assuming inheritance automatically validates units",
      "Using private-field spellings as the public API"
    ],
    "answer": 0,
    "explanation": "A small hierarchy supports tracing and reasoning without unnecessary machinery.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "concept"
  },
  {
    "id": "sh-w9-46",
    "topic": "week9",
    "week": 9,
    "title": "A method returns tuple(self._values). What does this protect for a flat numeric history?",
    "code": "",
    "options": [
      "Every nested object is deeply copied",
      "The caller cannot append into the stored list through that tuple",
      "The caller can never inspect values",
      "All future histories become immutable"
    ],
    "answer": 1,
    "explanation": "A tuple snapshot prevents direct list mutation through the returned container; nested objects require separate consideration.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "concept"
  },
  {
    "id": "sh-w9-47",
    "topic": "week9",
    "week": 9,
    "title": "A subclass strengthens a valid-input precondition unexpectedly. Why is that risky?",
    "code": "",
    "options": [
      "It always improves substitutability",
      "It guarantees faster execution",
      "Previously valid base clients may now fail",
      "It changes only comments"
    ],
    "answer": 2,
    "explanation": "A substitute should accept the inputs promised by the interface it claims to implement.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "concept"
  },
  {
    "id": "sh-w9-48",
    "topic": "week9",
    "week": 9,
    "title": "When two unrelated types both implement read(), a client using only read() illustrates:",
    "code": "",
    "options": [
      "Mandatory shared inheritance",
      "Name mangling",
      "Deep copying",
      "Interface-based duck typing"
    ],
    "answer": 3,
    "explanation": "The client relies on the supported operation rather than an exact class identity.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "concept"
  },
  {
    "id": "sh-w9-49",
    "topic": "week9",
    "week": 9,
    "title": "Which state test is especially useful after a setter raises an exception?",
    "code": "",
    "options": [
      "Verify the original valid state remains as specified",
      "Only print the exception class name",
      "Always force the state to None",
      "Ignore the object afterward"
    ],
    "answer": 0,
    "explanation": "Failure behavior includes whether and how state changes; this must match the documented contract.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "concept"
  },
  {
    "id": "sh-w9-50",
    "topic": "week9",
    "week": 9,
    "title": "Why avoid directly accessing a subclass’s mangled base field in ordinary client code?",
    "code": "",
    "options": [
      "Python syntax forbids every such access",
      "It couples the client to implementation details",
      "It guarantees encryption",
      "It is always faster than a public method"
    ],
    "answer": 1,
    "explanation": "Using the public interface preserves flexibility and avoids depending on internal mangled names.",
    "bank": "second-half",
    "source": "Week 9 · Original practice · Classes and inheritance",
    "mode": "concept"
  },
  {
    "id": "sh-w10-01",
    "topic": "week10",
    "week": 10,
    "title": "A linear count — what is the complete printed output?",
    "code": "count = 0\nfor _ in range(7):\n    count += 1\nprint(count)",
    "options": [
      "6",
      "8",
      "7",
      "1"
    ],
    "answer": 2,
    "explanation": "One increment occurs for each of the seven iterations.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "python-output"
  },
  {
    "id": "sh-w10-02",
    "topic": "week10",
    "week": 10,
    "title": "Independent nested loops — what is the complete printed output?",
    "code": "count = 0\nfor i in range(3):\n    for j in range(4):\n        count += 1\nprint(count)",
    "options": [
      "7",
      "3",
      "4",
      "12"
    ],
    "answer": 3,
    "explanation": "Every one of three outer iterations performs four inner increments.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "python-output"
  },
  {
    "id": "sh-w10-03",
    "topic": "week10",
    "week": 10,
    "title": "A triangular loop — what is the complete printed output?",
    "code": "count = 0\nfor i in range(5):\n    for j in range(i):\n        count += 1\nprint(count)",
    "options": [
      "10",
      "25",
      "15",
      "5"
    ],
    "answer": 0,
    "explanation": "The row lengths are 0, 1, 2, 3 and 4, summing to 10.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "python-output"
  },
  {
    "id": "sh-w10-04",
    "topic": "week10",
    "week": 10,
    "title": "Sequential scans — what is the complete printed output?",
    "code": "n = 6\ncount = 0\nfor _ in range(n):\n    count += 1\nfor _ in range(n):\n    count += 1\nprint(count)",
    "options": [
      "36",
      "12",
      "6",
      "7"
    ],
    "answer": 1,
    "explanation": "The loops execute sequentially, so their counts add rather than multiply.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "python-output"
  },
  {
    "id": "sh-w10-05",
    "topic": "week10",
    "week": 10,
    "title": "Repeated halving — what is the complete printed output?",
    "code": "n = 32\ncount = 0\nwhile n > 1:\n    n //= 2\n    count += 1\nprint(count)",
    "options": [
      "32",
      "16",
      "5",
      "6"
    ],
    "answer": 2,
    "explanation": "The successive values are 16, 8, 4, 2 and 1.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "python-output"
  },
  {
    "id": "sh-w10-06",
    "topic": "week10",
    "week": 10,
    "title": "Repeated doubling — what is the complete printed output?",
    "code": "i = 1\ncount = 0\nwhile i < 20:\n    i *= 2\n    count += 1\nprint(count)",
    "options": [
      "4",
      "20",
      "10",
      "5"
    ],
    "answer": 3,
    "explanation": "The five updates produce 2, 4, 8, 16 and 32, then the condition fails.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "python-output"
  },
  {
    "id": "sh-w10-07",
    "topic": "week10",
    "week": 10,
    "title": "Early termination count — what is the complete printed output?",
    "code": "checks = 0\nfor x in [4, 8, 12, 16]:\n    checks += 1\n    if x == 8:\n        break\nprint(checks)",
    "options": [
      "2",
      "1",
      "4",
      "3"
    ],
    "answer": 0,
    "explanation": "The match occurs on the second item and break prevents later checks.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "python-output"
  },
  {
    "id": "sh-w10-08",
    "topic": "week10",
    "week": 10,
    "title": "Absent target count — what is the complete printed output?",
    "code": "checks = 0\nfor x in [4, 8, 12, 16]:\n    checks += 1\n    if x == 9:\n        break\nprint(checks)",
    "options": [
      "0",
      "4",
      "2",
      "3"
    ],
    "answer": 1,
    "explanation": "No item matches, so the loop examines all four entries.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "python-output"
  },
  {
    "id": "sh-w10-09",
    "topic": "week10",
    "week": 10,
    "title": "A fixed inner loop — what is the complete printed output?",
    "code": "count = 0\nfor i in range(8):\n    for j in range(3):\n        count += 1\nprint(count)",
    "options": [
      "11",
      "64",
      "24",
      "8"
    ],
    "answer": 2,
    "explanation": "The fixed three-step inner loop gives exactly 3 * 8 increments.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "python-output"
  },
  {
    "id": "sh-w10-10",
    "topic": "week10",
    "week": 10,
    "title": "A constant calculation — what is the complete printed output?",
    "code": "def f(xs):\n    return xs[0] + xs[-1]\nprint(f([2, 9, 4, 6]))",
    "options": [
      "21",
      "2",
      "6",
      "8"
    ],
    "answer": 3,
    "explanation": "Only the first and last entries are added; the middle entries are not scanned.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "python-output"
  },
  {
    "id": "sh-w10-11",
    "topic": "week10",
    "week": 10,
    "title": "Summing odd work — what is the complete printed output?",
    "code": "n = 4\ncount = 0\nfor i in range(n):\n    count += 2 * i + 1\nprint(count)",
    "options": [
      "16",
      "10",
      "8",
      "15"
    ],
    "answer": 0,
    "explanation": "The odd numbers 1 + 3 + 5 + 7 sum to 16 = n squared.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "python-output"
  },
  {
    "id": "sh-w10-12",
    "topic": "week10",
    "week": 10,
    "title": "Skipping alternate items — what is the complete printed output?",
    "code": "print(len(range(0, 11, 2)))",
    "options": [
      "5",
      "6",
      "11",
      "2"
    ],
    "answer": 1,
    "explanation": "The range contains 0, 2, 4, 6, 8 and 10.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "python-output"
  },
  {
    "id": "sh-w10-13",
    "topic": "week10",
    "week": 10,
    "title": "A shrinking loop — what is the complete printed output?",
    "code": "i = 10\nc = 0\nwhile i > 0:\n    i -= 3\n    c += 1\nprint(c)",
    "options": [
      "3",
      "10",
      "4",
      "7"
    ],
    "answer": 2,
    "explanation": "The values after updates are 7, 4, 1 and -2; four iterations are needed.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "python-output"
  },
  {
    "id": "sh-w10-14",
    "topic": "week10",
    "week": 10,
    "title": "Products versus sums — what is the complete printed output?",
    "code": "n = 4\nprint(n * n, n + n)",
    "options": [
      "8 16",
      "16 16",
      "8 8",
      "16 8"
    ],
    "answer": 3,
    "explanation": "Nested n-by-n work has n squared steps; two separate n-step scans have 2n.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "python-output"
  },
  {
    "id": "sh-w10-15",
    "topic": "week10",
    "week": 10,
    "title": "Observed doubling ratio — what is the complete printed output?",
    "code": "t_n, t_2n = 0.25, 1.0\nprint(t_2n / t_n)",
    "options": [
      "4.0",
      "2.0",
      "0.25",
      "0.75"
    ],
    "answer": 0,
    "explanation": "The larger observed duration is four times the smaller, consistent with but not proof of quadratic scaling.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "python-output"
  },
  {
    "id": "sh-w10-16",
    "topic": "week10",
    "week": 10,
    "title": "Batch normalization — what is the complete printed output?",
    "code": "total_seconds = 0.6\ncalls = 3\nprint(f\"{total_seconds / calls:.2f}\")",
    "options": [
      "1.80",
      "0.20",
      "0.60",
      "3.00"
    ],
    "answer": 1,
    "explanation": "A per-call estimate divides the measured batch duration by the number of calls.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "python-output"
  },
  {
    "id": "sh-w10-17",
    "topic": "week10",
    "week": 10,
    "title": "Maximum scan updates — what is the complete printed output?",
    "code": "best = -1\nupdates = 0\nfor x in [3, 2, 5, 4]:\n    if x > best:\n        best = x\n        updates += 1\nprint(best, updates)",
    "options": [
      "5 4",
      "4 2",
      "5 2",
      "5 3"
    ],
    "answer": 2,
    "explanation": "All values are checked, but only 3 and 5 exceed the running maximum.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "python-output"
  },
  {
    "id": "sh-w10-18",
    "topic": "week10",
    "week": 10,
    "title": "Linear function at two sizes — what is the complete printed output?",
    "code": "def work(n):\n    return 3 * n + 2\nprint(work(10), work(20))",
    "options": [
      "32 64",
      "30 60",
      "12 22",
      "32 62"
    ],
    "answer": 3,
    "explanation": "Substitution gives 32 and 62; the constant term means the finite-size ratio is not exactly two.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "python-output"
  },
  {
    "id": "sh-w10-19",
    "topic": "week10",
    "week": 10,
    "title": "Pair enumeration — what is the complete printed output?",
    "code": "n = 4\npairs = [(i, j) for i in range(n) for j in range(i + 1, n)]\nprint(len(pairs))",
    "options": [
      "6",
      "16",
      "8",
      "4"
    ],
    "answer": 0,
    "explanation": "There are n(n-1)/2 unordered distinct pairs, here 4 * 3 / 2.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "python-output"
  },
  {
    "id": "sh-w10-20",
    "topic": "week10",
    "week": 10,
    "title": "Counting comparisons in a scan — what is the complete printed output?",
    "code": "xs = [6, 2, 8, 1, 5]\nbest = xs[0]\nc = 0\nfor x in xs[1:]:\n    c += 1\n    if x < best:\n        best = x\nprint(best, c)",
    "options": [
      "1 5",
      "1 4",
      "2 4",
      "1 1"
    ],
    "answer": 1,
    "explanation": "The first value initializes best; the remaining four require one comparison each.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "python-output"
  },
  {
    "id": "sh-w10-21",
    "topic": "week10",
    "week": 10,
    "title": "Two growing dimensions — what is the complete printed output?",
    "code": "rows, cols = 3, 5\nprint(sum(1 for r in range(rows) for c in range(cols)))",
    "options": [
      "8",
      "25",
      "15",
      "9"
    ],
    "answer": 2,
    "explanation": "The rectangular traversal visits every row-column pair once.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "python-output"
  },
  {
    "id": "sh-w10-22",
    "topic": "week10",
    "week": 10,
    "title": "Work after a break — what is the complete printed output?",
    "code": "count = 0\nfor i in range(100):\n    count += 1\n    break\nprint(count)",
    "options": [
      "100",
      "0",
      "99",
      "1"
    ],
    "answer": 3,
    "explanation": "The unconditional break stops the loop on its first iteration.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "python-output"
  },
  {
    "id": "sh-w10-23",
    "topic": "week10",
    "week": 10,
    "title": "A logarithmic trace — what is the complete printed output?",
    "code": "n = 81\nc = 0\nwhile n > 1:\n    n //= 3\n    c += 1\nprint(c)",
    "options": [
      "4",
      "3",
      "27",
      "81"
    ],
    "answer": 0,
    "explanation": "The updates are 27, 9, 3 and 1: four divisions by three.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "python-output"
  },
  {
    "id": "sh-w10-24",
    "topic": "week10",
    "week": 10,
    "title": "A dominant term at a finite size — what is the complete printed output?",
    "code": "n = 10\nprint(n*n + 3*n + 5)",
    "options": [
      "100",
      "135",
      "130",
      "115"
    ],
    "answer": 1,
    "explanation": "The exact count retains every term even though n squared dominates asymptotically.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "python-output"
  },
  {
    "id": "sh-w10-25",
    "topic": "week10",
    "week": 10,
    "title": "Worst of several counts — what is the complete printed output?",
    "code": "counts = [1, 4, 7, 10]\nprint(max(counts), sum(counts))",
    "options": [
      "22 10",
      "10 10",
      "10 22",
      "4 22"
    ],
    "answer": 2,
    "explanation": "The maximum describes the largest count in this set; the sum totals all four observed cases.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "python-output"
  },
  {
    "id": "sh-w10-26",
    "topic": "week10",
    "week": 10,
    "title": "Under a bounded-scalar model, two sequential n-item scans have tight growth:",
    "code": "",
    "options": [
      "Theta(n squared)",
      "Theta(log n)",
      "Theta(1)",
      "Theta(n)"
    ],
    "answer": 3,
    "explanation": "The counts add to 2n, and constant factors do not change tight asymptotic growth.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "concept"
  },
  {
    "id": "sh-w10-27",
    "topic": "week10",
    "week": 10,
    "title": "Two fully nested n-iteration loops with constant work per pair have tight growth:",
    "code": "",
    "options": [
      "Theta(n squared)",
      "Theta(n)",
      "Theta(log n)",
      "Theta(1)"
    ],
    "answer": 0,
    "explanation": "There are n times n iterations of the selected constant-cost operation.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "concept"
  },
  {
    "id": "sh-w10-28",
    "topic": "week10",
    "week": 10,
    "title": "What must be defined before giving a meaningful complexity claim?",
    "code": "",
    "options": [
      "Only the function’s name",
      "Input size, input case, operation model, and output contract",
      "Only the computer’s brand",
      "Only the source line count"
    ],
    "answer": 1,
    "explanation": "Complexity measures selected work as a function of a stated size and case under assumptions.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "concept"
  },
  {
    "id": "sh-w10-29",
    "topic": "week10",
    "week": 10,
    "title": "Big-O describes:",
    "code": "",
    "options": [
      "An exact runtime in seconds",
      "A guarantee of best possible performance",
      "An asymptotic upper bound on growth",
      "Only the worst input automatically"
    ],
    "answer": 2,
    "explanation": "Big-O is a bound; the case and cost function being bounded must still be stated.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "concept"
  },
  {
    "id": "sh-w10-30",
    "topic": "week10",
    "week": 10,
    "title": "Which is the tight class of 8n + 30?",
    "code": "",
    "options": [
      "Theta(n squared)",
      "Theta(log n)",
      "Theta(1)",
      "Theta(n)"
    ],
    "answer": 3,
    "explanation": "For sufficiently large n, this function grows proportionally to n.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "concept"
  },
  {
    "id": "sh-w10-31",
    "topic": "week10",
    "week": 10,
    "title": "Which is the tight class of n squared + 100n?",
    "code": "",
    "options": [
      "Theta(n squared)",
      "Theta(n)",
      "Theta(n cubed)",
      "Theta(log n)"
    ],
    "answer": 0,
    "explanation": "The quadratic term eventually dominates the lower-order linear term.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "concept"
  },
  {
    "id": "sh-w10-32",
    "topic": "week10",
    "week": 10,
    "title": "An integer loop starts with n > 1 and repeats n //= 2 while n > 1. Its iteration growth is:",
    "code": "",
    "options": [
      "Theta(n)",
      "Theta(log n)",
      "Theta(n squared)",
      "Theta(1)"
    ],
    "answer": 1,
    "explanation": "Integer halving reaches 1 after a number of iterations proportional to the logarithm of the initial value.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "concept"
  },
  {
    "id": "sh-w10-33",
    "topic": "week10",
    "week": 10,
    "title": "For linear search in a nonempty list, the best case is:",
    "code": "",
    "options": [
      "A missing target",
      "A match at the final item",
      "A match at the first item",
      "Always n comparisons"
    ],
    "answer": 2,
    "explanation": "A first-position match requires a constant number of examined items.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "concept"
  },
  {
    "id": "sh-w10-34",
    "topic": "week10",
    "week": 10,
    "title": "For ordinary linear search, an absent target requires:",
    "code": "",
    "options": [
      "Examining only the middle item",
      "No comparisons",
      "Sorting is automatically performed",
      "Examining every item in the worst case"
    ],
    "answer": 3,
    "explanation": "Without ordering or an index, an unchecked item could still contain the target.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "concept"
  },
  {
    "id": "sh-w10-35",
    "topic": "week10",
    "week": 10,
    "title": "Why can an algorithm with better asymptotic growth be slower on small inputs?",
    "code": "",
    "options": [
      "Constants, overheads and input sizes affect finite runtimes",
      "Asymptotic analysis forbids small inputs",
      "Big-O gives exact seconds",
      "Small programs ignore hardware"
    ],
    "answer": 0,
    "explanation": "Growth predicts trends under a model, while overheads matter at actual finite sizes.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "concept"
  },
  {
    "id": "sh-w10-36",
    "topic": "week10",
    "week": 10,
    "title": "Which doubling ratio is suggested by quadratic work for large n?",
    "code": "",
    "options": [
      "Approximately 1",
      "Approximately 4",
      "Approximately 2",
      "Approximately 8"
    ],
    "answer": 1,
    "explanation": "Replacing n by 2n multiplies n squared by four under the same dominant-cost model.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "concept"
  },
  {
    "id": "sh-w10-37",
    "topic": "week10",
    "week": 10,
    "title": "Which doubling ratio is suggested by linear work dominated by its leading term?",
    "code": "",
    "options": [
      "Approximately 4",
      "Approximately 8",
      "Approximately 2",
      "Approximately 0.5"
    ],
    "answer": 2,
    "explanation": "The leading n term doubles; fixed overhead can distort measurements at smaller sizes.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "concept"
  },
  {
    "id": "sh-w10-38",
    "topic": "week10",
    "week": 10,
    "title": "Why repeat timing trials?",
    "code": "",
    "options": [
      "To force every duration to be identical",
      "To prove the algorithm optimal",
      "To change the expected output",
      "To reveal variability and support a more stable summary"
    ],
    "answer": 3,
    "explanation": "Scheduling, caches and other environmental factors can vary from trial to trial.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "concept"
  },
  {
    "id": "sh-w10-39",
    "topic": "week10",
    "week": 10,
    "title": "Which belongs outside a timing interval when measuring only the computation?",
    "code": "",
    "options": [
      "Unrelated file loading and display setup",
      "The computation being compared",
      "The required result construction",
      "Every operation that favors one implementation"
    ],
    "answer": 0,
    "explanation": "The timing boundary must match the stated measurement question and apply equally.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "concept"
  },
  {
    "id": "sh-w10-40",
    "topic": "week10",
    "week": 10,
    "title": "What distinguishes an operation-count model from a timing measurement?",
    "code": "",
    "options": [
      "Counts are always seconds",
      "Counts describe selected work; timings also depend on the execution environment",
      "Timings are independent of hardware",
      "Counts remove the need to state assumptions"
    ],
    "answer": 1,
    "explanation": "Both are useful evidence but answer different questions and have different limitations.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "concept"
  },
  {
    "id": "sh-w10-41",
    "topic": "week10",
    "week": 10,
    "title": "Which sorting of common growth classes is increasing for sufficiently large n?",
    "code": "",
    "options": [
      "n squared, n, log n, 1, n log n",
      "log n, 1, n squared, n, n log n",
      "1, log n, n, n log n, n squared",
      "n, n log n, 1, log n, n squared"
    ],
    "answer": 2,
    "explanation": "This is the standard asymptotic ordering; finite small values need not show every separation.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "concept"
  },
  {
    "id": "sh-w10-42",
    "topic": "week10",
    "week": 10,
    "title": "A fixed 20-step inner loop inside an n-step outer loop gives:",
    "code": "",
    "options": [
      "Theta(n squared)",
      "Theta(log n)",
      "Theta(20 to the n)",
      "Theta(n)"
    ],
    "answer": 3,
    "explanation": "The factor 20 is constant with respect to n.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "concept"
  },
  {
    "id": "sh-w10-43",
    "topic": "week10",
    "week": 10,
    "title": "A triangular pair loop with n(n-1)/2 iterations has tight growth:",
    "code": "",
    "options": [
      "Theta(n squared)",
      "Theta(n)",
      "Theta(log n)",
      "Theta(1)"
    ],
    "answer": 0,
    "explanation": "The leading quadratic term remains after dropping constants and lower-order terms.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "concept"
  },
  {
    "id": "sh-w10-44",
    "topic": "week10",
    "week": 10,
    "title": "Why is source line count a poor runtime model?",
    "code": "",
    "options": [
      "Every line costs exactly one operation",
      "One line may scan, copy, sort, or call substantial work",
      "Short code always runs fastest",
      "Comments dominate runtime"
    ],
    "answer": 1,
    "explanation": "Language constructs can hide work whose cost depends on input size.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "concept"
  },
  {
    "id": "sh-w10-45",
    "topic": "week10",
    "week": 10,
    "title": "Which claim about O(n squared) and Theta(n) is correct?",
    "code": "",
    "options": [
      "They always state the same tight growth",
      "O(n squared) proves at least quadratic growth",
      "A linear function can also satisfy the looser O(n squared) bound",
      "Theta(n) specifies exact seconds"
    ],
    "answer": 2,
    "explanation": "An upper bound need not be tight; use Theta when stating matching upper and lower growth.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "concept"
  },
  {
    "id": "sh-w10-46",
    "topic": "week10",
    "week": 10,
    "title": "What does an average-case claim require?",
    "code": "",
    "options": [
      "Only a single convenient example",
      "The maximum measured time",
      "Ignoring input order",
      "A stated distribution or probabilistic assumptions about inputs"
    ],
    "answer": 3,
    "explanation": "Expected work depends on how input cases are weighted.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "concept"
  },
  {
    "id": "sh-w10-47",
    "topic": "week10",
    "week": 10,
    "title": "Which operation is constant-time under the ordinary bounded-value list model?",
    "code": "",
    "options": [
      "Accessing xs[i] at a valid known index",
      "Copying all of xs",
      "Summing xs",
      "Checking an absent value by list membership"
    ],
    "answer": 0,
    "explanation": "Direct index access does not scan the list; the other operations can visit n entries.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "concept"
  },
  {
    "id": "sh-w10-48",
    "topic": "week10",
    "week": 10,
    "title": "When timing a mutating sort repeatedly, what is necessary?",
    "code": "",
    "options": [
      "Reuse already sorted data while calling it random every time",
      "Restore equivalent input conditions for each trial",
      "Change the required order between trials",
      "Exclude all comparisons from the interval"
    ],
    "answer": 1,
    "explanation": "Later trials otherwise operate on different input cases and can bias the comparison.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "concept"
  },
  {
    "id": "sh-w10-49",
    "topic": "week10",
    "week": 10,
    "title": "A quadratic model fits three measurements. What can be concluded?",
    "code": "",
    "options": [
      "All larger sizes must follow exactly",
      "Every machine will have the same duration",
      "The measurements are consistent with that model over the tested range",
      "The algorithm is mathematically proved quadratic"
    ],
    "answer": 2,
    "explanation": "Limited timing observations support a range-limited inference, not a universal proof.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "concept"
  },
  {
    "id": "sh-w10-50",
    "topic": "week10",
    "week": 10,
    "title": "Why state a bounded-numeric classroom model?",
    "code": "",
    "options": [
      "Python integers have a fixed overflow limit",
      "All integer operations are physically instantaneous",
      "It removes every hidden list cost",
      "Arbitrary-precision numeric operations can have value-dependent costs"
    ],
    "answer": 3,
    "explanation": "Treating scalar arithmetic as constant cost is an explicit simplifying assumption.",
    "bank": "second-half",
    "source": "Week 10 · Original practice · Program efficiency I",
    "mode": "concept"
  },
  {
    "id": "sh-w11-01",
    "topic": "week11",
    "week": 11,
    "title": "Copies retained by slicing — what is the complete printed output?",
    "code": "xs = [1, 2, 3, 4]\nys = xs[1:]\nys[0] = 9\nprint(xs, ys)",
    "options": [
      "[1, 2, 3, 4] [9, 3, 4]",
      "[1, 9, 3, 4] [9, 3, 4]",
      "[1, 2, 3, 4] [2, 3, 4]",
      "[9, 3, 4] [9, 3, 4]"
    ],
    "answer": 0,
    "explanation": "Slicing creates a new outer list; replacing a scalar entry does not alter the original list.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "python-output"
  },
  {
    "id": "sh-w11-02",
    "topic": "week11",
    "week": 11,
    "title": "Front removal shifts the sequence — what is the complete printed output?",
    "code": "xs = [4, 5, 6]\ny = xs.pop(0)\nprint(y, xs)",
    "options": [
      "6 [4, 5]",
      "4 [5, 6]",
      "0 [4, 5, 6]",
      "4 [4, 5, 6]"
    ],
    "answer": 1,
    "explanation": "pop(0) returns the first element and removes it, shifting remaining elements left.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "python-output"
  },
  {
    "id": "sh-w11-03",
    "topic": "week11",
    "week": 11,
    "title": "Fresh list concatenation — what is the complete printed output?",
    "code": "xs = [1, 2]\nys = xs + [3]\nprint(xs, ys)",
    "options": [
      "[1, 2, 3] [1, 2, 3]",
      "[1, 2] [3]",
      "[1, 2] [1, 2, 3]",
      "None [1, 2, 3]"
    ],
    "answer": 2,
    "explanation": "+ constructs a new list containing both sequences and leaves xs unchanged.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "python-output"
  },
  {
    "id": "sh-w11-04",
    "topic": "week11",
    "week": 11,
    "title": "Every complete window — what is the complete printed output?",
    "code": "xs = [2, 4, 8, 10]\nw = 2\nprint([sum(xs[i:i+w]) / w for i in range(len(xs)-w+1)])",
    "options": [
      "[3.0, 6.0]",
      "[2.0, 4.0, 8.0, 10.0]",
      "[3.0, 9.0]",
      "[3.0, 6.0, 9.0]"
    ],
    "answer": 3,
    "explanation": "A width-two window starts at 0, 1 and 2; all three complete windows are returned.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "python-output"
  },
  {
    "id": "sh-w11-05",
    "topic": "week11",
    "week": 11,
    "title": "Running subtotal update — what is the complete printed output?",
    "code": "total = 2 + 4 + 8\ntotal += 10 - 2\nprint(total)",
    "options": [
      "22",
      "14",
      "24",
      "20"
    ],
    "answer": 0,
    "explanation": "Drop the outgoing 2 and add the incoming 10 to update the subtotal.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "python-output"
  },
  {
    "id": "sh-w11-06",
    "topic": "week11",
    "week": 11,
    "title": "Recursive factorial count — what is the complete printed output?",
    "code": "calls = 0\ndef f(n):\n    global calls\n    calls += 1\n    return 1 if n == 0 else n * f(n-1)\nprint(f(4), calls)",
    "options": [
      "24 4",
      "24 5",
      "24 24",
      "5 24"
    ],
    "answer": 1,
    "explanation": "The calls are for n = 4, 3, 2, 1 and 0, including the base case.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "python-output"
  },
  {
    "id": "sh-w11-07",
    "topic": "week11",
    "week": 11,
    "title": "Fibonacci convention — what is the complete printed output?",
    "code": "def f(n):\n    return 1 if n < 2 else f(n-1) + f(n-2)\nprint([f(i) for i in range(6)])",
    "options": [
      "[0, 1, 1, 2, 3, 5]",
      "[1, 2, 3, 5, 8, 13]",
      "[1, 1, 2, 3, 5, 8]",
      "[1, 1, 1, 1, 1, 1]"
    ],
    "answer": 2,
    "explanation": "This explicitly uses F(0) = F(1) = 1, then adds the two preceding values.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "python-output"
  },
  {
    "id": "sh-w11-08",
    "topic": "week11",
    "week": 11,
    "title": "Naive recursive calls — what is the complete printed output?",
    "code": "calls = 0\ndef f(n):\n    global calls\n    calls += 1\n    return 1 if n < 2 else f(n-1) + f(n-2)\nprint(f(4), calls)",
    "options": [
      "5 5",
      "3 9",
      "5 4",
      "5 9"
    ],
    "answer": 3,
    "explanation": "The call-count recurrence is C(0)=C(1)=1 and C(n)=1+C(n-1)+C(n-2), giving C(4)=9.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "python-output"
  },
  {
    "id": "sh-w11-09",
    "topic": "week11",
    "week": 11,
    "title": "A warm cache — what is the complete printed output?",
    "code": "cache = {0: 1, 1: 1, 2: 2, 3: 3}\nhits = 0\ndef f(n):\n    global hits\n    if n in cache:\n        hits += 1\n        return cache[n]\n    cache[n] = f(n-1) + f(n-2)\n    return cache[n]\nprint(f(3), hits)",
    "options": [
      "3 1",
      "3 0",
      "3 3",
      "2 1"
    ],
    "answer": 0,
    "explanation": "The requested result is already cached, so one lookup hit avoids recursive expansion.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "python-output"
  },
  {
    "id": "sh-w11-10",
    "topic": "week11",
    "week": 11,
    "title": "Full-width window — what is the complete printed output?",
    "code": "xs = [2, 4, 6]\nw = len(xs)\nprint([sum(xs[i:i+w])/w for i in range(len(xs)-w+1)])",
    "options": [
      "[]",
      "[4.0]",
      "[2.0, 4.0, 6.0]",
      "4.0"
    ],
    "answer": 1,
    "explanation": "There is exactly one complete window when width equals the record length.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "python-output"
  },
  {
    "id": "sh-w11-11",
    "topic": "week11",
    "week": 11,
    "title": "Width-one windows — what is the complete printed output?",
    "code": "xs = [3, 7, 9]\nprint([sum(xs[i:i+1])/1 for i in range(len(xs))])",
    "options": [
      "[3, 7]",
      "[19.0]",
      "[3.0, 7.0, 9.0]",
      "[]"
    ],
    "answer": 2,
    "explanation": "Each complete window contains one value, and / produces float results.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "python-output"
  },
  {
    "id": "sh-w11-12",
    "topic": "week11",
    "week": 11,
    "title": "Scalar work in a chain — what is the complete printed output?",
    "code": "def total(xs):\n    if not xs:\n        return 0\n    return xs[0] + total(xs[1:])\nprint(total([2, 3, 5]))",
    "options": [
      "5",
      "0",
      "235",
      "10"
    ],
    "answer": 3,
    "explanation": "The returned sum is correct for this input, while the slices introduce additional copying work.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "python-output"
  },
  {
    "id": "sh-w11-13",
    "topic": "week11",
    "week": 11,
    "title": "Repeated prefix lengths — what is the complete printed output?",
    "code": "n = 5\nprint(sum(len(list(range(i))) for i in range(n)))",
    "options": [
      "10",
      "25",
      "15",
      "5"
    ],
    "answer": 0,
    "explanation": "The constructed lengths are 0 through 4; total copied/created entries sum to 10.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "python-output"
  },
  {
    "id": "sh-w11-14",
    "topic": "week11",
    "week": 11,
    "title": "Retained slice lengths along a chain — what is the complete printed output?",
    "code": "n = 4\nprint(sum(range(n+1)))",
    "options": [
      "4",
      "10",
      "16",
      "6"
    ],
    "answer": 1,
    "explanation": "Keeping lists of lengths 4, 3, 2, 1 and 0 retains ten element slots in this simple accounting.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "python-output"
  },
  {
    "id": "sh-w11-15",
    "topic": "week11",
    "week": 11,
    "title": "A cached prefix — what is the complete printed output?",
    "code": "cache = {0: 1, 1: 1}\ndef f(n):\n    if n not in cache:\n        cache[n] = f(n-1) + f(n-2)\n    return cache[n]\nf(5)\nprint(sorted(cache))",
    "options": [
      "[0, 1, 5]",
      "[2, 3, 4, 5]",
      "[0, 1, 2, 3, 4, 5]",
      "[5]"
    ],
    "answer": 2,
    "explanation": "Computing the missing result fills all intermediate indices needed by this recurrence.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "python-output"
  },
  {
    "id": "sh-w11-16",
    "topic": "week11",
    "week": 11,
    "title": "Invariant calculation once — what is the complete printed output?",
    "code": "xs = [2, 4, 6]\ns = sum(xs)\nprint([x / s for x in xs])",
    "options": [
      "[1.0, 1.0, 1.0]",
      "[2, 4, 6]",
      "[0.5, 1.0, 1.5]",
      "[0.16666666666666666, 0.3333333333333333, 0.5]"
    ],
    "answer": 3,
    "explanation": "The same total 12 is used for every normalization; it need not be recomputed per element.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "python-output"
  },
  {
    "id": "sh-w11-17",
    "topic": "week11",
    "week": 11,
    "title": "A floating-point cancellation case — what is the complete printed output?",
    "code": "print((1e16 + 1.0) - 1e16)",
    "options": [
      "0.0",
      "1.0",
      "-1.0",
      "1e16"
    ],
    "answer": 0,
    "explanation": "At this magnitude the addition loses the small increment through rounding before subtraction.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "python-output"
  },
  {
    "id": "sh-w11-18",
    "topic": "week11",
    "week": 11,
    "title": "Numerically improved summation — what is the complete printed output?",
    "code": "import math\nprint(math.fsum([1e16, 1.0, -1e16]))",
    "options": [
      "0.0",
      "1.0",
      "1e16",
      "-1.0"
    ],
    "answer": 1,
    "explanation": "fsum uses a more accurate summation procedure for this cancellation-prone sequence.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "python-output"
  },
  {
    "id": "sh-w11-19",
    "topic": "week11",
    "week": 11,
    "title": "Output-size accounting — what is the complete printed output?",
    "code": "n, w = 8, 3\nprint(n-w+1)",
    "options": [
      "5",
      "8",
      "6",
      "3"
    ],
    "answer": 2,
    "explanation": "Every complete width-three window has a start from 0 through 5 inclusive.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "python-output"
  },
  {
    "id": "sh-w11-20",
    "topic": "week11",
    "week": 11,
    "title": "Repeated concatenation length — what is the complete printed output?",
    "code": "out = []\nfor i in range(4):\n    out = out + [i]\nprint(out)",
    "options": [
      "[3]",
      "[1, 2, 3, 4]",
      "[]",
      "[0, 1, 2, 3]"
    ],
    "answer": 3,
    "explanation": "Each concatenation copies the growing prefix into a new list, although the final values are correct.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "python-output"
  },
  {
    "id": "sh-w11-21",
    "topic": "week11",
    "week": 11,
    "title": "A binary recursion tree — what is the complete printed output?",
    "code": "calls = 0\ndef split(n):\n    global calls\n    calls += 1\n    if n > 1:\n        split(n//2)\n        split(n//2)\nsplit(4)\nprint(calls)",
    "options": [
      "7",
      "4",
      "3",
      "8"
    ],
    "answer": 0,
    "explanation": "The tree has one root, two size-two calls and four size-one calls: seven total.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "python-output"
  },
  {
    "id": "sh-w11-22",
    "topic": "week11",
    "week": 11,
    "title": "Maximum depth of a halving chain — what is the complete printed output?",
    "code": "def depth(n):\n    return 1 if n <= 1 else 1 + depth(n//2)\nprint(depth(16))",
    "options": [
      "16",
      "5",
      "4",
      "31"
    ],
    "answer": 1,
    "explanation": "The live chain visits 16, 8, 4, 2 and 1, counting the base frame.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "python-output"
  },
  {
    "id": "sh-w11-23",
    "topic": "week11",
    "week": 11,
    "title": "Dictionary lookup results — what is the complete printed output?",
    "code": "index = {\"A\": 2, \"B\": 5}\nprint([index.get(k, -1) for k in [\"B\", \"C\", \"A\"]])",
    "options": [
      "[2, 5, -1]",
      "[5, None, 2]",
      "[5, -1, 2]",
      "[5, 0, 2]"
    ],
    "answer": 2,
    "explanation": "The mapping provides direct results for B and A and the explicit default for C.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "python-output"
  },
  {
    "id": "sh-w11-24",
    "topic": "week11",
    "week": 11,
    "title": "Multiple channels — what is the complete printed output?",
    "code": "channels = [[1, 2, 3], [4, 5, 6]]\nprint(sum(len(c) for c in channels))",
    "options": [
      "3",
      "2",
      "21",
      "6"
    ],
    "answer": 3,
    "explanation": "Two channels each hold three entries, giving six entries to process in a full traversal.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "python-output"
  },
  {
    "id": "sh-w11-25",
    "topic": "week11",
    "week": 11,
    "title": "Cold then warm result — what is the complete printed output?",
    "code": "cache = {}\ndef square(x):\n    if x not in cache:\n        cache[x] = x*x\n    return cache[x]\nprint(square(4), square(4), len(cache))",
    "options": [
      "16 16 1",
      "16 16 2",
      "4 4 1",
      "16 None 1"
    ],
    "answer": 0,
    "explanation": "The repeated key reuses one cached result rather than adding another entry.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "python-output"
  },
  {
    "id": "sh-w11-26",
    "topic": "week11",
    "week": 11,
    "title": "Why can sum(xs[:i]) inside an n-iteration loop be quadratic?",
    "code": "",
    "options": [
      "sum always costs constant time",
      "Each iteration copies and scans a growing prefix",
      "Slices are views for Python lists",
      "The outer loop executes only once"
    ],
    "answer": 1,
    "explanation": "The prefix lengths grow, and their total work can sum to Theta(n squared).",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "concept"
  },
  {
    "id": "sh-w11-27",
    "topic": "week11",
    "week": 11,
    "title": "Under the standard Python list model, xs[1:] costs:",
    "code": "",
    "options": [
      "Theta(1) with no new container",
      "Theta(log n) time",
      "Theta(n) time and a new outer list of linear size",
      "Exactly one byte"
    ],
    "answer": 2,
    "explanation": "A list slice copies references for all selected elements.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "concept"
  },
  {
    "id": "sh-w11-28",
    "topic": "week11",
    "week": 11,
    "title": "What is the typical cost of list pop(0) on a long list?",
    "code": "",
    "options": [
      "Theta(1) in every case",
      "Theta(log n)",
      "Theta(n log n)",
      "Theta(n) because later references shift"
    ],
    "answer": 3,
    "explanation": "Removing the first entry requires moving remaining references to close the gap.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "concept"
  },
  {
    "id": "sh-w11-29",
    "topic": "week11",
    "week": 11,
    "title": "Appending to a Python list is commonly described as:",
    "code": "",
    "options": [
      "Amortized constant time per append",
      "Worst-case constant time for every individual append",
      "Always quadratic per append",
      "Expected logarithmic time only"
    ],
    "answer": 0,
    "explanation": "Occasional resizing is expensive, but its cost spreads across a sequence of appends.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "concept"
  },
  {
    "id": "sh-w11-30",
    "topic": "week11",
    "week": 11,
    "title": "Dictionary lookup is commonly modeled as:",
    "code": "",
    "options": [
      "Guaranteed constant worst-case time for all keys",
      "Expected constant time under ordinary hash assumptions",
      "Always linear even with good hashing",
      "Always logarithmic"
    ],
    "answer": 1,
    "explanation": "Expected behavior depends on hashing and key assumptions; it is not an unconditional worst-case claim.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "concept"
  },
  {
    "id": "sh-w11-31",
    "topic": "week11",
    "week": 11,
    "title": "What does memoization store?",
    "code": "",
    "options": [
      "Only the deepest stack frame",
      "All source comments",
      "Previously computed results indexed by subproblem",
      "A guaranteed optimal sorting order"
    ],
    "answer": 2,
    "explanation": "Caching avoids recomputing repeated subproblems when the key captures their required inputs.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "concept"
  },
  {
    "id": "sh-w11-32",
    "topic": "week11",
    "week": 11,
    "title": "Why distinguish cold-cache and warm-cache timings?",
    "code": "",
    "options": [
      "Both always execute identical recursion trees",
      "A warm cache is always empty",
      "Cold timings exclude all computation",
      "They can perform very different amounts of work"
    ],
    "answer": 3,
    "explanation": "A warm query may reuse an existing result, while a cold query must construct missing results.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "concept"
  },
  {
    "id": "sh-w11-33",
    "topic": "week11",
    "week": 11,
    "title": "Maximum recursion depth measures:",
    "code": "",
    "options": [
      "The largest number of simultaneously active calls",
      "The total number of calls ever made",
      "The final output length automatically",
      "The number of unique function names"
    ],
    "answer": 0,
    "explanation": "Depth concerns live stack frames; total calls count all work across time.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "concept"
  },
  {
    "id": "sh-w11-34",
    "topic": "week11",
    "week": 11,
    "title": "A balanced two-branch recursion can have logarithmic depth and linear total calls because:",
    "code": "",
    "options": [
      "Depth and total calls must always be equal",
      "Many calls occur across different branches at different times",
      "Every call stays live forever",
      "Logarithmic depth implies constant total work"
    ],
    "answer": 1,
    "explanation": "Branching expands total nodes while only a path and pending frames need be active at once.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "concept"
  },
  {
    "id": "sh-w11-35",
    "topic": "week11",
    "week": 11,
    "title": "Naive Fibonacci recursion repeats work mainly because:",
    "code": "",
    "options": [
      "Every call has a unique input",
      "It copies a list on every line necessarily",
      "Its subproblem trees overlap",
      "Its base cases never run"
    ],
    "answer": 2,
    "explanation": "The same smaller Fibonacci indices are evaluated repeatedly without a cache.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "concept"
  },
  {
    "id": "sh-w11-36",
    "topic": "week11",
    "week": 11,
    "title": "A linear recursive sum using xs[1:] at each call can have:",
    "code": "",
    "options": [
      "Constant total copying work",
      "Logarithmic total copying work",
      "No allocation at all",
      "Quadratic copying work despite one recursive branch"
    ],
    "answer": 3,
    "explanation": "The copied lengths n-1, n-2 and so on sum quadratically.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "concept"
  },
  {
    "id": "sh-w11-37",
    "topic": "week11",
    "week": 11,
    "title": "When estimating memory, which categories should be distinguished?",
    "code": "",
    "options": [
      "Input, auxiliary live storage, cache, and required output",
      "Only source-file bytes",
      "Only numeric result size",
      "Only the deepest local variable name"
    ],
    "answer": 0,
    "explanation": "Separating these categories avoids hiding output costs or conflating total allocation with peak storage.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "concept"
  },
  {
    "id": "sh-w11-38",
    "topic": "week11",
    "week": 11,
    "title": "For 1 <= w <= n, a direct width-w moving-window sum over n readings costs:",
    "code": "",
    "options": [
      "Theta(1) for every n and w",
      "Theta((n-w+1)w) selected additions when each window is summed independently",
      "Theta(log n)",
      "Exactly n-w additions in all implementations"
    ],
    "answer": 1,
    "explanation": "There are n-w+1 complete windows. Summing each independently visits w entries per window under the bounded-scalar model.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "concept"
  },
  {
    "id": "sh-w11-39",
    "topic": "week11",
    "week": 11,
    "title": "A running-subtotal moving average improves work by:",
    "code": "",
    "options": [
      "Returning only one window without changing the contract",
      "Ignoring the first window",
      "Removing the outgoing value and adding the incoming value per step",
      "Sorting the readings first"
    ],
    "answer": 2,
    "explanation": "After one initial sum, adjacent windows share most values and can reuse the subtotal.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "concept"
  },
  {
    "id": "sh-w11-40",
    "topic": "week11",
    "week": 11,
    "title": "An optimization returning only the last mean instead of every complete window:",
    "code": "",
    "options": [
      "Always preserves the original problem",
      "Is proved valid by lower memory use",
      "Is required for linear time",
      "Changes the output contract"
    ],
    "answer": 3,
    "explanation": "Reducing required output is not an equivalent implementation of an all-windows specification.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "concept"
  },
  {
    "id": "sh-w11-41",
    "topic": "week11",
    "week": 11,
    "title": "Why check numerical behavior after a running-subtotal optimization?",
    "code": "",
    "options": [
      "Different arithmetic order can alter rounding and cancellation",
      "Fewer operations guarantee exact answers",
      "Floating-point arithmetic is associative",
      "Every optimized result must be an integer"
    ],
    "answer": 0,
    "explanation": "Equivalent real-number formulas can behave differently in finite-precision arithmetic.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "concept"
  },
  {
    "id": "sh-w11-42",
    "topic": "week11",
    "week": 11,
    "title": "Which quantity can be hoisted out of a normalization loop when xs is unchanged?",
    "code": "",
    "options": [
      "The current loop element",
      "sum(xs)",
      "The current output append",
      "A value that changes on each iteration"
    ],
    "answer": 1,
    "explanation": "An invariant total need only be calculated once, avoiding repeated scans.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "concept"
  },
  {
    "id": "sh-w11-43",
    "topic": "week11",
    "week": 11,
    "title": "What is the break-even question for building an index?",
    "code": "",
    "options": [
      "Whether one lookup appears shorter in source",
      "Whether the dictionary has prettier keys",
      "Whether preparation cost is repaid across the expected number of queries",
      "Whether sorting changes comments"
    ],
    "answer": 2,
    "explanation": "Compare full preparation plus repeated-query costs for the actual workload.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "concept"
  },
  {
    "id": "sh-w11-44",
    "topic": "week11",
    "week": 11,
    "title": "What does a shallow copied list retain?",
    "code": "",
    "options": [
      "Independent recursive copies of all children",
      "Only numeric entries",
      "No relationship to any original value",
      "References to the same nested objects"
    ],
    "answer": 3,
    "explanation": "A shallow copy duplicates the outer container while preserving references to its elements.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "concept"
  },
  {
    "id": "sh-w11-45",
    "topic": "week11",
    "week": 11,
    "title": "Why can repeated out = out + [x] be quadratic overall?",
    "code": "",
    "options": [
      "Each addition copies the already accumulated prefix",
      "List concatenation mutates in constant time",
      "Only the final item is copied",
      "The loop has no growing state"
    ],
    "answer": 0,
    "explanation": "Copy lengths grow from small prefixes to the final size, producing a triangular total.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "concept"
  },
  {
    "id": "sh-w11-46",
    "topic": "week11",
    "week": 11,
    "title": "Which is the better comparison for repeated searches?",
    "code": "",
    "options": [
      "Only one indexed lookup while hiding preparation",
      "Total preparation plus all queries under the same contract",
      "Only the worst plain-search input versus the best indexed input",
      "Source character counts"
    ],
    "answer": 1,
    "explanation": "Full workflow cost reflects the actual task and number of queries.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "concept"
  },
  {
    "id": "sh-w11-47",
    "topic": "week11",
    "week": 11,
    "title": "For F(0)=F(1)=1, the value F(4) is:",
    "code": "",
    "options": [
      "3",
      "4",
      "5",
      "8"
    ],
    "answer": 2,
    "explanation": "The sequence is 1, 1, 2, 3, 5; the declared convention determines the indexing.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "concept"
  },
  {
    "id": "sh-w11-48",
    "topic": "week11",
    "week": 11,
    "title": "A method emits k required output values. Merely storing those values needs:",
    "code": "",
    "options": [
      "Always constant storage regardless of k",
      "Only logarithmic storage",
      "No storage because output does not count anywhere",
      "Omega(k) output storage under the usual slot model"
    ],
    "answer": 3,
    "explanation": "Required output is separate from auxiliary memory but still occupies space if all results are retained.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "concept"
  },
  {
    "id": "sh-w11-49",
    "topic": "week11",
    "week": 11,
    "title": "Which benchmark input policy supports reproducibility?",
    "code": "",
    "options": [
      "Record fixture construction, sizes, seeds where applicable, and environment",
      "Describe inputs only as typical",
      "Change random inputs without recording them",
      "Report only the fastest duration"
    ],
    "answer": 0,
    "explanation": "Reproducibility requires enough information to reconstruct the workload and interpret observations.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "concept"
  },
  {
    "id": "sh-w11-50",
    "topic": "week11",
    "week": 11,
    "title": "Which is a valid optimization criterion?",
    "code": "",
    "options": [
      "Return fewer required answers without saying so",
      "Preserve results and failure behavior while reducing relevant cost",
      "Remove validation even when it is part of the contract",
      "Use a cache with keys omitting relevant inputs"
    ],
    "answer": 1,
    "explanation": "Efficiency improvements must be judged against the full specified behavior.",
    "bank": "second-half",
    "source": "Week 11 · Original practice · Program efficiency II",
    "mode": "concept"
  },
  {
    "id": "sh-w12-01",
    "topic": "week12",
    "week": 12,
    "title": "First matching index — what is the complete printed output?",
    "code": "def find(xs, target):\n    for i, x in enumerate(xs):\n        if x == target:\n            return i\n    return -1\nprint(find([4, 7, 4, 9], 4))",
    "options": [
      "2",
      "4",
      "0",
      "-1"
    ],
    "answer": 2,
    "explanation": "This left-to-right search returns immediately at the first matching position.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "python-output"
  },
  {
    "id": "sh-w12-02",
    "topic": "week12",
    "week": 12,
    "title": "Missing search result — what is the complete printed output?",
    "code": "def find(xs, target):\n    for i, x in enumerate(xs):\n        if x == target:\n            return i\n    return -1\nprint(find([2, 5, 8], 7))",
    "options": [
      "0",
      "2",
      "None",
      "-1"
    ],
    "answer": 3,
    "explanation": "The loop finds no equal value, so the documented sentinel is returned.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "python-output"
  },
  {
    "id": "sh-w12-03",
    "topic": "week12",
    "week": 12,
    "title": "A midpoint probe — what is the complete printed output?",
    "code": "lo, hi = 0, 6\nprint((lo + hi) // 2)",
    "options": [
      "3",
      "2",
      "4",
      "6"
    ],
    "answer": 0,
    "explanation": "Integer division selects the midpoint index 3 for these inclusive endpoints.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "python-output"
  },
  {
    "id": "sh-w12-04",
    "topic": "week12",
    "week": 12,
    "title": "A binary search trace — what is the complete printed output?",
    "code": "xs = [2, 5, 8, 11, 14, 17, 20]\nlo, hi = 0, len(xs)-1\nprobes = []\nwhile lo <= hi:\n    mid = (lo+hi)//2\n    probes.append(mid)\n    if xs[mid] == 17:\n        break\n    if xs[mid] < 17:\n        lo = mid+1\n    else:\n        hi = mid-1\nprint(probes)",
    "options": [
      "[3, 4, 5]",
      "[3, 5]",
      "[0, 1, 2, 3, 4, 5]",
      "[3, 1]"
    ],
    "answer": 1,
    "explanation": "The first value 11 discards the lower half; midpoint 5 then matches 17.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "python-output"
  },
  {
    "id": "sh-w12-05",
    "topic": "week12",
    "week": 12,
    "title": "Insertion boundary — what is the complete printed output?",
    "code": "from bisect import bisect_left\nprint(bisect_left([2, 4, 4, 7], 4))",
    "options": [
      "2",
      "3",
      "1",
      "0"
    ],
    "answer": 2,
    "explanation": "bisect_left returns the leftmost insertion position, before existing equal entries.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "python-output"
  },
  {
    "id": "sh-w12-06",
    "topic": "week12",
    "week": 12,
    "title": "Right insertion boundary — what is the complete printed output?",
    "code": "from bisect import bisect_right\nprint(bisect_right([2, 4, 4, 7], 4))",
    "options": [
      "1",
      "2",
      "4",
      "3"
    ],
    "answer": 3,
    "explanation": "bisect_right returns the position after the existing equal run.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "python-output"
  },
  {
    "id": "sh-w12-07",
    "topic": "week12",
    "week": 12,
    "title": "Insertion beyond the end — what is the complete printed output?",
    "code": "from bisect import bisect_left\nprint(bisect_left([2, 4, 7], 9))",
    "options": [
      "3",
      "2",
      "-1",
      "9"
    ],
    "answer": 0,
    "explanation": "The insertion index may equal len(xs), representing a position after every entry.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "python-output"
  },
  {
    "id": "sh-w12-08",
    "topic": "week12",
    "week": 12,
    "title": "Sorting without mutation — what is the complete printed output?",
    "code": "a = [5, 1, 3]\nb = sorted(a)\nprint(a, b)",
    "options": [
      "[1, 3, 5] [1, 3, 5]",
      "[5, 1, 3] [1, 3, 5]",
      "[5, 1, 3] None",
      "None [1, 3, 5]"
    ],
    "answer": 1,
    "explanation": "sorted returns a new list, preserving the original input order.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "python-output"
  },
  {
    "id": "sh-w12-09",
    "topic": "week12",
    "week": 12,
    "title": "In-place sort return — what is the complete printed output?",
    "code": "a = [5, 1, 3]\nb = a.sort()\nprint(a, b)",
    "options": [
      "[5, 1, 3] [1, 3, 5]",
      "[1, 3, 5] [1, 3, 5]",
      "[1, 3, 5] None",
      "None None"
    ],
    "answer": 2,
    "explanation": "list.sort rearranges the receiver and returns None.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "python-output"
  },
  {
    "id": "sh-w12-10",
    "topic": "week12",
    "week": 12,
    "title": "Sorting by a key — what is the complete printed output?",
    "code": "rows = [(\"A\", 8), (\"B\", 3), (\"C\", 5)]\nprint(sorted(rows, key=lambda r: r[1]))",
    "options": [
      "[('A', 8), ('B', 3), ('C', 5)]",
      "[('A', 8), ('C', 5), ('B', 3)]",
      "[('B', 3), ('A', 8), ('C', 5)]",
      "[('B', 3), ('C', 5), ('A', 8)]"
    ],
    "answer": 3,
    "explanation": "The key extracts the second field and ascending order is 3, 5, 8.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "python-output"
  },
  {
    "id": "sh-w12-11",
    "topic": "week12",
    "week": 12,
    "title": "Stable tie ordering — what is the complete printed output?",
    "code": "rows = [(\"A\", 2), (\"B\", 1), (\"C\", 2)]\nprint([r[0] for r in sorted(rows, key=lambda r: r[1])])",
    "options": [
      "['B', 'A', 'C']",
      "['B', 'C', 'A']",
      "['A', 'B', 'C']",
      "['C', 'A', 'B']"
    ],
    "answer": 0,
    "explanation": "Python sorting is stable: A remains before C because their keys are equal.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "python-output"
  },
  {
    "id": "sh-w12-12",
    "topic": "week12",
    "week": 12,
    "title": "Descending order — what is the complete printed output?",
    "code": "print(sorted([3, 1, 4, 2], reverse=True))",
    "options": [
      "[1, 2, 3, 4]",
      "[4, 3, 2, 1]",
      "[2, 4, 1, 3]",
      "None"
    ],
    "answer": 1,
    "explanation": "reverse=True requests descending order in the returned sorted list.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "python-output"
  },
  {
    "id": "sh-w12-13",
    "topic": "week12",
    "week": 12,
    "title": "One selection-sort pass — what is the complete printed output?",
    "code": "a = [6, 2, 5, 1]\nj = min(range(len(a)), key=lambda k: a[k])\na[0], a[j] = a[j], a[0]\nprint(a)",
    "options": [
      "[1, 2, 6, 5]",
      "[2, 6, 5, 1]",
      "[1, 2, 5, 6]",
      "[1, 5, 2, 6]"
    ],
    "answer": 2,
    "explanation": "The minimum 1 is swapped from the last position into position zero.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "python-output"
  },
  {
    "id": "sh-w12-14",
    "topic": "week12",
    "week": 12,
    "title": "Insertion into a sorted prefix — what is the complete printed output?",
    "code": "a = [2, 5, 7, 4]\nx = a[3]\nj = 2\nwhile j >= 0 and a[j] > x:\n    a[j+1] = a[j]\n    j -= 1\na[j+1] = x\nprint(a)",
    "options": [
      "[2, 5, 4, 7]",
      "[4, 2, 5, 7]",
      "[2, 5, 7, 4]",
      "[2, 4, 5, 7]"
    ],
    "answer": 3,
    "explanation": "7 and 5 shift right, and 4 is inserted after 2.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "python-output"
  },
  {
    "id": "sh-w12-15",
    "topic": "week12",
    "week": 12,
    "title": "Merging two ordered runs — what is the complete printed output?",
    "code": "a, b = [1, 5], [2, 4]\ni = j = 0\nout = []\nwhile i < len(a) and j < len(b):\n    if a[i] <= b[j]:\n        out.append(a[i]); i += 1\n    else:\n        out.append(b[j]); j += 1\nout.extend(a[i:]); out.extend(b[j:])\nprint(out)",
    "options": [
      "[1, 2, 4, 5]",
      "[1, 5, 2, 4]",
      "[2, 4, 1, 5]",
      "[1, 2, 5, 4]"
    ],
    "answer": 0,
    "explanation": "Each step selects the smaller available head, then appends any remainder.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "python-output"
  },
  {
    "id": "sh-w12-16",
    "topic": "week12",
    "week": 12,
    "title": "Feasible design search — what is the complete printed output?",
    "code": "designs = [(\"A\", 8, False), (\"B\", 12, True), (\"C\", 9, True)]\nvalid = [d for d in designs if d[2]]\nprint(min(valid, key=lambda d: d[1])[0])",
    "options": [
      "A",
      "C",
      "B",
      "None"
    ],
    "answer": 1,
    "explanation": "The cheaper A is infeasible; among feasible designs, C costs less than B.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "python-output"
  },
  {
    "id": "sh-w12-17",
    "topic": "week12",
    "week": 12,
    "title": "Tuple tie breaker — what is the complete printed output?",
    "code": "rows = [(2, \"B\"), (1, \"C\"), (2, \"A\")]\nprint(sorted(rows))",
    "options": [
      "[(1, 'C'), (2, 'B'), (2, 'A')]",
      "[(2, 'A'), (2, 'B'), (1, 'C')]",
      "[(1, 'C'), (2, 'A'), (2, 'B')]",
      "[(2, 'B'), (1, 'C'), (2, 'A')]"
    ],
    "answer": 2,
    "explanation": "Tuple comparison uses the first field, then the second field for a tie.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "python-output"
  },
  {
    "id": "sh-w12-18",
    "topic": "week12",
    "week": 12,
    "title": "Empty insertion search — what is the complete printed output?",
    "code": "from bisect import bisect_left\nprint(bisect_left([], 4))",
    "options": [
      "-1",
      "4",
      "IndexError",
      "0"
    ],
    "answer": 3,
    "explanation": "The empty sequence has one insertion boundary at index zero.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "python-output"
  },
  {
    "id": "sh-w12-19",
    "topic": "week12",
    "week": 12,
    "title": "Duplicate counting by boundaries — what is the complete printed output?",
    "code": "from bisect import bisect_left, bisect_right\na = [1, 3, 3, 3, 8]\nprint(bisect_right(a, 3)-bisect_left(a, 3))",
    "options": [
      "3",
      "2",
      "4",
      "1"
    ],
    "answer": 0,
    "explanation": "The difference between the boundaries is the number of equal entries.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "python-output"
  },
  {
    "id": "sh-w12-20",
    "topic": "week12",
    "week": 12,
    "title": "Membership through a boundary — what is the complete printed output?",
    "code": "from bisect import bisect_left\na = [2, 5, 9]\ni = bisect_left(a, 7)\nprint(i < len(a) and a[i] == 7)",
    "options": [
      "True",
      "False",
      "2",
      "IndexError"
    ],
    "answer": 1,
    "explanation": "An insertion position is not proof of equality; a[2] is 9 rather than 7.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "python-output"
  },
  {
    "id": "sh-w12-21",
    "topic": "week12",
    "week": 12,
    "title": "Selection comparison count — what is the complete printed output?",
    "code": "n = 5\nprint(sum(n-i-1 for i in range(n-1)))",
    "options": [
      "25",
      "5",
      "10",
      "15"
    ],
    "answer": 2,
    "explanation": "The standard remaining-suffix scans compare 4 + 3 + 2 + 1 values.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "python-output"
  },
  {
    "id": "sh-w12-22",
    "topic": "week12",
    "week": 12,
    "title": "A stable multi-pass sort — what is the complete printed output?",
    "code": "rows = [(\"B\", 2), (\"A\", 2), (\"C\", 1)]\nrows = sorted(rows, key=lambda r: r[0])\nrows = sorted(rows, key=lambda r: r[1])\nprint(rows)",
    "options": [
      "[('C', 1), ('B', 2), ('A', 2)]",
      "[('A', 2), ('B', 2), ('C', 1)]",
      "[('B', 2), ('A', 2), ('C', 1)]",
      "[('C', 1), ('A', 2), ('B', 2)]"
    ],
    "answer": 3,
    "explanation": "The final primary-key sort preserves the earlier name order within equal numeric keys.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "python-output"
  },
  {
    "id": "sh-w12-23",
    "topic": "week12",
    "week": 12,
    "title": "Interval choice — what is the complete printed output?",
    "code": "from bisect import bisect_right\nknots = [0, 10, 20, 30]\nx = 15\nprint(bisect_right(knots, x)-1)",
    "options": [
      "1",
      "0",
      "2",
      "3"
    ],
    "answer": 0,
    "explanation": "The lower interval endpoint is knots[1]=10; 15 lies between 10 and 20.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "python-output"
  },
  {
    "id": "sh-w12-24",
    "topic": "week12",
    "week": 12,
    "title": "A nonprogressing boundary update — what is the complete printed output?",
    "code": "lo, hi = 0, 1\nfor _ in range(2):\n    mid = (lo+hi)//2\n    lo = mid\nprint(lo, hi)",
    "options": [
      "1 1",
      "0 1",
      "1 0",
      "0 0"
    ],
    "answer": 1,
    "explanation": "With this floor midpoint and lo=mid update, the interval does not shrink; the bounded demonstration avoids an infinite loop.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "python-output"
  },
  {
    "id": "sh-w12-25",
    "topic": "week12",
    "week": 12,
    "title": "Output preserves duplicates — what is the complete printed output?",
    "code": "print(sorted([4, 2, 4, 1]))",
    "options": [
      "[1, 2, 4]",
      "[4, 4, 2, 1]",
      "[1, 2, 4, 4]",
      "[1, 4, 2, 4]"
    ],
    "answer": 2,
    "explanation": "Sorting rearranges entries but does not remove duplicates.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "python-output"
  },
  {
    "id": "sh-w12-26",
    "topic": "week12",
    "week": 12,
    "title": "Binary search requires which main precondition?",
    "code": "",
    "options": [
      "Every entry must be unique",
      "The list must have odd length",
      "The target must be present",
      "Data ordered consistently with the comparison"
    ],
    "answer": 3,
    "explanation": "Order justifies discarding half the remaining candidates after a comparison.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "concept"
  },
  {
    "id": "sh-w12-27",
    "topic": "week12",
    "week": 12,
    "title": "A correct inclusive binary-search update after a[mid] < target is:",
    "code": "",
    "options": [
      "lo = mid + 1",
      "lo = mid in every case",
      "hi = mid - 1",
      "hi = 0"
    ],
    "answer": 0,
    "explanation": "The midpoint is already known too small, so it must be excluded from the remaining interval.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "concept"
  },
  {
    "id": "sh-w12-28",
    "topic": "week12",
    "week": 12,
    "title": "Why is a strict progress argument needed for a search loop?",
    "code": "",
    "options": [
      "To prove all values are distinct",
      "To ensure the remaining candidate region shrinks",
      "To make every match the first duplicate",
      "To avoid defining the input"
    ],
    "answer": 1,
    "explanation": "Without shrinking state, a loop can repeat the same midpoint indefinitely.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "concept"
  },
  {
    "id": "sh-w12-29",
    "topic": "week12",
    "week": 12,
    "title": "A standard binary search finding any match among duplicates:",
    "code": "",
    "options": [
      "Always returns the first match",
      "Always returns the last match",
      "Need not return the first matching index",
      "Cannot operate on duplicates at all"
    ],
    "answer": 2,
    "explanation": "First-occurrence search needs an additional boundary policy or a lower-bound algorithm.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "concept"
  },
  {
    "id": "sh-w12-30",
    "topic": "week12",
    "week": 12,
    "title": "What does bisect_left return?",
    "code": "",
    "options": [
      "A Boolean membership result",
      "The target value itself",
      "-1 for every absent value",
      "An insertion boundary before equal entries"
    ],
    "answer": 3,
    "explanation": "It returns an index partitioning entries smaller than the target from the remaining entries.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "concept"
  },
  {
    "id": "sh-w12-31",
    "topic": "week12",
    "week": 12,
    "title": "Why must an insertion index be checked before a[i] is read?",
    "code": "",
    "options": [
      "It can equal len(a)",
      "It is always negative",
      "It is a float",
      "It can only be zero"
    ],
    "answer": 0,
    "explanation": "An end insertion boundary is valid as a position but not as an existing element index.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "concept"
  },
  {
    "id": "sh-w12-32",
    "topic": "week12",
    "week": 12,
    "title": "Which is the worst-case probe growth of binary search on a sorted random-access list?",
    "code": "",
    "options": [
      "Theta(n squared)",
      "Theta(log n)",
      "Theta(n)",
      "Theta(1) for every target"
    ],
    "answer": 1,
    "explanation": "Each unsuccessful probe roughly halves the candidate interval.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "concept"
  },
  {
    "id": "sh-w12-33",
    "topic": "week12",
    "week": 12,
    "title": "When should the cost of sorting before binary search be included?",
    "code": "",
    "options": [
      "Never",
      "Only if the target is missing",
      "When evaluating the full workflow that needs the preparation",
      "Only if the list is already sorted"
    ],
    "answer": 2,
    "explanation": "Preparation is part of total work unless an explicitly stated pre-sorted input contract excludes it.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "concept"
  },
  {
    "id": "sh-w12-34",
    "topic": "week12",
    "week": 12,
    "title": "A stable sort preserves:",
    "code": "",
    "options": [
      "Every entry’s original index",
      "Only distinct values",
      "Descending order automatically",
      "Original relative order among equal-key entries"
    ],
    "answer": 3,
    "explanation": "Stability concerns ties under the chosen key, not keeping all positions unchanged.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "concept"
  },
  {
    "id": "sh-w12-35",
    "topic": "week12",
    "week": 12,
    "title": "Python list.sort differs from sorted because:",
    "code": "",
    "options": [
      "It mutates the list and returns None",
      "It returns a sorted copy without mutation",
      "It removes duplicates automatically",
      "It requires a comparison class for numbers"
    ],
    "answer": 0,
    "explanation": "sorted returns a new list, while list.sort rearranges its receiver.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "concept"
  },
  {
    "id": "sh-w12-36",
    "topic": "week12",
    "week": 12,
    "title": "Standard selection sort repeatedly:",
    "code": "",
    "options": [
      "Halves the target interval",
      "Chooses the minimum remaining entry for the next position",
      "Merges two sorted halves only",
      "Inserts random values"
    ],
    "answer": 1,
    "explanation": "Each pass fixes another prefix position by scanning the remaining suffix.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "concept"
  },
  {
    "id": "sh-w12-37",
    "topic": "week12",
    "week": 12,
    "title": "Standard insertion sort grows:",
    "code": "",
    "options": [
      "A hash table of all positions",
      "A binary-search tree necessarily",
      "A sorted prefix by inserting the next entry",
      "An unsorted prefix only"
    ],
    "answer": 2,
    "explanation": "Each iteration moves the next entry into its place among already processed entries.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "concept"
  },
  {
    "id": "sh-w12-38",
    "topic": "week12",
    "week": 12,
    "title": "Merge sort combines subproblems by:",
    "code": "",
    "options": [
      "Choosing a random answer",
      "Discarding half the output",
      "Removing duplicate values necessarily",
      "Merging ordered runs"
    ],
    "answer": 3,
    "explanation": "The merge step uses ordered heads to construct an ordered combined sequence.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "concept"
  },
  {
    "id": "sh-w12-39",
    "topic": "week12",
    "week": 12,
    "title": "A typical comparison-based merge sort has worst-case time:",
    "code": "",
    "options": [
      "Theta(n log n)",
      "Theta(n squared)",
      "Theta(log n)",
      "Theta(1)"
    ],
    "answer": 0,
    "explanation": "Logarithmic levels perform linear merge work per level under the usual model.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "concept"
  },
  {
    "id": "sh-w12-40",
    "topic": "week12",
    "week": 12,
    "title": "Standard selection sort’s comparison count is:",
    "code": "",
    "options": [
      "Constant on ordered input",
      "Quadratic even when the input is already ordered",
      "Logarithmic for every input",
      "Linear whenever values are distinct"
    ],
    "answer": 1,
    "explanation": "The remaining-suffix scans occur regardless of whether swaps are needed.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "concept"
  },
  {
    "id": "sh-w12-41",
    "topic": "week12",
    "week": 12,
    "title": "Insertion sort on already sorted data can be:",
    "code": "",
    "options": [
      "Necessarily quadratic in comparisons",
      "Exponential",
      "Linear with an early-stopping inner loop",
      "Undefined"
    ],
    "answer": 2,
    "explanation": "Each next value needs only the check showing it is already positioned correctly.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "concept"
  },
  {
    "id": "sh-w12-42",
    "topic": "week12",
    "week": 12,
    "title": "Which sorting property must be checked besides ordered output?",
    "code": "",
    "options": [
      "The output drops every repeated value",
      "The input is always mutated",
      "Every key becomes a string",
      "The output preserves the input entries and multiplicities"
    ],
    "answer": 3,
    "explanation": "A sequence can be ordered yet wrong if entries were lost, duplicated or changed.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "concept"
  },
  {
    "id": "sh-w12-43",
    "topic": "week12",
    "week": 12,
    "title": "A cheapest-feasible-design search should first ensure:",
    "code": "",
    "options": [
      "Candidates satisfy the feasibility contract",
      "The globally cheapest candidate is chosen without constraints",
      "Names are sorted alphabetically only",
      "All candidates have equal costs"
    ],
    "answer": 0,
    "explanation": "Optimization occurs within the valid set, not across invalid designs.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "concept"
  },
  {
    "id": "sh-w12-44",
    "topic": "week12",
    "week": 12,
    "title": "How should an empty feasible-candidate set be handled?",
    "code": "",
    "options": [
      "Return a random design",
      "Follow an explicit no-feasible-result policy",
      "Silently choose an infeasible design",
      "Assume min on an empty list returns zero"
    ],
    "answer": 1,
    "explanation": "The contract should specify a sentinel, exception or other deliberate result for no solution.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "concept"
  },
  {
    "id": "sh-w12-45",
    "topic": "week12",
    "week": 12,
    "title": "A calibration interval search at the final knot needs:",
    "code": "",
    "options": [
      "Automatic extrapolation without disclosure",
      "Rejection of every exact knot",
      "An explicit endpoint policy avoiding an out-of-range upper neighbor",
      "An assumption that len(knots) is a valid element index"
    ],
    "answer": 2,
    "explanation": "The largest knot is a common boundary needing deliberate handling for interval-based evaluation.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "concept"
  },
  {
    "id": "sh-w12-46",
    "topic": "week12",
    "week": 12,
    "title": "Searching an unsorted list using binary-search discards is:",
    "code": "",
    "options": [
      "Guaranteed correct if the target exists",
      "Always equivalent to linear search",
      "Only a problem for strings",
      "Unjustified because ordering no longer supports elimination"
    ],
    "answer": 3,
    "explanation": "The target can lie in a discarded region when the data are not ordered.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "concept"
  },
  {
    "id": "sh-w12-47",
    "topic": "week12",
    "week": 12,
    "title": "Which merge tie rule supports stability when each run is already stable?",
    "code": "",
    "options": [
      "Choose from the left run first on equal keys",
      "Choose randomly on equal keys",
      "Always reverse both equal runs",
      "Delete one of the equal entries"
    ],
    "answer": 0,
    "explanation": "Earlier left-run entries should precede later right-run entries when their keys tie.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "concept"
  },
  {
    "id": "sh-w12-48",
    "topic": "week12",
    "week": 12,
    "title": "Why separate selected comparison counts from timings?",
    "code": "",
    "options": [
      "One comparison always takes exactly one second",
      "A count does not capture every implementation and machine cost",
      "Counts include compiler startup automatically",
      "Timing never varies"
    ],
    "answer": 1,
    "explanation": "Comparison counts are a model of selected work, not a complete duration measurement.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "concept"
  },
  {
    "id": "sh-w12-49",
    "topic": "week12",
    "week": 12,
    "title": "Which is a valid first-occurrence search contract?",
    "code": "",
    "options": [
      "Return any matching index without saying which",
      "Return a sorted copy instead of an index",
      "Return the lowest matching index, or the stated missing sentinel",
      "Assume duplicates cannot exist without checking the contract"
    ],
    "answer": 2,
    "explanation": "An explicit duplicate policy makes testing and client interpretation unambiguous.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "concept"
  },
  {
    "id": "sh-w12-50",
    "topic": "week12",
    "week": 12,
    "title": "Why test empty, singleton, duplicate and absent-target cases?",
    "code": "",
    "options": [
      "They prove every possible search correct",
      "They make ordering unnecessary",
      "They replace all normal-case tests",
      "They exercise search boundaries and result policies"
    ],
    "answer": 3,
    "explanation": "These cases target distinct edge conditions that ordinary middle-of-list matches miss.",
    "bank": "second-half",
    "source": "Week 12 · Original practice · Searching and sorting",
    "mode": "concept"
  },
  {
    "id": "sh-w13-01",
    "topic": "week13",
    "week": 13,
    "title": "Python true division — what is the complete printed output?",
    "code": "print(7 / 2)",
    "options": [
      "3.5",
      "3",
      "4",
      "3.0"
    ],
    "answer": 0,
    "explanation": "Python / performs true division; translating integer division from another language requires care.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "python-output"
  },
  {
    "id": "sh-w13-02",
    "topic": "week13",
    "week": 13,
    "title": "Python floor division — what is the complete printed output?",
    "code": "print(-7 // 2)",
    "options": [
      "-3",
      "-4",
      "-3.5",
      "4"
    ],
    "answer": 1,
    "explanation": "Python // rounds the quotient down toward negative infinity, unlike truncation toward zero.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "python-output"
  },
  {
    "id": "sh-w13-03",
    "topic": "week13",
    "week": 13,
    "title": "Explicit conversion before division — what is the complete printed output?",
    "code": "print(float(7) / 2)",
    "options": [
      "3",
      "4.0",
      "3.5",
      "TypeError"
    ],
    "answer": 2,
    "explanation": "The expression evaluates as floating-point true division.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "python-output"
  },
  {
    "id": "sh-w13-04",
    "topic": "week13",
    "week": 13,
    "title": "Python indexing — what is the complete printed output?",
    "code": "a = [10, 20, 30]\nprint(a[0], a[-1])",
    "options": [
      "20 30",
      "10 20",
      "IndexError",
      "10 30"
    ],
    "answer": 3,
    "explanation": "Python sequences use zero-based indexing, and -1 selects the final entry.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "python-output"
  },
  {
    "id": "sh-w13-05",
    "topic": "week13",
    "week": 13,
    "title": "Exclusive range endpoint — what is the complete printed output?",
    "code": "print(list(range(1, 5)))",
    "options": [
      "[1, 2, 3, 4]",
      "[1, 2, 3, 4, 5]",
      "[0, 1, 2, 3, 4]",
      "[1, 5]"
    ],
    "answer": 0,
    "explanation": "The Python stop value is excluded; equivalent loop endpoints differ across languages.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "python-output"
  },
  {
    "id": "sh-w13-06",
    "topic": "week13",
    "week": 13,
    "title": "Python list repetition — what is the complete printed output?",
    "code": "print([2, 3] * 2)",
    "options": [
      "[4, 6]",
      "[2, 3, 2, 3]",
      "[4, 9]",
      "TypeError"
    ],
    "answer": 1,
    "explanation": "For a list, multiplication by an integer repeats the sequence rather than scaling entries.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "python-output"
  },
  {
    "id": "sh-w13-07",
    "topic": "week13",
    "week": 13,
    "title": "Elementwise scaling explicitly — what is the complete printed output?",
    "code": "print([x * 2 for x in [2, 3]])",
    "options": [
      "[2, 3, 2, 3]",
      "[4, 9]",
      "[4, 6]",
      "[2, 3]"
    ],
    "answer": 2,
    "explanation": "The comprehension applies the numeric multiplication separately to each element.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "python-output"
  },
  {
    "id": "sh-w13-08",
    "topic": "week13",
    "week": 13,
    "title": "Python exponentiation — what is the complete printed output?",
    "code": "print(2 ** 3, 2 ^ 3)",
    "options": [
      "8 8",
      "6 1",
      "1 8",
      "8 1"
    ],
    "answer": 3,
    "explanation": "** is exponentiation; ^ is bitwise XOR for Python integers.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "python-output"
  },
  {
    "id": "sh-w13-09",
    "topic": "week13",
    "week": 13,
    "title": "A chained comparison — what is the complete printed output?",
    "code": "x = 5\nprint(0 < x < 10)",
    "options": [
      "True",
      "False",
      "10",
      "SyntaxError"
    ],
    "answer": 0,
    "explanation": "Python supports chained comparisons with the meaning of both inequalities holding.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "python-output"
  },
  {
    "id": "sh-w13-10",
    "topic": "week13",
    "week": 13,
    "title": "Boolean conjunction — what is the complete printed output?",
    "code": "x = 5\nprint(x > 0 and x < 10)",
    "options": [
      "False",
      "True",
      "5",
      "TypeError"
    ],
    "answer": 1,
    "explanation": "Both scalar comparisons are true, so and yields True here.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "python-output"
  },
  {
    "id": "sh-w13-11",
    "topic": "week13",
    "week": 13,
    "title": "A unit conversion — what is the complete printed output?",
    "code": "pressure_pa = 250000\nprint(pressure_pa / 1000)",
    "options": [
      "250000000",
      "250000.0",
      "250.0",
      "0.25"
    ],
    "answer": 2,
    "explanation": "One kilopascal is 1000 pascals, so the numerical value is divided by 1000.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "python-output"
  },
  {
    "id": "sh-w13-12",
    "topic": "week13",
    "week": 13,
    "title": "Portable temperature formula — what is the complete printed output?",
    "code": "c = 20\nprint(f\"{c * 9 / 5 + 32:.1f}\")",
    "options": [
      "52.0",
      "36.0",
      "20.0",
      "68.0"
    ],
    "answer": 3,
    "explanation": "The formula and division semantics must be preserved when translating the Celsius-to-Fahrenheit calculation.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "python-output"
  },
  {
    "id": "sh-w13-13",
    "topic": "week13",
    "week": 13,
    "title": "A Python matrix representation — what is the complete printed output?",
    "code": "a = [[1, 2], [3, 4]]\nprint(a[1][0])",
    "options": [
      "3",
      "1",
      "2",
      "4"
    ],
    "answer": 0,
    "explanation": "The first index chooses the second row; the second chooses its first element.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "python-output"
  },
  {
    "id": "sh-w13-14",
    "topic": "week13",
    "week": 13,
    "title": "Manual elementwise product — what is the complete printed output?",
    "code": "a, b = [2, 3], [4, 5]\nprint([x*y for x, y in zip(a, b)])",
    "options": [
      "[2, 3, 4, 5]",
      "[8, 15]",
      "23",
      "[6, 8]"
    ],
    "answer": 1,
    "explanation": "zip pairs corresponding entries and the comprehension multiplies each pair.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "python-output"
  },
  {
    "id": "sh-w13-15",
    "topic": "week13",
    "week": 13,
    "title": "Manual dot product — what is the complete printed output?",
    "code": "a, b = [2, 3], [4, 5]\nprint(sum(x*y for x, y in zip(a, b)))",
    "options": [
      "[8, 15]",
      "14",
      "23",
      "15"
    ],
    "answer": 2,
    "explanation": "The dot product sums the pairwise products: 8 + 15 = 23.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "python-output"
  },
  {
    "id": "sh-w13-16",
    "topic": "week13",
    "week": 13,
    "title": "Cooling update — what is the complete printed output?",
    "code": "temperature, ambient, rate, dt = 80, 20, 0.1, 0.5\nnew = temperature + dt * (-rate * (temperature-ambient))\nprint(new)",
    "options": [
      "74.0",
      "83.0",
      "50.0",
      "77.0"
    ],
    "answer": 3,
    "explanation": "The explicit update subtracts 0.5 * 0.1 * 60 = 3 from the current temperature.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "python-output"
  },
  {
    "id": "sh-w13-17",
    "topic": "week13",
    "week": 13,
    "title": "Iteration count across a port — what is the complete printed output?",
    "code": "count = 0\nfor i in range(5):\n    count += 1\nprint(count)",
    "options": [
      "5",
      "4",
      "6",
      "0"
    ],
    "answer": 0,
    "explanation": "Python indices 0 through 4 give five iterations; translation must preserve the number of updates.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "python-output"
  },
  {
    "id": "sh-w13-18",
    "topic": "week13",
    "week": 13,
    "title": "A scalar contract check — what is the complete printed output?",
    "code": "import math\nx = float(\"nan\")\nprint(math.isfinite(x))",
    "options": [
      "True",
      "False",
      "nan",
      "ValueError"
    ],
    "answer": 1,
    "explanation": "NaN is not finite; conversion success alone does not establish a finite-data contract.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "python-output"
  },
  {
    "id": "sh-w13-19",
    "topic": "week13",
    "week": 13,
    "title": "Copy versus reference in Python — what is the complete printed output?",
    "code": "a = [1, 2]\nb = a\nb[0] = 9\nprint(a)",
    "options": [
      "[1, 2]",
      "[9]",
      "[9, 2]",
      "None"
    ],
    "answer": 2,
    "explanation": "Python assignment shares the list; copy behavior cannot be inferred from another language’s array rules.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "python-output"
  },
  {
    "id": "sh-w13-20",
    "topic": "week13",
    "week": 13,
    "title": "Explicit list copy — what is the complete printed output?",
    "code": "a = [1, 2]\nb = a.copy()\nb[0] = 9\nprint(a, b)",
    "options": [
      "[9, 2] [9, 2]",
      "[1, 2] [1, 2]",
      "None [9, 2]",
      "[1, 2] [9, 2]"
    ],
    "answer": 3,
    "explanation": "The flat lists have independent outer storage after the explicit copy.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "python-output"
  },
  {
    "id": "sh-w13-21",
    "topic": "week13",
    "week": 13,
    "title": "A portable mean — what is the complete printed output?",
    "code": "values = [2, 4, 9]\nprint(sum(values) / len(values))",
    "options": [
      "5.0",
      "5",
      "15",
      "3.0"
    ],
    "answer": 0,
    "explanation": "The mean is 15 / 3, with Python / producing a float.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "python-output"
  },
  {
    "id": "sh-w13-22",
    "topic": "week13",
    "week": 13,
    "title": "Argument mutation — what is the complete printed output?",
    "code": "def update(a):\n    a[0] += 1\nxs = [4, 5]\nupdate(xs)\nprint(xs)",
    "options": [
      "[4, 5]",
      "[5, 5]",
      "[4, 6]",
      "None"
    ],
    "answer": 1,
    "explanation": "The parameter references the caller’s list, so the element change is visible to the caller.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "python-output"
  },
  {
    "id": "sh-w13-23",
    "topic": "week13",
    "week": 13,
    "title": "Rebinding a scalar parameter — what is the complete printed output?",
    "code": "def update(x):\n    x += 1\na = 4\nupdate(a)\nprint(a)",
    "options": [
      "5",
      "None",
      "4",
      "0"
    ],
    "answer": 2,
    "explanation": "The local rebinding does not change the caller’s binding of the immutable integer.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "python-output"
  },
  {
    "id": "sh-w13-24",
    "topic": "week13",
    "week": 13,
    "title": "Python equality versus assignment — what is the complete printed output?",
    "code": "x = 3\nprint(x == 3)",
    "options": [
      "3",
      "False",
      "None",
      "True"
    ],
    "answer": 3,
    "explanation": "== compares values; = is an assignment statement in this code.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "python-output"
  },
  {
    "id": "sh-w13-25",
    "topic": "week13",
    "week": 13,
    "title": "Row construction without aliasing — what is the complete printed output?",
    "code": "a = [[0]*2 for _ in range(2)]\na[0][0] = 7\nprint(a)",
    "options": [
      "[[7, 0], [0, 0]]",
      "[[7, 0], [7, 0]]",
      "[[0, 0], [0, 0]]",
      "[[7, 7], [0, 0]]"
    ],
    "answer": 0,
    "explanation": "The comprehension creates a fresh row list for each iteration.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "python-output"
  },
  {
    "id": "sh-w13-26",
    "topic": "week13",
    "week": 13,
    "title": "For MATLAB vectors, which operator expresses elementwise multiplication?",
    "code": "",
    "options": [
      "* for every vector shape",
      ".*",
      "**",
      "and"
    ],
    "answer": 1,
    "explanation": "MATLAB distinguishes elementwise .* from matrix multiplication *; translation must preserve the intended operation.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "concept"
  },
  {
    "id": "sh-w13-27",
    "topic": "week13",
    "week": 13,
    "title": "In MATLAB, ordinary array indexing starts at:",
    "code": "",
    "options": [
      "0",
      "-1",
      "1",
      "The last entry"
    ],
    "answer": 2,
    "explanation": "MATLAB uses one-based indexing, unlike Python, C++ vectors and Java arrays.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "concept"
  },
  {
    "id": "sh-w13-28",
    "topic": "week13",
    "week": 13,
    "title": "Which Python operator is exponentiation?",
    "code": "",
    "options": [
      "^",
      "^^",
      "exp as an infix operator",
      "**"
    ],
    "answer": 3,
    "explanation": "Python ** raises a value to a power; ^ has a different bitwise meaning.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "concept"
  },
  {
    "id": "sh-w13-29",
    "topic": "week13",
    "week": 13,
    "title": "In C++17, 7 / 2 with both operands of type int evaluates to:",
    "code": "",
    "options": [
      "3",
      "3.5",
      "4",
      "A compile error"
    ],
    "answer": 0,
    "explanation": "Integer division truncates the quotient toward zero; use an appropriate floating operand for a fractional result.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "concept"
  },
  {
    "id": "sh-w13-30",
    "topic": "week13",
    "week": 13,
    "title": "In Java, -7 / 2 with both operands of type int evaluates to:",
    "code": "",
    "options": [
      "-4",
      "-3",
      "-3.5",
      "4"
    ],
    "answer": 1,
    "explanation": "Java integer division truncates toward zero, which differs from Python floor division for negative quotients.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "concept"
  },
  {
    "id": "sh-w13-31",
    "topic": "week13",
    "week": 13,
    "title": "Which C++ expression obtains floating-point division for integer variables a and nonzero b?",
    "code": "",
    "options": [
      "static_cast<double>(a / b)",
      "a / b using int operands only",
      "static_cast<double>(a) / b",
      "a % b"
    ],
    "answer": 2,
    "explanation": "Converting before division changes the arithmetic; converting an already truncated quotient is too late.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "concept"
  },
  {
    "id": "sh-w13-32",
    "topic": "week13",
    "week": 13,
    "title": "A Java array of length n has valid ordinary indices:",
    "code": "",
    "options": [
      "1 through n",
      "0 through n",
      "-1 through n-2",
      "0 through n-1"
    ],
    "answer": 3,
    "explanation": "Java arrays are zero-based and reject indices outside the allocated range.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "concept"
  },
  {
    "id": "sh-w13-33",
    "topic": "week13",
    "week": 13,
    "title": "Which MATLAB expression selects the first element of vector a?",
    "code": "",
    "options": [
      "a(1)",
      "a[0]",
      "a(0)",
      "a{0} for an ordinary numeric vector"
    ],
    "answer": 0,
    "explanation": "Numeric-array indexing uses parentheses and starts at one.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "concept"
  },
  {
    "id": "sh-w13-34",
    "topic": "week13",
    "week": 13,
    "title": "Which MATLAB operator expresses ordinary matrix multiplication?",
    "code": "",
    "options": [
      ".* in every case",
      "*",
      "**",
      "^ for two arbitrary matrices"
    ],
    "answer": 1,
    "explanation": "* computes a matrix product when dimensions are compatible; .* is elementwise.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "concept"
  },
  {
    "id": "sh-w13-35",
    "topic": "week13",
    "week": 13,
    "title": "What must be preserved when porting a numerical algorithm?",
    "code": "",
    "options": [
      "Only variable names",
      "Only indentation",
      "Contract, units, dimensions, update order and error policy",
      "Only the number of source lines"
    ],
    "answer": 2,
    "explanation": "Equivalent syntax is insufficient if numerical meaning or observable behavior changes.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "concept"
  },
  {
    "id": "sh-w13-36",
    "topic": "week13",
    "week": 13,
    "title": "Why is a Python chained comparison unsafe to translate literally as 0 < x < 10 in C++?",
    "code": "",
    "options": [
      "C++ has no comparisons",
      "C++ automatically preserves Python chaining semantics",
      "It always produces a compile error",
      "C++ evaluates the first comparison to a Boolean before the next comparison"
    ],
    "answer": 3,
    "explanation": "Use an explicit conjunction of the two intended comparisons in C++.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "concept"
  },
  {
    "id": "sh-w13-37",
    "topic": "week13",
    "week": 13,
    "title": "Which C++/Java scalar Boolean operator corresponds to short-circuit and?",
    "code": "",
    "options": [
      "&&",
      "& in every context",
      "and as a Java keyword",
      ".*"
    ],
    "answer": 0,
    "explanation": "&& evaluates the right operand only if the left operand is true in these scalar Boolean contexts.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "concept"
  },
  {
    "id": "sh-w13-38",
    "topic": "week13",
    "week": 13,
    "title": "What does a semicolon usually do at the end of a MATLAB calculation?",
    "code": "",
    "options": [
      "Deletes the variable",
      "Suppresses display of that result",
      "Ends the whole program",
      "Converts the result to an integer"
    ],
    "answer": 1,
    "explanation": "The calculation still runs and stores its result; automatic display is suppressed.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "concept"
  },
  {
    "id": "sh-w13-39",
    "topic": "week13",
    "week": 13,
    "title": "MATLAB 1:4 includes:",
    "code": "",
    "options": [
      "1, 2, 3 only",
      "0, 1, 2, 3",
      "1, 2, 3, 4",
      "Only 1 and 4"
    ],
    "answer": 2,
    "explanation": "The colon sequence includes the endpoint when the step reaches it, unlike Python range’s exclusive stop.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "concept"
  },
  {
    "id": "sh-w13-40",
    "topic": "week13",
    "week": 13,
    "title": "Which language feature differs between Python names and typical Java variable declarations?",
    "code": "",
    "options": [
      "Python values have no types",
      "Java objects cannot have methods",
      "Python cannot store integers",
      "Java variables have declared static types"
    ],
    "answer": 3,
    "explanation": "Python names can be rebound dynamically; Java declaration types constrain assignments at compile time.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "concept"
  },
  {
    "id": "sh-w13-41",
    "topic": "week13",
    "week": 13,
    "title": "A successful compilation demonstrates:",
    "code": "",
    "options": [
      "Acceptance of the program by that compiler under the supplied options",
      "Correct physical assumptions",
      "Correct output for every input",
      "No runtime exceptions are possible"
    ],
    "answer": 0,
    "explanation": "Compilation checks language/type requirements but does not establish full functional correctness.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "concept"
  },
  {
    "id": "sh-w13-42",
    "topic": "week13",
    "week": 13,
    "title": "Why use shared small fixtures when comparing implementations across languages?",
    "code": "",
    "options": [
      "They force identical memory layouts",
      "They expose semantic differences against independently justified results",
      "They guarantee identical runtimes",
      "They remove every floating-point difference"
    ],
    "answer": 1,
    "explanation": "Equivalent inputs and expectations reveal translation mistakes in values, units and boundaries.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "concept"
  },
  {
    "id": "sh-w13-43",
    "topic": "week13",
    "week": 13,
    "title": "Which claim about a MATLAB snippet reviewed but not executed is accurate?",
    "code": "",
    "options": [
      "It passed MATLAB runtime tests",
      "A Python analogue proves MATLAB execution succeeded",
      "Its result is derived or reviewed, with native execution unverified",
      "Compilation and execution are the same"
    ],
    "answer": 2,
    "explanation": "Execution claims must reflect what was actually run; an analogue provides different evidence.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "concept"
  },
  {
    "id": "sh-w13-44",
    "topic": "week13",
    "week": 13,
    "title": "Why check integer division explicitly in a translation?",
    "code": "",
    "options": [
      "Division has identical semantics in every language",
      "All divisions round down in every language",
      "Changing variable names changes the quotient",
      "Operand types can change fractional-result behavior"
    ],
    "answer": 3,
    "explanation": "The same-looking expression can truncate, floor or perform true division depending on language and types.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "concept"
  },
  {
    "id": "sh-w13-45",
    "topic": "week13",
    "week": 13,
    "title": "What is a dimension check before a matrix product?",
    "code": "",
    "options": [
      "Verify inner dimensions are compatible",
      "Verify both matrices have the same filename",
      "Verify every value is positive",
      "Verify both arrays have only one row"
    ],
    "answer": 0,
    "explanation": "An m-by-k matrix multiplies a k-by-n matrix to produce an m-by-n result.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "concept"
  },
  {
    "id": "sh-w13-46",
    "topic": "week13",
    "week": 13,
    "title": "A numerical port changes the update order from simultaneous old-state updates to sequential updates. This can:",
    "code": "",
    "options": [
      "Only affect comments",
      "Change the mathematical scheme and results",
      "Never affect output",
      "Guarantee greater accuracy"
    ],
    "answer": 1,
    "explanation": "Later sequential calculations may use already updated state instead of the intended old values.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "concept"
  },
  {
    "id": "sh-w13-47",
    "topic": "week13",
    "week": 13,
    "title": "Which Python representation requires care because rows may be aliased?",
    "code": "",
    "options": [
      "[[0]*3 for _ in range(2)]",
      "[1, 2, 3]",
      "[[0]*3]*2",
      "tuple([1, 2, 3])"
    ],
    "answer": 2,
    "explanation": "Repetition duplicates references to one row, so modifying a row entry can affect multiple apparent rows.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "concept"
  },
  {
    "id": "sh-w13-48",
    "topic": "week13",
    "week": 13,
    "title": "What should a cross-language error policy specify?",
    "code": "",
    "options": [
      "Only a preferred editor",
      "Only the source-file extension",
      "That every exception is ignored",
      "How invalid inputs and unavailable results are reported"
    ],
    "answer": 3,
    "explanation": "Different languages have different mechanisms; the interface meaning should remain explicit.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "concept"
  },
  {
    "id": "sh-w13-49",
    "topic": "week13",
    "week": 13,
    "title": "Which is a transferable idea across Python, MATLAB, C++ and Java?",
    "code": "",
    "options": [
      "Decomposition into clear operations with tested contracts",
      "Identical array syntax",
      "Identical integer division",
      "Identical memory ownership rules"
    ],
    "answer": 0,
    "explanation": "Problem structure and validation principles transfer even when syntax and runtime semantics differ.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "concept"
  },
  {
    "id": "sh-w13-50",
    "topic": "week13",
    "week": 13,
    "title": "A correct numerical result in another language should be compared using:",
    "code": "",
    "options": [
      "String equality of every diagnostic line only",
      "A justified exact or tolerance-based criterion appropriate to the result",
      "Any tolerance large enough to pass",
      "The same number of source lines"
    ],
    "answer": 1,
    "explanation": "Comparison should preserve relevant numeric meaning and account for legitimate representation differences.",
    "bank": "second-half",
    "source": "Week 13 · Original practice · Python, MATLAB, C++ and Java",
    "mode": "concept"
  },
  {
    "id": "sh-w14-01",
    "topic": "week14",
    "week": 14,
    "title": "Engineering units — what is the complete printed output?",
    "code": "force_n, area_m2 = 120, 0.004\nprint(force_n / area_m2)",
    "options": [
      "0.000033333333333333335",
      "480.0",
      "30000.0",
      "30.0"
    ],
    "answer": 2,
    "explanation": "Stress is force divided by area: 120 / 0.004 = 30000 pascals.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "python-output"
  },
  {
    "id": "sh-w14-02",
    "topic": "week14",
    "week": 14,
    "title": "Combined filtering and averaging — what is the complete printed output?",
    "code": "xs = [-2, 4, 8, -1, 6]\nvalid = [x for x in xs if x >= 0]\nprint(sum(valid) / len(valid))",
    "options": [
      "3.0",
      "18.0",
      "5.0",
      "6.0"
    ],
    "answer": 3,
    "explanation": "Only 4, 8 and 6 are retained; their average is 18 / 3.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "python-output"
  },
  {
    "id": "sh-w14-03",
    "topic": "week14",
    "week": 14,
    "title": "Parsing and checking a record — what is the complete printed output?",
    "code": "raw = [' 2 ', '4', 'bad', '6']\nvalues = []\nfor s in raw:\n    try:\n        values.append(float(s.strip()))\n    except ValueError:\n        pass\nprint(len(values), sum(values))",
    "options": [
      "3 12.0",
      "4 12.0",
      "3 246.0",
      "4 0.0"
    ],
    "answer": 0,
    "explanation": "Three strings convert successfully, and their float sum is 12.0; the policy here skips conversion failures.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "python-output"
  },
  {
    "id": "sh-w14-04",
    "topic": "week14",
    "week": 14,
    "title": "Dictionary accumulation — what is the complete printed output?",
    "code": "counts = {}\nfor tag in ['A', 'B', 'A', 'C', 'A']:\n    counts[tag] = counts.get(tag, 0) + 1\nprint(counts['A'], len(counts))",
    "options": [
      "3 5",
      "3 3",
      "2 3",
      "1 5"
    ],
    "answer": 1,
    "explanation": "A occurs three times, and there are three distinct tags.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "python-output"
  },
  {
    "id": "sh-w14-05",
    "topic": "week14",
    "week": 14,
    "title": "A stopping criterion — what is the complete printed output?",
    "code": "error = 1.0\nsteps = 0\nwhile error > 0.1:\n    error /= 2\n    steps += 1\nprint(steps)",
    "options": [
      "3",
      "5",
      "4",
      "10"
    ],
    "answer": 2,
    "explanation": "The errors are 0.5, 0.25, 0.125 and 0.0625; only the fourth update crosses the threshold.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "python-output"
  },
  {
    "id": "sh-w14-06",
    "topic": "week14",
    "week": 14,
    "title": "A bisection update — what is the complete printed output?",
    "code": "lo, hi = 0.0, 2.0\nmid = (lo+hi)/2\nif mid*mid < 2:\n    lo = mid\nelse:\n    hi = mid\nprint(lo, hi)",
    "options": [
      "0.0 1.0",
      "1.0 1.0",
      "0.0 2.0",
      "1.0 2.0"
    ],
    "answer": 3,
    "explanation": "At mid=1, the square is below 2, so the lower endpoint moves to 1.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "python-output"
  },
  {
    "id": "sh-w14-07",
    "topic": "week14",
    "week": 14,
    "title": "Recursive sum — what is the complete printed output?",
    "code": "def total(xs):\n    if not xs:\n        return 0\n    return xs[0] + total(xs[1:])\nprint(total([3, -1, 5]))",
    "options": [
      "7",
      "9",
      "5",
      "0"
    ],
    "answer": 0,
    "explanation": "The recursion adds 3, -1 and 5, then terminates on the empty list.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "python-output"
  },
  {
    "id": "sh-w14-08",
    "topic": "week14",
    "week": 14,
    "title": "A function without side effects — what is the complete printed output?",
    "code": "def shifted(xs):\n    return [x+1 for x in xs]\na = [2, 4]\nb = shifted(a)\nprint(a, b)",
    "options": [
      "[3, 5] [3, 5]",
      "[2, 4] [3, 5]",
      "[2, 4] [2, 4]",
      "None [3, 5]"
    ],
    "answer": 1,
    "explanation": "The comprehension builds a new list rather than modifying a.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "python-output"
  },
  {
    "id": "sh-w14-09",
    "topic": "week14",
    "week": 14,
    "title": "Shallow-copy review — what is the complete printed output?",
    "code": "a = [[2], [3]]\nb = a[:]\nb[1][0] = 8\nprint(a)",
    "options": [
      "[[2], [3]]",
      "[[8], [3]]",
      "[[2], [8]]",
      "[[8], [8]]"
    ],
    "answer": 2,
    "explanation": "The outer lists differ but their inner lists are shared.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "python-output"
  },
  {
    "id": "sh-w14-10",
    "topic": "week14",
    "week": 14,
    "title": "Sorting structured results — what is the complete printed output?",
    "code": "rows = [{\"name\":\"A\", \"cost\":7}, {\"name\":\"B\", \"cost\":4}]\nprint(sorted(rows, key=lambda r:r[\"cost\"])[0][\"name\"])",
    "options": [
      "A",
      "4",
      "KeyError",
      "B"
    ],
    "answer": 3,
    "explanation": "Sorting by cost puts the lower-cost B record first.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "python-output"
  },
  {
    "id": "sh-w14-11",
    "topic": "week14",
    "week": 14,
    "title": "Exception plus final report — what is the complete printed output?",
    "code": "try:\n    value = float('oops')\nexcept ValueError:\n    value = None\nprint(value is None)",
    "options": [
      "True",
      "False",
      "oops",
      "ValueError"
    ],
    "answer": 0,
    "explanation": "The explicit missing-value policy assigns None after conversion fails.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "python-output"
  },
  {
    "id": "sh-w14-12",
    "topic": "week14",
    "week": 14,
    "title": "Validation of finite measurements — what is the complete printed output?",
    "code": "import math\nxs = [1.0, float(\"inf\"), -2.0, float(\"nan\")]\nprint(sum(math.isfinite(x) for x in xs))",
    "options": [
      "4",
      "2",
      "3",
      "1"
    ],
    "answer": 1,
    "explanation": "Only 1.0 and -2.0 are finite; sign alone does not determine finiteness.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "python-output"
  },
  {
    "id": "sh-w14-13",
    "topic": "week14",
    "week": 14,
    "title": "Recursion and base cases — what is the complete printed output?",
    "code": "def f(n):\n    if n <= 1:\n        return 1\n    return n*f(n-1)\nprint(f(1), f(4))",
    "options": [
      "0 24",
      "1 12",
      "1 24",
      "1 4"
    ],
    "answer": 2,
    "explanation": "The declared base case returns one; the second call multiplies 4 * 3 * 2 * 1.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "python-output"
  },
  {
    "id": "sh-w14-14",
    "topic": "week14",
    "week": 14,
    "title": "Default dictionary values — what is the complete printed output?",
    "code": "readings = {'A': [2, 4], 'B': [6]}\nprint(len(readings.get('C', [])))",
    "options": [
      "1",
      "2",
      "KeyError",
      "0"
    ],
    "answer": 3,
    "explanation": "The absent key uses an empty-list default, whose length is zero.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "python-output"
  },
  {
    "id": "sh-w14-15",
    "topic": "week14",
    "week": 14,
    "title": "An inclusive alarm threshold — what is the complete printed output?",
    "code": "xs = [49, 50, 51]\nprint([x for x in xs if x >= 50])",
    "options": [
      "[50, 51]",
      "[51]",
      "[49, 50]",
      "[49, 50, 51]"
    ],
    "answer": 0,
    "explanation": "The stated >= condition includes the exact threshold value.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "python-output"
  },
  {
    "id": "sh-w14-16",
    "topic": "week14",
    "week": 14,
    "title": "Rounding at presentation time — what is the complete printed output?",
    "code": "x = 10 / 3\nprint(f\"{x:.2f}\", x > 3.33)",
    "options": [
      "3.33 False",
      "3.33 True",
      "3.34 True",
      "3.3 True"
    ],
    "answer": 1,
    "explanation": "Formatting changes the displayed representation, not the underlying x used by the comparison.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "python-output"
  },
  {
    "id": "sh-w14-17",
    "topic": "week14",
    "week": 14,
    "title": "Cumulative object state — what is the complete printed output?",
    "code": "class Total:\n    def __init__(self):\n        self.x = 0\n    def add(self, x):\n        self.x += x\nt = Total()\nfor x in [2, -1, 5]:\n    t.add(x)\nprint(t.x)",
    "options": [
      "5",
      "8",
      "6",
      "0"
    ],
    "answer": 2,
    "explanation": "The same instance accumulates all three signed updates.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "python-output"
  },
  {
    "id": "sh-w14-18",
    "topic": "week14",
    "week": 14,
    "title": "Reviewing dynamic dispatch — what is the complete printed output?",
    "code": "class Sensor:\n    def read(self):\n        return 4\nclass Scaled(Sensor):\n    def read(self):\n        return 3*super().read()\nprint(Scaled().read())",
    "options": [
      "4",
      "7",
      "None",
      "12"
    ],
    "answer": 3,
    "explanation": "The override obtains the base reading and multiplies it by three.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "python-output"
  },
  {
    "id": "sh-w14-19",
    "topic": "week14",
    "week": 14,
    "title": "Search after preparation — what is the complete printed output?",
    "code": "from bisect import bisect_left\na = sorted([9, 2, 6])\ni = bisect_left(a, 6)\nprint(a[i], i)",
    "options": [
      "6 1",
      "6 2",
      "2 0",
      "9 2"
    ],
    "answer": 0,
    "explanation": "After sorting, the list is [2, 6, 9], so 6 is at index 1.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "python-output"
  },
  {
    "id": "sh-w14-20",
    "topic": "week14",
    "week": 14,
    "title": "Data retention policy — what is the complete printed output?",
    "code": "rows = [(0, 10), (1, None), (2, 14)]\nkept = [(t,x) for t,x in rows if x is not None]\nprint(kept)",
    "options": [
      "[(0, 10), (1, 14)]",
      "[(0, 10), (2, 14)]",
      "[(0, 10), (1, None), (2, 14)]",
      "[(0, 10), (2, 0)]"
    ],
    "answer": 1,
    "explanation": "Filtering removes the missing record while preserving original timestamps on the retained rows.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "python-output"
  },
  {
    "id": "sh-w14-21",
    "topic": "week14",
    "week": 14,
    "title": "Whole-workflow accounting — what is the complete printed output?",
    "code": "prepare = 100\nqueries = 20\nper_query = 3\nprint(prepare + queries*per_query)",
    "options": [
      "60",
      "2000",
      "160",
      "123"
    ],
    "answer": 2,
    "explanation": "Total work includes the one-time preparation plus all twenty query costs.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "python-output"
  },
  {
    "id": "sh-w14-22",
    "topic": "week14",
    "week": 14,
    "title": "Window review — what is the complete printed output?",
    "code": "a = [1, 3, 5, 7]\nprint([(a[i]+a[i+1])/2 for i in range(len(a)-1)])",
    "options": [
      "[2.0, 6.0]",
      "[1.0, 3.0, 5.0, 7.0]",
      "[4.0]",
      "[2.0, 4.0, 6.0]"
    ],
    "answer": 3,
    "explanation": "All three adjacent pairs form complete width-two windows.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "python-output"
  },
  {
    "id": "sh-w14-23",
    "topic": "week14",
    "week": 14,
    "title": "A compact regression test — what is the complete printed output?",
    "code": "def area(w,h):\n    return w*h\nprint(all(area(w,h)==expected for w,h,expected in [(2,3,6),(0,5,0),(4,4,16)]))",
    "options": [
      "True",
      "False",
      "6",
      "None"
    ],
    "answer": 0,
    "explanation": "All three independent expected products match, so all returns True.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "python-output"
  },
  {
    "id": "sh-w14-24",
    "topic": "week14",
    "week": 14,
    "title": "A reconstruction check — what is the complete printed output?",
    "code": "xs = [8, 2, 8, 1]\nys = sorted(xs)\nprint(len(xs) == len(ys), sum(xs) == sum(ys))",
    "options": [
      "True False",
      "True True",
      "False True",
      "False False"
    ],
    "answer": 1,
    "explanation": "Sorting preserves these aggregates, although these checks alone do not prove equal multiplicities.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "python-output"
  },
  {
    "id": "sh-w14-25",
    "topic": "week14",
    "week": 14,
    "title": "Ordered reporting — what is the complete printed output?",
    "code": "results = {\"B\": 2, \"A\": 5}\nfor key in sorted(results):\n    print(key, results[key])",
    "options": [
      "B 2\nA 5",
      "A 2\nB 5",
      "A 5\nB 2",
      "A B"
    ],
    "answer": 2,
    "explanation": "The explicit sorted-key traversal orders the report alphabetically.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "python-output"
  },
  {
    "id": "sh-w14-26",
    "topic": "week14",
    "week": 14,
    "title": "An engineering computation should begin by stating:",
    "code": "",
    "options": [
      "Only the plotting color",
      "Only a function name",
      "Only a desired runtime",
      "Inputs, outputs, units, assumptions and valid domains"
    ],
    "answer": 3,
    "explanation": "A clear problem contract supports correct implementation and meaningful interpretation.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "concept"
  },
  {
    "id": "sh-w14-27",
    "topic": "week14",
    "week": 14,
    "title": "Why keep raw measurements separate from processed values?",
    "code": "",
    "options": [
      "To preserve evidence and make transformations traceable",
      "To guarantee sensors never fail",
      "To avoid documenting conversions",
      "To prevent all data analysis"
    ],
    "answer": 0,
    "explanation": "Separate raw data allow checking, revising and reproducing processing choices.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "concept"
  },
  {
    "id": "sh-w14-28",
    "topic": "week14",
    "week": 14,
    "title": "A report omits rejected records. What else should it communicate?",
    "code": "",
    "options": [
      "That no records were rejected",
      "The rejection policy and enough counts/context to interpret the result",
      "Only the final rounded mean",
      "An unrelated benchmark"
    ],
    "answer": 1,
    "explanation": "Filtering can change conclusions; readers need to understand the retained dataset and exclusions.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "concept"
  },
  {
    "id": "sh-w14-29",
    "topic": "week14",
    "week": 14,
    "title": "Which preserves timestamp meaning after filtering missing readings?",
    "code": "",
    "options": [
      "Renumber all timestamps without disclosure",
      "Replace every missing reading by zero automatically",
      "Keep each retained reading paired with its original timestamp",
      "Sort readings independently of times"
    ],
    "answer": 2,
    "explanation": "Values and times form related records and must remain aligned.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "concept"
  },
  {
    "id": "sh-w14-30",
    "topic": "week14",
    "week": 14,
    "title": "A mean is undefined for an empty retained dataset. The implementation should:",
    "code": "",
    "options": [
      "Divide by zero deliberately",
      "Return an arbitrary plausible mean",
      "Reuse a stale previous mean silently",
      "Use an explicit documented empty-result policy"
    ],
    "answer": 3,
    "explanation": "Empty-input handling is part of the computation contract.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "concept"
  },
  {
    "id": "sh-w14-31",
    "topic": "week14",
    "week": 14,
    "title": "What distinguishes numerical error from model error?",
    "code": "",
    "options": [
      "Numerical error concerns the computation; model error concerns how assumptions represent reality",
      "They are always identical",
      "Only model error can affect results",
      "A passing unit test eliminates both"
    ],
    "answer": 0,
    "explanation": "Correct code can implement an inadequate model, and a suitable model can be computed inaccurately.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "concept"
  },
  {
    "id": "sh-w14-32",
    "topic": "week14",
    "week": 14,
    "title": "Why test boundary values in an alarm or classification rule?",
    "code": "",
    "options": [
      "Only large values can expose bugs",
      "Equality and nearby values can select different branches",
      "Boundaries never occur in real data",
      "Averages automatically test every boundary"
    ],
    "answer": 1,
    "explanation": "Tests around thresholds reveal off-by-one and inequality-policy errors.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "concept"
  },
  {
    "id": "sh-w14-33",
    "topic": "week14",
    "week": 14,
    "title": "Which is a sound check for a sorting routine?",
    "code": "",
    "options": [
      "Check only that the output sum is unchanged",
      "Check only the first item",
      "Compare ordered output and full element multiplicities with the input",
      "Check only that the program did not raise"
    ],
    "answer": 2,
    "explanation": "Aggregate sums alone can match despite missing or altered entries; multiplicity preservation matters.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "concept"
  },
  {
    "id": "sh-w14-34",
    "topic": "week14",
    "week": 14,
    "title": "A graph has no unit labels. What is missing?",
    "code": "",
    "options": [
      "Proof of faster runtime",
      "A guarantee of sorting stability",
      "A recursion base case",
      "Information needed to interpret the numerical axes"
    ],
    "answer": 3,
    "explanation": "Axes need meaningful quantities and units so readers can interpret scale and relationships.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "concept"
  },
  {
    "id": "sh-w14-35",
    "topic": "week14",
    "week": 14,
    "title": "Which function decomposition is useful for a measurement report?",
    "code": "",
    "options": [
      "Separate parsing, validation, calculation and presentation",
      "Put every task in one broad silent exception handler",
      "Mix rounding into every internal update",
      "Use global state for every intermediate value"
    ],
    "answer": 0,
    "explanation": "Separating concerns makes individual contracts easier to test and revise.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "concept"
  },
  {
    "id": "sh-w14-36",
    "topic": "week14",
    "week": 14,
    "title": "Why retain full precision internally and round for display when appropriate?",
    "code": "",
    "options": [
      "Formatted text is always more accurate than numbers",
      "Repeated early rounding can accumulate error or change decisions",
      "Rounding removes all measurement uncertainty",
      "Every algorithm requires integer output"
    ],
    "answer": 1,
    "explanation": "Presentation precision and computational precision serve different purposes.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "concept"
  },
  {
    "id": "sh-w14-37",
    "topic": "week14",
    "week": 14,
    "title": "A bisection root algorithm requires an initial bracket under its usual continuity contract. Which check is relevant?",
    "code": "",
    "options": [
      "The endpoints have the same printed width",
      "The lower endpoint must equal zero",
      "Endpoint signs enclose a sign change, with exact roots handled deliberately",
      "The midpoint must already be the root"
    ],
    "answer": 2,
    "explanation": "Continuity plus an appropriate sign bracket supports retaining a root-containing interval.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "concept"
  },
  {
    "id": "sh-w14-38",
    "topic": "week14",
    "week": 14,
    "title": "Why include both an error criterion and an iteration limit in an approximation routine?",
    "code": "",
    "options": [
      "To guarantee every model is physically correct",
      "To force the same number of iterations for all inputs",
      "To eliminate floating-point arithmetic",
      "To define convergence and a bounded failure path"
    ],
    "answer": 3,
    "explanation": "A limit prevents unbounded work when the desired criterion is not reached.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "concept"
  },
  {
    "id": "sh-w14-39",
    "topic": "week14",
    "week": 14,
    "title": "What is the correct basis for optimizing a slow workflow?",
    "code": "",
    "options": [
      "Identify the relevant costly work while preserving the contract",
      "Always rewrite it in another language first",
      "Remove required outputs first",
      "Compare source line counts only"
    ],
    "answer": 0,
    "explanation": "Measure or count the actual bottleneck and verify an equivalent result after changes.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "concept"
  },
  {
    "id": "sh-w14-40",
    "topic": "week14",
    "week": 14,
    "title": "A cached result can be reused safely only when:",
    "code": "",
    "options": [
      "The function name is unchanged",
      "The cache key captures all inputs/state affecting that result",
      "The last result looks plausible",
      "The output is numeric"
    ],
    "answer": 1,
    "explanation": "Missing dependencies can return stale results even when lookup is fast.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "concept"
  },
  {
    "id": "sh-w14-41",
    "topic": "week14",
    "week": 14,
    "title": "What does a successful finite regression suite provide?",
    "code": "",
    "options": [
      "Proof of correctness for every possible input",
      "Proof of physical safety",
      "Evidence for the tested cases and conditions",
      "A guarantee of optimal complexity"
    ],
    "answer": 2,
    "explanation": "Tests support a bounded claim and complement reasoning about contracts and invariants.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "concept"
  },
  {
    "id": "sh-w14-42",
    "topic": "week14",
    "week": 14,
    "title": "Which review activity best reveals understanding of code?",
    "code": "",
    "options": [
      "Copy output without tracing",
      "Memorize only variable names",
      "Read only the final print statement",
      "Predict state and output, explain each step, then run and compare"
    ],
    "answer": 3,
    "explanation": "Prediction and explanation expose the reasoning that execution can then check.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "concept"
  },
  {
    "id": "sh-w14-43",
    "topic": "week14",
    "week": 14,
    "title": "When translating a loop to another language, check:",
    "code": "",
    "options": [
      "Index origin, endpoint inclusion, types and update order",
      "Only comment punctuation",
      "Only font size",
      "Only filename capitalization"
    ],
    "answer": 0,
    "explanation": "These semantic differences can change iteration counts and numerical results despite similar syntax.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "concept"
  },
  {
    "id": "sh-w14-44",
    "topic": "week14",
    "week": 14,
    "title": "Which is a valid reason to use a class?",
    "code": "",
    "options": [
      "Every mathematical expression needs an object hierarchy",
      "Related persistent state and operations benefit from one interface",
      "A class guarantees all data are valid automatically",
      "Classes eliminate all test design"
    ],
    "answer": 1,
    "explanation": "Object design is useful when it clarifies state ownership and supported behavior.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "concept"
  },
  {
    "id": "sh-w14-45",
    "topic": "week14",
    "week": 14,
    "title": "What should an inherited interface promise remain across implementations?",
    "code": "",
    "options": [
      "The same private variable names",
      "The same source line count",
      "Compatible valid inputs, results and failure/state behavior",
      "The same object memory address"
    ],
    "answer": 2,
    "explanation": "Clients depend on observable contracts rather than internal implementation details.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "concept"
  },
  {
    "id": "sh-w14-46",
    "topic": "week14",
    "week": 14,
    "title": "A numerical optimization changes rounding order. What should review include?",
    "code": "",
    "options": [
      "Only the fastest timing",
      "Only code length",
      "Assume fewer operations always means more accurate",
      "Accuracy and stability checks as well as speed"
    ],
    "answer": 3,
    "explanation": "Arithmetic rearrangement can change finite-precision behavior; performance and accuracy must both be assessed.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "concept"
  },
  {
    "id": "sh-w14-47",
    "topic": "week14",
    "week": 14,
    "title": "What makes a computational result reproducible?",
    "code": "",
    "options": [
      "Recorded data provenance, processing steps, parameters and relevant environment",
      "Only a screenshot of a final number",
      "Only the author’s name",
      "A claim that defaults were used"
    ],
    "answer": 0,
    "explanation": "Others need enough information to reconstruct the calculation and its conditions.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "concept"
  },
  {
    "id": "sh-w14-48",
    "topic": "week14",
    "week": 14,
    "title": "Which distinguishes required output storage from auxiliary storage?",
    "code": "",
    "options": [
      "Both must always be excluded from every memory claim",
      "Output holds the promised results; auxiliary storage supports their construction",
      "Output is always constant size",
      "Auxiliary memory means input files only"
    ],
    "answer": 1,
    "explanation": "State explicitly whether a memory bound includes input and output to avoid ambiguity.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "concept"
  },
  {
    "id": "sh-w14-49",
    "topic": "week14",
    "week": 14,
    "title": "How should an unexpected test failure during final review be treated?",
    "code": "",
    "options": [
      "Suppress the test to make the summary green",
      "Change the answer key immediately without justification",
      "Investigate the first divergence against the intended contract",
      "Assume the machine is wrong"
    ],
    "answer": 2,
    "explanation": "The failure can expose implementation, fixture or expectation mistakes and deserves diagnosis.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "concept"
  },
  {
    "id": "sh-w14-50",
    "topic": "week14",
    "week": 14,
    "title": "What is the purpose of these Week 14 practice questions?",
    "code": "",
    "options": [
      "A declaration of the final examination contents",
      "A new grading policy",
      "A substitute for current course announcements",
      "Formative review integrating the course concepts"
    ],
    "answer": 3,
    "explanation": "Practice supports learning; it does not announce assessment format, rules or obligations.",
    "bank": "second-half",
    "source": "Week 14 · Original practice · Comprehensive course review",
    "mode": "concept"
  }
];
MCQS.push(...SECOND_HALF_MCQS);
