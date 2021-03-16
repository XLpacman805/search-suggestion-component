const Throttle = (func, limit) => {
    let isThrottled;
    return function() {
        if (!isThrottled) {
            func.apply(this, arguments);
            isThrottled = true;
            setTimeout(() => isThrottled = false, limit);
        }
    }
}

export {Throttle}

