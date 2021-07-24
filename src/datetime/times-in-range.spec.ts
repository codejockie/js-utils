import { timesInRange } from "@/datetime/times-in-range";

describe("timesInRange", () => {
  describe("validations", () => {
    describe("with invalid arguments", () => {
      test.each`
        interval     | from         | to
        ${null}      | ${null}      | ${null}
        ${undefined} | ${null}      | ${null}
        ${-15}       | ${"8:30 AM"} | ${"10:30 PM"}
        ${0}         | ${"8:30 AM"} | ${"10:30 PM"}
        ${null}      | ${"8:30 AM"} | ${"10:30 PM"}
        ${undefined} | ${"8:30 AM"} | ${"10:30 PM"}
      `(
        "should throw for interval: $interval, from: $from, to: $to",
        ({ interval, from, to }) => {
          expect(() => timesInRange(interval, from, to)).toThrow();
        }
      );
    });
  });

  describe("meridiem time format", () => {
    describe("with interval of 45", () => {
      describe("and string time formats", () => {
        test("should get times from 08:30 AM to 10:30 PM", () => {
          // prettier-ignore
          expect(timesInRange(45, "8:30 AM", "10:30 PM")).toEqual([
          "08:30 AM", "09:15 AM",
          "10:00 AM", "10:45 AM",
          "11:30 AM", "12:15 PM",
          "01:00 PM", "01:45 PM",
          "02:30 PM", "03:15 PM",
          "04:00 PM", "04:45 PM",
          "05:30 PM", "06:15 PM",
          "07:00 PM", "07:45 PM",
          "08:30 PM", "09:15 PM",
          "10:00 PM"
        ]);
        });
      });

      describe("and Date time formats", () => {
        test("should get times between 00:00 to 23:59", () => {
          const from = new Date("2021-07-23T00:00:00");
          const to = new Date("2021-07-23T23:59:59");
          // prettier-ignore
          expect(timesInRange(45, from, to)).toEqual([
          "00:00 AM", "00:45 AM", "01:30 AM",
          "02:15 AM", "03:00 AM", "03:45 AM",
          "04:30 AM", "05:15 AM", "06:00 AM",
          "06:45 AM", "07:30 AM", "08:15 AM",
          "09:00 AM", "09:45 AM", "10:30 AM",
          "11:15 AM", "12:00 PM", "12:45 PM",
          "01:30 PM", "02:15 PM", "03:00 PM",
          "03:45 PM", "04:30 PM", "05:15 PM",
          "06:00 PM", "06:45 PM", "07:30 PM",
          "08:15 PM", "09:00 PM", "09:45 PM",
          "10:30 PM", "11:15 PM",
        ]);
        });
      });
    });

    describe("with interval of 50", () => {
      test("should get times from 08:30 AM to 10:30 PM", () => {
        // prettier-ignore
        expect(timesInRange(50, "8:30 AM", "10:30 PM")).toEqual([
          "08:30 AM", "09:20 AM", "10:10 AM", "11:00 AM",
          "11:50 AM", "12:40 PM", "01:30 PM", "02:20 PM",
          "03:10 PM", "04:00 PM", "04:50 PM", "05:40 PM",
          "06:30 PM", "07:20 PM", "08:10 PM", "09:00 PM",
          "09:50 PM",
        ]);
      });
    });

    describe("with interval of 30", () => {
      test("should get times from 08:30 AM to 10:30 PM", () => {
        // prettier-ignore
        expect(timesInRange(30, "8:30 AM", "10:30 PM")).toEqual([
          "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
          "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM",
          "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
          "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM",
          "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM",
          "09:00 PM", "09:30 PM", "10:00 PM",
        ]);
      });
    });
  });

  describe("24 hour time format", () => {
    describe("with interval of 15", () => {
      test("should get times from 06:00 to 08:30", () => {
        // prettier-ignore
        expect(timesInRange(15, "06:00", "08:30")).toEqual([
        "06:00 AM", "06:15 AM", "06:30 AM", "06:45 AM", "07:00 AM",
        "07:15 AM", "07:30 AM", "07:45 AM", "08:00 AM", "08:15 AM",
      ]);
      });
    });

    describe("with interval of 10", () => {
      test("should get times from 06:00 to 08:30", () => {
        // prettier-ignore
        expect(timesInRange(10, "06:00", "08:30")).toEqual([
        "06:00 AM", "06:10 AM", "06:20 AM", "06:30 AM", "06:40 AM", "06:50 AM",
        "07:00 AM", "07:10 AM", "07:20 AM", "07:30 AM", "07:40 AM", "07:50 AM",
        "08:00 AM", "08:10 AM", "08:20 AM",
      ]);
      });
    });

    describe("with interval of 5", () => {
      test("should get times from 06:00 to 08:30", () => {
        // prettier-ignore
        expect(timesInRange(5, "06:00", "08:30")).toEqual([
        "06:00 AM", "06:05 AM", "06:10 AM", "06:15 AM", "06:20 AM", "06:25 AM",
        "06:30 AM", "06:35 AM", "06:40 AM", "06:45 AM", "06:50 AM", "06:55 AM",
        "07:00 AM", "07:05 AM", "07:10 AM", "07:15 AM", "07:20 AM", "07:25 AM",
        "07:30 AM", "07:35 AM", "07:40 AM", "07:45 AM", "07:50 AM", "07:55 AM",
        "08:00 AM", "08:05 AM", "08:10 AM", "08:15 AM", "08:20 AM", "08:25 AM",
      ]);
      });
    });
  });
});
