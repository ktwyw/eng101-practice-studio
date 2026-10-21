/* Earlier adapted course practice plus forty original extension exercises. */
const DEBUG_CASES = [
  {
    "id": "debug-b-001",
    "name": "Missing colon",
    "category": "syntax",
    "topic": "decisions",
    "source": "Debugging guide · Missing colon",
    "task": "Repair the if header. With stress 100 and allowable_stress 125, print Design is acceptable.",
    "buggy": "stress = 100\nallowable_stress = 125\nif stress < allowable_stress\n    print(\"Design is acceptable\")",
    "solutions": [
      "stress = 100\nallowable_stress = 125\nif stress < allowable_stress:\n    print(\"Design is acceptable\")"
    ],
    "tests": "assert stress < allowable_stress",
    "hint": "A block header needs a colon.",
    "explanation": "Python parses the complete file before executing it. The missing colon prevents the first statement from running.",
    "level": "Foundation",
    "referenceOutput": "Design is acceptable",
    "observed": {
      "output": "",
      "error": {
        "type": "SyntaxError",
        "message": "expected ':' (practice, line 3)"
      }
    }
  },
  {
    "id": "debug-b-004",
    "name": "Unmatched parentheses or brackets",
    "category": "syntax",
    "topic": "arithmetic",
    "source": "Debugging guide · Unmatched parentheses or brackets",
    "task": "Close the expression so stress is force divided by the rectangular area.",
    "buggy": "force = 1000\nwidth = 0.1\nthickness = 0.01\nstress = force / (width * thickness\nprint(stress)",
    "solutions": [
      "force = 1000\nwidth = 0.1\nthickness = 0.01\nstress = force / (width * thickness)\nprint(stress)"
    ],
    "tests": "assert stress == 1000000",
    "hint": "Count opening and closing parentheses.",
    "explanation": "The opening parenthesis around width * thickness needs a matching closing parenthesis.",
    "level": "Foundation",
    "referenceOutput": "1000000.0",
    "observed": {
      "output": "",
      "error": {
        "type": "SyntaxError",
        "message": "'(' was never closed (practice, line 4)"
      }
    }
  },
  {
    "id": "debug-b-006",
    "name": "Using assignment inside a condition",
    "category": "syntax",
    "topic": "decisions",
    "source": "Debugging guide · Using assignment inside a condition",
    "task": "Compare material with the string steel and assign density 7850 when it matches.",
    "buggy": "material = \"steel\"\nif material = \"steel\":\n    density = 7850",
    "solutions": [
      "material = \"steel\"\nif material == \"steel\":\n    density = 7850"
    ],
    "tests": "assert density == 7850",
    "hint": "Equality uses two equals signs.",
    "explanation": "The condition needs ==. A single = assigns a value and is invalid in this if header.",
    "level": "Foundation",
    "referenceOutput": "",
    "observed": {
      "output": "",
      "error": {
        "type": "SyntaxError",
        "message": "invalid syntax. Maybe you meant '==' or ':=' instead of '='? (practice, line 2)"
      }
    }
  },
  {
    "id": "debug-b-008",
    "name": "Missing indentation after an if statement",
    "category": "syntax",
    "topic": "decisions",
    "source": "Debugging guide · Missing indentation after an if statement",
    "task": "Put the message inside the if block. Equality at a factor of safety of 2 must pass.",
    "buggy": "factor_of_safety = 2\nif factor_of_safety >= 2:\nprint(\"Safe\")",
    "solutions": [
      "factor_of_safety = 2\nif factor_of_safety >= 2:\n    print(\"Safe\")"
    ],
    "tests": "assert factor_of_safety == 2",
    "hint": "Indent the body one level.",
    "explanation": "Python uses indentation to identify the statements controlled by the if condition.",
    "level": "Foundation",
    "referenceOutput": "Safe",
    "observed": {
      "output": "",
      "error": {
        "type": "IndentationError",
        "message": "expected an indented block after 'if' statement on line 2 (practice, line 3)"
      }
    }
  },
  {
    "id": "debug-b-010",
    "name": "Inconsistent indentation",
    "category": "syntax",
    "topic": "for",
    "source": "Debugging guide · Inconsistent indentation",
    "task": "Print each reading and add it to total within the same loop body.",
    "buggy": "readings = [1, 2, 3]\ntotal = 0\nfor reading in readings:\n    print(reading)\n      total = total + reading",
    "solutions": [
      "readings = [1, 2, 3]\ntotal = 0\nfor reading in readings:\n    print(reading)\n    total = total + reading"
    ],
    "tests": "assert total == 6",
    "hint": "Align statements in the same block.",
    "explanation": "The extra indentation before total has no preceding block header. Both loop-body statements need the same indentation.",
    "level": "Foundation",
    "referenceOutput": "1\n2\n3",
    "observed": {
      "output": "",
      "error": {
        "type": "IndentationError",
        "message": "unexpected indent (practice, line 5)"
      }
    }
  },
  {
    "id": "debug-b-012",
    "name": "Misspelled variable name",
    "category": "runtime",
    "topic": "types",
    "source": "Debugging guide · Misspelled variable name",
    "task": "Use the defined force variable to calculate stress in Pa.",
    "buggy": "force = 5000\narea = 0.002\nstress = Force / area",
    "solutions": [
      "force = 5000\narea = 0.002\nstress = force / area"
    ],
    "tests": "assert stress == 2500000",
    "hint": "Python names are case-sensitive.",
    "explanation": "Force and force are different names. Use the name assigned in this program.",
    "level": "Foundation",
    "referenceOutput": "",
    "observed": {
      "output": "",
      "error": {
        "type": "NameError",
        "message": "name 'Force' is not defined"
      }
    }
  },
  {
    "id": "debug-b-015",
    "name": "Using a variable before assigning it",
    "category": "runtime",
    "topic": "types",
    "source": "Debugging guide · Using a variable before assigning it",
    "task": "Calculate stress only after assigning both input values.",
    "buggy": "stress = force / area\nforce = 5000\narea = 0.002",
    "solutions": [
      "force = 5000\narea = 0.002\nstress = force / area"
    ],
    "tests": "assert stress == 2500000",
    "hint": "Assignment must precede use.",
    "explanation": "A clean Python session has no force or area until these assignments run. Move the calculation below them.",
    "level": "Foundation",
    "referenceOutput": "",
    "observed": {
      "output": "",
      "error": {
        "type": "NameError",
        "message": "name 'force' is not defined"
      }
    }
  },
  {
    "id": "debug-b-017",
    "name": "Forgetting quotation marks around a string",
    "category": "runtime",
    "topic": "types",
    "source": "Debugging guide · Forgetting quotation marks around a string",
    "task": "Store the material name as text.",
    "buggy": "material = steel",
    "solutions": [
      "material = \"steel\""
    ],
    "tests": "assert material == \"steel\" and isinstance(material, str)",
    "hint": "Text literals need quotation marks.",
    "explanation": "Without quotes, steel is treated as an identifier and raises NameError when it has not been defined.",
    "level": "Foundation",
    "referenceOutput": "",
    "observed": {
      "output": "",
      "error": {
        "type": "NameError",
        "message": "name 'steel' is not defined"
      }
    }
  },
  {
    "id": "debug-b-019",
    "name": "Using input as a number without conversion",
    "category": "runtime",
    "topic": "types",
    "source": "Debugging guide · Using input as a number without conversion",
    "task": "Convert both input strings to numbers before division. Fixed practice inputs are 5000 and 0.002.",
    "buggy": "responses = iter([\"5000\", \"0.002\"])\ninput = lambda prompt=\"\": next(responses)\nforce = input(\"Enter force in N: \")\narea = input(\"Enter area in m^2: \")\nstress = force / area",
    "solutions": [
      "responses = iter([\"5000\", \"0.002\"])\ninput = lambda prompt=\"\": next(responses)\nforce = float(input(\"Enter force in N: \"))\narea = float(input(\"Enter area in m^2: \"))\nstress = force / area"
    ],
    "tests": "assert stress == 2500000",
    "hint": "input() returns text; float() converts numeric text.",
    "explanation": "The two input strings cannot be divided. Numeric conversion must happen before the calculation.",
    "level": "Foundation",
    "referenceOutput": "",
    "observed": {
      "output": "",
      "error": {
        "type": "TypeError",
        "message": "unsupported operand type(s) for /: 'str' and 'str'"
      }
    }
  },
  {
    "id": "debug-b-022",
    "name": "Adding a number to a string",
    "category": "runtime",
    "topic": "types",
    "source": "Debugging guide · Adding a number to a string",
    "task": "Build the message Stress = 25.0 MPa from the numeric stress.",
    "buggy": "stress = 25.0\nmessage = \"Stress = \" + stress",
    "solutions": [
      "stress = 25.0\nmessage = f\"Stress = {stress} MPa\""
    ],
    "tests": "assert message == \"Stress = 25.0 MPa\"",
    "hint": "An f-string can insert a numeric value into text.",
    "explanation": "String concatenation does not automatically convert a float. The reference repair uses an f-string with units.",
    "level": "Foundation",
    "referenceOutput": "",
    "observed": {
      "output": "",
      "error": {
        "type": "TypeError",
        "message": "can only concatenate str (not \"float\") to str"
      }
    }
  },
  {
    "id": "debug-b-024",
    "name": "Calling a function with the wrong number of arguments",
    "category": "runtime",
    "topic": "functions",
    "source": "Debugging guide · Calling a function with the wrong number of arguments",
    "task": "Call calculate_stress with force 5000 N and area 0.002 m².",
    "buggy": "def calculate_stress(force, area):\n    return force / area\nstress = calculate_stress(5000)",
    "solutions": [
      "def calculate_stress(force, area):\n    return force / area\nstress = calculate_stress(5000, 0.002)"
    ],
    "tests": "assert stress == 2500000",
    "hint": "Check the function parameters and the call.",
    "explanation": "The function requires two arguments. The missing area argument causes TypeError.",
    "level": "Foundation",
    "referenceOutput": "",
    "observed": {
      "output": "",
      "error": {
        "type": "TypeError",
        "message": "calculate_stress() missing 1 required positional argument: 'area'"
      }
    }
  },
  {
    "id": "debug-b-028",
    "name": "Invalid numeric input",
    "category": "validation",
    "topic": "types",
    "source": "Debugging guide · Invalid numeric input",
    "task": "Handle the fixed input two with a clear message rather than an unhandled ValueError. Do not invent a numeric area.",
    "buggy": "input = lambda prompt=\"\": \"two\"\narea = float(input(\"Enter area: \"))",
    "solutions": [
      "input = lambda prompt=\"\": \"two\"\ntry:\n    area = float(input(\"Enter area in m^2: \"))\nexcept ValueError:\n    print(\"Please enter a numeric value.\")"
    ],
    "tests": "assert \"area\" not in globals()",
    "hint": "Catch ValueError around the conversion.",
    "explanation": "The word two is not numeric text. A specific conversion handler reports the issue while leaving the invalid quantity unset.",
    "level": "Foundation",
    "referenceOutput": "Please enter a numeric value.",
    "observed": {
      "output": "",
      "error": {
        "type": "ValueError",
        "message": "could not convert string to float: 'two'"
      }
    }
  },
  {
    "id": "debug-b-032",
    "name": "ZeroDivisionError",
    "category": "validation",
    "topic": "arithmetic",
    "source": "Debugging guide · ZeroDivisionError",
    "task": "Reject the nonpositive area before dividing.",
    "buggy": "force = 5000\narea = 0\nstress = force / area",
    "solutions": [
      "force = 5000\narea = 0\nif area <= 0:\n    print(\"Area must be positive.\")\nelse:\n    stress = force / area\n    print(stress)"
    ],
    "tests": "assert area <= 0 and \"stress\" not in globals()",
    "hint": "Validate the denominator before calculating.",
    "explanation": "Zero area is outside this calculation contract. Report the invalid area rather than treating the result as a valid stress.",
    "level": "Foundation",
    "referenceOutput": "Area must be positive.",
    "observed": {
      "output": "",
      "error": {
        "type": "ZeroDivisionError",
        "message": "division by zero"
      }
    }
  },
  {
    "id": "debug-b-034",
    "name": "ZeroDivisionError",
    "category": "validation",
    "topic": "lists",
    "source": "Debugging guide · ZeroDivisionError",
    "task": "Handle an empty measurement list with No readings available.",
    "buggy": "readings = []\naverage = sum(readings) / len(readings)",
    "solutions": [
      "readings = []\nif len(readings) == 0:\n    print(\"No readings available.\")\nelse:\n    average = sum(readings) / len(readings)\n    print(average)"
    ],
    "tests": "assert readings == [] and \"average\" not in globals()",
    "hint": "The empty list has length zero.",
    "explanation": "The arithmetic mean requires at least one measurement. Check the list before dividing.",
    "level": "Foundation",
    "referenceOutput": "No readings available.",
    "observed": {
      "output": "",
      "error": {
        "type": "ZeroDivisionError",
        "message": "division by zero"
      }
    }
  },
  {
    "id": "debug-b-036",
    "name": "IndexError",
    "category": "runtime",
    "topic": "lists",
    "source": "Debugging guide · IndexError",
    "task": "Print the last reading, 22.1, using its valid nonnegative index.",
    "buggy": "readings = [21.3, 21.7, 22.1]\nprint(readings[3])",
    "solutions": [
      "readings = [21.3, 21.7, 22.1]\nprint(readings[2])"
    ],
    "tests": "assert readings[2] == 22.1",
    "hint": "The first index is zero.",
    "explanation": "A three-element list has indices 0, 1, and 2. Index 3 is outside the list.",
    "level": "Foundation",
    "referenceOutput": "22.1",
    "observed": {
      "output": "",
      "error": {
        "type": "IndexError",
        "message": "list index out of range"
      }
    }
  },
  {
    "id": "debug-b-038",
    "name": "Off-by-one errors",
    "category": "runtime",
    "topic": "for",
    "source": "Debugging guide · Off-by-one errors",
    "task": "Print every reading exactly once using valid indices.",
    "buggy": "readings = [21.3, 21.7, 22.1]\nfor i in range(1, len(readings) + 1):\n    print(readings[i])",
    "solutions": [
      "readings = [21.3, 21.7, 22.1]\nfor i in range(len(readings)):\n    print(readings[i])"
    ],
    "tests": "assert list(range(len(readings))) == [0, 1, 2]",
    "hint": "Start at zero and exclude len(readings).",
    "explanation": "Starting at one misses the first item; including len(readings) tries to access an invalid final index.",
    "level": "Foundation",
    "referenceOutput": "21.3\n21.7\n22.1",
    "observed": {
      "output": "21.7\n22.1",
      "error": {
        "type": "IndexError",
        "message": "list index out of range"
      }
    }
  },
  {
    "id": "debug-b-042",
    "name": "KeyError",
    "category": "validation",
    "topic": "dicts",
    "source": "Debugging guide · KeyError",
    "task": "Handle the missing copper key with Material not found. Keep the dictionary unchanged.",
    "buggy": "materials = {\n    \"steel\": 7850,\n    \"aluminum\": 2700\n}\nprint(materials[\"copper\"])",
    "solutions": [
      "materials = {\n    \"steel\": 7850,\n    \"aluminum\": 2700\n}\nif \"copper\" in materials:\n    print(materials[\"copper\"])\nelse:\n    print(\"Material not found\")"
    ],
    "tests": "assert \"copper\" not in materials and len(materials) == 2",
    "hint": "Check key membership before indexing.",
    "explanation": "A missing material should produce a clear absence message. Inventing a density would conceal missing data.",
    "level": "Foundation",
    "referenceOutput": "Material not found",
    "observed": {
      "output": "",
      "error": {
        "type": "KeyError",
        "message": "'copper'"
      }
    }
  },
  {
    "id": "debug-b-045",
    "name": "Normalize a dictionary lookup",
    "category": "runtime",
    "topic": "dicts",
    "source": "Debugging guide · Case and spacing in dictionary keys",
    "task": "Normalize the permitted material-name input Steel with surrounding spaces, then print the stored density.",
    "buggy": "materials = {\"steel\": 7850}\nmaterial = \" Steel \"\nprint(materials[material])",
    "solutions": [
      "materials = {\"steel\": 7850}\nmaterial = \" Steel \".strip().lower()\nprint(materials[material])"
    ],
    "tests": "assert material == \"steel\" and materials[material] == 7850",
    "hint": "Strip outside whitespace and convert the name to lowercase.",
    "explanation": "Dictionary string keys match exactly. Normalize the user name once before looking it up.",
    "level": "Foundation",
    "referenceOutput": "7850",
    "observed": {
      "output": "",
      "error": {
        "type": "KeyError",
        "message": "' Steel '"
      }
    }
  },
  {
    "id": "debug-b-053",
    "name": "AttributeError",
    "category": "runtime",
    "topic": "lists",
    "source": "Debugging guide · AttributeError",
    "task": "Compute the mean using built-in operations for a nonempty Python list.",
    "buggy": "readings = [21.3, 21.7, 22.1]\nreadings.mean()",
    "solutions": [
      "readings = [21.3, 21.7, 22.1]\naverage = sum(readings) / len(readings)"
    ],
    "tests": "assert abs(average - 21.7) < 1e-12",
    "hint": "A normal list has no mean() method.",
    "explanation": "sum(readings) / len(readings) computes the mean without requiring a NumPy array.",
    "level": "Foundation",
    "referenceOutput": "",
    "observed": {
      "output": "",
      "error": {
        "type": "AttributeError",
        "message": "'list' object has no attribute 'mean'"
      }
    }
  },
  {
    "id": "debug-b-056",
    "name": "String methods and list methods are different",
    "category": "runtime",
    "topic": "strings",
    "source": "Debugging guide · String methods and list methods are different",
    "task": "Build the description steel beam without trying to mutate the string.",
    "buggy": "material = \"steel\"\nmaterial.append(\"beam\")",
    "solutions": [
      "material = \"steel\"\ndescription = material + \" beam\""
    ],
    "tests": "assert description == \"steel beam\" and material == \"steel\"",
    "hint": "Strings do not have append().",
    "explanation": "String concatenation returns new text. The original material string can remain unchanged.",
    "level": "Foundation",
    "referenceOutput": "",
    "observed": {
      "output": "",
      "error": {
        "type": "AttributeError",
        "message": "'str' object has no attribute 'append'"
      }
    }
  },
  {
    "id": "debug-b-058",
    "name": "Object-oriented programming example",
    "category": "objects",
    "topic": "functions",
    "source": "Debugging guide · Object-oriented programming example",
    "task": "Initialize and print the unit field on the sensor.",
    "buggy": "class Sensor:\n    def __init__(self, name):\n        self.name = name\nsensor = Sensor(\"T1\")\nprint(sensor.unit)",
    "solutions": [
      "class Sensor:\n    def __init__(self, name, unit):\n        self.name = name\n        self.unit = unit\nsensor = Sensor(\"T1\", \"deg C\")\nprint(sensor.unit)"
    ],
    "tests": "assert sensor.unit == \"deg C\" and sensor.name == \"T1\"",
    "hint": "Add the unit parameter and assign it to self.unit.",
    "explanation": "An instance only has attributes that have been created. The constructor must store the unit before report code reads it.",
    "level": "Foundation",
    "referenceOutput": "deg C",
    "observed": {
      "output": "",
      "error": {
        "type": "AttributeError",
        "message": "'Sensor' object has no attribute 'unit'"
      }
    }
  },
  {
    "id": "debug-b-060",
    "name": "AssertionError",
    "category": "testing",
    "topic": "functions",
    "source": "Debugging guide · AssertionError",
    "task": "Correct the faulty expected answer using independent arithmetic; retain both assertions.",
    "buggy": "def calculate_stress(force, area):\n    return force / area\nassert calculate_stress(10, 2) == 5\nassert calculate_stress(12, 3) == 5",
    "solutions": [
      "def calculate_stress(force, area):\n    return force / area\nassert calculate_stress(10, 2) == 5\nassert calculate_stress(12, 3) == 4"
    ],
    "tests": "assert calculate_stress(12, 3) == 4",
    "hint": "12 divided by 3 equals 4.",
    "explanation": "A test can have an incorrect oracle. Repair the expected answer rather than corrupting the correctly implemented division.",
    "level": "Foundation",
    "referenceOutput": "",
    "observed": {
      "output": "",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-b-062",
    "name": "Wrong formula",
    "category": "units",
    "topic": "arithmetic",
    "source": "Debugging guide · Wrong formula",
    "task": "Calculate axial stress as force divided by area in consistent SI units.",
    "buggy": "force = 8000\narea = 0.0004\nstress = area / force",
    "solutions": [
      "force = 8000\narea = 0.0004\nstress = force / area"
    ],
    "tests": "assert stress == 20000000",
    "hint": "Pa = N/m².",
    "explanation": "area / force has inverse-stress dimensions. The correct result is 20,000,000 Pa.",
    "level": "Foundation",
    "referenceOutput": "",
    "observed": {
      "output": "",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-b-064",
    "name": "Wrong comparison operator",
    "category": "logic",
    "topic": "decisions",
    "source": "Debugging guide · Wrong comparison operator",
    "task": "The stated illustrative rule accepts factor_of_safety >= 2. Repair the comparison.",
    "buggy": "factor_of_safety = 3\nif factor_of_safety <= 2:\n    print(\"Design is acceptable\")\nelse:\n    print(\"Design is not acceptable\")",
    "solutions": [
      "factor_of_safety = 3\nif factor_of_safety >= 2:\n    print(\"Design is acceptable\")\nelse:\n    print(\"Design is not acceptable\")"
    ],
    "tests": "assert factor_of_safety >= 2",
    "hint": "Include the boundary on the higher-FoS side.",
    "explanation": "The original comparison accepts low values and rejects higher values. The reference uses >=.",
    "level": "Foundation",
    "referenceOutput": "Design is acceptable",
    "observed": {
      "output": "Design is not acceptable",
      "error": {
        "type": "OutputMismatch",
        "message": "Printed output differs from the stated expected result."
      }
    }
  },
  {
    "id": "debug-b-068",
    "name": "Area conversion mistake",
    "category": "units",
    "topic": "arithmetic",
    "source": "Debugging guide · Area conversion mistake",
    "task": "Convert 400 mm² to m².",
    "buggy": "area_mm2 = 400\narea_m2 = area_mm2 / 1000",
    "solutions": [
      "area_mm2 = 400\narea_m2 = area_mm2 / 1_000_000"
    ],
    "tests": "assert abs(area_m2 - 0.0004) < 1e-15",
    "hint": "Square the length conversion factor.",
    "explanation": "One square metre contains 1,000,000 square millimetres, so dividing by 1000 is insufficient.",
    "level": "Foundation",
    "referenceOutput": "",
    "observed": {
      "output": "",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-b-070",
    "name": "Temperature conversion mistake",
    "category": "units",
    "topic": "arithmetic",
    "source": "Debugging guide · Temperature conversion mistake",
    "task": "Use the full Celsius-to-kelvin offset for 25 °C.",
    "buggy": "temperature_c = 25\ntemperature_k = temperature_c + 273",
    "solutions": [
      "temperature_c = 25\ntemperature_k = temperature_c + 273.15"
    ],
    "tests": "assert abs(temperature_k - 298.15) < 1e-12",
    "hint": "Use an offset of 273.15.",
    "explanation": "Kelvin temperature is Celsius temperature plus 273.15. The shortened offset introduces 0.15 K error.",
    "level": "Foundation",
    "referenceOutput": "",
    "observed": {
      "output": "",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-b-072",
    "name": "Time conversion mistake",
    "category": "units",
    "topic": "arithmetic",
    "source": "Debugging guide · Time conversion mistake",
    "task": "Calculate energy in joules for 1500 W over 2 hours.",
    "buggy": "power_w = 1500\ntime_hours = 2\nenergy_j = power_w * time_hours",
    "solutions": [
      "power_w = 1500\ntime_hours = 2\ntime_seconds = time_hours * 3600\nenergy_j = power_w * time_seconds"
    ],
    "tests": "assert energy_j == 10800000",
    "hint": "Watts are joules per second.",
    "explanation": "Convert hours to seconds before multiplying by power. The result is 10,800,000 J, or 3 kWh.",
    "level": "Foundation",
    "referenceOutput": "",
    "observed": {
      "output": "",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-b-075",
    "name": "Use tolerance for numerical comparisons",
    "category": "testing",
    "topic": "while",
    "source": "Debugging guide · Use tolerance for numerical comparisons",
    "task": "Use the provided 1e-6 absolute tolerance to compare the numerical values and print Test passed.",
    "buggy": "calculated_value = 0.1 + 0.2\nexpected_value = 0.3\nif calculated_value == expected_value:\n    print(\"Test passed\")",
    "solutions": [
      "calculated_value = 0.1 + 0.2\nexpected_value = 0.3\ntolerance = 1e-6\nif abs(calculated_value - expected_value) < tolerance:\n    print(\"Test passed\")\nelse:\n    print(\"Test failed\")"
    ],
    "tests": "assert abs(calculated_value - expected_value) < 1e-6",
    "hint": "Compare the absolute difference against tolerance.",
    "explanation": "Binary floating-point arithmetic need not produce exact decimal equality. The tolerance is a declared arithmetic-test rule.",
    "level": "Foundation",
    "referenceOutput": "Test passed",
    "observed": {
      "output": "",
      "error": {
        "type": "OutputMismatch",
        "message": "Printed output differs from the stated expected result."
      }
    }
  },
  {
    "id": "debug-b-078",
    "name": "Infinite loops",
    "category": "logic",
    "topic": "while",
    "source": "Debugging guide · Infinite loops",
    "task": "Print integers 0 through 9, then terminate with height equal to 10.",
    "buggy": "height = 0\nwhile height < 10:\n    print(height)",
    "solutions": [
      "height = 0\nwhile height < 10:\n    print(height)\n    height = height + 1"
    ],
    "tests": "assert height == 10",
    "hint": "Advance the variable controlling the while condition.",
    "explanation": "Without an update, height remains zero and the condition never becomes false.",
    "level": "Foundation",
    "referenceOutput": "0\n1\n2\n3\n4\n5\n6\n7\n8\n9",
    "observed": {
      "output": "0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0",
      "error": {
        "type": "StepLimit",
        "message": "Execution stopped after 1500 traced steps"
      }
    }
  },
  {
    "id": "debug-b-080",
    "name": "Engineering example: tank filling",
    "category": "logic",
    "topic": "while",
    "source": "Debugging guide · Engineering example: tank filling",
    "task": "Increase tank volume by flow_rate each step and finish at capacity.",
    "buggy": "volume = 0\ncapacity = 100\nflow_rate = 5\nwhile volume < capacity:\n    print(volume)",
    "solutions": [
      "volume = 0\ncapacity = 100\nflow_rate = 5\nwhile volume < capacity:\n    print(volume)\n    volume = volume + flow_rate"
    ],
    "tests": "assert volume == capacity == 100",
    "hint": "Update volume inside the loop.",
    "explanation": "The volume must increase after each simulated interval. Otherwise the same state repeats indefinitely.",
    "level": "Foundation",
    "referenceOutput": "0\n5\n10\n15\n20\n25\n30\n35\n40\n45\n50\n55\n60\n65\n70\n75\n80\n85\n90\n95",
    "observed": {
      "output": "0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0",
      "error": {
        "type": "StepLimit",
        "message": "Execution stopped after 1500 traced steps"
      }
    }
  },
  {
    "id": "debug-b-082",
    "name": "Range endpoint confusion",
    "category": "logic",
    "topic": "for",
    "source": "Debugging guide · Range endpoint confusion",
    "task": "Print integer times from 0 through 5, including the endpoint.",
    "buggy": "for t in range(0, 5):\n    print(t)",
    "solutions": [
      "for t in range(0, 6):\n    print(t)"
    ],
    "tests": "assert t == 5",
    "hint": "range() excludes its stop value.",
    "explanation": "A stop of 6 includes the desired final integer 5.",
    "level": "Foundation",
    "referenceOutput": "0\n1\n2\n3\n4\n5",
    "observed": {
      "output": "0\n1\n2\n3\n4",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-b-085",
    "name": "Forgetting to return a value",
    "category": "logic",
    "topic": "functions",
    "source": "Debugging guide · Forgetting to return a value",
    "task": "Return the computed stress to the caller.",
    "buggy": "def calculate_stress(force, area):\n    stress = force / area\nresult = calculate_stress(5000, 0.002)\nprint(result)",
    "solutions": [
      "def calculate_stress(force, area):\n    stress = force / area\n    return stress\nresult = calculate_stress(5000, 0.002)\nprint(result)"
    ],
    "tests": "assert result == 2500000",
    "hint": "The assignment inside the function is not a return.",
    "explanation": "Without an explicit return, the function returns None even though its local calculation succeeds.",
    "level": "Foundation",
    "referenceOutput": "2500000.0",
    "observed": {
      "output": "None",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-b-089",
    "name": "Wrong argument order",
    "category": "logic",
    "topic": "functions",
    "source": "Debugging guide · Wrong argument order",
    "task": "Pass force 5000 and area 0.002 to the intended parameters.",
    "buggy": "def calculate_stress(force, area):\n    return force / area\nstress = calculate_stress(0.002, 5000)",
    "solutions": [
      "def calculate_stress(force, area):\n    return force / area\nstress = calculate_stress(force=5000, area=0.002)"
    ],
    "tests": "assert stress == 2500000",
    "hint": "Keyword arguments make the unit agreement visible.",
    "explanation": "Reversing arguments produces a number with the wrong physical meaning. Match each argument to the function contract.",
    "level": "Foundation",
    "referenceOutput": "",
    "observed": {
      "output": "",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-b-093",
    "name": "Mutable default argument errors",
    "category": "state",
    "topic": "functions",
    "source": "Debugging guide · Mutable default argument errors",
    "task": "Separate default measurement lists across calls while supporting an explicitly supplied list.",
    "buggy": "def add_reading(reading, readings=[]):\n    readings.append(reading)\n    return readings\nprint(add_reading(10))\nprint(add_reading(20))",
    "solutions": [
      "def add_reading(reading, readings=None):\n    if readings is None:\n        readings = []\n    readings.append(reading)\n    return readings\nprint(add_reading(10))\nprint(add_reading(20))"
    ],
    "tests": "assert add_reading(30) == [30]\nexternal = []\nassert add_reading(40, external) is external\nassert external == [40]",
    "hint": "Create a new default list inside the function.",
    "explanation": "A default list is created once at function definition and reused. A None sentinel lets each omitted-list call create a fresh container.",
    "level": "Foundation",
    "referenceOutput": "[10]\n[20]",
    "observed": {
      "output": "[10]\n[10, 20]",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-b-095",
    "name": "List aliasing errors",
    "category": "state",
    "topic": "lists",
    "source": "Debugging guide · List aliasing errors",
    "task": "Change the processed list while preserving the original raw readings.",
    "buggy": "raw_readings = [21.0, 21.4, 21.8]\ncorrected_readings = raw_readings\ncorrected_readings[0] = 20.9\nprint(raw_readings)",
    "solutions": [
      "raw_readings = [21.0, 21.4, 21.8]\ncorrected_readings = raw_readings.copy()\ncorrected_readings[0] = 20.9\nprint(raw_readings)\nprint(corrected_readings)"
    ],
    "tests": "assert raw_readings == [21.0, 21.4, 21.8]\nassert corrected_readings[0] == 20.9\nassert raw_readings is not corrected_readings",
    "hint": "Make a copy before changing an element.",
    "explanation": "Assignment creates another reference to the same list. For this flat numeric list, copy() creates the required separate container.",
    "level": "Foundation",
    "referenceOutput": "[21.0, 21.4, 21.8]\n[20.9, 21.4, 21.8]",
    "observed": {
      "output": "[20.9, 21.4, 21.8]",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-b-116",
    "name": "Using several independent if statements when elif is needed",
    "category": "logic",
    "topic": "decisions",
    "source": "Debugging guide · Using several independent if statements when elif is needed",
    "task": "Classify Re = 1500 as laminar using one mutually exclusive branch chain.",
    "buggy": "reynolds_number = 1500\nif reynolds_number < 2300:\n    flow = \"laminar\"\nif reynolds_number < 4000:\n    flow = \"transitional\"\nelse:\n    flow = \"turbulent\"",
    "solutions": [
      "reynolds_number = 1500\nif reynolds_number < 2300:\n    flow = \"laminar\"\nelif reynolds_number < 4000:\n    flow = \"transitional\"\nelse:\n    flow = \"turbulent\""
    ],
    "tests": "assert flow == \"laminar\"",
    "hint": "Use elif after the first if.",
    "explanation": "Two independent true tests can overwrite flow. An if/elif/else chain keeps the first matching branch.",
    "level": "Foundation",
    "referenceOutput": "",
    "observed": {
      "output": "",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-b-118",
    "name": "Wrong order of conditions",
    "category": "logic",
    "topic": "decisions",
    "source": "Debugging guide · Wrong order of conditions",
    "task": "For a factor of safety of 3, select acceptable before considering marginal.",
    "buggy": "factor_of_safety = 3\nif factor_of_safety >= 1:\n    status = \"marginal\"\nelif factor_of_safety >= 2:\n    status = \"acceptable\"\nelse:\n    status = \"unsafe\"",
    "solutions": [
      "factor_of_safety = 3\nif factor_of_safety >= 2:\n    status = \"acceptable\"\nelif factor_of_safety >= 1:\n    status = \"marginal\"\nelse:\n    status = \"unsafe\""
    ],
    "tests": "assert status == \"acceptable\"",
    "hint": "Put the more restrictive threshold first.",
    "explanation": "The broad >= 1 test captures 3 before the >= 2 test can run. Order the thresholds from high to low.",
    "level": "Foundation",
    "referenceOutput": "",
    "observed": {
      "output": "",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-b-120",
    "name": "Accumulator not initialized",
    "category": "runtime",
    "topic": "for",
    "source": "Debugging guide · Accumulator not initialized",
    "task": "Initialize the total once and add all measurements.",
    "buggy": "readings = [10, 20, 30]\nfor reading in readings:\n    total = total + reading",
    "solutions": [
      "readings = [10, 20, 30]\ntotal = 0\nfor reading in readings:\n    total = total + reading"
    ],
    "tests": "assert total == 60",
    "hint": "An accumulator needs an initial value before its first update.",
    "explanation": "Reading total before assigning it raises NameError. Start at the additive identity, zero.",
    "level": "Foundation",
    "referenceOutput": "",
    "observed": {
      "output": "",
      "error": {
        "type": "NameError",
        "message": "name 'total' is not defined"
      }
    }
  },
  {
    "id": "debug-b-124",
    "name": "Modifying a list while looping over it",
    "category": "state",
    "topic": "lists",
    "source": "Debugging guide · Modifying a list while looping over it",
    "task": "Filter out -999 readings without modifying the raw list. The adjacent missing values are an added regression fixture.",
    "buggy": "readings = [20.1, -999, -999, 22.2]\nfor reading in readings:\n    if reading == -999:\n        readings.remove(reading)",
    "solutions": [
      "readings = [20.1, -999, -999, 22.2]\nvalid_readings = []\nfor reading in readings:\n    if reading != -999:\n        valid_readings.append(reading)"
    ],
    "tests": "assert readings == [20.1, -999, -999, 22.2]\nassert valid_readings == [20.1, 22.2]",
    "hint": "Build a new list while iterating over the original.",
    "explanation": "Removing items from the list being iterated can skip adjacent matches. A separate output list also preserves the raw data.",
    "level": "Foundation",
    "referenceOutput": "",
    "observed": {
      "output": "",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-b-127",
    "name": "Missing base case",
    "category": "logic",
    "topic": "recursion",
    "source": "Debugging guide · Missing base case",
    "task": "Stop the recursive countdown at zero and print done instead of recursing forever.",
    "buggy": "def countdown(n):\n    print(n)\n    countdown(n - 1)\ncountdown(3)",
    "solutions": [
      "def countdown(n):\n    if n <= 0:\n        print(\"done\")\n    else:\n        print(n)\n        countdown(n - 1)\ncountdown(3)"
    ],
    "tests": "countdown(0)",
    "hint": "Check a base case before making the recursive call.",
    "explanation": "Each positive call reduces n, and the base case ends the call chain. Without it, Python eventually raises RecursionError.",
    "level": "Foundation",
    "referenceOutput": "3\n2\n1\ndone",
    "observed": {
      "output": "3\n2\n1\n0\n-1\n-2\n-3\n-4\n-5\n-6\n-7\n-8\n-9\n-10\n-11\n-12\n-13\n-14\n-15\n-16\n-17\n-18\n-19\n-20\n-21\n-22\n-23\n-24\n-25\n-26\n-27\n-28\n-29\n-30\n-31\n-32\n-33\n-34\n-35\n-36\n-37\n-38\n-39\n-40\n-41\n-42\n-43\n-44\n-45\n-46\n-47\n-48\n-49\n-50\n-51\n-52\n-53\n-54\n-55\n-56\n-57\n-58\n-59\n-60\n-61\n-62\n-63\n-64\n-65\n-66\n-67\n-68\n-69\n-70\n-71\n-72\n-73\n-74\n-75\n-76\n-77\n-78\n-79\n-80\n-81\n-82\n-83\n-84\n-85\n-86\n-87\n-88\n-89\n-90\n-91\n-92\n-93\n-94\n-95\n-96\n-97\n-98\n-99\n-100\n-101\n-102\n-103\n-104\n-105\n-106\n-107\n-108\n-109\n-110\n-111\n-112\n-113\n-114\n-115\n-116\n-117\n-118\n-119\n-120\n-121\n-122\n-123\n-124\n-125\n-126\n-127\n-128\n-129\n-130\n-131\n-132\n-133\n-134\n-135\n-136\n-137\n-138\n-139\n-140\n-141\n-142\n-143\n-144\n-145\n-146\n-147\n-148\n-149\n-150\n-151\n-152\n-153\n-154\n-155\n-156\n-157\n-158\n-159\n-160\n-161\n-162\n-163\n-164\n-165\n-166\n-167\n-168\n-169\n-170\n-171\n-172\n-173\n-174\n-175\n-176\n-177\n-178\n-179\n-180\n-181\n-182\n-183\n-184\n-185\n-186\n-187\n-188\n-189\n-190\n-191\n-192\n-193\n-194\n-195\n-196\n-197\n-198\n-199\n-200\n-201\n-202\n-203\n-204\n-205\n-206\n-207\n-208\n-209\n-210\n-211\n-212\n-213\n-214\n-215\n-216\n-217\n-218\n-219\n-220\n-221\n-222\n-223\n-224\n-225\n-226\n-227\n-228\n-229\n-230\n-231\n-232\n-233\n-234\n-235\n-236\n-237\n-238\n-239\n-240\n-241\n-242\n-243\n-244\n-245\n-246\n-247\n-248\n-249\n-250\n-251\n-252\n-253\n-254\n-255\n-256\n-257\n-258\n-259\n-260\n-261\n-262\n-263\n-264\n-265\n-266\n-267\n-268\n-269\n-270\n-271\n-272\n-273\n-274\n-275\n-276\n-277\n-278\n-279\n-280\n-281\n-282\n-283\n-284\n-285\n-286\n-287\n-288\n-289\n-290\n-291\n-292\n-293\n-294\n-295\n-296\n-297\n-298\n-299\n-300\n-301\n-302\n-303\n-304\n-305\n-306\n-307\n-308\n-309\n-310\n-311\n-312\n-313\n-314\n-315\n-316\n-317\n-318\n-319\n-320\n-321\n-322\n-323\n-324\n-325\n-326\n-327\n-328\n-329\n-330\n-331\n-332\n-333\n-334\n-335\n-336\n-337\n-338\n-339\n-340\n-341\n-342\n-343\n-344\n-345\n-346\n-347\n-348\n-349\n-350\n-351\n-352\n-353\n-354\n-355\n-356\n-357\n-358\n-359\n-360\n-361\n-362\n-363\n-364\n-365\n-366\n-367\n-368\n-369\n-370\n-371",
      "error": {
        "type": "StepLimit",
        "message": "Execution stopped after 1500 traced steps"
      }
    }
  },
  {
    "id": "debug-w7-01",
    "name": "Include the factor-of-safety boundary",
    "category": "logic",
    "topic": "decisions",
    "source": "Week 7 · Example 01",
    "task": "Accept finite FoS values at or above 2.0; keep lower values unacceptable.",
    "buggy": "def classify_design(fos):\n    if fos > 2.0:\n        return \"acceptable\"\n    return \"not acceptable\"\nprint(classify_design(2.5))\nprint(classify_design(1.5))\nprint(classify_design(2.0))",
    "solutions": [
      "def classify_design(fos):\n    if fos >= 2.0:\n        return \"acceptable\"\n    return \"not acceptable\"\nprint(classify_design(2.5))\nprint(classify_design(1.5))\nprint(classify_design(2.0))"
    ],
    "tests": "assert classify_design(2.0) == \"acceptable\"\nassert classify_design(1.99) == \"not acceptable\"",
    "hint": "Test the exact boundary.",
    "explanation": "The strict > comparison rejects the equality case required by the specification.",
    "level": "Core practice",
    "referenceOutput": "acceptable\nnot acceptable\nacceptable",
    "observed": {
      "output": "acceptable\nnot acceptable\nnot acceptable",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-w7-05",
    "name": "Keep the final load",
    "category": "logic",
    "topic": "for",
    "source": "Week 7 · Example 05",
    "task": "Include every load once, including singleton and empty lists.",
    "buggy": "def total_load(loads_n):\n    total_n = 0.0\n    for index in range(len(loads_n) - 1):\n        total_n += loads_n[index]\n    return total_n\nprint(total_load([]))\nprint(total_load([5.0]))\nprint(total_load([2.0, 3.0, 4.0]))",
    "solutions": [
      "def total_load(loads_n):\n    total_n = 0.0\n    for load_n in loads_n:\n        total_n += load_n\n    return total_n\nprint(total_load([]))\nprint(total_load([5.0]))\nprint(total_load([2.0, 3.0, 4.0]))"
    ],
    "tests": "assert total_load([]) == 0\nassert total_load([5.0]) == 5.0\nassert total_load([2.0, 3.0, 4.0]) == 9.0",
    "hint": "Direct iteration avoids an unnecessary index boundary.",
    "explanation": "The original range ends before the final list element. The singleton case exposes the defect immediately.",
    "level": "Core practice",
    "referenceOutput": "0.0\n5.0\n9.0",
    "observed": {
      "output": "0.0\n0.0\n5.0",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-w7-12",
    "name": "Repair a bar calculation completely",
    "category": "units",
    "topic": "engineering",
    "source": "Week 7 · Example 12",
    "task": "Repair the name mismatch and both unit defects. Use 10000 N, 500 mm², and 250 MPa; the correct stress is 20 MPa and FoS is 12.5.",
    "buggy": "Force = 10000.0\narea_mm2 = 500.0\nyield_strength_mpa = 250.0\narea_m2 = area_mm2 / 1000\nstress_pa = force / area_m2\nfos = yield_strength_mpa / stress_pa\nprint(f\"Stress = {stress_pa:.2f} Pa\")\nprint(f\"FoS = {fos:.5f}\")",
    "solutions": [
      "force_n = 10000.0\narea_mm2 = 500.0\nyield_strength_mpa = 250.0\narea_m2 = area_mm2 / 1_000_000\nstrength_pa = yield_strength_mpa * 1_000_000\nstress_pa = force_n / area_m2\nfos = strength_pa / stress_pa\nprint(f\"Stress = {stress_pa / 1e6:.2f} MPa\")\nprint(f\"Factor of safety = {fos:.2f}\")"
    ],
    "tests": "assert abs(stress_pa - 20e6) < 1e-6\nassert abs(fos - 12.5) < 1e-12",
    "hint": "Check names first, then compare the units in every ratio.",
    "explanation": "Eliminating NameError alone does not fix the model. Convert square millimetres to square metres and MPa strength to Pa before forming FoS.",
    "level": "Core practice",
    "referenceOutput": "Stress = 20.00 MPa\nFactor of safety = 12.50",
    "observed": {
      "output": "",
      "error": {
        "type": "NameError",
        "message": "name 'force' is not defined"
      }
    }
  },
  {
    "id": "debug-w7-13",
    "name": "Repair an invalid decision header",
    "category": "syntax",
    "topic": "decisions",
    "source": "Week 7 · Example 13",
    "task": "Print Within the stated limit for the supplied stress.",
    "buggy": "stress_mpa = 120.0\nif stress_mpa <= 125.0\n    print(\"Within the stated limit\")",
    "solutions": [
      "stress_mpa = 120.0\nif stress_mpa <= 125.0:\n    print(\"Within the stated limit\")"
    ],
    "tests": "assert stress_mpa == 120.0",
    "hint": "Check the end of the if header.",
    "explanation": "A missing colon is a parse-time error. It prevents the script from executing.",
    "level": "Core practice",
    "referenceOutput": "Within the stated limit",
    "observed": {
      "output": "",
      "error": {
        "type": "SyntaxError",
        "message": "expected ':' (practice, line 2)"
      }
    }
  },
  {
    "id": "debug-w7-14",
    "name": "Trace a bad area back to the caller",
    "category": "validation",
    "topic": "functions",
    "source": "Week 7 · Example 14",
    "task": "Reject zero or negative area with ValueError, and let the caller report the rejection. Keep the original zero-area request.",
    "buggy": "def calculate_stress(force_n, area_m2):\n    return force_n / area_m2\ndef report():\n    print(calculate_stress(10000.0, 0.0))\nreport()",
    "solutions": [
      "def calculate_stress(force_n, area_m2):\n    if area_m2 <= 0:\n        raise ValueError(\"Area must be positive\")\n    return force_n / area_m2\ndef report():\n    try:\n        print(calculate_stress(10000.0, 0.0))\n    except ValueError as error:\n        print(error)\nreport()"
    ],
    "tests": "try:\n    calculate_stress(1, 0)\nexcept ValueError:\n    pass\nelse:\n    raise AssertionError(\"zero area was not rejected\")\nassert calculate_stress(10, 2) == 5",
    "hint": "Validate inside the calculation, handle the expected exception in report().",
    "explanation": "The symptom occurs in the division, but the invalid input originates at its caller. Validation and a narrow caller handler make both responsibilities explicit.",
    "level": "Core practice",
    "referenceOutput": "Area must be positive",
    "observed": {
      "output": "",
      "error": {
        "type": "ZeroDivisionError",
        "message": "float division by zero"
      }
    }
  },
  {
    "id": "debug-w7-19",
    "name": "Preserve a running energy total",
    "category": "logic",
    "topic": "for",
    "source": "Week 7 · Example 19",
    "task": "Accumulate all three 0.5-hour energy intervals in total_kwh.",
    "buggy": "powers_kw = [1.0, 2.0, 3.0]\ninterval_h = 0.5\nfor power_kw in powers_kw:\n    total_kwh = 0.0\n    total_kwh += power_kw * interval_h\n    print(\"Intermediate:\", total_kwh)\nprint(\"Final:\", total_kwh, \"kWh\")",
    "solutions": [
      "powers_kw = [1.0, 2.0, 3.0]\ninterval_h = 0.5\ntotal_kwh = 0.0\nfor power_kw in powers_kw:\n    total_kwh += power_kw * interval_h\n    print(\"Intermediate:\", total_kwh)\nprint(\"Final:\", total_kwh, \"kWh\")"
    ],
    "tests": "assert total_kwh == 3.0",
    "hint": "Initialize before the loop.",
    "explanation": "Resetting the accumulator discards previous intervals. The correct energy is (1 + 2 + 3) × 0.5 = 3 kWh.",
    "level": "Core practice",
    "referenceOutput": "Intermediate: 0.5\nIntermediate: 1.5\nIntermediate: 3.0\nFinal: 3.0 kWh",
    "observed": {
      "output": "Intermediate: 0.5\nIntermediate: 1.0\nIntermediate: 1.5\nFinal: 1.5 kWh",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-w7-21",
    "name": "Return current before using it",
    "category": "logic",
    "topic": "functions",
    "source": "Week 7 · Example 21",
    "task": "Return 3.0 A to the caller and calculate 36.0 W.",
    "buggy": "def calculate_current(voltage_v, resistance_ohm):\n    current_a = voltage_v / resistance_ohm\n    print(current_a)\ncurrent_a = calculate_current(12.0, 4.0)\nprint(\"Stored:\", current_a)\npower_w = 12.0 * current_a",
    "solutions": [
      "def calculate_current(voltage_v, resistance_ohm):\n    current_a = voltage_v / resistance_ohm\n    return current_a\ncurrent_a = calculate_current(12.0, 4.0)\npower_w = 12.0 * current_a\nprint(\"Current:\", current_a, \"A\")\nprint(\"Power:\", power_w, \"W\")"
    ],
    "tests": "assert current_a == 3.0 and power_w == 36.0",
    "hint": "A printed number is not a returned value.",
    "explanation": "The caller receives None from the faulty function, so a subsequent multiplication fails.",
    "level": "Core practice",
    "referenceOutput": "Current: 3.0 A\nPower: 36.0 W",
    "observed": {
      "output": "3.0\nStored: None",
      "error": {
        "type": "TypeError",
        "message": "unsupported operand type(s) for *: 'float' and 'NoneType'"
      }
    }
  },
  {
    "id": "debug-w7-23",
    "name": "Keep raw sensor measurements unchanged",
    "category": "state",
    "topic": "lists",
    "source": "Week 7 · Example 23",
    "task": "Return offset-corrected readings without changing raw_c.",
    "buggy": "def corrected_readings(raw_c, offset_c):\n    processed_c = raw_c\n    for i in range(len(processed_c)):\n        processed_c[i] -= offset_c\n    return processed_c\nraw_c = [22.0, 23.0]\nresult_c = corrected_readings(raw_c, 0.5)\nprint(\"Raw:\", raw_c)\nprint(\"Processed:\", result_c)",
    "solutions": [
      "def corrected_readings(raw_c, offset_c):\n    processed_c = raw_c.copy()\n    for i in range(len(processed_c)):\n        processed_c[i] -= offset_c\n    return processed_c\nraw_c = [22.0, 23.0]\nbefore = raw_c.copy()\nresult_c = corrected_readings(raw_c, 0.5)\nassert result_c == [21.5, 22.5]\nassert raw_c == before\nprint(\"Raw:\", raw_c)\nprint(\"Processed:\", result_c)"
    ],
    "tests": "assert raw_c == [22.0, 23.0]\nassert result_c == [21.5, 22.5]\nassert result_c is not raw_c",
    "hint": "Copy the flat list before changing it.",
    "explanation": "The non-mutation promise is part of correctness. Check the saved raw list as well as the returned numerical values.",
    "level": "Core practice",
    "referenceOutput": "Raw: [22.0, 23.0]\nProcessed: [21.5, 22.5]",
    "observed": {
      "output": "Raw: [21.5, 22.5]\nProcessed: [21.5, 22.5]",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-w7-25",
    "name": "Normalize a material request",
    "category": "runtime",
    "topic": "dicts",
    "source": "Week 7 · Example 25",
    "task": "Normalize the requested material name and retrieve the existing steel record.",
    "buggy": "materials = {\"steel\": {\"density_kg_m3\": 7850.0}}\nrequested = \" Steel \"\nprint(\"Requested:\", repr(requested))\nprint(\"Known names:\", list(materials.keys()))\nrecord = materials[requested]\nprint(record[\"density_kg_m3\"])",
    "solutions": [
      "materials = {\"steel\": {\"density_kg_m3\": 7850.0}}\nrequested = \" Steel \"\nkey = requested.strip().lower()\nif key not in materials:\n    raise KeyError(f\"Unknown material: {requested!r}\")\nrecord = materials[key]\nif \"density_kg_m3\" not in record:\n    raise KeyError(\"Required density_kg_m3 is missing\")\nprint(record[\"density_kg_m3\"])"
    ],
    "tests": "assert record[\"density_kg_m3\"] == 7850.0",
    "hint": "Inspect repr(requested), then strip and lowercase the name.",
    "explanation": "The extra spaces and uppercase letter make the original requested key different from steel.",
    "level": "Core practice",
    "referenceOutput": "7850.0",
    "observed": {
      "output": "Requested: ' Steel '\nKnown names: ['steel']",
      "error": {
        "type": "KeyError",
        "message": "' Steel '"
      }
    }
  },
  {
    "id": "debug-w7-27",
    "name": "Repair the reconstructed stress-check activity",
    "category": "units",
    "topic": "engineering",
    "source": "Week 7 · Example 27",
    "task": "Repair the earlier notes’ reconstructed starter so the reported stress is 125 MPa and FoS = 2 is acceptable. This is an adaptation of a reconstructed classroom activity.",
    "buggy": "def area_to_m2(area_mm2):\n    return area_mm2 / 1000\ndef calculate_stress(force_n, area_m2):\n    stress_pa = force_n / area_m2\n    print(stress_pa)\ndef classify_design(fos):\n    if fos > 2.0:\n        return \"acceptable\"\n    return \"not acceptable\"\narea_m2 = area_to_m2(80.0)\nstress_pa = calculate_stress(10000.0, area_m2)\nfos = 250e6 / stress_pa\nprint(stress_pa / 1e6, classify_design(fos))",
    "solutions": [
      "def area_to_m2(area_mm2):\n    return area_mm2 / 1_000_000\ndef calculate_stress(force_n, area_m2):\n    return force_n / area_m2\ndef classify_design(fos):\n    if fos >= 2.0:\n        return \"acceptable\"\n    return \"not acceptable\"\nassert abs(area_to_m2(80.0) - 0.00008) <= 1e-15\nassert calculate_stress(10.0, 2.0) == 5.0\nassert classify_design(2.0) == \"acceptable\"\nstress_pa = calculate_stress(10000.0, area_to_m2(80.0))\nfos = 250e6 / stress_pa\nassert abs(stress_pa / 1e6 - 125.0) <= 1e-9\nassert abs(fos - 2.0) <= 1e-12\nprint(f\"Stress = {stress_pa / 1e6:.2f} MPa\")\nprint(f\"FoS = {fos:.2f}; {classify_design(fos)}\")"
    ],
    "tests": "assert abs(stress_pa / 1e6 - 125) < 1e-10\nassert abs(fos - 2) < 1e-12\nassert classify_design(fos) == \"acceptable\"",
    "hint": "Repair area conversion, the returned stress, and the inclusive boundary.",
    "explanation": "The immediate TypeError comes from a missing return. Once it is fixed, the unit and comparison defects still need independent checks.",
    "level": "Core practice",
    "referenceOutput": "Stress = 125.00 MPa\nFoS = 2.00; acceptable",
    "observed": {
      "output": "125000.0",
      "error": {
        "type": "TypeError",
        "message": "unsupported operand type(s) for /: 'float' and 'NoneType'"
      }
    }
  },
  {
    "id": "debug-w7-36",
    "name": "Stop fabricating a zero after failure",
    "category": "validation",
    "topic": "functions",
    "source": "Week 7 · Example 36",
    "task": "Keep valid stress calculations numeric; reject nonpositive area with ValueError rather than returning a plausible zero.",
    "buggy": "def hidden_failure(force_n, area_m2):\n    try:\n        return force_n / area_m2\n    except Exception:\n        return 0.0\nprint(hidden_failure(100.0, 0.0))",
    "solutions": [
      "def hidden_failure(force_n, area_m2):\n    if area_m2 <= 0:\n        raise ValueError(\"Area must be positive\")\n    return force_n / area_m2\ntry:\n    print(hidden_failure(100.0, 0.0))\nexcept ValueError as error:\n    print(error)"
    ],
    "tests": "assert hidden_failure(100, 2) == 50\ntry:\n    hidden_failure(100, 0)\nexcept ValueError:\n    pass\nelse:\n    raise AssertionError(\"invalid area was hidden\")",
    "hint": "Validate the domain and catch only an expected exception at the caller.",
    "explanation": "A broad handler conceals failure as an apparently valid result. Clear rejection preserves the distinction between no result and a true zero.",
    "level": "Core practice",
    "referenceOutput": "Area must be positive",
    "observed": {
      "output": "0.0",
      "error": {
        "type": "AssertionError",
        "message": "invalid area was hidden"
      }
    }
  },
  {
    "id": "debug-w7-08",
    "name": "Use numerical evidence in an assertion",
    "category": "testing",
    "topic": "while",
    "source": "Week 7 · Example 08",
    "task": "Require the declared 1e-12 tolerance instead of exact decimal equality.",
    "buggy": "actual = 0.1 + 0.2\nexpected = 0.3\nabsolute_tolerance = 1e-12\nassert actual == expected",
    "solutions": [
      "actual = 0.1 + 0.2\nexpected = 0.3\nabsolute_tolerance = 1e-12\nassert abs(actual - expected) <= absolute_tolerance"
    ],
    "tests": "assert abs(actual - expected) <= absolute_tolerance",
    "hint": "Do not change the arithmetic result to force the test to pass.",
    "explanation": "The binary representation gives a tiny rounding difference. Compare it with the numerical tolerance specified for this arithmetic test.",
    "level": "Core practice",
    "referenceOutput": "",
    "observed": {
      "output": "",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-w8-09",
    "name": "Store an instance attribute",
    "category": "objects",
    "topic": "functions",
    "source": "Week 8 · Example 09",
    "task": "Store initial_value on self so s.value is available.",
    "buggy": "class Sensor:\n    def __init__(self, initial_value):\n        value = initial_value\ns = Sensor(82.5)\nprint(s.value)",
    "solutions": [
      "class Sensor:\n    def __init__(self, initial_value):\n        self.value = initial_value\ns = Sensor(82.5)\nassert s.value == 82.5\nprint(s.value)"
    ],
    "tests": "assert s.value == 82.5",
    "hint": "A constructor local disappears after the call.",
    "explanation": "self.value creates a field on this instance; value alone only creates a local name.",
    "level": "Week 8 extension",
    "referenceOutput": "82.5",
    "observed": {
      "output": "",
      "error": {
        "type": "AttributeError",
        "message": "'Sensor' object has no attribute 'value'"
      }
    }
  },
  {
    "id": "debug-w8-17",
    "name": "Call the method before testing it",
    "category": "objects",
    "topic": "functions",
    "source": "Week 8 · Example 17",
    "task": "Evaluate is_safe() before the if decision. The supplied 95 °C reading is outside 0–90 °C.",
    "buggy": "class Sensor:\n    def __init__(self, value, lower_limit, upper_limit):\n        self.value = value\n        self.lower_limit = lower_limit\n        self.upper_limit = upper_limit\n    def is_safe(self):\n        return self.lower_limit <= self.value <= self.upper_limit\ns = Sensor(95.0, 0.0, 90.0)\ncheck = s.is_safe\nif check:\n    print(\"Within limits\")\nelse:\n    print(\"Outside limits\")",
    "solutions": [
      "class Sensor:\n    def __init__(self, value, lower_limit, upper_limit):\n        self.value = value\n        self.lower_limit = lower_limit\n        self.upper_limit = upper_limit\n    def is_safe(self):\n        return self.lower_limit <= self.value <= self.upper_limit\ns = Sensor(95.0, 0.0, 90.0)\ncheck = s.is_safe()\nif check:\n    print(\"Within limits\")\nelse:\n    print(\"Outside limits\")"
    ],
    "tests": "assert check is False",
    "hint": "A bound method is an object, not the method’s Boolean result.",
    "explanation": "A method object is truthy regardless of the stored reading. Parentheses perform the query.",
    "level": "Week 8 extension",
    "referenceOutput": "Outside limits",
    "observed": {
      "output": "Within limits",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-w8-24",
    "name": "Accept the automatically supplied receiver",
    "category": "objects",
    "topic": "functions",
    "source": "Week 8 · Example 24",
    "task": "Keep the instance call s.report(), and make the method accept its receiver.",
    "buggy": "class Sensor:\n    def report():\n        return \"Reading\"\ns = Sensor()\ns.report()",
    "solutions": [
      "class Sensor:\n    def report(self):\n        return \"Reading\"\ns = Sensor()\ns.report()"
    ],
    "tests": "assert s.report() == \"Reading\"",
    "hint": "An ordinary instance method needs a parameter for self.",
    "explanation": "Python supplies s as the first argument of s.report(). The method definition must accept it.",
    "level": "Week 8 extension",
    "referenceOutput": "",
    "observed": {
      "output": "",
      "error": {
        "type": "TypeError",
        "message": "Sensor.report() takes 0 positional arguments but 1 was given"
      }
    }
  },
  {
    "id": "debug-w8-25",
    "name": "Create a receiver for an instance call",
    "category": "objects",
    "topic": "functions",
    "source": "Week 8 · Example 25",
    "task": "Create a Sensor instance and call its report() method.",
    "buggy": "class Sensor:\n    def report(self):\n        return \"Reading\"\nSensor.report()",
    "solutions": [
      "class Sensor:\n    def report(self):\n        return \"Reading\"\ns = Sensor()\nprint(s.report())"
    ],
    "tests": "assert s.report() == \"Reading\"",
    "hint": "Select an instance before calling this ordinary method.",
    "explanation": "Calling Sensor.report() directly supplies no self. Calling s.report() binds the receiver automatically.",
    "level": "Week 8 extension",
    "referenceOutput": "Reading",
    "observed": {
      "output": "",
      "error": {
        "type": "TypeError",
        "message": "Sensor.report() missing 1 required positional argument: 'self'"
      }
    }
  },
  {
    "id": "debug-w8-37",
    "name": "Copy the constructor’s input list",
    "category": "state",
    "topic": "functions",
    "source": "Week 8 · Example 37",
    "task": "Keep raw unchanged when log.readings is extended; a shallow copy is enough for these flat numeric values.",
    "buggy": "class ReadingLog:\n    def __init__(self, readings):\n        self.readings = readings\nraw = [82.5, 85.0]\nlog = ReadingLog(raw)\nlog.readings.append(90.0)\nprint(raw)\nprint(log.readings is raw)",
    "solutions": [
      "class ReadingLog:\n    def __init__(self, readings):\n        self.readings = readings.copy()\nraw = [82.5, 85.0]\nlog = ReadingLog(raw)\nlog.readings.append(90.0)\nprint(raw)\nprint(log.readings is raw)"
    ],
    "tests": "assert raw == [82.5, 85.0]\nassert log.readings == [82.5, 85.0, 90.0]\nassert log.readings is not raw",
    "hint": "Receiving a list does not copy it.",
    "explanation": "Without copying, the caller and the instance share the same mutable container. The required ownership rule needs an explicit copy.",
    "level": "Week 8 extension",
    "referenceOutput": "[82.5, 85.0]\nFalse",
    "observed": {
      "output": "[82.5, 85.0, 90.0]\nTrue",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-w8-40",
    "name": "Let __init__ return None",
    "category": "objects",
    "topic": "functions",
    "source": "Week 8 · Example 40",
    "task": "Initialize the field and finish construction without returning the instance.",
    "buggy": "class Sensor:\n    def __init__(self, value):\n        self.value = value\n        return self\ns = Sensor(82.5)",
    "solutions": [
      "class Sensor:\n    def __init__(self, value):\n        self.value = value\n        return None\ns = Sensor(82.5)"
    ],
    "tests": "assert s.value == 82.5",
    "hint": "The constructor call returns the instance; __init__ itself must return None.",
    "explanation": "Returning self from __init__ violates Python’s initialization contract and causes TypeError.",
    "level": "Week 8 extension",
    "referenceOutput": "",
    "observed": {
      "output": "",
      "error": {
        "type": "TypeError",
        "message": "__init__() should return None, not 'Sensor'"
      }
    }
  },
  {
    "id": "debug-w8-41",
    "name": "Use one consistent attribute name",
    "category": "objects",
    "topic": "functions",
    "source": "Week 8 · Example 41",
    "task": "Store the field that the caller reads as s.value.",
    "buggy": "class Sensor:\n    def __init__(self, value):\n        self.reading = value\ns = Sensor(82.5)\nprint(s.value)",
    "solutions": [
      "class Sensor:\n    def __init__(self, value):\n        self.value = value\ns = Sensor(82.5)\nprint(s.value)"
    ],
    "tests": "assert s.value == 82.5",
    "hint": "Compare the saved attribute name with the requested one.",
    "explanation": "reading and value are different attributes. The initializer and the caller must agree on the interface.",
    "level": "Week 8 extension",
    "referenceOutput": "82.5",
    "observed": {
      "output": "",
      "error": {
        "type": "AttributeError",
        "message": "'Sensor' object has no attribute 'value'"
      }
    }
  },
  {
    "id": "debug-w8-42",
    "name": "Read a numeric attribute without calling it",
    "category": "objects",
    "topic": "functions",
    "source": "Week 8 · Example 42",
    "task": "Print the stored numeric reading without trying to call it.",
    "buggy": "initial_value = 82.5\nclass Sensor:\n    def __init__(self, value):\n        self.value = value\ns = Sensor(initial_value)\nprint(s.value())",
    "solutions": [
      "initial_value = 82.5\nclass Sensor:\n    def __init__(self, value):\n        self.value = value\ns = Sensor(initial_value)\nprint(s.value)"
    ],
    "tests": "assert s.value == 82.5",
    "hint": "A numeric field is read without parentheses.",
    "explanation": "Parentheses call an object. A float is not callable; the attribute lookup alone retrieves its value.",
    "level": "Week 8 extension",
    "referenceOutput": "82.5",
    "observed": {
      "output": "",
      "error": {
        "type": "TypeError",
        "message": "'float' object is not callable"
      }
    }
  },
  {
    "id": "debug-new-01",
    "name": "Close the report label",
    "category": "syntax",
    "topic": "strings",
    "source": "New practice · Close the report label",
    "task": "Repair the string literal so the complete program prints Flow: 12. Keep the label and numeric value.",
    "buggy": "flow = 12\nlabel = \"Flow: \nprint(label + str(flow))",
    "solutions": [
      "flow = 12\nlabel = \"Flow: \"\nprint(label + str(flow))"
    ],
    "tests": "assert label == \"Flow: \"\nassert flow == 12",
    "hint": "A string needs matching opening and closing quotation marks.",
    "explanation": "The unfinished literal prevents parsing. Closing it retains the intended space before the numeric value.",
    "level": "Foundation",
    "referenceOutput": "Flow: 12",
    "observed": {
      "output": "",
      "error": {
        "type": "SyntaxError",
        "message": "unterminated string literal (detected at line 2) (practice, line 2)"
      }
    }
  },
  {
    "id": "debug-new-02",
    "name": "Keep the augmented operator together",
    "category": "syntax",
    "topic": "for",
    "source": "New practice · Keep the augmented operator together",
    "task": "Repair the accumulator statement; add the loads 3, 5 and 7 and print 15.",
    "buggy": "loads = [3, 5, 7]\ntotal = 0\nfor load in loads:\n    total + = load\nprint(total)",
    "solutions": [
      "loads = [3, 5, 7]\ntotal = 0\nfor load in loads:\n    total += load\nprint(total)"
    ],
    "tests": "assert total == 15",
    "hint": "An augmented assignment operator is one token.",
    "explanation": "Whitespace may surround +=, but cannot split it into + and =. The repaired loop preserves a running sum.",
    "level": "Foundation",
    "referenceOutput": "15",
    "observed": {
      "output": "",
      "error": {
        "type": "SyntaxError",
        "message": "invalid syntax (practice, line 4)"
      }
    }
  },
  {
    "id": "debug-new-03",
    "name": "Separate keyword arguments",
    "category": "syntax",
    "topic": "functions",
    "source": "New practice · Separate keyword arguments",
    "task": "Supply the missing punctuation in the function call. The rectangle has width 2 and height 5; print 10.",
    "buggy": "def area(width, height):\n    return width * height\nprint(area(width=2 height=5))",
    "solutions": [
      "def area(width, height):\n    return width * height\nprint(area(width=2, height=5))"
    ],
    "tests": "assert area(0, 5) == 0\nassert area(3, 4) == 12",
    "hint": "Arguments in a call must be separated.",
    "explanation": "A comma separates the two keyword arguments. The independent fixtures also check zero area and another rectangle.",
    "level": "Foundation",
    "referenceOutput": "10",
    "observed": {
      "output": "",
      "error": {
        "type": "SyntaxError",
        "message": "invalid syntax. Perhaps you forgot a comma? (practice, line 3)"
      }
    }
  },
  {
    "id": "debug-new-04",
    "name": "Put return inside the function",
    "category": "syntax",
    "topic": "functions",
    "source": "New practice · Put return inside the function",
    "task": "Correct the block structure so double(6) returns and prints 12. Keep the multiplication inside double.",
    "buggy": "def double(x):\n    result = 2 * x\nreturn result\nprint(double(6))",
    "solutions": [
      "def double(x):\n    result = 2 * x\n    return result\nprint(double(6))"
    ],
    "tests": "assert double(0) == 0\nassert double(-3) == -6",
    "hint": "The return statement belongs to the function body.",
    "explanation": "The unindented return occurs at module scope, where Python forbids it. Indenting it returns the local result to the caller.",
    "level": "Foundation",
    "referenceOutput": "12",
    "observed": {
      "output": "",
      "error": {
        "type": "SyntaxError",
        "message": "'return' outside function (practice, line 3)"
      }
    }
  },
  {
    "id": "debug-new-05",
    "name": "Use a call for printing",
    "category": "syntax",
    "topic": "strings",
    "source": "New practice · Use a call for printing",
    "task": "Repair the Python 3 print statement so the program prints Report ready.",
    "buggy": "message = \"Report ready\"\nprint message",
    "solutions": [
      "message = \"Report ready\"\nprint(message)"
    ],
    "tests": "assert message == \"Report ready\"",
    "hint": "In Python 3, print is called with parentheses.",
    "explanation": "The Python 2-style statement is invalid here. Calling print preserves the requested message.",
    "level": "Foundation",
    "referenceOutput": "Report ready",
    "observed": {
      "output": "",
      "error": {
        "type": "SyntaxError",
        "message": "Missing parentheses in call to 'print'. Did you mean print(...)? (practice, line 2)"
      }
    }
  },
  {
    "id": "debug-new-06",
    "name": "Do not replace a list with append’s return",
    "category": "runtime",
    "topic": "lists",
    "source": "New practice · Do not replace a list with append’s return",
    "task": "Keep readings as a list, append 8, and print [2, 4, 8].",
    "buggy": "readings = [2, 4]\nreadings = readings.append(8)\nprint(len(readings))",
    "solutions": [
      "readings = [2, 4]\nreadings.append(8)\nprint(readings)"
    ],
    "tests": "assert readings == [2, 4, 8]\nassert isinstance(readings, list)",
    "hint": "append changes its receiver and returns None.",
    "explanation": "Assigning append’s return loses the list reference. Use it as a mutating statement, then print the retained list.",
    "level": "Foundation",
    "referenceOutput": "[2, 4, 8]",
    "observed": {
      "output": "",
      "error": {
        "type": "TypeError",
        "message": "object of type 'NoneType' has no len()"
      }
    }
  },
  {
    "id": "debug-new-07",
    "name": "Unpack the complete record",
    "category": "runtime",
    "topic": "lists",
    "source": "New practice · Unpack the complete record",
    "task": "Unpack all three fields of (time, temperature, quality). Print 2 24 good.",
    "buggy": "record = (2, 24, \"good\")\ntime, temperature = record\nprint(time, temperature)",
    "solutions": [
      "record = (2, 24, \"good\")\ntime, temperature, quality = record\nprint(time, temperature, quality)"
    ],
    "tests": "assert (time, temperature, quality) == record",
    "hint": "The number of target names must match the tuple fields.",
    "explanation": "The record contains three fields. Three targets retain the quality flag instead of losing part of the record.",
    "level": "Foundation",
    "referenceOutput": "2 24 good",
    "observed": {
      "output": "",
      "error": {
        "type": "ValueError",
        "message": "too many values to unpack (expected 2)"
      }
    }
  },
  {
    "id": "debug-new-08",
    "name": "Preserve the built-in sum function",
    "category": "runtime",
    "topic": "functions",
    "source": "New practice · Preserve the built-in sum function",
    "task": "Rename the temporary total so both sums remain callable. Print 6 and then 9 on separate lines.",
    "buggy": "values = [1, 2, 3]\nsum = sum(values)\nprint(sum)\nprint(sum([4, 5]))",
    "solutions": [
      "values = [1, 2, 3]\ntotal = sum(values)\nprint(total)\nprint(sum([4, 5]))"
    ],
    "tests": "assert total == 6\nassert sum([0, -2, 2]) == 0",
    "hint": "A variable named sum shadows the built-in callable.",
    "explanation": "Use a descriptive data name such as total. The second calculation can then call the original sum function.",
    "level": "Foundation",
    "referenceOutput": "6\n9",
    "observed": {
      "output": "6",
      "error": {
        "type": "TypeError",
        "message": "'int' object is not callable"
      }
    }
  },
  {
    "id": "debug-new-09",
    "name": "Use an integer position",
    "category": "runtime",
    "topic": "lists",
    "source": "New practice · Use an integer position",
    "task": "The midpoint expression should select the middle entry of this odd-length list. Print 20; use integer division to compute the index.",
    "buggy": "values = [10, 20, 30]\nmid = len(values) / 2\nprint(values[mid])",
    "solutions": [
      "values = [10, 20, 30]\nmid = len(values) // 2\nprint(values[mid])"
    ],
    "tests": "assert mid == 1\nassert values[mid] == 20",
    "hint": "Python / returns a float; list positions require integers.",
    "explanation": "Floor division produces the intended integer position. A float such as 1.5 cannot be a list index.",
    "level": "Foundation",
    "referenceOutput": "20",
    "observed": {
      "output": "",
      "error": {
        "type": "TypeError",
        "message": "list indices must be integers or slices, not float"
      }
    }
  },
  {
    "id": "debug-new-10",
    "name": "Read a record using its mapping key",
    "category": "runtime",
    "topic": "dicts",
    "source": "New practice · Read a record using its mapping key",
    "task": "Read temperature from the dictionary using its key and print 25.",
    "buggy": "record = {\"temperature\": 25}\nprint(record.temperature)",
    "solutions": [
      "record = {\"temperature\": 25}\nprint(record[\"temperature\"])"
    ],
    "tests": "assert record[\"temperature\"] == 25",
    "hint": "This record is a dictionary, not an instance with a temperature attribute.",
    "explanation": "Dictionary entries use key lookup. Dot access does not retrieve an arbitrary mapping entry.",
    "level": "Foundation",
    "referenceOutput": "25",
    "observed": {
      "output": "",
      "error": {
        "type": "AttributeError",
        "message": "'dict' object has no attribute 'temperature'"
      }
    }
  },
  {
    "id": "debug-new-11",
    "name": "Search past the first mismatch",
    "category": "logic",
    "topic": "for",
    "source": "New practice · Search past the first mismatch",
    "task": "Repair find so it returns the first matching index or -1 after all entries are checked. Print 2 for target 8.",
    "buggy": "def find(xs, target):\n    for i, x in enumerate(xs):\n        if x == target:\n            return i\n        return -1\n    return -1\nprint(find([3, 5, 8], 8))",
    "solutions": [
      "def find(xs, target):\n    for i, x in enumerate(xs):\n        if x == target:\n            return i\n    return -1\nprint(find([3, 5, 8], 8))"
    ],
    "tests": "assert find([3, 5, 8], 8) == 2\nassert find([], 8) == -1\nassert find([8, 8], 8) == 0\nassert find([3, 5], 8) == -1",
    "hint": "A failed first comparison does not establish absence from the whole list.",
    "explanation": "Move the missing-result return after the loop. This preserves early success while allowing later matches to be inspected.",
    "level": "Practice",
    "referenceOutput": "2",
    "observed": {
      "output": "-1",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-new-12",
    "name": "Preserve a signed sentinel stream",
    "category": "logic",
    "topic": "while",
    "source": "New practice · Preserve a signed sentinel stream",
    "task": "Sum readings only before the -999 sentinel. Stop before adding the sentinel or later data; print 10.",
    "buggy": "values = [4, 6, -999, 100]\ntotal = 0\nfor value in values:\n    total += value\n    if value == -999:\n        break\nprint(total)",
    "solutions": [
      "values = [4, 6, -999, 100]\ntotal = 0\nfor value in values:\n    if value == -999:\n        break\n    total += value\nprint(total)"
    ],
    "tests": "assert total == 10",
    "hint": "Check whether a value is the stop marker before processing it.",
    "explanation": "A sentinel is control information, not a measurement. Testing it first prevents it from entering the sum.",
    "level": "Practice",
    "referenceOutput": "10",
    "observed": {
      "output": "-989",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-new-13",
    "name": "Update a binary-search bound strictly",
    "category": "logic",
    "topic": "lists",
    "source": "New practice · Update a binary-search bound strictly",
    "task": "Repair binary search for ascending data. On an unsuccessful low midpoint, exclude that midpoint. Keep the 10-pass safety cap; print index 1 for target 9.",
    "buggy": "def search(a, target):\n    lo, hi = 0, len(a)-1\n    for _ in range(10):\n        if lo > hi:\n            return -1\n        mid = (lo+hi)//2\n        if a[mid] == target:\n            return mid\n        if a[mid] < target:\n            lo = mid\n        else:\n            hi = mid-1\n    return -1\nprint(search([2, 9], 9))",
    "solutions": [
      "def search(a, target):\n    lo, hi = 0, len(a)-1\n    for _ in range(10):\n        if lo > hi:\n            return -1\n        mid = (lo+hi)//2\n        if a[mid] == target:\n            return mid\n        if a[mid] < target:\n            lo = mid+1\n        else:\n            hi = mid-1\n    return -1\nprint(search([2, 9], 9))"
    ],
    "tests": "assert search([2, 9], 9) == 1\nassert search([2, 9], 2) == 0\nassert search([2, 9], 5) == -1\nassert search([], 1) == -1",
    "hint": "A midpoint already known too small cannot remain a candidate.",
    "explanation": "Using mid+1 shrinks the inclusive interval even when it contains two entries. The cap is demonstration protection, not a general arbitrary-size search guarantee.",
    "level": "Challenge",
    "referenceOutput": "1",
    "observed": {
      "output": "-1",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-new-14",
    "name": "Return every complete window",
    "category": "logic",
    "topic": "lists",
    "source": "New practice · Return every complete window",
    "task": "Return all width-w complete moving means. For [2,4,8,10], width 2, print [3.0, 6.0, 9.0]. Assume 1 <= w <= len(xs).",
    "buggy": "def means(xs, w):\n    return [sum(xs[i:i+w])/w for i in range(len(xs)-w)]\nprint(means([2, 4, 8, 10], 2))",
    "solutions": [
      "def means(xs, w):\n    return [sum(xs[i:i+w])/w for i in range(len(xs)-w+1)]\nprint(means([2, 4, 8, 10], 2))"
    ],
    "tests": "assert means([2, 4, 8, 10], 2) == [3.0, 6.0, 9.0]\nassert means([3], 1) == [3.0]\nassert means([2, 4], 2) == [3.0]",
    "hint": "The last valid start is len(xs)-w, inclusive.",
    "explanation": "There are n-w+1 complete windows. range excludes its stop, so the expression needs the extra one.",
    "level": "Practice",
    "referenceOutput": "[3.0, 6.0, 9.0]",
    "observed": {
      "output": "[3.0, 6.0]",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-new-15",
    "name": "Apply both acceptance conditions",
    "category": "logic",
    "topic": "decisions",
    "source": "New practice · Apply both acceptance conditions",
    "task": "Accept a design only if mass <= 10 and stress <= 100. Print False for mass 12 and stress 80.",
    "buggy": "def acceptable(mass, stress):\n    return mass <= 10 or stress <= 100\nprint(acceptable(12, 80))",
    "solutions": [
      "def acceptable(mass, stress):\n    return mass <= 10 and stress <= 100\nprint(acceptable(12, 80))"
    ],
    "tests": "assert not acceptable(12, 80)\nassert not acceptable(8, 120)\nassert acceptable(10, 100)\nassert acceptable(8, 80)",
    "hint": "Both constraints are required, so one passing condition is insufficient.",
    "explanation": "Conjunction enforces both limits. The regression cases reject each independent violation and include the equality boundaries.",
    "level": "Practice",
    "referenceOutput": "False",
    "observed": {
      "output": "True",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-new-16",
    "name": "Use radius in the circular area",
    "category": "units",
    "topic": "engineering",
    "source": "New practice · Use radius in the circular area",
    "task": "Compute a circular area in square metres from diameter 0.2 m. Keep math.pi and print the area to four decimal places.",
    "buggy": "import math\ndiameter_m = 0.2\narea_m2 = math.pi * diameter_m**2\nprint(f\"{area_m2:.4f}\")",
    "solutions": [
      "import math\ndiameter_m = 0.2\narea_m2 = math.pi * (diameter_m/2)**2\nprint(f\"{area_m2:.4f}\")"
    ],
    "tests": "assert math.isclose(area_m2, 0.031415926535897934, rel_tol=1e-12)",
    "hint": "The circle formula uses radius, which is half the diameter.",
    "explanation": "Using diameter as radius overestimates area by a factor of four. Halve it before squaring.",
    "level": "Practice",
    "referenceOutput": "0.0314",
    "observed": {
      "output": "0.1257",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-new-17",
    "name": "Cube the millimetre conversion",
    "category": "units",
    "topic": "engineering",
    "source": "New practice · Cube the millimetre conversion",
    "task": "Convert volume 2000 mm³ to m³ and print 0.000002000 using nine digits after the decimal point.",
    "buggy": "volume_mm3 = 2000\nvolume_m3 = volume_mm3 / 1000\nprint(f\"{volume_m3:.9f}\")",
    "solutions": [
      "volume_mm3 = 2000\nvolume_m3 = volume_mm3 / 1000**3\nprint(f\"{volume_m3:.9f}\")"
    ],
    "tests": "assert abs(volume_m3 - 0.000002) < 1e-15",
    "hint": "A volume conversion applies the length factor in three dimensions.",
    "explanation": "One millimetre is 0.001 m, so one cubic millimetre is 1e-9 cubic metres.",
    "level": "Practice",
    "referenceOutput": "0.000002000",
    "observed": {
      "output": "2.000000000",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-new-18",
    "name": "Convert mass before computing weight",
    "category": "units",
    "topic": "engineering",
    "source": "New practice · Convert mass before computing weight",
    "task": "Compute weight in newtons from 250 g at g=9.81 m/s². Print 2.4525.",
    "buggy": "mass_g = 250\ng = 9.81\nweight_n = mass_g * g\nprint(f\"{weight_n:.4f}\")",
    "solutions": [
      "mass_g = 250\ng = 9.81\nweight_n = (mass_g/1000) * g\nprint(f\"{weight_n:.4f}\")"
    ],
    "tests": "assert abs(weight_n - 2.4525) < 1e-12",
    "hint": "Newtons use kilograms, metres and seconds.",
    "explanation": "The formula requires 0.25 kg, not the numeric gram value 250. Convert the mass before multiplying.",
    "level": "Practice",
    "referenceOutput": "2.4525",
    "observed": {
      "output": "2452.5000",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-new-19",
    "name": "Turn efficiency percent into a fraction",
    "category": "units",
    "topic": "engineering",
    "source": "New practice · Turn efficiency percent into a fraction",
    "task": "For input power 200 W and efficiency 80 percent, compute output power and print 160.0.",
    "buggy": "input_w = 200\nefficiency_percent = 80\noutput_w = input_w * efficiency_percent\nprint(output_w)",
    "solutions": [
      "input_w = 200\nefficiency_percent = 80\noutput_w = input_w * (efficiency_percent/100)\nprint(output_w)"
    ],
    "tests": "assert output_w == 160\nassert 0 <= output_w <= input_w",
    "hint": "The fraction corresponding to 80 percent is 0.8.",
    "explanation": "Using 80 as a multiplier produces an impossible output under the stated loss-only model. Divide the percentage by 100.",
    "level": "Practice",
    "referenceOutput": "160.0",
    "observed": {
      "output": "16000",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-new-20",
    "name": "Match energy units to elapsed time",
    "category": "units",
    "topic": "engineering",
    "source": "New practice · Match energy units to elapsed time",
    "task": "Calculate energy in joules for a 60 W load running for 2 hours. Print 432000.",
    "buggy": "power_w = 60\nhours = 2\nenergy_j = power_w * hours\nprint(energy_j)",
    "solutions": [
      "power_w = 60\nhours = 2\nenergy_j = power_w * hours * 3600\nprint(energy_j)"
    ],
    "tests": "assert energy_j == 432000",
    "hint": "A watt is one joule per second.",
    "explanation": "Convert hours to seconds before multiplying by watts. The unconverted product represents watt-hours, not joules.",
    "level": "Practice",
    "referenceOutput": "432000",
    "observed": {
      "output": "120",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-new-21",
    "name": "Make independent grid rows",
    "category": "state",
    "topic": "lists",
    "source": "New practice · Make independent grid rows",
    "task": "Create a two-row, three-column zero grid. Changing grid[0][1] to 7 must leave the second row all zeros; print the complete grid.",
    "buggy": "grid = [[0]*3]*2\ngrid[0][1] = 7\nprint(grid)",
    "solutions": [
      "grid = [[0]*3 for _ in range(2)]\ngrid[0][1] = 7\nprint(grid)"
    ],
    "tests": "assert grid == [[0, 7, 0], [0, 0, 0]]\nassert grid[0] is not grid[1]",
    "hint": "Repetition shares references to a single row list.",
    "explanation": "A comprehension creates each row independently. The identity check exposes aliasing even before a second mutation.",
    "level": "Practice",
    "referenceOutput": "[[0, 7, 0], [0, 0, 0]]",
    "observed": {
      "output": "[[0, 7, 0], [0, 7, 0]]",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-new-22",
    "name": "Copy nested measurement rows",
    "category": "state",
    "topic": "lists",
    "source": "New practice · Copy nested measurement rows",
    "task": "Create an independent processed copy of the nested raw rows using deepcopy. Change only the processed first entry to 9; print the unchanged raw rows.",
    "buggy": "import copy\nraw = [[1, 2], [3, 4]]\nprocessed = raw.copy()\nprocessed[0][0] = 9\nprint(raw)",
    "solutions": [
      "import copy\nraw = [[1, 2], [3, 4]]\nprocessed = copy.deepcopy(raw)\nprocessed[0][0] = 9\nprint(raw)"
    ],
    "tests": "assert raw == [[1, 2], [3, 4]]\nassert processed == [[9, 2], [3, 4]]\nassert raw[0] is not processed[0]",
    "hint": "A shallow outer copy still shares inner mutable rows.",
    "explanation": "deepcopy duplicates these nested lists, so changing a processed entry does not overwrite raw evidence.",
    "level": "Practice",
    "referenceOutput": "[[1, 2], [3, 4]]",
    "observed": {
      "output": "[[9, 2], [3, 4]]",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-new-23",
    "name": "Give each group its own list",
    "category": "state",
    "topic": "dicts",
    "source": "New practice · Give each group its own list",
    "task": "Initialize independent lists for tags A and B using a dictionary comprehension. Append 3 to A and print both groups.",
    "buggy": "groups = dict.fromkeys([\"A\", \"B\"], [])\ngroups[\"A\"].append(3)\nprint(groups[\"A\"], groups[\"B\"])",
    "solutions": [
      "groups = {key: [] for key in [\"A\", \"B\"]}\ngroups[\"A\"].append(3)\nprint(groups[\"A\"], groups[\"B\"])"
    ],
    "tests": "assert groups[\"A\"] == [3]\nassert groups[\"B\"] == []\nassert groups[\"A\"] is not groups[\"B\"]",
    "hint": "fromkeys reuses the supplied default object for every key.",
    "explanation": "A comprehension evaluates [] once per key, preventing cross-group contamination.",
    "level": "Practice",
    "referenceOutput": "[3] []",
    "observed": {
      "output": "[3] [3]",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-new-24",
    "name": "Keep each logger’s history separate",
    "category": "state",
    "topic": "objects",
    "source": "New practice · Keep each logger’s history separate",
    "task": "Move history initialization into __init__. Adding 5 to logger a must not change logger b; print both histories.",
    "buggy": "class Logger:\n    history = []\n    def add(self, value):\n        self.history.append(value)\na, b = Logger(), Logger()\na.add(5)\nprint(a.history, b.history)",
    "solutions": [
      "class Logger:\n    def __init__(self):\n        self.history = []\n    def add(self, value):\n        self.history.append(value)\na, b = Logger(), Logger()\na.add(5)\nprint(a.history, b.history)"
    ],
    "tests": "assert a.history == [5]\nassert b.history == []\nassert a.history is not b.history",
    "hint": "A mutable class attribute is shared unless an instance supplies its own state.",
    "explanation": "Creating history during initialization gives each logger a new list and preserves independent recordings.",
    "level": "Practice",
    "referenceOutput": "[5] []",
    "observed": {
      "output": "[5] [5]",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-new-25",
    "name": "Reset counts for each report",
    "category": "state",
    "topic": "dicts",
    "source": "New practice · Reset counts for each report",
    "task": "Each summarize call should create a fresh count mapping. Keep the calls shown and print 2 followed by 1.",
    "buggy": "counts = {}\ndef summarize(tags):\n    for tag in tags:\n        counts[tag] = counts.get(tag, 0) + 1\n    return counts\nprint(summarize([\"A\", \"A\"])[\"A\"])\nprint(summarize([\"A\"])[\"A\"])",
    "solutions": [
      "def summarize(tags):\n    counts = {}\n    for tag in tags:\n        counts[tag] = counts.get(tag, 0) + 1\n    return counts\nprint(summarize([\"A\", \"A\"])[\"A\"])\nprint(summarize([\"A\"])[\"A\"])"
    ],
    "tests": "assert summarize([]) == {}\nassert summarize([\"B\", \"B\"]) == {\"B\": 2}\nassert summarize([\"B\"]) == {\"B\": 1}",
    "hint": "The report contract calls for per-call counts, not a cumulative global mapping.",
    "explanation": "Local initialization removes accidental dependence on earlier reports and makes repeated calls independent.",
    "level": "Practice",
    "referenceOutput": "2\n1",
    "observed": {
      "output": "2\n3",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-new-26",
    "name": "Test residual magnitude",
    "category": "testing",
    "topic": "arithmetic",
    "source": "New practice · Test residual magnitude",
    "task": "Implement close_to_zero so it accepts residuals with absolute magnitude <= tolerance. Keep the displayed input and print False.",
    "buggy": "def close_to_zero(residual, tolerance):\n    return residual <= tolerance\nprint(close_to_zero(-10, 0.01))",
    "solutions": [
      "def close_to_zero(residual, tolerance):\n    return abs(residual) <= tolerance\nprint(close_to_zero(-10, 0.01))"
    ],
    "tests": "assert not close_to_zero(-10, 0.01)\nassert not close_to_zero(10, 0.01)\nassert close_to_zero(-0.005, 0.01)\nassert close_to_zero(0.01, 0.01)",
    "hint": "A large negative residual is not close to zero.",
    "explanation": "Compare magnitude rather than signed value; otherwise any sufficiently negative error falsely passes.",
    "level": "Practice",
    "referenceOutput": "False",
    "observed": {
      "output": "True",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-new-27",
    "name": "Repair a faulty expected value",
    "category": "testing",
    "topic": "engineering",
    "source": "New practice · Repair a faulty expected value",
    "task": "The rectangle implementation is correct. Repair only the mistaken expected value for width 3 and height 4, then print Checks passed.",
    "buggy": "def area(w, h):\n    return w*h\nassert area(3, 4) == 7\nprint(\"Checks passed\")",
    "solutions": [
      "def area(w, h):\n    return w*h\nassert area(3, 4) == 12\nprint(\"Checks passed\")"
    ],
    "tests": "assert area(0, 8) == 0\nassert area(2, 5) == 10",
    "hint": "Derive the expected area independently from the specification.",
    "explanation": "A failing test can have an incorrect oracle. Rectangle area multiplies dimensions; changing the function to addition would hide the test defect.",
    "level": "Practice",
    "referenceOutput": "Checks passed",
    "observed": {
      "output": "",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-new-28",
    "name": "Allow a small absolute error near zero",
    "category": "testing",
    "topic": "arithmetic",
    "source": "New practice · Allow a small absolute error near zero",
    "task": "Using math.isclose, accept 1e-12 as close to zero with absolute tolerance 1e-9. Keep rel_tol=1e-6 and print True.",
    "buggy": "import math\nvalue = 1e-12\nresult = math.isclose(value, 0.0, rel_tol=1e-6)\nprint(result)",
    "solutions": [
      "import math\nvalue = 1e-12\nresult = math.isclose(value, 0.0, rel_tol=1e-6, abs_tol=1e-9)\nprint(result)"
    ],
    "tests": "assert result is True\nassert not math.isclose(1e-3, 0.0, rel_tol=1e-6, abs_tol=1e-9)",
    "hint": "Relative tolerance alone gives no useful nonzero allowance against zero here.",
    "explanation": "The explicit absolute tolerance establishes the near-zero scale. The larger residual fixture remains rejected.",
    "level": "Practice",
    "referenceOutput": "True",
    "observed": {
      "output": "False",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-new-29",
    "name": "Check multiplicities after sorting",
    "category": "testing",
    "topic": "lists",
    "source": "New practice · Check multiplicities after sorting",
    "task": "Complete preserves_items using collections.Counter so it checks the full multiplicity of values. Print False for [1,4] versus [2,3].",
    "buggy": "from collections import Counter\ndef preserves_items(before, after):\n    return sum(before) == sum(after)\nprint(preserves_items([1, 4], [2, 3]))",
    "solutions": [
      "from collections import Counter\ndef preserves_items(before, after):\n    return Counter(before) == Counter(after)\nprint(preserves_items([1, 4], [2, 3]))"
    ],
    "tests": "assert not preserves_items([1, 4], [2, 3])\nassert preserves_items([2, 1, 2], [1, 2, 2])\nassert not preserves_items([1, 1, 2], [1, 2, 2])\nassert preserves_items([], [])",
    "hint": "Equal sums can hide different entries or duplicate counts.",
    "explanation": "Counters compare each value’s multiplicity, while the sum alone cannot distinguish many wrong outputs. This checks preservation, not ordering.",
    "level": "Practice",
    "referenceOutput": "False",
    "observed": {
      "output": "True",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-new-30",
    "name": "Test an isolated copy",
    "category": "testing",
    "topic": "lists",
    "source": "New practice · Test an isolated copy",
    "task": "Save an independent flat-list backup before calling double_in_place. The comparison should show the input changed; print False.",
    "buggy": "def double_in_place(xs):\n    for i in range(len(xs)):\n        xs[i] *= 2\na = [2, 3]\nbefore = a\ndouble_in_place(a)\nprint(a == before)",
    "solutions": [
      "def double_in_place(xs):\n    for i in range(len(xs)):\n        xs[i] *= 2\na = [2, 3]\nbefore = a.copy()\ndouble_in_place(a)\nprint(a == before)"
    ],
    "tests": "assert before == [2, 3]\nassert a == [4, 6]\nassert before is not a",
    "hint": "A second reference to the same list does not preserve the original contents.",
    "explanation": "The snapshot must be independent for a mutation test to detect a change. A shallow copy is sufficient for these flat numeric entries.",
    "level": "Practice",
    "referenceOutput": "False",
    "observed": {
      "output": "True",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-new-31",
    "name": "Reject nonfinite numeric strings",
    "category": "validation",
    "topic": "strings",
    "source": "New practice · Reject nonfinite numeric strings",
    "task": "parse should convert numeric text, then reject nonfinite results by raising ValueError. Keep the handler; print Rejected for nan.",
    "buggy": "import math\ndef parse(raw):\n    value = float(raw)\n    return value\ntry:\n    print(parse(\"nan\"))\nexcept ValueError:\n    print(\"Rejected\")",
    "solutions": [
      "import math\ndef parse(raw):\n    value = float(raw)\n    if not math.isfinite(value):\n        raise ValueError(\"finite reading required\")\n    return value\ntry:\n    print(parse(\"nan\"))\nexcept ValueError:\n    print(\"Rejected\")"
    ],
    "tests": "assert parse(\" 2.5 \") == 2.5\nassert parse(\"-3\") == -3\nfor raw in [\"nan\", \"inf\", \"-inf\", \"bad\"]:\n    try:\n        parse(raw)\n    except ValueError:\n        pass\n    else:\n        raise AssertionError(\"invalid input accepted\")",
    "hint": "float conversion can succeed for NaN and infinity.",
    "explanation": "Successful parsing is only the first check. isfinite enforces the stated domain and rejects nonfinite numbers before they enter calculations.",
    "level": "Practice",
    "referenceOutput": "Rejected",
    "observed": {
      "output": "nan",
      "error": {
        "type": "AssertionError",
        "message": "invalid input accepted"
      }
    }
  },
  {
    "id": "debug-new-32",
    "name": "Keep Boolean flags out of integer counts",
    "category": "validation",
    "topic": "types",
    "source": "New practice · Keep Boolean flags out of integer counts",
    "task": "valid_count must accept only exact Python int values >= 0, rejecting bool and float. Use type(x) is int. Print False for True.",
    "buggy": "def valid_count(x):\n    return isinstance(x, int) and x >= 0\nprint(valid_count(True))",
    "solutions": [
      "def valid_count(x):\n    return type(x) is int and x >= 0\nprint(valid_count(True))"
    ],
    "tests": "assert valid_count(0)\nassert valid_count(3)\nassert not valid_count(True)\nassert not valid_count(False)\nassert not valid_count(2.0)\nassert not valid_count(-1)",
    "hint": "bool is a subclass of int, but the stated contract excludes flags.",
    "explanation": "The exact-type check implements this deliberately narrow count policy. isinstance alone would accept True and False.",
    "level": "Practice",
    "referenceOutput": "False",
    "observed": {
      "output": "True",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-new-33",
    "name": "Validate window width on both sides",
    "category": "validation",
    "topic": "lists",
    "source": "New practice · Validate window width on both sides",
    "task": "For nonempty xs and integer w, raise ValueError unless 1 <= w <= len(xs). Keep the displayed call with w=0 and print Invalid width.",
    "buggy": "def means(xs, w):\n    if w > len(xs):\n        raise ValueError(\"width\")\n    return [sum(xs[i:i+w])/w for i in range(len(xs)-w+1)]\ntry:\n    print(means([2, 4], 0))\nexcept ValueError:\n    print(\"Invalid width\")",
    "solutions": [
      "def means(xs, w):\n    if not 1 <= w <= len(xs):\n        raise ValueError(\"width\")\n    return [sum(xs[i:i+w])/w for i in range(len(xs)-w+1)]\ntry:\n    print(means([2, 4], 0))\nexcept ValueError:\n    print(\"Invalid width\")"
    ],
    "tests": "assert means([2, 4], 1) == [2.0, 4.0]\nassert means([2, 4], 2) == [3.0]\nfor width in [-1, 0, 3]:\n    try:\n        means([2, 4], width)\n    except ValueError:\n        pass\n    else:\n        raise AssertionError(\"invalid width accepted\")",
    "hint": "Zero and negative widths are invalid even when they are smaller than the record length.",
    "explanation": "Checking the full closed interval prevents zero division and meaningless negative-width slices, while preserving both valid boundaries.",
    "level": "Practice",
    "referenceOutput": "Invalid width",
    "observed": {
      "output": "",
      "error": {
        "type": "ZeroDivisionError",
        "message": "division by zero"
      }
    }
  },
  {
    "id": "debug-new-34",
    "name": "Handle an empty feasible set",
    "category": "validation",
    "topic": "lists",
    "source": "New practice · Handle an empty feasible set",
    "task": "cheapest returns the name of the cheapest feasible record, or None if none is feasible. Print None for the supplied records.",
    "buggy": "def cheapest(rows):\n    valid = [r for r in rows if r[2]]\n    return min(valid, key=lambda r:r[1])[0]\nprint(cheapest([(\"A\", 5, False), (\"B\", 8, False)]))",
    "solutions": [
      "def cheapest(rows):\n    valid = [r for r in rows if r[2]]\n    if not valid:\n        return None\n    return min(valid, key=lambda r:r[1])[0]\nprint(cheapest([(\"A\", 5, False), (\"B\", 8, False)]))"
    ],
    "tests": "assert cheapest([]) is None\nassert cheapest([(\"A\", 5, False)]) is None\nassert cheapest([(\"A\", 5, False), (\"B\", 8, True), (\"C\", 7, True)]) == \"C\"",
    "hint": "min requires at least one candidate unless an explicit default policy is used.",
    "explanation": "The task defines None for no feasible design. Check the retained set before selecting its minimum.",
    "level": "Practice",
    "referenceOutput": "None",
    "observed": {
      "output": "",
      "error": {
        "type": "ValueError",
        "message": "min() iterable argument is empty"
      }
    }
  },
  {
    "id": "debug-new-35",
    "name": "Require strictly increasing timestamps",
    "category": "validation",
    "topic": "lists",
    "source": "New practice · Require strictly increasing timestamps",
    "task": "valid_times should accept a nonempty list only when every timestamp is strictly greater than its predecessor. Duplicates are invalid; print False.",
    "buggy": "def valid_times(times):\n    return bool(times) and all(times[i] >= times[i-1] for i in range(1, len(times)))\nprint(valid_times([0, 1, 1, 2]))",
    "solutions": [
      "def valid_times(times):\n    return bool(times) and all(times[i] > times[i-1] for i in range(1, len(times)))\nprint(valid_times([0, 1, 1, 2]))"
    ],
    "tests": "assert valid_times([0])\nassert valid_times([0, 1, 2])\nassert not valid_times([])\nassert not valid_times([0, 1, 1])\nassert not valid_times([1, 0])",
    "hint": "Nondecreasing order permits duplicates; strict increase does not.",
    "explanation": "Use > for every adjacent pair. The explicit nonempty policy remains in place, and a singleton satisfies the pairwise rule.",
    "level": "Practice",
    "referenceOutput": "False",
    "observed": {
      "output": "True",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-new-36",
    "name": "Initialize inherited state",
    "category": "objects",
    "topic": "objects",
    "source": "New practice · Initialize inherited state",
    "task": "Call the base initializer from Calibrated.__init__, then store gain. Print 12 for value 4 and gain 3.",
    "buggy": "class Sensor:\n    def __init__(self, value):\n        self.value = value\nclass Calibrated(Sensor):\n    def __init__(self, value, gain):\n        self.gain = gain\n    def read(self):\n        return self.value * self.gain\nprint(Calibrated(4, 3).read())",
    "solutions": [
      "class Sensor:\n    def __init__(self, value):\n        self.value = value\nclass Calibrated(Sensor):\n    def __init__(self, value, gain):\n        super().__init__(value)\n        self.gain = gain\n    def read(self):\n        return self.value * self.gain\nprint(Calibrated(4, 3).read())"
    ],
    "tests": "s = Calibrated(-2, 5)\nassert s.value == -2\nassert s.read() == -10\nassert isinstance(s, Sensor)",
    "hint": "An overridden initializer does not call its base automatically.",
    "explanation": "Explicit delegation establishes the inherited value attribute before read uses it. The signed example checks the declared generic-reading behavior.",
    "level": "Practice",
    "referenceOutput": "12",
    "observed": {
      "output": "",
      "error": {
        "type": "AttributeError",
        "message": "'Calibrated' object has no attribute 'value'"
      }
    }
  },
  {
    "id": "debug-new-37",
    "name": "Dispatch through the receiving instance",
    "category": "objects",
    "topic": "objects",
    "source": "New practice · Dispatch through the receiving instance",
    "task": "report must use the receiver’s read method so subclasses can override it. Print 9 from the supplied Scaled object.",
    "buggy": "class Sensor:\n    def read(self):\n        return 3\n    def report(self):\n        return Sensor.read(self)\nclass Scaled(Sensor):\n    def read(self):\n        return 9\nprint(Scaled().report())",
    "solutions": [
      "class Sensor:\n    def read(self):\n        return 3\n    def report(self):\n        return self.read()\nclass Scaled(Sensor):\n    def read(self):\n        return 9\nprint(Scaled().report())"
    ],
    "tests": "assert Sensor().report() == 3\nassert Scaled().report() == 9",
    "hint": "Calling the base implementation by class name bypasses the override.",
    "explanation": "self.read() uses dynamic method lookup and preserves the polymorphic interface.",
    "level": "Challenge",
    "referenceOutput": "9",
    "observed": {
      "output": "3",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-new-38",
    "name": "Reject a setter update without corrupting state",
    "category": "objects",
    "topic": "objects",
    "source": "New practice · Reject a setter update without corrupting state",
    "task": "Validate a new nonnegative level before assigning it. The invalid update must raise ValueError and preserve the previous level 4; print 4.",
    "buggy": "class Tank:\n    def __init__(self):\n        self.level = 4\n    def set_level(self, x):\n        self.level = x\n        if x < 0:\n            raise ValueError(\"negative\")\nt = Tank()\ntry:\n    t.set_level(-1)\nexcept ValueError:\n    pass\nprint(t.level)",
    "solutions": [
      "class Tank:\n    def __init__(self):\n        self.level = 4\n    def set_level(self, x):\n        if x < 0:\n            raise ValueError(\"negative\")\n        self.level = x\nt = Tank()\ntry:\n    t.set_level(-1)\nexcept ValueError:\n    pass\nprint(t.level)"
    ],
    "tests": "assert t.level == 4\nt.set_level(0)\nassert t.level == 0\nt.set_level(7)\nassert t.level == 7",
    "hint": "A rejected operation should not first commit the invalid state.",
    "explanation": "Check the precondition before mutation. This failure policy leaves prior valid state available after the caller catches the exception.",
    "level": "Practice",
    "referenceOutput": "4",
    "observed": {
      "output": "-1",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-new-39",
    "name": "Invalidate a cached result after a change",
    "category": "objects",
    "topic": "objects",
    "source": "New practice · Invalidate a cached result after a change",
    "task": "The cached mean must reflect the latest history. Clear the cache in add; print 3.0 followed by 4.0.",
    "buggy": "class History:\n    def __init__(self):\n        self.values = [2, 4]\n        self._mean = None\n    def mean(self):\n        if self._mean is None:\n            self._mean = sum(self.values)/len(self.values)\n        return self._mean\n    def add(self, x):\n        self.values.append(x)\nh = History()\nprint(h.mean())\nh.add(6)\nprint(h.mean())",
    "solutions": [
      "class History:\n    def __init__(self):\n        self.values = [2, 4]\n        self._mean = None\n    def mean(self):\n        if self._mean is None:\n            self._mean = sum(self.values)/len(self.values)\n        return self._mean\n    def add(self, x):\n        self.values.append(x)\n        self._mean = None\nh = History()\nprint(h.mean())\nh.add(6)\nprint(h.mean())"
    ],
    "tests": "assert h.mean() == 4\nh.add(8)\nassert h.mean() == 5\nassert h.mean() == 5",
    "hint": "A cached value becomes stale when data affecting it change.",
    "explanation": "Invalidate after each supported mutation so the next query recomputes. This class’s exercise contract uses add for updates; direct external list mutation is outside it.",
    "level": "Challenge",
    "referenceOutput": "3.0\n4.0",
    "observed": {
      "output": "3.0\n3.0",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  },
  {
    "id": "debug-new-40",
    "name": "Return a protected history snapshot",
    "category": "objects",
    "topic": "objects",
    "source": "New practice · Return a protected history snapshot",
    "task": "values() must return a flat-list copy so callers cannot append into the private history. Keep external.append(9); print the unchanged [2, 4].",
    "buggy": "class SensorLog:\n    def __init__(self):\n        self._values = [2, 4]\n    def values(self):\n        return self._values\ns = SensorLog()\nexternal = s.values()\nexternal.append(9)\nprint(s.values())",
    "solutions": [
      "class SensorLog:\n    def __init__(self):\n        self._values = [2, 4]\n    def values(self):\n        return self._values.copy()\ns = SensorLog()\nexternal = s.values()\nexternal.append(9)\nprint(s.values())"
    ],
    "tests": "assert s.values() == [2, 4]\nassert external == [2, 4, 9]\nassert s.values() is not s.values()",
    "hint": "Returning the original list exposes the same storage used by the object.",
    "explanation": "The copied outer list protects this flat numeric history from caller-side append operations. A nested mutable history would require a deeper policy.",
    "level": "Practice",
    "referenceOutput": "[2, 4]",
    "observed": {
      "output": "[2, 4, 9]",
      "error": {
        "type": "AssertionError",
        "message": ""
      }
    }
  }
];
