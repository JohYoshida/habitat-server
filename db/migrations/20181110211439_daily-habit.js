
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("days", table => {
      table.uuid("id").primary();
      table.string("habitName");
      table.boolean("Jan-1");
      table.boolean("Jan-2");
      table.boolean("Jan-3");
      table.boolean("Jan-4");
      table.boolean("Jan-5");
      table.boolean("Jan-6");
      table.boolean("Jan-7");
      table.boolean("Jan-8");
      table.boolean("Jan-9");
      table.boolean("Jan-10");
      table.boolean("Jan-11");
      table.boolean("Jan-12");
      table.boolean("Jan-13");
      table.boolean("Jan-14");
      table.boolean("Jan-15");
      table.boolean("Jan-16");
      table.boolean("Jan-17");
      table.boolean("Jan-18");
      table.boolean("Jan-19");
      table.boolean("Jan-20");
      table.boolean("Jan-21");
      table.boolean("Jan-22");
      table.boolean("Jan-23");
      table.boolean("Jan-24");
      table.boolean("Jan-25");
      table.boolean("Jan-26");
      table.boolean("Jan-27");
      table.boolean("Jan-28");
      table.boolean("Jan-29");
      table.boolean("Jan-30");
      table.boolean("Jan-31");
      table.boolean("Feb-1");
      table.boolean("Feb-2");
      table.boolean("Feb-3");
      table.boolean("Feb-4");
      table.boolean("Feb-5");
      table.boolean("Feb-6");
      table.boolean("Feb-7");
      table.boolean("Feb-8");
      table.boolean("Feb-9");
      table.boolean("Feb-10");
      table.boolean("Feb-11");
      table.boolean("Feb-12");
      table.boolean("Feb-13");
      table.boolean("Feb-14");
      table.boolean("Feb-15");
      table.boolean("Feb-16");
      table.boolean("Feb-17");
      table.boolean("Feb-18");
      table.boolean("Feb-19");
      table.boolean("Feb-20");
      table.boolean("Feb-21");
      table.boolean("Feb-22");
      table.boolean("Feb-23");
      table.boolean("Feb-24");
      table.boolean("Feb-25");
      table.boolean("Feb-26");
      table.boolean("Feb-27");
      table.boolean("Feb-28");
      table.boolean("Feb-29");
      table.boolean("Mar-1");
      table.boolean("Mar-2");
      table.boolean("Mar-3");
      table.boolean("Mar-4");
      table.boolean("Mar-5");
      table.boolean("Mar-6");
      table.boolean("Mar-7");
      table.boolean("Mar-8");
      table.boolean("Mar-9");
      table.boolean("Mar-10");
      table.boolean("Mar-11");
      table.boolean("Mar-12");
      table.boolean("Mar-13");
      table.boolean("Mar-14");
      table.boolean("Mar-15");
      table.boolean("Mar-16");
      table.boolean("Mar-17");
      table.boolean("Mar-18");
      table.boolean("Mar-19");
      table.boolean("Mar-20");
      table.boolean("Mar-21");
      table.boolean("Mar-22");
      table.boolean("Mar-23");
      table.boolean("Mar-24");
      table.boolean("Mar-25");
      table.boolean("Mar-26");
      table.boolean("Mar-27");
      table.boolean("Mar-28");
      table.boolean("Mar-29");
      table.boolean("Mar-30");
      table.boolean("Mar-31");
      table.boolean("Apr-1");
      table.boolean("Apr-2");
      table.boolean("Apr-3");
      table.boolean("Apr-4");
      table.boolean("Apr-5");
      table.boolean("Apr-6");
      table.boolean("Apr-7");
      table.boolean("Apr-8");
      table.boolean("Apr-9");
      table.boolean("Apr-10");
      table.boolean("Apr-11");
      table.boolean("Apr-12");
      table.boolean("Apr-13");
      table.boolean("Apr-14");
      table.boolean("Apr-15");
      table.boolean("Apr-16");
      table.boolean("Apr-17");
      table.boolean("Apr-18");
      table.boolean("Apr-19");
      table.boolean("Apr-20");
      table.boolean("Apr-21");
      table.boolean("Apr-22");
      table.boolean("Apr-23");
      table.boolean("Apr-24");
      table.boolean("Apr-25");
      table.boolean("Apr-26");
      table.boolean("Apr-27");
      table.boolean("Apr-28");
      table.boolean("Apr-29");
      table.boolean("Apr-30");
      table.boolean("May-1");
      table.boolean("May-2");
      table.boolean("May-3");
      table.boolean("May-4");
      table.boolean("May-5");
      table.boolean("May-6");
      table.boolean("May-7");
      table.boolean("May-8");
      table.boolean("May-9");
      table.boolean("May-10");
      table.boolean("May-11");
      table.boolean("May-12");
      table.boolean("May-13");
      table.boolean("May-14");
      table.boolean("May-15");
      table.boolean("May-16");
      table.boolean("May-17");
      table.boolean("May-18");
      table.boolean("May-19");
      table.boolean("May-20");
      table.boolean("May-21");
      table.boolean("May-22");
      table.boolean("May-23");
      table.boolean("May-24");
      table.boolean("May-25");
      table.boolean("May-26");
      table.boolean("May-27");
      table.boolean("May-28");
      table.boolean("May-29");
      table.boolean("May-30");
      table.boolean("May-31");
      table.boolean("Jun-1");
      table.boolean("Jun-2");
      table.boolean("Jun-3");
      table.boolean("Jun-4");
      table.boolean("Jun-5");
      table.boolean("Jun-6");
      table.boolean("Jun-7");
      table.boolean("Jun-8");
      table.boolean("Jun-9");
      table.boolean("Jun-10");
      table.boolean("Jun-11");
      table.boolean("Jun-12");
      table.boolean("Jun-13");
      table.boolean("Jun-14");
      table.boolean("Jun-15");
      table.boolean("Jun-16");
      table.boolean("Jun-17");
      table.boolean("Jun-18");
      table.boolean("Jun-19");
      table.boolean("Jun-20");
      table.boolean("Jun-21");
      table.boolean("Jun-22");
      table.boolean("Jun-23");
      table.boolean("Jun-24");
      table.boolean("Jun-25");
      table.boolean("Jun-26");
      table.boolean("Jun-27");
      table.boolean("Jun-28");
      table.boolean("Jun-29");
      table.boolean("Jun-30");
      table.boolean("Jul-1");
      table.boolean("Jul-2");
      table.boolean("Jul-3");
      table.boolean("Jul-4");
      table.boolean("Jul-5");
      table.boolean("Jul-6");
      table.boolean("Jul-7");
      table.boolean("Jul-8");
      table.boolean("Jul-9");
      table.boolean("Jul-10");
      table.boolean("Jul-11");
      table.boolean("Jul-12");
      table.boolean("Jul-13");
      table.boolean("Jul-14");
      table.boolean("Jul-15");
      table.boolean("Jul-16");
      table.boolean("Jul-17");
      table.boolean("Jul-18");
      table.boolean("Jul-19");
      table.boolean("Jul-20");
      table.boolean("Jul-21");
      table.boolean("Jul-22");
      table.boolean("Jul-23");
      table.boolean("Jul-24");
      table.boolean("Jul-25");
      table.boolean("Jul-26");
      table.boolean("Jul-27");
      table.boolean("Jul-28");
      table.boolean("Jul-29");
      table.boolean("Jul-30");
      table.boolean("Jul-31");
      table.boolean("Aug-1");
      table.boolean("Aug-2");
      table.boolean("Aug-3");
      table.boolean("Aug-4");
      table.boolean("Aug-5");
      table.boolean("Aug-6");
      table.boolean("Aug-7");
      table.boolean("Aug-8");
      table.boolean("Aug-9");
      table.boolean("Aug-10");
      table.boolean("Aug-11");
      table.boolean("Aug-12");
      table.boolean("Aug-13");
      table.boolean("Aug-14");
      table.boolean("Aug-15");
      table.boolean("Aug-16");
      table.boolean("Aug-17");
      table.boolean("Aug-18");
      table.boolean("Aug-19");
      table.boolean("Aug-20");
      table.boolean("Aug-21");
      table.boolean("Aug-22");
      table.boolean("Aug-23");
      table.boolean("Aug-24");
      table.boolean("Aug-25");
      table.boolean("Aug-26");
      table.boolean("Aug-27");
      table.boolean("Aug-28");
      table.boolean("Aug-29");
      table.boolean("Aug-30");
      table.boolean("Aug-31");
      table.boolean("Sep-1");
      table.boolean("Sep-2");
      table.boolean("Sep-3");
      table.boolean("Sep-4");
      table.boolean("Sep-5");
      table.boolean("Sep-6");
      table.boolean("Sep-7");
      table.boolean("Sep-8");
      table.boolean("Sep-9");
      table.boolean("Sep-10");
      table.boolean("Sep-11");
      table.boolean("Sep-12");
      table.boolean("Sep-13");
      table.boolean("Sep-14");
      table.boolean("Sep-15");
      table.boolean("Sep-16");
      table.boolean("Sep-17");
      table.boolean("Sep-18");
      table.boolean("Sep-19");
      table.boolean("Sep-20");
      table.boolean("Sep-21");
      table.boolean("Sep-22");
      table.boolean("Sep-23");
      table.boolean("Sep-24");
      table.boolean("Sep-25");
      table.boolean("Sep-26");
      table.boolean("Sep-27");
      table.boolean("Sep-28");
      table.boolean("Sep-29");
      table.boolean("Sep-30");
      table.boolean("Oct-1");
      table.boolean("Oct-2");
      table.boolean("Oct-3");
      table.boolean("Oct-4");
      table.boolean("Oct-5");
      table.boolean("Oct-6");
      table.boolean("Oct-7");
      table.boolean("Oct-8");
      table.boolean("Oct-9");
      table.boolean("Oct-10");
      table.boolean("Oct-11");
      table.boolean("Oct-12");
      table.boolean("Oct-13");
      table.boolean("Oct-14");
      table.boolean("Oct-15");
      table.boolean("Oct-16");
      table.boolean("Oct-17");
      table.boolean("Oct-18");
      table.boolean("Oct-19");
      table.boolean("Oct-20");
      table.boolean("Oct-21");
      table.boolean("Oct-22");
      table.boolean("Oct-23");
      table.boolean("Oct-24");
      table.boolean("Oct-25");
      table.boolean("Oct-26");
      table.boolean("Oct-27");
      table.boolean("Oct-28");
      table.boolean("Oct-29");
      table.boolean("Oct-30");
      table.boolean("Oct-31");
      table.boolean("Nov-1");
      table.boolean("Nov-2");
      table.boolean("Nov-3");
      table.boolean("Nov-4");
      table.boolean("Nov-5");
      table.boolean("Nov-6");
      table.boolean("Nov-7");
      table.boolean("Nov-8");
      table.boolean("Nov-9");
      table.boolean("Nov-10");
      table.boolean("Nov-11");
      table.boolean("Nov-12");
      table.boolean("Nov-13");
      table.boolean("Nov-14");
      table.boolean("Nov-15");
      table.boolean("Nov-16");
      table.boolean("Nov-17");
      table.boolean("Nov-18");
      table.boolean("Nov-19");
      table.boolean("Nov-20");
      table.boolean("Nov-21");
      table.boolean("Nov-22");
      table.boolean("Nov-23");
      table.boolean("Nov-24");
      table.boolean("Nov-25");
      table.boolean("Nov-26");
      table.boolean("Nov-27");
      table.boolean("Nov-28");
      table.boolean("Nov-29");
      table.boolean("Nov-30");
      table.boolean("Dec-1");
      table.boolean("Dec-2");
      table.boolean("Dec-3");
      table.boolean("Dec-4");
      table.boolean("Dec-5");
      table.boolean("Dec-6");
      table.boolean("Dec-7");
      table.boolean("Dec-8");
      table.boolean("Dec-9");
      table.boolean("Dec-10");
      table.boolean("Dec-11");
      table.boolean("Dec-12");
      table.boolean("Dec-13");
      table.boolean("Dec-14");
      table.boolean("Dec-15");
      table.boolean("Dec-16");
      table.boolean("Dec-17");
      table.boolean("Dec-18");
      table.boolean("Dec-19");
      table.boolean("Dec-20");
      table.boolean("Dec-21");
      table.boolean("Dec-22");
      table.boolean("Dec-23");
      table.boolean("Dec-24");
      table.boolean("Dec-25");
      table.boolean("Dec-26");
      table.boolean("Dec-27");
      table.boolean("Dec-28");
      table.boolean("Dec-29");
      table.boolean("Dec-30");
      table.boolean("Dec-31");
    }),
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists("days"),
  ]);
};