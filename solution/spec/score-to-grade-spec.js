"use strict";
describe("grade calculate", function () {

    it("should return S when input is 99", function () {
        expect(gradeCalculate(99)).toBe("S");
    });

    it("should return A when input is 85", function () {
        expect(gradeCalculate(85)).toBe("A");
    });

    it("should return B when input is 75", function () {
        expect(gradeCalculate(75)).toBe("B");
    });

    it("should return C when input is 65", function () {
        expect(gradeCalculate(65)).toBe("C");
    });

    it("should return D when input is 50", function () {
        expect(gradeCalculate(50)).toBe("D");
    });

    it("should return Invalid input when input is 101", function () {
        expect(gradeCalculate(101)).toBe("Invalid input");
    });

    it("should return Invalid input when input is -1", function () {
        expect(gradeCalculate(-1)).toBe("Invalid input");
    });

});

