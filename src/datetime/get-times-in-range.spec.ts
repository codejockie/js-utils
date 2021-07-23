import { getTimesInRange } from "@/datetime/get-times-in-range";

describe("getTimesInRange", () => {
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
          expect(() => getTimesInRange(interval, from, to)).toThrow();
        }
      );
    });
  });

  describe("with interval of 45", () => {
    describe("and string time formats", () => {
      test("should get times from 08:30 AM to 10:30 PM", () => {
        // prettier-ignore
        expect(getTimesInRange(45, "8:30 AM", "10:30 PM")).toEqual([
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
        const from = new Date("2018-01-01T00:00:00");
        const to = new Date("2018-01-01T23:59:59");
        // prettier-ignore
        expect(getTimesInRange(45, from, to)).toEqual([
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
});
