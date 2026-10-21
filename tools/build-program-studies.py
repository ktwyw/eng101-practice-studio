"""Author 128 original, independently checked course studies alongside the earlier 72."""
import ast
import collections
import contextlib
import io
import json
import pathlib
import subprocess
import textwrap

ROOT = pathlib.Path(__file__).resolve().parents[1]
studies = []


def add(week, topic, name, code, output, explanation, try_it, tests=''):
    code = textwrap.dedent(code).strip()
    tests = textwrap.dedent(tests).strip()
    number = sum(p['week'] == week for p in studies) + 1
    studies.append(dict(
        id=f'study-w{week:02}-{number:02}', bank='course-new', week=week,
        topic=topic, name=name, code=code, output=output,
        explanation=explanation, tryIt=try_it, tests=tests,
        source=f'Week {week} · Original program study', questionIds=[],
        requirements=[],
        note='Original course practice. Run this complete Python 3 program independently. Engineering values are illustrative classroom inputs.',
    ))


# Six Week 1 studies: conversions, expressions and communicating results.
add(1, 'engineering', 'Celsius and kelvin with explicit units', '''
temperature_c = 25.0
temperature_k = temperature_c + 273.15
print(f'Temperature: {temperature_c:.1f} C')
print(f'Absolute temperature: {temperature_k:.2f} K')
print(f'Recovered temperature: {temperature_k - 273.15:.1f} C')
''', 'Temperature: 25.0 C\nAbsolute temperature: 298.15 K\nRecovered temperature: 25.0 C',
'An absolute Celsius temperature needs the 273.15 offset when converted to kelvin. Subtracting the offset recovers the original temperature. Formatting controls the displayed decimal places without changing the stored numbers.',
'Change the starting temperature to -10.0 C. Predict all three lines before running the program.')

add(1, 'engineering', 'Electricity use and a displayed bill', '''
power_w = 1200
duration_h = 3
price_per_kwh = 0.15
energy_kwh = power_w / 1000 * duration_h
cost = energy_kwh * price_per_kwh
print(f'Energy: {energy_kwh:.2f} kWh')
print(f'Cost: {cost:.2f} currency units')
''', 'Energy: 3.60 kWh\nCost: 0.54 currency units',
'Dividing watts by 1000 gives kilowatts; multiplying by hours gives kilowatt-hours. The unit price applies to that energy. The two decimal places belong to the presentation, rather than an early rounding of the calculation.',
'Double the duration while keeping the power and price fixed. Explain which results must double.')

add(1, 'arithmetic', 'Splitting elapsed seconds into a clock display', '''
elapsed_s = 3671
hours, remainder = divmod(elapsed_s, 3600)
minutes, seconds = divmod(remainder, 60)
print(hours, minutes, seconds)
print(f'{hours:02}:{minutes:02}:{seconds:02}')
print(hours * 3600 + minutes * 60 + seconds == elapsed_s)
''', '1 1 11\n01:01:11\nTrue',
'Each divmod call returns an integer quotient and a remainder. The first removes complete hours and the second removes complete minutes from the remainder. Reconstructing the original total checks that no seconds were lost.',
'Try 3599, 3600 and 3601 seconds and predict the boundary behavior.')

add(1, 'types', 'A numeric value and its formatted label', '''
raw_voltage = ' 12.50 '
voltage_v = float(raw_voltage)
label = f'Voltage: {voltage_v:.2f} V'
print(voltage_v, type(voltage_v).__name__)
print(label)
print(type(label).__name__)
''', '12.5 float\nVoltage: 12.50 V\nstr',
'float accepts the surrounding whitespace and converts the numeric text. A formatted string is a separate text value: it can show two decimals and a unit while the stored voltage remains a float.',
'Use raw_voltage = "003.00" and distinguish the numeric value from the original characters and the formatted label.')

add(1, 'engineering', 'Current and power from a resistor model', '''
voltage_v = 12.0
resistance_ohm = 6.0
current_a = voltage_v / resistance_ohm
power_w = voltage_v * current_a
alternative_w = current_a ** 2 * resistance_ohm
print(f'Current: {current_a:.1f} A')
print(f'Power: {power_w:.1f} W')
print(power_w == alternative_w)
''', 'Current: 2.0 A\nPower: 24.0 W\nTrue',
'For this positive-resistance classroom model, I = V/R and P = VI. Substituting V = IR gives the second expression I squared times R. The selected values are exactly representable here, so the two computed powers compare equal.',
'Double the voltage with resistance fixed. Predict the factors by which current and power change.')

add(1, 'arithmetic', 'Checking a two-component mass balance', '''
mass_a_g = 12
mass_b_g = 8
total_g = mass_a_g + mass_b_g
fraction_a = mass_a_g / total_g
fraction_b = mass_b_g / total_g
print(f'A: {100 * fraction_a:.1f}%')
print(f'B: {100 * fraction_b:.1f}%')
print(f'Total: {total_g} g')
print(f'Fraction sum: {fraction_a + fraction_b:.1f}')
''', 'A: 60.0%\nB: 40.0%\nTotal: 20 g\nFraction sum: 1.0',
'Both masses use the same unit and their positive total is the denominator for each mass fraction. Multiplication by 100 converts a fraction to a percentage. The fraction sum is a useful balance check, separate from whether the mixture model is physically appropriate.',
'Swap the component masses, then scale both by ten. Explain what changes and what stays the same.')

# Four Week 2 studies: branch order, state and loop progress.
add(2, 'decisions', 'A controller with two switching thresholds', '''
on = False
for temperature in [19, 22, 21, 18, 20]:
    if temperature >= 22:
        on = True
    elif temperature <= 19:
        on = False
    print(temperature, 'ON' if on else 'OFF')
''', '19 OFF\n22 ON\n21 ON\n18 OFF\n20 OFF',
'The controller remembers its previous state between the two thresholds. A reading of 21 leaves it on after 22, whereas a reading of 20 leaves it off after 18. This is a classroom illustration of hysteresis, not a proposed equipment limit.',
'Insert repeated readings of 20 and 21 after both an ON and an OFF state. Predict why equal inputs can retain different states.')

add(2, 'for', 'A small multiplication table with a row accumulator', '''
for row in range(1, 4):
    line = ''
    for column in range(1, 4):
        line += f'{row * column:3}'
    print(line)
''', '  1  2  3\n  2  4  6\n  3  6  9',
'The outer loop chooses a row and resets its text accumulator once per row. The inner loop appends three fields of width three. Leading spaces are part of the printed layout and are significant in the output prediction.',
'Move line = "" before the outer loop. Predict how the second and third printed lines would accumulate earlier rows.')

add(2, 'while', 'A sentinel that is read but not accumulated', '''
measurements = [4, 7, -1, 12]
position = 0
total = 0
while position < len(measurements):
    value = measurements[position]
    position += 1
    if value == -1:
        break
    total += value
print('Consumed:', position)
print('Total:', total)
print('Unread:', measurements[position:])
''', 'Consumed: 3\nTotal: 11\nUnread: [12]',
'The position advances when a value is read, including the sentinel. The break occurs before accumulation, so -1 is consumed but not added. The final slice starts after that sentinel and preserves the unread suffix.',
'Put the sentinel first, put it last, then remove it. Predict the consumed count and unread suffix in each case.')

add(2, 'for', 'Counting only complete pairs in a nested search', '''
pairs = 0
for left in range(4):
    for right in range(left + 1, 4):
        if left + right == 3:
            print(left, right)
            pairs += 1
print('Matches:', pairs)
''', '0 3\n1 2\nMatches: 2',
'Starting right at left + 1 excludes self-pairs and reversed duplicates. The two retained pairs have sum three. This loop enumerates the candidate domain before applying the matching condition.',
'Start the inner loop at zero instead. Predict which self-pairs or reversed pairs become possible and how the count changes.')

# Five Week 3 studies: text structure and small searches.
add(3, 'strings', 'Separating a sensor label from its reading', '''
record = '  pump-07 : 12.5  '
label, separator, raw_value = record.partition(':')
print(label.strip().upper())
print(separator == ':')
print(float(raw_value))
print(record.count(':'))
''', 'PUMP-07\nTrue\n12.5\n1',
'partition divides at the first colon and returns three strings. Stripping and uppercasing normalize the label, while numeric conversion accepts whitespace around the reading. The count separately checks the number of delimiters in this supplied record.',
'Try a record without a colon. Inspect the three partition results and decide which validation is needed before float conversion.')

add(3, 'strings', 'A weighted check digit for a serial number', '''
serial = '2041'
weighted_total = 0
for position, digit in enumerate(serial, start=1):
    weighted_total += position * int(digit)
check_digit = weighted_total % 10
print('Weighted total:', weighted_total)
print('Identifier:', serial + '-' + str(check_digit))
''', 'Weighted total: 18\nIdentifier: 2041-8',
'The character positions are weighted one through four: 1*2 + 2*0 + 3*4 + 4*1 = 18. Remainder modulo ten supplies the single check digit. This illustrative checksum does not detect every possible input error.',
'Exchange two neighboring unequal digits and check whether this particular checksum changes. Avoid assuming that one example proves universal error detection.')

add(3, 'strings', 'Preserving empty fields when splitting records', '''
record = 'S1,,23.5,'
fields = record.split(',')
print(fields)
print('Fields:', len(fields))
for position, field in enumerate(fields):
    if field == '':
        print('Missing field:', position)
''', "['S1', '', '23.5', '']\nFields: 4\nMissing field: 1\nMissing field: 3",
'An explicit comma separator preserves empty fields between consecutive delimiters and after a trailing delimiter. Their positions matter: removing empty strings would shift the schema and attach later values to the wrong column.',
'Compare split(",") with split() on this record. Then add a schema check requiring exactly four fields.')

add(3, 'engineering', 'Enumerating a small feasible design grid', '''
best = None
for width in range(1, 5):
    for height in range(1, 5):
        area = width * height
        cost = 3 * width + 2 * height
        if area >= 8 and (best is None or cost < best[0]):
            best = (cost, width, height)
print('Cost, width, height:', best)
''', 'Cost, width, height: (14, 2, 4)',
'The search considers every integer width and height from one to four. Only candidates meeting the area constraint can replace best. The cheapest retained candidate has width two, height four and cost fourteen under the stated illustrative cost formula.',
'Increase the minimum area to 17. Explain why best remains None and define what a caller should do with that result.')

add(3, 'strings', 'An explicit decimal-comma input policy', '''
for raw in ['1,25', '2.50', '1,234.5']:
    if ',' in raw and '.' in raw:
        print(raw, 'ambiguous')
    elif raw.count(',') <= 1:
        print(raw, float(raw.replace(',', '.')))
''', '1,25 1.25\n2.50 2.5\n1,234.5 ambiguous',
'This small fixture treats one comma as a decimal separator and rejects text containing both separator styles. It does not implement thousands grouping or a general numeric parser. The policy is explicit because replacing punctuation without a convention can change a value.',
'Add a string containing two commas and explain why the current branches do not report it. Extend the policy to give every input either a value or an explicit rejection.')

# Six Week 4 studies: contracts, decomposition and function composition.
add(4, 'functions', 'An annulus calculation with a helper function', '''
import math

def annulus_area(outer, inner):
    return math.pi * (outer ** 2 - inner ** 2)

outer_m, inner_m = 3.0, 1.0
area_m2 = annulus_area(outer_m, inner_m)
print(f'Area: {area_m2:.3f} m^2')
print(annulus_area(2.0, 2.0) == 0.0)
''', 'Area: 25.133 m^2\nTrue',
'Subtracting the inner disk area from the outer disk area gives the annulus area. The function assumes finite radii satisfying 0 <= inner <= outer, in the same length unit. Equal radii produce zero area, providing a useful boundary fixture.',
'Add validation for the radius assumptions and test a negative inner radius and an outer radius smaller than the inner one.',
'''assert math.isclose(annulus_area(3, 1), 8 * math.pi)
assert annulus_area(0, 0) == 0''')

add(4, 'functions', 'A keyword argument that controls presentation', '''
def mean_text(values, *, decimals=1):
    average = sum(values) / len(values)
    return f'{average:.{decimals}f}'

readings = [2, 3, 6]
print(mean_text(readings))
print(mean_text(readings, decimals=3))
print(readings)
''', '3.7\n3.667\n[2, 3, 6]',
'The average is calculated before conversion to text. The keyword-only decimals argument changes the displayed precision, not the input list. The function assumes a nonempty numeric list and a supported nonnegative display precision.',
'Compare the returned strings with the unformatted numeric mean. Add an explicit contract for empty input.',
'''assert mean_text([4], decimals=2) == '4.00'
assert readings == [2, 3, 6]''')

add(4, 'functions', 'Returning a compact measurement summary', '''
def describe(values):
    return min(values), max(values), max(values) - min(values)

low, high, span = describe([8, 3, 11, 5])
print('Low:', low)
print('High:', high)
print('Span:', span)
''', 'Low: 3\nHigh: 11\nSpan: 8',
'The function returns three related results as a tuple. The caller unpacks them into names rather than trying to recover numbers from printed text. Its nonempty-input assumption is necessary because min and max have no default here.',
'Use a one-item list and a list with all equal entries. Predict the span and add regression assertions for both cases.',
'''assert describe([4]) == (4, 4, 0)
assert describe([-2, 3]) == (-2, 3, 5)''')

add(4, 'functions', 'Reusing a transformation procedure', '''
def transform(values, operation):
    return [operation(value) for value in values]

def to_millimetres(metres):
    return metres * 1000

lengths = [0.1, 0.25, 0.5]
print(transform(lengths, to_millimetres))
print(transform(lengths, lambda value: value ** 2))
print(lengths)
''', '[100.0, 250.0, 500.0]\n[0.010000000000000002, 0.0625, 0.25]\n[0.1, 0.25, 0.5]',
'transform accepts an operation instead of hard-coding one calculation. Each call builds a new list and leaves the supplied list unchanged. The long first squared value reveals binary floating-point representation; the calculation has not formatted or rounded its output.',
'Replace the lambda with a named function. Then format the squared values for display while retaining their unrounded numeric values.',
'''assert transform([], to_millimetres) == []
assert transform([2, 3], lambda value: value + 1) == [3, 4]''')

add(4, 'functions', 'A default captures a value at definition time', '''
scale = 2

def convert(value, factor=scale):
    return value * factor

scale = 5
print(convert(3))
print(convert(3, scale))
print(scale)
''', '6\n15\n5',
'The default expression is evaluated when the function is defined, while scale is two. Rebinding the outer name later does not replace that saved default. Passing scale explicitly uses its current value of five.',
'Move scale = 5 before the function definition, then predict both calls. Contrast this with reading a global inside the function body.',
'''assert convert(0) == 0
assert convert(3, factor=4) == 12''')

add(4, 'engineering', 'Composing geometry and mass calculations', '''
import math

def cylinder_volume(radius_m, length_m):
    return math.pi * radius_m ** 2 * length_m

def mass_kg(volume_m3, density_kg_m3):
    return volume_m3 * density_kg_m3

volume = cylinder_volume(0.01, 0.5)
mass = mass_kg(volume, 2700)
print(f'Volume: {volume:.6f} m^3')
print(f'Mass: {mass:.3f} kg')
''', 'Volume: 0.000157 m^3\nMass: 0.424 kg',
'Geometry and the density relation have separate interfaces. Radius and length are in metres, so volume is in cubic metres and multiplication by kilograms per cubic metre gives kilograms. The selected uniform-density model and density value are illustrative.',
'Double only the radius, then double only the length. Predict the different scaling factors before running the calculation.',
'''assert cylinder_volume(0, 1) == 0
assert mass_kg(0.002, 1000) == 2''')

# Five Week 5 studies: ordered records, copying and sequence operations.
add(5, 'lists', 'Sorting complete records with two keys', '''
records = [('B', 2), ('A', 2), ('C', 1), ('D', 2)]
ordered = sorted(records, key=lambda row: (row[1], row[0]))
print(ordered)
print(records)
''', "[('C', 1), ('A', 2), ('B', 2), ('D', 2)]\n[('B', 2), ('A', 2), ('C', 1), ('D', 2)]",
'The tuple key first orders by the second field and breaks ties using the label. Sorting whole records preserves each label-value association. sorted creates a new outer list and leaves the original order available for comparison.',
'Reverse the order of the two key fields and predict which field becomes the primary ordering criterion.',
'''assert ordered[0] == ('C', 1)
assert records[0] == ('B', 2)''')

add(5, 'data', 'Pairing unequal columns with an explicit missing marker', '''
from itertools import zip_longest

times = [0, 1, 2]
values = [12, 15]
pairs = list(zip_longest(times, values, fillvalue=None))
print(pairs)
print([time for time, value in pairs if value is None])
print(list(zip(times, values)))
''', '[(0, 12), (1, 15), (2, None)]\n[2]\n[(0, 12), (1, 15)]',
'zip_longest retains the unmatched timestamp and marks its missing reading explicitly. Ordinary zip stops at the shorter input, omitting that final record. None is a policy choice here and must be distinguished from a legitimate numeric zero.',
'Add a reading equal to zero and show why filtering by value is None differs from filtering by not value.',
'''assert pairs[-1] == (2, None)
assert list(zip_longest([], [], fillvalue=None)) == []''')

add(5, 'lists', 'Copying each row of a measurement matrix', '''
original = [[1, 2], [3, 4]]
outer_copy = original.copy()
row_copies = [row.copy() for row in original]
outer_copy[0][1] = 9
row_copies[1][0] = 8
print(original)
print(outer_copy)
print(row_copies)
''', '[[1, 9], [3, 4]]\n[[1, 9], [3, 4]]\n[[1, 2], [8, 4]]',
'The first copy duplicates only the outer list and still shares both inner rows. The second expression copies each row before either edit, so the later element replacements affect a separate two-level structure. Deeper nesting would need a correspondingly deeper copying policy.',
'Append a new row to outer_copy and distinguish that outer-container change from an edit to a shared inner row.',
'''assert outer_copy is not original
assert outer_copy[0] is original[0]
assert row_copies[0] is not original[0]''')

add(5, 'lists', 'Replacing a service-log interval', '''
events = ['start', 'warm', 'check', 'hold', 'stop']
removed = events[1:4]
events[1:4] = ['ready', 'run']
events[2:2] = ['sample']
print('Removed:', removed)
print('Current:', events)
print('Count:', len(events))
''', "Removed: ['warm', 'check', 'hold']\nCurrent: ['start', 'ready', 'sample', 'run', 'stop']\nCount: 5",
'The first slice saves the three events before replacement. Assigning two entries to that slice shortens the log by one. Assigning to an empty slice then inserts sample without removing an existing entry, restoring the length to five.',
'Replace the empty slice events[2:2] with events[2:3] and predict both the resulting log and its length.',
'''assert removed == ['warm', 'check', 'hold']
assert events[-1] == 'stop' ''')

add(5, 'lists', 'Recording consecutive state runs', '''
states = ['idle', 'idle', 'run', 'run', 'run', 'idle']
runs = []
for state in states:
    if runs and runs[-1][0] == state:
        label, count = runs[-1]
        runs[-1] = (label, count + 1)
    else:
        runs.append((state, 1))
print(runs)
print(sum(count for label, count in runs))
''', "[('idle', 2), ('run', 3), ('idle', 1)]\n6",
'Each entry in runs describes one consecutive block, rather than the total frequency of a label throughout the list. The final idle state starts a new block. Summing run lengths reconstructs the number of original observations.',
'Compare these runs with a dictionary of total label frequencies. Explain which representation preserves the order of operating phases.',
'''assert runs[0] == ('idle', 2)
assert sum(count for _, count in runs) == len(states)''')

# Two Week 6 studies complement the existing 28 studies for that week.
add(6, 'recursion', 'Finding leaves with their nested index paths', '''
def leaves(values, path=()):
    result = []
    for index, value in enumerate(values):
        current = path + (index,)
        if isinstance(value, list):
            result.extend(leaves(value, current))
        else:
            result.append((current, value))
    return result

print(leaves([4, [7, [9]], []]))
''', '[((0,), 4), ((1, 0), 7), ((1, 1, 0), 9)]',
'Each recursive call extends an immutable tuple describing the path to the current nested list. Empty lists contribute no leaves. Non-list values are returned with their complete index paths, so the result preserves both values and their locations.',
'Add a list containing two leaves at the deepest level. Predict their paths and check that the original nested list remains unchanged.',
'''assert leaves([]) == []
assert leaves([[2]]) == [((0, 0), 2)]''')

add(6, 'dicts', 'Removing obsolete keys through a snapshot', '''
stock = {'A': 0, 'B': 3, 'C': 0, 'D': 2}
removed = []
for key in list(stock):
    if stock[key] == 0:
        removed.append(key)
        del stock[key]
print('Removed:', removed)
print('Remaining:', stock)
print('Total:', sum(stock.values()))
''', "Removed: ['A', 'C']\nRemaining: {'B': 3, 'D': 2}\nTotal: 5",
'list(stock) makes a snapshot of keys before deletions begin. The loop therefore does not change the size of the dictionary iterator it is consuming. Remaining keys retain their insertion order, and zero-stock entries are removed under this explicit policy.',
'Try iterating directly over stock while deleting. Explain the resulting error and compare a dictionary-comprehension solution.',
'''assert stock == {'B': 3, 'D': 2}
assert removed == ['A', 'C']''')

# Twelve Week 7 studies: tests, failures and independently stated contracts.
add(7, 'testing', 'Testing an empty-input contract', '''
def mean(values):
    if not values:
        raise ValueError('at least one value required')
    return sum(values) / len(values)

print(mean([2, 4, 6]))
try:
    mean([])
except ValueError as error:
    print(type(error).__name__, str(error))
''', '4.0\nValueError at least one value required',
'The empty-input behavior is part of the interface, not an accidental division-by-zero failure. The caller checks the documented exception separately from the ordinary numeric result. A one-item fixture tests the smallest valid collection.',
'Add a test for one negative value and a test that specifically fails if an empty list returns a plausible number.',
'''assert mean([5]) == 5.0
assert mean([-2, 2]) == 0.0''')

add(7, 'testing', 'Relative and absolute tolerances near zero', '''
import math

print(math.isclose(1e-12, 0.0, rel_tol=1e-6))
print(math.isclose(1e-12, 0.0, rel_tol=1e-6, abs_tol=1e-11))
print(math.isclose(1000.0001, 1000.0, rel_tol=1e-6))
''', 'False\nTrue\nTrue',
'A relative tolerance scales with the compared magnitudes, so it gives no useful nonzero allowance against exact zero at these settings. An absolute tolerance supplies a scale in the result units. The final comparison illustrates a small relative discrepancy at a much larger magnitude.',
'Choose an absolute tolerance for a stated measurement unit and test values just below and above it.',
'''assert not math.isclose(1e-8, 0, abs_tol=1e-11)
assert math.isclose(-1e-12, 0, abs_tol=1e-11)''')

add(7, 'testing', 'A boundary fixture table for classification', '''
def band(value):
    if value < 10:
        return 'low'
    if value <= 20:
        return 'middle'
    return 'high'

fixtures = [(9, 'low'), (10, 'middle'), (20, 'middle'), (21, 'high')]
for value, expected in fixtures:
    actual = band(value)
    print(value, actual, actual == expected)
''', '9 low True\n10 middle True\n20 middle True\n21 high True',
'The fixtures cross both boundaries and include their exact endpoints. Independent expected labels distinguish < from <= at ten and twenty. Passing these cases provides evidence for these boundaries; it is not a proof about every possible input type.',
'Change the second comparison to value < 20 and identify exactly which supplied fixture exposes the change.',
'''assert all(band(x) == expected for x, expected in fixtures)''')

add(7, 'testing', 'A regression for the final adjacent pair', '''
def strictly_increasing(values):
    return all(values[i] < values[i + 1] for i in range(len(values) - 1))

cases = [[1, 2, 3], [1, 2, 2], [5], []]
for case in cases:
    print(case, strictly_increasing(case))
''', '[1, 2, 3] True\n[1, 2, 2] False\n[5] True\n[] True',
'Every adjacent pair must satisfy a strict comparison. The final equal pair is a targeted regression for an off-by-one loop bound. The declared pairwise policy makes empty and one-item lists True because there are no counterexamples for all to reject.',
'Change the policy to require at least one element. Update both the implementation and the expected empty-list result.',
'''assert strictly_increasing([1, 2])
assert not strictly_increasing([2, 1])
assert not strictly_increasing([1, 1])''')

add(7, 'testing', 'Ordered output is not enough for a sorting test', '''
from collections import Counter

original = [3, 1, 3, 2]
candidate = [1, 2, 3]
ordered = all(candidate[i] <= candidate[i + 1] for i in range(len(candidate) - 1))
same_entries = Counter(candidate) == Counter(original)
print('Ordered:', ordered)
print('Same entries:', same_entries)
print('Valid sort:', ordered and same_entries)
''', 'Ordered: True\nSame entries: False\nValid sort: False',
'The candidate is ordered but has lost one occurrence of three. A Counter comparison checks multiplicities as well as values. This separates the ordering property from the requirement to preserve every input entry.',
'Construct a wrong candidate with the same sum as the original. Show why checking the sum alone also fails to establish a correct sort.',
'''assert Counter(sorted(original)) == Counter(original)
assert sum([0, 2, 3, 4]) == sum(original)''')

add(7, 'testing', 'A metamorphic check for a sum', '''
def total(values):
    answer = 0
    for value in values:
        answer += value
    return answer

data = [2, -1, 5]
scaled = [3 * value for value in data]
shifted = [value + 4 for value in data]
print(total(data))
print(total(scaled) == 3 * total(data))
print(total(shifted) == total(data) + 4 * len(data))
''', '6\nTrue\nTrue',
'The known sum six gives an independent anchor. Scaling every input scales the sum, and adding four to each of three entries adds twelve to it. These relationships supplement known-result tests; a defective function can satisfy some relationships and still be wrong.',
'Try a deliberately wrong constant-zero implementation. Identify which checks detect it and which scaling relation it misleadingly satisfies.',
'''assert total([]) == 0
assert total([7]) == 7
assert total(data) == 6''')

add(7, 'testing', 'Separating conversion from a finite-value policy', '''
import math

def parse_length(raw):
    value = float(raw)
    if not math.isfinite(value) or value < 0:
        raise ValueError('finite nonnegative length required')
    return value

for raw in [' 2.5 ', '-1', 'nan', 'inf', 'bad']:
    try:
        print(raw.strip(), 'accepted', parse_length(raw))
    except ValueError:
        print(raw.strip(), 'rejected')
''', '2.5 accepted 2.5\n-1 rejected\nnan rejected\ninf rejected\nbad rejected',
'Some text fails float conversion, while other text converts successfully to a value outside the declared domain. The explicit isfinite check rejects NaN and infinity before use. Nonnegative alone is insufficient because NaN comparisons do not behave like ordinary ordered real numbers.',
'Add zero and negative zero to the fixtures. Decide whether your documented domain should distinguish their signs.',
'''assert parse_length('0') == 0.0
assert parse_length('1e2') == 100.0''')

add(7, 'testing', 'Tracing try, except, else and finally', '''
def trace(denominator):
    events = []
    try:
        result = 8 / denominator
    except ZeroDivisionError:
        events.append('handled')
    else:
        events.append(f'result={result:.1f}')
    finally:
        events.append('cleanup')
    return events

print(trace(2))
print(trace(0))
''', "['result=4.0', 'cleanup']\n['handled', 'cleanup']",
'The else suite runs only when the try succeeds. The expected division failure instead runs its specific handler. The finally suite runs on both paths before the event list is returned; it also runs during propagation of an exception that this handler does not catch.',
'Pass a string denominator and predict why cleanup runs even though this specific handler does not recover from the TypeError.',
'''assert trace(4) == ['result=2.0', 'cleanup']
assert trace(0)[-1] == 'cleanup' ''')

add(7, 'testing', 'Testing printed output separately from a return value', '''
import contextlib
import io

def report(value):
    print(f'Reading: {value:.1f}')
    return value * 2

buffer = io.StringIO()
with contextlib.redirect_stdout(buffer):
    result = report(3)
print('Captured:', repr(buffer.getvalue()))
print('Returned:', result)
''', "Captured: 'Reading: 3.0\\n'\nReturned: 6",
'redirect_stdout captures the displayed text, including its newline, without changing the function return. The integer result six is available to the caller independently. Separate expectations prevent confusing a printed message with a computation result.',
'Remove the return statement and identify which test should fail while the captured display remains unchanged.',
r'''assert result == 6
assert buffer.getvalue() == 'Reading: 3.0\n' ''')

add(7, 'testing', 'Decimal inputs and an exact monetary expectation', '''
from decimal import Decimal

binary_total = 0.1 + 0.2
decimal_total = Decimal('0.1') + Decimal('0.2')
print(binary_total == 0.3)
print(decimal_total == Decimal('0.3'))
print(f'{decimal_total:.2f}')
''', 'False\nTrue\n0.30',
'Decimal is constructed from decimal strings so those inputs are represented as intended. Binary floats approximate these particular fractions, making their exact-equality result different. Decimal has its own precision and rounding rules; it does not make arbitrary calculations automatically exact.',
'Compare Decimal("0.1") with Decimal(0.1). Explain why converting an existing float retains evidence of its binary approximation.',
'''assert Decimal('0.10') + Decimal('0.20') == Decimal('0.30')''')

add(7, 'testing', 'Checking a numerical derivative against a known result', '''
import math

def derivative(function, x, step):
    return (function(x + step) - function(x - step)) / (2 * step)

estimate = derivative(lambda x: x * x, 3.0, 0.5)
print(f'Estimate: {estimate:.2f}')
print('Matches known derivative:', math.isclose(estimate, 6.0, abs_tol=1e-12))
''', 'Estimate: 6.00\nMatches known derivative: True',
'For the chosen square function the central difference simplifies algebraically to 2*x, providing an independently known result of six at x = 3. The function assumes a positive step and valid evaluations on both sides. This exact fixture does not establish the same accuracy for other functions.',
'Replace the square by a cube and compare steps 0.5 and 0.25 with the analytical derivative at x = 3.',
'''assert derivative(lambda x: 5 * x + 2, 1, 0.5) == 5''')

add(7, 'testing', 'A test that detects unintended mutation', '''
def middle_value(values):
    ordered = sorted(values)
    return ordered[len(ordered) // 2]

data = [7, 1, 5]
before = data.copy()
result = middle_value(data)
print('Middle:', result)
print('Input unchanged:', data == before)
print('Distinct snapshot:', before is not data)
''', 'Middle: 5\nInput unchanged: True\nDistinct snapshot: True',
'The independent copy records the original contents before the call. sorted creates a separate ordering, so the odd-length middle-value query does not mutate its input. A second name pointing to the same list would not be a reliable snapshot for this test.',
'Change the implementation to values.sort(). Predict the returned middle value and the independent mutation-test result.',
'''assert middle_value([4]) == 4
assert data == [7, 1, 5]''')

# Twelve Week 8 studies: instance state and small public interfaces.
add(8, 'objects', 'Independent counters and a reset command', '''
class Counter:
    def __init__(self, start=0):
        self.value = start

    def advance(self, step=1):
        self.value += step

    def reset(self):
        self.value = 0

first, second = Counter(), Counter(10)
first.advance(3)
second.advance()
print(first.value, second.value)
print(first.reset())
print(first.value, second.value)
''', '3 11\nNone\n0 11',
'Each constructor stores a separate instance attribute. Advancing or resetting one object does not change the other. reset changes state and has no explicit return, so its call returns None rather than the new value.',
'Make first and second aliases of one counter and predict how the final line changes.',
'''assert first is not second
assert first.value == 0 and second.value == 11''')

add(8, 'objects', 'A calibrated-reading query derives its value', '''
class Reading:
    def __init__(self, raw, gain, offset):
        self.raw = raw
        self.gain = gain
        self.offset = offset

    def value(self):
        return self.gain * self.raw + self.offset

sensor = Reading(4, 2, 1)
print(sensor.value())
sensor.raw = 6
print(sensor.value())
print(sensor.raw)
''', '9\n13\n6',
'value computes from current state instead of storing a result that can become stale. Changing raw from four to six therefore changes the derived reading from nine to thirteen. The gain and offset belong to this explicitly chosen linear calibration model.',
'Create another Reading with a different offset and compare both objects before and after changing only one raw value.',
'''assert Reading(0, 2, 1).value() == 1
assert sensor.value() == 13''')

add(8, 'objects', 'A running mean with a clear empty policy', '''
class RunningMean:
    def __init__(self):
        self.total = 0
        self.count = 0

    def add(self, value):
        self.total += value
        self.count += 1

    def mean(self):
        if self.count == 0:
            raise ValueError('no readings')
        return self.total / self.count

log = RunningMean()
for value in [2, 4, 9]:
    log.add(value)
print(log.count, log.total)
print(log.mean())
''', '3 15\n5.0',
'The object keeps only the count and total needed for the arithmetic mean. Each add updates both parts of its invariant. An empty object rejects a mean query explicitly, instead of returning a misleading default.',
'Create a second empty object and test its failure behavior, then show that adding zero still increases the first object count.',
'''assert log.count == 3
single = RunningMean()
single.add(7)
assert single.mean() == 7''')

add(8, 'objects', 'A bounded setting validates before updating', '''
class Setting:
    def __init__(self, value):
        self.value = 0
        self.set(value)

    def set(self, value):
        if not 0 <= value <= 100:
            raise ValueError('outside range')
        self.value = value

setting = Setting(40)
try:
    setting.set(120)
except ValueError:
    print('Rejected')
print(setting.value)
setting.set(100)
print(setting.value)
''', 'Rejected\n40\n100',
'The supported setter checks the complete bound before assignment. A rejected update therefore leaves the prior valid state intact, and the inclusive upper endpoint is accepted. Direct public attribute writes are still possible in this introductory design; the setter contract does not enforce privacy.',
'Replace the public value field with a validating property and test that normal attribute assignment follows the same policy.',
'''assert setting.value == 100
setting.set(0)
assert setting.value == 0''')

add(8, 'objects', 'A small data class with a geometry method', '''
from dataclasses import dataclass
import math

@dataclass
class Point:
    x: float
    y: float

    def distance_from_origin(self):
        return math.hypot(self.x, self.y)

point = Point(3, 4)
print(point)
print(point.distance_from_origin())
print(point == Point(3, 4))
''', 'Point(x=3, y=4)\n5.0\nTrue',
'dataclass supplies a useful representation and field-based equality for this plain record. The method uses the current coordinates to compute a distance. The type annotations describe intended fields but do not automatically validate supplied argument values.',
'Change one coordinate after construction and predict both the representation and the distance. Add validation if your application requires only finite real coordinates.',
'''assert Point(0, 0).distance_from_origin() == 0
assert point is not Point(3, 4)''')

add(8, 'objects', 'Shadowing an immutable class setting', '''
class Sensor:
    unit = 'C'

first, second = Sensor(), Sensor()
first.unit = 'K'
print(first.unit, second.unit, Sensor.unit)
Sensor.unit = 'degC'
print(first.unit, second.unit, Sensor.unit)
''', 'K C C\nK degC degC',
'The instance assignment creates first.unit and shadows the class setting for that object. second still finds the unit on the class. Rebinding the class attribute changes that lookup result but does not replace the shadowing instance attribute.',
'Delete first.unit and predict which value its next attribute lookup finds.',
'''assert 'unit' in first.__dict__
assert 'unit' not in second.__dict__''')

add(8, 'objects', 'A FIFO queue behind a small interface', '''
from collections import deque

class SampleQueue:
    def __init__(self):
        self._items = deque()

    def add(self, label):
        self._items.append(label)

    def take(self):
        return self._items.popleft()

    def pending(self):
        return tuple(self._items)

queue = SampleQueue()
queue.add('S1')
queue.add('S2')
print(queue.take())
queue.add('S3')
print(queue.pending())
''', "S1\n('S2', 'S3')",
'The queue removes the earliest-added label and exposes a tuple snapshot for observation. Clients can use add, take and pending without depending on deque storage details. Taking from an empty queue would raise IndexError under this implementation.',
'Specify and test an empty-queue policy, then create two queues and verify that their pending samples remain independent.',
'''assert queue.take() == 'S2'
assert queue.pending() == ('S3',)''')

add(8, 'objects', 'Composition gives a device its own event log', '''
class EventLog:
    def __init__(self):
        self.events = []

    def write(self, text):
        self.events.append(text)

class Device:
    def __init__(self, name):
        self.name = name
        self.log = EventLog()

    def start(self):
        self.log.write(self.name + ': start')

first, second = Device('A'), Device('B')
first.start()
first.start()
second.start()
print(first.log.events)
print(second.log.events)
''', "['A: start', 'A: start']\n['B: start']",
'Each Device creates and contains an EventLog. This has-a relationship uses composition, while each log owns a separate list. Starting one device appends only to the log reached through that receiver.',
'Pass an EventLog into the constructor instead. Compare deliberate shared logging with the current independent-log behavior.',
'''assert first.log is not second.log
assert len(first.log.events) == 2''')

add(8, 'objects', 'Vector addition returns a new object', '''
class Vector:
    def __init__(self, x, y):
        self.x, self.y = x, y

    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

    def __repr__(self):
        return f'Vector({self.x}, {self.y})'

left, right = Vector(1, 2), Vector(3, -1)
result = left + right
print(result)
print(left, right)
print(result is left)
''', 'Vector(4, 1)\nVector(1, 2) Vector(3, -1)\nFalse',
'For two Vector operands, + delegates to __add__ and constructs a new result. Neither input is mutated. The explicit __repr__ avoids a memory-address display, giving a deterministic representation that can be predicted and tested.',
'Add handling for unsupported operand types using NotImplemented, then test the resulting TypeError through the public + operation.',
'''assert (left + right).x == 4
assert left.y == 2 and right.y == -1''')

add(8, 'objects', 'Container methods expose a history consistently', '''
class History:
    def __init__(self, values):
        self._values = list(values)

    def __len__(self):
        return len(self._values)

    def __iter__(self):
        return iter(self._values)

history = History([2, 5, 8])
print(len(history))
print(list(history))
print(sum(history))
''', '3\n[2, 5, 8]\n15',
'len and iteration use the object special methods, allowing ordinary container operations to work with History. The constructor copies the outer input sequence. Iteration observes its entries; it does not make nested mutable entries immutable.',
'Supply an empty history and predict len, list and sum. Add a method for a snapshot if clients should receive a separate container.',
'''assert len(History([])) == 0
assert sum(history) == 15''')

add(8, 'objects', 'Equal records can have different identities', '''
class Tag:
    def __init__(self, text):
        self.text = text

    def __eq__(self, other):
        if not isinstance(other, Tag):
            return NotImplemented
        return self.text == other.text

first, second = Tag('S1'), Tag('S1')
alias = first
print(first == second)
print(first is second)
print(alias is first)
second.text = 'S2'
print(first == second)
''', 'True\nFalse\nTrue\nFalse',
'The equality method compares the supported data field, while is compares object identity. Two separately constructed tags can compare equal. An alias names the same object, and changing second does not mutate first.',
'Change alias.text instead and predict both the value of first.text and the next equality comparison.',
'''assert first.text == 'S1'
assert second.text == 'S2' ''')

add(8, 'objects', 'A named constructor makes conversion explicit', '''
class Temperature:
    def __init__(self, celsius):
        self.celsius = celsius

    @classmethod
    def from_kelvin(cls, kelvin):
        return cls(kelvin - 273.15)

    def text(self):
        return f'{self.celsius:.2f} C'

first = Temperature(25)
second = Temperature.from_kelvin(298.15)
print(first.text())
print(second.text())
print(isinstance(second, Temperature))
''', '25.00 C\n25.00 C\nTrue',
'The regular constructor and named alternative use different input units but store the same Celsius representation for this fixture. cls identifies the receiving class and constructs the result. The example illustrates conversion structure; a production domain contract should also define finite values and physical limits.',
'Add a from_fahrenheit constructor and test the freezing and boiling reference points under a stated pressure convention.',
'''assert Temperature.from_kelvin(273.15).celsius == 0.0''')

# Twelve Week 9 studies: public contracts, inheritance and hidden representation.
add(9, 'objects', 'One area client with two shape implementations', '''
import math

class Rectangle:
    def __init__(self, width, height):
        self.width, self.height = width, height

    def area(self):
        return self.width * self.height

class Circle:
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return math.pi * self.radius ** 2

for shape in [Rectangle(2, 3), Circle(1)]:
    print(f'{shape.area():.3f}')
''', '6.000\n3.142',
'The client depends on an area operation rather than an exact concrete type. Both implementations provide that operation without sharing a custom base class. This is interface-based polymorphism through duck typing, assuming dimensions in a consistent length unit.',
'Add a triangle implementation and use it through the same unchanged client loop.',
'''assert Rectangle(0, 5).area() == 0
assert math.isclose(Circle(2).area(), 4 * math.pi)''')

add(9, 'objects', 'An override extends inherited initialization and behavior', '''
class Sensor:
    def __init__(self, raw):
        self.raw = raw

    def read(self):
        return self.raw

class OffsetSensor(Sensor):
    def __init__(self, raw, offset):
        super().__init__(raw)
        self.offset = offset

    def read(self):
        return super().read() + self.offset

sensor = OffsetSensor(8, 2)
print(sensor.read())
print(sensor.raw)
print(isinstance(sensor, Sensor))
''', '10\n8\nTrue',
'super delegates through the same receiver, first to initialize raw and later to reuse the base reading before adding an offset. It does not create a second sensor object. The subclass remains an instance of the base type.',
'Change raw after construction and predict the overridden read result without reconstructing the object.',
'''assert OffsetSensor(0, 3).read() == 3
assert sensor.raw == 8''')

add(9, 'objects', 'A property keeps a rectangle result current', '''
class Rectangle:
    def __init__(self, width, height):
        self.width, self.height = width, height

    @property
    def area(self):
        return self.width * self.height

shape = Rectangle(2, 5)
print(shape.area)
shape.width = 4
print(shape.area)
print('area' in shape.__dict__)
''', '10\n20\nFalse',
'The property provides attribute-style access while computing from current dimensions. There is no separately stored instance area field to become stale after width changes. The dimensions are public in this introductory model and are assumed nonnegative.',
'Add a validating width property and test that a rejected negative assignment leaves the previous area unchanged.',
'''assert shape.area == 20
assert Rectangle(0, 5).area == 0''')

add(9, 'objects', 'Name mangling separates two internal counters', '''
class Base:
    def __init__(self):
        self.__count = 1

    def base_count(self):
        return self.__count

class Child(Base):
    def __init__(self):
        super().__init__()
        self.__count = 9

    def child_count(self):
        return self.__count

object_ = Child()
print(object_.base_count(), object_.child_count())
print(sorted(object_.__dict__))
''', "1 9\n['_Base__count', '_Child__count']",
'Double-leading-underscore names are mangled with the class context, so the two methods reach different instance fields. This reduces accidental subclass collisions. The final inspection also shows that mangling is not encryption or an absolute access restriction.',
'Replace both internal names with a single-leading-underscore name and explain which assignment then overwrites the other.',
'''assert object_.base_count() == 1
assert object_.child_count() == 9''')

add(9, 'objects', 'A frozen record rejects ordinary reassignment', '''
from dataclasses import dataclass, FrozenInstanceError

@dataclass(frozen=True)
class Calibration:
    gain: float
    offset: float

calibration = Calibration(2.0, 1.0)
try:
    calibration.gain = 3.0
except FrozenInstanceError:
    print('Reassignment rejected')
print(calibration)
''', 'Reassignment rejected\nCalibration(gain=2.0, offset=1.0)',
'A frozen data class blocks ordinary field assignment through its generated interface. This particular record contains floats, so its supplied values are immutable. Freezing an outer record would not recursively freeze a mutable list stored inside it.',
'Create a separate record with an immutable tuple of coefficients and compare that with a frozen record containing a list.',
'''assert calibration.gain == 2.0
assert calibration == Calibration(2.0, 1.0)''')

add(9, 'objects', 'A subclass preserves an inherited reporting contract', '''
class Instrument:
    def read(self):
        return 4

    def report(self):
        return f'Reading: {self.read()}'

class DoubledInstrument(Instrument):
    def read(self):
        return 2 * super().read()

for instrument in [Instrument(), DoubledInstrument()]:
    print(instrument.report())
''', 'Reading: 4\nReading: 8',
'The inherited report method calls self.read, so normal method lookup selects the override for the subclass receiver. Both reads still return numeric values and both reports retain the same text format. The base method has not hard-coded the concrete implementation.',
'Add another numeric read implementation and check it through the inherited report method rather than duplicating reporting code.',
'''assert DoubledInstrument().read() == 8
assert Instrument().report() == 'Reading: 4' ''')

add(9, 'objects', 'A device delegates calibration to a contained policy', '''
class Affine:
    def __init__(self, gain, offset):
        self.gain, self.offset = gain, offset

    def apply(self, value):
        return self.gain * value + self.offset

class Device:
    def __init__(self, calibration):
        self.calibration = calibration

    def read(self, raw):
        return self.calibration.apply(raw)

device = Device(Affine(2, 1))
print(device.read(3))
device.calibration = Affine(1, -2)
print(device.read(3))
''', '7\n1',
'A Device has a calibration object and delegates the conversion through its apply interface. Replacing that contained policy changes the behavior without changing the Device implementation or requiring it to inherit from a calibration class.',
'Implement a policy that clips its output under an explicit range contract and use it through the same Device.read method.',
'''assert Device(Affine(1, 0)).read(5) == 5''')

add(9, 'objects', 'A defensive snapshot copies nested rows', '''
import copy

class Table:
    def __init__(self, rows):
        self._rows = copy.deepcopy(rows)

    def snapshot(self):
        return copy.deepcopy(self._rows)

source = [[1, 2], [3, 4]]
table = Table(source)
source[0][0] = 8
snapshot = table.snapshot()
snapshot[1][1] = 9
print(source)
print(snapshot)
print(table.snapshot())
''', '[[8, 2], [3, 4]]\n[[1, 2], [3, 9]]\n[[1, 2], [3, 4]]',
'The constructor breaks the connection to the caller input, and snapshot breaks the connection to the stored nested rows. Both boundaries matter. Deep copying is appropriate for this small table of numbers; other object graphs may require a more specific copying contract.',
'Replace only the snapshot deep copy with an outer-list copy and identify which edit would then bypass the interface.',
'''assert table.snapshot() == [[1, 2], [3, 4]]
assert table.snapshot() is not table.snapshot()''')

add(9, 'objects', 'A public method protects a bounded balance', '''
class Balance:
    def __init__(self, initial):
        if initial < 0:
            raise ValueError('negative initial balance')
        self._amount = initial

    def remove(self, amount):
        if amount < 0 or amount > self._amount:
            raise ValueError('invalid removal')
        self._amount -= amount

    @property
    def amount(self):
        return self._amount

balance = Balance(10)
balance.remove(4)
try:
    balance.remove(9)
except ValueError:
    print('Removal rejected')
print(balance.amount)
''', 'Removal rejected\n6',
'The supported operations preserve the nonnegative-balance invariant for the stated ordinary numeric inputs. Validation occurs before mutation, so the failed removal leaves six intact. The underscore signals an implementation field by convention, while amount exposes a read-only property.',
'Test removal of exactly the remaining balance and test a negative amount. State whether nonfinite floats are allowed in a stronger version of the contract.',
'''balance.remove(6)
assert balance.amount == 0''')

add(9, 'objects', 'Readable text and a debugging representation', '''
class Sample:
    def __init__(self, label, value):
        self.label, self.value = label, value

    def __str__(self):
        return f'{self.label}: {self.value} V'

    def __repr__(self):
        return f'Sample({self.label!r}, {self.value!r})'

sample = Sample('S1', 12)
print(sample)
print(repr(sample))
print([sample])
''', "S1: 12 V\nSample('S1', 12)\n[Sample('S1', 12)]",
'print on the object uses its user-facing string, whereas repr and the representation inside a list use the debugging form. Explicit methods make both displays deterministic and informative without exposing a memory address.',
'Use a label containing a quote and inspect how !r in the debugging representation keeps that string distinguishable from surrounding syntax.',
'''assert str(sample) == 'S1: 12 V'
assert repr(sample).startswith('Sample(')''')

add(9, 'objects', 'An inherited class method constructs the receiving type', '''
class Record:
    def __init__(self, value):
        self.value = value

    @classmethod
    def from_text(cls, text):
        return cls(int(text))

class SpecialRecord(Record):
    pass

record = SpecialRecord.from_text('007')
print(record.value)
print(type(record).__name__)
print(isinstance(record, Record))
''', '7\nSpecialRecord\nTrue',
'The inherited class method receives SpecialRecord as cls and therefore constructs that subclass. Hard-coding Record instead would lose this behavior. The subclass inherits an initializer compatible with the single converted argument.',
'Give SpecialRecord an incompatible constructor and explain why the inherited factory contract then needs attention.',
'''assert type(SpecialRecord.from_text('2')) is SpecialRecord
assert Record.from_text('-3').value == -3''')

add(9, 'objects', 'A domain exception is also a ValueError', '''
class InvalidReading(ValueError):
    pass

def nonnegative(value):
    if value < 0:
        raise InvalidReading('reading below zero')
    return value

try:
    nonnegative(-2)
except ValueError as error:
    print(type(error).__name__)
    print(str(error))
print(nonnegative(0))
''', 'InvalidReading\nreading below zero\n0',
'Subclassing ValueError gives this domain-specific failure a recognizable name while retaining compatibility with a broader ValueError handler. The handler sees the actual subclass instance and its message. Zero is valid under the declared nonnegative rule.',
'Add a specific InvalidReading handler before a broad ValueError handler and trace which one handles each conversion or domain failure.',
'''assert issubclass(InvalidReading, ValueError)
assert nonnegative(4) == 4''')

# Fourteen Week 10 studies count stated operations instead of timing a machine.
add(10, 'algorithms', 'Counting comparisons in a minimum scan', '''
def minimum_with_count(values):
    smallest = values[0]
    comparisons = 0
    for value in values[1:]:
        comparisons += 1
        if value < smallest:
            smallest = value
    return smallest, comparisons

print(minimum_with_count([5, 2, 7, 1]))
print(minimum_with_count([9]))
''', '(1, 3)\n(9, 0)',
'With a nonempty input, the first entry initializes the candidate and each remaining entry needs one selected comparison. The count is n-1. This is a comparison model, not a complete Python runtime measurement; the slice also creates an outer list.',
'Rewrite the scan using an index range to avoid that slice while retaining the same comparison count and result.',
'''assert minimum_with_count([-2, -5, -1]) == (-5, 2)''')

add(10, 'algorithms', 'Linear search reports its examined entries', '''
def find(values, target):
    checks = 0
    for index, value in enumerate(values):
        checks += 1
        if value == target:
            return index, checks
    return -1, checks

data = [4, 8, 12, 16]
print(find(data, 12))
print(find(data, 5))
print(find([], 5))
''', '(2, 3)\n(-1, 4)\n(-1, 0)',
'The function counts each examined entry and returns immediately on a match. An absent target requires examining every entry, while an empty collection requires none. The returned position is zero-based and -1 is the explicit missing sentinel.',
'Move the target to the first and last positions and compare the best and worst successful cases.',
'''assert find([8, 8], 8) == (0, 1)''')

add(10, 'algorithms', 'Counting midpoint probes in binary search', '''
def binary_find(values, target):
    low, high, probes = 0, len(values) - 1, 0
    while low <= high:
        middle = (low + high) // 2
        probes += 1
        if values[middle] == target:
            return middle, probes
        if values[middle] < target:
            low = middle + 1
        else:
            high = middle - 1
    return -1, probes

data = [2, 4, 6, 8, 10, 12, 14]
print(binary_find(data, 12))
print(binary_find(data, 13))
''', '(5, 2)\n(-1, 3)',
'The input is sorted ascending and the bounds are inclusive. Each unsuccessful probe excludes the tested midpoint and one side of the remaining interval. Probes count visited midpoints, not every individual comparison or all Python operations.',
'Trace the missing target 15 and show why low = middle + 1 guarantees progress even for the final one-item interval.',
'''assert binary_find([], 3) == (-1, 0)
assert binary_find([3], 3) == (0, 1)''')

add(10, 'algorithms', 'Triangular work from unique index pairs', '''
def pair_count(size):
    count = 0
    for left in range(size):
        for right in range(left + 1, size):
            count += 1
    return count

for size in [2, 4, 5]:
    print(size, pair_count(size), size * (size - 1) // 2)
''', '2 1 1\n4 6 6\n5 10 10',
'Every unordered pair of distinct positions is visited once. The row lengths form (n-1) + (n-2) + ... + 1, giving n(n-1)/2. Two nested loops do not require a full n-by-n rectangle to have quadratic growth.',
'Include self-pairs by starting right at left and derive the new exact count before running it.',
'''assert pair_count(0) == 0
assert pair_count(1) == 0
assert pair_count(6) == 15''')

add(10, 'algorithms', 'Sequential loops add while nested loops multiply', '''
size = 4
sequential = 0
for index in range(size):
    sequential += 1
for index in range(size):
    sequential += 1
nested = 0
for row in range(size):
    for column in range(size):
        nested += 1
print('Sequential:', sequential)
print('Nested:', nested)
''', 'Sequential: 8\nNested: 16',
'The sequential bodies run n + n times; the nested body runs n*n times. These selected increments illustrate linear versus quadratic growth under a bounded-scalar model. They do not measure execution time or account for every interpreter operation.',
'Double size and predict both counts and their separate doubling ratios.',
'''assert sequential == 2 * size
assert nested == size * size''')

add(10, 'algorithms', 'A fixed-size inner loop is a constant factor', '''
def work(rows):
    operations = 0
    for row in range(rows):
        for channel in range(3):
            operations += 1
    return operations

print(work(4))
print(work(8))
print(work(8) / work(4))
''', '12\n24\n2.0',
'The three-channel inner loop has a size fixed independently of rows. Its selected work is 3*n, so doubling the number of rows doubles the count. A fixed inner loop does not create quadratic growth in n.',
'Change the inner bound to rows and explain why the selected work then has a different growth class.',
'''assert work(0) == 0
assert work(1) == 3''')

add(10, 'algorithms', 'An outer scan with an inner halving loop', '''
size = 8
operations = 0
for row in range(size):
    remaining = size
    while remaining > 1:
        remaining //= 2
        operations += 1
print('Rows:', size)
print('Selected operations:', operations)
''', 'Rows: 8\nSelected operations: 24',
'Each of eight rows runs the halving body three times: 8 to 4 to 2 to 1. For a general positive size, the repeated halving contributes logarithmic iterations per row, giving n log n growth for this selected operation.',
'Use sizes 4 and 16 and calculate both the exact counts and the count per row.',
'''assert operations == 8 * 3''')

add(10, 'algorithms', 'Integer halving does not require a power of two', '''
remaining = 13
visited = [remaining]
steps = 0
while remaining > 1:
    remaining //= 2
    visited.append(remaining)
    steps += 1
print(visited)
print('Halvings:', steps)
''', '[13, 6, 3, 1]\nHalvings: 3',
'Integer division drops the fractional part at each positive update. The chain still reaches one for an initial integer greater than one, even when that value is not a power of two. The number of updates is the floor of its base-two logarithm.',
'Compare starts 15, 16 and 17 and locate the boundary where the exact halving count increases.',
'''assert remaining == 1
assert len(visited) == steps + 1''')

add(10, 'algorithms', 'Doubling until a threshold is reached', '''
limit = 10
capacity = 1
growths = 0
visited = [capacity]
while capacity < limit:
    capacity *= 2
    growths += 1
    visited.append(capacity)
print(visited)
print('Growths:', growths)
print('Final capacity:', capacity)
''', '[1, 2, 4, 8, 16]\nGrowths: 4\nFinal capacity: 16',
'The final capacity is the first power of two at least as large as the positive integer limit. Overshooting is permitted by the >= target contract. The loop counts multiplicative growth steps, which increase logarithmically with the target.',
'Try limits 8 and 9 and explain the different exact counts despite their nearby values.',
'''assert capacity >= limit
assert capacity // 2 < limit''')

add(10, 'algorithms', 'Input order changes an early-exit scan', '''
def checks_until(values, target):
    checks = 0
    for value in values:
        checks += 1
        if value == target:
            break
    return checks

data = [8, 1, 2, 3]
print(checks_until(data, 8))
print(checks_until(list(reversed(data)), 8))
print(checks_until(data, 9))
''', '1\n4\n4',
'The same present target can require one or four examined entries depending on its position. The absent target requires all four. A complexity statement must identify the case being counted instead of reporting one fixture as the universal behavior.',
'Construct a six-item list where the target takes exactly three checks and another where it is absent.',
'''assert checks_until([], 1) == 0
assert checks_until([1], 1) == 1''')

add(10, 'algorithms', 'Total recursive calls differ from live depth', '''
calls = 0
maximum_depth = 0

def visit(levels, depth=1):
    global calls, maximum_depth
    calls += 1
    maximum_depth = max(maximum_depth, depth)
    if levels > 0:
        visit(levels - 1, depth + 1)
        visit(levels - 1, depth + 1)

visit(3)
print('Calls:', calls)
print('Maximum depth:', maximum_depth)
''', 'Calls: 15\nMaximum depth: 4',
'The complete binary call tree has 1 + 2 + 4 + 8 = 15 invocations, including leaves. At most four visit frames lie along one active path. Total work and maximum simultaneous depth measure different aspects of the same execution.',
'Use visit(2) in a fresh run and draw the call tree. Predict seven calls but a maximum depth of three.',
'''assert calls == 2 ** 4 - 1
assert maximum_depth == 4''')

add(10, 'algorithms', 'Required output can itself have product size', '''
labels = ['A', 'B', 'C']
loads = [1, 2]
cases = []
for label in labels:
    for load in loads:
        cases.append((label, load))
print(cases)
print('Output records:', len(cases))
''', "[('A', 1), ('A', 2), ('B', 1), ('B', 2), ('C', 1), ('C', 2)]\nOutput records: 6",
'The contract requests one record for every label-load combination, so three labels and two loads require six records. Retaining all n*m records needs proportional output storage under the usual slot model; that cost is separate from auxiliary temporary storage.',
'Replace cases with a generator consumed one record at a time. Distinguish reduced retained storage from the number of records still required.',
'''assert len(cases) == len(labels) * len(loads)''')

add(10, 'algorithms', 'Separating prefix preparation from range queries', '''
values = [2, 3, 5, 7]
prefix = [0]
for value in values:
    prefix.append(prefix[-1] + value)
queries = [(0, 2), (1, 4)]
answers = [prefix[stop] - prefix[start] for start, stop in queries]
print(prefix)
print(answers)
print('Preparation additions:', len(values))
print('Query subtractions:', len(queries))
''', '[0, 2, 5, 10, 17]\n[5, 15]\nPreparation additions: 4\nQuery subtractions: 2',
'prefix[k] stores the total of the first k entries. A half-open interval [start, stop) therefore has sum prefix[stop] - prefix[start]. Preparation scans the data once; each valid query uses a fixed number of indexed operations under the stated scalar model.',
'Add an empty interval and the full interval. Then state how an update to values would affect the saved prefix table.',
'''assert prefix[4] - prefix[0] == 17
assert prefix[2] - prefix[2] == 0''')

add(10, 'algorithms', 'Exact model counts before interpreting doubling ratios', '''
def models(size):
    return size, size * size, size * (size.bit_length() - 1)

small, large = models(4), models(8)
print(small)
print(large)
print(tuple(new / old for old, new in zip(small, large)))
''', '(4, 16, 8)\n(8, 64, 24)\n(2.0, 4.0, 3.0)',
'For these powers of two, bit_length minus one equals log2(n). The three expressions model linear, quadratic and n log n work. Their finite doubling ratios differ, and none of these counts is an elapsed-time measurement.',
'Compare sizes 16 and 32. Explain why the n log n ratio changes while the linear and quadratic ratios stay fixed.',
'''assert models(16) == (16, 256, 64)''')

# Fourteen Week 11 studies: reuse, streaming, cache contracts and hidden costs.
add(11, 'algorithms', 'Reusing the subtotal of a moving window', '''
values = [1, 2, 3, 4, 5, 6, 7]
width = 3
totals = [sum(values[:width])]
updates = width
for index in range(width, len(values)):
    totals.append(totals[-1] - values[index - width] + values[index])
    updates += 2
print(totals)
print('Direct entries visited:', (len(values) - width + 1) * width)
print('Running arithmetic updates:', updates)
''', '[6, 9, 12, 15, 18]\nDirect entries visited: 15\nRunning arithmetic updates: 11',
'Adjacent complete windows share all but one outgoing and one incoming entry. After the initial width-three sum, each step uses two arithmetic updates. The counters use a declared classroom model and exclude slicing, loop overhead and storage operations.',
'Try width one and width equal to the input length. Then compare floating-point behavior on values with large cancellation.',
'''assert totals == [sum(values[i:i + width]) for i in range(len(values) - width + 1)]''')

add(11, 'algorithms', 'Prefix means without repeated prefix scans', '''
values = [2, 4, 9]
running = 0
means = []
for count, value in enumerate(values, start=1):
    running += value
    means.append(running / count)
print([f'{value:.2f}' for value in means])
print('Running additions:', len(values))
print('Repeated-prefix entries:', sum(range(1, len(values) + 1)))
''', "['2.00', '3.00', '5.00']\nRunning additions: 3\nRepeated-prefix entries: 6",
'A single subtotal supports every prefix mean. Recomputing sum(values[:count]) for each prefix would revisit 1 + 2 + 3 entries in this fixture and also copy slices. The output contract still retains all three means.',
'Extend the list to five entries and compare the exact addition and prefix-visit counts.',
'''assert means[-1] == sum(values) / len(values)
assert len(means) == len(values)''')

add(11, 'algorithms', 'Memoization separates a cold query from a warm query', '''
cache = {}

def choose(n, k):
    key = (n, k)
    if key not in cache:
        if k == 0 or k == n:
            cache[key] = 1
        else:
            cache[key] = choose(n - 1, k - 1) + choose(n - 1, k)
    return cache[key]

print(choose(4, 2))
prepared = len(cache)
print('Cached subproblems:', prepared)
print(choose(4, 2))
print('New subproblems:', len(cache) - prepared)
''', '6\nCached subproblems: 8\n6\nNew subproblems: 0',
'The cache key includes both recurrence arguments. The first valid query computes eight distinct subproblems for 0 <= k <= n. The second query reuses the existing result, so its work cannot represent a cold-cache evaluation.',
'Run choose(5, 2) after this fixture and inspect which additional keys appear. Compare that with an empty-cache run.',
'''assert cache[(4, 2)] == 6
assert choose(4, 0) == 1''')

add(11, 'algorithms', 'A bottom-up minimum-coin table', '''
coins = [1, 3, 4]
limit = 6
cost = [0] + [limit + 1] * limit
last = [None] * (limit + 1)
for amount in range(1, limit + 1):
    for coin in coins:
        if coin <= amount and cost[amount - coin] + 1 < cost[amount]:
            cost[amount] = cost[amount - coin] + 1
            last[amount] = coin
answer, remaining = [], limit
while remaining:
    answer.append(last[remaining])
    remaining -= last[remaining]
print(cost)
print('Minimum coins:', cost[limit])
print('One solution:', answer)
''', '[0, 1, 2, 1, 1, 2, 2]\nMinimum coins: 2\nOne solution: [3, 3]',
'Each amount reuses solutions to smaller amounts instead of recomputing whole search trees. The chosen coin records reconstruct one optimum. A coin of value one ensures every amount in this particular fixture is reachable; other coin systems need an explicit unreachable-result policy.',
'Remove coin one and specify how to represent and reconstruct an unreachable amount without looping or indexing with None.',
'''assert cost[6] == 2
assert sum(answer) == limit
assert len(answer) == cost[limit]''')

add(11, 'objects', 'Invalidating a cached mean after an update', '''
class MeanLog:
    def __init__(self):
        self.values = []
        self._cached = None
        self.computations = 0

    def add(self, value):
        self.values.append(value)
        self._cached = None

    def mean(self):
        if self._cached is None:
            self._cached = sum(self.values) / len(self.values)
            self.computations += 1
        return self._cached

log = MeanLog()
log.add(2)
log.add(4)
print(log.mean(), log.mean(), log.computations)
log.add(6)
print(log.mean(), log.computations)
''', '3.0 3.0 1\n4.0 2',
'The first query computes a mean and the second reuses it. The supported add operation invalidates that cache, so the next query reflects the new list. This demonstration assumes nonempty queries and updates through add; exposing the public values list is a limitation to address in a stronger interface.',
'Protect the internal list and add a documented empty-query exception. Test that clients cannot bypass cache invalidation.',
'''assert log.mean() == 4.0
assert log.computations == 2''')

add(11, 'algorithms', 'Building an index with a first-occurrence policy', '''
materials = ['Cu', 'Al', 'Cu', 'Fe']
first_index = {}
for index, label in enumerate(materials):
    first_index.setdefault(label, index)
queries = ['Cu', 'Fe', 'X']
print(first_index)
print([first_index.get(label, -1) for label in queries])
''', "{'Cu': 0, 'Al': 1, 'Fe': 3}\n[0, 3, -1]",
'setdefault records a label only on its first appearance, preserving the first-index contract for duplicates. Preparing the index scans the data once. Ordinary hash assumptions support expected constant-time lookup, while the preparation and index storage still belong to the full workflow cost.',
'Replace setdefault with ordinary assignment and predict how the duplicate Cu result changes.',
'''assert first_index['Cu'] == materials.index('Cu')
assert first_index.get('missing', -1) == -1''')

add(11, 'algorithms', 'FIFO results with different front-removal work', '''
from collections import deque

items = list(range(5))
queue = deque(items)
shifted_references = 0
left, right = [], []
for _ in range(3):
    shifted_references += len(items) - 1
    left.append(items.pop(0))
    right.append(queue.popleft())
print(left, right)
print(items, list(queue))
print('List reference shifts:', shifted_references)
''', '[0, 1, 2] [0, 1, 2]\n[3, 4] [3, 4]\nList reference shifts: 9',
'Both containers satisfy the same FIFO result for this fixture. In the usual list model, removing the first item shifts four, then three, then two remaining references. deque supports efficient end operations. The explicit shift counter is a model, not a measured duration.',
'Increase the number of removals to five and derive the total list shifts before executing.',
'''assert left == right
assert items == list(queue)''')

add(11, 'algorithms', 'A generator evaluates only the requested prefix', '''
visited = []

def squares(limit):
    for value in range(limit):
        visited.append(value)
        yield value * value

stream = squares(5)
print('Before:', visited)
print(next(stream))
print(next(stream))
print('Visited:', visited)
''', 'Before: []\n0\n1\nVisited: [0, 1]',
'Calling the generator function creates an iterator without entering its body. Each next resumes execution until one yield. Only two inputs have been visited; converting the remaining iterator to a list would request the rest. The visited list is deliberate tracing storage and is not part of a constant-storage claim.',
'Consume the remaining iterator and predict both its returned list and the final trace.',
'''assert visited == [0, 1]''')

add(11, 'data', 'Summarizing CSV rows without retaining every record', '''
import csv
import io

text = """time,value
0,2
1,4
2,9
"""
total = 0.0
count = 0
for row in csv.DictReader(io.StringIO(text)):
    total += float(row['value'])
    count += 1
print('Rows:', count)
print('Mean:', total / count)
''', 'Rows: 3\nMean: 5.0',
'Each parsed record contributes to two summary variables and is then no longer needed by the calculation. The example embeds its source text to run independently; a real input file can be streamed through the same reader. The numeric schema and nonempty fixture are assumed here.',
'Add parsing and finite-value validation, keeping accepted and rejected counts separate. Define the result for no accepted rows.',
'''assert count == 3
assert total == 15.0''')

add(11, 'algorithms', 'Hoisting a normalization total out of a loop', '''
weights = [2, 3, 5]
denominator = sum(weights)
fractions = []
for weight in weights:
    fractions.append(weight / denominator)
print(fractions)
print(f'Sum: {sum(fractions):.1f}')
print('Full sums computed:', 1)
''', '[0.2, 0.3, 0.5]\nSum: 1.0\nFull sums computed: 1',
'The unchanged denominator is computed once instead of rescanning weights inside every iteration. The fixture has a positive total and uses consistent numeric weights. The displayed fraction sum is rounded for communication, not proof of exact floating-point equality for all inputs.',
'Add a zero-total input and decide whether the function should reject it before constructing any fractions.',
'''assert denominator == 10
assert len(fractions) == len(weights)''')

add(11, 'algorithms', 'Stable deduplication with a membership index', '''
labels = ['Cu', 'Al', 'Cu', 'Fe', 'Al']
seen = set()
unique = []
duplicates = 0
for label in labels:
    if label in seen:
        duplicates += 1
    else:
        seen.add(label)
        unique.append(label)
print(unique)
print('Repeated occurrences:', duplicates)
''', "['Cu', 'Al', 'Fe']\nRepeated occurrences: 2",
'The output list preserves first-appearance order, while the set supports membership checks for these hashable string labels. The duplicate count includes each repeated occurrence. Output order comes from unique, never from iterating the set.',
'Add three more occurrences of Cu and predict the output list, duplicate count and number of distinct labels.',
'''assert len(unique) + duplicates == len(labels)
assert set(unique) == set(labels)''')

add(11, 'algorithms', 'Index-based recursion avoids repeated tail slices', '''
calls = 0

def sum_from(values, index=0):
    global calls
    calls += 1
    if index == len(values):
        return 0
    return values[index] + sum_from(values, index + 1)

data = [1, 2, 3, 4]
print('Total:', sum_from(data))
print('Calls:', calls)
print('Tail entries a slicing version would copy:', len(data) * (len(data) - 1) // 2)
''', 'Total: 10\nCalls: 5\nTail entries a slicing version would copy: 6',
'The recursive calls share one input list and advance an index, making no tail-slice copies. A version taking values[1:] at every nonempty call would copy 3 + 2 + 1 + 0 references here. Recursion still needs linear live call depth and faces Python recursion limits.',
'Replace recursion with a loop and compare the input, result, auxiliary state and maximum live call depth.',
'''assert calls == len(data) + 1
assert data == [1, 2, 3, 4]''')

add(11, 'algorithms', 'Ordered queries share a forward-only search position', '''
values = [1, 2, 4, 6, 8]
queries = [2, 4, 8, 10]
position = 0
advances = 0
answers = []
for target in queries:
    while position < len(values) and values[position] < target:
        position += 1
        advances += 1
    found = position < len(values) and values[position] == target
    answers.append(position if found else -1)
print(answers)
print('Pointer advances:', advances)
''', '[1, 2, 4, -1]\nPointer advances: 5',
'Both the data and queries are ascending. Once a value is too small for one query it is too small for every later query, so the pointer never moves backward. Across the whole batch it advances at most n times; ordered-query traversal must be included in the full cost.',
'Move the last query to the beginning and explain why the ascending-query precondition is necessary.',
'''assert answers == [1, 2, 4, -1]
assert advances <= len(values)''')

add(11, 'algorithms', 'A cache key includes every numeric parameter', '''
cache = {}

def scaled(value, factor):
    key = (value, factor)
    if key not in cache:
        cache[key] = value * factor
    return cache[key]

print([scaled(2, 3), scaled(2, 4), scaled(2, 3)])
print('Cache entries:', len(cache))
print(sorted(cache))
''', '[6, 8, 6]\nCache entries: 2\n[(2, 3), (2, 4)]',
'The output depends on both value and factor, so both appear in the key. The repeated complete input reuses a result, while a different factor gets a separate entry. A key containing value alone would return a stale or inappropriate answer for the second call.',
'Temporarily omit factor from the key and write an independent fixture that detects the wrong second result.',
'''assert scaled(3, 4) == 12
assert scaled(3, 5) == 15''')

# Fourteen Week 12 studies: contracts for search, ordering and interpolation.
add(12, 'algorithms', 'A lower bound also works when the target is absent', '''
def lower_bound(values, target):
    low, high = 0, len(values)
    while low < high:
        middle = (low + high) // 2
        if values[middle] < target:
            low = middle + 1
        else:
            high = middle
    return low

data = [2, 4, 4, 7]
for target in [1, 4, 6, 9]:
    index = lower_bound(data, target)
    present = index < len(data) and data[index] == target
    print(target, index, present)
''', '1 0 False\n4 1 True\n6 3 False\n9 4 False',
'The half-open interval contains possible insertion boundaries. The result is the first position whose entry is not smaller than the target, or len(data). Checking the bound before indexing distinguishes a valid insertion position from an existing element.',
'Use an empty list and a list containing only copies of the target. Predict both the boundary and membership result.',
'''assert lower_bound([], 2) == 0
assert lower_bound([2, 2], 2) == 0''')

add(12, 'algorithms', 'Two insertion boundaries count duplicates', '''
from bisect import bisect_left, bisect_right

data = [1, 3, 3, 3, 8]
for target in [3, 4, 8]:
    first = bisect_left(data, target)
    after = bisect_right(data, target)
    print(target, first, after, after - first)
''', '3 1 4 3\n4 4 4 0\n8 4 5 1',
'For ascending data, the left boundary precedes equal entries and the right boundary follows them. Their difference is the number of target occurrences. An absent target has equal boundaries and therefore count zero.',
'Insert another three and another eight in sorted positions, then predict the changed boundaries.',
'''assert bisect_right(data, 3) - bisect_left(data, 3) == 3
assert bisect_left([], 1) == 0''')

add(12, 'algorithms', 'Stable insertion sort keeps equal-key records in order', '''
records = [('A', 2), ('B', 1), ('C', 2), ('D', 1)]
ordered = records.copy()
for index in range(1, len(ordered)):
    item = ordered[index]
    position = index
    while position > 0 and ordered[position - 1][1] > item[1]:
        ordered[position] = ordered[position - 1]
        position -= 1
    ordered[position] = item
print(ordered)
print(records)
''', "[('B', 1), ('D', 1), ('A', 2), ('C', 2)]\n[('A', 2), ('B', 1), ('C', 2), ('D', 1)]",
'The algorithm shifts only entries with strictly greater keys. Equal-key entries are not crossed, preserving B before D and A before C. It sorts a copy, so stability and lack of input mutation can be checked separately.',
'Change > to >= and trace what happens to equal-key record order.',
'''assert ordered == sorted(records, key=lambda row: row[1])
assert records[0] == ('A', 2)''')

add(12, 'algorithms', 'Selection sort fixes one position per pass', '''
values = [3, 1, 4, 2]
comparisons = 0
for start in range(len(values) - 1):
    smallest = start
    for index in range(start + 1, len(values)):
        comparisons += 1
        if values[index] < values[smallest]:
            smallest = index
    values[start], values[smallest] = values[smallest], values[start]
    print('Pass', start + 1, values)
print('Comparisons:', comparisons)
''', 'Pass 1 [1, 3, 4, 2]\nPass 2 [1, 2, 4, 3]\nPass 3 [1, 2, 3, 4]\nComparisons: 6',
'Each pass scans the remaining suffix and swaps a minimum into its final prefix position. The selected comparisons number three, two and one. These scans still occur for already sorted input in this implementation, and the swapping version does not generally promise stability.',
'Use [1, 2, 3, 4] and predict the comparison count even though the list is already ordered.',
'''assert values == [1, 2, 3, 4]
assert comparisons == 4 * 3 // 2''')

add(12, 'algorithms', 'A stable merge chooses the left record on ties', '''
left = [('A', 1), ('B', 3)]
right = [('C', 1), ('D', 2)]
i = j = 0
merged = []
while i < len(left) and j < len(right):
    if left[i][1] <= right[j][1]:
        merged.append(left[i])
        i += 1
    else:
        merged.append(right[j])
        j += 1
merged.extend(left[i:])
merged.extend(right[j:])
print(merged)
''', "[('A', 1), ('C', 1), ('D', 2), ('B', 3)]",
'Both input runs are already ordered by the second field. The <= tie rule takes the earlier left-run record first; appending either remaining suffix completes the merge. Stability of a full merge sort additionally depends on preserving order inside its input runs.',
'Replace <= with < and predict the order of A and C. Then test a merge with one empty run.',
'''assert merged == sorted(left + right, key=lambda row: row[1])
assert len(merged) == len(left) + len(right)''')

add(12, 'algorithms', 'Binary search with descending order', '''
def descending_find(values, target):
    low, high = 0, len(values) - 1
    while low <= high:
        middle = (low + high) // 2
        if values[middle] == target:
            return middle
        if values[middle] > target:
            low = middle + 1
        else:
            high = middle - 1
    return -1

data = [12, 9, 6, 3]
print(descending_find(data, 9))
print(descending_find(data, 4))
''', '1\n-1',
'The data are descending, so a midpoint greater than the target requires searching to its right. The ascending-order branch direction would discard the wrong region. Inclusive bounds and midpoint exclusion still provide strict interval progress.',
'Reverse data without changing the function and construct a target demonstrating the violated ordering precondition.',
'''assert descending_find([], 2) == -1
assert descending_find([3], 3) == 0''')

add(12, 'numerical', 'Interpolation handles the final calibration knot', '''
from bisect import bisect_right

knots = [0, 10, 20]
readings = [0, 100, 300]

def interpolate(value):
    if not knots[0] <= value <= knots[-1]:
        raise ValueError('outside calibration range')
    index = min(bisect_right(knots, value) - 1, len(knots) - 2)
    fraction = (value - knots[index]) / (knots[index + 1] - knots[index])
    return readings[index] + fraction * (readings[index + 1] - readings[index])

for value in [0, 15, 20]:
    print(value, interpolate(value))
''', '0 0.0\n15 200.0\n20 300.0',
'Strictly increasing knots and matching reading lengths define linear segments. At the final knot, the index is clamped to the final valid segment instead of accessing a nonexistent upper neighbor. Inputs beyond the table are rejected rather than silently extrapolated.',
'Add tests for every exact knot and both out-of-range sides. Explain why duplicate knot coordinates must be rejected.',
'''assert interpolate(10) == 100.0
assert interpolate(5) == 50.0''')

add(12, 'algorithms', 'Stable sorting can be composed in two passes', '''
records = [('Z', 2), ('B', 1), ('A', 2), ('C', 1)]
by_name = sorted(records, key=lambda row: row[0])
by_priority = sorted(by_name, key=lambda row: row[1])
print(by_name)
print(by_priority)
print(by_priority == sorted(records, key=lambda row: (row[1], row[0])))
''', "[('A', 2), ('B', 1), ('C', 1), ('Z', 2)]\n[('B', 1), ('C', 1), ('A', 2), ('Z', 2)]\nTrue",
'The final pass makes priority the primary key. Its stability retains name order inside equal-priority groups, matching the supplied tuple-key sort. Doing the passes in the reverse order would make name the primary key instead.',
'Reverse the two pass orders and predict the resulting primary ordering.',
'''assert by_priority[0] == ('B', 1)
assert by_priority[-1] == ('Z', 2)''')

add(12, 'algorithms', 'Ranking deviations with an explicit tie rule', '''
reference = 10
records = [('S1', 12), ('S2', 9), ('S3', 8), ('S4', 11)]
ranked = sorted(enumerate(records), key=lambda pair: (abs(pair[1][1] - reference), pair[0]))
print([record[0] for index, record in ranked])
print([abs(record[1] - reference) for index, record in ranked])
''', "['S2', 'S4', 'S1', 'S3']\n[1, 1, 2, 2]",
'Absolute difference is the primary ranking key and the saved original index is the explicit tie key. Labels and readings remain paired. The output therefore keeps S2 before S4 among distance-one readings and S1 before S3 among distance-two readings.',
'Use label as the tie key instead and find an input where the resulting order changes.',
'''assert [record for _, record in ranked][0] == ('S2', 9)''')

add(12, 'algorithms', 'Intersecting sorted lists with duplicate multiplicities', '''
left = [1, 2, 2, 5, 7]
right = [2, 2, 2, 5, 8]
i = j = 0
common = []
while i < len(left) and j < len(right):
    if left[i] == right[j]:
        common.append(left[i])
        i += 1
        j += 1
    elif left[i] < right[j]:
        i += 1
    else:
        j += 1
print(common)
''', '[2, 2, 5]',
'Equal entries consume one position from each list, so each value appears the smaller of its two input multiplicities. Otherwise only the side with the smaller value advances. Ascending order makes that discard valid and each pointer moves forward at most its input length.',
'Compare the result with set intersection and explain the difference in duplicate preservation.',
'''from collections import Counter
assert Counter(common) == Counter(left) & Counter(right)''')

add(12, 'algorithms', 'Maintaining sorted order across insertions', '''
from bisect import bisect_left, bisect_right, insort

values = [2, 5, 5, 9]
print('Before equal values:', bisect_left(values, 5))
print('After equal values:', bisect_right(values, 5))
insort(values, 5)
insort(values, 1)
print(values)
''', 'Before equal values: 1\nAfter equal values: 3\n[1, 2, 5, 5, 5, 9]',
'The two bisect functions locate different boundaries around the existing equal values. insort maintains ascending order, but inserting into a Python list may still shift many references. Fast boundary search does not make the whole insertion logarithmic.',
'Insert at the beginning and end of a long list and distinguish boundary-search work from reference-shifting work.',
'''assert values == sorted(values)
assert values.count(5) == 3''')

add(12, 'engineering', 'Choosing a cheapest feasible candidate', '''
def choose(candidates, required_capacity):
    feasible = [row for row in candidates if row['capacity'] >= required_capacity]
    if not feasible:
        return None
    return min(feasible, key=lambda row: (row['cost'], row['name']))['name']

candidates = [
    {'name': 'A', 'capacity': 4, 'cost': 3},
    {'name': 'B', 'capacity': 8, 'cost': 6},
    {'name': 'C', 'capacity': 9, 'cost': 6},
]
print(choose(candidates, 7))
print(choose(candidates, 10))
''', 'B\nNone',
'The cheapest unrestricted candidate A is infeasible for a required capacity of seven. B and C are feasible and tied on cost, so name supplies a deterministic tie rule. The explicit None result handles an empty feasible set without calling min on it.',
'Change C to a lower cost and add tests for equality at the capacity boundary. Treat these capacities as fictional classroom values.',
'''assert choose(candidates, 4) == 'A'
assert choose([], 1) is None''')

add(12, 'algorithms', 'Odd and even medians from a sorted copy', '''
def median(values):
    if not values:
        raise ValueError('empty data')
    ordered = sorted(values)
    middle = len(ordered) // 2
    if len(ordered) % 2:
        return ordered[middle]
    return (ordered[middle - 1] + ordered[middle]) / 2

data = [9, 1, 5]
print(median(data))
print(median([8, 2, 4, 6]))
print(data)
''', '5\n5.0\n[9, 1, 5]',
'Odd-sized data have one central sorted entry, while even-sized data use the mean of two central entries under this median definition. A separate sorted copy preserves the input. The result can be an integer or float depending on the selected branch and input values.',
'Test a singleton, repeated equal values, negative values and the documented empty-input exception.',
'''assert median([7]) == 7
assert median([-3, -1]) == -2.0
assert data == [9, 1, 5]''')

add(12, 'algorithms', 'Looking up the latest timestamp at or before a query', '''
from bisect import bisect_right

times = [0, 5, 10]
values = [18, 21, 20]

def latest_at(query):
    index = bisect_right(times, query) - 1
    return None if index < 0 else (times[index], values[index])

for query in [-1, 0, 7, 12]:
    print(query, latest_at(query))
''', '-1 None\n0 (0, 18)\n7 (5, 21)\n12 (10, 20)',
'bisect_right includes an exact timestamp before moving one position left. Queries before the earliest observation have an explicit None result. Later queries return the latest recorded pair rather than interpolating or inventing a new timestamp.',
'Define a policy for duplicate timestamps and explain which duplicate bisect_right would choose in the current representation.',
'''assert latest_at(5) == (5, 21)
assert latest_at(-2) is None''')

# Ten Week 13 studies execute Python analogues, with language rules identified.
add(13, 'arithmetic', 'Floor division compared with truncation toward zero', '''
def truncated_divmod(a, b):
    quotient = abs(a) // abs(b)
    if (a < 0) != (b < 0):
        quotient = -quotient
    return quotient, a - quotient * b

a, b = -7, 2
print('Python floor:', a // b, a % b)
print('Truncation model:', *truncated_divmod(a, b))
''', 'Python floor: -4 1\nTruncation model: -3 -1',
'Python // floors the quotient. For ordinary nonzero integer operands, C++ and Java integer division instead truncate toward zero; the helper models that quotient without converting a potentially large integer through float. Each remainder is consistent with its own quotient through a = q*b + r. This program executes Python, not a native C++ or Java compiler.',
'Test all four sign combinations of a and b, keeping b nonzero, and verify the reconstruction identity for both conventions.',
'''assert truncated_divmod(7, -2) == (-3, 1)
assert truncated_divmod(-7, -2) == (3, -1)''')

add(13, 'lists', 'Translating one-based positions into Python indices', '''
def from_one_based(values, position):
    if not 1 <= position <= len(values):
        raise IndexError('position outside range')
    return values[position - 1]

data = [10, 20, 30]
print(from_one_based(data, 1))
print(from_one_based(data, 3))
try:
    from_one_based(data, 0)
except IndexError:
    print('Position zero rejected')
''', '10\n30\nPosition zero rejected',
'The wrapper accepts one-based positions, as used for ordinary MATLAB indexing, and translates once at the Python access boundary. Checking first prevents position zero from accidentally becoming Python index -1. This is a Python translation demonstration, not MATLAB execution.',
'Test positions len(data)+1 and -1. Explain why blindly subtracting one would not enforce the external indexing contract.',
'''assert from_one_based([8], 1) == 8''')

add(13, 'for', 'Inclusive integer sequences versus exclusive range stops', '''
start, stop, step = 1, 5, 2
python_values = list(range(start, stop, step))
inclusive_values = list(range(start, stop + 1, step))
print('Exclusive stop:', python_values)
print('Inclusive reached endpoint:', inclusive_values)
print('Endpoint not reached:', list(range(1, 6 + 1, 2)))
''', 'Exclusive stop: [1, 3]\nInclusive reached endpoint: [1, 3, 5]\nEndpoint not reached: [1, 3, 5]',
'For positive integer steps, increasing the range stop by one includes an endpoint only when the stepping sequence actually reaches it. The examples model a distinction relevant when translating MATLAB colon expressions to Python. Floating-point colon sequences and negative steps require their own endpoint reasoning.',
'Develop and test the corresponding rule for a negative integer step rather than applying stop + 1 unconditionally.',
'''assert inclusive_values[-1] == 5
assert stop not in python_values''')

add(13, 'matrices', 'Elementwise products and a dot product are different results', '''
left = [2, 3, 4]
right = [5, 6, 7]
products = [a * b for a, b in zip(left, right, strict=True)]
dot_product = sum(products)
print('Elementwise:', products)
print('Dot product:', dot_product)
print('Entries:', len(products))
''', 'Elementwise: [10, 18, 28]\nDot product: 56\nEntries: 3',
'The first operation retains one product per aligned pair; the second reduces those products to a scalar. strict=True rejects unequal lengths rather than silently dropping trailing entries. When translating array code, preserve whether the intended operation is elementwise, a dot product or a matrix product.',
'Supply unequal lengths and confirm the explicit failure. Compare the result shapes with the corresponding intended MATLAB array operations.',
'''assert dot_product == 2 * 5 + 3 * 6 + 4 * 7''')

add(13, 'decisions', 'Short-circuit evaluation preserves the division guard', '''
events = []

def positive_ratio(flow, area):
    events.append('division')
    return flow / area > 2

area = 0
result = area != 0 and positive_ratio(12, area)
print(result, events)
area = 4
result = area != 0 and positive_ratio(12, area)
print(result, events)
''', "False []\nTrue ['division']",
'The first Boolean operand blocks the division call when area is zero. With area four, the right operand is evaluated and records its execution. Python and, and scalar C++/Java &&, support this short-circuit pattern; the program here runs only the Python expression.',
'Reverse the operands and explain why the zero-area call then fails before the guard can protect it.',
'''assert events == ['division']
assert result is True''')

add(13, 'simulation', 'Simultaneous and sequential state updates differ', '''
x, y, step = 1.0, 2.0, 0.1
new_x, new_y = x + step * y, y - step * x
sequential_x = x + step * y
sequential_y = y - step * sequential_x
print(f'Old-state updates: {new_x:.2f} {new_y:.2f}')
print(f'Sequential updates: {sequential_x:.2f} {sequential_y:.2f}')
''', 'Old-state updates: 1.20 1.90\nSequential updates: 1.20 1.88',
'The first pair uses the original x and y in both right-hand expressions. The sequential version uses an already updated x in its second calculation and therefore implements a different numerical step. A language translation must preserve the intended update scheme, not merely the formula text.',
'Write the old-state step using explicit saved variables, as needed in a language without Python tuple assignment.',
'''assert new_y != sequential_y
assert (x, y) == (1.0, 2.0)''')

add(13, 'arithmetic', 'A similar-looking operator can mean something else', '''
base, exponent = 2, 3
print('Power:', base ** exponent)
print('Integer XOR:', base ^ exponent)
print('Built-in power:', pow(base, exponent))
''', 'Power: 8\nInteger XOR: 1\nBuilt-in power: 8',
'Python ** performs exponentiation, while ^ performs bitwise exclusive-or on these integers. Operator symbols do not transfer unchanged across languages: MATLAB uses ^ for matrix power and .^ for elementwise power, whereas C++ and Java use power functions for ordinary numeric exponentiation. Only the shown Python expressions are executed here.',
'Use base three and exponent two. Explain the XOR result through binary digits instead of treating it as a failed power calculation.',
'''assert pow(3, 2) == 9
assert (3 ^ 2) == 1''')

add(13, 'strings', 'A checked zero-based accessor rejects negative indices', '''
def checked_character(text, index):
    if not 0 <= index < len(text):
        raise IndexError('invalid zero-based index')
    return text[index]

text = 'ABC'
print('Python negative index:', text[-1])
print('Checked index two:', checked_character(text, 2))
try:
    checked_character(text, -1)
except IndexError:
    print('Negative index rejected by contract')
''', 'Python negative index: C\nChecked index two: C\nNegative index rejected by contract',
'Python sequence indexing accepts -1 as the final position, but this wrapper deliberately exposes only ordinary zero-based indices. That explicit contract helps when translating to interfaces that do not support Python-style negative indices. Native bounds and failure behavior still depend on the target language and container.',
'Test the empty string, index zero and index len(text). Keep external contract validation separate from Python internal indexing behavior.',
'''assert checked_character('A', 0) == 'A' ''')

add(13, 'matrices', 'Repeated rows and independently created rows', '''
shared_rows = [[0] * 3] * 2
separate_rows = [[0] * 3 for _ in range(2)]
shared_rows[0][1] = 7
separate_rows[0][1] = 7
print(shared_rows)
print(separate_rows)
print(shared_rows[0] is shared_rows[1])
print(separate_rows[0] is separate_rows[1])
''', '[[0, 7, 0], [0, 7, 0]]\n[[0, 7, 0], [0, 0, 0]]\nTrue\nFalse',
'Repeating the outer list repeats references to one row, whereas the comprehension constructs each row separately. The apparent matrix shape does not reveal this ownership difference. Porting numeric-array code to nested Python lists therefore requires checking aliasing as well as dimensions.',
'Replace an entire row instead of one entry and explain why that operation behaves differently in the shared-row construction.',
'''assert separate_rows[1] == [0, 0, 0]
assert shared_rows[1][1] == 7''')

add(13, 'matrices', 'Transposing rectangular real-valued data', '''
matrix = [[1, 2, 3], [4, 5, 6]]
transposed = [list(column) for column in zip(*matrix, strict=True)]
print(transposed)
print('Original shape:', len(matrix), len(matrix[0]))
print('Transposed shape:', len(transposed), len(transposed[0]))
print(matrix)
''', '[[1, 4], [2, 5], [3, 6]]\nOriginal shape: 2 3\nTransposed shape: 3 2\n[[1, 2, 3], [4, 5, 6]]',
'Unpacking the rectangular rows into zip collects matching column positions and strict=True rejects ragged rows. Converting each column tuple to a list constructs the transposed representation. This is an ordinary transpose of the supplied real data, with no complex conjugation or input mutation.',
'Use a three-by-two input, then try ragged rows. State an explicit policy before extending the function to an empty matrix.',
'''assert transposed[0] == [1, 4]
assert matrix == [[1, 2, 3], [4, 5, 6]]''')

# Twelve Week 14 studies combine parsing, contracts, numerical models and reports.
add(14, 'data', 'A measurement pipeline keeps times and rejection counts', '''
import csv
import io
import math

text = """time,value,unit
0,18,C
1,bad,C
3,22,C
4,300,K
"""
accepted = []
rejected = 0
for row in csv.DictReader(io.StringIO(text)):
    try:
        time_s = int(row['time'])
        value = float(row['value'])
        if row['unit'] == 'K':
            value -= 273.15
        elif row['unit'] != 'C':
            raise ValueError('unknown unit')
        if not math.isfinite(value):
            raise ValueError('nonfinite reading')
    except ValueError:
        rejected += 1
    else:
        accepted.append((time_s, value))
print('Accepted:', len(accepted), 'Rejected:', rejected)
print('Times:', [time for time, value in accepted])
print(f'Mean: {sum(value for time, value in accepted) / len(accepted):.2f} C')
''', 'Accepted: 3 Rejected: 1\nTimes: [0, 3, 4]\nMean: 22.28 C',
'The pipeline converts supported units before computing an ordinary sample mean. Each retained value stays paired with its original timestamp; rejection does not renumber time. The fixture has at least one accepted row and a known CSV schema. A sample mean is not automatically a time-weighted mean for irregular sampling.',
'Add an unsupported unit, a NaN and a case where every row is rejected. Specify the empty-report policy before calculating its mean.',
'''assert len(accepted) == 3 and rejected == 1
assert math.isclose(accepted[-1][1], 26.85, abs_tol=1e-12)''')

add(14, 'engineering', 'A schedule separates energy, peak power and cost', '''
def energy_kwh(power_w, duration_h):
    return power_w * duration_h / 1000

schedule = [('idle', 0, 2), ('pump', 500, 3), ('heater', 1500, 1)]
energy = sum(energy_kwh(power, duration) for name, power, duration in schedule)
peak = max(power for name, power, duration in schedule)
tariff = 0.20
print(f'Energy: {energy:.2f} kWh')
print(f'Peak power: {peak} W')
print(f'Cost: {energy * tariff:.2f} currency units')
print('Scheduled hours:', sum(duration for name, power, duration in schedule))
''', 'Energy: 3.00 kWh\nPeak power: 1500 W\nCost: 0.60 currency units\nScheduled hours: 6',
'The schedule describes successive, nonoverlapping phases with constant power within each phase. Energy sums power times duration after the watt-to-kilowatt conversion. Peak power and total energy answer different questions, and the flat tariff is an explicitly simplified billing model.',
'Add a second simultaneous device and explain why its peak cannot be found by treating overlapping phases as successive ones.',
'''assert energy_kwh(1000, 1) == 1
assert energy == 3.0
assert peak == 1500''')

add(14, 'engineering', 'A small design report converts mass before ranking cost', '''
volume_cm3 = 100
required_capacity = 10
candidates = [
    {'name': 'A', 'density_g_cm3': 2, 'capacity': 8, 'cost_per_kg': 30},
    {'name': 'B', 'density_g_cm3': 3, 'capacity': 12, 'cost_per_kg': 10},
    {'name': 'C', 'density_g_cm3': 4, 'capacity': 20, 'cost_per_kg': 15},
]
feasible = []
for row in candidates:
    mass_kg = row['density_g_cm3'] * volume_cm3 / 1000
    if row['capacity'] >= required_capacity:
        cost = mass_kg * row['cost_per_kg']
        feasible.append((cost, row['name'], mass_kg))
for cost, name, mass in sorted(feasible):
    print(f'{name}: {mass:.3f} kg, cost {cost:.2f}')
print('Selected:', min(feasible)[1] if feasible else None)
''', 'B: 0.300 kg, cost 3.00\nC: 0.400 kg, cost 6.00\nSelected: B',
'All candidate properties and capacities are fictional classroom inputs. Density times volume gives grams, which must be divided by 1000 before applying a per-kilogram cost. Feasibility is checked before cost ranking, and an explicit None result is available when no candidate qualifies.',
'Raise the required capacity beyond every candidate and test the empty feasible set. Add an independent dimensional check for a one-cubic-centimetre specimen.',
'''assert len(feasible) == 2
assert min(feasible) == (3.0, 'B', 0.3)''')

add(14, 'numerical', 'Fitting and checking a straight-line calibration', '''
def fit_line(xs, ys):
    if len(xs) != len(ys) or len(xs) < 2:
        raise ValueError('paired data required')
    x_mean, y_mean = sum(xs) / len(xs), sum(ys) / len(ys)
    denominator = sum((x - x_mean) ** 2 for x in xs)
    if denominator == 0:
        raise ValueError('distinct x values required')
    slope = sum((x - x_mean) * (y - y_mean) for x, y in zip(xs, ys)) / denominator
    return slope, y_mean - slope * x_mean

xs, ys = [0, 1, 2], [1, 3, 5]
slope, intercept = fit_line(xs, ys)
residuals = [y - (slope * x + intercept) for x, y in zip(xs, ys)]
print(f'Slope: {slope:.3f}, intercept: {intercept:.3f}')
print(f'Prediction at 3: {slope * 3 + intercept:.3f}')
print(f'Maximum absolute residual: {max(map(abs, residuals)):.3f}')
''', 'Slope: 2.000, intercept: 1.000\nPrediction at 3: 7.000\nMaximum absolute residual: 0.000',
'The centered least-squares formula fits the supplied exact line y = 2*x + 1. Paired lengths and a nonzero x spread are checked before division. Zero residual on this fixture confirms its known result; extrapolation accuracy and the suitability of a straight-line physical model need separate evidence.',
'Perturb one y value, inspect all residuals and add tests for unequal lengths and constant x data.',
'''assert fit_line([0, 2], [3, 7]) == (2.0, 3.0)
assert residuals == [0.0, 0.0, 0.0]''')

add(14, 'simulation', 'An Euler cooling model stops at a sampled threshold', '''
temperature = 28.0
ambient = 20.0
rate = 1.0
step_h = 0.5
threshold = 21.0
history = [temperature]
steps = 0
while temperature > threshold and steps < 20:
    temperature += -rate * (temperature - ambient) * step_h
    history.append(temperature)
    steps += 1
print(history)
print('Steps:', steps)
print(f'Sampled stopping time: {steps * step_h:.2f} h')
print('Threshold reached:', temperature <= threshold)
''', '[28.0, 24.0, 22.0, 21.0]\nSteps: 3\nSampled stopping time: 1.50 h\nThreshold reached: True',
'Each explicit Euler step uses the current temperature in a simplified cooling law. With rate*step = 0.5, the excess above ambient halves each step. The reported threshold time belongs to this discrete approximation and is not an exact continuous-model crossing time. The cap also provides a bounded failure path.',
'Halve the step and compare stopping times and temperature histories. Report separately whether stopping happened through the threshold or the cap.',
'''assert steps == 3
assert all(history[i + 1] <= history[i] for i in range(len(history) - 1))
assert history[-1] >= ambient''')

add(14, 'objects', 'Two sensor objects produce a common summary report', '''
class SensorLog:
    def __init__(self, name, gain=1, offset=0):
        self.name, self.gain, self.offset = name, gain, offset
        self._values = []

    def add(self, raw):
        self._values.append(self.gain * raw + self.offset)

    def summary(self):
        return len(self._values), sum(self._values) / len(self._values), max(self._values)

    def snapshot(self):
        return tuple(self._values)

first, second = SensorLog('A'), SensorLog('B', gain=2, offset=1)
for raw in [20, 22, 24]:
    first.add(raw)
for raw in [8, 10]:
    second.add(raw)
for log in [first, second]:
    count, mean, maximum = log.summary()
    print(f'{log.name}: n={count}, mean={mean:.1f}, max={maximum:.1f}')
''', 'A: n=3, mean=22.0, max=24.0\nB: n=2, mean=19.0, max=21.0',
'Each object owns its own history and calibration parameters. The same reporting client works with both logs and reads a returned summary rather than duplicated calculation code. Queries assume at least one accepted reading, and the tuple snapshot prevents direct appending into the stored flat numeric list.',
'Add finite-value validation and an explicit empty-summary policy. Test that changing one sensor does not change the other history.',
'''assert first.snapshot() == (20, 22, 24)
assert second.snapshot() == (17, 21)
assert first._values is not second._values''')

add(14, 'dicts', 'An inventory transfer preserves state on rejection', '''
def transfer(stock, source, destination, amount):
    if source == destination or source not in stock or destination not in stock:
        raise ValueError('two known distinct locations required')
    if type(amount) is not int or amount <= 0 or amount > stock[source]:
        raise ValueError('invalid amount')
    stock[source] -= amount
    stock[destination] += amount

stock = {'A': 5, 'B': 1}
transfer(stock, 'A', 'B', 3)
print(stock)
before = stock.copy()
try:
    transfer(stock, 'A', 'B', 4)
except ValueError:
    print('Rejected update preserved state:', stock == before)
print('Total items:', sum(stock.values()))
''', "{'A': 2, 'B': 4}\nRejected update preserved state: True\nTotal items: 6",
'All checks occur before either dictionary mutation. The accepted transfer preserves the total stock count, and the insufficient-stock request leaves both locations unchanged. Exact integer type checking intentionally excludes Boolean amounts in this interface.',
'Test a negative amount, True, a missing location and an exact-balance transfer. Check both the exception and unchanged state for every rejected request.',
'''assert stock == before
assert sum(stock.values()) == 6''')

add(14, 'data', 'A time-weighted mean does not bridge missing intervals', '''
measurements = [(0, 2), (1, None), (2, 4), (3, 6)]
integral = 0.0
covered_s = 0.0
for (left_t, left), (right_t, right) in zip(measurements, measurements[1:]):
    if left is None or right is None:
        continue
    duration = right_t - left_t
    integral += (left + right) / 2 * duration
    covered_s += duration
total_s = measurements[-1][0] - measurements[0][0]
mean = integral / covered_s if covered_s else None
print(f'Integrated reading: {integral:.1f} value*s')
print(f'Coverage: {covered_s:.1f} / {total_s:.1f} s')
print('Covered-interval mean:', mean)
''', 'Integrated reading: 5.0 value*s\nCoverage: 1.0 / 3.0 s\nCovered-interval mean: 5.0',
'Only adjacent pairs with both endpoint readings contribute under this missing-data policy. The valid interval from two to three seconds has trapezoidal integral five and duration one. Reporting the covered duration prevents presenting this covered-interval mean as evidence about the whole three-second period.',
'Compare with a policy that explicitly interpolates over the missing reading. Explain why the two policies answer different questions.',
'''assert covered_s == 1.0
assert integral == 5.0
assert mean == 5.0''')

add(14, 'numerical', 'Bisection reports an estimate, bound and status', '''
def bisect(function, low, high, tolerance, cap=100):
    if not low < high or tolerance <= 0:
        raise ValueError('ordered bounds and positive tolerance required')
    f_low, f_high = function(low), function(high)
    if f_low == 0:
        return low, 0.0, 0, True
    if f_high == 0:
        return high, 0.0, 0, True
    if f_low * f_high > 0:
        raise ValueError('sign bracket required')
    steps = 0
    while high - low > tolerance and steps < cap:
        middle = (low + high) / 2
        f_middle = function(middle)
        if f_middle == 0:
            return middle, 0.0, steps + 1, True
        if f_low * f_middle < 0:
            high = middle
        else:
            low, f_low = middle, f_middle
        steps += 1
    return (low + high) / 2, (high - low) / 2, steps, high - low <= tolerance

estimate, bound, steps, converged = bisect(lambda x: x * x - 2, 1.0, 2.0, 0.01)
print(f'Estimate: {estimate:.4f}')
print(f'Midpoint error bound: {bound:.6f}')
print('Steps:', steps, 'Converged:', converged)
''', 'Estimate: 1.4180\nMidpoint error bound: 0.003906\nSteps: 7 Converged: True',
'For a continuous function with finite evaluations and a maintained sign bracket, a midpoint is at most half the bracket width from a bracketed root, ignoring roundoff. Seven halvings meet the requested width tolerance in this fixture. Status distinguishes reaching that criterion from merely reaching the cap; a cap failure can still return a valid wider-bracket bound under the assumptions.',
'Set cap to two and compare the returned status and bound. Test an exact endpoint root and an interval without a sign bracket.',
'''import math
assert abs(estimate - math.sqrt(2)) <= bound
assert bisect(lambda x: x, 0, 1, 0.01) == (0, 0.0, 0, True)
assert bisect(lambda x: x * x - 2, 1.0, 2.0, 0.01, cap=2)[-1] is False''')

add(14, 'data', 'Histogram boundaries preserve every observation', '''
times_s = [0, 59, 60, 119, 120]
counts = {}
for time_s in times_s:
    minute = time_s // 60
    counts[minute] = counts.get(minute, 0) + 1
for minute in sorted(counts):
    print(f'[{minute * 60}, {(minute + 1) * 60}): {counts[minute]}')
print('Observations:', sum(counts.values()))
''', '[0, 60): 2\n[60, 120): 2\n[120, 180): 1\nObservations: 5',
'Nonnegative integer timestamps are assigned to half-open minute bins using floor division. Exact boundaries such as sixty seconds belong to the later bin. The final count sum checks that every supplied observation belongs to one bin exactly once.',
'Add times 179 and 180 and predict their bins. Define a different policy explicitly if negative timestamps are possible.',
'''assert counts == {0: 2, 1: 2, 2: 1}
assert sum(counts.values()) == len(times_s)''')

add(14, 'objects', 'A versioned report caches an immutable input snapshot', '''
class Report:
    def __init__(self, values):
        self._values = tuple(values)
        self.revision = 0
        self._cached = None
        self.computations = 0

    def replace(self, values):
        self._values = tuple(values)
        self.revision += 1
        self._cached = None

    def summary(self):
        if self._cached is None:
            values = self._values
            self._cached = (len(values), sum(values) / len(values), max(values) - min(values))
            self.computations += 1
        return self._cached

source = [2, 4]
report = Report(source)
source.append(100)
print('Revision', report.revision, report.summary())
report.summary()
print('Computations:', report.computations)
report.replace([1, 5, 9])
print('Revision', report.revision, report.summary())
print('Computations:', report.computations)
''', 'Revision 0 (2, 3.0, 2)\nComputations: 1\nRevision 1 (3, 5.0, 8)\nComputations: 2',
'The tuple constructor snapshots the flat numeric source, so a later external list append does not change stored inputs. A repeated query reuses a tuple result, while replace increments the revision and invalidates the cache. This fixture assumes nonempty finite numeric data and changes through the public interface.',
'Add validation before replace mutates anything and test that a rejected empty replacement preserves the previous revision, summary and cache.',
'''assert report.summary() == (3, 5.0, 8)
assert report.computations == 2
assert source == [2, 4, 100]''')

add(14, 'numerical', 'A refinement table compares with an analytical integral', '''
def trapezoid_square(panels):
    step = 1 / panels
    total = 0.5 * (0 ** 2 + 1 ** 2)
    for index in range(1, panels):
        total += (index * step) ** 2
    return step * total

exact = 1 / 3
errors = []
for panels in [1, 2, 4]:
    estimate = trapezoid_square(panels)
    error = abs(estimate - exact)
    errors.append(error)
    print(f'n={panels} estimate={estimate:.6f} error={error:.6f}')
print(f'First error ratio: {errors[0] / errors[1]:.1f}')
''', 'n=1 estimate=0.500000 error=0.166667\nn=2 estimate=0.375000 error=0.041667\nn=4 estimate=0.343750 error=0.010417\nFirst error ratio: 4.0',
'The trapezoidal rule approximates the integral of x squared on [0, 1], whose analytical value is one third. Halving the grid spacing reduces this fixture error by a factor of four. The observed pattern supports understanding of this smooth example and is not a universal error guarantee for arbitrary integrands or floating-point scales.',
'Add eight panels, then test a linear function for which the trapezoidal rule has an exact real-arithmetic result.',
'''import math
assert trapezoid_square(1) == 0.5
assert math.isclose(errors[0] / errors[1], 4.0, abs_tol=1e-12)
assert errors[2] < errors[1] < errors[0]''')


def build():
    expected_weeks = {1: 6, 2: 4, 3: 5, 4: 6, 5: 5, 6: 2, 7: 12, 8: 12, 9: 12, 10: 14, 11: 14, 12: 14, 13: 10, 14: 12}
    assert len(studies) == 128
    assert collections.Counter(p['week'] for p in studies) == expected_weeks
    topics = {'types', 'arithmetic', 'engineering', 'strings', 'decisions', 'for', 'while', 'functions', 'lists', 'dicts', 'recursion', 'testing', 'objects', 'algorithms', 'data', 'numerical', 'simulation', 'matrices'}
    export = r"""
const fs=require('fs'),vm=require('vm'),c=vm.createContext({});
vm.runInContext(['content.js','extended-practice.js','code-lab-bank.js','practice-bank.js','reading-bank.js','debugging-bank.js','first-half-bank.js','second-half-bank.js'].map(f=>fs.readFileSync('dist/'+f,'utf8')).join('\n')+';globalThis.rows={PROGRAMS,MCQS,EXERCISES,DEBUG_CASES};',c);
console.log(JSON.stringify(c.rows));
"""
    earlier = json.loads(subprocess.check_output(['node', '-e', export], cwd=ROOT))
    assert len([p for p in earlier['PROGRAMS'] if not p.get('reading')]) == 72
    existing = [p['code'] for p in earlier['PROGRAMS']] + [q['code'] for q in earlier['MCQS'] if q.get('code')]
    existing += [solution for case in earlier['DEBUG_CASES'] for solution in case['solutions']]
    for e in earlier['EXERCISES']:
        indent = e.get('indent', 4 if e['id'] in ['c4', 'c5'] else 0)
        existing.append('\n'.join([e['before'], ' ' * indent + e['answers'][0], e['after']]))
    signatures = set()
    for code in existing:
        try:
            signatures.add(ast.dump(ast.parse(code), include_attributes=False))
        except SyntaxError:
            pass  # Some MCQs supply an incomplete statement for discussion.
    for p in studies:
        assert p['topic'] in topics, p['id']
        signature = ast.dump(ast.parse(p['code'], feature_version=(3, 10)), include_attributes=False)
        assert signature not in signatures, ('duplicate complete program', p['id'])
        signatures.add(signature)
        assert len(p['explanation']) > 100 and len(p['tryIt']) > 40
        namespace, output = {}, io.StringIO()
        with contextlib.redirect_stdout(output):
            exec(compile(p['code'], p['id'], 'exec'), namespace)
        assert output.getvalue().rstrip('\n') == p['output'], (p['id'], output.getvalue(), p['output'])
        with contextlib.redirect_stdout(io.StringIO()) as checks:
            exec(compile(p['tests'], p['id'] + ' regression checks', 'exec'), namespace)
        assert not checks.getvalue(), p['id']
    target = ROOT / 'dist/program-studies-bank.js'
    target.write_text('// Original course-study additions. Existing programs and progress IDs remain unchanged.\nconst PROGRAM_STUDY_ADDITIONS = ' + json.dumps(studies, ensure_ascii=False, indent=2) + ';\nPROGRAMS.push(...PROGRAM_STUDY_ADDITIONS);\nconst COURSE_PROGRAMS = PROGRAMS.filter(p => !p.reading);\n', encoding='utf8')
    print('Built 128 unique original program studies; all reference outputs and regression assertions pass. Course collection: 200.')


if __name__ == '__main__':
    build()
