// ── Farmers Insurance Demo — 10 Unique Customer Profiles ──
// Selected by last digit of phone number (0–9)
// Usage: const profile = DEMO_PROFILES[lastDigit];

// ── Date Formatting Helpers ──

// Add/subtract days from today
function _daysFromNow(offset) {
  var d = new Date();
  d.setDate(d.getDate() + offset);
  return d;
}

var _MONTHS_SHORT = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var _MONTHS_LONG  = ['January','February','March','April','May','June','July','August','September','October','November','December'];

// "Mar 1, 2025"
function _fmtShort(d) {
  return _MONTHS_SHORT[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
}

// "March 1, 2025"
function _fmtLong(d) {
  return _MONTHS_LONG[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
}

// "03/01/2025"
function _fmtSlash(d) {
  var mm = String(d.getMonth() + 1).padStart(2, '0');
  var dd = String(d.getDate()).padStart(2, '0');
  return mm + '/' + dd + '/' + d.getFullYear();
}

// "03/01/25"
function _fmtSlashBrief(d) {
  var mm = String(d.getMonth() + 1).padStart(2, '0');
  var dd = String(d.getDate()).padStart(2, '0');
  return mm + '/' + dd + '/' + String(d.getFullYear()).slice(-2);
}

// ── Profile Data ──

const DEMO_PROFILES = [
  // ── Profile 0 ──────────────────────────────────────────
  {
    firstName: 'Maria', lastName: 'Santos', email: 'maria.santos@email.com',
    chatEmail: 'maria.santos@farmers.com', location: 'Phoenix, AZ', memberSinceYearsAgo: 4,
    vehicle: { year: '2023', make: 'Honda', model: 'Civic', trim: 'EX', color: 'Sonic Gray',
      body: '4-door Sedan', vin: '2HGFE2F59PH524130' },
    policy: { number: 'AZ-1234-5670-A', status: 'ACTIVE',
      startDaysAgo: 153, durationDays: 184,
      premium6Mo: '$682.00', premium6MoShort: '$682', monthly: '$113.67' },
    coverage: { bodilyInjury: '$50K / $100K', propertyDamage: '$50,000',
      medicalPay: '$5,000', comprehensive: '$250 Ded.', comprehensiveFull: '$250 Deductible',
      collision: '$500 Ded.', collisionFull: '$500 Deductible',
      umUim: '$50K / $100K', rental: '$30/day · $900 max',
      roadside: '24 / 7 Included', roadsideBrief: 'Included', rideshare: 'Not Added' },
    payment: { amount: '$113.67', nextDays: 18, cycleDays: 30, historyCount: 5,
      card: 'Mastercard ending in 7832', cardShort: 'Mastercard ···· 7832',
      breakdown: { bi: '$32.10', comp: '$14.80', coll: '$35.22', um: '$8.55', roadside: '$4.00', fees: '$19.00' } },
    claims: [
      { title: 'Parking Lot Scratch — Driver Door', number: 'AZ-44210', daysAgo: 350, amount: '$620', label: 'Estimate', status: 'In Review' }
    ],
    agent: { name: 'Sarah Johnson', phone: '(602) 555-0142' }
  },

  // ── Profile 1 ──────────────────────────────────────────
  {
    firstName: 'James', lastName: 'Mitchell', email: 'james.mitchell@email.com',
    chatEmail: 'james.mitchell@farmers.com', location: 'Dallas, TX', memberSinceYearsAgo: 7,
    vehicle: { year: '2022', make: 'Ford', model: 'F-150', trim: 'XLT', color: 'Oxford White',
      body: 'Crew Cab Truck', vin: '1FTFW1E85NFA32847' },
    policy: { number: 'TX-2345-6781-B', status: 'ACTIVE',
      startDaysAgo: 181, durationDays: 181,
      premium6Mo: '$894.00', premium6MoShort: '$894', monthly: '$149.00' },
    coverage: { bodilyInjury: '$100K / $300K', propertyDamage: '$100,000',
      medicalPay: '$10,000', comprehensive: '$500 Ded.', comprehensiveFull: '$500 Deductible',
      collision: '$500 Ded.', collisionFull: '$500 Deductible',
      umUim: '$100K / $300K', rental: '$50/day · $1,500 max',
      roadside: '24 / 7 Included', roadsideBrief: 'Included', rideshare: 'Not Added' },
    payment: { amount: '$149.00', nextDays: 12, cycleDays: 30, historyCount: 5,
      card: 'Visa ending in 4291', cardShort: 'Visa ···· 4291',
      breakdown: { bi: '$52.40', comp: '$22.10', coll: '$42.50', um: '$12.00', roadside: '$7.50', fees: '$12.50' } },
    claims: [
      { title: 'Deer Collision — Front End', number: 'TX-71205', daysAgo: 485, amount: '$4,250', label: 'Paid', status: 'Closed' },
      { title: 'Hail Damage — Hood & Roof', number: 'TX-58930', daysAgo: 780, amount: '$3,100', label: 'Paid', status: 'Closed' }
    ],
    agent: { name: 'Mike Torres', phone: '(214) 555-0198' }
  },

  // ── Profile 2 ──────────────────────────────────────────
  {
    firstName: 'Aisha', lastName: 'Patel', email: 'aisha.patel@email.com',
    chatEmail: 'aisha.patel@farmers.com', location: 'Austin, TX', memberSinceYearsAgo: 2,
    vehicle: { year: '2024', make: 'Tesla', model: 'Model 3', trim: 'Long Range', color: 'Midnight Silver',
      body: '4-door Sedan', vin: '5YJ3E1EA5RF123456' },
    policy: { number: 'TX-3456-7892-C', status: 'ACTIVE',
      startDaysAgo: 122, durationDays: 183,
      premium6Mo: '$968.00', premium6MoShort: '$968', monthly: '$161.33' },
    coverage: { bodilyInjury: '$250K / $500K', propertyDamage: '$100,000',
      medicalPay: '$10,000', comprehensive: '$1,000 Ded.', comprehensiveFull: '$1,000 Deductible',
      collision: '$1,000 Ded.', collisionFull: '$1,000 Deductible',
      umUim: '$250K / $500K', rental: '$50/day · $1,500 max',
      roadside: '24 / 7 Included', roadsideBrief: 'Included', rideshare: 'Added' },
    payment: { amount: '$161.33', nextDays: 25, cycleDays: 30, historyCount: 4,
      card: 'Amex ending in 3156', cardShort: 'Amex ···· 3156',
      breakdown: { bi: '$58.20', comp: '$28.40', coll: '$44.73', um: '$14.00', roadside: '$6.00', fees: '$10.00' } },
    claims: [],
    agent: { name: 'David Chen', phone: '(512) 555-0277' }
  },

  // ── Profile 3 ──────────────────────────────────────────
  {
    firstName: 'Robert', lastName: 'Garcia', email: 'robert.garcia@email.com',
    chatEmail: 'robert.garcia@farmers.com', location: 'Houston, TX', memberSinceYearsAgo: 5,
    vehicle: { year: '2021', make: 'Chevrolet', model: 'Equinox', trim: 'LT', color: 'Mosaic Black',
      body: 'SUV', vin: '3GNAXKEV0MS604215' },
    policy: { number: 'TX-4567-8903-D', status: 'ACTIVE',
      startDaysAgo: 153, durationDays: 181,
      premium6Mo: '$724.00', premium6MoShort: '$724', monthly: '$120.67' },
    coverage: { bodilyInjury: '$50K / $100K', propertyDamage: '$50,000',
      medicalPay: '$5,000', comprehensive: '$500 Ded.', comprehensiveFull: '$500 Deductible',
      collision: '$500 Ded.', collisionFull: '$500 Deductible',
      umUim: '$50K / $100K', rental: '$30/day · $900 max',
      roadside: '24 / 7 Included', roadsideBrief: 'Included', rideshare: 'Not Added' },
    payment: { amount: '$120.67', nextDays: 30, cycleDays: 30, historyCount: 5,
      card: 'Visa ending in 9104', cardShort: 'Visa ···· 9104',
      breakdown: { bi: '$34.20', comp: '$15.80', coll: '$37.67', um: '$9.00', roadside: '$4.50', fees: '$19.50' } },
    claims: [
      { title: 'Side Mirror Hit — Parking Garage', number: 'TX-62041', daysAgo: 665, amount: '$450', label: 'Paid', status: 'Closed' }
    ],
    agent: { name: 'Lisa Patel', phone: '(713) 555-0365' }
  },

  // ── Profile 4 ──────────────────────────────────────────
  {
    firstName: 'Emily', lastName: 'Thornton', email: 'emily.thornton@email.com',
    chatEmail: 'emily.thornton@farmers.com', location: 'Scottsdale, AZ', memberSinceYearsAgo: 8,
    vehicle: { year: '2020', make: 'BMW', model: '330i', trim: 'xDrive', color: 'Alpine White',
      body: '4-door Sedan', vin: 'WBA5R1C08LFH92034' },
    policy: { number: 'AZ-5678-9014-E', status: 'ACTIVE',
      startDaysAgo: 92, durationDays: 184,
      premium6Mo: '$1,124.00', premium6MoShort: '$1,124', monthly: '$187.33' },
    coverage: { bodilyInjury: '$100K / $300K', propertyDamage: '$100,000',
      medicalPay: '$10,000', comprehensive: '$500 Ded.', comprehensiveFull: '$500 Deductible',
      collision: '$500 Ded.', collisionFull: '$500 Deductible',
      umUim: '$100K / $300K', rental: '$50/day · $1,500 max',
      roadside: '24 / 7 Included', roadsideBrief: 'Included', rideshare: 'Not Added' },
    payment: { amount: '$187.33', nextDays: 14, cycleDays: 30, historyCount: 3,
      card: 'Mastercard ending in 2847', cardShort: 'Mastercard ···· 2847',
      breakdown: { bi: '$62.80', comp: '$32.50', coll: '$55.03', um: '$15.00', roadside: '$8.00', fees: '$14.00' } },
    claims: [
      { title: 'Rear-End Collision — Bumper & Trunk', number: 'AZ-91002', daysAgo: 105, amount: '$3,200', label: 'Estimate', status: 'In Review' },
      { title: 'Rock Chip — Windshield', number: 'AZ-73841', daysAgo: 670, amount: '$285', label: 'Paid', status: 'Closed' },
      { title: 'Vandalism — Keyed Panels', number: 'AZ-51090', daysAgo: 1245, amount: '$1,950', label: 'Paid', status: 'Closed' }
    ],
    agent: { name: 'Robert Kim', phone: '(480) 555-0419' }
  },

  // ── Profile 5 ──────────────────────────────────────────
  {
    firstName: 'Daniel', lastName: 'Nguyen', email: 'daniel.nguyen@email.com',
    chatEmail: 'daniel.nguyen@farmers.com', location: 'Denver, CO', memberSinceYearsAgo: 3,
    vehicle: { year: '2023', make: 'Hyundai', model: 'Tucson', trim: 'SEL', color: 'Amazon Gray',
      body: 'SUV', vin: '5NMJFDAF2PH108723' },
    policy: { number: 'CO-6789-0125-F', status: 'ACTIVE',
      startDaysAgo: 61, durationDays: 183,
      premium6Mo: '$698.00', premium6MoShort: '$698', monthly: '$116.33' },
    coverage: { bodilyInjury: '$100K / $300K', propertyDamage: '$50,000',
      medicalPay: '$5,000', comprehensive: '$250 Ded.', comprehensiveFull: '$250 Deductible',
      collision: '$500 Ded.', collisionFull: '$500 Deductible',
      umUim: '$100K / $300K', rental: '$40/day · $1,200 max',
      roadside: '24 / 7 Included', roadsideBrief: 'Included', rideshare: 'Not Added' },
    payment: { amount: '$116.33', nextDays: 45, cycleDays: 30, historyCount: 3,
      card: 'Visa ending in 5563', cardShort: 'Visa ···· 5563',
      breakdown: { bi: '$38.80', comp: '$15.50', coll: '$32.03', um: '$10.00', roadside: '$5.00', fees: '$15.00' } },
    claims: [],
    agent: { name: 'Maria Gonzalez', phone: '(303) 555-0588' }
  },

  // ── Profile 6 ──────────────────────────────────────────
  {
    firstName: 'Jennifer', lastName: 'Brooks', email: 'jennifer.brooks@email.com',
    chatEmail: 'jennifer.brooks@farmers.com', location: 'Portland, OR', memberSinceYearsAgo: 9,
    vehicle: { year: '2019', make: 'Subaru', model: 'Outback', trim: 'Premium', color: 'Crystal White',
      body: 'Wagon', vin: '4S4BSANC7K3347291' },
    policy: { number: 'OR-7890-1236-G', status: 'ACTIVE',
      startDaysAgo: 107, durationDays: 183,
      premium6Mo: '$652.00', premium6MoShort: '$652', monthly: '$108.67' },
    coverage: { bodilyInjury: '$50K / $100K', propertyDamage: '$50,000',
      medicalPay: '$5,000', comprehensive: '$500 Ded.', comprehensiveFull: '$500 Deductible',
      collision: '$500 Ded.', collisionFull: '$500 Deductible',
      umUim: '$50K / $100K', rental: '$30/day · $900 max',
      roadside: '24 / 7 Included', roadsideBrief: 'Included', rideshare: 'Not Added' },
    payment: { amount: '$108.67', nextDays: 8, cycleDays: 30, historyCount: 3,
      card: 'Discover ending in 4401', cardShort: 'Discover ···· 4401',
      breakdown: { bi: '$30.20', comp: '$14.00', coll: '$33.47', um: '$8.00', roadside: '$4.00', fees: '$19.00' } },
    claims: [
      { title: 'Tree Branch Damage — Roof', number: 'OR-38910', daysAgo: 510, amount: '$1,800', label: 'Paid', status: 'Closed' },
      { title: 'Fender Bender — Intersection', number: 'OR-22045', daysAgo: 1380, amount: '$2,100', label: 'Paid', status: 'Closed' }
    ],
    agent: { name: 'James Wilson', phone: '(503) 555-0623' }
  },

  // ── Profile 7 ──────────────────────────────────────────
  {
    firstName: 'Marcus', lastName: 'Williams', email: 'marcus.williams@email.com',
    chatEmail: 'marcus.williams@farmers.com', location: 'Nashville, TN', memberSinceYearsAgo: 1,
    vehicle: { year: '2024', make: 'Kia', model: 'Telluride', trim: 'SX', color: 'Everlasting Silver',
      body: 'SUV', vin: '5XYP5DHC4RG201847' },
    policy: { number: 'TN-8901-2347-H', status: 'ACTIVE',
      startDaysAgo: 138, durationDays: 184,
      premium6Mo: '$856.00', premium6MoShort: '$856', monthly: '$142.67' },
    coverage: { bodilyInjury: '$100K / $300K', propertyDamage: '$100,000',
      medicalPay: '$5,000', comprehensive: '$1,000 Ded.', comprehensiveFull: '$1,000 Deductible',
      collision: '$1,000 Ded.', collisionFull: '$1,000 Deductible',
      umUim: '$100K / $300K', rental: '$40/day · $1,200 max',
      roadside: '24 / 7 Included', roadsideBrief: 'Included', rideshare: 'Not Added' },
    payment: { amount: '$142.67', nextDays: 10, cycleDays: 30, historyCount: 3,
      card: 'Visa ending in 8276', cardShort: 'Visa ···· 8276',
      breakdown: { bi: '$48.90', comp: '$20.10', coll: '$40.67', um: '$12.00', roadside: '$6.00', fees: '$15.00' } },
    claims: [
      { title: 'Shopping Cart Ding — Passenger Door', number: 'TN-10284', daysAgo: 30, amount: '$380', label: 'Estimate', status: 'In Review' }
    ],
    agent: { name: 'Amanda Brooks', phone: '(615) 555-0741' }
  },

  // ── Profile 8 ──────────────────────────────────────────
  {
    firstName: 'Sophia', lastName: 'Rivera', email: 'sophia.rivera@email.com',
    chatEmail: 'sophia.rivera@farmers.com', location: 'Charlotte, NC', memberSinceYearsAgo: 5,
    vehicle: { year: '2022', make: 'Mazda', model: 'CX-5', trim: 'Turbo', color: 'Soul Red Crystal',
      body: 'SUV', vin: 'JM3KFBDM5N1604582' },
    policy: { number: 'NC-9012-3458-J', status: 'ACTIVE',
      startDaysAgo: 78, durationDays: 184,
      premium6Mo: '$788.00', premium6MoShort: '$788', monthly: '$131.33' },
    coverage: { bodilyInjury: '$100K / $300K', propertyDamage: '$100,000',
      medicalPay: '$5,000', comprehensive: '$500 Ded.', comprehensiveFull: '$500 Deductible',
      collision: '$500 Ded.', collisionFull: '$500 Deductible',
      umUim: '$100K / $300K', rental: '$40/day · $1,200 max',
      roadside: '24 / 7 Included', roadsideBrief: 'Included', rideshare: 'Added' },
    payment: { amount: '$131.33', nextDays: 22, cycleDays: 30, historyCount: 3,
      card: 'Mastercard ending in 6190', cardShort: 'Mastercard ···· 6190',
      breakdown: { bi: '$44.20', comp: '$18.60', coll: '$38.53', um: '$11.00', roadside: '$5.50', fees: '$13.50' } },
    claims: [
      { title: 'Pothole Damage — Front Wheel & Tire', number: 'NC-84021', daysAgo: 240, amount: '$920', label: 'Paid', status: 'Closed' }
    ],
    agent: { name: 'Kevin Murphy', phone: '(704) 555-0892' }
  },

  // ── Profile 9 ──────────────────────────────────────────
  {
    firstName: 'Tyler', lastName: 'Anderson', email: 'tyler.anderson@email.com',
    chatEmail: 'tyler.anderson@farmers.com', location: 'San Antonio, TX', memberSinceYearsAgo: 6,
    vehicle: { year: '2021', make: 'Toyota', model: 'RAV4', trim: 'XLE', color: 'Lunar Rock',
      body: 'SUV', vin: '2T3P1RFV4MW087391' },
    policy: { number: 'TX-0123-4569-K', status: 'ACTIVE',
      startDaysAgo: 79, durationDays: 184,
      premium6Mo: '$716.00', premium6MoShort: '$716', monthly: '$119.33' },
    coverage: { bodilyInjury: '$50K / $100K', propertyDamage: '$50,000',
      medicalPay: '$5,000', comprehensive: '$500 Ded.', comprehensiveFull: '$500 Deductible',
      collision: '$500 Ded.', collisionFull: '$500 Deductible',
      umUim: '$50K / $100K', rental: '$30/day · $900 max',
      roadside: '24 / 7 Included', roadsideBrief: 'Included', rideshare: 'Not Added' },
    payment: { amount: '$119.33', nextDays: 21, cycleDays: 30, historyCount: 5,
      card: 'Visa ending in 3415', cardShort: 'Visa ···· 3415',
      breakdown: { bi: '$33.60', comp: '$15.00', coll: '$36.73', um: '$9.00', roadside: '$4.50', fees: '$20.50' } },
    claims: [
      { title: 'Minor Collision — Rear Bumper', number: 'TX-88119', daysAgo: 335, amount: '$1,840', label: 'Estimate', status: 'In Review' },
      { title: 'Windshield Crack — Comprehensive', number: 'TX-55442', daysAgo: 570, amount: '$380', label: 'Paid', status: 'Closed' }
    ],
    agent: { name: 'Priya Sharma', phone: '(210) 555-0934' }
  }
];

// ── Helper: get profile index from phone number ──
function getProfileIndex(phone) {
  var digits = (phone || '').replace(/\D/g, '');
  if (!digits.length) return 0;
  return parseInt(digits[digits.length - 1], 10);
}

// ── Helper: computed fields ──
function enrichProfile(p, jdsPerson) {
  // Use JDS name if available, otherwise profile defaults
  var fn = p.firstName;
  var ln = p.lastName;
  if (jdsPerson) {
    fn = (Array.isArray(jdsPerson.firstName) ? jdsPerson.firstName[0] : jdsPerson.firstName) || fn;
    ln = (Array.isArray(jdsPerson.lastName) ? jdsPerson.lastName[0] : jdsPerson.lastName) || ln;
  }
  
  // Compute dates from offsets
  var effectiveDate = _daysFromNow(-p.policy.startDaysAgo);
  var expirationDate = _daysFromNow(-p.policy.startDaysAgo + p.policy.durationDays);
  
  var nextPayDate = _daysFromNow(p.payment.nextDays);
  var lastPayDate = _daysFromNow(p.payment.nextDays - p.payment.cycleDays);
  
  // Build payment history: first entry is upcoming (nextPayDate), rest are paid going backwards
  var history = [];
  history.push({ date: _fmtShort(nextPayDate), amount: p.payment.amount, status: 'upcoming' });
  for (var i = 0; i < p.payment.historyCount; i++) {
    var histDate = _daysFromNow(p.payment.nextDays - (i + 1) * p.payment.cycleDays);
    history.push({ date: _fmtShort(histDate), amount: p.payment.amount, status: 'paid' });
  }
  
  // Compute claim dates
  var computedClaims = p.claims.map(function(c) {
    var claimDate = _daysFromNow(-c.daysAgo);
    return Object.assign({}, c, { date: _fmtShort(claimDate) });
  });
  
  // Compute memberSince
  var memberSince = String(new Date().getFullYear() - p.memberSinceYearsAgo);
  
  // Build the policy object with computed date strings
  var computedPolicy = Object.assign({}, p.policy, {
    effectiveDate: _fmtShort(effectiveDate),
    expirationDate: _fmtShort(expirationDate),
    effectiveFmt: _fmtSlash(effectiveDate),
    expirationFmt: _fmtSlash(expirationDate),
    expirationBrief: _fmtSlashBrief(expirationDate)
  });
  
  // Build the payment object with computed date strings
  var computedPayment = Object.assign({}, p.payment, {
    nextDate: _fmtLong(nextPayDate),
    nextDateShort: _fmtShort(nextPayDate),
    dueInDays: String(p.payment.nextDays),
    lastDate: _fmtLong(lastPayDate),
    lastDateShort: _fmtShort(lastPayDate),
    history: history
  });
  
  var v = p.vehicle;
  return Object.assign({}, p, {
    _firstName: fn,
    _lastName: ln,
    _initials: ((fn[0] || '') + (ln[0] || '')).toUpperCase(),
    _fullName: fn + ' ' + ln,
    _email: (jdsPerson && jdsPerson.email && jdsPerson.email[0]) ? jdsPerson.email[0] : p.email,
    _vehicleShort: v.year + ' ' + v.make + ' ' + v.model,
    _vehicleFull: v.year + ' ' + v.make + ' ' + v.model + ' ' + v.trim,
    _vehicleDesc: v.trim + ' \u00b7 ' + v.color + ' \u00b7 ' + v.body,
    _vehicleYearMake: v.year + ' ' + v.make,
    _vehicleModelTrim: v.model + ' ' + v.trim,
    policy: computedPolicy,
    payment: computedPayment,
    claims: computedClaims,
    memberSince: memberSince
  });
}
