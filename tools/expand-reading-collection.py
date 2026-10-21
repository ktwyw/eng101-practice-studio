"""Add original chapter-aligned companions; retain all existing reading IDs."""
import contextlib, io, json, os, pathlib, subprocess, tempfile, textwrap
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
ROOT=pathlib.Path(__file__).resolve().parents[1]
export="const fs=require('fs'),vm=require('vm'),c=vm.createContext({});vm.runInContext('const PROGRAMS=[];'+fs.readFileSync('dist/reading-bank.js','utf8')+';globalThis.data={books:COURSE_READINGS,examples:READING_EXAMPLES};',c);console.log(JSON.stringify(c.data));"
data=json.loads(subprocess.check_output(['node','-e',export],cwd=ROOT))
base=[e for e in data['examples'] if not e['id'].startswith(('read-w-add-','read-g-add-'))]
assert len(base)==336
books={b['id']:b for b in data['books']};extra=[];reading='wang'
def add(chapter,topic,name,code,explanation,try_it,requirements=None,extension=False):
    number=1+sum(e['reading']==reading for e in extra)
    eid=f'read-{reading[0]}-add-{number:03}'
    code=textwrap.dedent(code).strip()
    assert 'assert ' in code,name
    out=io.StringIO();old=os.getcwd();plt.close('all');plt.rcdefaults()
    try:
        with tempfile.TemporaryDirectory(prefix='reading-new-') as td:
            os.chdir(td)
            with contextlib.redirect_stdout(out):exec(compile(code,'new-reading-example','exec'),{})
    finally:os.chdir(old)
    images=[]
    for index,num in enumerate(plt.get_fignums(),1):
        relative=f'assets/reading-examples/{eid}-{index}.svg'
        plt.figure(num).savefig(ROOT/'dist'/relative,bbox_inches='tight')
        images.append(relative)
    plt.close('all')
    book=books[reading];label='Wang course manuscript' if reading=='wang' else 'Guttag companion'
    extra.append(dict(id=eid,bank=reading,reading=reading,chapter=chapter,chapterTitle=book['chapters'][str(chapter)],topic=topic,name=name,source=f'{"Wang" if reading=="wang" else "Guttag"} · Ch. {chapter} · Additional companion {number}',note='Original companion aligned with the reading concepts. Instructor: Prof. Yanwei Wang'+(' · Optional extension' if extension else ''),code=code,output=out.getvalue().rstrip('\n'),questionIds=[],explanation=explanation,tryIt=try_it,requirements=requirements or [],origin='Newly written companion program; the chapter reference identifies the concept alignment, not copied textbook code.',extension=extension,images=images,week=None,readingLabel=label))
add(1,'engineering','Account for useful and input pumping power','''
    # A simplified steady pump model; all quantities are in SI units.
    density, gravity, flow, head = 1000, 9.81, 0.002, 8
    efficiency = 0.70
    useful_w = density * gravity * flow * head
    input_w = useful_w / efficiency
    print(f"Useful: {useful_w:.2f} W")
    print(f"Input: {input_w:.2f} W")
    assert abs(useful_w - 156.96) < 1e-10
    assert input_w > useful_w > 0
''','Useful hydraulic power follows density times gravity times volumetric flow times head. Dividing by efficiency accounts for losses; it does not multiply the useful demand by a percentage.','Halve the flow and predict both powers while keeping head and efficiency fixed.')
add(1,'engineering','Compare two dimensional estimates of travel time','''
    distance_km = 3.6
    speed_m_s = 12
    distance_m = distance_km * 1000
    seconds = distance_m / speed_m_s
    minutes = seconds / 60
    check_seconds = distance_km / (speed_m_s * 3.6) * 3600
    print(f"Time: {seconds:.0f} s = {minutes:.1f} min")
    assert seconds == 300
    assert abs(seconds - check_seconds) < 1e-10
''','Two consistent unit paths produce the same travel time. Naming the units helps detect a factor-of-1000 mistake before interpreting the result.','Change distance to 7.2 km and predict the minutes before running.')
add(2,'types','Parse a scientific-notation instrument record','''
    raw = " 2.50e-3 "
    flow_m3_s = float(raw.strip())
    flow_l_min = flow_m3_s * 1000 * 60
    report = f"{flow_l_min:.1f} L/min"
    print(type(flow_m3_s).__name__)
    print(report)
    assert abs(flow_l_min - 150) < 1e-12
    assert raw == " 2.50e-3 "
''','strip returns cleaned text and float recognizes scientific notation. The unit conversion multiplies cubic metres by 1000 litres and seconds by 60 per minute.','Replace the input by 1.25e-3 and predict the reported flow.')
add(2,'arithmetic','Keep displayed precision separate from stored values','''
    from decimal import Decimal
    binary_total = 0.1 + 0.2
    decimal_total = Decimal("0.1") + Decimal("0.2")
    print(f"Displayed binary total: {binary_total:.2f}")
    print("Exact decimal comparison:", decimal_total == Decimal("0.3"))
    print("Binary exact comparison:", binary_total == 0.3)
    assert decimal_total == Decimal("0.3")
    assert abs(binary_total - 0.3) < 1e-15
''','Formatting hides small binary representation differences without changing the stored value. Decimal constructed from strings represents these decimal fractions exactly.','Compare Decimal("0.1") with Decimal(0.1) and explain the different construction paths.')
add(3,'decisions','Make a three-zone temperature classifier','''
    def zone(celsius):
        if celsius < 10:
            return "cold"
        if celsius <= 30:
            return "normal"
        return "hot"
    inputs = [9.9, 10, 30, 30.1]
    labels = [zone(x) for x in inputs]
    print(labels)
    assert labels == ["cold", "normal", "normal", "hot"]
''','Ordered branches define a closed normal interval from 10 through 30. The four fixtures examine both boundaries and their immediate outside regions.','Change the contract so 30 belongs to hot, then update the boundary expectation.')
add(3,'decisions','Screen a rectangular operating envelope','''
    def allowed(temperature, pressure):
        return 20 <= temperature <= 80 and 100 <= pressure <= 300
    records = [(20,100), (80,300), (81,200), (40,99)]
    flags = [allowed(t,p) for t,p in records]
    print(flags)
    print("Accepted:", sum(flags))
    assert flags == [True, True, False, False]
''','Both independent intervals must hold. Chained comparisons make each inclusive boundary explicit, and conjunction combines the requirements. The limits are illustrative.','Add a record violating both limits and predict the accepted count.')
add(4,'for','Integrate flow readings over unequal time intervals','''
    times_s = [0, 2, 5, 9]
    flow_l_s = [1, 3, 3, 1]
    volume_l = 0.0
    for i in range(len(times_s)-1):
        dt = times_s[i+1] - times_s[i]
        volume_l += dt * (flow_l_s[i] + flow_l_s[i+1]) / 2
    print(f"Volume: {volume_l:.1f} L")
    assert volume_l == 21
''','Each trapezoid uses its own time width. Assuming a constant interval would give a different total for these uneven timestamps.','Change the last timestamp to 11 s and predict the increase in volume.')
add(4,'while','Iterate a contractive update with a bounded exit','''
    value, target = 0.0, 10.0
    tolerance, max_steps = 0.01, 30
    steps = 0
    while abs(value-target) > tolerance and steps < max_steps:
        value = (value+target)/2
        steps += 1
    converged = abs(value-target) <= tolerance
    print("Steps:", steps)
    print("Converged:", converged)
    print(f"Value: {value:.6f}")
    assert converged and steps == 10
''','The update halves the remaining error. A tolerance defines success, while a separate step cap gives a bounded unsuccessful path.','Reduce max_steps to 5 and explain the reported convergence flag.')
add(5,'dicts','Group sensor records without sharing lists','''
    records = [("A",18), ("B",21), ("A",22), ("B",25)]
    groups = {}
    for sensor, value in records:
        groups.setdefault(sensor, []).append(value)
    means = {key: sum(xs)/len(xs) for key,xs in groups.items()}
    print(groups)
    print(means)
    assert groups["A"] is not groups["B"]
    assert means == {"A":20.0, "B":23.0}
''','The first encounter of each key retains its own new list. Grouping before averaging prevents data from different sensors being combined accidentally.','Add a third sensor with one reading and predict its mean.')
add(5,'lists','Sort paired measurements without breaking alignment','''
    times, temperatures = [3,1,2], [30,10,20]
    assert len(times) == len(temperatures)
    paired = sorted(zip(times, temperatures))
    sorted_times = [t for t,_ in paired]
    sorted_values = [x for _,x in paired]
    print(sorted_times)
    print(sorted_values)
    assert paired == [(1,10),(2,20),(3,30)]
    assert times == [3,1,2]
''','Sorting whole records keeps each value attached to its timestamp. Sorting the two lists independently would destroy that relationship for general data.','Use values [12,35,19] with the same timestamps and predict the paired output.')
add(6,'plotting','Separate observations from a linear calibration','''
    import matplotlib.pyplot as plt
    voltage = [0, 1, 2, 3]
    observed = [1.1, 3.0, 5.2, 6.9]
    predicted = [1 + 2*x for x in voltage]
    residuals = [y-yhat for y,yhat in zip(observed,predicted)]
    fig, ax = plt.subplots()
    ax.scatter(voltage, observed, label="Observed")
    ax.plot(voltage, predicted, label="Calibration: 1 + 2V")
    ax.set(xlabel="Voltage (V)", ylabel="Response (units)", title="Calibration check")
    ax.legend(); ax.grid(alpha=0.25); fig.tight_layout()
    print("Residuals:", [round(r,2) for r in residuals])
    assert all(abs(a-b)<1e-12 for a,b in zip(residuals,[0.1,0,0.2,-0.1]))
''','Markers identify measurements, and the line identifies a stated model rather than an additional measurement. Signed residuals reveal departures from the calibration.','Increase the third observed response by 0.5 and predict which residual changes.',['matplotlib'])
add(6,'plotting','Show step-size refinement on labeled axes','''
    import matplotlib.pyplot as plt
    step_sizes = [1.0, 0.5, 0.25, 0.125]
    errors = [h*h/6 for h in step_sizes]
    fig, ax = plt.subplots()
    ax.loglog(step_sizes, errors, "o-")
    ax.set(xlabel="Step width (dimensionless)", ylabel="Absolute integral error", title="Trapezoidal rule for x squared on [0, 1]")
    ax.grid(True, which="both", alpha=0.25); fig.tight_layout()
    print("Error reduction:", [round(errors[i]/errors[i+1],1) for i in range(3)])
    assert all(abs(errors[i]/errors[i+1]-4)<1e-12 for i in range(3))
''','For this polynomial on this interval the trapezoidal error is exactly h squared divided by six. Halving h reduces the error by four; the plotted values are model-derived errors.','Replace errors with h/6 and predict the reduction ratios and log-log slope.',['matplotlib'])
add(7,'functions','Pass a model into a central-difference function','''
    def derivative(function, x, h):
        if h <= 0:
            raise ValueError("positive step required")
        return (function(x+h)-function(x-h))/(2*h)
    def square(x):
        return x*x
    estimate = derivative(square, 3, 0.01)
    print(f"Derivative: {estimate:.6f}")
    assert abs(estimate-6)<1e-10
''','A function parameter separates the differencing procedure from the chosen model. The quadratic fixture has known derivative 2x, providing an independent reference.','Use a cubic at x=2 and compare two positive step widths.')
add(7,'recursion','Reduce a nested numeric structure recursively','''
    def nested_sum(items):
        total = 0
        for item in items:
            total += nested_sum(item) if isinstance(item, list) else item
        return total
    data = [2, [3, [4]], [], 5]
    print(nested_sum(data))
    assert nested_sum(data) == 14
    assert nested_sum([]) == 0
    assert data == [2, [3, [4]], [], 5]
''','Each nested list becomes a smaller recursive subproblem. Empty lists contribute zero, and reading the structure does not mutate it.','Add a negative value inside the deepest list and predict the total.')
add(8,'testing','Test a scaling law with metamorphic checks','''
    def stress(force, area):
        if area <= 0:
            raise ValueError("positive area required")
        return force/area
    base = stress(120, 0.004)
    assert stress(240, 0.004) == 2*base
    assert stress(120, 0.008) == base/2
    assert stress(0, 0.004) == 0
    print(f"Baseline: {base:.0f} Pa")
    print("Three scaling checks passed")
''','The checks test relations implied by the formula, as well as a known zero case. Such relations complement independently calculated example values.','Add a check showing that scaling both force and area by the same positive factor preserves stress.')
add(8,'testing','Account for accepted and rejected conversions','''
    import math
    raw = ["2.5", "bad", "nan", "4.5"]
    accepted, rejected = [], []
    for text in raw:
        try:
            value = float(text)
            if not math.isfinite(value):
                raise ValueError("nonfinite")
        except ValueError:
            rejected.append(text)
        else:
            accepted.append(value)
    print("Accepted:", accepted)
    print("Rejected:", rejected)
    assert accepted == [2.5,4.5]
    assert len(accepted)+len(rejected) == len(raw)
''','The narrow handler covers both conversion failures and the explicit finite-value policy. Accounting for all records makes filtering visible instead of silently losing evidence.','Add an infinity string and predict both retained counts.')
add(9,'data','Aggregate duplicate timestamps deliberately','''
    rows = [(0,18), (1,20), (1,24), (2,22)]
    groups = {}
    for time,value in rows:
        groups.setdefault(time, []).append(value)
    merged = [(t,sum(xs)/len(xs)) for t,xs in sorted(groups.items())]
    print(merged)
    assert merged == [(0,18.0),(1,22.0),(2,22.0)]
    assert len(rows) == 4
''','Averaging duplicate-time readings is an explicit data policy, not an automatic consequence of sorting. Grouping preserves all contributing values until the merge is calculated.','Change the duplicate policy to retain the last reading and compare results.')
add(9,'data','Round-trip a CSV report entirely in memory','''
    import csv
    from io import StringIO
    rows = [{"sensor":"A, inlet", "value":"20.5"}, {"sensor":"B", "value":"21.0"}]
    buffer = StringIO()
    writer = csv.DictWriter(buffer, fieldnames=["sensor","value"])
    writer.writeheader(); writer.writerows(rows)
    buffer.seek(0)
    recovered = list(csv.DictReader(buffer))
    print(recovered[0]["sensor"])
    print(sum(float(r["value"]) for r in recovered))
    assert recovered == rows
''','The csv module handles the comma inside a sensor name through quoting. Re-reading the generated text checks the report schema without requiring a disk fixture.','Add a sensor name containing a quotation mark and predict whether the round-trip assertion still passes.')
add(10,'algorithms','Prepare prefix sums for repeated interval queries','''
    values = [3,1,4,1,5]
    prefix = [0]
    for value in values:
        prefix.append(prefix[-1]+value)
    def interval_sum(start, stop):
        return prefix[stop]-prefix[start]
    print(prefix)
    print("Entries 1 through 3:", interval_sum(1,4))
    assert interval_sum(1,4) == 6
    assert interval_sum(0,5) == 14
    assert interval_sum(2,2) == 0
''','One linear preparation pass supports constant-work sums over valid half-open index intervals. The leading zero makes intervals beginning at index zero use the same formula.','Compare the preparation cost with direct summation when only one interval is queried.')
add(10,'algorithms','Find the full duplicate range by binary boundaries','''
    from bisect import bisect_left, bisect_right
    ordered = [1,3,3,3,7,9]
    target = 3
    left = bisect_left(ordered,target)
    right = bisect_right(ordered,target)
    print("Equal range:", left, right)
    print("Count:", right-left)
    assert (left,right) == (1,4)
    assert ordered[left:right] == [3,3,3]
    assert bisect_right(ordered,5)-bisect_left(ordered,5) == 0
''','The two insertion boundaries bracket every entry equal to the target in sorted data. Their difference gives a count even when the target is absent.','Change the target to 9, then to 10, and predict both boundary pairs.')
add(11,'matrices','Solve a three-node balance and substitute it back','''
    import numpy as np
    # An illustrative linear balance, not a validated physical network.
    a = np.array([[2,-1,0],[-1,2,-1],[0,-1,2]], dtype=float)
    b = np.array([1,0,1], dtype=float)
    x = np.linalg.solve(a,b)
    residual = a@x-b
    print("Solution:", [round(v,6) for v in x.tolist()])
    print("Residual small:", bool(np.max(np.abs(residual)) < 1e-12))
    assert np.allclose(x,[1,1,1],rtol=0,atol=1e-12)
    assert np.allclose(a@x,b,rtol=0,atol=1e-12)
''','The solver finds three coupled unknowns. Multiplying the computed solution by the original coefficient matrix independently checks the balance equations.','Double b and predict the new solution before solving.',['numpy'])
add(11,'matrices','Measure a candidate solution’s residual','''
    import numpy as np
    a = np.array([[2.,1.],[1.,3.]])
    b = np.array([4.,7.])
    exact = np.array([1.,2.])
    perturbed = np.array([1.1,2.])
    errors = [float(np.linalg.norm(a@x-b, ord=np.inf)) for x in [exact,perturbed]]
    print("Residual norms:", [round(v,3) for v in errors])
    assert np.allclose(errors,[0,0.2],rtol=0,atol=1e-12)
''','A residual measures how well a candidate satisfies the stated equations. It is not automatically a bound on solution error; conditioning is a separate consideration.','Perturb the second component instead and predict the residual vector.',['numpy'])
add(12,'numerical','Interpolate within a checked piecewise interval','''
    from bisect import bisect_right
    def interpolate(x, knots, values):
        if not knots[0] <= x <= knots[-1]:
            raise ValueError("outside calibration")
        i = min(bisect_right(knots,x)-1, len(knots)-2)
        fraction = (x-knots[i])/(knots[i+1]-knots[i])
        return values[i]+fraction*(values[i+1]-values[i])
    knots, values = [0,10,20], [0,30,50]
    print(interpolate(15,knots,values))
    print(interpolate(20,knots,values))
    assert interpolate(15,knots,values) == 40
    assert interpolate(20,knots,values) == 50
    assert interpolate(0,knots,values) == 0
''','The contract assumes matching arrays and strictly increasing knots. The endpoint policy keeps the final knot in the last segment instead of indexing beyond the data.','Add an explicit test requiring ValueError for x=21.')
add(12,'numerical','Check trapezoidal refinement against an exact integral','''
    def trapezoid(n):
        h = 1/n
        total = 0.5*(0**2+1**2)
        total += sum((i*h)**2 for i in range(1,n))
        return h*total
    errors = []
    for n in [2,4,8]:
        estimate = trapezoid(n)
        error = abs(estimate-1/3)
        errors.append(error)
        print(n, f"{estimate:.6f}", f"{error:.6f}")
    assert all(abs(errors[i]/errors[i+1]-4)<1e-10 for i in range(2))
''','The exact integral of x squared over zero to one is one third. Independent reference knowledge reveals the fourfold error reduction when the number of panels doubles.','Use a linear integrand and explain why the trapezoidal error vanishes up to rounding.')
add(13,'simulation','Use each measured time step in a cooling update','''
    times = [0,0.5,1.5,2]
    temperature, ambient, rate = 80.0,20.0,0.1
    trajectory = [temperature]
    for old,new in zip(times,times[1:]):
        temperature += (new-old)*(-rate*(temperature-ambient))
        trajectory.append(temperature)
    print([round(t,3) for t in trajectory])
    assert all(abs(a-b)<1e-10 for a,b in zip(trajectory,[80,77,71.3,68.735]))
    assert all(ambient <= t <= 80 for t in trajectory)
''','Explicit Euler advances using the current temperature and the actual width of each interval. This trajectory is a numerical approximation under an illustrative cooling model.','Replace the time grid by equal half-second intervals and compare the final temperature.')
add(13,'simulation','Check logistic-growth bounds on a small time grid','''
    population, capacity, rate, dt = 10.0,100.0,0.2,0.5
    history = [population]
    for _ in range(5):
        population += dt*rate*population*(1-population/capacity)
        history.append(population)
    print("Trajectory:", [round(p,3) for p in history])
    print("Increasing:", all(a<b for a,b in zip(history,history[1:])))
    assert abs(history[1]-10.9)<1e-12
    assert all(0 < p < capacity for p in history)
''','The model’s growth rate declines as the population approaches capacity. Bounds checked on this small-step run are evidence for this run, not a guarantee for arbitrary Euler step sizes.','Increase dt substantially and inspect whether the same bounds still hold.')
add(14,'engineering','Find nondominated design alternatives','''
    # Both mass and cost are to be minimized.
    designs = [("A",2,8),("B",3,6),("C",4,9),("D",2,10)]
    def dominates(a,b):
        return a[1]<=b[1] and a[2]<=b[2] and (a[1]<b[1] or a[2]<b[2])
    frontier = [d[0] for d in designs if not any(dominates(other,d) for other in designs)]
    print("Frontier:", frontier)
    assert frontier == ["A","B"]
''','A design is dominated if another is no worse in both objectives and strictly better in at least one. The remaining frontier leaves the mass-cost tradeoff to an explicit decision policy.','Add a design with mass 1 and cost 12 and predict whether it joins the frontier.')
add(14,'engineering','Make a weighted decision policy explicit','''
    # Scores use stated reference scales, with lower values preferred.
    designs = [("A",2,80),("B",4,40),("C",3,60)]
    mass_reference, cost_reference = 4,80
    mass_weight, cost_weight = 0.75,0.25
    scores = [(name,mass_weight*mass/mass_reference+cost_weight*cost/cost_reference)
              for name,mass,cost in designs]
    winner = min(scores,key=lambda row:row[1])
    print([(name,round(score,3)) for name,score in scores])
    print("Selected:", winner[0])
    assert winner == ("A",0.625)
    assert mass_weight+cost_weight == 1
''','Normalization makes each weighted term dimensionless. The selected design depends on the disclosed scales and weights, rather than being a universal optimum.','Swap the two weights and predict the selected design.')
add(15,'objects','Expose a stable snapshot of object history','''
    class History:
        def __init__(self):
            self._values = []
        def add(self,value):
            self._values.append(value)
        def snapshot(self):
            return tuple(self._values)
    log = History(); log.add(2); log.add(4)
    before = log.snapshot()
    log.add(6)
    print("Before:", before)
    print("Now:", log.snapshot())
    assert before == (2,4) and log.snapshot() == (2,4,6)
''','The tuple snapshot preserves the flat numeric history at the time of the query. Later supported mutations change the object without changing the previously returned container.','Take two snapshots before and after another add and predict both values.')
add(15,'objects','Compose a sensor with a calibration object','''
    class Calibration:
        def __init__(self,gain,offset):
            self.gain,self.offset = gain,offset
        def apply(self,raw):
            return self.gain*raw+self.offset
    class Sensor:
        def __init__(self,calibration):
            self.calibration = calibration
        def read(self,raw):
            return self.calibration.apply(raw)
    sensor = Sensor(Calibration(2,1))
    print(sensor.read(3))
    assert sensor.read(3) == 7
    assert sensor.read(0) == 1
''','Composition separates the conversion rule from the object using it. The sensor depends on a small calibration interface rather than duplicating its arithmetic.','Use a different offset while preserving the Sensor class and predict the zero-input reading.')
add(16,'data','Package a reproducible result as JSON text','''
    import json
    values = [18,20,22]
    report = {"method":"arithmetic mean", "unit":"C", "count":len(values),
              "value":sum(values)/len(values), "source":"embedded fixture"}
    text = json.dumps(report,sort_keys=True)
    recovered = json.loads(text)
    print(text)
    assert recovered == report
    assert recovered["value"] == 20.0
''','A report records the result together with its method, units, sample count and source. JSON makes this small record machine-readable; it does not replace a complete provenance record.','Add a calibration version field and verify that the round-trip preserves it.')
add(16,'engineering','Record model assumptions beside a result','''
    def ideal_heat(mass_kg,capacity_j_kg_k,delta_k):
        return mass_kg*capacity_j_kg_k*delta_k
    assumptions = ("constant heat capacity", "no heat loss", "uniform temperature")
    energy_j = ideal_heat(2,4200,5)
    print(f"Ideal energy: {energy_j:.0f} J")
    for item in assumptions:
        print("Assumption:", item)
    assert energy_j == 42000
    assert ideal_heat(2,4200,0) == 0
''','The numerical calculation is only one part of the engineering argument. Stating simplifying assumptions prevents the ideal heat estimate from being presented as a complete real-system prediction.','Add a stated efficiency factor and distinguish delivered heat from required input energy.')
assert sum(e['reading']=='wang' for e in extra)==32
reading='guttag'
add(2,'types','Swap bindings with simultaneous assignment','''
    inlet, outlet = 12,27
    inlet, outlet = outlet,inlet
    print("Swapped:", inlet,outlet)
    old,new = 3,5
    old,new = new,old+new
    print("Updated pair:", old,new)
    assert (inlet,outlet) == (27,12)
    assert (old,new) == (5,8)
''','The right-hand expressions are evaluated using the old bindings before the targets are assigned. This permits a swap and a recurrence update without losing an input value.','Compare the recurrence with two sequential assignments and explain the changed result.')
add(2,'strings','Trace a reverse slice of a short label','''
    label = "ENG101"
    reverse = label[::-1]
    alternating = label[-1::-2]
    print(reverse)
    print(alternating)
    assert reverse == "101GNE"
    assert alternating == "11N"
    assert reverse[::-1] == label
''','A negative slice step walks toward smaller indices. The alternate reverse slice visits indices 5, 3 and 1, while reversing twice restores the original string.','Predict label[-2::-2] before running the modified slice.')
add(3,'numerical','Bracket a negative cube root without guessing its sign','''
    target = -27.0
    lo,hi = min(-1.0,target),max(1.0,target)
    for _ in range(80):
        mid = (lo+hi)/2
        if mid**3 < target:
            lo = mid
        else:
            hi = mid
    root = (lo+hi)/2
    print(f"Cube root: {root:.6f}")
    assert abs(root+3)<1e-10
    assert abs(root**3-target)<1e-8
''','The cube function is increasing on the real line, so the bracket updates work for a negative target too. The initial interval encloses its root and the iteration is bounded.','Use target 0.125 and predict the root and sign.')
add(3,'arithmetic','Evaluate a polynomial by Horner’s method','''
    def evaluate(coefficients,x):
        value = 0
        for coefficient in coefficients:
            value = value*x+coefficient
        return value
    coefficients = [2,-3,0,5]  # descending powers: 2x^3 - 3x^2 + 5
    result = evaluate(coefficients,2)
    print(result)
    assert result == 9
    assert evaluate(coefficients,0) == 5
    assert evaluate([],7) == 0
''','Horner’s recurrence reuses the accumulated value instead of separately computing every power. The coefficient order is part of the function contract.','Reverse the coefficient list and explain why it describes a different polynomial.')
add(4,'functions','Create a calibration closure with local state','''
    def make_calibration(gain,offset):
        def convert(raw):
            return gain*raw+offset
        return convert
    first = make_calibration(2,1)
    second = make_calibration(3,-2)
    print(first(4), second(4))
    assert first(4) == 9
    assert second(4) == 10
    assert first(0) == 1
''','Each returned function retains the enclosing gain and offset bindings. Two closures can therefore implement different conversions without global configuration.','Build a third calibration and predict its response at raw=0 and raw=1.')
add(4,'recursion','Count leaves of a nested binary structure','''
    def leaves(tree):
        if not isinstance(tree,tuple):
            return 1
        left,right = tree
        return leaves(left)+leaves(right)
    tree = (("A","B"),("C",("D","E")))
    print("Leaves:", leaves(tree))
    assert leaves(tree) == 5
    assert leaves("single") == 1
''','A non-tuple is a leaf under this deliberately narrow tree contract. Every internal node has exactly two children, so the recursive result adds disjoint subtree counts.','Replace one leaf with a pair and predict the new count.')
add(5,'lists','Combine mapping and filtering without changing raw data','''
    raw = [-2,0,3,5]
    calibrated = list(map(lambda x:2*x+1, filter(lambda x:x>=0,raw)))
    paired = list(zip(["A","B","C"],calibrated))
    print(calibrated)
    print(paired)
    assert calibrated == [1,7,11]
    assert raw == [-2,0,3,5]
''','Filtering defines which records remain, and mapping transforms only the retained values. Converting the iterators to lists exposes their concrete sequence for inspection.','Swap mapping and filtering and explain why a threshold on raw values differs from a threshold on calibrated values.')
add(5,'dicts','Invert a many-to-one mapping safely','''
    sensor_rooms = {"S1":"north", "S2":"south", "S3":"north"}
    room_sensors = {}
    for sensor,room in sensor_rooms.items():
        room_sensors.setdefault(room,[]).append(sensor)
    print(room_sensors)
    assert room_sensors == {"north":["S1","S3"],"south":["S2"]}
    assert sum(map(len,room_sensors.values())) == len(sensor_rooms)
''','An inverse relationship can have multiple sensors per room, so one scalar value per room would lose entries. Lists preserve each contributor and support an accounting check.','Add a fourth sensor in south and predict the inverse mapping.')
add(6,'testing','Test a sorter on reproducible generated fixtures','''
    import random
    from collections import Counter
    rng = random.Random(46)
    def insertion(values):
        result = values.copy()
        for i in range(1,len(result)):
            value,j = result[i],i-1
            while j>=0 and result[j]>value:
                result[j+1]=result[j]; j-=1
            result[j+1]=value
        return result
    for n in range(9):
        values = [rng.randrange(-3,4) for _ in range(n)]
        before = values.copy()
        result = insertion(values)
        assert result == sorted(values)
        assert Counter(result) == Counter(values) and values == before
    print("Nine fixture sizes passed")
''','A fixed local random generator makes the finite fixtures repeatable. An independent reference sorter, multiplicity check and input-preservation check test different aspects of the contract.','Add descending and all-equal hand-designed inputs rather than relying only on generated cases.')
add(6,'testing','Use reversal as a sum-preserving transformation','''
    from math import fsum
    values = [1e16,1.0,-1e16,2.0]
    forward = fsum(values)
    backward = fsum(reversed(values))
    print(forward,backward)
    assert forward == 3.0
    assert backward == 3.0
    assert values == [1e16,1.0,-1e16,2.0]
''','Reversal should preserve the mathematical sum. Accurate summation and a separately known result make this a useful rounding-sensitive test, while preserving the original input.','Replace fsum by a naive loop and inspect whether the same exact expectations hold.')
add(7,'testing','Use try-else to distinguish success from recovery','''
    def convert(raw):
        try:
            value = int(raw)
        except ValueError:
            return "invalid"
        else:
            return value*2
    results = [convert(x) for x in ["4","bad","-3"]]
    print(results)
    assert results == [8,"invalid",-6]
''','The else suite runs only after successful conversion. The handler is limited to the expected conversion error rather than hiding arbitrary failures in a whole workflow.','Add a string such as 4.5 and predict which path handles it.')
add(7,'testing','Check a bounded-mean postcondition','''
    def checked_mean(values):
        if not values:
            raise ValueError("nonempty input required")
        mean = sum(values)/len(values)
        assert min(values) <= mean <= max(values)
        return mean
    print(checked_mean([2,5,8]))
    print(checked_mean([-4,-2]))
    assert checked_mean([2,5,8]) == 5
    assert checked_mean([-4,-2]) == -3
''','For these bounded finite real fixtures, the mean lies between the extrema. An explicit empty-input failure is separate from the internal postcondition assertion.','Add tests for a singleton and for the documented empty-input exception.')
add(8,'objects','Give a record a deliberate ordering operation','''
    class Candidate:
        def __init__(self,name,cost):
            self.name,self.cost = name,cost
        def __lt__(self,other):
            return (self.cost,self.name) < (other.cost,other.name)
    candidates = [Candidate("B",5),Candidate("A",5),Candidate("C",3)]
    names = [c.name for c in sorted(candidates)]
    print(names)
    assert names == ["C","A","B"]
''','The ordering compares cost first and name second, providing an explicit tie policy. This example assumes comparisons are between Candidate objects.','Change the name tie breaker to preserve original tie order using a key-based stable sort instead.')
add(8,'objects','Iterate over bounded counter states','''
    class CounterRange:
        def __init__(self,stop):
            self.stop = stop
        def __iter__(self):
            for value in range(self.stop):
                yield value*value
    sequence = CounterRange(5)
    print(list(sequence))
    print(list(sequence))
    assert list(sequence) == [0,1,4,9,16]
    assert list(CounterRange(0)) == []
''','Each call to __iter__ creates a fresh generator, so the container can be traversed more than once. The squares are generated during iteration rather than stored in the object.','Compare this reusable object with one generator object consumed by two list calls.')
add(9,'algorithms','Count a triangular workload exactly','''
    def pair_count(n):
        count = 0
        for i in range(n):
            for j in range(i+1,n):
                count += 1
        return count
    for n in [4,8,16]:
        count = pair_count(n)
        print(n,count)
        assert count == n*(n-1)//2
    assert pair_count(0) == 0
''','The loop enumerates each unordered distinct pair once. Its exact count retains the lower-order term, while its tight growth is quadratic under the constant-cost increment model.','Predict the ratio between counts at n=16 and n=32 and explain why it is not exactly four.')
add(9,'algorithms','Expose copied prefixes in repeated concatenation','''
    result = []
    copied = 0
    for value in range(6):
        copied += len(result)+1
        result = result+[value]
    print("Result:", result)
    print("Element slots in concatenated results:", copied)
    assert result == [0,1,2,3,4,5]
    assert copied == 21
''','The selected accounting counts slots populated in each new concatenation result. The lengths 1 through 6 sum to 21, illustrating hidden growing-copy work rather than wall-clock timing.','Repeat for 12 values and compare the slot count with appending into one growing list.')
add(10,'algorithms','Count selection comparisons while preserving the input','''
    def selection(values):
        result = values.copy()
        comparisons = 0
        for i in range(len(result)-1):
            best = i
            for j in range(i+1,len(result)):
                comparisons += 1
                if result[j]<result[best]:
                    best = j
            result[i],result[best] = result[best],result[i]
        return result,comparisons
    raw = [5,2,4,1]
    ordered,count = selection(raw)
    print(ordered,count)
    assert ordered == [1,2,4,5] and count == 6
    assert raw == [5,2,4,1]
''','The algorithm scans each remaining suffix even when no swap is needed. Returning a copy and a selected comparison count makes both behavior and work visible.','Run the same algorithm on already sorted input and predict the comparison count.')
add(10,'algorithms','Merge tagged records with a stable tie rule','''
    def merge(left,right):
        out=[]; i=j=0
        while i<len(left) and j<len(right):
            if left[i][0] <= right[j][0]:
                out.append(left[i]); i+=1
            else:
                out.append(right[j]); j+=1
        return out+left[i:]+right[j:]
    left = [(1,"A"),(3,"B")]
    right = [(1,"C"),(2,"D")]
    combined = merge(left,right)
    print(combined)
    assert combined == [(1,"A"),(1,"C"),(2,"D"),(3,"B")]
    assert merge([],right) == right
''','Both input runs are ordered by their first field. Choosing the left entry on an equal key preserves the earlier run’s relative position and supports a stable merge-sort construction.','Change <= to < and predict the order of the two key-one records.')
add(12,'algorithms','Find a least-cost path with nonnegative edge weights','''
    from heapq import heappush,heappop
    graph = {"A":[("B",2),("C",5)],"B":[("C",1),("D",6)],"C":[("D",2)],"D":[]}
    queue=[(0,"A",("A",))]; settled=set()
    answer=None
    while queue:
        cost,node,path = heappop(queue)
        if node in settled:
            continue
        settled.add(node)
        if node=="D":
            answer=(cost,path); break
        for neighbor,weight in graph[node]:
            heappush(queue,(cost+weight,neighbor,path+(neighbor,)))
    print(answer)
    assert answer == (5,("A","B","C","D"))
''','This optional weighted-graph companion extends shortest-path ideas. With nonnegative edge costs, the least queued path to a newly settled node is optimal. The path costs are illustrative.','Increase the B-to-C edge cost to 10 and predict the best route.',extension=True)
add(12,'algorithms','Enumerate feasible knapsack subsets with an explicit tie policy','''
    from itertools import combinations
    items = [("A",2,5),("B",3,6),("C",4,8)]
    capacity=5
    choices=[]
    for size in range(len(items)+1):
        for subset in combinations(items,size):
            weight=sum(item[1] for item in subset)
            value=sum(item[2] for item in subset)
            if weight<=capacity:
                choices.append((value,-weight,tuple(item[0] for item in subset)))
    best=max(choices)
    print("Selected:", best[2], "Value:", best[0])
    assert best == (11,-5,("A","B"))
''','Exhaustive enumeration is practical for this tiny fixture and gives a reference optimum. The ranking maximizes value, then prefers lower weight, then uses tuple ordering for any remaining tie.','Reduce capacity to four and predict the selected subset.')
add(13,'algorithms','Memoize the fewest coins for a small target','''
    from functools import lru_cache
    coins=(1,3,4)
    @lru_cache(None)
    def fewest(amount):
        if amount==0:
            return 0
        return 1+min(fewest(amount-c) for c in coins if c<=amount)
    results=[fewest(a) for a in range(8)]
    print(results)
    assert results == [0,1,2,1,1,2,2,2]
    assert fewest(6) == 2
''','The target amount is the cache key and the fixed coin tuple is part of the enclosing problem. A value-one coin guarantees reachability; each positive choice reduces the amount.','Compare the optimal result at six with a greedy largest-coin-first choice.',extension=True)
add(13,'algorithms','Build an edit-distance table for two short strings','''
    def distance(a,b):
        table=[[0]*(len(b)+1) for _ in range(len(a)+1)]
        for i in range(len(a)+1): table[i][0]=i
        for j in range(len(b)+1): table[0][j]=j
        for i in range(1,len(a)+1):
            for j in range(1,len(b)+1):
                replace=table[i-1][j-1]+(a[i-1]!=b[j-1])
                table[i][j]=min(table[i-1][j]+1,table[i][j-1]+1,replace)
        return table[-1][-1]
    print(distance("cat","cut"))
    print(distance("pump","pumps"))
    assert distance("cat","cut") == 1
    assert distance("pump","pumps") == 1
    assert distance("","abc") == 3
''','This optional dynamic-programming application reuses overlapping prefix subproblems. The first row and column encode the cost of insertion into or deletion from an empty string.','Predict the distance from cat to cats and from cat to cat.',extension=True)
add(14,'simulation','Track a seeded walk on a two-dimensional grid','''
    import random
    rng=random.Random(714)
    x=y=0
    moves=[(1,0),(-1,0),(0,1),(0,-1)]
    n=40
    for _ in range(n):
        dx,dy=rng.choice(moves)
        x+=dx; y+=dy
    squared_displacement=x*x+y*y
    print("Position:", (x,y))
    print("Squared displacement:", squared_displacement)
    assert abs(x)+abs(y)<=n
    assert (x+y)%2 == n%2
''','Each step changes exactly one coordinate by one. The invariants constrain possible final positions, while a fixed local seed makes this particular trajectory reproducible.','Double the number of steps and explain why the displacement need not double.')
add(14,'simulation','Reflect attempted steps at a finite walk boundary','''
    import random
    rng=random.Random(42)
    position=0; limit=3; visited=[position]
    for _ in range(30):
        step=rng.choice([-1,1])
        candidate=position+step
        position=candidate if abs(candidate)<=limit else position-step
        visited.append(position)
    print("Final:", position)
    print("Visited range:", min(visited),max(visited))
    assert all(-limit<=p<=limit for p in visited)
    assert all(abs(a-b)==1 for a,b in zip(visited,visited[1:]))
''','Reflection is a stated boundary model: an outward step at an endpoint becomes an inward step. It differs from stopping or remaining at the endpoint.','Replace reflection with staying put and compare which step-size invariant changes.',extension=True)
add(15,'simulation','Calculate a posterior probability before sampling','''
    from fractions import Fraction
    prevalence=Fraction(1,100)
    sensitivity=Fraction(9,10)
    false_positive=Fraction(1,20)
    positive=prevalence*sensitivity+(1-prevalence)*false_positive
    posterior=prevalence*sensitivity/positive
    print("Posterior fraction:", posterior)
    print(f"Posterior probability: {float(posterior):.6f}")
    assert posterior == Fraction(2,13)
''','Bayes’ rule accounts for true and false positives in the same population. These invented probabilities are a classroom base-rate example, not medical guidance.','Increase prevalence to one tenth and predict the direction of the posterior change.')
add(15,'simulation','Check a Bernoulli sample against exact moments','''
    import random
    rng=random.Random(151)
    probability=0.3; n=1000
    outcomes=[rng.random()<probability for _ in range(n)]
    successes=sum(outcomes)
    expected=n*probability
    variance=n*probability*(1-probability)
    print("Observed successes:", successes)
    print("Expected count:", expected)
    print("Count variance:", variance)
    assert 0<=successes<=n
    assert expected == 300 and variance == 210
''','The expectation and variance describe repeated independent samples under the stated Bernoulli model. A single seeded realization need not equal its expectation.','Change n to 100 and distinguish the count variance from the variance of the sample proportion.')
add(15,'simulation','Enumerate a small occupancy probability exactly','''
    from itertools import product
    from fractions import Fraction
    assignments=list(product(range(3),repeat=3))
    all_distinct=sum(len(set(outcome))==3 for outcome in assignments)
    probability=Fraction(all_distinct,len(assignments))
    print("Distinct assignments:", all_distinct)
    print("Probability:", probability)
    assert len(assignments)==27
    assert probability == Fraction(2,9)
''','The sample space has 27 equally likely labeled assignments under independent uniform choices. Exactly six assignments place the three objects in distinct bins.','Predict the probability that at least two objects share a bin.')
add(15,'simulation','Distinguish conditional and joint frequencies','''
    outcomes=[("A","pass"),("A","fail"),("A","pass"),("B","pass")]
    a_count=sum(group=="A" for group,status in outcomes)
    a_pass=sum(group=="A" and status=="pass" for group,status in outcomes)
    conditional=a_pass/a_count
    joint=a_pass/len(outcomes)
    print(f"P(pass | A): {conditional:.3f}")
    print(f"P(A and pass): {joint:.3f}")
    assert a_count==3 and a_pass==2
    assert joint==0.5 and abs(conditional-2/3)<1e-12
''','Conditional frequency uses only group A as its denominator, while joint frequency uses all observations. Stating the event and population prevents an ambiguous probability claim.','Add a B failure and predict which reported quantity stays unchanged.')
add(16,'simulation','Estimate an integral with uniform Monte Carlo samples','''
    import math,random
    rng=random.Random(1601)
    n=1000
    estimate=sum(math.exp(-rng.random()) for _ in range(n))/n
    exact=1-math.exp(-1)
    print(f"Estimate: {estimate:.6f}")
    print(f"Exact: {exact:.6f}")
    print(f"Absolute error: {abs(estimate-exact):.6f}")
    assert 0<estimate<1
    assert abs(exact-0.6321205588285577)<1e-14
''','A uniform sample average estimates the integral of exp(-x) on zero to one because the interval width is one. The analytic integral provides a separate reference; the realized error is sample-specific.','Use 100 samples and explain why fewer samples do not guarantee a larger realized error.')
add(16,'simulation','Stratify samples across an integration interval','''
    import random
    rng=random.Random(1602)
    strata=100
    points=[(i+rng.random())/strata for i in range(strata)]
    estimate=sum(x*x for x in points)/strata
    print(f"Stratified estimate: {estimate:.6f}")
    print(f"Error against 1/3: {abs(estimate-1/3):.6f}")
    assert all(i/strata <= x < (i+1)/strata for i,x in enumerate(points))
    assert 0<estimate<1
''','This optional sampling companion places one point in each equal subinterval, ensuring spatial coverage. Its output is one realization, not a proof that it beats every plain Monte Carlo run.','Replace the random point in each stratum by its midpoint and compare the method and error.',extension=True)
add(16,'simulation','Repeat sample means with a local random generator','''
    import random,statistics
    rng=random.Random(1603)
    means=[statistics.mean(rng.random() for _ in range(20)) for _ in range(50)]
    grand=statistics.mean(means)
    theoretical_sd=(1/(12*20))**0.5
    print(f"Mean of sample means: {grand:.6f}")
    print(f"Observed sample SD: {statistics.stdev(means):.6f}")
    print(f"Theoretical SD of a mean: {theoretical_sd:.6f}")
    assert len(means)==50 and all(0<=m<1 for m in means)
    assert abs(theoretical_sd-(1/240)**0.5)<1e-15
''','Independent uniform draws have variance one twelfth, so a twenty-draw mean has variance one over 240. Fifty observed means illustrate variability around the theoretical center without guaranteeing an exact match.','Increase the number of draws per mean by a factor of four and predict the theoretical SD factor.')
add(16,'simulation','Build a Monte Carlo tail estimate with an exact reference','''
    import random
    from fractions import Fraction
    rng=random.Random(1604)
    trials=2000
    successes=0
    for _ in range(trials):
        rolls=[rng.randrange(1,7) for _ in range(2)]
        successes += sum(rolls)>=10
    estimate=successes/trials
    exact=Fraction(6,36)
    print(f"Estimated P(sum >= 10): {estimate:.4f}")
    print("Exact probability:", exact)
    assert sum(a+b>=10 for a in range(1,7) for b in range(1,7)) == 6
    assert exact == Fraction(1,6)
    assert 0<=estimate<=1
''','There are six successful ordered pairs among 36 equally likely two-die outcomes. Simulation estimates the same event using repeated draws, while enumeration supplies the independent exact probability.','Change the event to sum >= 11 and derive its exact probability before sampling.')
assert sum(e['reading']=='guttag' for e in extra)==32
assert len(extra)==64
examples=base+extra
assert len(examples)==400
assert sum(e['reading']=='wang' for e in examples)==320
assert sum(e['reading']=='guttag' for e in examples)==80
assert len({e['id'] for e in examples})==400
assert len({e['code'] for e in examples})==400
(ROOT/'dist/reading-bank.js').write_text('/* Reading adaptations and original chapter-aligned companions, identified individually. */\nconst COURSE_READINGS = '+json.dumps(data['books'],ensure_ascii=False,indent=2)+';\nconst READING_EXAMPLES = '+json.dumps(examples,ensure_ascii=False,indent=2)+';\nPROGRAMS.push(...READING_EXAMPLES);\n',encoding='utf8')
print('Built 400 reading examples: 320 Wang and 80 Guttag; all 64 additions executed with assertions; two new reference plots.')
