import { throttle } from "../app/throttle";

describe("Throttle testing", () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    test("Should work properly", () => {
        const callback = jest.fn();
        const throttled = throttle(callback, 500);
        throttled();
        expect(callback).toHaveBeenCalled();

        jest.advanceTimersByTime(100);
        throttled();
        expect(callback).toHaveBeenCalledTimes(1);

        jest.advanceTimersByTime(400);
        throttled();
        throttled();
        throttled();
        expect(callback).toHaveBeenCalledTimes(2);
    });
});
