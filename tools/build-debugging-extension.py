"""Author and verify forty original debugging exercises; preserve earlier IDs."""
import collections, contextlib, io, json, pathlib, subprocess
ROOT=pathlib.Path(__file__).resolve().parents[1]
cases=[]
def add(name,category,topic,task,buggy,repair,tests,hint,explanation,expected,kind='AssertionError',level='Practice'):
    def run(code, checks):
        ns={};out=io.StringIO();printed=None;error=None
        try:
            with contextlib.redirect_stdout(out):
                exec(compile(code,'practice','exec'),ns)
                printed=out.getvalue().rstrip('\n')
                exec(compile(checks,'regression checks','exec'),ns)
        except Exception as exc:error={'type':type(exc).__name__,'message':str(exc)}
        return printed if printed is not None else out.getvalue().rstrip('\n'),error
    output,error=run(repair,tests)
    assert error is None,(name,error)
    assert output==expected,(name,output,expected)
    observed,failure=run(buggy,tests)
    if failure is None and observed!=expected:failure={'type':'OutputMismatch','message':'Output differs from the stated result.'}
    assert failure and failure['type']==kind,(name,failure,kind)
    cases.append(dict(id=f'debug-new-{len(cases)+1:02}',name=name,category=category,topic=topic,source='New practice · '+name,task=task,buggy=buggy,solutions=[repair],tests=tests,hint=hint,explanation=explanation,level=level,referenceOutput=expected,observed=dict(output=observed,error=failure)))
add('Close the report label','syntax','strings','Repair the string literal so the complete program prints Flow: 12. Keep the label and numeric value.',
'flow = 12\nlabel = "Flow: \nprint(label + str(flow))',
'flow = 12\nlabel = "Flow: "\nprint(label + str(flow))',
'assert label == "Flow: "\nassert flow == 12','A string needs matching opening and closing quotation marks.','The unfinished literal prevents parsing. Closing it retains the intended space before the numeric value.','Flow: 12','SyntaxError','Foundation')
add('Keep the augmented operator together','syntax','for','Repair the accumulator statement; add the loads 3, 5 and 7 and print 15.',
'loads = [3, 5, 7]\ntotal = 0\nfor load in loads:\n    total + = load\nprint(total)',
'loads = [3, 5, 7]\ntotal = 0\nfor load in loads:\n    total += load\nprint(total)',
'assert total == 15','An augmented assignment operator is one token.','Whitespace may surround +=, but cannot split it into + and =. The repaired loop preserves a running sum.','15','SyntaxError','Foundation')
add('Separate keyword arguments','syntax','functions','Supply the missing punctuation in the function call. The rectangle has width 2 and height 5; print 10.',
'def area(width, height):\n    return width * height\nprint(area(width=2 height=5))',
'def area(width, height):\n    return width * height\nprint(area(width=2, height=5))',
'assert area(0, 5) == 0\nassert area(3, 4) == 12','Arguments in a call must be separated.','A comma separates the two keyword arguments. The independent fixtures also check zero area and another rectangle.','10','SyntaxError','Foundation')
add('Put return inside the function','syntax','functions','Correct the block structure so double(6) returns and prints 12. Keep the multiplication inside double.',
'def double(x):\n    result = 2 * x\nreturn result\nprint(double(6))',
'def double(x):\n    result = 2 * x\n    return result\nprint(double(6))',
'assert double(0) == 0\nassert double(-3) == -6','The return statement belongs to the function body.','The unindented return occurs at module scope, where Python forbids it. Indenting it returns the local result to the caller.','12','SyntaxError','Foundation')
add('Use a call for printing','syntax','strings','Repair the Python 3 print statement so the program prints Report ready.',
'message = "Report ready"\nprint message',
'message = "Report ready"\nprint(message)',
'assert message == "Report ready"','In Python 3, print is called with parentheses.','The Python 2-style statement is invalid here. Calling print preserves the requested message.','Report ready','SyntaxError','Foundation')
add('Do not replace a list with append’s return','runtime','lists','Keep readings as a list, append 8, and print [2, 4, 8].',
'readings = [2, 4]\nreadings = readings.append(8)\nprint(len(readings))',
'readings = [2, 4]\nreadings.append(8)\nprint(readings)',
'assert readings == [2, 4, 8]\nassert isinstance(readings, list)','append changes its receiver and returns None.','Assigning append’s return loses the list reference. Use it as a mutating statement, then print the retained list.','[2, 4, 8]','TypeError','Foundation')
add('Unpack the complete record','runtime','lists','Unpack all three fields of (time, temperature, quality). Print 2 24 good.',
'record = (2, 24, "good")\ntime, temperature = record\nprint(time, temperature)',
'record = (2, 24, "good")\ntime, temperature, quality = record\nprint(time, temperature, quality)',
'assert (time, temperature, quality) == record','The number of target names must match the tuple fields.','The record contains three fields. Three targets retain the quality flag instead of losing part of the record.','2 24 good','ValueError','Foundation')
add('Preserve the built-in sum function','runtime','functions','Rename the temporary total so both sums remain callable. Print 6 and then 9 on separate lines.',
'values = [1, 2, 3]\nsum = sum(values)\nprint(sum)\nprint(sum([4, 5]))',
'values = [1, 2, 3]\ntotal = sum(values)\nprint(total)\nprint(sum([4, 5]))',
'assert total == 6\nassert sum([0, -2, 2]) == 0','A variable named sum shadows the built-in callable.','Use a descriptive data name such as total. The second calculation can then call the original sum function.','6\n9','TypeError','Foundation')
add('Use an integer position','runtime','lists','The midpoint expression should select the middle entry of this odd-length list. Print 20; use integer division to compute the index.',
'values = [10, 20, 30]\nmid = len(values) / 2\nprint(values[mid])',
'values = [10, 20, 30]\nmid = len(values) // 2\nprint(values[mid])',
'assert mid == 1\nassert values[mid] == 20','Python / returns a float; list positions require integers.','Floor division produces the intended integer position. A float such as 1.5 cannot be a list index.','20','TypeError','Foundation')
add('Read a record using its mapping key','runtime','dicts','Read temperature from the dictionary using its key and print 25.',
'record = {"temperature": 25}\nprint(record.temperature)',
'record = {"temperature": 25}\nprint(record["temperature"])',
'assert record["temperature"] == 25','This record is a dictionary, not an instance with a temperature attribute.','Dictionary entries use key lookup. Dot access does not retrieve an arbitrary mapping entry.','25','AttributeError','Foundation')
add('Search past the first mismatch','logic','for','Repair find so it returns the first matching index or -1 after all entries are checked. Print 2 for target 8.',
'def find(xs, target):\n    for i, x in enumerate(xs):\n        if x == target:\n            return i\n        return -1\n    return -1\nprint(find([3, 5, 8], 8))',
'def find(xs, target):\n    for i, x in enumerate(xs):\n        if x == target:\n            return i\n    return -1\nprint(find([3, 5, 8], 8))',
'assert find([3, 5, 8], 8) == 2\nassert find([], 8) == -1\nassert find([8, 8], 8) == 0\nassert find([3, 5], 8) == -1','A failed first comparison does not establish absence from the whole list.','Move the missing-result return after the loop. This preserves early success while allowing later matches to be inspected.','2')
add('Preserve a signed sentinel stream','logic','while','Sum readings only before the -999 sentinel. Stop before adding the sentinel or later data; print 10.',
'values = [4, 6, -999, 100]\ntotal = 0\nfor value in values:\n    total += value\n    if value == -999:\n        break\nprint(total)',
'values = [4, 6, -999, 100]\ntotal = 0\nfor value in values:\n    if value == -999:\n        break\n    total += value\nprint(total)',
'assert total == 10','Check whether a value is the stop marker before processing it.','A sentinel is control information, not a measurement. Testing it first prevents it from entering the sum.','10')
add('Update a binary-search bound strictly','logic','lists','Repair binary search for ascending data. On an unsuccessful low midpoint, exclude that midpoint. Keep the 10-pass safety cap; print index 1 for target 9.',
'def search(a, target):\n    lo, hi = 0, len(a)-1\n    for _ in range(10):\n        if lo > hi:\n            return -1\n        mid = (lo+hi)//2\n        if a[mid] == target:\n            return mid\n        if a[mid] < target:\n            lo = mid\n        else:\n            hi = mid-1\n    return -1\nprint(search([2, 9], 9))',
'def search(a, target):\n    lo, hi = 0, len(a)-1\n    for _ in range(10):\n        if lo > hi:\n            return -1\n        mid = (lo+hi)//2\n        if a[mid] == target:\n            return mid\n        if a[mid] < target:\n            lo = mid+1\n        else:\n            hi = mid-1\n    return -1\nprint(search([2, 9], 9))',
'assert search([2, 9], 9) == 1\nassert search([2, 9], 2) == 0\nassert search([2, 9], 5) == -1\nassert search([], 1) == -1','A midpoint already known too small cannot remain a candidate.','Using mid+1 shrinks the inclusive interval even when it contains two entries. The cap is demonstration protection, not a general arbitrary-size search guarantee.','1',level='Challenge')
add('Return every complete window','logic','lists','Return all width-w complete moving means. For [2,4,8,10], width 2, print [3.0, 6.0, 9.0]. Assume 1 <= w <= len(xs).',
'def means(xs, w):\n    return [sum(xs[i:i+w])/w for i in range(len(xs)-w)]\nprint(means([2, 4, 8, 10], 2))',
'def means(xs, w):\n    return [sum(xs[i:i+w])/w for i in range(len(xs)-w+1)]\nprint(means([2, 4, 8, 10], 2))',
'assert means([2, 4, 8, 10], 2) == [3.0, 6.0, 9.0]\nassert means([3], 1) == [3.0]\nassert means([2, 4], 2) == [3.0]','The last valid start is len(xs)-w, inclusive.','There are n-w+1 complete windows. range excludes its stop, so the expression needs the extra one.','[3.0, 6.0, 9.0]')
add('Apply both acceptance conditions','logic','decisions','Accept a design only if mass <= 10 and stress <= 100. Print False for mass 12 and stress 80.',
'def acceptable(mass, stress):\n    return mass <= 10 or stress <= 100\nprint(acceptable(12, 80))',
'def acceptable(mass, stress):\n    return mass <= 10 and stress <= 100\nprint(acceptable(12, 80))',
'assert not acceptable(12, 80)\nassert not acceptable(8, 120)\nassert acceptable(10, 100)\nassert acceptable(8, 80)','Both constraints are required, so one passing condition is insufficient.','Conjunction enforces both limits. The regression cases reject each independent violation and include the equality boundaries.','False')
add('Use radius in the circular area','units','engineering','Compute a circular area in square metres from diameter 0.2 m. Keep math.pi and print the area to four decimal places.',
'import math\ndiameter_m = 0.2\narea_m2 = math.pi * diameter_m**2\nprint(f"{area_m2:.4f}")',
'import math\ndiameter_m = 0.2\narea_m2 = math.pi * (diameter_m/2)**2\nprint(f"{area_m2:.4f}")',
'assert math.isclose(area_m2, 0.031415926535897934, rel_tol=1e-12)','The circle formula uses radius, which is half the diameter.','Using diameter as radius overestimates area by a factor of four. Halve it before squaring.','0.0314')
add('Cube the millimetre conversion','units','engineering','Convert volume 2000 mm³ to m³ and print 0.000002000 using nine digits after the decimal point.',
'volume_mm3 = 2000\nvolume_m3 = volume_mm3 / 1000\nprint(f"{volume_m3:.9f}")',
'volume_mm3 = 2000\nvolume_m3 = volume_mm3 / 1000**3\nprint(f"{volume_m3:.9f}")',
'assert abs(volume_m3 - 0.000002) < 1e-15','A volume conversion applies the length factor in three dimensions.','One millimetre is 0.001 m, so one cubic millimetre is 1e-9 cubic metres.','0.000002000')
add('Convert mass before computing weight','units','engineering','Compute weight in newtons from 250 g at g=9.81 m/s². Print 2.4525.',
'mass_g = 250\ng = 9.81\nweight_n = mass_g * g\nprint(f"{weight_n:.4f}")',
'mass_g = 250\ng = 9.81\nweight_n = (mass_g/1000) * g\nprint(f"{weight_n:.4f}")',
'assert abs(weight_n - 2.4525) < 1e-12','Newtons use kilograms, metres and seconds.','The formula requires 0.25 kg, not the numeric gram value 250. Convert the mass before multiplying.','2.4525')
add('Turn efficiency percent into a fraction','units','engineering','For input power 200 W and efficiency 80 percent, compute output power and print 160.0.',
'input_w = 200\nefficiency_percent = 80\noutput_w = input_w * efficiency_percent\nprint(output_w)',
'input_w = 200\nefficiency_percent = 80\noutput_w = input_w * (efficiency_percent/100)\nprint(output_w)',
'assert output_w == 160\nassert 0 <= output_w <= input_w','The fraction corresponding to 80 percent is 0.8.','Using 80 as a multiplier produces an impossible output under the stated loss-only model. Divide the percentage by 100.','160.0')
add('Match energy units to elapsed time','units','engineering','Calculate energy in joules for a 60 W load running for 2 hours. Print 432000.',
'power_w = 60\nhours = 2\nenergy_j = power_w * hours\nprint(energy_j)',
'power_w = 60\nhours = 2\nenergy_j = power_w * hours * 3600\nprint(energy_j)',
'assert energy_j == 432000','A watt is one joule per second.','Convert hours to seconds before multiplying by watts. The unconverted product represents watt-hours, not joules.','432000')
add('Make independent grid rows','state','lists','Create a two-row, three-column zero grid. Changing grid[0][1] to 7 must leave the second row all zeros; print the complete grid.',
'grid = [[0]*3]*2\ngrid[0][1] = 7\nprint(grid)',
'grid = [[0]*3 for _ in range(2)]\ngrid[0][1] = 7\nprint(grid)',
'assert grid == [[0, 7, 0], [0, 0, 0]]\nassert grid[0] is not grid[1]','Repetition shares references to a single row list.','A comprehension creates each row independently. The identity check exposes aliasing even before a second mutation.','[[0, 7, 0], [0, 0, 0]]')
add('Copy nested measurement rows','state','lists','Create an independent processed copy of the nested raw rows using deepcopy. Change only the processed first entry to 9; print the unchanged raw rows.',
'import copy\nraw = [[1, 2], [3, 4]]\nprocessed = raw.copy()\nprocessed[0][0] = 9\nprint(raw)',
'import copy\nraw = [[1, 2], [3, 4]]\nprocessed = copy.deepcopy(raw)\nprocessed[0][0] = 9\nprint(raw)',
'assert raw == [[1, 2], [3, 4]]\nassert processed == [[9, 2], [3, 4]]\nassert raw[0] is not processed[0]','A shallow outer copy still shares inner mutable rows.','deepcopy duplicates these nested lists, so changing a processed entry does not overwrite raw evidence.','[[1, 2], [3, 4]]')
add('Give each group its own list','state','dicts','Initialize independent lists for tags A and B using a dictionary comprehension. Append 3 to A and print both groups.',
'groups = dict.fromkeys(["A", "B"], [])\ngroups["A"].append(3)\nprint(groups["A"], groups["B"])',
'groups = {key: [] for key in ["A", "B"]}\ngroups["A"].append(3)\nprint(groups["A"], groups["B"])',
'assert groups["A"] == [3]\nassert groups["B"] == []\nassert groups["A"] is not groups["B"]','fromkeys reuses the supplied default object for every key.','A comprehension evaluates [] once per key, preventing cross-group contamination.','[3] []')
add('Keep each logger’s history separate','state','objects','Move history initialization into __init__. Adding 5 to logger a must not change logger b; print both histories.',
'class Logger:\n    history = []\n    def add(self, value):\n        self.history.append(value)\na, b = Logger(), Logger()\na.add(5)\nprint(a.history, b.history)',
'class Logger:\n    def __init__(self):\n        self.history = []\n    def add(self, value):\n        self.history.append(value)\na, b = Logger(), Logger()\na.add(5)\nprint(a.history, b.history)',
'assert a.history == [5]\nassert b.history == []\nassert a.history is not b.history','A mutable class attribute is shared unless an instance supplies its own state.','Creating history during initialization gives each logger a new list and preserves independent recordings.','[5] []')
add('Reset counts for each report','state','dicts','Each summarize call should create a fresh count mapping. Keep the calls shown and print 2 followed by 1.',
'counts = {}\ndef summarize(tags):\n    for tag in tags:\n        counts[tag] = counts.get(tag, 0) + 1\n    return counts\nprint(summarize(["A", "A"])["A"])\nprint(summarize(["A"])["A"])',
'def summarize(tags):\n    counts = {}\n    for tag in tags:\n        counts[tag] = counts.get(tag, 0) + 1\n    return counts\nprint(summarize(["A", "A"])["A"])\nprint(summarize(["A"])["A"])',
'assert summarize([]) == {}\nassert summarize(["B", "B"]) == {"B": 2}\nassert summarize(["B"]) == {"B": 1}','The report contract calls for per-call counts, not a cumulative global mapping.','Local initialization removes accidental dependence on earlier reports and makes repeated calls independent.','2\n1')
add('Test residual magnitude','testing','arithmetic','Implement close_to_zero so it accepts residuals with absolute magnitude <= tolerance. Keep the displayed input and print False.',
'def close_to_zero(residual, tolerance):\n    return residual <= tolerance\nprint(close_to_zero(-10, 0.01))',
'def close_to_zero(residual, tolerance):\n    return abs(residual) <= tolerance\nprint(close_to_zero(-10, 0.01))',
'assert not close_to_zero(-10, 0.01)\nassert not close_to_zero(10, 0.01)\nassert close_to_zero(-0.005, 0.01)\nassert close_to_zero(0.01, 0.01)','A large negative residual is not close to zero.','Compare magnitude rather than signed value; otherwise any sufficiently negative error falsely passes.','False')
add('Repair a faulty expected value','testing','engineering','The rectangle implementation is correct. Repair only the mistaken expected value for width 3 and height 4, then print Checks passed.',
'def area(w, h):\n    return w*h\nassert area(3, 4) == 7\nprint("Checks passed")',
'def area(w, h):\n    return w*h\nassert area(3, 4) == 12\nprint("Checks passed")',
'assert area(0, 8) == 0\nassert area(2, 5) == 10','Derive the expected area independently from the specification.','A failing test can have an incorrect oracle. Rectangle area multiplies dimensions; changing the function to addition would hide the test defect.','Checks passed')
add('Allow a small absolute error near zero','testing','arithmetic','Using math.isclose, accept 1e-12 as close to zero with absolute tolerance 1e-9. Keep rel_tol=1e-6 and print True.',
'import math\nvalue = 1e-12\nresult = math.isclose(value, 0.0, rel_tol=1e-6)\nprint(result)',
'import math\nvalue = 1e-12\nresult = math.isclose(value, 0.0, rel_tol=1e-6, abs_tol=1e-9)\nprint(result)',
'assert result is True\nassert not math.isclose(1e-3, 0.0, rel_tol=1e-6, abs_tol=1e-9)','Relative tolerance alone gives no useful nonzero allowance against zero here.','The explicit absolute tolerance establishes the near-zero scale. The larger residual fixture remains rejected.','True')
add('Check multiplicities after sorting','testing','lists','Complete preserves_items using collections.Counter so it checks the full multiplicity of values. Print False for [1,4] versus [2,3].',
'from collections import Counter\ndef preserves_items(before, after):\n    return sum(before) == sum(after)\nprint(preserves_items([1, 4], [2, 3]))',
'from collections import Counter\ndef preserves_items(before, after):\n    return Counter(before) == Counter(after)\nprint(preserves_items([1, 4], [2, 3]))',
'assert not preserves_items([1, 4], [2, 3])\nassert preserves_items([2, 1, 2], [1, 2, 2])\nassert not preserves_items([1, 1, 2], [1, 2, 2])\nassert preserves_items([], [])','Equal sums can hide different entries or duplicate counts.','Counters compare each value’s multiplicity, while the sum alone cannot distinguish many wrong outputs. This checks preservation, not ordering.','False')
add('Test an isolated copy','testing','lists','Save an independent flat-list backup before calling double_in_place. The comparison should show the input changed; print False.',
'def double_in_place(xs):\n    for i in range(len(xs)):\n        xs[i] *= 2\na = [2, 3]\nbefore = a\ndouble_in_place(a)\nprint(a == before)',
'def double_in_place(xs):\n    for i in range(len(xs)):\n        xs[i] *= 2\na = [2, 3]\nbefore = a.copy()\ndouble_in_place(a)\nprint(a == before)',
'assert before == [2, 3]\nassert a == [4, 6]\nassert before is not a','A second reference to the same list does not preserve the original contents.','The snapshot must be independent for a mutation test to detect a change. A shallow copy is sufficient for these flat numeric entries.','False')
add('Reject nonfinite numeric strings','validation','strings','parse should convert numeric text, then reject nonfinite results by raising ValueError. Keep the handler; print Rejected for nan.',
'import math\ndef parse(raw):\n    value = float(raw)\n    return value\ntry:\n    print(parse("nan"))\nexcept ValueError:\n    print("Rejected")',
'import math\ndef parse(raw):\n    value = float(raw)\n    if not math.isfinite(value):\n        raise ValueError("finite reading required")\n    return value\ntry:\n    print(parse("nan"))\nexcept ValueError:\n    print("Rejected")',
'assert parse(" 2.5 ") == 2.5\nassert parse("-3") == -3\nfor raw in ["nan", "inf", "-inf", "bad"]:\n    try:\n        parse(raw)\n    except ValueError:\n        pass\n    else:\n        raise AssertionError("invalid input accepted")','float conversion can succeed for NaN and infinity.','Successful parsing is only the first check. isfinite enforces the stated domain and rejects nonfinite numbers before they enter calculations.','Rejected')
add('Keep Boolean flags out of integer counts','validation','types','valid_count must accept only exact Python int values >= 0, rejecting bool and float. Use type(x) is int. Print False for True.',
'def valid_count(x):\n    return isinstance(x, int) and x >= 0\nprint(valid_count(True))',
'def valid_count(x):\n    return type(x) is int and x >= 0\nprint(valid_count(True))',
'assert valid_count(0)\nassert valid_count(3)\nassert not valid_count(True)\nassert not valid_count(False)\nassert not valid_count(2.0)\nassert not valid_count(-1)','bool is a subclass of int, but the stated contract excludes flags.','The exact-type check implements this deliberately narrow count policy. isinstance alone would accept True and False.','False')
add('Validate window width on both sides','validation','lists','For nonempty xs and integer w, raise ValueError unless 1 <= w <= len(xs). Keep the displayed call with w=0 and print Invalid width.',
'def means(xs, w):\n    if w > len(xs):\n        raise ValueError("width")\n    return [sum(xs[i:i+w])/w for i in range(len(xs)-w+1)]\ntry:\n    print(means([2, 4], 0))\nexcept ValueError:\n    print("Invalid width")',
'def means(xs, w):\n    if not 1 <= w <= len(xs):\n        raise ValueError("width")\n    return [sum(xs[i:i+w])/w for i in range(len(xs)-w+1)]\ntry:\n    print(means([2, 4], 0))\nexcept ValueError:\n    print("Invalid width")',
'assert means([2, 4], 1) == [2.0, 4.0]\nassert means([2, 4], 2) == [3.0]\nfor width in [-1, 0, 3]:\n    try:\n        means([2, 4], width)\n    except ValueError:\n        pass\n    else:\n        raise AssertionError("invalid width accepted")','Zero and negative widths are invalid even when they are smaller than the record length.','Checking the full closed interval prevents zero division and meaningless negative-width slices, while preserving both valid boundaries.','Invalid width','ZeroDivisionError')
add('Handle an empty feasible set','validation','lists','cheapest returns the name of the cheapest feasible record, or None if none is feasible. Print None for the supplied records.',
'def cheapest(rows):\n    valid = [r for r in rows if r[2]]\n    return min(valid, key=lambda r:r[1])[0]\nprint(cheapest([("A", 5, False), ("B", 8, False)]))',
'def cheapest(rows):\n    valid = [r for r in rows if r[2]]\n    if not valid:\n        return None\n    return min(valid, key=lambda r:r[1])[0]\nprint(cheapest([("A", 5, False), ("B", 8, False)]))',
'assert cheapest([]) is None\nassert cheapest([("A", 5, False)]) is None\nassert cheapest([("A", 5, False), ("B", 8, True), ("C", 7, True)]) == "C"','min requires at least one candidate unless an explicit default policy is used.','The task defines None for no feasible design. Check the retained set before selecting its minimum.','None','ValueError')
add('Require strictly increasing timestamps','validation','lists','valid_times should accept a nonempty list only when every timestamp is strictly greater than its predecessor. Duplicates are invalid; print False.',
'def valid_times(times):\n    return bool(times) and all(times[i] >= times[i-1] for i in range(1, len(times)))\nprint(valid_times([0, 1, 1, 2]))',
'def valid_times(times):\n    return bool(times) and all(times[i] > times[i-1] for i in range(1, len(times)))\nprint(valid_times([0, 1, 1, 2]))',
'assert valid_times([0])\nassert valid_times([0, 1, 2])\nassert not valid_times([])\nassert not valid_times([0, 1, 1])\nassert not valid_times([1, 0])','Nondecreasing order permits duplicates; strict increase does not.','Use > for every adjacent pair. The explicit nonempty policy remains in place, and a singleton satisfies the pairwise rule.','False')
add('Initialize inherited state','objects','objects','Call the base initializer from Calibrated.__init__, then store gain. Print 12 for value 4 and gain 3.',
'class Sensor:\n    def __init__(self, value):\n        self.value = value\nclass Calibrated(Sensor):\n    def __init__(self, value, gain):\n        self.gain = gain\n    def read(self):\n        return self.value * self.gain\nprint(Calibrated(4, 3).read())',
'class Sensor:\n    def __init__(self, value):\n        self.value = value\nclass Calibrated(Sensor):\n    def __init__(self, value, gain):\n        super().__init__(value)\n        self.gain = gain\n    def read(self):\n        return self.value * self.gain\nprint(Calibrated(4, 3).read())',
's = Calibrated(-2, 5)\nassert s.value == -2\nassert s.read() == -10\nassert isinstance(s, Sensor)','An overridden initializer does not call its base automatically.','Explicit delegation establishes the inherited value attribute before read uses it. The signed example checks the declared generic-reading behavior.','12','AttributeError')
add('Dispatch through the receiving instance','objects','objects','report must use the receiver’s read method so subclasses can override it. Print 9 from the supplied Scaled object.',
'class Sensor:\n    def read(self):\n        return 3\n    def report(self):\n        return Sensor.read(self)\nclass Scaled(Sensor):\n    def read(self):\n        return 9\nprint(Scaled().report())',
'class Sensor:\n    def read(self):\n        return 3\n    def report(self):\n        return self.read()\nclass Scaled(Sensor):\n    def read(self):\n        return 9\nprint(Scaled().report())',
'assert Sensor().report() == 3\nassert Scaled().report() == 9','Calling the base implementation by class name bypasses the override.','self.read() uses dynamic method lookup and preserves the polymorphic interface.','9',level='Challenge')
add('Reject a setter update without corrupting state','objects','objects','Validate a new nonnegative level before assigning it. The invalid update must raise ValueError and preserve the previous level 4; print 4.',
'class Tank:\n    def __init__(self):\n        self.level = 4\n    def set_level(self, x):\n        self.level = x\n        if x < 0:\n            raise ValueError("negative")\nt = Tank()\ntry:\n    t.set_level(-1)\nexcept ValueError:\n    pass\nprint(t.level)',
'class Tank:\n    def __init__(self):\n        self.level = 4\n    def set_level(self, x):\n        if x < 0:\n            raise ValueError("negative")\n        self.level = x\nt = Tank()\ntry:\n    t.set_level(-1)\nexcept ValueError:\n    pass\nprint(t.level)',
'assert t.level == 4\nt.set_level(0)\nassert t.level == 0\nt.set_level(7)\nassert t.level == 7','A rejected operation should not first commit the invalid state.','Check the precondition before mutation. This failure policy leaves prior valid state available after the caller catches the exception.','4')
add('Invalidate a cached result after a change','objects','objects','The cached mean must reflect the latest history. Clear the cache in add; print 3.0 followed by 4.0.',
'class History:\n    def __init__(self):\n        self.values = [2, 4]\n        self._mean = None\n    def mean(self):\n        if self._mean is None:\n            self._mean = sum(self.values)/len(self.values)\n        return self._mean\n    def add(self, x):\n        self.values.append(x)\nh = History()\nprint(h.mean())\nh.add(6)\nprint(h.mean())',
'class History:\n    def __init__(self):\n        self.values = [2, 4]\n        self._mean = None\n    def mean(self):\n        if self._mean is None:\n            self._mean = sum(self.values)/len(self.values)\n        return self._mean\n    def add(self, x):\n        self.values.append(x)\n        self._mean = None\nh = History()\nprint(h.mean())\nh.add(6)\nprint(h.mean())',
'assert h.mean() == 4\nh.add(8)\nassert h.mean() == 5\nassert h.mean() == 5','A cached value becomes stale when data affecting it change.','Invalidate after each supported mutation so the next query recomputes. This class’s exercise contract uses add for updates; direct external list mutation is outside it.','3.0\n4.0',level='Challenge')
add('Return a protected history snapshot','objects','objects','values() must return a flat-list copy so callers cannot append into the private history. Keep external.append(9); print the unchanged [2, 4].',
'class SensorLog:\n    def __init__(self):\n        self._values = [2, 4]\n    def values(self):\n        return self._values\ns = SensorLog()\nexternal = s.values()\nexternal.append(9)\nprint(s.values())',
'class SensorLog:\n    def __init__(self):\n        self._values = [2, 4]\n    def values(self):\n        return self._values.copy()\ns = SensorLog()\nexternal = s.values()\nexternal.append(9)\nprint(s.values())',
'assert s.values() == [2, 4]\nassert external == [2, 4, 9]\nassert s.values() is not s.values()','Returning the original list exposes the same storage used by the object.','The copied outer list protects this flat numeric history from caller-side append operations. A nested mutable history would require a deeper policy.','[2, 4]')
assert len(cases)==40
assert collections.Counter(c['category'] for c in cases)=={k:5 for k in ['syntax','runtime','logic','units','state','testing','validation','objects']}
export="const fs=require('fs'),vm=require('vm'),c=vm.createContext({});vm.runInContext(fs.readFileSync('dist/debugging-bank.js','utf8')+';globalThis.cases=DEBUG_CASES;',c);console.log(JSON.stringify(c.cases.filter(x=>!x.id.startsWith('debug-new-'))));"
base=json.loads(subprocess.check_output(['node','-e',export],cwd=ROOT))
assert len(base)==60
all_cases=base+cases
assert len({c['id'] for c in all_cases})==100
assert len({c['buggy'] for c in all_cases})==100
(ROOT/'dist/debugging-bank.js').write_text('/* Earlier adapted course practice plus forty original extension exercises. */\nconst DEBUG_CASES = '+json.dumps(all_cases,ensure_ascii=False,indent=2)+';\n',encoding='utf8')
print('Built 100 debugging exercises. All 40 new repairs and their faulty behaviors verified; five additions per category.')
