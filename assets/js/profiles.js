// ── Farmers Insurance Demo — 10 Unique Customer Profiles ──
// Selected by last digit of phone number (0–9)
// Usage: const profile = DEMO_PROFILES[lastDigit];

const DEMO_PROFILES = [
  // ── Profile 0 ──────────────────────────────────────────
  {
    firstName: 'Maria', lastName: 'Santos', email: 'maria.santos@email.com',
    chatEmail: 'maria.santos@farmers.com', location: 'Phoenix, AZ', memberSince: '2021',
    vehicle: { year: '2023', make: 'Honda', model: 'Civic', trim: 'EX', color: 'Sonic Gray',
      body: '4-door Sedan', vin: '2HGFE2F59PH524130' },
    policy: { number: 'AZ-1234-5670-A', status: 'ACTIVE',
      effectiveDate: 'Mar 1, 2025', expirationDate: 'Sep 1, 2025',
      effectiveFmt: '03/01/2025', expirationFmt: '09/01/2025', expirationBrief: '09/01/25',
      premium6Mo: '$682.00', premium6MoShort: '$682', monthly: '$113.67' },
    coverage: { bodilyInjury: '$50K / $100K', propertyDamage: '$50,000',
      medicalPay: '$5,000', comprehensive: '$250 Ded.', comprehensiveFull: '$250 Deductible',
      collision: '$500 Ded.', collisionFull: '$500 Deductible',
      umUim: '$50K / $100K', rental: '$30/day · $900 max',
      roadside: '24 / 7 Included', roadsideBrief: 'Included', rideshare: 'Not Added' },
    payment: { amount: '$113.67', nextDate: 'August 1, 2025', nextDateShort: 'Aug 1, 2025',
      dueInDays: '18', lastDate: 'July 1, 2025', lastDateShort: 'Jul 1, 2025',
      card: 'Mastercard ending in 7832', cardShort: 'Mastercard ···· 7832',
      breakdown: { bi: '$32.10', comp: '$14.80', coll: '$35.22', um: '$8.55', roadside: '$4.00', fees: '$19.00' },
      history: [
        { date: 'Aug 1, 2025', amount: '$113.67', status: 'upcoming' },
        { date: 'Jul 1, 2025', amount: '$113.67', status: 'paid' },
        { date: 'Jun 1, 2025', amount: '$113.67', status: 'paid' },
        { date: 'May 1, 2025', amount: '$113.67', status: 'paid' },
        { date: 'Apr 1, 2025', amount: '$113.67', status: 'paid' },
        { date: 'Mar 1, 2025', amount: '$113.67', status: 'paid' }
      ] },
    claims: [
      { title: 'Parking Lot Scratch — Driver Door', number: '2024-AZ-44210', date: 'Aug 15, 2024', amount: '$620', label: 'Estimate', status: 'In Review' }
    ],
    agent: { name: 'Sarah Johnson', phone: '(602) 555-0142' }
  },

  // ── Profile 1 ──────────────────────────────────────────
  {
    firstName: 'James', lastName: 'Mitchell', email: 'james.mitchell@email.com',
    chatEmail: 'james.mitchell@farmers.com', location: 'Dallas, TX', memberSince: '2018',
    vehicle: { year: '2022', make: 'Ford', model: 'F-150', trim: 'XLT', color: 'Oxford White',
      body: 'Crew Cab Truck', vin: '1FTFW1E85NFA32847' },
    policy: { number: 'TX-2345-6781-B', status: 'ACTIVE',
      effectiveDate: 'Jan 15, 2025', expirationDate: 'Jul 15, 2025',
      effectiveFmt: '01/15/2025', expirationFmt: '07/15/2025', expirationBrief: '07/15/25',
      premium6Mo: '$894.00', premium6MoShort: '$894', monthly: '$149.00' },
    coverage: { bodilyInjury: '$100K / $300K', propertyDamage: '$100,000',
      medicalPay: '$10,000', comprehensive: '$500 Ded.', comprehensiveFull: '$500 Deductible',
      collision: '$500 Ded.', collisionFull: '$500 Deductible',
      umUim: '$100K / $300K', rental: '$50/day · $1,500 max',
      roadside: '24 / 7 Included', roadsideBrief: 'Included', rideshare: 'Not Added' },
    payment: { amount: '$149.00', nextDate: 'July 15, 2025', nextDateShort: 'Jul 15, 2025',
      dueInDays: '12', lastDate: 'June 15, 2025', lastDateShort: 'Jun 15, 2025',
      card: 'Visa ending in 4291', cardShort: 'Visa ···· 4291',
      breakdown: { bi: '$52.40', comp: '$22.10', coll: '$42.50', um: '$12.00', roadside: '$7.50', fees: '$12.50' },
      history: [
        { date: 'Jul 15, 2025', amount: '$149.00', status: 'upcoming' },
        { date: 'Jun 15, 2025', amount: '$149.00', status: 'paid' },
        { date: 'May 15, 2025', amount: '$149.00', status: 'paid' },
        { date: 'Apr 15, 2025', amount: '$149.00', status: 'paid' },
        { date: 'Mar 15, 2025', amount: '$149.00', status: 'paid' },
        { date: 'Feb 15, 2025', amount: '$149.00', status: 'paid' }
      ] },
    claims: [
      { title: 'Deer Collision — Front End', number: '2024-TX-71205', date: 'Mar 10, 2024', amount: '$4,250', label: 'Paid', status: 'Closed' },
      { title: 'Hail Damage — Hood & Roof', number: '2023-TX-58930', date: 'May 22, 2023', amount: '$3,100', label: 'Paid', status: 'Closed' }
    ],
    agent: { name: 'Mike Torres', phone: '(214) 555-0198' }
  },

  // ── Profile 2 ──────────────────────────────────────────
  {
    firstName: 'Aisha', lastName: 'Patel', email: 'aisha.patel@email.com',
    chatEmail: 'aisha.patel@farmers.com', location: 'Austin, TX', memberSince: '2023',
    vehicle: { year: '2024', make: 'Tesla', model: 'Model 3', trim: 'Long Range', color: 'Midnight Silver',
      body: '4-door Sedan', vin: '5YJ3E1EA5RF123456' },
    policy: { number: 'TX-3456-7892-C', status: 'ACTIVE',
      effectiveDate: 'Apr 1, 2025', expirationDate: 'Oct 1, 2025',
      effectiveFmt: '04/01/2025', expirationFmt: '10/01/2025', expirationBrief: '10/01/25',
      premium6Mo: '$968.00', premium6MoShort: '$968', monthly: '$161.33' },
    coverage: { bodilyInjury: '$250K / $500K', propertyDamage: '$100,000',
      medicalPay: '$10,000', comprehensive: '$1,000 Ded.', comprehensiveFull: '$1,000 Deductible',
      collision: '$1,000 Ded.', collisionFull: '$1,000 Deductible',
      umUim: '$250K / $500K', rental: '$50/day · $1,500 max',
      roadside: '24 / 7 Included', roadsideBrief: 'Included', rideshare: 'Added' },
    payment: { amount: '$161.33', nextDate: 'August 1, 2025', nextDateShort: 'Aug 1, 2025',
      dueInDays: '25', lastDate: 'July 1, 2025', lastDateShort: 'Jul 1, 2025',
      card: 'Amex ending in 3156', cardShort: 'Amex ···· 3156',
      breakdown: { bi: '$58.20', comp: '$28.40', coll: '$44.73', um: '$14.00', roadside: '$6.00', fees: '$10.00' },
      history: [
        { date: 'Aug 1, 2025', amount: '$161.33', status: 'upcoming' },
        { date: 'Jul 1, 2025', amount: '$161.33', status: 'paid' },
        { date: 'Jun 1, 2025', amount: '$161.33', status: 'paid' },
        { date: 'May 1, 2025', amount: '$161.33', status: 'paid' },
        { date: 'Apr 1, 2025', amount: '$161.33', status: 'paid' }
      ] },
    claims: [],
    agent: { name: 'David Chen', phone: '(512) 555-0277' }
  },

  // ── Profile 3 ──────────────────────────────────────────
  {
    firstName: 'Robert', lastName: 'Garcia', email: 'robert.garcia@email.com',
    chatEmail: 'robert.garcia@farmers.com', location: 'Houston, TX', memberSince: '2020',
    vehicle: { year: '2021', make: 'Chevrolet', model: 'Equinox', trim: 'LT', color: 'Mosaic Black',
      body: 'SUV', vin: '3GNAXKEV0MS604215' },
    policy: { number: 'TX-4567-8903-D', status: 'ACTIVE',
      effectiveDate: 'Feb 1, 2025', expirationDate: 'Aug 1, 2025',
      effectiveFmt: '02/01/2025', expirationFmt: '08/01/2025', expirationBrief: '08/01/25',
      premium6Mo: '$724.00', premium6MoShort: '$724', monthly: '$120.67' },
    coverage: { bodilyInjury: '$50K / $100K', propertyDamage: '$50,000',
      medicalPay: '$5,000', comprehensive: '$500 Ded.', comprehensiveFull: '$500 Deductible',
      collision: '$500 Ded.', collisionFull: '$500 Deductible',
      umUim: '$50K / $100K', rental: '$30/day · $900 max',
      roadside: '24 / 7 Included', roadsideBrief: 'Included', rideshare: 'Not Added' },
    payment: { amount: '$120.67', nextDate: 'August 1, 2025', nextDateShort: 'Aug 1, 2025',
      dueInDays: '30', lastDate: 'July 1, 2025', lastDateShort: 'Jul 1, 2025',
      card: 'Visa ending in 9104', cardShort: 'Visa ···· 9104',
      breakdown: { bi: '$34.20', comp: '$15.80', coll: '$37.67', um: '$9.00', roadside: '$4.50', fees: '$19.50' },
      history: [
        { date: 'Aug 1, 2025', amount: '$120.67', status: 'upcoming' },
        { date: 'Jul 1, 2025', amount: '$120.67', status: 'paid' },
        { date: 'Jun 1, 2025', amount: '$120.67', status: 'paid' },
        { date: 'May 1, 2025', amount: '$120.67', status: 'paid' },
        { date: 'Apr 1, 2025', amount: '$120.67', status: 'paid' },
        { date: 'Mar 1, 2025', amount: '$120.67', status: 'paid' }
      ] },
    claims: [
      { title: 'Side Mirror Hit — Parking Garage', number: '2023-TX-62041', date: 'Sep 5, 2023', amount: '$450', label: 'Paid', status: 'Closed' }
    ],
    agent: { name: 'Lisa Patel', phone: '(713) 555-0365' }
  },

  // ── Profile 4 ──────────────────────────────────────────
  {
    firstName: 'Emily', lastName: 'Thornton', email: 'emily.thornton@email.com',
    chatEmail: 'emily.thornton@farmers.com', location: 'Scottsdale, AZ', memberSince: '2017',
    vehicle: { year: '2020', make: 'BMW', model: '330i', trim: 'xDrive', color: 'Alpine White',
      body: '4-door Sedan', vin: 'WBA5R1C08LFH92034' },
    policy: { number: 'AZ-5678-9014-E', status: 'ACTIVE',
      effectiveDate: 'May 1, 2025', expirationDate: 'Nov 1, 2025',
      effectiveFmt: '05/01/2025', expirationFmt: '11/01/2025', expirationBrief: '11/01/25',
      premium6Mo: '$1,124.00', premium6MoShort: '$1,124', monthly: '$187.33' },
    coverage: { bodilyInjury: '$100K / $300K', propertyDamage: '$100,000',
      medicalPay: '$10,000', comprehensive: '$500 Ded.', comprehensiveFull: '$500 Deductible',
      collision: '$500 Ded.', collisionFull: '$500 Deductible',
      umUim: '$100K / $300K', rental: '$50/day · $1,500 max',
      roadside: '24 / 7 Included', roadsideBrief: 'Included', rideshare: 'Not Added' },
    payment: { amount: '$187.33', nextDate: 'August 1, 2025', nextDateShort: 'Aug 1, 2025',
      dueInDays: '14', lastDate: 'July 1, 2025', lastDateShort: 'Jul 1, 2025',
      card: 'Mastercard ending in 2847', cardShort: 'Mastercard ···· 2847',
      breakdown: { bi: '$62.80', comp: '$32.50', coll: '$55.03', um: '$15.00', roadside: '$8.00', fees: '$14.00' },
      history: [
        { date: 'Aug 1, 2025', amount: '$187.33', status: 'upcoming' },
        { date: 'Jul 1, 2025', amount: '$187.33', status: 'paid' },
        { date: 'Jun 1, 2025', amount: '$187.33', status: 'paid' },
        { date: 'May 1, 2025', amount: '$187.33', status: 'paid' }
      ] },
    claims: [
      { title: 'Rear-End Collision — Bumper & Trunk', number: '2024-AZ-91002', date: 'Jan 18, 2025', amount: '$3,200', label: 'Estimate', status: 'In Review' },
      { title: 'Rock Chip — Windshield', number: '2023-AZ-73841', date: 'Jul 30, 2023', amount: '$285', label: 'Paid', status: 'Closed' },
      { title: 'Vandalism — Keyed Panels', number: '2022-AZ-51090', date: 'Dec 4, 2022', amount: '$1,950', label: 'Paid', status: 'Closed' }
    ],
    agent: { name: 'Robert Kim', phone: '(480) 555-0419' }
  },

  // ── Profile 5 ──────────────────────────────────────────
  {
    firstName: 'Daniel', lastName: 'Nguyen', email: 'daniel.nguyen@email.com',
    chatEmail: 'daniel.nguyen@farmers.com', location: 'Denver, CO', memberSince: '2022',
    vehicle: { year: '2023', make: 'Hyundai', model: 'Tucson', trim: 'SEL', color: 'Amazon Gray',
      body: 'SUV', vin: '5NMJFDAF2PH108723' },
    policy: { number: 'CO-6789-0125-F', status: 'ACTIVE',
      effectiveDate: 'Jun 1, 2025', expirationDate: 'Dec 1, 2025',
      effectiveFmt: '06/01/2025', expirationFmt: '12/01/2025', expirationBrief: '12/01/25',
      premium6Mo: '$698.00', premium6MoShort: '$698', monthly: '$116.33' },
    coverage: { bodilyInjury: '$100K / $300K', propertyDamage: '$50,000',
      medicalPay: '$5,000', comprehensive: '$250 Ded.', comprehensiveFull: '$250 Deductible',
      collision: '$500 Ded.', collisionFull: '$500 Deductible',
      umUim: '$100K / $300K', rental: '$40/day · $1,200 max',
      roadside: '24 / 7 Included', roadsideBrief: 'Included', rideshare: 'Not Added' },
    payment: { amount: '$116.33', nextDate: 'September 1, 2025', nextDateShort: 'Sep 1, 2025',
      dueInDays: '45', lastDate: 'August 1, 2025', lastDateShort: 'Aug 1, 2025',
      card: 'Visa ending in 5563', cardShort: 'Visa ···· 5563',
      breakdown: { bi: '$38.80', comp: '$15.50', coll: '$32.03', um: '$10.00', roadside: '$5.00', fees: '$15.00' },
      history: [
        { date: 'Sep 1, 2025', amount: '$116.33', status: 'upcoming' },
        { date: 'Aug 1, 2025', amount: '$116.33', status: 'paid' },
        { date: 'Jul 1, 2025', amount: '$116.33', status: 'paid' },
        { date: 'Jun 1, 2025', amount: '$116.33', status: 'paid' }
      ] },
    claims: [],
    agent: { name: 'Maria Gonzalez', phone: '(303) 555-0588' }
  },

  // ── Profile 6 ──────────────────────────────────────────
  {
    firstName: 'Jennifer', lastName: 'Brooks', email: 'jennifer.brooks@email.com',
    chatEmail: 'jennifer.brooks@farmers.com', location: 'Portland, OR', memberSince: '2016',
    vehicle: { year: '2019', make: 'Subaru', model: 'Outback', trim: 'Premium', color: 'Crystal White',
      body: 'Wagon', vin: '4S4BSANC7K3347291' },
    policy: { number: 'OR-7890-1236-G', status: 'ACTIVE',
      effectiveDate: 'Apr 15, 2025', expirationDate: 'Oct 15, 2025',
      effectiveFmt: '04/15/2025', expirationFmt: '10/15/2025', expirationBrief: '10/15/25',
      premium6Mo: '$652.00', premium6MoShort: '$652', monthly: '$108.67' },
    coverage: { bodilyInjury: '$50K / $100K', propertyDamage: '$50,000',
      medicalPay: '$5,000', comprehensive: '$500 Ded.', comprehensiveFull: '$500 Deductible',
      collision: '$500 Ded.', collisionFull: '$500 Deductible',
      umUim: '$50K / $100K', rental: '$30/day · $900 max',
      roadside: '24 / 7 Included', roadsideBrief: 'Included', rideshare: 'Not Added' },
    payment: { amount: '$108.67', nextDate: 'July 15, 2025', nextDateShort: 'Jul 15, 2025',
      dueInDays: '8', lastDate: 'June 15, 2025', lastDateShort: 'Jun 15, 2025',
      card: 'Discover ending in 4401', cardShort: 'Discover ···· 4401',
      breakdown: { bi: '$30.20', comp: '$14.00', coll: '$33.47', um: '$8.00', roadside: '$4.00', fees: '$19.00' },
      history: [
        { date: 'Jul 15, 2025', amount: '$108.67', status: 'upcoming' },
        { date: 'Jun 15, 2025', amount: '$108.67', status: 'paid' },
        { date: 'May 15, 2025', amount: '$108.67', status: 'paid' },
        { date: 'Apr 15, 2025', amount: '$108.67', status: 'paid' }
      ] },
    claims: [
      { title: 'Tree Branch Damage — Roof', number: '2024-OR-38910', date: 'Feb 14, 2024', amount: '$1,800', label: 'Paid', status: 'Closed' },
      { title: 'Fender Bender — Intersection', number: '2021-OR-22045', date: 'Oct 3, 2021', amount: '$2,100', label: 'Paid', status: 'Closed' }
    ],
    agent: { name: 'James Wilson', phone: '(503) 555-0623' }
  },

  // ── Profile 7 ──────────────────────────────────────────
  {
    firstName: 'Marcus', lastName: 'Williams', email: 'marcus.williams@email.com',
    chatEmail: 'marcus.williams@farmers.com', location: 'Nashville, TN', memberSince: '2024',
    vehicle: { year: '2024', make: 'Kia', model: 'Telluride', trim: 'SX', color: 'Everlasting Silver',
      body: 'SUV', vin: '5XYP5DHC4RG201847' },
    policy: { number: 'TN-8901-2347-H', status: 'ACTIVE',
      effectiveDate: 'Mar 15, 2025', expirationDate: 'Sep 15, 2025',
      effectiveFmt: '03/15/2025', expirationFmt: '09/15/2025', expirationBrief: '09/15/25',
      premium6Mo: '$856.00', premium6MoShort: '$856', monthly: '$142.67' },
    coverage: { bodilyInjury: '$100K / $300K', propertyDamage: '$100,000',
      medicalPay: '$5,000', comprehensive: '$1,000 Ded.', comprehensiveFull: '$1,000 Deductible',
      collision: '$1,000 Ded.', collisionFull: '$1,000 Deductible',
      umUim: '$100K / $300K', rental: '$40/day · $1,200 max',
      roadside: '24 / 7 Included', roadsideBrief: 'Included', rideshare: 'Not Added' },
    payment: { amount: '$142.67', nextDate: 'July 15, 2025', nextDateShort: 'Jul 15, 2025',
      dueInDays: '10', lastDate: 'June 15, 2025', lastDateShort: 'Jun 15, 2025',
      card: 'Visa ending in 8276', cardShort: 'Visa ···· 8276',
      breakdown: { bi: '$48.90', comp: '$20.10', coll: '$40.67', um: '$12.00', roadside: '$6.00', fees: '$15.00' },
      history: [
        { date: 'Jul 15, 2025', amount: '$142.67', status: 'upcoming' },
        { date: 'Jun 15, 2025', amount: '$142.67', status: 'paid' },
        { date: 'May 15, 2025', amount: '$142.67', status: 'paid' },
        { date: 'Apr 15, 2025', amount: '$142.67', status: 'paid' }
      ] },
    claims: [
      { title: 'Shopping Cart Ding — Passenger Door', number: '2025-TN-10284', date: 'Apr 2, 2025', amount: '$380', label: 'Estimate', status: 'In Review' }
    ],
    agent: { name: 'Amanda Brooks', phone: '(615) 555-0741' }
  },

  // ── Profile 8 ──────────────────────────────────────────
  {
    firstName: 'Sophia', lastName: 'Rivera', email: 'sophia.rivera@email.com',
    chatEmail: 'sophia.rivera@farmers.com', location: 'Charlotte, NC', memberSince: '2020',
    vehicle: { year: '2022', make: 'Mazda', model: 'CX-5', trim: 'Turbo', color: 'Soul Red Crystal',
      body: 'SUV', vin: 'JM3KFBDM5N1604582' },
    policy: { number: 'NC-9012-3458-J', status: 'ACTIVE',
      effectiveDate: 'May 15, 2025', expirationDate: 'Nov 15, 2025',
      effectiveFmt: '05/15/2025', expirationFmt: '11/15/2025', expirationBrief: '11/15/25',
      premium6Mo: '$788.00', premium6MoShort: '$788', monthly: '$131.33' },
    coverage: { bodilyInjury: '$100K / $300K', propertyDamage: '$100,000',
      medicalPay: '$5,000', comprehensive: '$500 Ded.', comprehensiveFull: '$500 Deductible',
      collision: '$500 Ded.', collisionFull: '$500 Deductible',
      umUim: '$100K / $300K', rental: '$40/day · $1,200 max',
      roadside: '24 / 7 Included', roadsideBrief: 'Included', rideshare: 'Added' },
    payment: { amount: '$131.33', nextDate: 'August 15, 2025', nextDateShort: 'Aug 15, 2025',
      dueInDays: '22', lastDate: 'July 15, 2025', lastDateShort: 'Jul 15, 2025',
      card: 'Mastercard ending in 6190', cardShort: 'Mastercard ···· 6190',
      breakdown: { bi: '$44.20', comp: '$18.60', coll: '$38.53', um: '$11.00', roadside: '$5.50', fees: '$13.50' },
      history: [
        { date: 'Aug 15, 2025', amount: '$131.33', status: 'upcoming' },
        { date: 'Jul 15, 2025', amount: '$131.33', status: 'paid' },
        { date: 'Jun 15, 2025', amount: '$131.33', status: 'paid' },
        { date: 'May 15, 2025', amount: '$131.33', status: 'paid' }
      ] },
    claims: [
      { title: 'Pothole Damage — Front Wheel & Tire', number: '2024-NC-84021', date: 'Nov 20, 2024', amount: '$920', label: 'Paid', status: 'Closed' }
    ],
    agent: { name: 'Kevin Murphy', phone: '(704) 555-0892' }
  },

  // ── Profile 9 ──────────────────────────────────────────
  {
    firstName: 'Tyler', lastName: 'Anderson', email: 'tyler.anderson@email.com',
    chatEmail: 'tyler.anderson@farmers.com', location: 'San Antonio, TX', memberSince: '2019',
    vehicle: { year: '2021', make: 'Toyota', model: 'RAV4', trim: 'XLE', color: 'Lunar Rock',
      body: 'SUV', vin: '2T3P1RFV4MW087391' },
    policy: { number: 'TX-0123-4569-K', status: 'ACTIVE',
      effectiveDate: 'May 14, 2025', expirationDate: 'Nov 14, 2025',
      effectiveFmt: '05/14/2025', expirationFmt: '11/14/2025', expirationBrief: '11/14/25',
      premium6Mo: '$716.00', premium6MoShort: '$716', monthly: '$119.33' },
    coverage: { bodilyInjury: '$50K / $100K', propertyDamage: '$50,000',
      medicalPay: '$5,000', comprehensive: '$500 Ded.', comprehensiveFull: '$500 Deductible',
      collision: '$500 Ded.', collisionFull: '$500 Deductible',
      umUim: '$50K / $100K', rental: '$30/day · $900 max',
      roadside: '24 / 7 Included', roadsideBrief: 'Included', rideshare: 'Not Added' },
    payment: { amount: '$119.33', nextDate: 'July 14, 2025', nextDateShort: 'Jul 14, 2025',
      dueInDays: '21', lastDate: 'June 14, 2025', lastDateShort: 'Jun 14, 2025',
      card: 'Visa ending in 3415', cardShort: 'Visa ···· 3415',
      breakdown: { bi: '$33.60', comp: '$15.00', coll: '$36.73', um: '$9.00', roadside: '$4.50', fees: '$20.50' },
      history: [
        { date: 'Jul 14, 2025', amount: '$119.33', status: 'upcoming' },
        { date: 'Jun 14, 2025', amount: '$119.33', status: 'paid' },
        { date: 'May 14, 2025', amount: '$119.33', status: 'paid' },
        { date: 'Apr 14, 2025', amount: '$119.33', status: 'paid' },
        { date: 'Mar 14, 2025', amount: '$119.33', status: 'paid' },
        { date: 'Feb 14, 2025', amount: '$119.33', status: 'paid' }
      ] },
    claims: [
      { title: 'Minor Collision — Rear Bumper', number: '2024-TX-88119', date: 'Jun 2, 2024', amount: '$1,840', label: 'Estimate', status: 'In Review' },
      { title: 'Windshield Crack — Comprehensive', number: '2023-TX-55442', date: 'Nov 8, 2023', amount: '$380', label: 'Paid', status: 'Closed' }
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
    _vehicleModelTrim: v.model + ' ' + v.trim
  });
}
